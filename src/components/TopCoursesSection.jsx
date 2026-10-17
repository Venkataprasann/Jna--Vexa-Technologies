// src/components/TopCoursesSection.jsx
import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Sparkles, Layers, Cpu, Cloud, Database, CheckSquare, Code } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function TopCoursesSection({ setActivePage, onOpenEnrollment }) {
  // Default open the first course
  const [openCourseIndex, setOpenCourseIndex] = useState(0);

  const toggleCourse = (idx) => {
    setOpenCourseIndex(openCourseIndex === idx ? -1 : idx);
  };

  const getCourseIcon = (idx) => {
    switch (idx) {
      case 0: return <Layers className="w-6 h-6 text-blue-400" />;
      case 1: return <Cpu className="w-6 h-6 text-purple-400" />;
      case 2: return <Code className="w-6 h-6 text-cyan-400" />;
      case 3: return <Cloud className="w-6 h-6 text-emerald-400" />;
      case 4: return <Database className="w-6 h-6 text-amber-400" />;
      case 5: return <CheckSquare className="w-6 h-6 text-rose-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section className="relative py-24 bg-[#080808] border-b border-white/5 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 aentoria-ghost-title opacity-20 pointer-events-none">
        PROGRAMS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching Aentoria badge and bold title */}
        <div className="mb-16">
          <div className="flex flex-col items-start gap-4">
            <span className="aentoria-badge">
              <Sparkles className="w-3.5 h-3.5" /> High-Impact Curriculum
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-6">
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-2xl leading-tight">
                From foundational concepts to enterprise execution
              </h2>
              <button
                onClick={() => {
                  setActivePage('courses');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="aentoria-btn-secondary whitespace-nowrap text-sm"
              >
                <span>View All 6 Programs</span>
                <div className="aentoria-btn-circle">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Expandable Accordion List matching Aentoria .service-item-inner */}
        <div className="space-y-4">
          {coursesData.map((course, idx) => {
            const isOpen = openCourseIndex === idx;

            return (
              <div
                key={course.id}
                className={`transition-all duration-300 rounded-2xl border ${
                  isOpen
                    ? 'bg-[#10131b] border-blue-500/40 shadow-xl shadow-blue-500/5'
                    : 'bg-[#0d0f15] border-white/5 hover:border-white/15'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleCourse(idx)}
                  className="flex items-start sm:items-center justify-between p-6 sm:p-8 cursor-pointer select-none gap-4"
                >
                  <div className="flex items-start sm:items-center gap-4 sm:gap-8 flex-1">
                    {/* Course Number */}
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-400/80 uppercase pt-1 sm:pt-0">
                      ({course.number})
                    </span>

                    {/* Course Icon */}
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex-shrink-0">
                      {getCourseIcon(idx)}
                    </div>

                    {/* Main Title & Short Snippet */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2.5 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                          {course.title}
                        </h3>
                        {course.badge && (
                          <span className="px-2 py-0.5 text-[10px] font-bold uppercase rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/30">
                            {course.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-400 line-clamp-2 max-w-2xl font-normal leading-relaxed">
                        {course.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Toggle Button */}
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-full border transition-all ${
                        isOpen
                          ? 'bg-blue-600 border-blue-500 text-white rotate-180'
                          : 'bg-white/5 border-white/10 text-gray-300 hover:bg-white/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Body */}
                {isOpen && (
                  <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-white/5 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                      
                      {/* Left: Project Image & Tags */}
                      <div className="lg:col-span-5 space-y-4">
                        <div className="relative rounded-xl overflow-hidden border border-white/10 aspect-video group">
                          <img
                            src={course.image}
                            alt={course.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                            <span className="font-semibold bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                              {course.duration}
                            </span>
                            <span className="text-emerald-400 font-bold bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                              Avg: {course.avgPackage}
                            </span>
                          </div>
                        </div>

                        {/* Tech Tags */}
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {course.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 text-xs font-medium rounded-md bg-white/5 border border-white/10 text-gray-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: Detailed Description & Curriculum Highlights */}
                      <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                        <div className="space-y-4">
                          <p className="text-sm text-gray-300 leading-relaxed">
                            {course.fullDesc}
                          </p>

                          <div className="space-y-2">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                              Key Learning Outcomes & Projects
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300">
                              {course.highlights.map((h, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-2">
                                  <span className="text-blue-400 font-bold">✓</span>
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="p-3.5 rounded-xl bg-white/5 border border-white/5 flex flex-wrap items-center justify-between gap-4 text-xs">
                            <div>
                              <span className="text-gray-400">Target Learners:</span>
                              <span className="ml-1 text-white font-medium">{course.targetAudience}</span>
                            </div>
                            <div>
                              <span className="text-gray-400">Course Fee:</span>
                              <span className="ml-1 text-emerald-400 font-bold">{course.fee}</span>
                              <span className="ml-1 text-gray-400">({course.emi})</span>
                            </div>
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/5">
                          <button
                            onClick={() => onOpenEnrollment(course.id)}
                            className="aentoria-btn-primary py-2.5 px-6 text-sm"
                          >
                            <span>Enroll in Program</span>
                            <div className="aentoria-btn-circle">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                          </button>

                          <button
                            onClick={() => {
                              setActivePage('courses');
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                            }}
                            className="aentoria-btn-secondary py-2.5 px-5 text-sm"
                          >
                            <span>Full Syllabus Details</span>
                            <div className="aentoria-btn-circle">
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </div>
                          </button>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
