'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_JOURNAL_ARTICLES } from '@/lib/data/mockData';
import { BookOpen, Clock, ArrowRight, User, Search, X, Sparkles, Share2 } from 'lucide-react';

export default function CareerJournalPage() {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<typeof MOCK_JOURNAL_ARTICLES[0] | null>(null);

  const categories = ['All', 'Career', 'Opportunities', 'Skills', 'Startups', 'Employers', 'Campus'];

  const filtered = MOCK_JOURNAL_ARTICLES.filter((a) => {
    const matchesCategory = category === 'All' || a.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.author.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = MOCK_JOURNAL_ARTICLES.find((a) => a.featured) || MOCK_JOURNAL_ARTICLES[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> PehlaChance Content Platform
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              The PehlaChance Career Journal
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Practical guides, founder insights, and career strategies written for early-career students navigating their first chance.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition whitespace-nowrap ${
                    category === c
                      ? 'bg-[#0A1428] text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search articles, topics, authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          {/* Featured Hero Article */}
          {category === 'All' && !searchQuery && (
            <div
              onClick={() => setActiveArticle(featured)}
              className="bg-[#0A1428] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 cursor-pointer hover:border-amber-500/50 transition group"
            >
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800 inline-block">
                    Featured Story
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight group-hover:text-amber-300 transition">
                    {featured.title}
                  </h2>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {featured.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={featured.author.avatar} alt={featured.author.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">{featured.author.name}</span>
                      <span className="text-[10px] text-slate-400">{featured.author.role}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-amber-400 font-bold">
                    <span>{featured.readTime}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 relative min-h-[300px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" />
              </div>
            </div>
          )}

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((art) => (
              <div
                key={art.id}
                onClick={() => setActiveArticle(art)}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
                    {art.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-amber-600 transition">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={art.author.avatar} alt={art.author.name} className="w-full h-full object-cover" />
                    </div>
                    <span className="font-semibold text-slate-700">{art.author.name}</span>
                  </div>
                  <span className="text-[11px]">{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-3">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 leading-tight">
                {activeArticle.title}
              </h2>
              
              <div className="flex items-center gap-3 text-xs text-slate-500 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={activeArticle.author.avatar} alt={activeArticle.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block">{activeArticle.author.name}</span>
                  <span>{activeArticle.author.role} • {activeArticle.readTime}</span>
                </div>
              </div>
            </div>

            <div className="prose prose-slate prose-sm text-xs leading-relaxed text-slate-700 space-y-4">
              <p className="font-medium text-slate-800 italic">{activeArticle.summary}</p>
              <p>
                In the modern early-career landscape, traditional credentials alone no longer suffice. Early hiring teams in high-growth startups and established technology companies receive hundreds of applications for every open internship. The distinguishing factor is consistently demonstrable proof of work.
              </p>
              <p>
                Whether you are refining your 60-second video elevator pitch or compiling your personal portfolio on PehlaChance, focus on the real problems you solved and the trade-offs you made. Recruiter interviews in 2026 prioritize candidates who can communicate technical intent clearly.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="bg-[#0A1428] text-white text-xs font-bold px-5 py-2.5 rounded-xl hover:bg-[#0F1D38]"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
