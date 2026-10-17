// src/pages/RoadmapsPage.jsx
import React, { useState } from 'react';
import { Compass, CheckCircle2, Circle, ArrowRight, ArrowUpRight, Sparkles, Clock, Target, Award, Download, BookOpen } from 'lucide-react';
import { careerRoadmaps } from '../data/roadmapsData';

export default function RoadmapsPage({ onOpenEnrollment, setActivePage }) {
  const [selectedRoadmapId, setSelectedRoadmapId] = useState(careerRoadmaps[0].id);
  const [checkedSkills, setCheckedSkills] = useState({});

  const currentRoadmap = careerRoadmaps.find(r => r.id === selectedRoadmapId) || careerRoadmaps[0];

  const toggleSkill = (skill) => {
    setCheckedSkills(prev => ({
      ...prev,
      [skill]: !prev[skill]
    }));
  };

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          ROADMAPS
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Compass className="w-3.5 h-3.5" /> Curated Career Pathways
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Comprehensive Career Roadmaps for Every Background
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Select your current background to explore month-by-month technical milestones, enterprise skills, and target compensation packages.
          </p>
        </div>

        {/* Roadmap Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {careerRoadmaps.map((roadmap) => {
            const isSelected = selectedRoadmapId === roadmap.id;
            return (
              <button
                key={roadmap.id}
                onClick={() => setSelectedRoadmapId(roadmap.id)}
                className={`p-6 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-[#121624] border-blue-500 shadow-xl shadow-blue-500/10'
                    : 'bg-[#0d0f16] border-white/5 hover:border-white/15'
                }`}
              >
                <span className="text-[10px] font-bold px-2 py-0.5 rounded uppercase font-mono tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {roadmap.badge}
                </span>
                <h3 className="text-base font-bold text-white mt-3 mb-2 leading-snug">
                  {roadmap.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1 font-mono">
                    <Clock className="w-3 h-3 text-blue-400" /> {roadmap.timeline}
                  </span>
                  <span className="text-emerald-400 font-bold font-mono">
                    {roadmap.avgSalary}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Roadmap Overview Card */}
        <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/5">
            <div className="space-y-2">
              <span className="aentoria-badge">
                <Target className="w-3.5 h-3.5" /> Target Role Blueprint
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                {currentRoadmap.title}
              </h2>
              <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
                {currentRoadmap.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnrollment()}
                className="aentoria-btn-primary py-3 px-6 text-xs sm:text-sm"
              >
                <span>Get 1-on-1 Roadmap Guidance</span>
                <div className="aentoria-btn-circle">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-gray-500 block">Who is this for?</span>
              <span className="text-white font-semibold mt-1 block">{currentRoadmap.targetAudience}</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-gray-500 block">Estimated Timeline</span>
              <span className="text-blue-400 font-bold mt-1 block font-mono">{currentRoadmap.timeline} (Intensive)</span>
            </div>
            <div className="p-4 rounded-xl bg-black/40 border border-white/5">
              <span className="text-gray-500 block">Expected CTC Range</span>
              <span className="text-emerald-400 font-bold mt-1 block text-sm font-mono">{currentRoadmap.avgSalary}</span>
            </div>
          </div>
        </div>

        {/* Interactive Step-by-Step Phase Timeline */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Phased Execution Steps & Skill Checklists
            </h3>
            <span className="text-xs text-gray-400 hidden sm:inline">
              Tip: Click any skill to check off what you already know!
            </span>
          </div>

          <div className="space-y-6">
            {currentRoadmap.phases.map((phase, idx) => (
              <div
                key={idx}
                className="relative bg-[#0e111a] border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-blue-500/30 transition shadow-lg"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                  
                  {/* Phase Left Title */}
                  <div className="md:w-1/3 space-y-2">
                    <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                      {phase.phase}
                    </span>
                    <h4 className="text-xl font-bold text-white tracking-tight">
                      {phase.title}
                    </h4>
                    <div className="pt-2 text-xs text-emerald-400 font-semibold flex items-center gap-1.5">
                      <Award className="w-4 h-4 flex-shrink-0" />
                      <span>{phase.milestone}</span>
                    </div>
                  </div>

                  {/* Skills Checklist */}
                  <div className="md:w-2/3 space-y-4">
                    <div>
                      <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                        Core Competencies to Master:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {phase.skills.map((skill, sIdx) => {
                          const isDone = checkedSkills[skill];
                          return (
                            <button
                              key={sIdx}
                              onClick={() => toggleSkill(skill)}
                              className={`flex items-center gap-2 p-2 rounded-lg border text-left transition select-none ${
                                isDone
                                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                                  : 'bg-black/30 border-white/5 text-gray-300 hover:border-white/20'
                              }`}
                            >
                              {isDone ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              ) : (
                                <Circle className="w-4 h-4 text-gray-500 flex-shrink-0" />
                              )}
                              <span className={isDone ? 'line-through text-gray-400' : ''}>
                                {skill}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Capstone Projects */}
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 text-xs">
                      <span className="text-gray-400 font-semibold block mb-1">
                        🚀 Production Capstone Projects:
                      </span>
                      <div className="space-y-1 text-gray-300">
                        {phase.projects.map((proj, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-1.5">
                            <span className="text-blue-400 font-bold">›</span>
                            <span>{proj}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-black border border-blue-500/30 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Need Help Following This Roadmap Step-by-Step?
          </h3>
          <p className="text-sm text-gray-300 max-w-2xl mx-auto">
            Our comprehensive live courses map 100% directly to these exact roadmaps with daily code reviews, doubt-clearing sessions, and dedicated mock interview panels.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenEnrollment()}
              className="aentoria-btn-primary py-3 px-8 text-sm"
            >
              <span>Enroll with Jnan-Vexa Mentors</span>
              <div className="aentoria-btn-circle">
                <ArrowRight className="w-4 h-4" />
              </div>
            </button>
            <button
              onClick={() => {
                setActivePage('courses');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="aentoria-btn-secondary py-3 px-7 text-sm"
            >
              <span>Explore Matching Courses</span>
              <div className="aentoria-btn-circle">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
