'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Sparkles, 
  Target, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight, 
  AlertCircle,
  Code,
  Brain
} from 'lucide-react';

export default function AICareerToolsPage() {
  const [activeTab, setActiveTab] = useState<'match' | 'recommend' | 'skills' | 'interview'>('match');
  const [analyzing, setAnalyzing] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#0A1428] via-[#0F1D38] to-[#172746] text-white rounded-3xl p-8 sm:p-12 border border-slate-800 shadow-xl space-y-4 text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-slate-900 px-3.5 py-1.5 rounded-full border border-slate-800">
              <Brain className="w-4 h-4" /> AI Career Intelligence
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              AI Powered Career Assistance
            </h1>
            <p className="text-amber-300 font-bold text-base sm:text-lg italic">
              “AI should assist your career journey — not decide your career for you.”
            </p>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Practical AI tools designed to analyze your skill gaps, match you with verified opportunities, and prepare you for recruiter interviews without gimmickry.
            </p>
          </div>

          {/* Interactive Feature Tabs */}
          <div className="flex justify-center border-b border-slate-200">
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              <button
                onClick={() => setActiveTab('match')}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'match'
                    ? 'bg-[#0A1428] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Target className="w-4 h-4 text-amber-400" />
                <span>1. Opportunity Matching</span>
              </button>

              <button
                onClick={() => setActiveTab('recommend')}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'recommend'
                    ? 'bg-[#0A1428] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <TrendingUp className="w-4 h-4 text-amber-400" />
                <span>2. Career Recommendations</span>
              </button>

              <button
                onClick={() => setActiveTab('skills')}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'skills'
                    ? 'bg-[#0A1428] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <Code className="w-4 h-4 text-amber-400" />
                <span>3. Skill Gap Insights</span>
              </button>

              <button
                onClick={() => setActiveTab('interview')}
                className={`text-xs font-bold px-4 py-2.5 rounded-xl transition flex items-center gap-1.5 ${
                  activeTab === 'interview'
                    ? 'bg-[#0A1428] text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                <MessageSquare className="w-4 h-4 text-amber-400" />
                <span>4. Interview Prep</span>
              </button>
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md max-w-4xl mx-auto">
            {activeTab === 'match' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">AI Opportunity Match Score</h3>
                    <p className="text-xs text-slate-500">Evaluates verified project code & skills against live job specs.</p>
                  </div>
                  <span className="text-xs font-bold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                    94% Compatible
                  </span>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between font-bold text-sm text-slate-900">
                    <span>Matched Role: React Frontend Developer (NexGen Cloud)</span>
                    <span className="text-emerald-700 font-extrabold">Strong Fit</span>
                  </div>
                  <p className="text-xs text-slate-600">
                    Your profile matches 4 out of 4 core requirements: React, TypeScript, Git, and Responsive CSS.
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'recommend' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">AI Recommended Career Trajectories</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="text-xs font-bold text-amber-700">Primary Path</span>
                    <h4 className="font-bold text-slate-900 text-sm">Full-Stack Web Engineer</h4>
                    <p className="text-xs text-slate-600">Based on your Next.js and Prisma campus projects.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                    <span className="text-xs font-bold text-blue-700">Secondary Path</span>
                    <h4 className="font-bold text-slate-900 text-sm">Frontend Product Specialist</h4>
                    <p className="text-xs text-slate-600">Based on your UI design and Tailwind CSS skills.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'skills' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">Skill Gap Analytics</h3>
                <p className="text-xs text-slate-600">Top 2 missing skills to unlock senior internship tiers:</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                    <span className="font-bold text-amber-900">State Management (Zustand / Redux)</span>
                    <span className="text-slate-600 font-semibold">Recommended 3-hour micro-course</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-amber-50 border border-amber-200 text-xs">
                    <span className="font-bold text-amber-900">Docker Containerization Basics</span>
                    <span className="text-slate-600 font-semibold">Recommended weekend tutorial</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'interview' && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-slate-900">AI Mock Interview Simulator</h3>
                <div className="bg-slate-900 text-white rounded-2xl p-5 space-y-3">
                  <div className="text-xs text-amber-400 font-bold uppercase">AI Recruiter Prompt:</div>
                  <p className="text-sm font-medium text-slate-200">
                    “Can you walk me through how you handled data fetching and state hydration in your Smart Campus Placement Tracker project?”
                  </p>
                  <button className="text-xs font-bold bg-amber-500 text-slate-950 px-4 py-2 rounded-lg hover:bg-amber-400">
                    Practise Audio / Text Answer
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
