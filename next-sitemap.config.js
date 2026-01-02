/**
 * HEAVSTAL TECH OPEN SOURCE - NEXT-SITEMAP CONFIGURATION
 * -------------------------------------------------------
 * This file configures the 'next-sitemap' package.
 * 
 * It automatically generates a sitemap.xml and robots.txt file 
 * after your project builds. This is crucial for SEO so Google 
 * can crawl your pages.
 * 
 * IMPORTANT: Change 'siteUrl' to your actual production domain.
 */

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://simple-web-app.vercel.app', // REPLACE WITH YOUR DOMAIN
  generateRobotsTxt: true, // Generate robots.txt file
  generateIndexSitemap: false, // Set to true for very large sites
  sitemapSize: 7000,
}
