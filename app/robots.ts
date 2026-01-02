/* 
  HEAVSTAL TECH OPEN SOURCE - ROBOTS.TXT
  --------------------------------------
  This file dynamically generates the robots.txt file.
  
  What it does:
  - Tells search engine crawlers (Googlebot) which pages they can access.
  - "Allow: /" means crawl everything.
  - "Disallow: /private/" would block a folder named private.
*/

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Change this to your actual base URL in production
  const baseUrl = 'https://simple-web-app.vercel.app'; 

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/api/', // Usually, we don't want Google crawling our API endpoints
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
