import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Building2, GraduationCap, Briefcase } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero-aurora overflow-hidden border-b border-slate-200/80">
      {/* Decorative Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Floating Animated Ambient Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-float-reverse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust / Positioning Badge */}
            <div className="inline-flex items-center gap-2.5 bg-[#0A1428] text-slate-100 px-4 py-2 rounded-full text-xs font-semibold shadow-lg border border-slate-800 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <span>India’s Early-Career Opportunity Ecosystem</span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">Verified Only</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1428] tracking-tight leading-[1.1]">
              Your First Opportunity <br className="hidden sm:inline" />
              <span className="gold-gradient-text">Starts Here.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight">
              Find an opportunity. Build experience. Start your career.
            </p>

            {/* Paragraph Description */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
              PehlaChance connects students with verified internships, projects, apprenticeships, and entry-level jobs from fast-growing startups, SMEs, and ambitious companies across India.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/opportunities"
                className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group border border-slate-800 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Find Opportunities</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              
              <Link
                href="/register?role=student"
                className="glass-card hover:bg-white text-slate-900 px-7 py-3.5 rounded-xl font-bold text-sm border border-slate-300/80 shadow-xs hover:border-amber-400 hover:shadow-md hover:scale-[1.02] transition text-center"
              >
                Build Your Profile
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div className="p-3 rounded-xl glass-card border border-white/80 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">100%</div>
                <div className="text-xs font-semibold text-slate-600">Verified Listings</div>
              </div>
              <div className="p-3 rounded-xl glass-card border border-white/80 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">6+</div>
                <div className="text-xs font-semibold text-slate-600">Opportunity Types</div>
              </div>
              <div className="p-3 rounded-xl glass-card border border-white/80 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">3-Way</div>
                <div className="text-xs font-semibold text-slate-600">Student • College • Firm</div>
              </div>
            </div>

          </div>

          {/* Right Product UI Mockup Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Decorative Badges */}
              <div className="absolute -top-5 -right-4 z-30 bg-white/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-amber-300/60 flex items-center gap-2 animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-900">⚡ Verified Candidate Match</span>
              </div>

              <div className="absolute -bottom-5 -left-4 z-30 bg-[#0A1428]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2 animate-float-reverse text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Proof-of-Work Verified</span>
              </div>

              {/* Decorative Accent Glow */}
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-amber-400/25 rounded-full blur-3xl animate-pulse-slow pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Platform Mockup Card */}
              <div className="relative glass-card rounded-2xl p-6 shadow-2xl space-y-4 border border-white/90 glowing-border-gold">
                
                {/* Mockup Header */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 font-medium">pehlachance.com/hub</span>
                </div>

                {/* Simulated Opportunity Card 1 */}
                <div className="p-4 rounded-xl bg-white/95 border border-slate-200/90 hover:border-amber-400/80 transition-colors shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-900 px-2 py-0.5 rounded shadow-2xs">
                      Featured Internship
                    </span>
                    <span className="text-xs text-emerald-700 font-extrabold">₹25,000/mo</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">React Frontend Engineer Intern</h4>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>NexGen Cloud • Hybrid</span>
                    <span className="flex items-center gap-1 text-emerald-600 font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                </div>

                {/* Simulated Profile Strength Indicator */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-[#0A1428] via-[#0F1D38] to-[#172746] text-white space-y-2 shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5" /> AI Resume Strength
                    </span>
                    <span className="text-xs font-extrabold text-white">92% Ready</span>
                  </div>
                  <div className="w-full bg-slate-800/80 rounded-full h-2 overflow-hidden border border-slate-700">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 h-full w-[92%]" />
                  </div>
                  <p className="text-[11px] text-slate-300">
                    2 project proof-of-work badges attached to candidate profile.
                  </p>
                </div>

                {/* Ecosystem Tags */}
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-slate-200/80 shadow-2xs">
                    <Building2 className="w-4 h-4 text-slate-700" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">For Startups</div>
                      <div className="text-[9px] text-slate-500">Verified Talent Pool</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-lg bg-white/90 border border-slate-200/80 shadow-2xs">
                    <GraduationCap className="w-4 h-4 text-slate-700" />
                    <div>
                      <div className="text-[11px] font-bold text-slate-900">For Campuses</div>
                      <div className="text-[9px] text-slate-500">Placement Cell Tech</div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

