// src/pages/NewsMarketPage.jsx
import React, { useState } from 'react';
import { Newspaper, Sparkles, TrendingUp, Search, Calendar, Clock, ArrowUpRight, X, Bookmark, Share2, CheckCircle2 } from 'lucide-react';
import { newsArticles } from '../data/newsData';

export default function NewsMarketPage({ onOpenEnrollment }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState(null);
  const [bookmarkedIds, setBookmarkedIds] = useState([]);

  const categories = ['All', 'MNC Hiring', 'AI & GenAI Updates', 'Market Conditions', 'Tech Trends & Salaries'];

  const filteredNews = newsArticles.filter(art => {
    const matchesCat = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch = 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  const toggleBookmark = (id) => {
    setBookmarkedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#080808] py-16 sm:py-24">
      {/* Background Watermark */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="aentoria-ghost-title text-center">
          MARKET PULSE
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="flex justify-center">
            <span className="aentoria-badge">
              <Newspaper className="w-3.5 h-3.5" /> Real-Time Tech Intelligence
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Software Market Conditions, MNC Drives & AI Updates
          </h1>
          <p className="text-sm sm:text-base text-gray-400">
            Fresh insights on global technology recruitment, enterprise AI shifts, high-hiring MNC programs, and salary trends to keep your career ahead of the curve.
          </p>
        </div>

        {/* Filter and Search */}
        <div className="bg-[#0e111a] border border-white/10 rounded-2xl p-4 sm:p-6 mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
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

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news or company..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#141724] border border-gray-700/60 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map(article => {
            const isBookmarked = bookmarkedIds.includes(article.id);

            return (
              <div
                key={article.id}
                className="bg-[#0e111a] border border-white/10 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-blue-500/30 transition-all hover:-translate-y-1 duration-300 shadow-xl group"
              >
                <div>
                  {/* Image */}
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold uppercase rounded-md bg-blue-600 text-white shadow">
                        {article.badge}
                      </span>
                    </div>
                    <button
                      onClick={() => toggleSkill(article.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-black transition"
                      aria-label="Bookmark article"
                    >
                      <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-blue-400 text-blue-400' : 'text-white'}`} />
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-gray-500">
                      <span className="text-blue-400 font-semibold">{article.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight leading-snug line-clamp-2 group-hover:text-blue-300 transition">
                      {article.title}
                    </h3>

                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Key Takeaways Snippet */}
                    <div className="pt-2">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1 text-[11px] text-gray-300">
                        <span className="text-blue-400 font-bold block mb-1">Key Market Takeaway:</span>
                        <div className="flex items-start gap-1.5">
                          <span className="text-emerald-400 font-bold">›</span>
                          <span className="line-clamp-2">{article.keyTakeaways[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between">
                  <span className="text-[11px] text-gray-500 font-mono">
                    {article.date}
                  </span>
                  <button
                    onClick={() => setReadingArticle(article)}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-400 hover:text-blue-300 transition"
                  >
                    <span>Read Analysis</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Reading Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#0e1017] border border-gray-800 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col my-8">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#12151f]">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                  {readingArticle.category}
                </span>
                <span className="text-xs text-gray-400">• {readingArticle.readTime}</span>
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                {readingArticle.title}
              </h2>

              <div className="flex items-center justify-between text-xs text-gray-400 pb-4 border-b border-white/5">
                <span>Published: {readingArticle.date}</span>
                <span>Source: Jnan-Vexa Market Intelligence Bureau</span>
              </div>

              <div className="rounded-2xl overflow-hidden aspect-video border border-white/10">
                <img
                  src={readingArticle.image}
                  alt={readingArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="prose prose-invert max-w-none text-sm text-gray-300 space-y-4 leading-relaxed whitespace-pre-line">
                {readingArticle.fullContent}
              </div>

              {/* Key Takeaways Callout */}
              <div className="p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 space-y-3">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Key Takeaways for Students & Job Seekers:
                </h4>
                <ul className="space-y-2 text-xs text-gray-300">
                  {readingArticle.keyTakeaways.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">›</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Steps CTA */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h5 className="text-sm font-bold text-white">Want to capitalize on this tech wave?</h5>
                  <p className="text-xs text-gray-400">Our programs train you directly in these high-demand skills.</p>
                </div>
                <button
                  onClick={() => {
                    setReadingArticle(null);
                    onOpenEnrollment();
                  }}
                  className="aentoria-btn-primary py-2.5 px-5 text-xs whitespace-nowrap"
                >
                  <span>Book Free Counselling</span>
                  <div className="aentoria-btn-circle">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
