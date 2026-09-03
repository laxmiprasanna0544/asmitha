'use client';

import React, { useState } from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { MOCK_OPPORTUNITIES } from '@/lib/data/mockData';
import { OpportunityCard } from '@/components/shared/OpportunityCard';
import { Sparkles, FileText, Bookmark, CheckCircle2, Award, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function StudentDashboardPage() {
  return (
    <DashboardShell role="student">
      <div className="space-y-8">
        
        {/* Welcome Header & Profile Strength */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-extrabold text-[#0A1428]">Welcome back, Aarav!</h1>
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                  Verified Identity
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1">B.Tech Computer Science & Engineering • VIT Chennai (Class of 2026)</p>
            </div>

            <Link
              href="/resume-builder"
              className="inline-flex items-center gap-2 bg-[#0A1428] text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-[#0F1D38]"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>AI Resume Builder</span>
            </Link>
          </div>

          {/* Profile Strength Meter */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-slate-800">Profile Strength & Recruiter Readiness</span>
              <span className="text-emerald-700">95% Complete</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full w-[95%]" />
            </div>
            <p className="text-[11px] text-slate-500">✓ Education verified • 4 GitHub projects linked • AI Resume generated</p>
          </div>
        </div>

        {/* Applied & Recommended Tabs */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold text-[#0A1428]">Recommended Verified Opportunities for You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MOCK_OPPORTUNITIES.slice(0, 3).map((opp) => (
              <OpportunityCard key={opp.id} opportunity={opp} />
            ))}
          </div>
        </div>

      </div>
    </DashboardShell>
  );
}
