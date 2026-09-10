import React from 'react';
import { XCircle, CheckCircle2, ArrowRight, Video, Sparkles, FileText, Bot } from 'lucide-react';
import Link from 'next/link';

export const OldVsNewComparison: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 text-white border-b border-slate-800 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-800/80 px-4 py-1.5 rounded-full border border-amber-500/30">
            The Paradigm Shift
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            The Old Way vs. <span className="text-amber-400">PehlaChance.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
            Early-career recruitment was broken for both sides. Here’s how we replace passive applicant black holes with a modern, multi-dimensional talent network.
          </p>
        </div>

        {/* 2-Column Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Left: Traditional Platforms (Muted) */}
          <div className="bg-slate-950/70 rounded-3xl p-8 border border-slate-800 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">The Traditional Job Board</span>
                <span className="text-[10px] font-bold bg-rose-500/15 text-rose-300 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                  Outdated Model
                </span>
              </div>

              {/* Journey Flow */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                <span>Resume PDF</span>
                <span>→</span>
                <span>Apply 500x</span>
                <span>→</span>
                <span className="text-rose-400 font-bold">Wait in Silence</span>
              </div>

              {/* Traits */}
              <ul className="space-y-3.5 text-xs text-slate-400 font-medium">
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-300">Passive:</strong> Apply and pray. No recruiter reads past the first 2 lines without brand tags.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-300">One-Dimensional:</strong> Flat PDF formatting flattens your ambition and live abilities.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-300">No Personality:</strong> Communication skills and energy are completely invisible.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-300">Zero Guidance:</strong> Left guessing why you were rejected or what skills are missing.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong className="text-slate-300">Unverified Listings:</strong> Certificate mills and misleading unpaid gigs abound.</span>
                </li>
              </ul>
            </div>

            <div className="p-3 bg-slate-900 rounded-xl text-center text-xs text-slate-500">
              Results in student burnout & recruiter fatigue
            </div>
          </div>

          {/* Right: PehlaChance (Premium, Energetic) */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-[#0A1428] rounded-3xl p-8 border-2 border-amber-500/50 shadow-2xl flex flex-col justify-between space-y-8 relative">
            <div className="absolute -top-3 right-6 bg-amber-400 text-slate-950 font-extrabold text-[10px] px-3 py-1 rounded-full uppercase tracking-wider shadow">
              The PehlaChance Standard
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">PehlaChance Network</span>
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                  Active & Verified
                </span>
              </div>

              {/* PehlaChance Flow */}
              <div className="flex flex-wrap items-center justify-between text-[11px] font-mono text-amber-300 bg-[#0A1428] p-3 rounded-xl border border-amber-500/30 font-bold">
                <span>Profile</span>
                <span>→</span>
                <span>Video Intro</span>
                <span>→</span>
                <span>AI Assist</span>
                <span>→</span>
                <span className="text-emerald-400">First Chance</span>
              </div>

              {/* Traits */}
              <ul className="space-y-3.5 text-xs text-slate-200 font-medium">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Active Discovery:</strong> Verified companies proactively search and invite candidates based on video pitches.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Multi-Dimensional Identity:</strong> Video + GitHub repos + certified coursework + AI resume.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">Personality-First:</strong> 60s video pitch highlights communication, drive, and problem-solving.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">AI-Guided Direction:</strong> Clear gap feedback and high-relevance opportunity matching.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white">100% Verified Opportunities:</strong> Transparent stipends, guaranteed mentors, zero scams.</span>
                </li>
              </ul>
            </div>

            <Link
              href="/register?role=student"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs py-3 rounded-xl shadow-lg transition text-center flex items-center justify-center gap-2"
            >
              <span>Experience PehlaChance</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
