import React from 'react';
import { Search, FileSearch, Sparkles, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const EasyApplySection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      desc: 'Browse 100% verified opportunities matching your skill stack and availability.',
      icon: Search,
      badge: 'Curated Roles'
    },
    {
      num: '02',
      title: 'Review',
      desc: 'Inspect transparent stipends, role deliverables, company culture, and mentors.',
      icon: FileSearch,
      badge: 'Zero Ghosting'
    },
    {
      num: '03',
      title: 'Prepare',
      desc: 'Tailor your 60-second video pitch and select relevant project proofs with AI assistance.',
      icon: Sparkles,
      badge: 'Smart Assist'
    },
    {
      num: '04',
      title: 'Apply',
      desc: 'Submit in one click with your verified professional identity. Fully authorized by you.',
      icon: Send,
      badge: 'Student Control'
    },
    {
      num: '05',
      title: 'Track',
      desc: 'Real-time pipeline updates, interview invites, and constructive employer feedback.',
      icon: CheckCircle2,
      badge: 'Live Status'
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>PehlaChance Easy Apply</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
            Discover. Prepare. <span className="gold-gradient-text">Apply Smarter.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            The core philosophy of PehlaChance Easy Apply is <span className="font-extrabold text-[#0A1428]">"Smart Assistance. Student Control."</span> We empower you to prepare tailored, high-impact applications without chaotic bot spam.
          </p>
        </div>

        {/* 5-Step Application Journey Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-4 relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-amber-600">{s.num}</span>
                    <span className="text-[10px] font-bold bg-white text-slate-700 px-2 py-0.5 rounded-full border border-slate-200">
                      {s.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-[#0A1428] text-amber-400 flex items-center justify-center mb-3 shadow group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-bold text-[#0A1428]">{s.title}</h3>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supporting Banner: Student Control Promise */}
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#0A1428]">Zero Uncontrolled Mass Applications</h4>
              <p className="text-xs text-slate-500">Every application requires your deliberate review. You remain in 100% control of your identity.</p>
            </div>
          </div>

          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 bg-[#0A1428] hover:bg-[#0F1D38] text-white px-5 py-2.5 rounded-xl text-xs font-bold transition shadow shrink-0"
          >
            <span>Explore Opportunities</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
