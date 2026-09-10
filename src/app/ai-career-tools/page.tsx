'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { useAuth } from '@/context/AuthContext';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Code,
  Brain,
  Send,
  Loader2,
  FileText,
  UserCheck,
  Zap,
  HelpCircle
} from 'lucide-react';
import Link from 'next/link';

interface AIInsightResponse {
  query: string;
  summary: string;
  matchScore: number;
  strengths: string[];
  gaps: string[];
  recommendation: string;
  actionUrl: string;
  actionText: string;
}

const PREDEFINED_RESPONSES: Record<string, AIInsightResponse> = {
  'improve-resume': {
    query: 'Improve my resume for tech roles',
    summary: 'Your resume shows strong React foundations. To rank higher in recruiter ATS filters, rewrite project bullets to quantify business impact and add performance benchmarks.',
    matchScore: 84,
    strengths: [
      'Strong modern tech stack (React, Next.js, Tailwind CSS)',
      'Clear project architecture descriptions',
      'Clean single-page ATS-compliant formatting'
    ],
    gaps: [
      'Need quantifiable metrics (e.g. "reduced page load time by 35%")',
      'Missing explicit CI/CD or testing library mentions (Jest/Cypress)'
    ],
    recommendation: 'Use the XYZ Formula: "Accomplished [X] as measured by [Y], by doing [Z]".',
    actionUrl: '/resume-builder',
    actionText: 'Open AI Resume Studio'
  },
  'find-opportunities': {
    query: 'Find suitable opportunities for my profile',
    summary: 'Based on your B.Tech CSE coursework and React expertise, we found 5 high-affinity early-career roles with 90%+ match scores.',
    matchScore: 94,
    strengths: [
      'Razorpay Software — Frontend Engineering Intern (94% Match)',
      'CRED Data Labs — AI & Data Science Trainee (91% Match)',
      'Freshworks Inc. — Product Management Fellow (92% Match)'
    ],
    gaps: [
      'Many listings prefer candidates with at least 1 deployed full-stack project'
    ],
    recommendation: 'Prioritize applying to the Razorpay Frontend Internship before the 15 Oct deadline.',
    actionUrl: '/opportunities',
    actionText: 'View Matched Opportunities'
  },
  'improve-profile': {
    query: 'Improve my profile & Career Score',
    summary: 'Your Career Readiness Score is currently 78/100. You can reach the top 5% bracket (+14 points) by verifying your GitHub repos and recording your 60-second video elevator pitch.',
    matchScore: 78,
    strengths: [
      'Verified college enrollment at VIT Chennai',
      'Completed core technical skills tagging'
    ],
    gaps: [
      'Video pitch is in draft status (worth +10 points)',
      'Add 1 more live project URL with public GitHub repo'
    ],
    recommendation: 'Record a crisp 45-second elevator pitch summarizing your recent placement tracker project.',
    actionUrl: '/student/dashboard?tab=profile',
    actionText: 'Update Video & Profile'
  },
  'skills-to-learn': {
    query: 'What skills should I learn next?',
    summary: 'Recruiter market demand for React engineers in Q4 2026 shows a heavy surge (+42%) toward TypeScript strict mode and Next.js Server Components.',
    matchScore: 88,
    strengths: [
      'You already know JavaScript, React, and Git fundamentals'
    ],
    gaps: [
      'TypeScript Generics & utility types',
      'Next.js 16 App Router Server Actions',
      'Containerization basics with Docker'
    ],
    recommendation: 'Complete a small TypeScript full-stack CRUD application and deploy it to Vercel.',
    actionUrl: '/resources',
    actionText: 'Browse Skill Guides'
  },
  'prepare-interview': {
    query: 'Prepare for upcoming technical interviews',
    summary: 'For early-career engineering interviews, 70% of evaluation rests on problem-solving clarity and live communication, not rote memorization.',
    matchScore: 85,
    strengths: [
      'Good conceptual grasp of component state and hooks',
      'Familiar with REST API consumption patterns'
    ],
    gaps: [
      'Practice explaining technical trade-offs out loud using the STAR method',
      'Review React reconciliation and virtual DOM diffing mechanisms'
    ],
    recommendation: 'Practice today’s daily challenge: "Explain how React reconciles virtual DOM trees to a non-technical interviewer."',
    actionUrl: '/student/dashboard?tab=daily',
    actionText: 'Practice Daily Challenge'
  }
};

