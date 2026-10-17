// src/components/MarqueeTicker.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function MarqueeTicker() {
  const items = [
    "Enterprise Full Stack Java",
    "Generative AI & LLM Agents",
    "100% Placement Assistance",
    "Cloud DevOps & Kubernetes",
    "450+ MNC Hiring Partners",
    "Highest CTC: 44.5 LPA",
    "Next.js 15 & MERN Cloud",
    "Big Data & Snowflake Lakehouse",
    "1-on-1 Ex-FAANG Mock Interviews",
    "Real Enterprise Capstone Projects",
    "Weekend Batches For Working Pros",
    "Weekday Fast-Track For Freshers"
  ];

  return (
    <div className="relative w-full py-5 bg-[#0b0d13] border-y border-white/5 overflow-hidden select-none">
      {/* Subtle fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0b0d13] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0b0d13] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max animate-marquee">
        {/* First Loop */}
        <div className="flex items-center space-x-8 px-4">
          {items.map((item, idx) => (
            <div key={`loop1-${idx}`} className="flex items-center space-x-8">
              <span className="text-sm font-bold tracking-wider uppercase text-gray-300 hover:text-blue-400 transition cursor-default flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></span>
            </div>
          ))}
        </div>

        {/* Second Loop for seamless infinite loop */}
        <div className="flex items-center space-x-8 px-4" aria-hidden="true">
          {items.map((item, idx) => (
            <div key={`loop2-${idx}`} className="flex items-center space-x-8">
              <span className="text-sm font-bold tracking-wider uppercase text-gray-300 hover:text-blue-400 transition cursor-default flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
