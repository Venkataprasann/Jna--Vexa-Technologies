// src/pages/AchievementsPage.jsx
import React from 'react';
import { Trophy, Award, Star, Sparkles, CheckCircle2, TrendingUp, Users, Building, ArrowUpRight } from 'lucide-react';
import { achievementsData } from '../data/achievementsData';

export default function AchievementsPage({ onOpenEnrollment }) {
  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          WALL OF FAME
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Trophy className="w-3.5 h-3.5" /> Excellence & Industry Accolades
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Our Achievements, Awards & Milestone Records
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Engineering excellence recognized by industry leaders, corporate technology partners, and leading software hiring panels.
          </p>
        </div>

        {/* 6 Core Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {achievementsData.milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-[#0e111a] border border-white/5 rounded-2xl p-5 text-center hover:border-blue-500/30 transition group shadow-lg"
            >
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition tracking-tight">
                {m.number}
              </span>
              <p className="text-xs font-semibold text-gray-300 mt-2 uppercase tracking-wider">
                {m.label}
              </p>
            </div>
          ))}
        </div>

        {/* Formal Recognition and Awards Section matching Aentoria .awards */}
        <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-10 mb-20 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="aentoria-badge">
              <Award className="w-3.5 h-3.5" /> Formal Recognition
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              National Honors & Industry Awards
            </h2>
          </div>

          <div className="space-y-4">
            {achievementsData.awards.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/40 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-blue-500/30 transition group"
              >
                <div className="space-y-1 md:w-2/3">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                      {award.year}
                    </span>
                    <span className="text-xs font-semibold text-emerald-400">
                      {award.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition mt-2">
                    {award.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-medium">
                    Issued by: {award.issuer}
                  </p>
                  <p className="text-xs text-gray-300 pt-1">
                    {award.desc}
                  </p>
                </div>

                <div className="flex items-center gap-3 self-end md:self-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Student Breakthroughs & Hackathon Victories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {achievementsData.studentHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/30 transition shadow-lg"
            >
              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase font-mono px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {hl.tag}
                </span>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  {hl.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {hl.desc}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-white/5 flex items-center gap-2 text-xs text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Trainee Accomplishment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/30 to-black border border-blue-500/30 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-3">
            <div className="flex items-center justify-center md:justify-start gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
              <span className="text-white font-bold ml-2">4.9 Out of 5.0 Rating</span>
            </div>
            <h3 className="text-2xl font-black text-white tracking-tight">
              Ranked Top Software Training Institute in Telangana & Karnataka
            </h3>
            <p className="text-xs text-gray-400 max-w-xl">
              Consistently rated #1 for syllabus relevance, hands-on lab infrastructure, and honest placement transparency.
            </p>
          </div>

          <button
            onClick={() => onOpenEnrollment()}
            className="aentoria-btn-primary py-3.5 px-8 text-sm whitespace-nowrap"
          >
            <span>Join Our Next Hall of Fame Batch</span>
            <div className="aentoria-btn-circle">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
