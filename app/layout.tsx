/* 
  HEAVSTAL TECH OPEN SOURCE - ROOT LAYOUT
  ---------------------------------------
  This is the skeleton of your application.
  
  Key Features Added:
  1. SEO Metadata: Titles, descriptions, and PWA manifest linking.
  2. JSON-LD: Structured data to help Google understand your site is a Software Application.
  3. Viewport: Settings to ensure the app feels like a native mobile app (non-scalable).
  4. Global Layout: The Footer is placed here so it appears on every page.
*/

import type { Metadata, Viewport } from "next";
import "./globals.css";
import Footer from "@/components/Footer"; // Importing our reusable component

export const metadata: Metadata = {
  title: "Simple WebApp | Heavstal Tech",
  description: "A simple Open-Source Next.js WebApp with built-in PWA capabilities.",
  manifest: "/manifest.json",
  icons: {
    // These paths match standard favicon.io output
    icon: "/favicon.ico", 
    shortcut: "/icons/android-chrome-192x192.png",
    apple: "/icons/android-chrome-192x192.png", 
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Prevents zooming, giving a "native app" feel
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  // JSON-LD Structured Data for SEO
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
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Injecting the JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {/* Main Content Area */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer Component (Visible on all pages) */}
        <Footer />
      </body>
    </html>
  );
}
