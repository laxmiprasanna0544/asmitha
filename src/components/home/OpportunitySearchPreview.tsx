'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MOCK_OPPORTUNITIES } from '@/lib/data/mockData';
import { OpportunityCard } from '../shared/OpportunityCard';
import { Search, Filter, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const OpportunitySearchPreview: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');

  const categories = ['All', 'Technology', 'Marketing', 'Finance', 'Design', 'Data & AI'];
  const types = ['All', 'Internship', 'Fresher Job', 'Project', 'Apprenticeship', 'Freelance'];

  const filteredOpportunities = MOCK_OPPORTUNITIES.filter((opp) => {
    const matchesSearch = 
      opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || opp.category === selectedCategory;
    const matchesType = selectedType === 'All' || opp.type === selectedType;

    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-b border-slate-200/80">
      {/* Background Decorative Mesh & Radial Spotlight */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs backdrop-blur-sm">
              Live Opportunity Marketplace
            </span>
            <h2 className="text-3xl font-extrabold text-[#0A1428]">
              Explore Verified Opportunities
            </h2>
            <p className="text-slate-600 text-sm max-w-xl">
              Filter by role, skills, work mode, and stipend. All postings undergo company verification prior to publishing.
            </p>
          </div>

          <Link
            href="/opportunities"
            className="text-xs font-bold text-slate-800 hover:text-amber-600 flex items-center gap-1 group glass-card border border-slate-200/80 px-4 py-2.5 rounded-xl shadow-xs hover:border-amber-400 hover:shadow-md transition"
          >
            <span>View All Opportunities Marketplace</span>
            <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Search & Filter Controls Bar */}
        <div className="glass-card p-5 rounded-2xl shadow-md mb-8 space-y-4 border border-white/80">
          
          {/* Main Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search roles, skills (e.g. React, Figma, Excel), or companies..."
              className="w-full pl-12 pr-4 py-3 bg-white/80 border border-slate-200/90 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:bg-white transition"
            />
          </div>

          {/* Category Tabs & Type Selectors */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-slate-200/60">
            {/* Category Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs font-bold px-3.5 py-1.5 rounded-lg whitespace-nowrap transition ${
                    selectedCategory === cat
                      ? 'bg-[#0A1428] text-white shadow-xs'
                      : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Type Dropdown Selector */}
            <div className="flex items-center gap-2 shrink-0">
              <Filter className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-bold text-slate-600">Type:</span>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="text-xs font-bold bg-white border border-slate-200 text-slate-800 rounded-lg px-2.5 py-1.5 focus:outline-none"
              >
                {types.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Opportunity Cards Grid */}
        {filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredOpportunities.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center border border-slate-200 text-slate-500 space-y-3">
            <Sparkles className="w-8 h-8 text-amber-500 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No opportunities match your current filters</h3>
            <p className="text-xs max-w-sm mx-auto">Try broadening your search term or select another category above.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); setSelectedType('All'); }}
              className="text-xs font-bold text-amber-600 bg-amber-50 px-4 py-2 rounded-lg border border-amber-200 hover:bg-amber-100"
            >
              Reset Search Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
