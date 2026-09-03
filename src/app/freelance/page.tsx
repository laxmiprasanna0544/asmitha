'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MOCK_OPPORTUNITIES } from '@/lib/data/mockData';
import { OpportunityCard } from '@/components/shared/OpportunityCard';

export default function FreelancePage() {
  const freelance = MOCK_OPPORTUNITIES.filter(o => o.type === 'Freelance');

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-200">
              Apply Your Skills
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
              Freelance & Flexible Student Tasks
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Monetize your technical, writing, or design skills on your own schedule with verified company gigs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freelance.map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
