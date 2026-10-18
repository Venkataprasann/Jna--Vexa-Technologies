// src/pages/DashboardPage.jsx
import React, { useState } from 'react';
import { LayoutDashboard, BookOpen, CheckCircle, Clock, Video, FileText, Calendar, TrendingUp, Trophy, Award, ExternalLink, Bell, ArrowRight, UserCheck, ShieldCheck, Sparkles, ArrowUpRight } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function DashboardPage({ onOpenEnrollment }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [mockBooked, setMockBooked] = useState(false);

  const student = {
    name: "Rahul Sharma",
    avatar: "/images/authers-image-2.avif",
    id: "JV-2026-084",
    batch: "Enterprise Full Stack Java & Generative AI (Batch #28)",
    enrolledDate: "August 2026",
    progress: 78,
    attendance: "96.2%",
    labHours: "148 Hours",
    placementStatus: "Eligible (Tier-1 Drives Open)"
  };

  const applications = [
    { company: "Oracle Cloud", role: "SDE-1 (Java + Cloud)", status: "Interview Scheduled", date: "Oct 24, 2026", badge: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
    { company: "Amazon AWS", role: "Associate Software Engineer", status: "Coding Round Cleared", date: "Oct 28, 2026", badge: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
    { company: "Accenture Digital", role: "Advanced App Engineering", status: "Offer Letter Released (₹11.5 LPA)", date: "Oct 15, 2026", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
    { company: "JPMorgan Chase", role: "Software Analyst", status: "Under Referral Review", date: "Oct 18, 2026", badge: "bg-amber-500/20 text-amber-400 border-amber-500/30" }
  ];

  const mockInterviews = [
    { type: "DSA & Algorithmic Problem Solving", interviewer: "Venkatesh Rao (Ex-Amazon SDE-3)", score: "8.8 / 10", verdict: "Strong", notes: "Exceptional grasp on dynamic programming & graph traversals. Keep practicing edge cases." },
    { type: "Low-Level & High-Level System Design", interviewer: "Sridhar K. (Staff Architect, Microsoft)", score: "9.2 / 10", verdict: "Excellent", notes: "Clean decomposition of microservices and message queues with Kafka." },
    { type: "Spring Boot Microservices & Spring AI", interviewer: "Ananya Roy (Tech Lead, Oracle)", score: "8.5 / 10", verdict: "Ready for Tier-1", notes: "Good implementation of distributed caching with Redis and LangChain RAG pipeline." }
  ];

  const upcomingClasses = [
    { time: "Today, 7:00 PM - 9:00 PM", topic: "Spring AI & Vector Embeddings with Pinecone", mentor: "Dr. Arvind Murthy", link: "https://zoom.us" },
    { time: "Tomorrow, 8:00 PM - 9:30 PM", topic: "Live Mock DSA Coding Assessment (Hard Graphs)", mentor: "Ex-FAANG Mentor Panel", link: "https://zoom.us" },
    { time: "Saturday, 10:00 AM - 1:00 PM", topic: "AWS Kubernetes EKS Deployment Masterclass", mentor: "Kiran Teja (Senior Cloud Architect)", link: "https://zoom.us" }
  ];

  return (
    <div className="min-h-screen bg-[#080808] py-8 sm:py-14 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Student Profile Top Banner with Aentoria Sky & Glass Accent */}
        <div className="relative rounded-3xl overflow-hidden mb-8 border border-white/10 shadow-2xl bg-gradient-to-r from-blue-950/80 via-[#0e111a] to-[#0e111a]">
          {/* Subtle background sky strip */}
          <div 
            className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none"
            style={{ backgroundImage: `url('/images/bg-hero.avif')` }}
          ></div>

          <div className="relative z-10 p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <img
                  src={student.avatar}
                  alt={student.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover border-2 border-lime-400 shadow-xl"
                />
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl sm:text-2xl font-black text-white">{student.name}</h1>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-lime-400/20 text-lime-300 border border-lime-400/30 font-bold">
                      {student.id}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 font-medium">
                    {student.batch}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400 pt-1">
                    <span>Enrolled: {student.enrolledDate}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> {student.placementStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    setMockBooked(true);
                    setTimeout(() => setMockBooked(false), 4000);
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#cdfb56] text-black font-extrabold text-xs hover:bg-[#b8e844] transition shadow-md"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{mockBooked ? "Mock Slot Reserved!" : "Schedule Mock Interview"}</span>
                </button>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10 text-xs">
              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-gray-400 block mb-1">Course Progress</span>
                <div className="flex items-center justify-between font-bold text-white mb-1.5">
                  <span>{student.progress}%</span>
                  <span className="text-[10px] text-lime-400">Phase 3 of 4</span>
                </div>
                <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                  <div className="h-full bg-lime-400 rounded-full" style={{ width: `${student.progress}%` }}></div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-gray-400 block mb-1">Live Class Attendance</span>
                <span className="text-lg font-black text-white">{student.attendance}</span>
                <span className="text-[10px] text-emerald-400 block">Top 5% of Batch</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-gray-400 block mb-1">Cloud Lab Hours Logged</span>
                <span className="text-lg font-black text-white">{student.labHours}</span>
                <span className="text-[10px] text-gray-500 block">Target: 160 Hours</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-black/50 border border-white/5">
                <span className="text-gray-400 block mb-1">MNC Referral Drives</span>
                <span className="text-lg font-black text-emerald-400">4 Active</span>
                <span className="text-[10px] text-emerald-300 block">1 Offer Released</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Tabs matching Aentoria pill style */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'overview'
                ? 'bg-white text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview & Schedule
          </button>
          <button
            onClick={() => setActiveTab('placements')}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'placements'
                ? 'bg-white text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Placement Drives Tracker
          </button>
          <button
            onClick={() => setActiveTab('mocks')}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'mocks'
                ? 'bg-white text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Mock Interview Scorecards
          </button>
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`px-4 py-2 rounded-full transition ${
              activeTab === 'syllabus'
                ? 'bg-white text-black font-bold shadow-md'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Curriculum & Projects
          </button>
        </div>

        {/* Tab 1: Overview */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Upcoming Lectures */}
            <div className="lg:col-span-8 space-y-6">
              <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                      <Video className="w-5 h-5 text-lime-400" /> Upcoming Live Interactive Lectures
                    </h3>
                    <p className="text-xs text-gray-400">Join 10 minutes prior to test your audio & video setup</p>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20 font-bold">
                    Live Session Active
                  </span>
                </div>

                <div className="space-y-4">
                  {upcomingClasses.map((cls, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-lime-400/20 transition"
                    >
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-semibold text-lime-400 block">
                          {cls.time}
                        </span>
                        <h4 className="text-sm font-bold text-white">{cls.topic}</h4>
                        <p className="text-xs text-gray-400">Instructor: {cls.mentor}</p>
                      </div>

                      <a
                        href={cls.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black font-bold text-xs hover:bg-gray-200 transition"
                      >
                        <span>Launch Zoom Lecture</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Submission Box */}
              <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-400" /> Capstone Project Milestones
                </h3>
                <div className="space-y-3 text-xs">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-white">Project 1: FinTech Real-Time Payment Settlement</h5>
                      <span className="text-gray-400">Spring Boot 3, Kafka & Distributed Transactions</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 font-bold font-mono">
                      Graded (95/100)
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div>
                      <h5 className="font-bold text-white">Project 2: AI-Powered Smart CRM with Vector Search</h5>
                      <span className="text-gray-400">Spring AI, Pinecone & Hybrid RAG Architecture</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-400 font-bold font-mono">
                      In Review (PR #14)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Mentor Advice & Placement Officer Contact */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Your Assigned Placement Mentor</h4>
                    <p className="text-xs text-gray-400">Rajesh Goud (Lead Placement Officer)</p>
                  </div>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  "Rahul, your Oracle interview is coming up on Oct 24th. Make sure to review our Spring Boot Multithreading and Redis Caching scenario notes."
                </p>
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-gray-400">Direct WhatsApp:</span>
                  <a href="https://api.whatsapp.com/send?phone=918861788812" target="_blank" rel="noreferrer" className="text-lime-400 font-mono font-semibold hover:underline">
                    +91 8861788812
                  </a>
                </div>
              </div>

              {/* Lab Access Box */}
              <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 space-y-3">
                <h4 className="text-sm font-bold text-white">Cloud Lab Credentials</h4>
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-gray-500">AWS Console:</span>
                    <span className="text-blue-400">jnan-student-084</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">K8s Cluster:</span>
                    <span className="text-emerald-400">eks-jnan-prod-v2</span>
                  </div>
                </div>
                <button
                  onClick={() => alert("Launching your AWS Cloud Sandbox session...")}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs transition"
                >
                  <span>Open Cloud Sandbox Terminal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Placement Drives Tracker */}
        {activeTab === 'placements' && (
          <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Your Live Placement Applications</h3>
              <p className="text-xs text-gray-400">Referrals generated by Jnan-Vexa Corporate Relations Cell</p>
            </div>

            <div className="space-y-4">
              {applications.map((app, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-black/40 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <h4 className="text-base font-bold text-white">{app.company}</h4>
                    <p className="text-xs text-gray-300 mt-0.5">{app.role}</p>
                    <span className="text-[11px] text-gray-500 block mt-1 font-mono">Drive Date: {app.date}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border font-mono ${app.badge}`}>
                    {app.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Mock Interview Scorecards */}
        {activeTab === 'mocks' && (
          <div className="space-y-6">
            <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Mock Interview Evaluation Scorecards</h3>
                <p className="text-xs text-gray-400">Granular feedback from Ex-FAANG Staff Engineers</p>
              </div>

              <div className="space-y-4">
                {mockInterviews.map((mock, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-base font-bold text-white">{mock.type}</h4>
                        <span className="text-xs text-gray-400">Evaluator: {mock.interviewer}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                          {mock.verdict}
                        </span>
                        <span className="text-lg font-black text-lime-400 font-mono">
                          {mock.score}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 text-xs text-gray-300 italic border border-white/5">
                      "{mock.notes}"
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Curriculum */}
        {activeTab === 'syllabus' && (
          <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white">Enrolled Syllabus Outline</h3>
              <p className="text-xs text-gray-400">Full Stack Java & Generative AI - Phase-by-Phase Roadmap</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coursesData[0].curriculum.map((item, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs">
                  <span className="text-[10px] font-mono font-bold text-lime-400 uppercase">{item.week}</span>
                  <h4 className="font-bold text-white text-sm">{item.title}</h4>
                  <ul className="space-y-1 text-gray-400 pt-1">
                    {item.topics.map((t, tIdx) => (
                      <li key={tIdx} className="flex items-center gap-1.5">
                        <span className="text-lime-400 font-bold">›</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
