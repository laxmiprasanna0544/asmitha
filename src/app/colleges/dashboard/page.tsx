'use client';

import React, { useState } from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { 
  Users, 
  FileText, 
  Briefcase, 
  Building2, 
  Award, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from 'lucide-react';

export default function InstitutionalDashboardPage() {
  const [selectedDept, setSelectedDept] = useState('All Departments');

  const departments = [
    'All Departments',
    'Engineering',
    'Management',
    'Commerce',
    'Arts & Science',
    'Pharmacy',
    'Law',
    'Design',
    'Humanities'
  ];

  const metrics = [
    { title: 'Profiles Created', value: '1,840', sub: 'Total Enrolled Students' },
    { title: 'Profiles Completed', value: '1,692', sub: '92% Completion Rate' },
    { title: 'Resumes Generated', value: '1,520', sub: 'AI Builder Ready' },
    { title: 'Applications Sent', value: '4,310', sub: 'Across Active Drives' },
    { title: 'Interviews Scheduled', value: '380', sub: 'This Semester' },
    { title: 'Internships Secured', value: '295', sub: 'Verified Placements' },
    { title: 'Jobs Secured', value: '142', sub: 'Final Year Offers' },
    { title: 'Companies Onboarded', value: '64', sub: 'Verified Employers' }
  ];

  return (
    <DashboardShell role="college">
      <div className="space-y-8">
        
        {/* Dashboard Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-[#0A1428]">Institutional Placement Dashboard</h1>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                Verified Campus Partner
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">Real-time career readiness analytics & department placement metrics.</p>
          </div>

          {/* Department Aware Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-600">Department:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="text-xs font-bold bg-slate-100 border border-slate-200 text-slate-800 rounded-xl px-3 py-2 focus:outline-none"
            >
              {departments.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Career Readiness Benchmark Cards (Configurable) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="flex justify-between items-center text-xs font-bold text-amber-400">
              <span>Benchmark 1</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold">92%</div>
            <div className="text-xs text-slate-300">Profiles Completed (Target: 90%+)</div>
          </div>

          <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="flex justify-between items-center text-xs font-bold text-amber-400">
              <span>Benchmark 2</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold">83%</div>
            <div className="text-xs text-slate-300">Resumes Ready (Target: 80%+)</div>
          </div>

          <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="flex justify-between items-center text-xs font-bold text-amber-400">
              <span>Benchmark 3</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold">74%</div>
            <div className="text-xs text-slate-300">Internship Exposure (Target: 70%+)</div>
          </div>

          <div className="bg-[#0A1428] text-white p-5 rounded-2xl border border-slate-800 space-y-1">
            <div className="flex justify-between items-center text-xs font-bold text-amber-400">
              <span>Benchmark 4</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl font-extrabold">58%</div>
            <div className="text-xs text-slate-300">Active Applicants (Target: 50%+)</div>
          </div>
        </div>

        {/* 8 Primary Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-2">
              <span className="text-xs font-semibold text-slate-500">{m.title}</span>
              <div className="text-2xl font-extrabold text-[#0A1428]">{m.value}</div>
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                {m.sub}
              </span>
            </div>
          ))}
        </div>

      </div>
    </DashboardShell>
  );
}
