'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, ArrowRight, GraduationCap, Award, Sparkles } from 'lucide-react';

export default function CareerReadyCampusPage() {
  const pillars = [
    { title: 'Student Onboarding', desc: 'Centralized identity creation from Year 1.' },
    { title: 'AI Resume Building', desc: 'ATS-compatible resume generation for all departments.' },
    { title: 'Career Workshops', desc: 'Industry expert bootcamps on campus.' },
    { title: 'Internship Campaigns', desc: 'Curated employer drives throughout the academic year.' },
    { title: 'Employer Interactions', desc: 'Direct live Q&A sessions with startup founders.' },
    { title: 'Career Readiness Analytics', desc: 'Granular department tracking for TPOs.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Institutional Transformation Program
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428]">
              The Career-Ready Campus Model
            </h1>
            <p className="text-slate-600 text-sm">
              Empowering placement directors and faculty with automated student tracking, industry masterclasses, and verified employer drives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">{p.title}</h3>
                <p className="text-xs text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
