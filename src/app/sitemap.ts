import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const headersList = await headers();
  const host = headersList.get('host');
  return [
    { url: `https://${host}`, lastModified: new Date() },
    { url: `https://${host}/about`, lastModified: new Date() },
    { url: `https://${host}/resume`, lastModified: new Date() },
  ];
}
