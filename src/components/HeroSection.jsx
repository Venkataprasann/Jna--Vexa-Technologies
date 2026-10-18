// src/components/HeroSection.jsx
import React from 'react';
import { ArrowUpRight, Sparkles, Star, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function HeroSection({ setActivePage, onOpenEnrollment }) {
  return (
    <section className="relative min-h-[80vh] sm:min-h-[86vh] lg:min-h-[880px] flex flex-col justify-between overflow-hidden bg-sky-500 pt-6 sm:pt-10 select-none">
      
      {/* 1. Authentic Blue Sky with Clouds Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url('/images/bg-hero.avif')` }}
      ></div>

      {/* 2. Authentic Aentoria Giant Ghost Watermark Title rising behind the hills */}
      <div className="absolute bottom-28 sm:bottom-48 left-0 right-0 text-center pointer-events-none z-0">
        <span className="text-[14vw] font-black uppercase tracking-tight text-white/35 leading-none select-none drop-shadow-sm">
          JNAN-VEXA
        </span>
      </div>

      {/* 3. Authentic Green Rolling Hills Parallax Base Image with Mist */}
      <div className="absolute bottom-0 left-0 right-0 w-full z-10 pointer-events-none">
        <img
          src="/images/hero-parallax.avif"
          alt="Parallax Rolling Hills"
          className="w-full h-36 sm:h-56 lg:h-72 object-cover object-top"
        />
      </div>

      {/* 4. Foreground Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 sm:pt-8 pb-24 sm:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Headline, Badge & CTAs */}
          <div className="lg:col-span-8 space-y-4 sm:space-y-6 text-left">
            
            {/* Pill Badge matching Aentoria */}
            <div className="inline-flex">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/25 text-white text-xs font-semibold shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-lime-400" />
                <span>Premier Software Training &amp; Placement Institute</span>
              </span>
            </div>

            {/* Giant White Heading matching Aentoria typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] sm:leading-[1.06] drop-shadow-md">
              Master In-Demand Tech. <br />
              <span className="text-white">Get Hired at Top MNCs.</span>
            </h1>

            {/* Subtitle - Catchy, crisp, easy to understand */}
            <p className="text-sm sm:text-base lg:text-lg text-white/95 max-w-2xl leading-relaxed drop-shadow font-normal">
              Bridge the gap between college and high-paying software careers. Learn Enterprise Full-Stack Java, Generative AI &amp; Cloud DevOps through hands-on coding, live projects, and dedicated 100% placement support.
            </p>

            {/* CTA Buttons matching Aentoria - Responsive for iOS/Android */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
              {/* Primary Button: Lime Green Pill with Black Trailing Circle */}
              <button
                onClick={() => onOpenEnrollment()}
                className="inline-flex items-center justify-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-[#cdfb56] text-black font-extrabold text-sm sm:text-base hover:bg-[#b8e844] transition-all shadow-xl hover:scale-105 active:scale-95 group"
              >
                <span>GET STARTED</span>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform flex-shrink-0">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>

              {/* Secondary Button: Dark Translucent Pill */}
              <button
                onClick={() => {
                  setActivePage('roadmaps');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-black/40 hover:bg-black/60 active:scale-95 backdrop-blur-md border border-white/25 text-white font-bold text-sm sm:text-base transition-all shadow-lg"
              >
                <span>View Career Roadmaps</span>
                <ArrowUpRight className="w-4 h-4 flex-shrink-0" />
              </button>
            </div>

          </div>

          {/* Right Column: Sleek Review & Placement Trust Badges */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 sm:gap-4 lg:items-end justify-start pt-2 sm:pt-4 lg:pt-8">
            
            {/* Google Reviews Card (Dark Glass) */}
            <div className="w-full sm:w-72 bg-[#121417]/85 backdrop-blur-xl border border-white/15 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl space-y-2.5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/authers-image-2.avif"
                  alt="Review author"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover border-2 border-white/30 flex-shrink-0"
                />
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-white/90 mt-0.5 font-medium">
                    Rated <span className="font-bold text-white">4.9/5</span> by <span className="font-bold text-white">4,200+</span> trainees
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Placement Guarantee Card (Frosted Glass - Clean and Credible, No Fake 15+ Years) */}
            <div className="w-full sm:w-72 bg-black/35 backdrop-blur-xl border border-white/20 p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl space-y-2 text-white">
              <div className="flex items-center gap-2 text-lime-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <span>100% Placement Cell</span>
              </div>
              <p className="text-xs text-white/90 font-medium leading-relaxed">
                Direct interviews with 450+ Tier-1 MNCs &amp; fast-growing tech startups across India.
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-lime-300">
                <span>Avg Package: 8.5 LPA</span>
                <span>Highest: 44.5 LPA</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
