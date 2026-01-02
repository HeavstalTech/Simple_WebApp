// This file shows a re-useable CodeBlock components 
'use client';

import { useState } from 'react';
import { Check, Copy, Terminal } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeBlockProps {
  language: string;
  code: string;
}

export default function CodeBlock({ language, code }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-cyan-900/50 bg-[#0d1117] shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-800 bg-[#161b22] px-4 py-2">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <div className="h-4 w-[1px] bg-gray-700 mx-2"></div>
          <Terminal size={12} className="text-cyan-500" />
          <span className="text-xs font-bold uppercase text-gray-400 font-mono">
            {language || 'TEXT'}
          </span>
        </div>
        
        <button 
          onClick={handleCopy}
          className="group flex items-center gap-1.5 rounded px-2 py-1 transition-colors hover:bg-gray-800"
        >
          {copied ? (
            <>
              <Check size={14} className="text-green-400" />
              <span className="text-[10px] font-bold text-green-400">COPIED</span>
            </>
          ) : (
            <>
              <Copy size={14} className="text-gray-500 group-hover:text-white" />
              <span className="text-[10px] font-bold text-gray-500 group-hover:text-white">COPY</span>
            </>
          )}
        </button>
      </div>

      {/* The Actual Code Engine */}
      <div className="text-base">
        <SyntaxHighlighter
          language={language.toLowerCase()}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '1.5rem',
            background: 'transparent',
            fontSize: '14px', 
            lineHeight: '1.6',
            overflowX: 'auto', 
          }}
          wrapLongLines={true}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
