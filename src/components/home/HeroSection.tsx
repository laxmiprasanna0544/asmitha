import React from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Sparkles, CheckCircle2, Video, Award, TrendingUp, Users } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-hero-aurora overflow-hidden border-b border-slate-200/80">
      {/* Decorative Glow & Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      
      {/* Floating Animated Ambient Blobs */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-amber-400/15 rounded-full blur-3xl animate-float-slow pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/12 rounded-full blur-3xl animate-float-reverse pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Editorial & Brand Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Master Positioning Pill */}
            <div className="inline-flex items-center gap-2.5 bg-[#0A1428] text-slate-100 px-4 py-2 rounded-full text-xs font-semibold shadow-lg border border-slate-800 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_8px_#f59e0b]" />
              <span className="font-bold tracking-wide">India's Video-First, AI-Powered Early Career Talent Network</span>
              <span className="bg-amber-400/20 text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-400/30">
                Verified Only
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1428] tracking-tight leading-[1.08]">
              Every Student <br className="hidden sm:inline" />
              Deserves a <span className="gold-gradient-text">First Chance.</span>
            </h1>

            {/* Strategic Tagline (Section 2) */}
            <p className="text-lg sm:text-xl font-bold text-slate-800 tracking-tight flex items-center gap-2">
              <span>Your Potential. Your Opportunity. Your PehlaChance.</span>
            </p>

            {/* Supporting Brand Paragraph (Section 1) */}
            <p className="text-base text-slate-600 leading-relaxed max-w-2xl font-medium">
              Helping students showcase their potential, discover genuine opportunities, and take their first step into the professional world. Meet the person behind the resume through video profiles, verified project credentials, and intelligent AI career matching.
            </p>

            {/* Hero CTAs: Discover Internships / Showcase Potential / Get Discovered */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/opportunities"
                className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-3.5 rounded-xl font-bold text-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2 group border border-slate-800 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10">Discover Internships</span>
                <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform relative z-10" />
              </Link>
              
              <Link
                href="/register?role=student"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:scale-[1.02] transition-all text-center flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4 text-slate-950" />
                <span>Showcase Your Potential</span>
              </Link>

              <Link
                href="/register?role=student"
                className="glass-card hover:bg-white text-slate-900 px-5 py-3.5 rounded-xl font-bold text-sm border border-slate-300/80 shadow-xs hover:border-amber-400 hover:shadow-md hover:scale-[1.02] transition text-center"
              >
                Get Discovered
              </Link>
            </div>

            {/* Trust Highlights & Metrics */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div className="p-3.5 rounded-xl glass-card border border-white/90 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">1st</div>
                <div className="text-xs font-semibold text-slate-600">Video-First Network</div>
              </div>
              <div className="p-3.5 rounded-xl glass-card border border-white/90 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">100%</div>
                <div className="text-xs font-semibold text-slate-600">Verified Listings</div>
              </div>
              <div className="p-3.5 rounded-xl glass-card border border-white/90 shadow-2xs">
                <div className="text-xl font-extrabold text-[#0A1428]">3-Way</div>
                <div className="text-xs font-semibold text-slate-600">Student • Firm • College</div>
              </div>
            </div>

          </div>

          {/* Right: Realistic Product UI Preview */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Dynamic Badge 1: 92% Match */}
              <div className="absolute -top-4 -right-2 z-30 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-amber-300/80 flex items-center gap-2 animate-float-slow">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-extrabold text-slate-900">⚡ 92% Opportunity Match</span>
              </div>

              {/* Floating Dynamic Badge 2: Profile Strength 94% */}
              <div className="absolute -bottom-4 -left-2 z-30 bg-[#0A1428]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-2xl border border-slate-700/80 flex items-center gap-2 animate-float-reverse text-white">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-amber-300">Profile Strength 94%</span>
              </div>

              {/* Floating Badge 3: 3 New Opportunities */}
              <div className="hidden sm:flex absolute top-1/2 -right-6 z-30 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl shadow-lg border border-slate-200 items-center gap-1.5 text-[11px] font-bold text-blue-700">
                <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                <span>3 New Opportunities Today</span>
              </div>

              {/* Decorative Glow */}
              <div className="absolute -top-6 -left-6 w-56 h-56 bg-amber-400/25 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-6 -right-6 w-56 h-56 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

              {/* Product UI Card Container */}
              <div className="relative z-10 bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
                
                {/* Product Header Bar */}
                <div className="bg-[#0A1428] px-5 py-3 flex items-center justify-between text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                    <span className="w-3 h-3 rounded-full bg-amber-500" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-300 ml-2">PehlaChance Verified Talent</span>
                  </div>
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
                    Live Profile
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-4">
                  {/* Candidate Profile Header */}
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-sm shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80" 
                        alt="Rahul Verma" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-extrabold text-[#0A1428]">Rahul Verma</h3>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      </div>
                      <p className="text-xs text-slate-600 font-medium">B.Tech Computer Science & AI • DTU Delhi</p>
                      <p className="text-[11px] text-slate-400">Class of 2026 • Seeking Summer Fullstack Internship</p>
                    </div>
                  </div>

                  {/* Video Profile Thumbnail Component */}
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 group aspect-video">
                    <img 
                      src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
                      alt="Video Introduction Thumbnail" 
                      className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-between p-3.5">
                      <div className="flex justify-between items-center">
                        <span className="inline-flex items-center gap-1 bg-rose-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          Video Pitch
                        </span>
                        <span className="text-[10px] font-semibold bg-black/60 text-slate-200 px-2 py-0.5 rounded-md backdrop-blur-xs">
                          0:45s
                        </span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-white text-xs font-bold">"Hi, I'm Rahul — Why I build fast web apps"</p>
                          <p className="text-slate-300 text-[10px]">Communication • Tech Stack • Ambition</p>
                        </div>
                        <button 
                          aria-label="Play video introduction"
                          className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg hover:scale-110 transition shrink-0"
                        >
                          <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div>
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-500 mb-1.5">
                      <span>Verified Skills & Code Proof</span>
                      <span className="text-amber-600">4 GitHub Projects</span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">React.js</span>
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">TypeScript</span>
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">Next.js</span>
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-slate-100 text-slate-800 border border-slate-200">Node.js</span>
                      <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-amber-50 text-amber-900 border border-amber-200">AI Prompting</span>
                    </div>
                  </div>

                  {/* AI Career Insight Pill */}
                  <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200/80 flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-purple-600 shrink-0" />
                    <p className="text-[11px] text-purple-950 font-semibold leading-tight">
                      <span className="font-extrabold text-purple-900">AI Career Insight:</span> Strong project portfolio in Next.js + Tailwind. High recommendation for fast-track product teams.
                    </p>
                  </div>

                  {/* Recommended Live Opportunity Match */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">92% Match</span>
                      <h4 className="text-xs font-bold text-slate-900 mt-0.5">Frontend Engineering Intern</h4>
                      <p className="text-[10px] text-slate-500">ScaleVantage Labs • ₹18,000/mo • Hybrid</p>
                    </div>
                    <Link
                      href="/opportunities"
                      className="text-xs font-bold text-amber-600 hover:text-amber-700 bg-white border border-slate-200 px-2.5 py-1 rounded-lg shadow-2xs"
                    >
                      View
                    </Link>
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
