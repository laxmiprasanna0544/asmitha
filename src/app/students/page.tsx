'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { ArrowRight, CheckCircle2, Sparkles, BookOpen, UserCheck, Briefcase } from 'lucide-react';

export default function StudentsLandingPage() {
  const roadmap = [
    { year: 'Year 1', title: 'Create Your Professional Identity', desc: 'Verify academic credentials, link GitHub/design portfolios, and earn skill badges.' },
    { year: 'Year 2', title: 'Build Skills & Real Projects', desc: 'Participate in short-term micro-projects and store verifiable code proof.' },
    { year: 'Year 3', title: 'Get Industry Exposure', desc: 'Land practical internships, apprenticeships, and summer work opportunities.' },
    { year: 'Final Year', title: 'Apply for Jobs & Employer Connections', desc: 'Apply for entry-level fresher roles with pre-verified credibility.' },
    { year: 'Post-Graduation', title: 'Keep Growing Your Career', desc: 'Access continuous mentorship, advanced career tools, and alumni network.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
              For Students
            </span>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0A1428] tracking-tight">
              Your First Professional <br />
              <span className="gold-gradient-text">Identity Starts Here.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Every student has potential, but traditional resumes don't fully represent you. PehlaChance helps you build a multidimensional profile, showcase your skills through 60-second video introductions, and discover verified early-career opportunities.
            </p>

            <div className="flex justify-center gap-4 pt-4">
              <Link
                href="/register?role=student"
                className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow flex items-center gap-2 border border-slate-800"
              >
                <span>Create Your Profile</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <Link
                href="/opportunities"
                className="bg-white hover:bg-slate-50 text-slate-900 px-7 py-3.5 rounded-xl font-bold text-sm border border-slate-300 transition"
              >
                Explore Opportunities
              </Link>
            </div>
          </div>

          {/* Interactive Career Timeline (Section 15: Student Journey) */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1428]">The 4-Year Student Career Journey</h2>
              <p className="text-xs text-slate-600">A structured roadmap from your first semester to full-time career success.</p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {roadmap.map((item, idx) => (
                <div key={idx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200 flex items-start gap-4">
                  <div className="bg-[#0A1428] text-amber-400 font-extrabold text-xs px-3 py-1.5 rounded-xl shrink-0">
                    {item.year}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{item.title}</h3>
                    <p className="text-xs text-slate-600 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
