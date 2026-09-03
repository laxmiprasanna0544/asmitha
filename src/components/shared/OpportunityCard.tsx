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
  X
} from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onApply?: (opp: Opportunity) => void;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({ opportunity, onApply }) => {
  const [saved, setSaved] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [applied, setApplied] = useState(false);

  const typeColorMap: Record<string, string> = {
    'Internship': 'bg-blue-50 text-blue-700 border-blue-200',
    'Fresher Job': 'bg-emerald-50 text-emerald-700 border-emerald-200',
    'Project': 'bg-purple-50 text-purple-700 border-purple-200',
    'Apprenticeship': 'bg-amber-50 text-amber-800 border-amber-200',
    'Freelance': 'bg-indigo-50 text-indigo-700 border-indigo-200',
    'Career Programme': 'bg-teal-50 text-teal-700 border-teal-200'
  };

  const handleApplyClick = () => {
    setApplied(true);
    if (onApply) onApply(opportunity);
  };

  return (
    <>
      <div className="glass-card hover:bg-white/95 rounded-2xl p-5 shadow-xs hover:shadow-xl transition-all duration-300 card-hover-effect flex flex-col justify-between relative group border border-slate-200/80 overflow-hidden">
        {/* Top Hover Gradient Line */}
        <div className="w-full h-1 bg-transparent group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:via-amber-500 group-hover:to-indigo-500 transition-all duration-300 absolute top-0 left-0 right-0" />

        <div>
          {/* Header Row: Company Avatar + Name + Type + Save */}
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
              onClick={() => setSaved(!saved)}
              className={`p-2 rounded-xl transition-all ${
                saved 
                  ? 'text-amber-600 bg-amber-50 shadow-2xs' 
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
              }`}
              title={saved ? 'Remove saved opportunity' : 'Save opportunity'}
            >
              <Bookmark className={`w-4 h-4 ${saved ? 'fill-amber-500' : ''}`} />
            </button>
          </div>

          {/* Badges & Meta Info */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className={`text-[11px] font-bold px-3 py-0.5 rounded-full border shadow-2xs ${typeColorMap[opportunity.type] || 'bg-slate-100 text-slate-700'}`}>
              {opportunity.type}
            </span>
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
              onClick={() => setShowModal(true)}
              className="text-slate-700 hover:text-slate-900 font-bold px-3 py-1.5 rounded-lg hover:bg-slate-100/80 transition"
            >
              Details
            </button>
            <button
              onClick={handleApplyClick}
              disabled={applied}
              className={`font-bold px-4 py-1.5 rounded-xl flex items-center gap-1.5 transition shadow-sm hover:scale-105 ${
                applied 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-[#0A1428] hover:bg-[#0F1D38] text-white border border-slate-800'
              }`}
            >
              {applied ? (
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

      {/* Opportunity Detail Modal */}
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
              <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={opportunity.companyLogo} alt={opportunity.companyName} className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-slate-700">{opportunity.companyName}</span>
                  {opportunity.verified && <VerificationBadge label="Verified Employer" size="sm" />}
                </div>
                <h2 className="text-xl font-extrabold text-slate-900 mt-1">{opportunity.title}</h2>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
                    {opportunity.type}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">{opportunity.location}</span>
                  <span className="text-xs text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded">
                    {opportunity.stipend}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-slate-900 mb-2">About the Role</h4>
                <p className="leading-relaxed text-slate-600">{opportunity.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Key Responsibilities</h4>
                <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                  {opportunity.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Requirements</h4>
                <ul className="list-disc list-inside space-y-1.5 text-slate-600">
                  {opportunity.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-2">Perks & Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {opportunity.perks.map((perk, i) => (
                    <span key={i} className="text-xs bg-slate-100 text-slate-800 px-3 py-1 rounded-full font-medium">
                      ✓ {perk}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium">
                {opportunity.applicantsCount} students have applied for this opportunity
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 rounded-lg"
                >
                  Close
                </button>
                <button
                  onClick={handleApplyClick}
                  disabled={applied}
                  className={`px-6 py-2.5 text-sm font-bold text-white rounded-xl shadow ${
                    applied ? 'bg-emerald-600' : 'bg-[#0A1428] hover:bg-[#0F1D38]'
                  }`}
                >
                  {applied ? 'Applied Successfully' : 'Confirm Application'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
