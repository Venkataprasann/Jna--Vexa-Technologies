// src/App.jsx
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import EnrollmentModal from './components/EnrollmentModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import PlacementsPage from './pages/PlacementsPage';
import RoadmapsPage from './pages/RoadmapsPage';
import NewsMarketPage from './pages/NewsMarketPage';
import AchievementsPage from './pages/AchievementsPage';
import ContactPage from './pages/ContactPage';
import { Phone, MessageCircle, ArrowUpRight, Sparkles } from 'lucide-react';

function App() {
  const [activePage, setActivePage] = useState('home');
  const [enrollmentModalOpen, setEnrollmentModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const handleOpenEnrollment = (courseId = null) => {
    setSelectedCourseForModal(courseId);
    setEnrollmentModalOpen(true);
  };

  const handleCloseEnrollment = () => {
    setEnrollmentModalOpen(false);
    setSelectedCourseForModal(null);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <HomePage setActivePage={setActivePage} onOpenEnrollment={handleOpenEnrollment} />;
      case 'about':
        return <AboutPage setActivePage={setActivePage} onOpenEnrollment={handleOpenEnrollment} />;
      case 'courses':
        return <CoursesPage onOpenEnrollment={handleOpenEnrollment} />;
      case 'placements':
        return <PlacementsPage onOpenEnrollment={handleOpenEnrollment} />;
      case 'roadmaps':
        return <RoadmapsPage setActivePage={setActivePage} onOpenEnrollment={handleOpenEnrollment} />;
      case 'news':
        return <NewsMarketPage onOpenEnrollment={handleOpenEnrollment} />;
      case 'achievements':
        return <AchievementsPage onOpenEnrollment={handleOpenEnrollment} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setActivePage={setActivePage} onOpenEnrollment={handleOpenEnrollment} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-gray-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 border-b border-blue-500/20 py-2 px-4 text-center text-xs text-blue-200">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
          <span><strong>October 2026 Admissions Open:</strong> Enterprise Java GenAI &amp; Cloud DevOps Batches! Direct Support: <strong>+91 9014506271</strong></span>
          <button
            onClick={() => handleOpenEnrollment()}
            className="underline font-bold text-white hover:text-lime-300 ml-1 inline-flex items-center"
          >
            Claim Early Bird Scholarship ›
          </button>
        </span>
      </div>

      {/* Main Navbar */}
      <Navbar 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenEnrollment={handleOpenEnrollment} 
      />

      {/* Active Page View */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Floating Quick Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 select-none">
        <a
          href="https://api.whatsapp.com/send?phone=919014506271&text=Hello%20Jnan-Vexa%20Technologies,%20I%20want%20to%20know%20more%20about%20your%20software%20courses%20and%20placement%20assistance."
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#12161f] border border-white/10 hover:border-emerald-500/50 text-white text-xs font-bold shadow-2xl backdrop-blur-md hover:scale-105 transition group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <MessageCircle className="w-4 h-4 text-emerald-400" />
          <span className="hidden sm:inline">WhatsApp: +91 9014506271</span>
        </a>

        <button
          onClick={() => handleOpenEnrollment()}
          className="inline-flex items-center gap-2.5 pl-5 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-xs sm:text-sm hover:bg-[#b8e844] transition shadow-2xl hover:scale-105 group"
        >
          <Sparkles className="w-4 h-4" />
          <span>Book Free Counselling</span>
          <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
            <ArrowUpRight className="w-3.5 h-3.5" />
          </div>
        </button>
      </div>

      {/* Global Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenEnrollment={handleOpenEnrollment} 
      />

      {/* Global Enrollment & Counselling Modal */}
      <EnrollmentModal
        isOpen={enrollmentModalOpen}
        onClose={handleCloseEnrollment}
        selectedCourseId={selectedCourseForModal}
      />

    </div>
  );
}

export default App;
