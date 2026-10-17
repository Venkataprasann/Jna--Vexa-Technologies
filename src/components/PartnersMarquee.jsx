// src/components/PartnersMarquee.jsx
import React from 'react';
import { hiringPartners } from '../data/placementsData';

export default function PartnersMarquee() {
  return (
    <section className="py-20 bg-[#060709] border-b border-white/5 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
        <p className="text-xs uppercase tracking-widest font-semibold text-gray-500">
          Our Trainees Work At 450+ Tier-1 Product MNCs & Fast-Growing Tech Unicorns
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Subtle gradient side fades */}
        <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#060709] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#060709] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max animate-marquee">
          {/* First loop */}
          <div className="flex items-center space-x-12 px-6">
            {hiringPartners.map((partner, idx) => (
              <div
                key={`p1-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0e1118] border border-white/5 hover:border-blue-500/30 transition group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:scale-125 transition"></div>
                <div>
                  <span className="text-base font-extrabold text-gray-200 group-hover:text-white transition tracking-tight">
                    {partner.name}
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Duplicate loop for infinite continuous scroll */}
          <div className="flex items-center space-x-12 px-6" aria-hidden="true">
            {hiringPartners.map((partner, idx) => (
              <div
                key={`p2-${idx}`}
                className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#0e1118] border border-white/5 hover:border-blue-500/30 transition group"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500/50 group-hover:bg-blue-400 group-hover:scale-125 transition"></div>
                <div>
                  <span className="text-base font-extrabold text-gray-200 group-hover:text-white transition tracking-tight">
                    {partner.name}
                  </span>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider font-mono">
                    {partner.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
