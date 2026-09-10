import React from 'react';
import { 
  Code2, 
  TrendingUp, 
  Palette, 
  Stethoscope, 
  LineChart, 
  Cog, 
  Tv, 
  HeartHandshake, 
  ShieldCheck, 
  CheckCircle2, 
  Lock, 
  AlertTriangle, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export const IndustriesAndTrust: React.FC = () => {
  const industries = [
    { name: 'Technology & AI', count: '140+ Roles', icon: Code2, desc: 'Fullstack, GenAI, Data & Cloud' },
    { name: 'Sales & Marketing', count: '95+ Roles', icon: TrendingUp, desc: 'Growth, GTM, Performance & B2B' },
    { name: 'Design & Creative', count: '60+ Roles', icon: Palette, desc: 'UI/UX, Product Design, Graphic & 3D' },
    { name: 'Healthcare & Biotech', count: '35+ Roles', icon: Stethoscope, desc: 'HealthTech, Clinical & Diagnostics' },
    { name: 'Finance & FinTech', count: '50+ Roles', icon: LineChart, desc: 'Analytics, Risk, Quant & Operations' },
    { name: 'Core Engineering', count: '75+ Roles', icon: Cog, desc: 'Robotics, Embedded, Auto & Renewable' },
    { name: 'Media & Research', count: '45+ Roles', icon: Tv, desc: 'Journalism, Strategy & Content' },
    { name: 'Social Impact', count: '30+ Roles', icon: HeartHandshake, desc: 'NGOs, Public Policy & Sustainability' },
  ];

  const trustPillars = [
    {
      title: 'Genuine Verified Companies',
      desc: 'Every employer is verified with official business registrations (CIN/GST) and company domain checks.',
      icon: ShieldCheck
    },
    {
      title: 'Clear Information & Stipends',
      desc: 'No vague promises. Full transparency on stipend, role expectations, location, and learning outcomes.',
      icon: CheckCircle2
    },
    {
      title: 'Scam Awareness Shield',
      desc: 'Automated screening against payment-demanding certificate scams, MLM schemes, and ghost postings.',
      icon: Lock
    },
    {
      title: 'Safer Early-Career Experiences',
      desc: 'Direct reporting channel and student protection policies to guarantee a respectful workplace environment.',
      icon: AlertTriangle
    }
  ];

  const membershipPerks = [
    'Enhanced Video Profile Showcase',
    'AI Career Support & Gap Analyzer',
    'Priority Recruiter Discovery Queue',
    'AI Resume Builder & Tailoring',
    'Unlimited Verified Easy Applications',
    'Direct Access to Career Masterclasses'
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Part 1: Explore Industries */}
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-4 py-1.5 rounded-full border border-amber-200">
              Industry Explorer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              Explore Opportunities by Industry.
            </h2>
            <p className="text-base text-slate-600 font-medium">
              From fast-moving tech startups to established engineering and healthcare pioneers across India.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={idx}
                  href="/opportunities"
                  className="bg-slate-50 hover:bg-white p-5 rounded-2xl border border-slate-200 hover:border-amber-400 shadow-2xs hover:shadow-lg transition-all duration-200 space-y-2 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-[#0A1428] group-hover:bg-amber-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0A1428] pt-1">{ind.name}</h3>
                  <p className="text-[11px] text-slate-500">{ind.desc}</p>
                  <span className="text-[10px] font-bold text-amber-600 block">{ind.count}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Part 2: Trust & Safety Section */}
        <div className="bg-[#0A1428] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl space-y-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-4 py-1.5 rounded-full text-xs font-bold border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Trust & Safety Guarantee</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-white">
              "Your Career Journey Shouldn't Start With a Scam."
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              We know how frustrating fake internships, unpaid exploitation, and pay-to-work schemes are. PehlaChance enforces strict multi-tier verification before any employer can post.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((tp, i) => {
              const Icon = tp.icon;
              return (
                <div key={i} className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/80 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{tp.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{tp.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Badges Preview */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-800/80">
            <span className="inline-flex items-center gap-1.5 bg-emerald-950/80 text-emerald-300 text-xs font-bold px-3 py-1.5 rounded-full border border-emerald-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              ✓ Verified Company
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-950/80 text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full border border-blue-500/30">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              ✓ Verified Opportunity
            </span>
            <span className="inline-flex items-center gap-1.5 bg-amber-950/80 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500/30">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
              Protected Application Pipeline
            </span>
          </div>
        </div>

        {/* Part 3: Membership Presentation */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-100/60 px-3 py-1 rounded-full border border-amber-200">
              PehlaChance Membership
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A1428]">
              Unlock More From Your Career Journey.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Take full advantage of our video hosting, automated AI profile insights, priority talent discovery, and curated internship matching.
            </p>
            <div className="pt-2">
              <Link
                href="/register?role=student"
                className="inline-flex items-center gap-2 bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-3 rounded-xl text-xs font-bold shadow transition"
              >
                <span>Join PehlaChance Network</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm w-full lg:max-w-md space-y-4">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
              Network Benefits Included
            </h4>
            <div className="space-y-2.5">
              {membershipPerks.map((p, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
