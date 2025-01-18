import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { format } from 'date-fns';
import type { Kitten } from '../../src/types/database';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { kittens } = req.body;
    const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');

    // Generate sitemap content
    const sitemapContent = generateSitemapXml(kittens);

    // Write the updated sitemap
    await writeFile(sitemapPath, sitemapContent, 'utf-8');

    res.status(200).json({ message: 'Sitemap updated successfully' });
  } catch (error) {
    console.error('Error updating sitemap:', error);
    res.status(500).json({ message: 'Error updating sitemap' });
  }
}

function generateSitemapXml(kittens: Kitten[]): string {
  const baseUrl = 'https://toygerparadise.com';
  const today = format(new Date(), 'yyyy-MM-dd');

  // Static pages
  const staticUrls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/breeds/toyger', priority: '0.9', changefreq: 'weekly' },
    { loc: '/breeds/bengal', priority: '0.9', changefreq: 'weekly' },
    { loc: '/adoption', priority: '0.8', changefreq: 'weekly' },
    { loc: '/about-us', priority: '0.7', changefreq: 'monthly' },
  ];

  // Generate kitten URLs
  const kittenUrls = kittens.map(kitten => ({
    loc: `/adoption/${kitten.id}`,
    priority: '0.8',
    changefreq: 'weekly'
  }));

  // Combine all URLs
  const allUrls = [...staticUrls, ...kittenUrls];

  // Generate XML
  const urlsXml = allUrls
    .map(url => `
  <url>
    <loc>${baseUrl}${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`)
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlsXml}
</urlset>`;
}
