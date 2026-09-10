'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEEDED_RESOURCES, ResourceItem } from '@/data/resources';
import { BookOpen, Clock, Download, Search, X, CheckCircle2, Sparkles, Share2, Copy } from 'lucide-react';

const EXTENDED_RESOURCES: ResourceItem[] = [
  ...SEEDED_RESOURCES,
  {
    id: 'res-5',
    title: 'Strategic Early-Career Planning: From First Year to Placement',
    category: 'Career Strategy',
    readTime: '6 min read',
    summary: 'A semester-by-semester roadmap covering fundamentals, open-source contributions, hackathons, and company shortlisting.',
    content: `### Year 1: Foundations & Exploratory Sprint
Focus on mastering data structures, algorithms, and core language proficiency (C++, Java, or Python). Build small command-line utilities.

### Year 2: Specialization & Full-Stack Deployment
Choose a domain (Web development, AI/ML, Cloud) and build 2 end-to-end applications deployed with live production URLs.

### Year 3: Internships & Verification
Apply aggressively for off-campus and on-campus summer internships. Build a public GitHub track record.

### Year 4: High-Leverage Placement Targeting
Focus on company-specific problem solving, system design basics, and negotiating your first full-time offer.`
  },
  {
    id: 'res-6',
    title: 'The High-Demand Skills Guide for 2026 Tech & Product Roles',
    category: 'Resume & Portfolio',
    readTime: '5 min read',
    summary: 'Analysis of recruiter hiring trends: Why TypeScript, Next.js, API engineering, and AI tool fluency give freshers an unfair edge.',
    content: `### Top 5 Technical Competencies Recruiters Prize:
1. **TypeScript & Strict Typing:** Companies want code that doesn't break in production.
2. **Next.js & Server-Side Rendering:** Modern web companies build on App Router architectures.
3. **Database Proficiency:** Practical SQL schema design, indexing, and basic query optimization.
4. **API Integration & Auth:** Familiarity with OAuth 2.0, Supabase, and REST/GraphQL patterns.
5. **Applied AI Tooling:** Leveraging LLM APIs and prompt structuring within software products.`
  }
];

export default function ResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeGuide, setActiveGuide] = useState<ResourceItem | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = [
    'All',
    'Resume & Portfolio',
    'Interview Preparation',
    'LinkedIn & Networking',
    'Career Strategy',
    'Workplace Readiness'
  ];

  const filteredResources = EXTENDED_RESOURCES.filter((res) => {
    const matchesCategory = selectedCategory === 'All' || res.category === selectedCategory;
    const matchesSearch =
      res.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyGuide = () => {
    if (activeGuide) {
      navigator.clipboard.writeText(`${activeGuide.title}\n\n${activeGuide.content}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Student Career Toolkit
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Career Resources & Guides
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Curated playbooks, interview frameworks, resume teardowns, and transition guides crafted for students seeking their first chance.
            </p>
          </div>

          {/* Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition whitespace-nowrap ${
                    selectedCategory === cat
                      ? 'bg-[#0A1428] text-white'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search guides & topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          {/* Guides Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((r) => (
              <div
                key={r.id}
                onClick={() => setActiveGuide(r)}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-md">
                      {r.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {r.readTime}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition leading-snug">
                    {r.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {r.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0A1428]">
                  <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    <BookOpen className="w-4 h-4 text-amber-500" /> Read Full Guide →
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      {/* Guide Detail Reader Modal */}
      {activeGuide && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveGuide(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  {activeGuide.category}
                </span>
                <span className="text-xs text-slate-500">• {activeGuide.readTime}</span>
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">{activeGuide.title}</h2>
              <p className="text-xs text-slate-500 font-medium italic">{activeGuide.summary}</p>
            </div>

            <div className="prose prose-slate prose-sm text-xs leading-relaxed text-slate-700 whitespace-pre-line border-t border-b border-slate-100 py-4 font-sans">
              {activeGuide.content}
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={handleCopyGuide}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-1.5 transition"
              >
                <Copy className="w-3.5 h-3.5 text-slate-500" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Guide Text'}</span>
              </button>

              <button
                onClick={() => setActiveGuide(null)}
                className="bg-[#0A1428] hover:bg-[#0F1D38] text-white text-xs font-bold px-5 py-2.5 rounded-xl"
              >
                Close Guide
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
