import withPWA from '@ducanh2912/next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image whitelist
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }, // Allowed Host // Currently Allows All Host // It's recommended to specify host so Next.js can block thr rest
    ],
  },
};

// PWA configuration
export default withPWA({
  ...nextConfig,
  dest: 'public',                       // Service worker output
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: process.env.NODE_ENV === 'development', // Disable PWA in dev
  workboxOptions: {
    disableDevLogs: true,
  },
});
