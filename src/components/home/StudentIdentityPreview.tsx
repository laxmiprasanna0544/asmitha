import React from 'react';
import Link from 'next/link';
import { UserCheck, Building2, GraduationCap, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export const StudentIdentityPreview: React.FC = () => {
  return (
    <section className="py-24 bg-mesh-light relative overflow-hidden border-b border-slate-200/80">
      {/* Background Decorative Grid & Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-amber-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
        
        {/* Block 1: Student Professional Identity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200 shadow-2xs backdrop-blur-sm">
              Student Professional Identity
            </span>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
              Build More Than a Resume. <br />
              <span className="gold-gradient-text">Build Your Professional Identity.</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Traditional 1-page PDF resumes flatten your potential. PehlaChance turns your academic journey, verified code repositories, design portfolios, and project proof into a dynamic digital identity recruiters trust.
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-bold text-slate-800 pt-2">
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card hover:bg-white transition shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Verified Education</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card hover:bg-white transition shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Skills & Projects</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card hover:bg-white transition shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Certifications</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-xl glass-card hover:bg-white transition shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Achievements & Goals</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/students"
                className="inline-flex items-center gap-2 text-xs font-bold bg-[#0A1428] text-white px-6 py-3.5 rounded-xl shadow-lg hover:bg-[#0F1D38] transition border border-slate-800"
              >
                <span>Discover Student Features</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

          {/* Right Visual Dashboard Mockup */}
          <div className="lg:col-span-6">
            <div className="glass-card rounded-3xl p-6 shadow-2xl space-y-4 border border-white/90 glowing-border-gold relative overflow-hidden group">
              {/* Background Glassy Project Picture Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-15 mix-blend-overlay pointer-events-none filter blur-[1px] group-hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('/images/project-collaboration.png')` }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 text-slate-950 font-extrabold flex items-center justify-center shadow-md">
                      AS
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900">Aarav Sharma</h4>
                      <span className="text-xs text-slate-600 font-semibold">VIT Chennai • B.Tech CSE</span>
                    </div>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 text-xs font-extrabold px-3.5 py-1 rounded-full border border-emerald-500/30 shadow-2xs backdrop-blur-md">
                    Profile 95% Complete
                  </div>
                </div>

                <div className="space-y-3 text-xs pt-4">
                  <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="font-extrabold text-slate-800">Verified Skill Badges</span>
                    <span className="font-semibold text-slate-600">React, Next.js, Node.js</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="font-extrabold text-slate-800">Verified Project Proof</span>
                    <span className="font-bold text-amber-600">Smart Campus Tracker (4 GitHub Commits)</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-slate-200/80 shadow-2xs">
                    <span className="font-extrabold text-slate-800">AI Resume Strength</span>
                    <span className="font-bold text-emerald-600">92% Ready & Tailored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Block 2: Dual Grid For Companies & Colleges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
          
          {/* Companies Card */}
          <div className="glass-card-dark text-white rounded-3xl p-8 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-2xl border border-slate-800 glowing-border-gold">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="space-y-3 relative z-10">
              <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shadow-xs border border-amber-500/30">
                <Building2 className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">For Companies & Employers</span>
              <h3 className="text-2xl font-extrabold text-white">Meet the Next Generation of Talent.</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Hiring interns and fresh graduates shouldn’t mean sorting through thousands of unverified mass-apply resumes. Access pre-qualified candidates with verified proof-of-work.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800 relative z-10">
              <Link
                href="/companies"
                className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300"
              >
                <span>Hire Verified Talent</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Colleges Card */}
          <div className="glass-card text-slate-900 rounded-3xl p-8 flex flex-col justify-between space-y-6 shadow-xl border border-white/80">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-slate-100 text-slate-900 flex items-center justify-center shadow-2xs border border-slate-200">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">For Colleges & Universities</span>
              <h3 className="text-2xl font-extrabold text-slate-900">Build a Career-Ready Campus.</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                PehlaChance does not replace the college placement cell. It digitizes and strengthens the placement ecosystem with department-aware benchmarks and employer connections.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-200/80">
              <Link
                href="/colleges"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0A1428] hover:text-amber-600"
              >
                <span>Become a College Partner</span>
                <ArrowRight className="w-4 h-4 text-amber-500" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
