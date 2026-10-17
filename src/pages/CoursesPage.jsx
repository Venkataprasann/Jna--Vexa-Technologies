// src/pages/CoursesPage.jsx
import React, { useState } from 'react';
import { Search, Filter, BookOpen, Clock, Award, CheckCircle, ArrowUpRight, ChevronDown, ChevronUp, Sparkles, Layers, Cpu, Cloud, Database, CheckSquare, Code } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function CoursesPage({ onOpenEnrollment }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedCourseId, setExpandedCourseId] = useState(null);

  const categories = ['All', 'Full Stack', 'AI & Data Science', 'Cloud & DevOps', 'Data & Analytics', 'Testing & QA'];

  const filteredCourses = coursesData.filter(course => {
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    const matchesSearch = 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const toggleSyllabus = (courseId) => {
    setExpandedCourseId(expandedCourseId === courseId ? null : courseId);
  };

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          ALL COURSES
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Sparkles className="w-3.5 h-3.5" /> Industry-Vetted Curriculums
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Specialized Software & AI Programs with Guaranteed Placement
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Engineered specifically for students and experienced software engineers aiming for top-bracket product MNC roles.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-[#0e111a] border border-white/10 rounded-2xl p-4 sm:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by tech (e.g. Java, AI, Docker)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141724] border border-gray-700/60 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* Courses List */}
        <div className="space-y-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-[#0e111a] rounded-2xl border border-white/5">
              <p className="text-gray-400 text-sm">No courses found matching your search. Try adjusting the filter or search keyword.</p>
            </div>
          ) : (
            filteredCourses.map((course) => {
              const isExpanded = expandedCourseId === course.id;

              return (
                <div
                  key={course.id}
                  className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 hover:border-blue-500/30 transition-all shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Thumbnail & Quick Stats */}
                    <div className="lg:col-span-4 space-y-4">
                      <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-video group">
                        <img
                          src={course.image}
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 left-3">
                          <span className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-blue-600 text-white shadow">
                            {course.badge}
                          </span>
                        </div>
                      </div>

                      {/* Course Quick Attributes */}
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-gray-500 block">Duration</span>
                          <span className="text-white font-semibold">{course.duration}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-gray-500 block">Avg Salary</span>
                          <span className="text-emerald-400 font-bold">{course.avgPackage}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-gray-500 block">Batch Mode</span>
                          <span className="text-white font-semibold">{course.mode}</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                          <span className="text-gray-500 block">Ratings</span>
                          <span className="text-amber-400 font-bold">★ {course.rating} ({course.reviewsCount}+)</span>
                        </div>
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {course.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-white/5 text-gray-300 border border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right Course Info & Curriculum */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                            ({course.number})
                          </span>
                          <span className="text-xs font-medium text-gray-500">•</span>
                          <span className="text-xs font-medium text-gray-400">{course.category}</span>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {course.title}
                        </h3>

                        <p className="text-sm text-gray-300 leading-relaxed font-normal">
                          {course.fullDesc}
                        </p>

                        {/* Audience and Fee */}
                        <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/20 flex flex-wrap items-center justify-between gap-4 text-xs">
                          <div>
                            <span className="text-gray-400">Target Learners:</span>
                            <span className="ml-1 text-white font-semibold">{course.targetAudience}</span>
                          </div>
                          <div>
                            <span className="text-gray-400">Tuition Fee:</span>
                            <span className="ml-1 text-emerald-400 font-bold text-sm">{course.fee}</span>
                            <span className="ml-1 text-gray-400">({course.emi})</span>
                          </div>
                        </div>

                        {/* Highlights List */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-300 pt-2">
                          {course.highlights.map((h, hIdx) => (
                            <div key={hIdx} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>

                        {/* Interactive Syllabus Toggle */}
                        <div className="pt-2">
                          <button
                            onClick={() => toggleSyllabus(course.id)}
                            className="flex items-center gap-2 text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                          >
                            <span>{isExpanded ? "Hide Detailed Syllabus Modules" : "View Detailed Week-by-Week Syllabus & Projects"}</span>
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>

                          {isExpanded && (
                            <div className="mt-4 p-5 rounded-2xl bg-[#090b10] border border-white/5 space-y-4 animate-fadeIn">
                              <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                                Comprehensive Curriculum Outline
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {course.curriculum.map((module, mIdx) => (
                                  <div key={mIdx} className="p-3.5 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-xs">
                                    <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">
                                      {module.week}
                                    </span>
                                    <h5 className="font-bold text-white">{module.title}</h5>
                                    <div className="flex flex-wrap gap-1 text-[11px] text-gray-400">
                                      {module.topics.map((top, tIdx) => (
                                        <span key={tIdx} className="bg-black/40 px-2 py-0.5 rounded">
                                          {top}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              <div className="pt-2">
                                <h4 className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                                  Capstone Projects Built in this Course:
                                </h4>
                                <ul className="space-y-1 text-xs text-gray-300">
                                  {course.projects.map((proj, pIdx) => (
                                    <li key={pIdx} className="flex items-center gap-2">
                                      <span className="text-emerald-400 font-bold">›</span>
                                      <span>{proj}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          )}
                        </div>

                      </div>

                      {/* Course Action CTAs */}
                      <div className="pt-4 border-t border-white/5 flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => onOpenEnrollment(course.id)}
                          className="aentoria-btn-primary py-3 px-7 text-sm"
                        >
                          <span>Enroll / Reserve Seat</span>
                          <div className="aentoria-btn-circle">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </button>

                        <button
                          onClick={() => onOpenEnrollment(course.id)}
                          className="aentoria-btn-secondary py-3 px-6 text-sm"
                        >
                          <span>Download Syllabus PDF</span>
                          <div className="aentoria-btn-circle">
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </div>
                        </button>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
