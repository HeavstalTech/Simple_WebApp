/* 
  HEAVSTAL TECH OPEN SOURCE - ROOT LAYOUT
  ---------------------------------------
  This is the skeleton of your application.
  
  Key Features Added:
  1. SEO Metadata: Titles, descriptions, and PWA manifest linking.
  2. JSON-LD: Structured data to help Google understand your site is a Software Application.
  3. Viewport: Settings to ensure the app feels like a native mobile app (non-scalable).
  4. Global Layout: The Footer is placed here so it appears on everywhere
  5. This layout is configured for maximum SEO and Social Sharing visibility.
*/

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

// 1. VIEWPORT CONFIGURATION (PWA Standard)
export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

// 2. METADATA CONFIGURATION (SEO & Socials)
export const metadata: Metadata = {
  metadataBase: new URL("https://simple-webapp-ht.vercel.app"), 

  title: {
    default: "Simple WebApp | Heavstal Tech",
    template: "%s | Heavstal Tech",
  },
  description: "A simple Open-Source Next.js WebApp with built-in PWA capabilities.",
  applicationName: "Simple WebApp",
  authors: [{ name: "Heavstal Tech", url: "https://github.com/HeavstalTech" }],
  generator: "Next.js",
  keywords: ["Next.js", "PWA", "Boilerplate", "Open Source", "React", "Heavstal"],
  referrer: "origin-when-cross-origin",
  creator: "Heavstal Tech",
  publisher: "Heavstal Tech",
  
  // ROBOTS (Google Indexing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ICONS (The full Favicon.io suite)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/manifest.json",

  // OPEN GRAPH (Facebook, LinkedIn, Discord, WhatsApp previews)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simple-webapp-ht.vercel.app",
    title: "Simple WebApp | Heavstal Tech",
    description: "Build your Next.js PWA in minutes. Open Source boilerplate.",
    siteName: "Simple WebApp",
    images: [
      {
        url: "/icons/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Simple WebApp Logo",
      },
    ],
  },

  // TWITTER / X CARDS
  twitter: {
    card: "summary_large_image",
    title: "Simple WebApp | Heavstal Tech",
    description: "Build your Next.js PWA in minutes. Open Source boilerplate.",
    images: ["/icons/android-chrome-512x512.png"],
    creator: "@Heavstal_Tech",
  },

  // APPLE WEB APP (iOS Specifics)
  appleWebApp: {
    capable: true,
    title: "Simple WebApp",
    statusBarStyle: "black-translucent",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD Structured Data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Heavstal Simple WebApp",
    "operatingSystem": "Any",
    "applicationCategory": "UtilitiesApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Heavstal Tech",
      "url": "https://heavstal-tech.vercel.app"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
