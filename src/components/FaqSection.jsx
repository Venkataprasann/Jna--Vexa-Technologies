// src/components/FaqSection.jsx
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Phone, ArrowUpRight } from 'lucide-react';

export default function FaqSection({ onOpenEnrollment }) {
  const [openFaqIdx, setOpenFaqIdx] = useState(0);

  const faqs = [
    {
      q: "How does Jnan-Vexa Technologies ensure 100% placement assistance?",
      a: "We have formal hiring partnerships with 450+ Tier-1 product and consulting MNCs. Once you complete the enterprise capstone projects, our dedicated placement cell handles ATS resume optimization, conducts minimum 5 rounds of 1-on-1 mock technical interviews with Ex-FAANG Staff Engineers, and schedules direct off-campus interview slots until you secure an offer."
    },
    {
      q: "I am from a Non-IT / Mechanical / Civil / Commerce background. Can I enroll?",
      a: "Yes, absolutely! Over 35% of our successful alumni come from non-CS backgrounds or career gaps. We start each program from foundational programming principles, building up through hands-on labs with dedicated teaching assistants, ensuring you become competitive with top Computer Science graduates."
    },
    {
      q: "Are the programs suitable for working software engineers looking to switch?",
      a: "Yes. We conduct dedicated Weekend Pro Masterclasses (Saturday & Sunday) specifically designed for working IT professionals. These batches focus heavily on Distributed Microservices, High-Level System Design (HLD), Kafka, Kubernetes, and Generative AI to facilitate high-hike (150%+) career upgrades without quitting your current job."
    },
    {
      q: "What if I miss a live session or need help during lab practice?",
      a: "All live classes are recorded in HD and available indefinitely on your Student Dashboard within 2 hours. Furthermore, our physical and virtual labs are staffed with full-time Technical Mentors who resolve coding errors, debug Docker environments, and review PRs via 1-on-1 screen-sharing."
    },
    {
      q: "Are installment and No-Cost EMI options available for the course fees?",
      a: "Yes, we provide flexible 3 to 12-month No-Cost EMI plans through our banking partners (HDFC, ICICI, Bajaj Finserv) starting as low as ₹3,800/month. We also offer merit scholarships for college graduates with top scores in our technical baseline quiz."
    }
  ];

  const toggleFaq = (idx) => {
    setOpenFaqIdx(openFaqIdx === idx ? -1 : idx);
  };

  return (
    <section className="relative py-24 bg-[#0a0c12] border-b border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Title & Call Support Box */}
          <div className="lg:col-span-5 space-y-6">
            <span className="aentoria-badge">
              <HelpCircle className="w-3.5 h-3.5" /> Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Everything you need to know about our training & placement
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Have questions about batch schedules, offline vs online labs, placement guarantees, or syllabus customization? Our academic advisors are ready to assist.
            </p>

            <div className="p-6 rounded-2xl bg-[#0f121a] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Need Personal Clarification?</h4>
                  <p className="text-xs text-gray-400">Talk to our Academic Counsellors</p>
                </div>
              </div>
              <button
                onClick={() => onOpenEnrollment()}
                className="w-full aentoria-btn-primary justify-center py-2.5 text-xs"
              >
                <span>Request Instant Call Back</span>
                <div className="aentoria-btn-circle">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Accordion FAQs */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? 'bg-[#10131d] border-blue-500/30 shadow-lg'
                      : 'bg-[#0e1017] border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none select-none"
                  >
                    <span className="text-base font-bold text-white tracking-tight">
                      {faq.q}
                    </span>
                    <div
                      className={`flex items-center justify-center w-8 h-8 rounded-full border flex-shrink-0 transition-transform ${
                        isOpen
                          ? 'bg-blue-600 border-blue-500 text-white rotate-180'
                          : 'bg-white/5 border-white/10 text-gray-400'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-gray-300 leading-relaxed border-t border-white/5 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
