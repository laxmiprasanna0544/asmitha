'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Code2, Sparkles, CheckCircle2, ShieldCheck, GitBranch } from 'lucide-react';

export const ProjectShowcaseBanner: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden border-b border-slate-200/80 bg-mesh-dark text-white">
      {/* Glassy Background Picture Layer */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-overlay pointer-events-none filter blur-[2px]"
        style={{ backgroundImage: `url('/images/project-collaboration.png')` }}
      />
      
      {/* Radial Gradient Backlight Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Information */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900/90 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" /> Verified Project Ecosystem
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Real Student Work. <br />
              <span className="gold-gradient-text">Verified Project Proof.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Employers don't just want bullet points on a PDF. PehlaChance validates real software repositories, UI/UX design deliverables, data analytics models, and marketing campaigns directly from students across India.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-white pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card-dark border border-white/10 shadow-sm">
                <GitBranch className="w-4 h-4 text-amber-400" />
                <span>Live Commit Verification</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card-dark border border-white/10 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Mentor Code Audits</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card-dark border border-white/10 shadow-sm">
                <Code2 className="w-4 h-4 text-sky-400" />
                <span>Micro-Task Badges</span>
              </div>
              <div className="flex items-center gap-2.5 p-3 rounded-xl glass-card-dark border border-white/10 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Zero-Scam Projects</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/projects"
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-xl transition-all flex items-center gap-2 hover:scale-105"
              >
                <span>Browse Student Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <Link
                href="/register?role=student"
                className="glass-card-dark hover:bg-slate-800 text-white px-6 py-3.5 rounded-xl font-bold text-sm border border-slate-700/80 transition text-center hover:border-amber-400/50"
              >
                Submit Project Proof
              </Link>
            </div>

          </div>

          {/* Right Glass Visual Showcase Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Glowing Accent Ring */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500/30 via-indigo-500/20 to-sky-500/30 blur-xl opacity-75 animate-pulse-slow pointer-events-none" />

              {/* Glass Frame Container */}
              <div className="relative glass-card-dark rounded-3xl p-3 border border-white/20 shadow-2xl overflow-hidden group">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/student-portfolio.png"
                    alt="Glassy Student Project Dashboard"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428] via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-card-dark border border-white/20 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-300">
                        PC
                      </div>
                      <div>
                        <h4 className="text-xs font-extrabold text-white">Student Proof-of-Work Matrix</h4>
                        <span className="text-[10px] text-slate-300">315 GitHub Commits • 3 Verified Badges</span>
                      </div>
                    </div>
                    <span className="bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/40">
                      100% Authentic
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
