// src/components/ProcessSection.jsx
import React from 'react';
import { Sparkles, Terminal, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function ProcessSection({ onOpenEnrollment }) {
  const steps = [
    {
      num: "Step 01",
      position: "01 / 03",
      time: "WEEKS 1 - 8",
      title: "Core Engineering & Deep Fundamentals",
      desc: "Master clean object-oriented architecture, advanced data structures, concurrency, and scalable API design. No shallow theory—every lesson is backed by live production code.",
      icon: Terminal,
      highlights: ["Data Structures & Algorithmic Problem Solving", "Modern Framework Architecture", "Clean Code & SOLID Design Patterns"]
    },
    {
      num: "Step 02",
      position: "02 / 03",
      time: "WEEKS 9 - 16",
      title: "Enterprise Architecture & Capstones",
      desc: "Build real-world multi-tier distributed microservices, event streaming with Kafka, cloud deployments on AWS using Docker & Kubernetes, and integrate modern GenAI agents.",
      icon: Code2,
      highlights: ["Distributed Caching & High-Throughput Pipelines", "Autonomous AI Agents & RAG Frameworks", "Production Cloud Deployment on AWS"]
    },
    {
      num: "Step 03",
      position: "03 / 03",
      time: "WEEKS 17 - 24",
      title: "Exclusive MNC Drives & Placements",
      desc: "ATS resume overhaul, 1-on-1 mock interview panels with Staff Architects from top MNCs, direct company referrals, and aggressive salary negotiation support.",
      icon: Rocket,
      highlights: ["1-on-1 Mock Rounds with Ex-FAANG Leads", "Exclusive Recruitment Drives (450+ Partners)", "Guaranteed Placement Support until Hired"]
    }
  ];

  return (
    <section className="relative py-24 bg-[#0a0c12] border-b border-white/5 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aentoria-ghost-title pointer-events-none">
        METHODOLOGY
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title matching Aentoria */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Sparkles className="w-3.5 h-3.5" /> Proven Placement Framework
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            How we engineer high-paid software careers
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            A battle-tested 3-stage training blueprint that has enabled over 2,850+ students and working professionals to secure offers in Tier-1 product and consulting MNCs.
          </p>
        </div>

        {/* 3 Step Process Grid matching Aentoria layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-[#0f121a] border border-white/5 rounded-3xl p-8 flex flex-col justify-between hover:border-blue-500/30 transition-all group hover:-translate-y-1 duration-300"
              >
                {/* Step Top Bar */}
                <div>
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/5">
                    <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 font-mono">
                      {step.time}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600/20 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed mb-6 font-normal">
                    {step.desc}
                  </p>

                  {/* Highlight checklist */}
                  <div className="space-y-2 mb-8">
                    {step.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-gray-300">
                        <span className="text-blue-400 font-bold">›</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step Bottom Indicator */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
                  <span>Phase Progress</span>
                  <span className="text-blue-400 font-bold">{step.position}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA banner below process */}
        <div className="mt-16 text-center">
          <button
            onClick={() => onOpenEnrollment()}
            className="aentoria-btn-primary py-3 px-8 text-sm"
          >
            <span>Start Your 3-Stage Transformation</span>
            <div className="aentoria-btn-circle">
              <ArrowRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}
