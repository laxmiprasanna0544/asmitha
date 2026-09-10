'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ShieldCheck, Heart, Users, Building2, GraduationCap, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200">
              Our Mission & Purpose
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              Why PehlaChance Exists.
            </h1>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-semibold">
              "A student's potential should not be ignored simply because they haven't been given an opportunity yet."
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Everyone needs a beginning. PehlaChance is India's Video-First, AI-Powered Early Career Talent Network — built to ensure that a lack of prior experience never stands in the way of genuine opportunity.
            </p>
          </div>

          {/* Core Ecosystem Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <Users className="w-8 h-8 text-amber-500" />
              <h3 className="font-bold text-slate-900 text-lg">For Students</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provide structured proof of work, AI resume tools, and direct access to verified employers without requiring 3 years of prior experience.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <Building2 className="w-8 h-8 text-slate-900" />
              <h3 className="font-bold text-slate-900 text-lg">For Companies</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connect growing firms and startups with pre-qualified, provably ready early-career talent without sorting through unverified mass-applies.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <GraduationCap className="w-8 h-8 text-amber-600" />
              <h3 className="font-bold text-slate-900 text-lg">For Colleges</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Digitize and empower university placement cells with department-aware dashboards, career workshops, and employer drives.
              </p>
            </div>
          </div>

          {/* Founder Section */}
          <div className="bg-[#0A1428] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Leadership</span>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400 shrink-0 bg-slate-900 flex items-center justify-center font-extrabold text-2xl text-amber-400">
                KB
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <h3 className="text-2xl font-extrabold text-white">Kiran Bavikatti</h3>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">Founder & CEO, PehlaChance</p>
                <p className="text-xs text-slate-300 leading-relaxed pt-1">
                  Dedicated to solving early-career trust and opportunity distribution for millions of students across India.
                </p>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
