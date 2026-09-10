'use client';

import React, { useState } from 'react';
import { Opportunity } from '@/lib/types';
import { VerificationBadge } from './VerificationBadge';
import { 
  Building2, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Clock, 
  IndianRupee, 
  Bookmark, 
  ArrowUpRight,
  CheckCircle2,
  X,
  AlertTriangle,
  FileText,
  Send,
  Loader2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onApply?: (opp: Opportunity) => void;
  onSaveToggle?: (oppId: string, saved: boolean) => void;
  isSavedInitial?: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ 
  opportunity, 
  onApply, 
  onSaveToggle,
  isSavedInitial = false 
}) => {
  const { profile } = useAuth();
  const [saved, setSaved] = useState(isSavedInitial);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);

  // Application Flow State
  const [applyStep, setApplyStep] = useState<'review' | 'resume' | 'pitch' | 'submitting' | 'success'>('review');
  const [selectedResume, setSelectedResume] = useState('Aarav_Sharma_ATS_Resume.pdf');
  const [coverNote, setCoverNote] = useState('');
  const [hasApplied, setHasApplied] = useState(false);

  // Report Modal State
  const [reportReason, setReportReason] = useState('Misleading Stipend / Details');
  const [reportDescription, setReportDescription] = useState('');
  const [reportSubmitted, setReportSubmitted] = useState(false);

  const typeColorMap: Record<string, string> = {
    'Internship': 'bg-blue-50 text-blue-700 border-blue-200',
    'Fresher Job': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Project': 'bg-purple-50 text-purple-700 border-purple-200',
    'Apprenticeship': 'bg-amber-50 text-amber-800 border-amber-200',
    'Freelance': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Career Programme': 'bg-teal-50 text-teal-700 border-teal-200'
  };

  const handleToggleSave = () => {
    const nextSaved = !saved;
    setSaved(nextSaved);
    if (onSaveToggle) {
      onSaveToggle(opportunity.id, nextSaved);
    }
  };

  const handleStartApply = () => {
    setShowDetailModal(false);
    setShowApplyModal(true);
    setApplyStep('review');
  };

  const handleConfirmApplication = () => {
    setApplyStep('submitting');
    setTimeout(() => {
      setApplyStep('success');
      setHasApplied(true);
      if (onApply) {
        onApply(opportunity);
      }
    }, 900);
  };

  const handleReportSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSubmitted(true);
    setTimeout(() => {
      setShowReportModal(false);
      setReportSubmitted(false);
    }, 2000);
  };

  return (
    <>
      <div className="glass-card hover:bg-white/95 rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between relative group border border-slate-200/80 overflow-hidden">
        {/* Top Gradient Hover Line */}
        <div className="w-full h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-amber-500 group-hover:to-indigo-500 transition-all duration-300 absolute top-0 left-0 right-0" />

        <div>
          {/* Header Row: Logo + Company Name + Title + Bookmark */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-slate-200/80 bg-white flex items-center justify-center shrink-0 shadow-2xs">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={opportunity.companyLogo} 
                  alt={opportunity.companyName}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-slate-600">{opportunity.companyName}</span>
                  {opportunity.verified && <VerificationBadge label="Verified" size="sm" />}
                </div>
                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-1 mt-0.5">
                  {opportunity.title}
                </h3>
              </div>
            </div>

            <button
              type="button"
              onClick={handleToggleSave}
              className={`p-2 rounded-xl transition-all ${
                saved 
                  ? 'text-amber-600 bg-amber-50 shadow-2xs' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={saved ? 'Remove from saved' : 'Save opportunity'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500' : ''}`} />
            </button>
          </div>

          {/* Badges & Meta Info */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border shadow-2xs ${typeColorMap[opportunity.type] || 'bg-slate-100 text-slate-700'}`}>
              {opportunity.type}
            </span>
            {opportunity.matchScore && (
              <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shadow-2xs">
                ⚡ {opportunity.matchScore}% Match
              </span>
            )}
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {opportunity.location}
            </span>
            <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {opportunity.duration}
            </span>
          </div>

          {/* Stipend / Salary Highlight */}
          <div className="bg-slate-50/80 rounded-xl p-2.5 mb-4 border border-slate-200/60 flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-1.5">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span className="text-xs font-extrabold text-slate-900">{opportunity.stipend}</span>
            </div>
            <span className="text-[11px] text-slate-500 font-bold">{opportunity.experienceLevel}</span>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {opportunity.skills.map((skill, idx) => (
              <span key={idx} className="text-[11px] font-semibold bg-slate-100/90 text-slate-700 px-2.5 py-0.5 rounded-md border border-slate-200/50">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
          <span className="text-slate-400 font-medium">Posted {opportunity.postedDate}</span>
          
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowDetailModal(true)}
              className="text-slate-700 hover:text-slate-900 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-100/80 transition"
            >
              Details
            </button>
            <button
              type="button"
              onClick={handleStartApply}
              disabled={hasApplied}
              className={`font-bold px-4 py-1.5 rounded-xl flex items-center gap-1.5 transition shadow-sm hover:scale-105 ${
                hasApplied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#0A1428] hover:bg-[#0F1D38] text-white border border-slate-800'
              }`}
            >
              {hasApplied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Applied</span>
                </>
              ) : (
                <>
                  <span>Apply Now</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. OPPORTUNITY DETAIL MODAL                                              */}
      {/* ========================================================================= */}
      {showDetailModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowDetailModal(false)} />
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl border border-slate-200 p-6 sm:p-8 animate-fade-in relative space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">Opportunity Dossier</span>
                {opportunity.verified && <VerificationBadge label="Verified by PehlaChance" size="sm" />}
              </div>
              <button
                type="button"
                onClick={() => setShowDetailModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Header Details */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0 shadow-sm">
                <img src={opportunity.companyLogo} alt={opportunity.companyName} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-extrabold text-[#0A1428]">{opportunity.title}</h2>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-bold text-slate-700">{opportunity.companyName}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{opportunity.location} ({opportunity.workMode})</span>
                  <span className="text-slate-300">•</span>
                  <span className="font-extrabold text-emerald-700">{opportunity.stipend}</span>
                </div>
              </div>
            </div>

            {/* Match & Deadline banner */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
              <div>
                <span className="text-slate-400 font-semibold block">Opportunity Type</span>
                <span className="font-bold text-slate-900">{opportunity.type}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">Duration</span>
                <span className="font-bold text-slate-900">{opportunity.duration}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">Deadline</span>
                <span className="font-bold text-amber-600">{opportunity.deadline || 'Open until filled'}</span>
              </div>
              <div>
                <span className="text-slate-400 font-semibold block">AI Profile Match</span>
                <span className="font-extrabold text-emerald-600">⚡ {opportunity.matchScore || 88}% Match</span>
              </div>
            </div>

            {/* Description & Responsibilities */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-xs uppercase tracking-wider">About the Role</h4>
                <p className="leading-relaxed text-slate-600">{opportunity.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-xs uppercase tracking-wider">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
                  {opportunity.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-xs uppercase tracking-wider">Candidate Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-slate-600 leading-relaxed">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-1.5 text-xs uppercase tracking-wider">Perks & Compensation Highlights</h4>
                <div className="flex flex-wrap gap-2">
                  {opportunity.perks.map((perk, i) => (
                    <span key={i} className="text-xs bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full font-bold">
                      ✓ {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => {
                  setShowDetailModal(false);
                  setShowReportModal(true);
                }}
                className="text-xs text-slate-500 hover:text-rose-600 flex items-center gap-1 transition"
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Report this listing</span>
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleToggleSave}
                  className="px-4 py-2.5 text-xs font-bold rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                >
                  {saved ? 'Saved ✓' : 'Save Opportunity'}
                </button>
                <button
                  type="button"
                  onClick={handleStartApply}
                  disabled={hasApplied}
                  className="bg-[#0A1428] hover:bg-[#0F1D38] text-white px-6 py-2.5 rounded-xl font-bold text-xs shadow-md transition flex items-center gap-2"
                >
                  <span>{hasApplied ? 'Applied' : 'Apply Now'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. APPLY NOW MULTI-STEP MODAL                                            */}
      {/* ========================================================================= */}
      {showApplyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowApplyModal(false)} />
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 space-y-6 animate-fade-in relative">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                  {applyStep === 'success' ? 'Application Complete' : 'PehlaChance Easy Apply'}
                </span>
                <h3 className="text-base font-extrabold text-[#0A1428]">{opportunity.title}</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowApplyModal(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step 1: Review Profile */}
            {applyStep === 'review' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-600">Review your profile details attached to this application:</p>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Applicant:</span>
                    <span className="font-bold text-slate-900">{profile?.name || 'Aarav Sharma'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Email:</span>
                    <span className="font-bold text-slate-900">{profile?.email || 'aarav.sharma@vit.ac.in'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">College:</span>
                    <span className="font-bold text-slate-900">{profile?.college || 'VIT Chennai'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Degree:</span>
                    <span className="font-bold text-slate-900">{profile?.degree || 'B.Tech CSE'}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setApplyStep('resume')}
                    className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Next: Select Resume</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Choose Resume */}
            {applyStep === 'resume' && (
              <div className="space-y-4 text-xs">
                <p className="text-slate-600">Select which resume document to send to {opportunity.companyName}:</p>
                <div className="space-y-2">
                  {[
                    'Aarav_Sharma_ATS_Resume_2026.pdf (PehlaChance Verified)',
                    'Frontend_Developer_Project_Portfolio.pdf'
                  ].map((res) => (
                    <label 
                      key={res} 
                      className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition ${
                        selectedResume === res ? 'bg-amber-50 border-amber-400 text-amber-950 font-bold' : 'bg-slate-50 border-slate-200'
                      }`}
                    >
                      <input 
                        type="radio" 
                        name="resume" 
                        checked={selectedResume === res}
                        onChange={() => setSelectedResume(res)}
                        className="text-amber-500 focus:ring-amber-400"
                      />
                      <FileText className="w-4 h-4 text-amber-600 shrink-0" />
                      <span className="text-xs">{res}</span>
                    </label>
                  ))}
                </div>

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setApplyStep('review')}
                    className="text-slate-600 font-bold px-3 py-2"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setApplyStep('pitch')}
                    className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
                  >
                    Next: Add Cover Note
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Optional Pitch */}
            {applyStep === 'pitch' && (
              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-800 block">Personal Note to Hiring Team (Optional)</label>
                  <p className="text-slate-500 text-[11px]">Why are you excited about this specific opportunity?</p>
                </div>
                <textarea
                  rows={4}
                  value={coverNote}
                  onChange={(e) => setCoverNote(e.target.value)}
                  placeholder="Hi team, I built 3 production projects in React and Next.js, and I'd love to contribute to your core user experience..."
                  className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                />

                <div className="flex justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setApplyStep('resume')}
                    className="text-slate-600 font-bold px-3 py-2"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleConfirmApplication}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-md"
                  >
                    Confirm & Submit Application
                  </button>
                </div>
              </div>
            )}

            {/* Submitting State */}
            {applyStep === 'submitting' && (
              <div className="py-8 text-center space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-amber-500 mx-auto" />
                <p className="text-xs font-bold text-slate-800">Transmitting credentials to employer portal...</p>
              </div>
            )}

            {/* Step 4: Success State */}
            {applyStep === 'success' && (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-extrabold text-[#0A1428]">Application Submitted!</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Your profile and verified credentials have been received by {opportunity.companyName}. You can track updates in your dashboard.
                  </p>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => setShowApplyModal(false)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50"
                  >
                    Done
                  </button>
                  <Link
                    href="/student/dashboard?tab=applications"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#0A1428] text-white text-xs font-bold hover:bg-[#0F1D38]"
                  >
                    View in Applications Tab
                  </Link>
                </div>
              </div>
            )}

          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. REPORT LISTING MODAL                                                   */}
      {/* ========================================================================= */}
      {showReportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowReportModal(false)} />
          <div className="bg-white rounded-3xl max-w-md w-full p-6 z-10 shadow-2xl border border-slate-200 space-y-4 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-rose-600">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-extrabold uppercase tracking-wider">Report Opportunity</span>
              </div>
              <button
                type="button"
                onClick={() => setShowReportModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {reportSubmitted ? (
              <div className="p-4 bg-emerald-50 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-900">Report Received</p>
                <p className="text-[11px] text-emerald-700">
                  Our trust and verification team will audit this opportunity within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleReportSubmit} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Reason for Concern</label>
                  <select
                    value={reportReason}
                    onChange={(e) => setReportReason(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  >
                    <option value="Misleading Stipend / Details">Misleading Stipend / Compensation Details</option>
                    <option value="Suspicious Employer Credentials">Suspicious Employer Credentials</option>
                    <option value="Asking for Money / Paid Training">Asking for Money or Unethical Fees</option>
                    <option value="Expired / Inactive Posting">Expired or Inactive Posting</option>
                    <option value="Other Policy Violation">Other Policy Violation</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-800 block mb-1">Additional Context (Optional)</label>
                  <textarea
                    rows={3}
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    placeholder="Provide details to assist our moderation team..."
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowReportModal(false)}
                    className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-rose-600 hover:bg-rose-700 text-white font-bold px-5 py-2 rounded-xl shadow-xs"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};