export default function AICareerToolsPage() {
  const { profile } = useAuth();
  const [selectedPromptKey, setSelectedPromptKey] = useState<string>('improve-resume');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [customPrompt, setCustomPrompt] = useState<string>('');

  const currentAnalysis = PREDEFINED_RESPONSES[selectedPromptKey] || PREDEFINED_RESPONSES['improve-resume'];

  const handleSelectPrompt = (key: string) => {
    setIsProcessing(true);
    setSelectedPromptKey(key);
    setTimeout(() => {
      setIsProcessing(false);
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customPrompt.trim()) return;
    setIsProcessing(true);
    // Deterministic matcher for custom questions
    const lower = customPrompt.toLowerCase();
    let matchedKey = 'improve-resume';
    if (lower.includes('job') || lower.includes('internship') || lower.includes('opportunity')) matchedKey = 'find-opportunities';
    else if (lower.includes('profile') || lower.includes('score')) matchedKey = 'improve-profile';
    else if (lower.includes('skill') || lower.includes('learn')) matchedKey = 'skills-to-learn';
    else if (lower.includes('interview') || lower.includes('question')) matchedKey = 'prepare-interview';

    setSelectedPromptKey(matchedKey);
    setTimeout(() => {
      setIsProcessing(false);
      setCustomPrompt('');
    }, 500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0A1428] via-[#0F1D38] to-[#172746] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <Brain className="w-4 h-4" /> AI Career Intelligence Studio
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Actionable AI Career Assistance
            </h1>
            <p className="text-amber-300 font-bold text-base sm:text-lg italic">
              “AI should assist your career journey — not decide your career for you.”
            </p>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Tailored career diagnostics analyzing your profile, skill gaps, and ATS alignment.
            </p>
          </div>

          {/* Interactive AI Query Selector */}
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Choose an AI Assistant Prompt:
              </span>
              <span className="text-xs text-amber-600 font-bold">Profile: {profile?.name || 'Aarav Sharma'}</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
              {[
                { key: 'improve-resume', label: 'Improve my resume', icon: FileText },
                { key: 'find-opportunities', label: 'Find opportunities', icon: Target },
                { key: 'improve-profile', label: 'Improve my profile', icon: UserCheck },
                { key: 'skills-to-learn', label: 'What skills to learn?', icon: Zap },
                { key: 'prepare-interview', label: 'Prepare for interview', icon: MessageSquare }
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = selectedPromptKey === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => handleSelectPrompt(item.key)}
                    className={`p-3 rounded-2xl border text-left text-xs font-bold transition flex flex-col justify-between h-24 ${
                      isSelected
                        ? 'bg-[#0A1428] text-white border-slate-900 shadow-md scale-[1.02]'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-400' : 'text-slate-500'}`} />
                    <span className="leading-tight">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Query Input */}
            <form onSubmit={handleCustomSubmit} className="relative">
              <input
                type="text"
                value={customPrompt}
                onChange={(e) => setCustomPrompt(e.target.value)}
                placeholder="Ask the AI Career Assistant anything (e.g. How can I stand out for Razorpay frontend role?)..."
                className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-2xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20 shadow-xs"
              />
              <button
                type="submit"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2 bg-[#0A1428] text-white rounded-xl hover:bg-[#0F1D38]"
              >
                <Send className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </form>
          </div>

          {/* AI Response Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md max-w-4xl mx-auto space-y-6 animate-fade-in relative">
            {isProcessing ? (
              <div className="py-16 text-center space-y-3">
                <Loader2 className="w-8 h-8 animate-spin text-amber-500 mx-auto" />
                <p className="text-xs font-bold text-slate-800">Synthesizing profile data & recruiter intelligence...</p>
              </div>
            ) : (
              <>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      AI Diagnostic Result
                    </span>
                    <h3 className="text-xl font-extrabold text-[#0A1428] mt-1">{currentAnalysis.query}</h3>
                  </div>

                  <div className="flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3.5 py-1.5 rounded-2xl shrink-0">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-extrabold">⚡ {currentAnalysis.matchScore}% Readiness Score</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {currentAnalysis.summary}
                </div>

                {/* Breakdown Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Key Strengths */}
                  <div className="bg-emerald-50/50 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>Identified Profile Strengths</span>
                    </div>
                    <ul className="space-y-2 text-xs text-emerald-950 font-medium">
                      {currentAnalysis.strengths.map((st, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Identified Gaps */}
                  <div className="bg-amber-50/50 rounded-2xl p-5 border border-amber-200/80 space-y-3">
                    <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs">
                      <AlertCircle className="w-4 h-4 text-amber-600" />
                      <span>Skill Gaps & Optimization Areas</span>
                    </div>
                    <ul className="space-y-2 text-xs text-amber-950 font-medium">
                      {currentAnalysis.gaps.map((gp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-600 font-bold">!</span>
                          <span>{gp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Recommendation Banner & Action CTA */}
                <div className="p-5 bg-[#0A1428] text-white rounded-2xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest block">
                      Recommended Next Move
                    </span>
                    <p className="text-xs text-slate-200 leading-snug max-w-lg">
                      {currentAnalysis.recommendation}
                    </p>
                  </div>

                  <Link
                    href={currentAnalysis.actionUrl}
                    className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 shrink-0 transition"
                  >
                    <span>{currentAnalysis.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
