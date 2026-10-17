// src/pages/HomePage.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import MarqueeTicker from '../components/MarqueeTicker';
import TopCoursesSection from '../components/TopCoursesSection';
import ProcessSection from '../components/ProcessSection';
import BentoSection from '../components/BentoSection';
import PartnersMarquee from '../components/PartnersMarquee';
import FaqSection from '../components/FaqSection';
import SoftwareAutoSlider from '../components/SoftwareAutoSlider';
import { ArrowUpRight, Sparkles, Building, CheckCircle, Users, Trophy, BookOpen } from 'lucide-react';

export default function HomePage({ setActivePage, onOpenEnrollment }) {
  return (
    <div className="min-h-screen bg-[#080808]">
      {/* 1. Hero Section with authentic sky & hills background */}
      <HeroSection setActivePage={setActivePage} onOpenEnrollment={onOpenEnrollment} />

      {/* 2. Marquee Ticker */}
      <MarqueeTicker />

      {/* 3. Authentic Aentoria About Section (with Software Auto Slider in place of second photo) */}
      <section className="py-24 bg-[#f4f5f0] text-gray-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/10 text-gray-800 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" /> Jnan-Vexa Technologies
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight max-w-3xl leading-[1.12]">
              Empowering students & engineers with intelligent software skills for a smarter digital future
            </h2>
          </div>

          {/* Grid matching Aentoria in preview image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image: Replaced with Software Auto Slider (No arrows, auto-sliding software images) */}
            <div className="lg:col-span-5">
              <SoftwareAutoSlider />
            </div>

            {/* Right Side Cards */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Testimonial Quote with Avatar Stack */}
              <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm border border-black/5">
                <div className="flex -space-x-2 overflow-hidden flex-shrink-0">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src="/images/authers-image-2.avif"
                    alt="Author 1"
                  />
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xs font-bold ring-2 ring-white">
                    +4k
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 italic font-medium leading-relaxed">
                  "Working with Jnan-Vexa completely transformed our software careers with enterprise microservices, AI architectures, and verified placement support."
                </p>
              </div>

              {/* Two Cards Side-by-Side matching Aentoria */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Card 1: White Card with 450+ Trusted Partners and scrolling tags */}
                <div className="bg-white p-7 rounded-3xl shadow-sm border border-black/5 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-gray-950">450</span>
                      <span className="text-3xl font-bold text-blue-600">+</span>
                    </div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">
                      Trusted Hiring MNCs
                    </p>
                  </div>

                  {/* Tags Pill Cloud */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {["Spring AI", "Kafka", "Docker", "Kubernetes", "Next.js", "GenAI"].map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-gray-100 text-gray-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card 2: Signature Lime Green Card matching Aentoria */}
                <div className="bg-[#cdfb56] p-7 rounded-3xl shadow-md border border-lime-400 flex flex-col justify-between space-y-4 text-black">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-black/70">
                      JNAN-VEXA
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                  </div>

                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-black text-black">2,850</span>
                      <span className="text-3xl font-bold text-black">+</span>
                    </div>
                    <p className="text-xs font-extrabold text-black/80 mt-1 uppercase tracking-wider">
                      Alumni Placed Worldwide
                    </p>
                  </div>

                  <p className="text-xs text-black/80 font-medium leading-relaxed">
                    Collaborating with leading AI, cloud, and Fortune 500 technology employers.
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white hover:bg-gray-800 font-bold text-xs transition-all shadow-md group"
                >
                  <span>Explore Our Story & Campus Labs</span>
                  <div className="w-6 h-6 rounded-full bg-[#cdfb56] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Top Courses Expandable Section */}
      <TopCoursesSection setActivePage={setActivePage} onOpenEnrollment={onOpenEnrollment} />

      {/* 5. 3-Step Process Section */}
      <ProcessSection onOpenEnrollment={onOpenEnrollment} />

      {/* 6. Bento Grid & Testimonials */}
      <BentoSection onOpenEnrollment={onOpenEnrollment} setActivePage={setActivePage} />

      {/* 7. Hiring MNC Partners Marquee */}
      <PartnersMarquee />

      {/* 8. FAQ Section */}
      <FaqSection onOpenEnrollment={onOpenEnrollment} />

      {/* 9. Final Call to Action Banner */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-[#0e121d] relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="aentoria-badge">
            <Sparkles className="w-3.5 h-3.5" /> Admissions Open for Upcoming Batches
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to build a high-trajectory career in software & AI?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            Book a free 1-on-1 counseling session with our senior technical advisors today. Get an in-depth profile evaluation, custom roadmap, and reserve your seat.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnrollment()}
              className="inline-flex items-center gap-3 pl-6 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-sm sm:text-base hover:bg-[#b8e844] transition-all shadow-xl hover:scale-105 group"
            >
              <span>Enroll / Book Free Call</span>
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </div>
            </button>
            <button
              onClick={() => {
                setActivePage('roadmaps');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="aentoria-btn-secondary py-3 px-6 text-sm"
            >
              <span>Explore Career Roadmaps</span>
              <div className="aentoria-btn-circle">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
