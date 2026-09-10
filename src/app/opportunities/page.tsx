'use client';

import React, { useState, useMemo } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SEEDED_OPPORTUNITIES, OpportunityItem } from '@/data/opportunities';
import { OpportunityCard } from '@/components/shared/OpportunityCard';
import { Opportunity } from '@/lib/types';
import { 
  Search, 
  Filter, 
  MapPin, 
  Sparkles, 
  RotateCcw, 
  Bookmark, 
  ArrowUpDown, 
  Layers,
  CheckCircle2,
  Building2
} from 'lucide-react';

export default function OpportunitiesPage() {
  const [search, setSearch] = useState('');
  const [activeType, setActiveType] = useState<string>('All');
  const [activeMode, setActiveMode] = useState<string>('All');
  const [activeLocation, setActiveLocation] = useState<string>('All');
  const [activeIndustry, setActiveIndustry] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'relevant' | 'best-match' | 'highest-stipend' | 'newest'>('relevant');
  const [onlySaved, setOnlySaved] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(['opp-1', 'opp-3']);

  const handleSaveToggle = (oppId: string, isSaved: boolean) => {
    if (isSaved) {
      setSavedIds((prev) => [...prev, oppId]);
    } else {
      setSavedIds((prev) => prev.filter((id) => id !== oppId));
    }
  };

  const handleClearAll = () => {
    setSearch('');
    setActiveType('All');
    setActiveMode('All');
    setActiveLocation('All');
    setActiveIndustry('All');
    setSortBy('relevant');
    setOnlySaved(false);
  };

  const filteredAndSorted = useMemo(() => {
    let result = SEEDED_OPPORTUNITIES.filter((opp) => {
      // 1. Search Query
      const q = search.toLowerCase().trim();
      const matchesSearch = 
        !q ||
        opp.title.toLowerCase().includes(q) ||
        opp.companyName.toLowerCase().includes(q) ||
        opp.skills.some((s) => s.toLowerCase().includes(q)) ||
        opp.description.toLowerCase().includes(q);

      // 2. Type
      const matchesType = activeType === 'All' || opp.type === activeType;

      // 3. Work Mode
      const matchesMode = activeMode === 'All' || opp.workMode === activeMode;

      // 4. Location
      const matchesLocation = 
        activeLocation === 'All' || 
        opp.location.toLowerCase().includes(activeLocation.toLowerCase());

      // 5. Industry
      const matchesIndustry = activeIndustry === 'All' || opp.industry === activeIndustry;

      // 6. Saved Only
      const matchesSaved = !onlySaved || savedIds.includes(opp.id);

      return matchesSearch && matchesType && matchesMode && matchesLocation && matchesIndustry && matchesSaved;
    });

    // Sort
    result.sort((a, b) => {
      if (sortBy === 'best-match') {
        return (b.matchScore || 0) - (a.matchScore || 0);
      }
      if (sortBy === 'highest-stipend') {
        // Simple numeric extraction for sorting
        const stipendA = parseInt(a.stipend.replace(/[^0-9]/g, '')) || 0;
        const stipendB = parseInt(b.stipend.replace(/[^0-9]/g, '')) || 0;
        return stipendB - stipendA;
      }
      if (sortBy === 'newest') {
        return a.postedDate.localeCompare(b.postedDate);
      }
      return 0; // Default relevant order
    });

    return result;
  }, [search, activeType, activeMode, activeLocation, activeIndustry, sortBy, onlySaved, savedIds]);

  const hasActiveFilters = 
    search !== '' || 
    activeType !== 'All' || 
    activeMode !== 'All' || 
    activeLocation !== 'All' || 
    activeIndustry !== 'All' ||
    onlySaved;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                Verified Early-Career Marketplace
              </span>
              <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                ✓ 100% Anti-Scam Audited
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Explore Early-Career Opportunities
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Verified internships, fresher jobs, apprenticeships, and freelance micro-projects across India with transparent compensation and zero ghosting.
            </p>
          </div>

          {/* Search & Filter Bar Box */}
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by role, company, or tech stack (e.g. React, Python, Growth, Figma)..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Type Pills Carousel */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {['All', 'Internship', 'Fresher Job', 'Project', 'Apprenticeship', 'Freelance', 'Career Programme'].map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveType(t)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition shrink-0 ${
                    activeType === t
                      ? 'bg-[#0A1428] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Multi-Dimensional Filter Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 pt-3 border-t border-slate-100 text-xs">
              
              {/* Work Mode */}
              <div>
                <label className="font-bold text-slate-500 block mb-1">Work Mode</label>
                <select
                  value={activeMode}
                  onChange={(e) => setActiveMode(e.target.value)}
                  className="w-full font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                >
                  <option value="All">All Modes</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="On-site">On-site</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="font-bold text-slate-500 block mb-1">City / Region</label>
                <select
                  value={activeLocation}
                  onChange={(e) => setActiveLocation(e.target.value)}
                  className="w-full font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                >
                  <option value="All">All Locations</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Delhi">Delhi NCR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Chennai">Chennai</option>
                  <option value="Pune">Pune</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label className="font-bold text-slate-500 block mb-1">Industry</label>
                <select
                  value={activeIndustry}
                  onChange={(e) => setActiveIndustry(e.target.value)}
                  className="w-full font-semibold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                >
                  <option value="All">All Industries</option>
                  <option value="Technology">Technology</option>
                  <option value="Fintech">Fintech</option>
                  <option value="AI & Data">AI & Data</option>
                  <option value="Design & Creative">Design & Creative</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Operations">Operations</option>
                </select>
              </div>

              {/* Sort By */}
              <div>
                <label className="font-bold text-slate-500 block mb-1">Sort Results</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full font-bold bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800"
                >
                  <option value="relevant">Most Relevant</option>
                  <option value="best-match">Best Match Score</option>
                  <option value="highest-stipend">Highest Stipend</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>

              {/* Saved Toggle & Clear All */}
              <div className="flex items-end gap-2 col-span-2 sm:col-span-1">
                <button
                  onClick={() => setOnlySaved(!onlySaved)}
                  className={`flex-1 py-2 rounded-xl font-bold flex items-center justify-center gap-1 border transition ${
                    onlySaved 
                      ? 'bg-amber-500 text-slate-950 border-amber-500 shadow-xs' 
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border-slate-200'
                  }`}
                  title="View Saved Roles"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${onlySaved ? 'fill-slate-950' : ''}`} />
                  <span>Saved ({savedIds.length})</span>
                </button>

                {hasActiveFilters && (
                  <button
                    onClick={handleClearAll}
                    className="p-2 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 text-slate-500 rounded-xl border border-slate-200 transition"
                    title="Clear All Filters"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                )}
              </div>

            </div>

          </div>

          {/* Results Summary Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-semibold text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <span className="text-slate-900 font-bold">
                Showing {filteredAndSorted.length} verified opportunities
              </span>
              {onlySaved && (
                <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">
                  Saved Filter Active
                </span>
              )}
            </div>
            <span className="text-slate-400">All opportunities verified for authentic stipends</span>
          </div>

          {/* Opportunities Grid */}
          {filteredAndSorted.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAndSorted.map((opp) => (
                <OpportunityCard 
                  key={opp.id} 
                  opportunity={opp as unknown as Opportunity}
                  onSaveToggle={handleSaveToggle}
                  isSavedInitial={savedIds.includes(opp.id)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-extrabold text-[#0A1428]">No Opportunities Found</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  We couldn't find any listings matching your current filter criteria. Try resetting filters or expanding your search.
                </p>
              </div>
              <button
                onClick={handleClearAll}
                className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
              >
                Reset All Filters
              </button>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
