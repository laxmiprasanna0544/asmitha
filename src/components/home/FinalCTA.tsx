import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-dark text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow Orbs & Grid Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-indigo-600/20 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-slate-900/90 px-4.5 py-1.5 rounded-full border border-amber-500/30 shadow-lg backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Start Today
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          Your First Opportunity <br className="hidden sm:inline" />
          <span className="gold-gradient-text">Is Waiting.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Maybe it is an internship. Maybe it is a project. Maybe it is your first job. Maybe it is simply someone giving you the chance to prove yourself.
        </p>

        <p className="text-xl sm:text-2xl font-extrabold text-amber-400 tracking-tight pt-2">
          PehlaChance is here to help you take it.
        </p>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/opportunities"
            className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2 group"
          >
            <span>Find Your Opportunity</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/register?role=student"
            className="w-full sm:w-auto glass-card-dark hover:bg-slate-800 text-white font-bold text-sm px-8 py-4 rounded-xl border border-slate-700/80 transition text-center hover:border-amber-400/60"
          >
            Build Your Profile
          </Link>
        </div>

      </div>
    </section>
  );
};
