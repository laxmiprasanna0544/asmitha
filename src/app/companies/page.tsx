'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Building2, 
  CheckCircle2, 
  Search, 
  UserCheck, 
  ArrowRight, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';

export default function CompaniesLandingPage() {
  const steps = [
    { title: 'Create Profile', desc: 'Verify your company identity and founding details.' },
    { title: 'Get Verified', desc: 'Manual audit ensures trust for both students and employers.' },
    { title: 'Publish Opportunities', desc: 'Post internships, fresher jobs, or micro-projects in minutes.' },
    { title: 'Discover Talent', desc: 'Search pre-qualified students by verified skills & coursework.' },
    { title: 'Hire Efficiently', desc: 'Shortlist, interview, and issue offer letters with zero clutter.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Hero */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200">
                For Companies
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1428] tracking-tight leading-tight">
                Find Talent Before <br />
                <span className="gold-gradient-text">Everyone Else Does.</span>
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                "Your Next Great Hire May Be Someone Looking for Their First Chance." Fast-growing teams need raw potential, authentic communication, and genuine curiosity. Watch candidate video introductions, evaluate code proof, and build your future workforce today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href="/register?role=company"
                  className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition flex items-center justify-center gap-2 border border-slate-800"
                >
                  <span>Post an Opportunity</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <Link
                  href="/companies/find-talent"
                  className="bg-white hover:bg-slate-50 text-slate-900 px-7 py-3.5 rounded-xl font-bold text-sm border border-slate-300 transition text-center"
                >
                  Discover Talent
                </Link>
              </div>
            </div>

            {/* Visual Mockup */}
            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-800">Employer Hiring Pipeline</span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">Verified Company</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center font-bold">
                  <span>Active Listings</span>
                  <span className="text-amber-600">3 Positions</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center font-bold">
                  <span>Pre-Qualified Applicants</span>
                  <span className="text-slate-900">42 Candidates</span>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl flex justify-between items-center font-bold">
                  <span>Shortlisted Talent</span>
                  <span className="text-emerald-600">8 Candidates</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step Journey Flow */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md space-y-8">
            <div className="text-center space-y-2 max-w-xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1428]">The Employer Hiring Journey</h2>
              <p className="text-xs text-slate-600">From account creation to hiring your first intern in 5 clear steps.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {steps.map((s, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#0A1428] text-white font-bold text-xs flex items-center justify-center mx-auto">
                    0{i+1}
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs">{s.title}</h4>
                  <p className="text-[11px] text-slate-500">{s.desc}</p>
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
