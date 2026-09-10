'use client';

import React, { useState } from 'react';
import { User, Building2, GraduationCap, CheckCircle2, ArrowRight, Play, Sparkles, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export const EcosystemAudiences: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'students' | 'companies' | 'colleges'>('students');

  const studentJourney = [
    { step: '1', title: 'Create Profile', desc: 'Verify degree, institution & coursework' },
    { step: '2', title: 'Showcase Skills', desc: 'Link GitHub repos & project proof' },
    { step: '3', title: 'Intro Video', desc: 'Record authentic 60-second video pitch' },
    { step: '4', title: 'Discover Roles', desc: 'Explore AI-curated verified internships' },
    { step: '5', title: 'Career Insights', desc: 'Bridge gaps with automated suggestions' },
    { step: '6', title: 'First Opportunity', desc: 'Interview directly with verified employers' }
  ];

  const companyActions = [
    { title: 'Post Opportunities', desc: 'Reach 10,000+ pre-vetted students with clear stipends & roles.' },
    { title: 'Discover Early Talent', desc: 'Filter candidates by verified skills, degree year & location.' },
    { title: 'Watch Video Profiles', desc: 'Evaluate communication, problem-solving, and curiosity before interviewing.' },
    { title: 'Shortlist Fast', desc: 'One-click shortlisting with direct scheduling tools.' },
    { title: 'Campus Connect', desc: 'Partner directly with affiliated engineering & management colleges.' },
    { title: 'Build Future Workforce', desc: 'Nurture high-retention junior talent into full-time leaders.' }
  ];

  const collegeMetrics = [
    { title: 'Student Participation', value: '1,840', sub: 'Active Student Profiles' },
    { title: 'Profiles Completed', value: '92%', sub: 'Target: 90%+ Benchmarked' },
    { title: 'Resumes & Videos Ready', value: '1,520', sub: 'Recruiter-Ready Talent' },
    { title: 'Employer Connections', value: '64', sub: 'Active Hiring Partners' }
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200">
            The PehlaChance Ecosystem
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
            Built for Three Connected Worlds.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
            Students seeking their beginning. Companies seeking hungry potential. Colleges building career-ready graduates.
          </p>

          {/* Interactive Role Switcher */}
          <div className="inline-flex p-1.5 bg-slate-200/80 rounded-2xl border border-slate-300 gap-1 mt-4">
            <button
              onClick={() => setActiveTab('students')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'students' 
                  ? 'bg-[#0A1428] text-white shadow-md' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4 text-amber-400" />
              <span>For Students</span>
            </button>

            <button
              onClick={() => setActiveTab('companies')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'companies' 
                  ? 'bg-[#0A1428] text-white shadow-md' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-4 h-4 text-amber-400" />
              <span>For Companies</span>
            </button>

            <button
              onClick={() => setActiveTab('colleges')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition flex items-center gap-2 ${
                activeTab === 'colleges' 
                  ? 'bg-[#0A1428] text-white shadow-md' 
                  : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>For Colleges</span>
            </button>
          </div>
        </div>

        {/* Tab 1: For Students */}
        {activeTab === 'students' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-10 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                  Student Hub
                </span>
                <h3 className="text-3xl font-extrabold text-[#0A1428]">
                  Your First Professional Identity Starts Here.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Say goodbye to sending blind PDFs to automated rejection portals. Build a living portfolio that highlights what you can actually build, backed by video introductions and verifiable projects.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link
                    href="/register?role=student"
                    className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-3 rounded-xl text-xs font-bold shadow flex items-center gap-2"
                  >
                    <span>Create Your Profile</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                  <Link
                    href="/opportunities"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl text-xs font-bold transition"
                  >
                    Explore Opportunities
                  </Link>
                </div>
              </div>

              {/* Quick Feature Pill */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 lg:w-80 shrink-0">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">3 Core Actions</h4>
                <div className="space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Build Your Profile</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Showcase Skills & Video</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>Discover & Apply Smarter</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Student Journey Timeline */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">The Student Journey</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {studentJourney.map((st, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1.5 hover:border-amber-400 transition">
                    <span className="w-6 h-6 rounded-full bg-[#0A1428] text-amber-400 text-[10px] font-bold flex items-center justify-center">
                      {st.step}
                    </span>
                    <h5 className="text-xs font-bold text-slate-900 pt-1">{st.title}</h5>
                    <p className="text-[10px] text-slate-500 leading-tight">{st.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: For Companies */}
        {activeTab === 'companies' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-10 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  Employer Gateway
                </span>
                <h3 className="text-3xl font-extrabold text-[#0A1428]">
                  Find Talent Before Everyone Else Does.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  "Your Next Great Hire May Be Someone Looking for Their First Chance." Access raw ambition, curiosity, and authentic communication skills through our verified early-career video network.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link
                    href="/register?role=company"
                    className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-3 rounded-xl text-xs font-bold shadow flex items-center gap-2"
                  >
                    <span>Post an Opportunity</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                  <Link
                    href="/companies"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl text-xs font-bold transition"
                  >
                    Discover Talent Pool
                  </Link>
                </div>
              </div>

              {/* Visual Formula Card */}
              <div className="bg-[#0A1428] text-white p-6 rounded-2xl border border-slate-800 space-y-3 lg:w-80 shrink-0">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">The Growth Formula</span>
                <div className="space-y-1 text-xs">
                  <p className="font-bold text-slate-200">Student Potential</p>
                  <p className="text-amber-400 font-extrabold text-sm">+</p>
                  <p className="font-bold text-slate-200">PehlaChance Verification</p>
                  <p className="text-amber-400 font-extrabold text-sm">=</p>
                  <p className="font-extrabold text-emerald-400 text-sm">Your Future Workforce</p>
                </div>
              </div>
            </div>

            {/* 6 Actions Companies Can Take */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">What Companies Can Do</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {companyActions.map((ca, i) => (
                  <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1 hover:border-blue-300 transition">
                    <h5 className="text-xs font-bold text-[#0A1428]">{ca.title}</h5>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{ca.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: For Colleges */}
        {activeTab === 'colleges' && (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-10 animate-fade-in">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="space-y-4 max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Campus Partnership
                </span>
                <h3 className="text-3xl font-extrabold text-[#0A1428]">
                  Connecting Your Students With the World Beyond Campus.
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  Bridge the classroom to corporate drives. PehlaChance partners with leading institutions to elevate student placement readiness, provide verified video resumes, and connect placement cells directly with high-growth companies.
                </p>
                <div className="flex gap-3 pt-2">
                  <Link
                    href="/colleges"
                    className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-3 rounded-xl text-xs font-bold shadow flex items-center gap-2"
                  >
                    <span>Partner With PehlaChance</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>
                  <Link
                    href="/colleges/dashboard"
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 rounded-xl text-xs font-bold transition"
                  >
                    Explore Campus Dashboard
                  </Link>
                </div>
              </div>

              {/* Campus Network Highlights */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 lg:w-80 shrink-0">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Campus Benefits</h4>
                <div className="space-y-2 text-xs text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Automated AI Resume Generation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Video Pitch Readiness Workshops</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct Company Placement Drives</span>
                  </div>
                </div>
              </div>
            </div>

            {/* College Dashboard Preview */}
            <div className="pt-8 border-t border-slate-100 space-y-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">Institutional Placement Dashboard Preview</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {collegeMetrics.map((cm, i) => (
                  <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-1 text-left">
                    <span className="text-[11px] font-semibold text-slate-500">{cm.title}</span>
                    <div className="text-2xl font-extrabold text-[#0A1428]">{cm.value}</div>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded block w-fit">
                      {cm.sub}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
