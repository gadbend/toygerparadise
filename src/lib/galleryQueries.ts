import { supabase } from './supabase';
import type { CatGalleryImage, GalleryImageInsert } from '../types/gallery';
import { processImage } from './imageProcessor';

export async function getGalleryImages(category?: 'toyger' | 'bengal'): Promise<CatGalleryImage[]> {
  try {
    console.log('Fetching images for category:', category); // Debug log
    
    const query = supabase
      .from('cat_gallery')
      .select('*');

    if (category) {
      query.eq('category', category.toLowerCase());
    }

    query.order('created_at', { ascending: false });

    const { data, error } = await query;

    if (error) {
      console.error('Supabase error:', error); // Debug log
      throw error;
    }

    console.log('Fetched data:', data); // Debug log
    return data || [];
  } catch (err) {
    console.error('Error in getGalleryImages:', err);
    throw err;
  }
}

export async function addGalleryImage(image: GalleryImageInsert): Promise<CatGalleryImage> {
  const { data, error } = await supabase
    .from('cat_gallery')
    .insert([image])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function deleteGalleryImage(id: string): Promise<void> {
  const { error } = await supabase
    .from('cat_gallery')
    .delete()
    .eq('id', id);

  if (error) {
    throw error;
  }
}

export async function uploadGalleryImage(
  file: File,
  info: { breed: 'toyger' | 'bengal', title: string }
): Promise<string> {
  try {
    // Process image with WebP conversion
    const processedImage = await processImage(file, {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 0.92,
      useWebP: true,
      preserveExif: true
    });

    // Clean and format the breed and title
    const cleanBreed = info.breed
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-]+/g, '')
      .trim();

    const cleanTitle = info.title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9-]+/g, '')
      .trim();

    // Generate unique ID (6 characters)
    const uniqueId = Math.random().toString(36).substring(2, 8);

    // Generate SEO-friendly filename: [breed]-for-adoption-sale-[name]-[unique-id].webp
    const fileName = `${cleanBreed}-for-adoption-sale-${cleanTitle}-${uniqueId}.webp`;
    const filePath = `gallery/${fileName}`;

    // Upload the processed image
    const { error: uploadError } = await supabase.storage
      .from('images')
      .upload(filePath, processedImage.blob, {
        contentType: processedImage.format,
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw uploadError;
    }

    // Get the public URL
    const { data } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error in uploadGalleryImage:', error);
    throw error;
  }
}

export async function updateGalleryImage(id: string, updates: { title?: string; description?: string }) {
  try {
    const { data, error } = await supabase
      .from('cat_gallery')
      .update(updates)
      .eq('id', id);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error updating gallery image:', error);
    throw error;
  }
}
