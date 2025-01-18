import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { format } from 'date-fns';

interface SitemapURL {
    loc: string;
    lastmod: string;
    changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
}

export async function updateSitemap(newKittenUrl: string) {
    const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
    
    try {
        // Read existing sitemap
        const existingSitemap = await fetch('/sitemap.xml').then(res => res.text());
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(existingSitemap, 'text/xml');
        
        // Check if URL already exists
        const urls = xmlDoc.getElementsByTagName('url');
        for (let url of Array.from(urls)) {
            const loc = url.getElementsByTagName('loc')[0].textContent;
            if (loc === newKittenUrl) {
                return; // URL already exists
            }
        }

        // Create new URL entry
        const newUrl: SitemapURL = {
            loc: newKittenUrl,
            lastmod: format(new Date(), 'yyyy-MM-dd'),
            changefreq: 'weekly',
            priority: 0.8
        };

        // Create XML string for new entry
        const urlXml = `
  <url>
    <loc>${newUrl.loc}</loc>
    <lastmod>${newUrl.lastmod}</lastmod>
    <changefreq>${newUrl.changefreq}</changefreq>
    <priority>${newUrl.priority}</priority>
  </url>`;

        // Insert new URL before closing urlset tag
        const updatedContent = existingSitemap.replace('</urlset>', `${urlXml}\n</urlset>`);

        // Write updated sitemap
        await writeFile(sitemapPath, updatedContent, 'utf-8');
        
        console.log(`Sitemap updated with new kitten URL: ${newKittenUrl}`);
    } catch (error) {
        console.error('Error updating sitemap:', error);
        throw error;
    }
}
