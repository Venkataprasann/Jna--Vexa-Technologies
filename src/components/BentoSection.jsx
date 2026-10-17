// src/components/BentoSection.jsx
import React, { useState } from 'react';
import { Sparkles, ArrowUpRight, Quote, ShieldCheck, Award, Star, CheckCircle2 } from 'lucide-react';
import { successStories } from '../data/placementsData';

export default function BentoSection({ onOpenEnrollment, setActivePage }) {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const currentTestimonial = successStories[activeTestimonialIdx];

  return (
    <section className="relative py-24 bg-[#080808] border-b border-white/5 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-8 left-8 aentoria-ghost-title opacity-10 pointer-events-none">
        COMMUNITY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="aentoria-badge">
            <Sparkles className="w-3.5 h-3.5" /> Trainee Success & Guidance
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mt-4 max-w-2xl leading-tight">
            Built for ambitious students & engineers aiming for the top 1%
          </h2>
        </div>

        {/* Bento Grid matching Aentoria .bento-grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Big Card (Left 6 Columns): 1-on-1 Consultation & Career Assessment */}
          <div className="lg:col-span-6 bg-[#0e1119] border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-blue-500/40 transition group">
            
            {/* Top Badge & Live Indicator */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>Available for 1-on-1 Consultations</span>
                </div>
                <span className="text-xs text-gray-400 font-mono">Free Session</span>
              </div>

              {/* Photo Preview Strip */}
              <div className="grid grid-cols-3 gap-3">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
                  alt="Session 1"
                  className="rounded-xl object-cover h-28 w-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&auto=format&fit=crop&q=80"
                  alt="Session 2"
                  className="rounded-xl object-cover h-28 w-full border border-white/10"
                />
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80"
                  alt="Session 3"
                  className="rounded-xl object-cover h-28 w-full border border-white/10"
                />
              </div>

              {/* Card Headline */}
              <div className="space-y-3 pt-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                  Unsure which tech stack will deliver the highest salary for your background?
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Speak directly with a Senior Technical Architect from Jnan-Vexa. We evaluate your current academic or work background, identify skill gaps, and blueprint an exact roadmap to 15+ LPA.
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Resume & Skill Gap Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Custom Career Roadmap</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>MNC Salary Benchmarks</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  <span>Live Project Demos</span>
                </div>
              </div>
            </div>

            {/* Bottom Button */}
            <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onOpenEnrollment()}
                className="aentoria-btn-primary py-3 px-6 text-sm"
              >
                <span>Book Free Mentorship Call</span>
                <div className="aentoria-btn-circle">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
              <span className="text-xs text-gray-500 hidden sm:inline">Takes only 60 seconds</span>
            </div>

          </div>

          {/* Right 6 Columns: Integrity Card + Live Testimonial Slider */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Top Small Card: Industry Trust & Certifications */}
            <div className="bg-[#0e1119] border border-white/10 rounded-3xl p-8 flex items-center justify-between hover:border-blue-500/30 transition">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Industry Accreditation</span>
                </div>
                <h4 className="text-xl font-bold text-white tracking-tight">
                  ISO 9001:2015 & NASSCOM Aligned Curriculum
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed max-w-md">
                  Every curriculum module is audited quarterly by engineering managers at Tier-1 product firms to ensure zero obsolescence.
                </p>
              </div>
              <div className="hidden sm:flex w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 items-center justify-center text-blue-400 flex-shrink-0">
                <Award className="w-8 h-8" />
              </div>
            </div>

            {/* Bottom Card: Trainee Reviews & Testimonials Carousel */}
            <div className="bg-[#0e1119] border border-white/10 rounded-3xl p-8 flex-1 flex flex-col justify-between hover:border-blue-500/30 transition">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Quote className="w-6 h-6 text-blue-400" />
                    <span className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                      Verified Placement Story
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-sm text-gray-300 italic leading-relaxed mb-6 font-normal">
                  "{currentTestimonial.testimonial}"
                </p>
              </div>

              {/* Trainee Details & Switch Buttons */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40"
                  />
                  <div>
                    <h5 className="text-sm font-bold text-white">
                      {currentTestimonial.name}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="text-blue-400 font-semibold">{currentTestimonial.newRole}</span>
                      <span>@</span>
                      <span className="text-white font-medium">{currentTestimonial.company}</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 font-bold">
                      Package: {currentTestimonial.package} ({currentTestimonial.hike})
                    </span>
                  </div>
                </div>

                {/* Carousel Navigation Dots */}
                <div className="flex items-center gap-2">
                  {successStories.slice(0, 4).map((_, sIdx) => (
                    <button
                      key={sIdx}
                      onClick={() => setActiveTestimonialIdx(sIdx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeTestimonialIdx === sIdx
                          ? 'w-7 bg-blue-500'
                          : 'bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Slide ${sIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
