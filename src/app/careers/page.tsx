'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Briefcase, ArrowRight, CheckCircle2, X, Send, Sparkles } from 'lucide-react';

interface StartupRole {
  title: string;
  dept: string;
  location: string;
  description: string;
}

export default function CareersPage() {
  const roles: StartupRole[] = [
    {
      title: 'Growth & BD Lead (College Partnerships)',
      dept: 'College Partnerships',
      location: 'Bengaluru / Hybrid',
      description: 'Lead engagement with university deans and campus placement cells across Karnataka, Telangana, and Tamil Nadu.'
    },
    {
      title: 'Employer Partnership Manager (Startups)',
      dept: 'Employer Partnerships',
      location: 'Gurugram / Hybrid',
      description: 'Onboard fast-growing seed and Series-A venture-backed startups seeking verified intern talent.'
    },
    {
      title: 'Full-Stack Software Engineer (Next.js / AI)',
      dept: 'Product & Technology',
      location: 'Bengaluru / Remote',
      description: 'Architect responsive student dashboards, AI match scoring services, and real-time application pipelines.'
    },
    {
      title: 'Community & Student Success Specialist',
      dept: 'Student & Company Success',
      location: 'Remote',
      description: 'Nurture student ambassador chapters, moderate regional hubs, and assist freshers during onboarding.'
    }
  ];

  const [selectedRole, setSelectedRole] = useState<StartupRole | null>(null);
  const [appliedRoles, setAppliedRoles] = useState<string[]>([]);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantNote, setApplicantNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedRole) return;

    setAppliedRoles((prev) => [...prev, selectedRole.title]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedRole(null);
      setApplicantName('');
      setApplicantEmail('');
      setApplicantNote('');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Join Our Mission
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428]">
              Help Us Give Everyone Their First Chance.
            </h1>
            <p className="text-slate-600 text-sm">
              We are building the future of India's early-career opportunity ecosystem. Join our founding team.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <h3 className="text-lg font-bold text-[#0A1428]">Open Startup Roles</h3>
            {roles.map((r, i) => {
              const isApplied = appliedRoles.includes(r.title);

              return (
                <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:shadow-md transition">
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-900 text-base">{r.title}</h4>
                    <div className="flex gap-3 text-xs text-slate-500">
                      <span>{r.dept}</span>
                      <span>•</span>
                      <span>{r.location}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1 max-w-xl">{r.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedRole(r)}
                    className={`font-bold text-xs px-5 py-2.5 rounded-xl shrink-0 transition flex items-center gap-1.5 ${
                      isApplied
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                        : 'bg-[#0A1428] text-white hover:bg-[#0F1D38]'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Applied ✓</span>
                      </>
                    ) : (
                      <>
                        <span>Apply Now</span>
                        <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Application Modal */}
      {selectedRole && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl relative">
            <button
              onClick={() => setSelectedRole(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
                {selectedRole.dept}
              </span>
              <h3 className="text-xl font-bold text-slate-900">{selectedRole.title}</h3>
              <p className="text-xs text-slate-500">{selectedRole.location}</p>
            </div>

            {submitted ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-xs text-slate-500">
                  Our founding team will review your profile and reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={applicantName}
                    onChange={(e) => setApplicantName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={applicantEmail}
                    onChange={(e) => setApplicantEmail(e.target.value)}
                    placeholder="your.email@domain.com"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    Why do you want to build PehlaChance? (Brief note)
                  </label>
                  <textarea
                    rows={3}
                    value={applicantNote}
                    onChange={(e) => setApplicantNote(e.target.value)}
                    placeholder="Share what excites you about early-career opportunities in India..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedRole(null)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold text-xs flex items-center justify-center gap-1.5"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>Submit Application</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
