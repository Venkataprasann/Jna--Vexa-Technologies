// src/pages/AboutPage.jsx
import React from 'react';
import { Building, Sparkles, Target, Compass, Award, Users, CheckCircle2, ArrowUpRight, ShieldCheck, MapPin, Phone } from 'lucide-react';

export default function AboutPage({ onOpenEnrollment, setActivePage }) {
  const mentors = [
    {
      name: "Dr. Arvind Murthy",
      role: "Chief Technical Officer & AI Lead",
      creds: "Ex-Staff AI Architect @ Microsoft | Ph.D. in Distributed Systems",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      bio: "18+ years designing scalable systems and agentic AI architectures. Guided over 800+ engineers into Tier-1 product organizations."
    },
    {
      name: "Kiran Teja",
      role: "Head of Cloud & DevOps Engineering",
      creds: "Ex-Principal Cloud Architect @ AWS | CKA & AWS Solutions Architect",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
      bio: "Spearheaded enterprise Kubernetes migrations for Fortune 100 banks. Passionate about automating CI/CD and infrastructure as code."
    },
    {
      name: "Radhika Sen",
      role: "Lead Full Stack & Microservices Mentor",
      creds: "Ex-Senior Engineering Manager @ Oracle | Full Stack Java Pioneer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
      bio: "Master of high-throughput distributed transaction engines using Spring Boot 3, Kafka, and Redis caching."
    },
    {
      name: "Siddharth Verma",
      role: "Head of Corporate Relations & Placements",
      creds: "Former Lead Technical Recruiter @ Google India",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
      bio: "Maintains direct hiring partnerships with 450+ MNCs and startups. Expert in ATS resume optimization and salary negotiation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          ABOUT US
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Building className="w-3.5 h-3.5" /> Jnan-Vexa Technologies
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Pioneering Enterprise Software & AI Education Since 2011
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Founded with a conviction that traditional college degrees teach outdated theory while tech giants crave hands-on distributed systems and AI architecture.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              We don't teach syntax. <br />
              <span className="text-blue-400">We train you to think like a Software Architect.</span>
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              At <strong>Jnan-Vexa Technologies</strong>, we realized that thousands of brilliant students and hardworking IT employees were getting stuck in low-salary support projects simply because they lacked exposure to modern production tooling like Docker, Kubernetes, Apache Kafka, and Generative AI.
            </p>

            <p className="text-sm text-gray-300 leading-relaxed font-normal">
              We built an academy where every single assignment is a production pull request, every mentor is an active or former staff engineer at a global MNC, and every trainee receives rigorous 1-on-1 interview training until they hold an offer in hand.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-[#0e111a] border border-white/5 space-y-1">
                <span className="text-2xl font-black text-white">2,850+</span>
                <p className="text-xs text-gray-400">Engineers Placed in Product & Consulting MNCs</p>
              </div>
              <div className="p-4 rounded-2xl bg-[#0e111a] border border-white/5 space-y-1">
                <span className="text-2xl font-black text-emerald-400">450+</span>
                <p className="text-xs text-gray-400">Active Corporate Hiring Partner Network</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-[4/3] group">
              <img
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80"
                alt="Jnan-Vexa Training Session"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs text-blue-400 font-mono font-bold bg-black/60 px-3 py-1 rounded-full border border-blue-500/20 backdrop-blur-md">
                  Live Enterprise Training Session
                </span>
                <h4 className="text-base font-bold text-white mt-2">
                  Interactive Whiteboard System Design & Code Review
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership & Faculty Team */}
        <div className="mb-24 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="aentoria-badge">
              <Users className="w-3.5 h-3.5" /> World-Class Mentorship
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Learn from Ex-FAANG & Top Tier MNC Architects
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Our faculty members bring decades of real production experience from Microsoft, Amazon, Oracle, and Google.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentors.map((mentor, idx) => (
              <div
                key={idx}
                className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 flex flex-col justify-between hover:border-blue-500/30 transition group shadow-xl"
              >
                <div>
                  <img
                    src={mentor.avatar}
                    alt={mentor.name}
                    className="w-full aspect-square rounded-2xl object-cover mb-4 border border-white/10 group-hover:scale-[1.02] transition"
                  />
                  <h4 className="text-base font-bold text-white">{mentor.name}</h4>
                  <p className="text-xs font-semibold text-blue-400 mt-0.5">{mentor.role}</p>
                  <p className="text-[11px] text-gray-400 font-mono mt-1">{mentor.creds}</p>
                  <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                    {mentor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Campus & Lab Infrastructure */}
        <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-8 sm:p-12 mb-16 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="aentoria-badge">
              <Building className="w-3.5 h-3.5" /> World-Class Facilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              State-of-the-Art Physical & Cloud Labs
            </h3>
            <p className="text-xs sm:text-sm text-gray-400">
              Centrally located in India's premier tech corridors with dedicated 24/7 cloud sandbox access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
                <MapPin className="w-5 h-5" />
                <span>Hyderabad Main Innovation Campus</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Cyber Towers Innovation Hub, 4th Floor, HITEC City, Madhapur, Hyderabad, Telangana 500081.
              </p>
              <div className="text-xs text-gray-400 space-y-1 pt-2 border-t border-white/5">
                <p>• 150-seat High Performance GPU & Cloud Lab</p>
                <p>• Dedicated 1-on-1 Mock Interview Soundproof Pods</p>
                <p>• Walkable from HITEC City Metro Station</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <div className="flex items-center gap-2 text-blue-400 text-sm font-bold">
                <MapPin className="w-5 h-5" />
                <span>Bengaluru Technology Campus</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                Prestige Tech Cloud, 2nd Floor, Whitefield Main Road, Bengaluru, Karnataka 560066.
              </p>
              <div className="text-xs text-gray-400 space-y-1 pt-2 border-t border-white/5">
                <p>• Advanced Multi-Agent AI Development Studio</p>
                <p>• Weekend Corporate Professional Lounge & Labs</p>
                <p>• Proximity to EPIP Zone & ITPL Tech Parks</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <button
            onClick={() => onOpenEnrollment()}
            className="aentoria-btn-primary py-3.5 px-8 text-sm"
          >
            <span>Book a Campus Visit & Free Assessment</span>
            <div className="aentoria-btn-circle">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
