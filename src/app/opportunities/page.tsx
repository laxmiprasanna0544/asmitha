'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_OPPORTUNITIES } from '@/lib/data/mockData';
import { OpportunityCard } from '@/components/shared/OpportunityCard';
import { Search, Filter, Briefcase, MapPin, IndianRupee, Clock, Sparkles } from 'lucide-react';

export default function OpportunitiesPage() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<string>('All');
  const [activeMode, setActiveMode] = useState<string>('All');

  const filtered = MOCK_OPPORTUNITIES.filter((opp) => {
    const matchesSearch = 
      opp.title.toLowerCase().includes(search.toLowerCase()) ||
      opp.companyName.toLowerCase().includes(search.toLowerCase()) ||
      opp.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));

    const matchesType = activeType === 'All' || opp.type === activeType;
    const matchesMode = activeMode === 'All' || opp.workMode === activeMode;

    return matchesSearch && matchesType && matchesMode;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Verified Opportunity Marketplace
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Browse Early-Career Opportunities
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Explore verified internships, fresher jobs, micro-projects, apprenticeships, and freelance gigs with transparent stipends and employer credibility.
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by role, company, or tech stack (e.g. React, Growth, Finance)..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-slate-100">
              {/* Type Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
                {['All', 'Internship', 'Fresher Job', 'Project', 'Apprenticeship', 'Freelance', 'Career Programme'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setActiveType(t)}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition ${
                      activeType === t
                        ? 'bg-[#0A1428] text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Work Mode Filter */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Mode:</span>
                <select
                  value={activeMode}
                  onChange={(e) => setActiveMode(e.target.value)}
                  className="text-xs font-bold bg-slate-100 border border-slate-200 text-slate-800 rounded-lg px-3 py-1.5"
                >
                  <option value="All">All Modes</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>
            </div>

          </div>

          {/* Results Info */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>Showing {filtered.length} verified opportunities</span>
            <span>All postings manually audited for authenticity</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
