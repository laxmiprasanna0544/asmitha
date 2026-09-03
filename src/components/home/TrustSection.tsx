import React from 'react';
import { ShieldCheck, Lock, Flag, Award, CheckCircle } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      title: 'Company Verification',
      desc: 'Companies are reviewed and verified before publishing any opportunity on the platform.',
      icon: ShieldCheck,
      badge: 'Manual & Identity Vetted'
    },
    {
      title: 'Opportunity Review',
      desc: 'Listings are inspected to reduce misleading compensation, unclear duties, or pay-to-work scams.',
      icon: Lock,
      badge: 'Zero Scam Guarantee'
    },
    {
      title: 'Student Reporting',
      desc: 'Students can easily flag suspicious employer behavior or misaligned role descriptions.',
      icon: Flag,
      badge: 'Community Protection'
    },
    {
      title: 'Employer Accountability',
      desc: 'Opportunity quality, responsiveness, and candidate feedback are monitored over time.',
      icon: Award,
      badge: 'Quality Over Volume'
    }
  ];

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-b border-slate-200/80">
      {/* Background Mesh Overlay & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs backdrop-blur-sm">
            Platform Integrity & Safety
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
            Trust Comes First.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Discovery was solved decades ago. We are building the ecosystem that solves trust at scale for students, parents, and companies.
          </p>
        </div>

        {/* Highlight Banner Statement */}
        <div className="max-w-4xl mx-auto glass-card-dark text-white rounded-3xl p-8 shadow-2xl text-center mb-16 glowing-border-gold relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-blue-500/10 pointer-events-none" />
          <div className="relative z-10 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Core Ecosystem Principle
            </span>
            <blockquote className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              “We don’t want more listings. We want more <span className="gold-gradient-text">genuine opportunities</span>.”
            </blockquote>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div 
                key={idx}
                className="glass-card hover:bg-white/95 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all space-y-3 border border-slate-200/80 card-hover-effect"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shadow-2xs">
                  <Icon className="w-6 h-6" />
                </div>
                
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded inline-block">
                  {p.badge}
                </span>

                <h3 className="text-base font-bold text-slate-900 pt-1">{p.title}</h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
