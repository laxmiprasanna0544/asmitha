'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Users, Share2, Award, TrendingUp, CheckCircle2, Copy } from 'lucide-react';

export default function AmbassadorPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://pehlachance.com/ref/aarav2026';

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              Campus Growth Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              Build the Network From the Campuses Up.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Become a PehlaChance Student Ambassador. Lead career initiatives on your campus, connect your peers with verified opportunities, and earn referral milestone badges.
            </p>
          </div>

          {/* Referral Link & Dashboard Tracking UI */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900">Your Student Ambassador Referral Portal</h3>
                <p className="text-xs text-slate-500">Share your custom invitation link across campus WhatsApp & Slack groups.</p>
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={referralLink}
                  className="bg-slate-100 border border-slate-200 text-xs font-mono font-bold px-3 py-2 rounded-xl text-slate-800"
                />
                <button
                  onClick={handleCopy}
                  className="bg-[#0A1428] text-white text-xs font-bold px-4 py-2 rounded-xl hover:bg-[#0F1D38] flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>

            {/* Referral Tracking Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xl font-extrabold text-slate-900">28</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Total Referrals</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xl font-extrabold text-emerald-600">22</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Registrations</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xl font-extrabold text-amber-600">18</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Resumes Ready</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xl font-extrabold text-blue-600">45</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Applications</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-xl font-extrabold text-purple-600">7</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Internships Landed</div>
              </div>
            </div>
          </div>

          {/* Referral Flow Diagrams */}
          <div className="bg-[#0A1428] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 max-w-4xl mx-auto space-y-6">
            <h3 className="text-xl font-extrabold text-white text-center">Ecosystem Referral Pathways</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-xs font-bold">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">Student → Student</div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">Campus → Student</div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">Employer → Employer</div>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">College → Student</div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
