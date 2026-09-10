import React from 'react';
import { Heart, Compass, MapPin, Sparkles, CheckCircle2, ArrowRight, Infinity as InfinityIcon } from 'lucide-react';
import Link from 'next/link';

export const MissionVisionRoadmap: React.FC = () => {
  const roadmapPhases = [
    {
      phase: 'PHASE 01',
      status: 'Available Now',
      statusColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      title: 'Start With Internships',
      desc: 'Curated, 100% verified summer and winter internships across startups, SMEs, and growth tech firms.'
    },
    {
      phase: 'PHASE 02',
      status: 'Growing Active',
      statusColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      title: 'Build the Talent Network',
      desc: '60-second video introductions, campus institutional tie-ups, and proactive recruiter discovery channels.'
    },
    {
      phase: 'PHASE 03',
      status: 'Growing Active',
      statusColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      title: 'AI Career Intelligence',
      desc: 'Automated skill-gap detection, AI resume structuring, and personalized application assistance.'
    },
    {
      phase: 'PHASE 04',
      status: 'Future Vision',
      statusColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      title: 'Expand Full Early Career',
      desc: 'Formal apprenticeships, graduate trainee programmes, and entry-level full-time roles across India.'
    }
  ];

  return (
    <section className="py-24 bg-[#0A1428] text-white border-b border-slate-800 relative overflow-hidden">
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 relative z-10">
        
        {/* Part 1: Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Mission Card */}
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold border border-amber-500/30">
                <Heart className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Mission</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                "To ensure that a lack of experience doesn't mean a lack of opportunity."
              </h3>

              <div className="pt-2 text-sm text-slate-300 leading-relaxed space-y-2">
                <p>Everyone needs a beginning.</p>
                <p className="font-extrabold text-amber-400 text-base">
                  PehlaChance is built for that beginning.
                </p>
                <p className="text-xs text-slate-400 pt-1">
                  We exist to empower ambitious students across tier-1, tier-2, and tier-3 colleges in India with the tools to showcase what they can do, not just where they studied.
                </p>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-slate-900/90 rounded-3xl p-8 sm:p-10 border border-slate-800 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-blue-500/15 text-blue-300 px-3.5 py-1 rounded-full text-xs font-bold border border-blue-500/30">
                <Compass className="w-3.5 h-3.5 text-blue-400" />
                <span>Our Vision</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                "To Build One of India’s Most Trusted Early-Career Talent Networks."
              </h3>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Connected Through Technology:</strong> AI matching and video profiles bridging geographical and institutional barriers.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Beyond the Resume:</strong> Multidimensional identity highlighting genuine skills, projects, and work ethics.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Equal Access to Opportunity:</strong> High-growth companies connecting with high-potential students everywhere.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Part 2: Strategic Roadmap */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Strategic Evolution
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">The PehlaChance Roadmap</h3>
            <p className="text-xs text-slate-400">Our transparent plan for scaling early-career opportunities across India.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {roadmapPhases.map((rp, i) => (
              <div key={i} className="bg-slate-900 rounded-2xl p-6 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-slate-400">{rp.phase}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${rp.statusColor}`}>
                      {rp.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{rp.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{rp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Built for India's Next Generation */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/80 rounded-3xl p-8 sm:p-12 border border-slate-800 text-center space-y-8 shadow-2xl">
          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Ecosystem Scale</span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built for India's Next Generation
            </h3>
            <p className="text-xs text-slate-300">Empowering student builders and progressive companies to shape the nation's future workforce.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-amber-400">1st</div>
              <div className="text-sm font-bold text-white">Video-First Network</div>
              <p className="text-xs text-slate-400">Pioneering multi-dimensional early career identity in India</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-blue-400">3</div>
              <div className="text-sm font-bold text-white">Audiences Served</div>
              <p className="text-xs text-slate-400">Seamlessly uniting Students, Colleges & Companies</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold text-emerald-400 flex items-center justify-center">
                <InfinityIcon className="w-12 h-12" />
              </div>
              <div className="text-sm font-bold text-white">First Chances</div>
              <p className="text-xs text-slate-400">Unlocking infinite possibilities for raw potential</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
