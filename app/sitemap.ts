/* 
  HEAVSTAL TECH OPEN SOURCE - SITEMAP.XML
  ---------------------------------------
  This file dynamically generates a sitemap.xml.
  
  Why use this?
  - It lists all your important URLs for Google.
  - You can define how often pages change (changeFrequency).
  - You can set priority (1.0 is highest).
*/

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // Change this to your actual base URL
  const baseUrl = 'https://simple-webapp-ht.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    // Example of how to add another page:
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: new Date(),
    //   changeFrequency: 'monthly',
    //   priority: 0.8,
    // },
  ];
}
