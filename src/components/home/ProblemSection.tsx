import React from 'react';
import { AlertCircle, HelpCircle, FileX, ShieldAlert, UserX, Building, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: '"You don’t have enough experience."',
      desc: 'Every entry-level job demands 1–2 years of experience. But nobody is willing to offer that crucial first chance to build it.',
      icon: HelpCircle,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      num: '02',
      title: '"Hundreds of applications, zero response."',
      desc: 'Resumes vanish into automated ATS black holes. Students spend hundreds of hours applying without ever receiving meaningful feedback.',
      icon: FileX,
      accent: 'border-rose-500/30 text-rose-400 bg-rose-500/10'
    },
    {
      num: '03',
      title: '"Fake internships & misleading offers."',
      desc: 'Deceptive certificate mills and unpaid clerical tasks masquerade as training opportunities, exploiting eager early-career talent.',
      icon: ShieldAlert,
      accent: 'border-red-500/30 text-red-400 bg-red-500/10'
    },
    {
      num: '04',
      title: '"Resumes don’t show personality."',
      desc: 'A black-and-white PDF can’t demonstrate your drive, communication skills, curiosity, or hunger to learn and create value.',
      icon: UserX,
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    },
    {
      num: '05',
      title: '"Companies miss emerging talent."',
      desc: 'Employers filter by college brand names instead of raw capability, missing out on hungry, high-potential builders across India.',
      icon: Building,
      accent: 'border-blue-500/30 text-blue-400 bg-blue-500/10'
    }
  ];

  return (
    <section className="py-24 bg-[#0A1428] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[600px] h-[600px] bg-blue-600/12 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-slate-900/90 px-4 py-1.5 rounded-full border border-amber-500/30 shadow-md backdrop-blur-md">
            The Reality for Students Across India
          </span>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Getting Your First Opportunity <br className="hidden sm:inline" />
            <span className="text-amber-400">Shouldn't Be This Difficult.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Traditional hiring wasn't built for early-career potential. It was designed to screen experienced candidates, leaving ambitious students locked out.
          </p>
        </div>

        {/* 5 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx} 
                className="bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 rounded-2xl transition-all duration-300 hover:translate-y-[-2px] flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-500">{p.num}</span>
                    <div className={`p-2 rounded-xl border ${p.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              </div>
            );
          })}

          {/* The Consequence / Transition Card */}
          <div className="bg-gradient-to-br from-amber-500/20 via-slate-900 to-slate-900 border border-amber-500/40 p-6 rounded-2xl flex flex-col justify-between space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 block">The Result</span>
              <h3 className="text-base font-extrabold text-white leading-snug">
                Talented students remain unseen — and companies miss out on their future workforce.
              </h3>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                PehlaChance was created to break this paradox by putting verified skill proof and human video introductions first.
              </p>
            </div>
            
            <Link 
              href="/register?role=student"
              className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition"
            >
              <span>See How PehlaChance Solves This</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
