'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Users, Award, TrendingUp, CheckCircle2, Copy, Sparkles, Building2, GraduationCap, Clock, Check, Send } from 'lucide-react';

interface ReferralItem {
  id: string;
  type: 'Student' | 'Employer' | 'College';
  name: string;
  detail: string;
  date: string;
  status: 'Pending' | 'Joined' | 'Converted';
}

export default function AmbassadorPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://pehlachance.com/ref/aarav2026';

  const [activeReferTab, setActiveReferTab] = useState<'Student' | 'Employer' | 'College'>('Student');
  const [referName, setReferName] = useState('');
  const [referEmail, setReferEmail] = useState('');
  const [referOrg, setReferOrg] = useState('');
  const [referSuccess, setReferSuccess] = useState(false);

  const [referrals, setReferrals] = useState<ReferralItem[]>([
    {
      id: 'ref-1',
      type: 'Student',
      name: 'Rohan Sharma',
      detail: 'rohan.s@vit.ac.in (B.Tech CSE)',
      date: '08 Sep 2026',
      status: 'Converted'
    },
    {
      id: 'ref-2',
      type: 'Employer',
      name: 'ScaleVantage Tech',
      detail: 'hr@scalevantage.in (Hiring 4 Interns)',
      date: '06 Sep 2026',
      status: 'Converted'
    },
    {
      id: 'ref-3',
      type: 'Student',
      name: 'Pooja Iyer',
      detail: 'pooja.i@srmist.edu.in',
      date: '04 Sep 2026',
      status: 'Joined'
    },
    {
      id: 'ref-4',
      type: 'College',
      name: 'BMS College of Engineering',
      detail: 'TPO Placement Cell',
      date: '01 Sep 2026',
      status: 'Pending'
    },
    {
      id: 'ref-5',
      type: 'Student',
      name: 'Harsh Vardhan',
      detail: 'harsh.v@manipal.edu',
      date: '28 Aug 2026',
      status: 'Pending'
    }
  ]);

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReferSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!referName || !referEmail) return;

    const newRef: ReferralItem = {
      id: `ref-${Date.now()}`,
      type: activeReferTab,
      name: referName,
      detail: referOrg ? `${referEmail} (${referOrg})` : referEmail,
      date: 'Just now',
      status: 'Pending'
    };

    setReferrals([newRef, ...referrals]);
    setReferName('');
    setReferEmail('');
    setReferOrg('');
    setReferSuccess(true);
    setTimeout(() => setReferSuccess(false), 3000);
  };

  const totalReferrals = referrals.length + 23;
  const joinedCount = referrals.filter((r) => r.status === 'Joined').length + 18;
  const convertedCount = referrals.filter((r) => r.status === 'Converted').length + 7;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Campus Growth Leadership
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              PehlaChance Ambassador & Referral Network
            </h1>
            <p className="text-slate-600 text-sm sm:text-base">
              Lead career initiatives on your campus, connect peers, companies, and institutions with verified opportunities, and unlock leadership recognition.
            </p>
          </div>

          {/* Ambassador Referral Link Portal */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-6">
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
                  className="bg-slate-100 border border-slate-200 text-xs font-mono font-bold px-3 py-2.5 rounded-xl text-slate-800"
                />
                <button
                  onClick={handleCopy}
                  className="bg-[#0A1428] text-white text-xs font-bold px-4 py-2.5 rounded-xl hover:bg-[#0F1D38] flex items-center gap-1.5 transition shrink-0"
                >
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>{copied ? 'Copied!' : 'Copy Link'}</span>
                </button>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-2xl font-extrabold text-slate-900">{totalReferrals}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Total Referrals</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-2xl font-extrabold text-blue-600">{joinedCount}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Joined & Active</div>
              </div>
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="text-2xl font-extrabold text-emerald-600">{convertedCount}</div>
                <div className="text-[10px] text-slate-500 font-bold uppercase mt-1">Converted Placements</div>
              </div>
              <div className="p-4 bg-amber-50/50 rounded-2xl border border-amber-200/60">
                <div className="text-2xl font-extrabold text-amber-700">Gold Tier</div>
                <div className="text-[10px] text-amber-800 font-bold uppercase mt-1">Ambassador Status</div>
              </div>
            </div>

            {/* Ambassador Progress Bar */}
            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Milestone Progress to Diamond Ambassador (50 Referrals)</span>
                <span className="text-amber-600 font-bold">{totalReferrals} / 50</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full rounded-full transition-all duration-500" style={{ width: `${(totalReferrals / 50) * 100}%` }}></div>
              </div>
            </div>
          </div>

          {/* Ambassador Benefits & Recognition Perks */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 bg-amber-100 text-amber-700 rounded-xl flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Verified Profile Badge</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Stand out with an official "PehlaChance Campus Ambassador" badge displayed on your public profile.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 bg-emerald-100 text-emerald-700 rounded-xl flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Direct Founder Access</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Monthly closed-door roundtables with top startup executives and early hiring managers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
              <div className="w-9 h-9 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm">Internship Fast-Track</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prioritized profile screening for high-stipend verified opportunities on PehlaChance.
              </p>
            </div>
          </div>

          {/* Referrals Section (Refer a Student, Employer, College) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto space-y-8">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-slate-900">Direct Ecosystem Referral Submission</h3>
              <p className="text-xs text-slate-500">Nominate someone from your network. Our team will verify their profile.</p>
            </div>

            {/* Role Tabs */}
            <div className="flex gap-2 border-b border-slate-100 pb-3">
              <button
                onClick={() => setActiveReferTab('Student')}
                className={`text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition ${
                  activeReferTab === 'Student' ? 'bg-[#0A1428] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Users className="w-3.5 h-3.5 text-amber-400" />
                <span>Refer a Student</span>
              </button>
              <button
                onClick={() => setActiveReferTab('Employer')}
                className={`text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition ${
                  activeReferTab === 'Employer' ? 'bg-[#0A1428] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Building2 className="w-3.5 h-3.5 text-amber-400" />
                <span>Refer an Employer</span>
              </button>
              <button
                onClick={() => setActiveReferTab('College')}
                className={`text-xs font-bold px-4 py-2 rounded-xl flex items-center gap-1.5 transition ${
                  activeReferTab === 'College' ? 'bg-[#0A1428] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>Refer a College</span>
              </button>
            </div>

            {/* Submission Form */}
            <form onSubmit={handleReferSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {activeReferTab === 'Employer' ? 'Contact Person Name' : activeReferTab === 'College' ? 'Dean / TPO Officer Name' : 'Student Full Name'}
                  </label>
                  <input
                    type="text"
                    required
                    value={referName}
                    onChange={(e) => setReferName(e.target.value)}
                    placeholder={activeReferTab === 'Student' ? 'e.g. Priya Sharma' : 'e.g. Vikram Mehta'}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={referEmail}
                    onChange={(e) => setReferEmail(e.target.value)}
                    placeholder="official.email@domain.com"
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {activeReferTab === 'Employer' ? 'Company Name' : activeReferTab === 'College' ? 'College / University' : 'Degree & Branch'}
                  </label>
                  <input
                    type="text"
                    value={referOrg}
                    onChange={(e) => setReferOrg(e.target.value)}
                    placeholder={activeReferTab === 'Employer' ? 'e.g. Zeta Labs' : activeReferTab === 'College' ? 'e.g. NIT Trichy' : 'e.g. B.Tech IT (2026)'}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-1">
                {referSuccess ? (
                  <span className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    Referral submitted successfully! Added to Pending queue.
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-400">
                    * Automated invitation with verification link will be dispatched.
                  </span>
                )}

                <button
                  type="submit"
                  className="bg-[#0A1428] hover:bg-[#0F1D38] text-white text-xs font-bold px-5 py-2.5 rounded-xl flex items-center gap-2 transition"
                >
                  <Send className="w-3.5 h-3.5 text-amber-400" />
                  <span>Submit Referral</span>
                </button>
              </div>
            </form>

            {/* Referrals Status Table */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h4 className="text-sm font-bold text-slate-900 flex items-center justify-between">
                <span>Recent Referral Activity & Status</span>
                <span className="text-xs text-slate-400 font-normal">{referrals.length} items logged</span>
              </h4>

              <div className="divide-y divide-slate-100 border border-slate-100 rounded-2xl overflow-hidden">
                {referrals.map((r) => (
                  <div key={r.id} className="p-3.5 sm:p-4 flex items-center justify-between gap-4 bg-white hover:bg-slate-50 transition">
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">{r.name}</span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                          {r.type}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-500">{r.detail} • Logged: {r.date}</div>
                    </div>

                    <div>
                      {r.status === 'Converted' && (
                        <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Converted
                        </span>
                      )}
                      {r.status === 'Joined' && (
                        <span className="text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Users className="w-3 h-3" /> Joined
                        </span>
                      )}
                      {r.status === 'Pending' && (
                        <span className="text-[11px] font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                          <Clock className="w-3 h-3" /> Pending
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
