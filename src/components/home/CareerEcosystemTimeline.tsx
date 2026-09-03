import React from 'react';
import { BookOpen, Award, Briefcase, Rocket, Trophy, ArrowRight } from 'lucide-react';

export const CareerEcosystemTimeline: React.FC = () => {
  const stages = [
    {
      title: 'Education',
      subtitle: 'Academic Foundation',
      desc: 'Verify degree, institution credentials & core fundamentals.',
      icon: BookOpen,
      step: '01'
    },
    {
      title: 'Skills',
      subtitle: 'Proof of Work',
      desc: 'Build projects, complete micro-tasks & earn skill badges.',
      icon: Award,
      step: '02'
    },
    {
      title: 'Experience',
      subtitle: 'Practical Exposure',
      desc: 'Land internships, freelance tasks & structured apprenticeships.',
      icon: Briefcase,
      step: '03'
    },
    {
      title: 'Opportunity',
      subtitle: 'Direct Matching',
      desc: 'Connect with verified hiring managers & startup founders.',
      icon: Rocket,
      step: '04'
    },
    {
      title: 'Career',
      subtitle: 'Long-term Growth',
      desc: 'Transition into full-time roles & continuous career advancement.',
      icon: Trophy,
      step: '05'
    }
  ];

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-b border-slate-200/80">
      {/* Background Decorative Mesh Overlay & Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-amber-400/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1 rounded-full border border-amber-200 shadow-2xs backdrop-blur-sm">
            Ecosystem Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
            More Than an Internship Website.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            We support the full continuum of early career growth from academic enrollment to full-time career placement.
          </p>
        </div>

        {/* Timeline Desktop Horizontal / Mobile Vertical */}
        <div className="relative">
          {/* Desktop Horizontal Glowing Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-10 right-10 h-1 bg-gradient-to-r from-amber-400 via-blue-500 to-amber-500 rounded-full -translate-y-6 z-0 opacity-40" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card hover:bg-white/95 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative card-hover-effect border border-slate-200/80"
                >
                  <div>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#0A1428] text-white flex items-center justify-center font-bold text-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-extrabold text-slate-400 group-hover:text-amber-600 transition-colors">
                        STAGE {stage.step}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-0.5">
                      {stage.title}
                    </h3>
                    <div className="text-xs font-semibold text-amber-600 mb-2">{stage.subtitle}</div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>

                  {idx < stages.length - 1 && (
                    <div className="hidden lg:flex items-center text-slate-400 mt-4 pt-2 border-t border-slate-200/60">
                      <span className="text-[10px] uppercase font-bold text-slate-500">Next Step</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-auto text-amber-500" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
