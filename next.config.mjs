import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Accept all image sources
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }, // Allow all hosts // It recommended to specify the hosts to allow so next.js can block the rest
    ],
  },
};

// PWA configuration
const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === "development", // Disable PWA in dev mode
  workboxOptions: {
    disableDevLogs: true,
  },
});
