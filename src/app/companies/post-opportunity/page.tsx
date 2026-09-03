'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CheckCircle2, ArrowRight, ShieldCheck, Briefcase } from 'lucide-react';

export default function PostOpportunityPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    type: 'Internship',
    category: 'Technology',
    workMode: 'Remote',
    stipend: '',
    duration: '',
    description: '',
    skills: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Employer Opportunity Wizard
            </span>
            <h1 className="text-3xl font-extrabold text-[#0A1428]">Post an Opportunity</h1>
            <p className="text-xs text-slate-600">All postings are reviewed by our team to maintain platform credibility.</p>
          </div>

          {/* Stepper Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-4 text-xs font-bold text-slate-600">
            <span className={step >= 1 ? 'text-amber-600' : ''}>1. Role Details</span>
            <span>→</span>
            <span className={step >= 2 ? 'text-amber-600' : ''}>2. Compensation & Duration</span>
            <span>→</span>
            <span className={step >= 3 ? 'text-amber-600' : ''}>3. Review & Submit</span>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-md space-y-6">
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">Opportunity Title</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Frontend Developer Intern (React)"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Opportunity Type</label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                      >
                        <option value="Internship">Internship</option>
                        <option value="Fresher Job">Fresher Job</option>
                        <option value="Project">Project</option>
                        <option value="Apprenticeship">Apprenticeship</option>
                        <option value="Freelance">Freelance</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Domain Category</label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                      >
                        <option value="Technology">Technology</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Finance">Finance</option>
                        <option value="Design">Design</option>
                        <option value="Data & AI">Data & AI</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="w-full bg-[#0A1428] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#0F1D38]"
                  >
                    Next: Compensation & Duration →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Stipend / Salary</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. ₹20,000 / month"
                        value={formData.stipend}
                        onChange={(e) => setFormData({ ...formData, stipend: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-800 block mb-1">Duration</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 3 Months"
                        value={formData.duration}
                        onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                        className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-800 block mb-1">Required Skills (Comma separated)</label>
                    <input
                      type="text"
                      placeholder="e.g. React, TypeScript, Tailwind CSS"
                      value={formData.skills}
                      onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none"
                    />
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="w-1/3 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold text-xs"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="w-2/3 bg-[#0A1428] text-white py-3 rounded-xl font-bold text-xs hover:bg-[#0F1D38]"
                    >
                      Next: Review Listing →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-xs space-y-1">
                    <span className="font-bold text-amber-900">Posting Preview Confirmation</span>
                    <p className="text-slate-600">Title: {formData.title || 'Untitled Role'}</p>
                    <p className="text-slate-600">Type: {formData.type} • Mode: {formData.workMode}</p>
                    <p className="text-slate-600">Stipend: {formData.stipend || 'Unspecified'}</p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/3 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold text-xs"
                    >
                      ← Edit Details
                    </button>
                    <button
                      type="submit"
                      className="w-2/3 bg-emerald-600 text-white py-3 rounded-xl font-bold text-xs hover:bg-emerald-700 shadow"
                    >
                      Submit for Verification & Publish ✓
                    </button>
                  </div>
                </div>
              )}
            </form>
          ) : (
            <div className="bg-white rounded-2xl p-12 border border-slate-200 text-center space-y-4 shadow-xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h2 className="text-2xl font-bold text-slate-900">Opportunity Submitted for Verification</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Our verification team is reviewing your listing details. Your posting will go live in the Opportunity Marketplace within 2 hours.
              </p>
            </div>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
