import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://taxclerk.co.uk';
  const pages = [
    '',
    '/about',
    '/lawyers',
    '/licensed-access',
    '/public-access',
    '/tax',
    '/barristers',
    '/fees',
    '/contact',
    '/work-with-us',
    '/privacy',
  ];

  return pages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
