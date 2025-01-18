import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Kitten } from "@/types/database";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateKittenSlug(name: string, id: string, breed: string): string {
  if (!id || id === 'default') {
    throw new Error('Valid ID is required for slug generation');
  }

  // Clean and format the breed
  const cleanBreed = breed
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]+/g, '')
    .trim();

  // Clean and format the name
  const cleanName = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]+/g, '')
    .trim();

  // Always use exactly 6 characters of ID
  const shortId = id.slice(0, 6);

  // Create SEO-friendly slug: [breed]-for-sale-[name]-[uniqueID]
  return `${cleanBreed}-for-sale-${cleanName}-${shortId}`;
}

export async function updateSitemap(kittens: Kitten[]) {
  try {
    // In development, just log what would happen
    if (import.meta.env.DEV) {
      console.log('Development mode: Would update sitemap with kittens:', kittens);
      return;
    }

    // In production, call the API endpoint
    const response = await fetch('/api/updateSitemap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ kittens }),
    });

    if (!response.ok) {
      throw new Error(`Failed to update sitemap: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Sitemap updated successfully:', result);
  } catch (error) {
    console.error('Error updating sitemap:', error);
  }
}
