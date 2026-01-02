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
import CodeBlock from "@/components/CodeBlock";
import { 
  Rocket, 
  Smartphone, 
  Search, 
  Layers, 
  GitBranch, 
  Github, 
  BookOpen 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      
      {/* 1. HERO SECTION (Current Stuff) */}
      <section id="intro" className="relative flex flex-col items-center justify-center pt-20 pb-16 px-6 sm:pt-32 text-center">
        <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-fade-in">
          v1.1.0 • Open Source PWA Boilerplate
        </div>
        
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl mb-6 max-w-4xl bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
          Build Your Next.js PWA <br className="hidden sm:block" />
          <span className="text-blue-600 dark:text-blue-500">In Minutes, Not Days.</span>
        </h1>
        
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
          The ultimate boilerplate featuring Next.js 16, Tailwind CSS, 
          Automated SEO, and native Offline PWA support. Stop configuring, start coding.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a
            href="https://github.com/HeavstalTech/Simple_WebApp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <Github size={20} />
            Star on GitHub
          </a>
          <Link
            href="#installation"
            className="flex items-center justify-center gap-2 bg-gray-200 dark:bg-gray-800 text-foreground px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
          >
            <Rocket size={20} />
            Get Started
          </Link>
        </div>
      </section>

      {/* STICKY NAV BAR */}
      <div className="sticky top-0 z-50 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 overflow-x-auto no-scrollbar">
          <nav className="flex items-center gap-1 sm:gap-6 py-4 min-w-max">
            <NavLink href="#intro" label="Overview" />
            <NavLink href="#features" label="Features" />
            <NavLink href="#installation" label="Installation" />
            <NavLink href="#structure" label="Structure" />
            <NavLink href="#contributing" label="Contributing" />
          </nav>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* 2. README CONTENT */}
        <section id="features" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Layers className="text-blue-500" />
            Everything You Need
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<Smartphone className="text-purple-500" />}
              title="PWA Ready"
              desc="Installable on mobile/desktop. Works offline with service workers powered by @ducanh2912/next-pwa."
            />
            <FeatureCard 
              icon={<Search className="text-green-500" />}
              title="SEO Automated"
              desc="Pre-configured next-sitemap, robots.txt, and JSON-LD Structured Data for maximum Google visibility."
            />
            <FeatureCard 
              icon={<Rocket className="text-red-500" />}
              title="Modern Stack"
              desc="Built on Next.js 16 (App Router), React 18+, TypeScript 5, and Tailwind CSS."
            />
            <FeatureCard 
              icon={<BookOpen className="text-yellow-500" />}
              title="Developer Experience"
              desc="ESLint, Prettier, and GitHub Actions CI/CD pipeline pre-configured for quality control."
            />
          </div>
        </section>

        <section id="installation" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Rocket className="text-blue-500" />
            Installation
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Get your app running in less than 2 minutes.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Clone the repository</h3>
              <CodeBlock language="bash" code="git clone https://github.com/HeavstalTech/Simple_WebApp.git" />
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. Install dependencies</h3>
              <CodeBlock language="bash" code="npm install" />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. Run development server</h3>
              <CodeBlock language="bash" code="npm run dev" />
            </div>
          </div>
        </section>

        <section id="structure" className="scroll-mt-24">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Layers className="text-blue-500" />
            Project Structure
          </h2>
          <CodeBlock language="text" code={`├── app/                # Next.js App Router
│   ├── api/            # Backend API routes
│   ├── robots.ts       # SEO: Robots.txt
│   └── sitemap.ts      # SEO: Sitemap
├── components/         # Reusable UI components
├── public/             # Static assets (PWA icons)
├── next.config.mjs     # PWA Configuration
└── tailwind.config.ts  # Styling`} />
        </section>

        {/* 3. CONTRIBUTING CONTENT */}
        <section id="contributing" className="scroll-mt-24 pb-20">
          <div className="bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <GitBranch className="text-blue-500" />
              Become a Contributor
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              This project is open source and we love contributions. Here is how you can help:
            </p>

            <ol className="list-decimal list-inside space-y-4 text-gray-700 dark:text-gray-300 mb-8">
              <li>Fork the repository on GitHub.</li>
              <li>Clone your fork locally.</li>
              <li>Create a new branch for your feature.</li>
              <li>Make your changes and commit them.</li>
              <li>Push to your fork and open a Pull Request.</li>
            </ol>

            <CodeBlock language="bash" code={`# Example workflow
git checkout -b feature/amazing-feature
git commit -m "Add amazing feature"
git push origin feature/amazing-feature`} />

            <div className="mt-8 flex gap-4">
              <a 
                href="https://github.com/HeavstalTech/Simple_WebApp/blob/main/CONTRIBUTING.md" 
                target="_blank"
                className="text-blue-600 hover:underline font-semibold"
              >
                Read full guidelines &rarr;
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

// Sub-components for cleaner code
function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <a 
      href={href} 
      className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors whitespace-nowrap"
    >
      {label}
    </a>
  );
}

function FeatureCard({ icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-black/20 hover:border-blue-500/50 transition-colors">
      <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="font-bold text-xl mb-2">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
