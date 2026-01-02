/* 
  HEAVSTAL TECH OPEN SOURCE - HOME PAGE
  -------------------------------------
  This is the entry point of your application (route: /).
  
  What users see here:
  - A clean introduction to the boilerplate.
  - Explanations of the tech stack (Next.js, PWA, Tailwind).
  - Call-to-actions to view the source code.
  
  Styling:
  - Uses Tailwind CSS utility classes (e.g., 'text-4xl', 'flex', 'gap-4').
*/

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      {/* Hero Section */}
      <section className="flex flex-col gap-6 items-center text-center max-w-2xl">
        <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium">
          Open Source v1.0
        </div>
        
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground">
          Simple <span className="text-blue-600 dark:text-blue-500">WebApp</span>
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          A production-ready template by <strong>Heavstal Tech</strong>. 
          Fork this repository to jumpstart your Next.js project with built-in 
          PWA support, SEO optimization, and a scalable folder structure.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-row gap-4 mt-4">
          <a
            className="rounded-full bg-foreground text-background px-6 py-3 font-semibold transition hover:opacity-90 flex items-center gap-2"
            href="https://github.com/HeavstalTech/Simple_WebApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg height="20" width="20" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Star on GitHub
          </a>
          
          <Link
            href="/api/health"
            className="rounded-full border border-gray-300 dark:border-gray-700 px-6 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Test API Route
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 w-full max-w-4xl text-left">
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/20">
          <h3 className="font-bold text-xl mb-2">PWA Ready</h3>
          <p className="text-sm text-gray-500">
            Installable on mobile and desktop. Includes manifest.json, icons setup, and service worker configuration.
          </p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/20">
          <h3 className="font-bold text-xl mb-2">SEO Optimized</h3>
          <p className="text-sm text-gray-500">
            Pre-configured with <code>next-sitemap</code>, robots.txt, and JSON-LD structured data for better indexing.
          </p>
        </div>
        <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-black/20">
          <h3 className="font-bold text-xl mb-2">Scalable</h3>
          <p className="text-sm text-gray-500">
            Organized folder structure with dedicated <code>components</code>, <code>api</code>, and <code>lib</code> directories.
          </p>
        </div>
      </section>

    </div>
  );
}
