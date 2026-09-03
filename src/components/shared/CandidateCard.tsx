'use client';

import React, { useState } from 'react';
import { Candidate } from '@/lib/types';
import { VerificationBadge } from './VerificationBadge';
import { 
  GraduationCap, 
  MapPin, 
  Code, 
  Briefcase, 
  Bookmark, 
  UserCheck, 
  X, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface CandidateCardProps {
  candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [shortlisted, setShortlisted] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl border border-slate-200/80 p-5 shadow-xs card-hover-effect flex flex-col justify-between relative group">
        <div>
          {/* Header Row: Avatar + Info + Match Score */}
          <div className="flex items-start justify-between gap-3 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400/40 bg-slate-100 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                    {candidate.name}
                  </h3>
                  {candidate.verifiedIdentity && <VerificationBadge label="Identity Verified" size="sm" />}
                </div>
                <p className="text-xs text-slate-600 font-medium line-clamp-1 flex items-center gap-1 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  {candidate.college}
                </p>
              </div>
            </div>

            {/* Match Score Indicator */}
            <div className="bg-amber-50 border border-amber-200/80 rounded-lg px-2.5 py-1 text-center shrink-0">
              <div className="flex items-center gap-1 text-amber-800 font-bold text-xs">
                <Sparkles className="w-3 h-3 text-amber-500" />
                <span>{candidate.matchScore}%</span>
              </div>
              <span className="text-[9px] font-semibold text-amber-700 uppercase tracking-tighter">Skill Match</span>
            </div>
          </div>

          {/* Degree & Department */}
          <div className="text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-lg mb-3 border border-slate-100 flex items-center justify-between">
            <span>{candidate.degree}</span>
            <span className="text-slate-500 font-normal">Class of {candidate.graduationYear}</span>
          </div>

          {/* Top Project Highlight */}
          <div className="mb-3">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
              Top Verified Project
            </span>
            <p className="text-xs text-slate-800 font-medium bg-amber-50/40 border border-amber-100 rounded-lg p-2 flex items-center gap-1.5">
              <Code className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="line-clamp-1">{candidate.topProject}</span>
            </p>
          </div>

          {/* Skills Badges */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {candidate.skills.map((skill, i) => (
              <span key={i} className="text-[11px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                {skill}
              </span>
            ))}
          </div>

          {/* Profile Strength Progress Bar */}
          <div className="space-y-1 mb-4">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
              <span>Profile Strength</span>
              <span className="text-slate-700">{candidate.profileCompletion}%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-amber-600 h-full rounded-full" 
                style={{ width: `${candidate.profileCompletion}%` }}
              />
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <button
            onClick={() => setShowModal(true)}
            className="text-xs font-bold text-slate-700 hover:text-slate-900 underline underline-offset-4"
          >
            View Full Profile
          </button>

          <button
            onClick={() => setShortlisted(!shortlisted)}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition ${
              shortlisted
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {shortlisted ? (
              <>
                <UserCheck className="w-3.5 h-3.5" />
                <span>Shortlisted</span>
              </>
            ) : (
              <>
                <Bookmark className="w-3.5 h-3.5 text-amber-400" />
                <span>Shortlist Candidate</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Candidate Profile Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowModal(false)} />
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto z-10 shadow-2xl border border-slate-200 p-6 md:p-8 animate-fade-in relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-amber-400 bg-slate-100 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={candidate.avatar} alt={candidate.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-slate-900">{candidate.name}</h2>
                  {candidate.verifiedIdentity && <VerificationBadge label="Identity Verified" size="sm" />}
                </div>
                <p className="text-sm font-semibold text-slate-700 mt-0.5">{candidate.degree}</p>
                <p className="text-xs text-slate-500 mt-0.5">{candidate.college} • Batch of {candidate.graduationYear}</p>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Professional Bio</h4>
                <p className="leading-relaxed text-slate-600">{candidate.bio}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Verified Technical Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {candidate.skills.map((s, i) => (
                    <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-800 px-3 py-1 rounded-md">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Featured Project & Proof of Work</h4>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-slate-900 text-sm">{candidate.topProject}</span>
                    <span className="text-[10px] uppercase font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">Verified</span>
                  </div>
                  <p className="text-xs text-slate-600">Built using modern software practices with source code repository verified by campus leads.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">Profile completeness: {candidate.profileCompletion}%</span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShortlisted(!shortlisted);
                    setShowModal(false);
                  }}
                  className={`px-6 py-2.5 text-sm font-bold text-white rounded-xl shadow ${
                    shortlisted ? 'bg-emerald-600' : 'bg-[#0A1428] hover:bg-[#0F1D38]'
                  }`}
                >
                  {shortlisted ? 'Candidate Shortlisted' : 'Shortlist Candidate'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
