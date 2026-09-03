'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_JOURNAL_ARTICLES } from '@/lib/data/mockData';
import { BookOpen, Clock, ArrowRight, User } from 'lucide-react';
import Link from 'next/link';

export default function CareerJournalPage() {
  const [category, setCategory] = useState('All');

  const filtered = MOCK_JOURNAL_ARTICLES.filter(a => category === 'All' || a.category === category);
  const featured = MOCK_JOURNAL_ARTICLES.find(a => a.featured) || MOCK_JOURNAL_ARTICLES[0];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              PehlaChance Content Platform
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              The PehlaChance Career Journal
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Practical guides, founder insights, and career strategies written for early-career students navigating their first chance.
            </p>
          </div>

          {/* Featured Hero Article */}
          <div className="bg-[#0A1428] text-white rounded-3xl overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                  Featured Story
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
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
                <span>{featured.readTime}</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-900 relative min-h-[300px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={featured.coverImage} alt={featured.title} className="w-full h-full object-cover opacity-80" />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {['All', 'Career', 'Opportunities', 'Skills', 'Startups', 'Employers', 'Campus'].map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`text-xs font-bold px-4 py-2 rounded-xl transition ${
                  category === c ? 'bg-[#0A1428] text-white' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((art) => (
              <div key={art.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition">
                <div className="space-y-3">
                  <span className="text-[10px] font-bold uppercase bg-slate-100 text-slate-700 px-2.5 py-0.5 rounded">
                    {art.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 leading-snug">{art.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{art.summary}</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{art.author.name}</span>
                  <span>{art.readTime}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
