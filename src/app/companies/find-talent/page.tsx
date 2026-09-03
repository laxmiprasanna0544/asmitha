'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_CANDIDATES } from '@/lib/data/mockData';
import { CandidateCard } from '@/components/shared/CandidateCard';
import { Search, Filter, Sparkles, GraduationCap } from 'lucide-react';

export default function FindTalentPage() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('All');

  const filteredCandidates = MOCK_CANDIDATES.filter((cand) => {
    const matchesSearch = 
      cand.name.toLowerCase().includes(search.toLowerCase()) ||
      cand.college.toLowerCase().includes(search.toLowerCase()) ||
      cand.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));

    const matchesDept = department === 'All' || cand.department === department;

    return matchesSearch && matchesDept;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Verified Candidate Search
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Recruiter Candidate Discovery
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Search students by verified skills, degree coursework, and project proof. Match scores indicate technical alignment without replacing manual interview judgement.
            </p>
          </div>

          {/* Search Controls */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search candidates by name, college, or skill (e.g. React, Financial Modeling, Figma)..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-bold text-slate-600">Department Filter:</span>
              {['All', 'Engineering', 'Commerce', 'Design'].map((dept) => (
                <button
                  key={dept}
                  onClick={() => setDepartment(dept)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                    department === dept ? 'bg-[#0A1428] text-white' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Candidate Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCandidates.map((cand) => (
              <CandidateCard key={cand.id} candidate={cand} />
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
