'use client';

import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { FileText, Download, Sparkles, BookOpen } from 'lucide-react';

export default function ResourcesPage() {
  const resources = [
    { title: 'First Resume Template for Freshers (ATS Approved)', format: 'PDF / Word', desc: 'Standard 1-page structured layout highlighting projects over past work experience.' },
    { title: 'Cold Email & LinkedIn Outreach Playbook', format: 'PDF Guide', desc: 'Specific templates for reaching out to founders & hiring leads politely.' },
    { title: 'Tech Interview Question Bank (Top 50 Systems)', format: 'Interactive Guide', desc: 'Common data structure and web system questions asked during early-career interviews.' },
    { title: 'Placement Drive Preparation Checklist', format: 'Spreadsheet', desc: 'Track your application status, technical test scores, and interview feedback.' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Student Career Toolkit
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0A1428]">
              Career Resources & Downloadables
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl">
              Free templates, outreach guides, and interview prep checklists designed for early-career students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2 py-0.5 rounded">
                    {r.format}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 mt-2">{r.title}</h3>
                  <p className="text-xs text-slate-600 mt-1">{r.desc}</p>
                </div>
                <button
                  onClick={() => alert(`Downloaded ${r.title}!`)}
                  className="inline-flex items-center justify-center gap-2 bg-[#0A1428] text-white text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-[#0F1D38]"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>Download Resource</span>
                </button>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
