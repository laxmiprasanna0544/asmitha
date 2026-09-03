'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function CareersPage() {
  const roles = [
    { title: 'Growth & BD Lead (College Partnerships)', dept: 'College Partnerships', location: 'Bengaluru / Hybrid' },
    { title: 'Employer Partnership Manager (Startups)', dept: 'Employer Partnerships', location: 'Gurugram / Hybrid' },
    { title: 'Full-Stack Software Engineer (Next.js / AI)', dept: 'Product & Technology', location: 'Bengaluru / Remote' },
    { title: 'Community & Student Success Specialist', dept: 'Student & Company Success', location: 'Remote' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Join Our Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428]">
              Help Us Give Someone Their First Chance.
            </h1>
            <p className="text-slate-600 text-sm">
              We are building the future of India's early-career opportunity ecosystem. Join our founding team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-[#0A1428]">Open Startup Roles</h3>
            {roles.map((r, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-slate-900 text-base">{r.title}</h4>
                  <div className="flex gap-3 text-xs text-slate-500 mt-1">
                    <span>{r.dept}</span>
                    <span>•</span>
                    <span>{r.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Applied for ${r.title}!`)}
                  className="bg-[#0A1428] text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-[#0F1D38]"
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
