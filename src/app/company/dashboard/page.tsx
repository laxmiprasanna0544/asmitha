'use client';

import React, { useState } from 'react';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { SEEDED_CANDIDATES, CandidateItem } from '@/data/candidates';
import { SEEDED_OPPORTUNITIES, OpportunityItem } from '@/data/opportunities';
import { 
  Briefcase, 
  UserCheck, 
  Plus, 
  TrendingUp, 
  Video, 
  Play, 
  CheckCircle2, 
  Award, 
  Search, 
  X, 
  MapPin, 
  GraduationCap, 
  Clock, 
  IndianRupee,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function CompanyDashboardPage() {
  const [candidates, setCandidates] = useState<CandidateItem[]>(SEEDED_CANDIDATES);
  const [activeTab, setActiveTab] = useState<'candidates' | 'postings' | 'pipeline'>('candidates');
  const [searchCandidate, setSearchCandidate] = useState('');

  // Metrics State
  const [activePostingsCount, setActivePostingsCount] = useState(4);
  const [shortlistedCount, setShortlistedCount] = useState(12);

  // Candidate Video Modal
  const [selectedCandidate, setSelectedCandidate] = useState<CandidateItem | null>(null);

  // Post Opportunity Modal
  const [showPostModal, setShowPostModal] = useState(false);
  const [postSubmitted, setPostSubmitted] = useState(false);
  const [newPosting, setNewPosting] = useState({
    title: '',
    type: 'Internship',
    workMode: 'Hybrid',
    stipend: '₹30,000 / month',
    duration: '3 Months',
    location: 'Bengaluru, KA',
    skills: 'React, TypeScript',
    description: ''
  });

  const [companyPostings, setCompanyPostings] = useState<OpportunityItem[]>(
    SEEDED_OPPORTUNITIES.slice(0, 4)
  );

  const handleShortlist = (candId: string) => {
    setCandidates(prev => prev.map(c => {
      if (c.id === candId) {
        const nextState = !c.shortlisted;
        if (nextState) setShortlistedCount(s => s + 1);
        else setShortlistedCount(s => Math.max(0, s - 1));
        return { ...c, shortlisted: nextState };
      }
      return c;
    }));
  };

  const handleCreatePosting = (e: React.FormEvent) => {
    e.preventDefault();
    const created: OpportunityItem = {
      id: `opp-custom-${Date.now()}`,
      title: newPosting.title,
      companyName: 'ScaleVantage Labs',
      companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
      location: newPosting.location,
      workMode: newPosting.workMode as any,
      type: newPosting.type as any,
      industry: 'Technology',
      duration: newPosting.duration,
      stipend: newPosting.stipend,
      experienceLevel: 'Fresher / Student',
      skills: newPosting.skills.split(',').map(s => s.trim()),
      description: newPosting.description || 'Join our early-career team to build high-impact production systems.',
      responsibilities: ['Build features with modern toolchains', 'Collaborate with product designers'],
      requirements: ['Enthusiastic early career talent with demonstrated projects'],
      perks: ['PPO Opportunity', 'Mentorship', 'Certificate of Completion'],
      postedDate: 'Just now',
      deadline: '30 Nov 2026',
      verified: true,
      matchScore: 95,
      applicantsCount: 0
    };

    setCompanyPostings([created, ...companyPostings]);
    setActivePostingsCount(prev => prev + 1);
    setPostSubmitted(true);
    setTimeout(() => {
      setShowPostModal(false);
      setPostSubmitted(false);
      setActiveTab('postings');
    }, 1200);
  };

  const filteredCandidates = candidates.filter(cand => {
    const q = searchCandidate.toLowerCase();
    return (
      cand.name.toLowerCase().includes(q) ||
      cand.skills.some(s => s.toLowerCase().includes(q)) ||
      cand.college.toLowerCase().includes(q)
    );
  });

  return (
    <DashboardShell role="company">
      <div className="space-y-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-extrabold text-[#0A1428]">Employer Hiring Workspace</h1>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full">
                ✓ Verified Corporate Account
              </span>
            </div>
            <p className="text-xs text-slate-500">ScaleVantage Talent Team • Bengaluru & Chennai Hub</p>
          </div>

          <button
            type="button"
            onClick={() => setShowPostModal(true)}
            className="inline-flex items-center gap-2 bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs shadow hover:bg-[#0F1D38] transition shrink-0"
          >
            <Plus className="w-4 h-4 text-amber-400" />
            <span>Post New Opportunity</span>
          </button>
        </div>

        {/* Pipeline Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Active Postings</span>
            <div className="text-3xl font-extrabold text-[#0A1428] mt-1">{activePostingsCount}</div>
            <span className="text-[11px] text-emerald-600 font-semibold">100% verified listings</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Total Applicants</span>
            <div className="text-3xl font-extrabold text-[#0A1428] mt-1">78</div>
            <span className="text-[11px] text-slate-400 font-semibold">+14 new this week</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Shortlisted Candidates</span>
            <div className="text-3xl font-extrabold text-amber-600 mt-1">{shortlistedCount}</div>
            <span className="text-[11px] text-amber-700 font-semibold">Ready for interview call</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="text-xs font-semibold text-slate-500">Offers Extended</span>
            <div className="text-3xl font-extrabold text-emerald-600 mt-1">4</div>
            <span className="text-[11px] text-emerald-600 font-semibold">100% acceptance rate</span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-200 pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('candidates')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'candidates' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Candidate Discovery ({candidates.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('postings')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'postings' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Our Active Postings ({companyPostings.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pipeline')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'pipeline' ? 'bg-[#0A1428] text-white shadow' : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Applicant Pipeline (78)
          </button>
        </div>

        {/* TAB 1: CANDIDATE DISCOVERY */}
        {activeTab === 'candidates' && (
          <div className="space-y-6 animate-fade-in">
            {/* Search Filter */}
            <div className="relative max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchCandidate}
                onChange={(e) => setSearchCandidate(e.target.value)}
                placeholder="Search candidates by skill, name, or university..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            {/* Candidates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCandidates.map((cand) => (
                <div key={cand.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-lg transition">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl overflow-hidden border border-amber-400 shrink-0">
                          <img src={cand.photo} alt={cand.name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="text-sm font-extrabold text-[#0A1428]">{cand.name}</h3>
                            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                              ✓ {cand.profileStrength}%
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 font-medium">{cand.college}</p>
                        </div>
                      </div>

                      <span className="text-[11px] font-extrabold text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                        ⚡ {cand.matchScore}%
                      </span>
                    </div>

                    <p className="text-xs font-semibold text-slate-800">{cand.headline}</p>

                    {/* Video Pitch Mini Preview */}
                    <div 
                      onClick={() => setSelectedCandidate(cand)}
                      className="bg-slate-900 text-white rounded-2xl p-3 flex items-center justify-between cursor-pointer group hover:bg-slate-800 transition"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center group-hover:scale-110 transition">
                          <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                        </div>
                        <div>
                          <span className="text-xs font-bold block">60s Elevator Pitch</span>
                          <span className="text-[10px] text-slate-300">{cand.videoPitch.duration}</span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-amber-300">Watch</span>
                    </div>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {cand.skills.map((s, idx) => (
                        <span key={idx} className="text-[10px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <button
                      type="button"
                      onClick={() => setSelectedCandidate(cand)}
                      className="text-slate-600 hover:text-slate-900 font-bold"
                    >
                      View Profile
                    </button>
                    <button
                      type="button"
                      onClick={() => handleShortlist(cand.id)}
                      className={`font-bold px-4 py-2 rounded-xl text-xs transition ${
                        cand.shortlisted 
                          ? 'bg-amber-100 text-amber-900 border border-amber-300' 
                          : 'bg-[#0A1428] text-white hover:bg-[#0F1D38]'
                      }`}
                    >
                      {cand.shortlisted ? '✓ Shortlisted' : 'Shortlist'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: ACTIVE POSTINGS */}
        {activeTab === 'postings' && (
          <div className="space-y-4 animate-fade-in">
            {companyPostings.map((opp) => (
              <div key={opp.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-amber-50 text-amber-800 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {opp.type}
                    </span>
                    <span className="text-xs text-slate-400">• Posted {opp.postedDate}</span>
                  </div>
                  <h3 className="text-base font-extrabold text-[#0A1428]">{opp.title}</h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
                    <span>{opp.location} ({opp.workMode})</span>
                    <span>•</span>
                    <span className="text-emerald-700 font-bold">{opp.stipend}</span>
                    <span>•</span>
                    <span>Deadline: {opp.deadline || 'Open'}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right hidden sm:block">
                    <span className="text-lg font-extrabold text-[#0A1428]">{opp.applicantsCount || 18}</span>
                    <span className="text-xs text-slate-400 block">Applicants</span>
                  </div>
                  <Link
                    href={`/opportunities`}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition"
                  >
                    View Listing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: PIPELINE */}
        {activeTab === 'pipeline' && (
          <div className="bg-white rounded-3xl p-8 border border-slate-200 text-center space-y-4 animate-fade-in">
            <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-[#0A1428]">78 Total Applications in Pipeline</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                12 Candidates are currently in your Shortlisted pool ready for Technical Round 1 scheduling.
              </p>
            </div>
            <button
              onClick={() => setActiveTab('candidates')}
              className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
            >
              Review Shortlisted Candidates
            </button>
          </div>
        )}

      </div>

      {/* MODAL: POST OPPORTUNITY */}
      {showPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowPostModal(false)} />
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 space-y-5 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Post Early-Career Opportunity
              </span>
              <button onClick={() => setShowPostModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {postSubmitted ? (
              <div className="p-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-extrabold text-[#0A1428]">Opportunity Published!</h4>
                <p className="text-xs text-slate-500">Listing is live and matching student profiles.</p>
              </div>
            ) : (
              <form onSubmit={handleCreatePosting} className="space-y-4 text-xs">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Opportunity Title</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Frontend Engineering Intern"
                    value={newPosting.title}
                    onChange={(e) => setNewPosting({ ...newPosting, title: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Opportunity Type</label>
                    <select
                      value={newPosting.type}
                      onChange={(e) => setNewPosting({ ...newPosting, type: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="Internship">Internship</option>
                      <option value="Fresher Job">Fresher Job</option>
                      <option value="Project">Micro-Project</option>
                      <option value="Apprenticeship">Apprenticeship</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Work Mode</label>
                    <select
                      value={newPosting.workMode}
                      onChange={(e) => setNewPosting({ ...newPosting, workMode: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="Remote">Remote</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="On-site">On-site</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Stipend / Salary</label>
                    <input
                      type="text"
                      required
                      placeholder="₹25,000 / month"
                      value={newPosting.stipend}
                      onChange={(e) => setNewPosting({ ...newPosting, stipend: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-800 block mb-1">Duration</label>
                    <input
                      type="text"
                      required
                      placeholder="3 Months"
                      value={newPosting.duration}
                      onChange={(e) => setNewPosting({ ...newPosting, duration: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Required Skills (comma separated)</label>
                  <input
                    type="text"
                    required
                    placeholder="React, TypeScript, Tailwind CSS"
                    value={newPosting.skills}
                    onChange={(e) => setNewPosting({ ...newPosting, skills: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Role Description</label>
                  <textarea
                    rows={3}
                    placeholder="Describe key responsibilities and growth opportunities..."
                    value={newPosting.description}
                    onChange={(e) => setNewPosting({ ...newPosting, description: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => setShowPostModal(false)}
                    className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#0A1428] text-white font-bold px-5 py-2.5 rounded-xl shadow hover:bg-[#0F1D38]"
                  >
                    Publish Opportunity
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* MODAL: CANDIDATE DETAIL & VIDEO PITCH */}
      {selectedCandidate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setSelectedCandidate(null)} />
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 space-y-6 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Verified Candidate Profile
              </span>
              <button onClick={() => setSelectedCandidate(null)} className="p-1 text-slate-400 hover:text-slate-600 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-amber-400 shrink-0">
                <img src={selectedCandidate.photo} alt={selectedCandidate.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-[#0A1428]">{selectedCandidate.name}</h3>
                <p className="text-xs text-slate-600 font-semibold">{selectedCandidate.headline}</p>
                <p className="text-[11px] text-slate-400">{selectedCandidate.college} • {selectedCandidate.location}</p>
              </div>
            </div>

            {/* Video Pitch Player */}
            <div className="bg-[#0A1428] text-white rounded-2xl p-4 space-y-3">
              <div className="relative rounded-xl overflow-hidden aspect-video bg-slate-950 flex items-center justify-center">
                <img src={selectedCandidate.videoPitch.thumbnail} alt="Pitch thumbnail" className="w-full h-full object-cover opacity-70" />
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg">
                  <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                </div>
                <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 px-2 py-0.5 rounded">
                  {selectedCandidate.videoPitch.duration}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">"{selectedCandidate.videoPitch.title}"</p>
            </div>

            {/* Skills */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold text-slate-700">Verified Technical Skills</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedCandidate.skills.map((s, idx) => (
                  <span key={idx} className="text-xs font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-xl">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedCandidate(null)}
                className="px-4 py-2 font-bold text-xs text-slate-600"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  handleShortlist(selectedCandidate.id);
                  setSelectedCandidate(null);
                }}
                className="bg-[#0A1428] text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow"
              >
                {selectedCandidate.shortlisted ? 'Remove Shortlist' : 'Shortlist for Interview'}
              </button>
            </div>
          </div>
        </div>
      )}

    </DashboardShell>
  );
}
