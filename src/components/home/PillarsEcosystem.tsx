import React from 'react';
import { Video, Sparkles, Briefcase, ShieldCheck, CheckCircle2, GraduationCap, ArrowRight, Layers, UserCheck } from 'lucide-react';
import Link from 'next/link';

export const PillarsEcosystem: React.FC = () => {
  const pillars = [
    {
      title: 'Video-First Profiles',
      desc: 'Showcase authentic communication, confidence, and curiosity through guided 60-second video introductions.',
      icon: Video,
      color: 'from-amber-500/20 to-amber-500/5',
      accent: 'text-amber-600',
      border: 'border-amber-200'
    },
    {
      title: 'AI Career Intelligence',
      desc: 'Actionable guidance on skill gaps, resume structure, and high-probability opportunity matching.',
      icon: Sparkles,
      color: 'from-purple-500/20 to-purple-500/5',
      accent: 'text-purple-600',
      border: 'border-purple-200'
    },
    {
      title: 'Opportunity Discovery',
      desc: 'Curated internships, micro-projects, apprenticeships, and trainee roles from verified growing startups and firms.',
      icon: Briefcase,
      color: 'from-blue-500/20 to-blue-500/5',
      accent: 'text-blue-600',
      border: 'border-blue-200'
    },
    {
      title: 'Trust-Focused Listings',
      desc: 'Zero fake offers. Rigorous company verification, guaranteed stipends, and clear mentorship expectations.',
      icon: ShieldCheck,
      color: 'from-emerald-500/20 to-emerald-500/5',
      accent: 'text-emerald-600',
      border: 'border-emerald-200'
    },
    {
      title: 'Smart Apply Support',
      desc: 'Student-controlled application preparation — prepare tailored pitches without chaotic spray-and-pray spam.',
      icon: CheckCircle2,
      color: 'from-sky-500/20 to-sky-500/5',
      accent: 'text-sky-600',
      border: 'border-sky-200'
    },
    {
      title: 'College Partnerships',
      desc: 'Empowering campus placement cells with real-time analytics, industry connections, and readiness benchmarks.',
      icon: GraduationCap,
      color: 'from-rose-500/20 to-rose-500/5',
      accent: 'text-rose-600',
      border: 'border-rose-200'
    }
  ];

  const loopSteps = [
    { step: '01', title: 'Build Profile', desc: 'Academics & verified credentials' },
    { step: '02', title: 'Show Skills', desc: 'Code proof & portfolio projects' },
    { step: '03', title: 'Intro Video', desc: '60s authentic elevator pitch' },
    { step: '04', title: 'Discover Roles', desc: 'Verified internships & projects' },
    { step: '05', title: 'Get Discovered', desc: 'Employers review video & shortlist' },
    { step: '06', title: 'First Chance', desc: 'Kickstart your professional journey' }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>The Six Foundation Pillars</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
            PehlaChance Gives <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Potential a Platform.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            We replace outdated recruitment filters with six interconnected pillars that champion student ambition and deliver verified early-career results.
          </p>
        </div>

        {/* 6 Pillars Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div 
                key={idx}
                className={`bg-gradient-to-br ${pil.color} bg-white rounded-3xl p-7 border ${pil.border} shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 group`}
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-slate-200 mb-4 group-hover:scale-110 transition-transform">
                    <Icon className={`w-6 h-6 ${pil.accent}`} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0A1428]">{pil.title}</h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed font-medium">
                    {pil.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* The Core PehlaChance Product Journey Loop */}
        <div className="bg-[#0A1428] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">The Core Product Loop</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">How the First Chance Happens</h3>
            <p className="text-xs text-slate-300">A continuous, connected cycle designed to transform ambitious learners into hired professionals.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {loopSteps.map((step, si) => (
              <div key={si} className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between space-y-2">
                <span className="text-xs font-mono font-bold text-amber-400">{step.step}</span>
                <h4 className="text-xs font-bold text-white leading-tight">{step.title}</h4>
                <p className="text-[10px] text-slate-400 leading-tight">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              href="/register?role=student"
              className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-400 hover:text-amber-300 transition"
            >
              <span>Begin Your Journey Today</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
