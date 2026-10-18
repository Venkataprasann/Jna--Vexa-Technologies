// src/components/Footer.jsx
import React, { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, MessageCircle } from 'lucide-react';

export default function Footer({ setActivePage, onOpenEnrollment }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail('');
    }
  };

  const navigateTo = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060709] border-t border-white/5 pt-20 pb-12 overflow-hidden select-none">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-blue-600/10 blur-[100px] pointer-events-none"></div>

      {/* Aentoria Big Ghost Watermark Title */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          JNAN-VEXA
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter & Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/5">
          <div className="lg:col-span-5 space-y-3">
            <span className="aentoria-badge">
              <Mail className="w-3.5 h-3.5" /> Market Intelligence &amp; Updates
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Keep up to date with tech market &amp; AI hiring drives
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Subscribe to get verified MNC off-campus drive notifications, quarterly IT salary benchmarks, and AI software architecture briefings directly to your inbox.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-center">
            {subscribed ? (
              <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-semibold">Thank you for subscribing! You will receive our weekly tech hiring bulletin.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#12141c] border border-gray-800 rounded-full px-6 py-3.5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-sm hover:bg-[#b8e844] transition shadow-lg group self-start sm:self-auto"
                >
                  <span>Subscribe Now</span>
                  <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </button>
              </form>
            )}
            <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
              <span>✓ Weekly MNC off-campus digest</span>
              <span>✓ Direct support: +91 9014506271</span>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-16 border-b border-white/5 text-sm">
          
          {/* Institute Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl overflow-hidden bg-[#030818] p-0.5 border border-blue-500/30 flex-shrink-0 shadow-md">
                <img
                  src="/images/jv-letters.png"
                  alt="JV Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight uppercase leading-tight">
                  Jnan-Vexa Technologies
                </span>
                <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase">
                  Software Training Institute
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Empowering students and software engineers with deep enterprise skills, Generative AI, and 100% placement assistance across 450+ global MNCs.
            </p>
            <div className="pt-2 space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Hyderabad: Cyber Towers Tech Hub, HITEC City, Telangana 500081</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <span>Bengaluru: Prestige Tech Cloud, Whitefield Main Rd, Bengaluru 560066</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-lime-400 flex-shrink-0" />
                <a href="tel:+919014506271" className="font-mono text-white font-bold hover:text-lime-400 transition">
                  +91 9014506271
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href="mailto:jnanvexatechnologies@gmail.com" className="font-mono text-white hover:text-blue-400 transition">
                  jnanvexatechnologies@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Top Programs</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  Full Stack Java &amp; GenAI
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  Applied GenAI &amp; LLMs
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  Full Stack MERN &amp; Next.js 15
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  Cloud DevOps &amp; Kubernetes
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  Big Data Engineering &amp; Snowflake
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('courses')} className="hover:text-white transition">
                  SDET &amp; Automation Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Institute Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Explore Institute</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={() => navigateTo('about')} className="hover:text-white transition">
                  About Jnan-Vexa
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('placements')} className="hover:text-white transition">
                  Placement Records &amp; Stats
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('roadmaps')} className="hover:text-white transition">
                  Career Roadmaps (0-40 LPA)
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('achievements')} className="hover:text-white transition">
                  Wall of Fame &amp; Awards
                </button>
              </li>
              <li>
                <button onClick={() => navigateTo('news')} className="hover:text-white transition">
                  Market Pulse &amp; AI Updates
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Support & Counselling */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-gray-200 uppercase tracking-wider">Admissions</h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>
                <button onClick={onOpenEnrollment} className="hover:text-white transition text-lime-400 font-medium">
                  Free 1-on-1 Counselling
                </button>
              </li>
              <li>
                <button onClick={onOpenEnrollment} className="hover:text-white transition">
                  Download Course Syllabus
                </button>
              </li>
              <li>
                <a 
                  href="https://api.whatsapp.com/send?phone=919014506271&text=Hello%20Jnan-Vexa%20Technologies,%20I%20am%20interested%20in%20courses%20and%20placement%20details."
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition text-emerald-400 font-medium flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> WhatsApp: +91 9014506271
                </a>
              </li>
              <li>
                <button onClick={() => navigateTo('contact')} className="hover:text-white transition">
                  Campus Visit Booking
                </button>
              </li>
              <li>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-gray-400 bg-white/5 px-2.5 py-1 rounded-md border border-white/5 mt-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-400" /> ISO 9001:2015 Certified
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} <span className="text-gray-300 font-semibold">Jnan-Vexa Technologies</span>. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:+919014506271" className="hover:text-lime-400 transition font-mono">+91 9014506271</a>
            <a href="mailto:jnanvexatechnologies@gmail.com" className="hover:text-blue-400 transition font-mono">jnanvexatechnologies@gmail.com</a>
            <a href="#contact" onClick={() => navigateTo('contact')} className="hover:text-gray-300 transition">Admissions Desk</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
