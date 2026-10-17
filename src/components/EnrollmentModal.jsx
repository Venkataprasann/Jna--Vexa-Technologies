// src/components/EnrollmentModal.jsx
import React, { useState } from 'react';
import { X, CheckCircle, Calendar, Phone, Mail, User, BookOpen, Briefcase, Sparkles, ArrowRight, MessageCircle, Send } from 'lucide-react';
import { coursesData } from '../data/coursesData';

export default function EnrollmentModal({ isOpen, onClose, selectedCourseId = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    courseId: selectedCourseId || coursesData[0].id,
    experienceLevel: 'College Student / Fresher Graduate',
    preferredBatch: 'Weekend Pro Masterclass (Sat & Sun)',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [mailUrl, setMailUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const selectedCourse = coursesData.find(c => c.id === formData.courseId) || coursesData[0];

    // Construct detailed lead message
    const leadText = `🚀 *New Enrollment & Demo Booking Request - Jnan-Vexa Technologies*

👤 *Candidate Name:* ${formData.name}
📱 *Phone / WhatsApp:* ${formData.phone}
✉️ *Email Address:* ${formData.email}
📚 *Selected Course:* ${selectedCourse.title}
💼 *Current Background:* ${formData.experienceLevel}
🗓️ *Preferred Batch:* ${formData.preferredBatch}
🎯 *Goals / Notes:* ${formData.notes ? formData.notes : 'Interested in 100% placement assistance & syllabus details.'}

_Submitted via Jnan-Vexa Official Website_`;

    const encodedText = encodeURIComponent(leadText);
    const waUrl = `https://api.whatsapp.com/send?phone=919014506271&text=${encodedText}`;

    // Email dispatch
    const emailSubject = encodeURIComponent(`New Course Enrollment: ${formData.name} - ${selectedCourse.title}`);
    const emailBody = encodeURIComponent(leadText);
    const mailtoUrl = `mailto:jnanvexatechnologies@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setWhatsappUrl(waUrl);
    setMailUrl(mailtoUrl);
    setIsSubmitted(true);

    // Auto-trigger WhatsApp dispatch in a new tab so lead reaches the mobile number immediately
    try {
      window.open(waUrl, '_blank');
    } catch (err) {
      console.log("Popup blocked, user can click the manual button below", err);
    }
  };

  const selectedCourse = coursesData.find(c => c.id === formData.courseId) || coursesData[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity">
      <div className="relative w-full max-w-2xl bg-[#0e1017] border border-gray-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#12151f]">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-xl bg-lime-400/10 border border-lime-400/20 text-lime-400">
              <Sparkles className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-white">
                {isSubmitted ? "Application Received & Transmitted!" : "Enroll / Book Free 1-on-1 Career Counselling"}
              </h3>
              <p className="text-xs text-gray-400">Jnan-Vexa Technologies • Direct Admissions Desk</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <CheckCircle className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-bold text-white">Application Recorded for {formData.name}!</h4>
                <p className="text-gray-300 max-w-md mx-auto text-xs sm:text-sm mt-1 leading-relaxed">
                  Your enrollment details for <span className="text-lime-400 font-semibold">{selectedCourse.title}</span> are being transmitted directly to our Admissions Officer:
                </p>
              </div>

              {/* Verified Contact Destination */}
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Official Mobile (WhatsApp):</span>
                  <span className="text-white font-mono font-bold">+91 9014506271</span>
                </div>
                <div className="flex items-center justify-between text-gray-300">
                  <span className="text-gray-400">Official Admissions Email:</span>
                  <span className="text-white font-mono font-bold">jnanvexatechnologies@gmail.com</span>
                </div>
                <div className="flex items-center justify-between text-gray-300 pt-1 border-t border-white/5">
                  <span className="text-gray-400">Candidate Phone:</span>
                  <span className="text-lime-400 font-mono font-bold">{formData.phone}</span>
                </div>
              </div>

              {/* Action Buttons to trigger WhatsApp and Email directly */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send to WhatsApp (+91 9014506271)</span>
                </a>

                <a
                  href={mailUrl}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs transition shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send to Email (jnanvexatechnologies@gmail.com)</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    onClose();
                  }}
                  className="text-xs text-gray-400 hover:text-white underline"
                >
                  Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Notification Banner */}
              <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-500/20 text-xs text-blue-300 flex items-center justify-between">
                <span>Direct notification sent to <strong>+91 9014506271</strong> &amp; <strong>jnanvexatechnologies@gmail.com</strong></span>
              </div>

              {/* Course Selection */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-blue-400" /> Select Desired Program
                </label>
                <select
                  value={formData.courseId}
                  onChange={(e) => setFormData({ ...formData, courseId: e.target.value })}
                  className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                >
                  {coursesData.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.title} ({c.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Course Summary Card */}
              <div className="p-3.5 rounded-xl bg-blue-950/20 border border-blue-500/20 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div>
                  <span className="text-gray-400">Average Placement Package:</span>
                  <span className="ml-1 text-emerald-400 font-bold">{selectedCourse.avgPackage}</span>
                </div>
                <div>
                  <span className="text-gray-400">Fee:</span>
                  <span className="ml-1 text-white font-bold">{selectedCourse.fee}</span>
                  <span className="ml-1 text-gray-400">({selectedCourse.emi})</span>
                </div>
              </div>

              {/* User Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-blue-400" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-blue-400" /> Phone Number (WhatsApp)
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" /> Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul.sharma@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                />
              </div>

              {/* Background & Batch Preference */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5 text-blue-400" /> Your Current Status
                  </label>
                  <select
                    value={formData.experienceLevel}
                    onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                    className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="College Student / Fresher Graduate">College Student / Fresher Graduate</option>
                    <option value="Working IT Professional (1-3 Yrs)">Working IT Professional (1-3 Yrs)</option>
                    <option value="Senior IT Professional (4+ Yrs)">Senior IT Professional (4+ Yrs)</option>
                    <option value="Non-IT / Career Switcher">Non-IT / Career Switcher</option>
                    <option value="Career Gap / Looking for Comeback">Career Gap / Looking for Comeback</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" /> Preferred Batch Mode
                  </label>
                  <select
                    value={formData.preferredBatch}
                    onChange={(e) => setFormData({ ...formData, preferredBatch: e.target.value })}
                    className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="Weekday Morning (8 AM - 10 AM)">Weekday Morning (8 AM - 10 AM)</option>
                    <option value="Weekday Evening (7 PM - 9 PM)">Weekday Evening (7 PM - 9 PM)</option>
                    <option value="Weekend Pro Masterclass (Sat & Sun)">Weekend Pro Masterclass (Sat & Sun)</option>
                    <option value="Classroom Offline (Hyderabad Campus)">Classroom Offline (Hyderabad Campus)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">
                  Specific Career Goals or Questions (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. Need placement assistance, looking to switch into AI/DevOps..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#161a24] border border-gray-700 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-blue-500 transition placeholder:text-gray-500"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <span className="text-[11px] text-gray-400">
                  ⚡ Auto-routes to +91 9014506271 &amp; admissions email.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2.5 pl-6 pr-2 py-2 rounded-full bg-[#cdfb56] text-black font-extrabold text-sm hover:bg-[#b8e844] transition shadow-lg group"
                >
                  <span>Submit &amp; Transmit Lead</span>
                  <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center group-hover:rotate-45 transition-transform">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
