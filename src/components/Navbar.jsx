// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Phone, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({ activePage, setActivePage, onOpenEnrollment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Removed Dashboard portal page as requested
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'courses', label: 'Courses' },
    { id: 'placements', label: 'Placements' },
    { id: 'roadmaps', label: 'Roadmaps' },
    { id: 'news', label: 'Market Pulse' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full pt-3 pb-2 px-4 transition-all">
      <div className="max-w-6xl mx-auto">
        
        {/* Floating Capsule Bar matching Aentoria */}
        <div className="bg-white/95 text-gray-900 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 shadow-2xl border border-gray-200/80 flex items-center justify-between transition-all">
          
          {/* Brand Logo & Full Institute Name placed in the reclaimed space */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left focus:outline-none flex-shrink-0"
          >
            <div className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-xl overflow-hidden bg-black p-0.5 group-hover:scale-105 transition-transform flex-shrink-0 shadow-sm border border-gray-200/60">
              <img
                src="/images/jnan-vexa-logo.png"
                alt="Jnan-Vexa Technologies Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-gray-950 group-hover:text-blue-600 transition uppercase leading-tight">
                Jnan-Vexa Technologies
              </span>
              <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest hidden sm:block">
                Software Training Institute
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    isActive
                      ? 'text-gray-950 bg-gray-100 shadow-sm font-bold'
                      : 'text-gray-600 hover:text-gray-950 hover:bg-gray-50'
                  }`}
                >
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action CTA Button matching Aentoria */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenEnrollment()}
              className="inline-flex items-center gap-2.5 pl-4 pr-1.5 py-1.5 rounded-full bg-black text-white hover:bg-gray-800 text-xs font-bold transition-all shadow-md group"
            >
              <span className="tracking-wide">Book A Call</span>
              <div className="w-6 h-6 rounded-full bg-[#cdfb56] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenEnrollment()}
              className="sm:hidden inline-flex items-center gap-1.5 pl-3 pr-1 py-1 rounded-full bg-black text-white text-[11px] font-bold"
            >
              <span>Book</span>
              <div className="w-5 h-5 rounded-full bg-[#cdfb56] text-black flex items-center justify-center">
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </div>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full bg-gray-100 text-gray-800 hover:bg-gray-200 transition"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="max-w-6xl mx-auto mt-2">
          <div className="bg-white/95 text-gray-900 backdrop-blur-xl border border-gray-200 rounded-3xl p-5 shadow-2xl space-y-3">
            <div className="grid grid-cols-2 gap-1.5">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition ${
                      isActive
                        ? 'bg-black text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span>{link.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnrollment();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-black text-white font-bold text-xs"
              >
                <span>Enroll / Book Free 1-on-1 Counselling</span>
                <div className="w-5 h-5 rounded-full bg-[#cdfb56] text-black flex items-center justify-center">
                  <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                </div>
              </button>

              <div className="flex items-center justify-between text-xs text-gray-600 px-2 pt-1 font-mono">
                <a href="tel:+919014506271" className="flex items-center gap-1 hover:text-black">
                  <Phone className="w-3.5 h-3.5 text-blue-600" /> +91 9014506271
                </a>
                <span className="text-[11px] text-gray-500">
                  jnanvexatechnologies@gmail.com
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
