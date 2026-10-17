// src/pages/PlacementsPage.jsx
import React, { useState } from 'react';
import { Trophy, TrendingUp, Building2, CheckCircle, ArrowUpRight, Sparkles, Star, Users, Briefcase } from 'lucide-react';
import { placementStats, successStories, hiringPartners, placementProcessSteps } from '../data/placementsData';

export default function PlacementsPage({ onOpenEnrollment }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Experienced Switcher', 'College Fresher', 'Career Switcher', 'Career Gap Revival'];

  const filteredStories = successStories.filter(story => {
    if (activeFilter === 'All') return true;
    return story.type === activeFilter;
  });

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          PLACEMENTS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Trophy className="w-3.5 h-3.5" /> 100% Placement Assistance Cell
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Our Placements Record & Trainee Success Stories
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Real engineers, real career switches, and verified packages. See how Jnan-Vexa trainees crack high-bracket product MNC interviews.
          </p>
        </div>

        {/* 6 Key Placement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
          {placementStats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0e111a] border border-white/5 rounded-2xl p-5 text-center hover:border-blue-500/30 transition group"
            >
              <span className="text-2xl sm:text-3xl font-black text-white group-hover:text-blue-400 transition tracking-tight">
                {stat.value}
              </span>
              <p className="text-xs font-bold text-gray-200 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-[10px] text-gray-500 mt-1">
                {stat.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Salary Package Breakdown Chart Strip */}
        <div className="bg-[#0f121d] border border-white/10 rounded-3xl p-6 sm:p-8 mb-20 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Salary Package Distribution (Last 12 Months)
              </h3>
              <p className="text-xs text-gray-400">Audited across 480+ recent graduate placements</p>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Average Salary: ₹12.8 LPA
            </span>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1 font-medium">
                <span>Above 24 LPA (Tier-1 Product & AI Architects)</span>
                <span className="text-blue-400 font-bold">22% of Batch</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" style={{ width: '22%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1 font-medium">
                <span>15 LPA - 24 LPA (Senior Developers & DevOps Engineers)</span>
                <span className="text-emerald-400 font-bold">38% of Batch</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: '38%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1 font-medium">
                <span>8 LPA - 15 LPA (Full Stack SDE-1 & Automation Engineers)</span>
                <span className="text-cyan-400 font-bold">32% of Batch</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-cyan-500 rounded-full" style={{ width: '32%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1 font-medium">
                <span>6 LPA - 8 LPA (Entry-Level College Graduates)</span>
                <span className="text-gray-400 font-bold">8% of Batch</span>
              </div>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gray-600 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Filterable Placed Candidates Wall */}
        <div className="space-y-8 mb-24">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Recent Placed Trainees Wall
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                Click filters to view specific transition types
              </p>
            </div>

            {/* Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              {filters.map(filter => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    activeFilter === filter
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/5 text-gray-400 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStories.map(story => (
              <div
                key={story.id}
                className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition hover:-translate-y-1 shadow-lg"
              >
                <div>
                  {/* Top Row: User Avatar & Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={story.avatar}
                        alt={story.name}
                        className="w-14 h-14 rounded-2xl object-cover border-2 border-blue-500/40 shadow"
                      />
                      <div>
                        <h4 className="text-base font-bold text-white">{story.name}</h4>
                        <span className="text-xs text-gray-400 block">{story.course}</span>
                        <span className="text-[10px] text-blue-400 font-mono uppercase font-semibold">{story.type}</span>
                      </div>
                    </div>
                  </div>

                  {/* Transition Info Box */}
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 mb-4 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Previous Role:</span>
                      <span className="text-gray-400 font-medium">{story.previousRole}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Placed As:</span>
                      <span className="text-white font-bold">{story.newRole}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Company:</span>
                      <span className="text-blue-400 font-bold">{story.company}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-white/5">
                      <span className="text-gray-400 font-semibold">Package Offered:</span>
                      <span className="text-emerald-400 font-black text-sm">
                        {story.package} <span className="text-[10px] text-emerald-300">({story.hike})</span>
                      </span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-xs text-gray-300 italic leading-relaxed line-clamp-4">
                    "{story.testimonial}"
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Offer Letter
                  </span>
                  <span className="text-gray-400 font-mono">{story.badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4-Stage Placement Roadmap */}
        <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-8 sm:p-12 mb-20 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="aentoria-badge">
              <Briefcase className="w-3.5 h-3.5" /> Our Placement Blueprint
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Enrolled Trainee to Hired Professional
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Our systematic 4-phase placement mechanism designed to convert technical competence into high-value job offers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {placementProcessSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3"
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold">
                    {step.step}
                  </span>
                  <span className="text-gray-500">{step.duration}</span>
                </div>
                <h4 className="text-base font-bold text-white">{step.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Partners Logos Grid */}
        <div className="space-y-6 text-center mb-16">
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Our Regular Corporate Recruitment Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {hiringPartners.map((partner, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-[#0f121d] border border-white/5 flex flex-col items-center justify-center text-center hover:border-blue-500/30 transition group"
              >
                <span className="text-base font-bold text-white group-hover:text-blue-400 transition">
                  {partner.name}
                </span>
                <span className="text-[10px] text-gray-500 uppercase tracking-wider font-mono mt-0.5">
                  {partner.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-8">
          <button
            onClick={() => onOpenEnrollment()}
            className="aentoria-btn-primary py-3.5 px-8 text-base"
          >
            <span>Register for Placement Assistance</span>
            <div className="aentoria-btn-circle">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
