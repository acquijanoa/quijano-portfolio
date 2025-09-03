import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
  const lastMod = new Date().toISOString();

  return [
    { url: `${base}/`, lastModified: lastMod, changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/research`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/visualizations`, lastModified: lastMod, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/cv`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.7 },
  ];
}
