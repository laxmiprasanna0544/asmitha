'use client';

import React from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { MOCK_CANDIDATES } from '@/lib/data/mockData';
import { CandidateCard } from '@/components/shared/CandidateCard';
import Link from 'next/link';
import { Briefcase, UserCheck, Plus, TrendingUp } from 'lucide-react';

export default function CompanyDashboardPage() {
  return (
    <DashboardShell role="company">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-2xl font-extrabold text-[#0A1428]">Employer Hiring Workspace</h1>
            <p className="text-xs text-slate-500 mt-1">ScaleVantage Talent Team • Verified Corporate Account</p>
          </div>

          <Link
            href="/companies/post-opportunity"
            className="inline-flex items-center gap-2 bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-[#0F1D38]"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Post New Opportunity</span>
          </Link>
        </div>

        {/* Pipeline Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Active Postings</span>
            <div className="text-2xl font-extrabold text-[#0A1428]">3</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Total Applicants</span>
            <div className="text-2xl font-extrabold text-[#0A1428]">78</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Shortlisted Candidates</span>
            <div className="text-2xl font-extrabold text-amber-600">12</div>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Offers Issued</span>
            <div className="text-2xl font-extrabold text-emerald-600">4</div>
          </div>
        </div>

        {/* Shortlisted / Recommended Candidates */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#0A1428]">Top Recommended Verified Candidates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_CANDIDATES.slice(0, 3).map((cand) => (
              <CandidateCard key={cand.id} candidate={cand} />
            ))}
          </div>
        </div>

      </div>
    </DashboardShell>
  );
}
