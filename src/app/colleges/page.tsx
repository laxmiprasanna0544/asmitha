'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { GraduationCap, ShieldCheck, TrendingUp, Users, ArrowRight, Award } from 'lucide-react';

export default function CollegesLandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
                For Higher Education Institutions
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
                Build a Career-Ready <br />
                <span className="gold-gradient-text">Campus Ecosystem.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                PehlaChance does not replace the placement cell. It digitizes, automates, and strengthens the placement ecosystem for TPOs, department heads, and students across all academic branches.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/colleges/career-ready-campus"
                  className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 border border-slate-800"
                >
                  <span>Explore Transformation Program</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <Link
                  href="/colleges/dashboard"
                  className="bg-white hover:bg-slate-50 text-slate-900 px-7 py-3.5 rounded-xl font-bold text-sm border border-slate-300 transition text-center"
                >
                  Institutional Dashboard
                </Link>
              </div>
            </div>

            {/* Visual */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-800">Placement Cell Analytics</span>
                <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-2 py-0.5 rounded">Department Aware</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl text-center">
                  <div className="text-lg font-bold text-slate-900">92%</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Resumes Ready</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl text-center">
                  <div className="text-lg font-bold text-emerald-600">78%</div>
                  <div className="text-[10px] text-slate-500 font-semibold">Internship Exposure</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
