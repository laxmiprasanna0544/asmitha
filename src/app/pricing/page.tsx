'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, Sparkles, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const features = [
    'Verified Student Career Profile & Identity',
    'Full Access to AI Resume Builder & ATS Enhancer',
    'Unlimited Direct Opportunity Applications',
    'AI Opportunity Matching & Skill Gap Insights',
    'Access to Campus Workshops & Masterclasses',
    'Exclusive Student Ambassador & Peer Network'
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Transparent Membership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428]">
              Planned Student Membership
            </h1>
            <p className="text-slate-600 text-sm">
              Simple, affordable access to India’s Early-Career Opportunity Ecosystem.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-lg mx-auto bg-white rounded-3xl p-8 sm:p-10 border-2 border-amber-400 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[10px] font-extrabold uppercase px-4 py-1 rounded-bl-xl">
              Planned Model
            </div>

            <div className="space-y-2 text-center">
              <h3 className="text-xl font-bold text-slate-900">90-Day Student Membership</h3>
              <div className="flex items-baseline justify-center gap-1 pt-2">
                <span className="text-4xl font-extrabold text-[#0A1428]">₹999</span>
                <span className="text-xs font-semibold text-slate-500">/ 90 Days</span>
              </div>
              <p className="text-xs text-slate-500">Full platform access throughout your semester.</p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              {features.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/register?role=student"
                className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white py-3.5 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 transition"
              >
                <span>Get Started with Membership</span>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
