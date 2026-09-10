import React from 'react';
import { Sparkles, CheckCircle2, AlertTriangle, ArrowRight, Brain, Target, Compass, Zap } from 'lucide-react';
import Link from 'next/link';

export const AICareerIntelligence: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-dark text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Violet / Indigo Glow */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-purple-500/15 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded-full text-xs font-bold shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>AI Career Intelligence</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your Career Journey. <span className="text-purple-400">Smarter.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Not a generic chatbot — but a calm, intelligent companion that analyzes real recruiter signals, bridges skill gaps, and matches your verified strengths with live opportunities.
          </p>
        </div>

        {/* 2-Column AI Showcase: Left Matching Engine, Right 4 AI Insights Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left: AI Opportunity Matching Engine */}
          <div className="lg:col-span-6 bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-purple-500/30 shadow-2xl space-y-6 relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-400" />
                <span className="text-xs font-bold text-slate-300">Intelligent Match Engine</span>
              </div>
              <span className="text-[11px] font-bold bg-purple-500/20 text-purple-300 px-2.5 py-0.5 rounded-full border border-purple-500/30">
                Live Simulation
              </span>
            </div>

            {/* Target Role Match Card */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white">Fullstack Engineering Intern</h4>
                  <p className="text-xs text-slate-400">ScaleVantage Labs • Bengaluru (Hybrid)</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-extrabold text-emerald-400">92%</div>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Match Score</span>
                </div>
              </div>

              {/* Match Criteria Breakdown */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80 text-xs">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 block mb-1.5">Why You're a Strong Match:</span>
                  <div className="grid grid-cols-2 gap-1.5">
                    <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-1 rounded-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>React.js Ecosystem</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-1 rounded-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>JavaScript & Git</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-1 rounded-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>CS Degree (2026)</span>
                    </span>
                    <span className="flex items-center gap-1.5 text-emerald-300 bg-emerald-950/50 px-2 py-1 rounded-lg border border-emerald-500/20">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>60s Video Pitch</span>
                    </span>
                  </div>
                </div>

                {/* Potential Gap */}
                <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/30 flex items-start gap-2 text-amber-200">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Potential Gap: TypeScript</span>
                    <p className="text-[11px] text-slate-300 mt-0.5">ScaleVantage prefers TypeScript for type safety. Adding a TS mini-project pushes match to 97%.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic text-center">
              Matched across 6 dimensions: Skills • Education • Career Goals • Interests • Industry • Location
            </p>
          </div>

          {/* Right: 4 AI Insights Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Profile Strength */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-purple-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Profile Strength</h4>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-extrabold text-white">94%</span>
                <span className="text-[10px] text-emerald-400 font-bold">+12% this month</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                "You’re almost ready to be discovered. Linking your GitHub repo will unlock top-tier recruiter visibility."
              </p>
            </div>

            {/* Card 2: Opportunity Relevance */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-purple-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Opportunity Relevance</h4>
              <div className="text-2xl font-extrabold text-white">18 Curated</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Roles filtered strictly by your verified skills and willingness to relocate, eliminating ghost applications.
              </p>
            </div>

            {/* Card 3: Skills Insights */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-purple-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Skills Insights</h4>
              <div className="text-xs font-bold text-amber-300">Next.js + Tailwind</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Your combination of UI design and fullstack component architecture is in top 10% demand among SaaS startups.
              </p>
            </div>

            {/* Card 4: Actionable Suggestions */}
            <div className="bg-slate-900/90 rounded-2xl p-5 border border-slate-800 space-y-3 hover:border-purple-500/40 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Actionable Steps</h4>
              <div className="text-xs font-bold text-emerald-300">Next Step: Video Pitch</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Record your 45-second video introduction to increase recruiter interview invitation rate by 3.2x.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
