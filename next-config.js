/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',         // Where to output the service worker
  register: true,        // Register SW automatically
  skipWaiting: true,     // Update app immediately when new version is available
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev
});

const nextConfig = {
  reactStrictMode: true,

  images: {
    remotePatterns: [
      // Accept Images From Any website, configure to choice
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

module.exports = withPWA(nextConfig);
