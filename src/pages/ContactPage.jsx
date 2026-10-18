// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, CheckCircle, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [mailUrl, setMailUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: coursesData[0].title,
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const leadText = `📨 *Direct Website Contact Inquiry - Jnan-Vexa Technologies*

👤 *Name:* ${formData.name}
📱 *Phone:* ${formData.phone}
✉️ *Email:* ${formData.email}
📚 *Program:* ${formData.course}
💬 *Message:* ${formData.message || 'Requesting curriculum and upcoming batch information.'}

_Submitted from Contact Page_`;

    const encodedText = encodeURIComponent(leadText);
    const waUrl = `https://api.whatsapp.com/send?phone=918861788812&text=${encodedText}`;

    const emailSubject = encodeURIComponent(`Inquiry from ${formData.name} - Jnan-Vexa Technologies`);
    const emailBody = encodeURIComponent(leadText);
    const mailtoUrl = `mailto:jnanvexatechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setWhatsappUrl(waUrl);
    setMailUrl(mailtoUrl);
    setSubmitted(true);

    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          CONTACT US
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <MessageSquare className="w-3.5 h-3.5" /> Direct Admissions &amp; Support
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Get in Touch with Our Academic Advisors
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Have questions about upcoming batches, placement contracts, weekend options for working employees, or fee installments? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Contact Info & Campuses */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Contact Desk
              </h3>

              <div className="space-y-4 text-xs">
                {/* Phone */}
                <a 
                  href="tel:+918861788812" 
                  className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-lime-400/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center text-lime-400 group-hover:scale-110 transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 block">Direct Mobile / WhatsApp:</span>
                    <span className="text-white font-mono font-bold text-sm">+91 8861788812</span>
                  </div>
                </a>

                {/* Email */}
                <a 
                  href="mailto:jnanvexatechnologies@gmail.com" 
                  className="flex items-center gap-3 p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-blue-400/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-gray-400 block">Admissions Email:</span>
                    <span className="text-white font-mono font-bold text-sm">jnanvexatechnologies@gmail.com</span>
                  </div>
                </a>

                {/* WhatsApp Chat button */}
                <a 
                  href="https://api.whatsapp.com/send?phone=918861788812&text=Hello%20Jnan-Vexa%20Technologies,%20I%20want%20to%20know%20more%20about%20your%20software%20courses."
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 font-semibold hover:bg-emerald-950/40 transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    <span>Instant WhatsApp Chat</span>
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              {/* Campus Locations */}
              <div className="space-y-3 pt-4 border-t border-white/5 text-xs text-gray-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Hyderabad Campus:</span>
                    <span className="text-gray-400">Cyber Towers Tech Hub, HITEC City, Hyderabad 500081</span>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Bengaluru Campus:</span>
                    <span className="text-gray-400">Prestige Tech Cloud, Whitefield Main Road, Bengaluru 560066</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0e111a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {submitted ? (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Sent Successfully!</h3>
                  <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>! Your inquiry has been dispatched to <span className="text-lime-400 font-mono">+91 8861788812</span> and <span className="text-blue-400 font-mono">jnanvexatechnologies@gmail.com</span>.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-lg hover:bg-emerald-500 transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp (+91 8861788812)</span>
                    </a>
                    <a
                      href={mailUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-600 text-white font-bold text-xs shadow-lg hover:bg-blue-500 transition"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct Email</span>
                    </a>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', course: coursesData[0].title, message: '' });
                      }}
                      className="text-xs text-gray-400 hover:text-white underline"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                      Send an Inquiry or Book a Demo
                    </h3>
                    <p className="text-xs text-gray-400 mb-6">
                      Details are automatically delivered to our WhatsApp &amp; admissions email.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Your Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sravan Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#141724] border border-gray-700/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Phone (WhatsApp Preferred)</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#141724] border border-gray-700/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        placeholder="sravan@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#141724] border border-gray-700/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 mb-1">Program of Interest</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                        className="w-full bg-[#141724] border border-gray-700/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500 transition"
                      >
                        {coursesData.map(c => (
                          <option key={c.id} value={c.title}>{c.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">How can we assist your software career?</label>
                    <textarea
                      rows="3"
                      placeholder="Share your current qualifications or years of work experience, and what your placement goals are..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#141724] border border-gray-700/60 rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
                    ></textarea>
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-[11px] text-gray-500">
                      🔒 Dispatches directly to +91 8861788812.
                    </span>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-xs hover:bg-[#b8e844] transition shadow-lg group"
                    >
                      <span>Send &amp; Notify Via WhatsApp</span>
                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
