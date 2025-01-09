import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Kitten } from "@/types/database";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateKittenSlug(name: string, breed: string): string {
  return `${name}-${breed}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export async function updateSitemap(kittens: Kitten[]) {
  try {
    const response = await fetch('/api/updateSitemap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ kittens }),
    });

    if (!response.ok) {
      throw new Error('Failed to update sitemap');
    }
  } catch (error) {
    console.error('Error updating sitemap:', error);
  }
}
