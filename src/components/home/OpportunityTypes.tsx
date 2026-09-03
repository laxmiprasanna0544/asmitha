import React from 'react';
import Link from 'next/link';
import { 
  Briefcase, 
  GraduationCap, 
  Code2, 
  BookOpenCheck, 
  Laptop, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export const OpportunityTypes: React.FC = () => {
  const types = [
    {
      title: 'Internships',
      description: 'Get practical exposure while you study.',
      icon: Briefcase,
      href: '/internships',
      accent: 'border-blue-200 hover:border-blue-500',
      iconBg: 'bg-blue-50 text-blue-700'
    },
    {
      title: 'Fresher Jobs',
      description: 'Entry-level opportunities as you prepare to graduate.',
      icon: GraduationCap,
      href: '/jobs',
      accent: 'border-emerald-200 hover:border-emerald-500',
      iconBg: 'bg-emerald-50 text-emerald-700'
    },
    {
      title: 'Projects',
      description: 'Build real-world experience through short-term work.',
      icon: Code2,
      href: '/projects',
      accent: 'border-purple-200 hover:border-purple-500',
      iconBg: 'bg-purple-50 text-purple-700'
    },
    {
      title: 'Apprenticeships',
      description: 'Learn while gaining practical experience.',
      icon: BookOpenCheck,
      href: '/apprenticeships',
      accent: 'border-amber-200 hover:border-amber-500',
      iconBg: 'bg-amber-50 text-amber-800'
    },
    {
      title: 'Freelance',
      description: 'Apply your skills to real work.',
      icon: Laptop,
      href: '/freelance',
      accent: 'border-indigo-200 hover:border-indigo-500',
      iconBg: 'bg-indigo-50 text-indigo-700'
    },
    {
      title: 'Career Programmes',
      description: 'Workshops, industry sessions and career development.',
      icon: Sparkles,
      href: '/career-programmes',
      accent: 'border-teal-200 hover:border-teal-500',
      iconBg: 'bg-teal-50 text-teal-700'
    }
  ];

  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-b border-slate-200/80">
      {/* Background Decorative Mesh & Radial Spots */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs backdrop-blur-sm">
            Opportunity Pathways
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight">
            Find Your First Chance.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Every career journey starts differently. Choose the type of experience that fits your current academic stage and goals.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, idx) => {
            const Icon = type.icon;
            return (
              <Link
                key={idx}
                href={type.href}
                className={`group glass-card hover:bg-white/95 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-xl ${type.accent} flex flex-col justify-between relative overflow-hidden card-hover-effect`}
              >
                {/* Top Subtle Accent Bar */}
                <div className="w-full h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-amber-600 transition-all duration-300 absolute top-0 left-0 right-0" />

                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-xs ${type.iconBg}`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">
                    {type.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {type.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="flex items-center text-xs font-bold text-slate-700 group-hover:text-amber-600 pt-3 border-t border-slate-200/60">
                  <span>Explore {type.title}</span>
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-amber-500" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
