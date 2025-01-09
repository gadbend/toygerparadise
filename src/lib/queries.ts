import { supabase } from "./supabase";
import type { Database } from "@/types/database";

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
  const { error } = await supabase.from("kittens").delete().eq("id", id);

  if (error) throw error;
}

export async function uploadKittenImages(files: FileList) {
  const uploadPromises = Array.from(files).map(async (file) => {
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.jpg`;
    const filePath = `kittens/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from("images")
      .upload(filePath, file, {
        contentType: 'image/jpeg',
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    const { data } = supabase.storage.from("images").getPublicUrl(filePath);
    return data.publicUrl;
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
