import { supabase } from "./supabase";
import type { Database } from "@/types/database";
import { processImage } from "./imageProcessor";

export async function getKittens() {
  const { data, error } = await supabase
    .from("kittens")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw error;
  return data;
}

export async function getKittenById(id: string) {
  const { data, error } = await supabase
    .from("kittens")
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw error;
  return data;
}

export async function addKitten(
  kitten: Database["public"]["Tables"]["kittens"]["Insert"],
) {
  const { data, error } = await supabase
    .from("kittens")
    .insert(kitten)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateKitten(
  id: string,
  updates: Database["public"]["Tables"]["kittens"]["Update"],
) {
  const { data, error } = await supabase
    .from("kittens")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteKitten(id: string) {
  try {
    // First get the kitten to get its image URLs
    const { data: kitten, error: fetchError } = await supabase
      .from("kittens")
      .select("images")
      .eq("id", id)
      .single();

    if (fetchError) throw fetchError;

    if (kitten?.images && kitten.images.length > 0) {
      // Extract file paths from URLs and delete from storage
      const filePaths = kitten.images.map(url => {
        const urlParts = url.split('/');
        const fileName = urlParts[urlParts.length - 1];
        return `kittens/${fileName}`;
      });

      const { error: storageError } = await supabase.storage
        .from("images")
        .remove(filePaths);

      if (storageError) {
        console.error("Error deleting images:", storageError);
      }
    }

    // Delete the kitten record from the database
    const { error: deleteError } = await supabase
      .from("kittens")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;
  } catch (error) {
    console.error("Error in deleteKitten:", error);
    throw error;
  }
}

export async function uploadKittenImages(
  files: File[],
  kittenInfo: { breed: 'Toyger' | 'Bengal'; name: string }
): Promise<string[]> {
  const uploadPromises = Array.from(files).map(async (file, index) => {
    try {
      // Process image with WebP conversion
      const processedImage = await processImage(file, {
        maxWidth: 1920,
        maxHeight: 1080,
        quality: 0.92,
        useWebP: true,
        preserveExif: true
      });
      
      // Generate SEO-friendly filename
      const uniqueId = Math.random().toString(36).substring(2, 8);
      const fileName = `${kittenInfo.breed}-for-sale-${kittenInfo.name.toLowerCase()}-${uniqueId}.webp`;
      const filePath = `kittens/${fileName}`;

      // Create a Blob with the processed image
      const { error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, processedImage.blob, {
          contentType: processedImage.format,
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) {
        console.error('Upload error:', uploadError);
        throw uploadError;
      }

      const { data } = supabase.storage.from("images").getPublicUrl(filePath);
      return data.publicUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  });

  return Promise.all(uploadPromises);
}

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const { error } = await supabase.functions.invoke("send-email", {
    body: formData,
  });

  if (error) throw error;
}
