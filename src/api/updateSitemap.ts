import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import type { Kitten } from '@/types/database';

function generateKittenSlug(name: string, breed: string): string {
  return `${name}-${breed}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default async function handler(req: Request, res: Response) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { kittens } = req.body as { kittens: Kitten[] };
    const baseUrl = 'https://paradisetoygersandbengals.com';
    const today = new Date().toISOString().split('T')[0];
    
    const staticUrls = [
      '',
      '/adoption',
      '/breeds/toyger',
      '/breeds/bengal',
      '/contact',
    ];

    const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticUrls.map(url => `
  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${kittens.map(kitten => `
  <url>
    <loc>${baseUrl}/cats/${generateKittenSlug(kitten.name, kitten.breed)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;

    const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(sitemapPath, xmlContent, 'utf8');

    res.status(200).json({ message: 'Sitemap updated successfully' });
  } catch (error) {
    console.error('Error updating sitemap:', error);
    res.status(500).json({ message: 'Error updating sitemap' });
  }
}
