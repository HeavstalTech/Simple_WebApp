/* 
  HEAVSTAL TECH OPEN SOURCE - COMPONENT EXAMPLE (FOOTER)
  ------------------------------------------------------
  This file demonstrates how to structure reusable UI components.
  
  Best Practices:
  - Keep components in a separate 'components' folder.
  - Use 'client' components only when interactivity (onClick, useState) is needed.
  - This specific component is a Server Component (default) for better performance.
*/

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 mt-auto border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center text-sm text-gray-500 dark:text-gray-400">
        <p>
          © 2025 - {currentYear} 
          <span className="font-semibold text-gray-800 dark:text-gray-200 ml-1">
            Heavstal Tech
          </span>. 
          Open Source.
        </p>
        
        <span className="hidden sm:inline-block mx-2">|</span>
        
        <p className="mt-2 sm:mt-0">
          Built with Next.js & PWA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
