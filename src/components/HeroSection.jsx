// src/components/HeroSection.jsx
import React from 'react';
import { ArrowUpRight, Sparkles, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HeroSection({ setActivePage, onOpenEnrollment }) {
  return (
    <section className="relative min-h-[920px] lg:min-h-[960px] flex flex-col justify-between overflow-hidden bg-sky-500 pt-10 select-none">
      
      {/* 1. Authentic Blue Sky with Clouds Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-hero.avif')` }}
      ></div>

      {/* 2. Authentic Aentoria Giant Ghost Watermark Title rising behind the hills */}
      <div className="absolute bottom-40 sm:bottom-48 left-0 right-0 text-center pointer-events-none z-0">
        <span className="text-[13vw] font-black uppercase tracking-tight text-white/20 leading-none select-none drop-shadow-sm">
          JNAN-VEXA
        </span>
      </div>

      {/* 3. Authentic Green Rolling Hills Parallax Base Image with Mist */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none">
        <img
          src="/images/hero-parallax.avif"
          alt="Parallax Rolling Hills"
          className="w-full h-44 sm:h-64 lg:h-80 object-cover object-top"
        />
      </div>

      {/* 4. Foreground Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Headline, Badge & CTAs */}
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Pill Badge matching Aentoria */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>Next-Gen Software & AI Academy</span>
              </span>
            </div>

            {/* Giant White Heading matching Aentoria typography */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.06] drop-shadow-md">
              Master In-Demand Tech. <br />
              <span className="text-white">Get Hired at Top MNCs.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed drop-shadow font-normal">
              Jnan-Vexa Technologies bridges the gap between academics and high-paying software careers. Learn Enterprise Full-Stack, Generative AI, and Cloud DevOps from Senior Architects with 100% placement assistance.
            </p>

            {/* CTA Buttons matching Aentoria */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Primary Button: Lime Green Pill with Black Trailing Circle */}
              <button
                onClick={() => onOpenEnrollment()}
                className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-sm sm:text-base hover:bg-[#b8e844] transition-all shadow-xl hover:scale-105 group"
              >
                <span>GET STARTED</span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              {/* Secondary Button: Dark Translucent Pill */}
              <button
                onClick={() => {
                  setActivePage('roadmaps');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/25 text-white font-bold text-sm sm:text-base transition-all shadow-lg"
              >
                <span>View Career Roadmaps</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Right Column: Floating Cards matching Aentoria in preview */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end justify-start pt-4 lg:pt-8">
            
            {/* Top Review Card (Dark Glass) */}
            <div className="w-full sm:w-72 bg-[#121417]/85 backdrop-blur-xl border border-white/15 p-5 rounded-3xl shadow-2xl space-y-3">
              <div className="flex items-center gap-3">
                <img
                  src="/images/authers-image-2.avif"
                  alt="Review author"
                  className="w-11 h-11 rounded-full object-cover border-2 border-white/30"
                />
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/90 mt-1 font-medium">
                    Based on <span className="font-bold text-white">4.2k</span> google reviews.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Experience Counter Card (Frosted Glass) */}
            <div className="w-full sm:w-72 bg-white/15 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-2xl space-y-4 text-white">
              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tight">15</span>
                  <span className="text-2xl font-bold text-lime-400">+</span>
                </div>
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider">
                  Years of excellence
                </p>
              </div>

              <div className="pt-3 border-t border-white/20 flex items-center justify-between text-xs font-medium">
                <span className="text-white/90">Trusted by growing tech teams</span>
                <div className="w-6 h-6 rounded-full bg-lime-400 text-black flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
