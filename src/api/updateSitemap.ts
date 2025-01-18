import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import type { Kitten } from '@/types/database';

function generateKittenSlug(description: string, id: string, breed: string): string {
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

  // Split description into words and take first 3 meaningful words
  const words = description
    .toLowerCase()
    .split(/\s+/)
    .filter(word => 
      !['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with'].includes(word)
    )
    .slice(0, 3);

  // Join the words and clean the result
  const cleanDesc = words
    .join('-')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9-]+/g, '')
    .replace(/^-+|-+$/g, '');

  // Always use exactly 8 characters of ID, pad with zeros if needed
  const shortId = id.padEnd(8, '0').slice(0, 8);

  return `${cleanBreed}-${cleanDesc}-${shortId}`;
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { kittens } = req.body as { kittens: Kitten[] };
    const baseUrl = 'https://toygerparadise.com';
    const today = new Date().toISOString().split('T')[0];
    
    // Static pages with their priorities and change frequencies
    const staticPages = [
      { url: '', priority: '1.0', changefreq: 'weekly' },
      { url: '/breeds/toyger', priority: '0.9', changefreq: 'weekly' },
      { url: '/breeds/bengal', priority: '0.9', changefreq: 'weekly' },
      { url: '/adoption', priority: '0.8', changefreq: 'daily' },
      { url: '/about-us', priority: '0.7', changefreq: 'monthly' },
      { url: '/contact', priority: '0.7', changefreq: 'monthly' },
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('')}
  ${kittens.map(kitten => {
    const slug = generateKittenSlug(kitten.description || '', kitten.id, kitten.breed);
    return `
  <url>
    <loc>${baseUrl}/adoption/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`;
  }).join('')}
</urlset>`;

    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent, 'utf8');

    return res.status(200).json({ message: 'Sitemap updated successfully' });
  } catch (error) {
    console.error('Error updating sitemap:', error);
    return res.status(500).json({ message: 'Error updating sitemap' });
  }
}
