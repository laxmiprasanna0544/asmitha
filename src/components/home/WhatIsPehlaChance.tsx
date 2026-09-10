import React from 'react';
import { User, Building2, GraduationCap, ArrowRight, Sparkles, CheckCircle2, Video } from 'lucide-react';
import Link from 'next/link';

export const WhatIsPehlaChance: React.FC = () => {
  const audiences = [
    {
      role: 'STUDENTS',
      title: 'For Students',
      subtitle: 'Build Your Identity & Get Discovered',
      desc: 'Showcase who you are through video introductions, GitHub code proof, and verified skills. Get matched with genuine internship opportunities without ghost applications.',
      href: '/students',
      cta: 'Explore Student Network',
      icon: User,
      borderGlow: 'hover:border-amber-400/80',
      badge: 'Video-First Identity',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-200'
    },
    {
      role: 'COMPANIES',
      title: 'For Companies',
      subtitle: 'Find Talent Before Everyone Else Does',
      desc: 'Meet ambitious builders early. Evaluate communication and curiosity through video profiles before the first interview. Build your high-retention junior talent pipeline.',
      href: '/companies',
      cta: 'Discover Early Talent',
      icon: Building2,
      borderGlow: 'hover:border-blue-400/80',
      badge: 'High-Potential Hires',
      badgeColor: 'bg-blue-100 text-blue-900 border-blue-200'
    },
    {
      role: 'COLLEGES',
      title: 'For Colleges',
      subtitle: 'Connect Students Beyond Campus Borders',
      desc: 'Empower student career readiness with real-time placement tracking, AI resume builders, and direct hiring relationships with India’s fastest-growing companies.',
      href: '/colleges',
      cta: 'Partner With PehlaChance',
      icon: GraduationCap,
      borderGlow: 'hover:border-emerald-400/80',
      badge: 'Campus Readiness',
      badgeColor: 'bg-emerald-100 text-emerald-900 border-emerald-200'
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Core Belief & What We Do Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>The PehlaChance Core Foundation</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
            "Everyone asks for experience. <br className="hidden sm:inline" />
            <span className="gold-gradient-text">Someone has to give students their first opportunity."</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            PehlaChance is an early-career talent network connecting students, colleges, and companies through verified opportunities, video-first profiles, and AI-guided career readiness.
          </p>
        </div>

        {/* 3 Audience Identity Cards (Students, Colleges, Companies) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {audiences.map((aud, idx) => {
            const Icon = aud.icon;
            return (
              <div 
                key={idx}
                className={`bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group ${aud.borderGlow}`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#0A1428] text-amber-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full border ${aud.badgeColor}`}>
                      {aud.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider block">{aud.role}</span>
                    <h3 className="text-xl font-extrabold text-[#0A1428] mt-0.5">{aud.title}</h3>
                    <p className="text-xs font-bold text-amber-600 mt-1">{aud.subtitle}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {aud.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <Link 
                    href={aud.href}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1428] group-hover:text-amber-600 transition"
                  >
                    <span>{aud.cta}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
