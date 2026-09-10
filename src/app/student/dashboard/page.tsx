'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { DashboardShell } from '@/components/layout/DashboardShell';
import { SEEDED_OPPORTUNITIES } from '@/data/opportunities';
import { TODAY_DAILY_CHALLENGE, TODAY_SKILL_SPOTLIGHT, NEXT_BEST_ACTION } from '@/data/daily';
import { OpportunityCard } from '@/components/shared/OpportunityCard';
import { Opportunity } from '@/lib/types';
import { useAuth } from '@/context/AuthContext';
import { 
  Sparkles, 
  Flame, 
  CheckCircle2, 
  Award, 
  ArrowRight, 
  Target, 
  Zap, 
  BookOpen, 
  Video, 
  Play, 
  Pause,
  Calendar, 
  TrendingUp,
  Bookmark,
  FileText,
  ShieldCheck,
  Code2,
  ExternalLink,
  Edit3,
  X,
  Upload,
  Trash2,
  RotateCcw,
  Check,
  Building2,
  Clock,
  UserCheck,
  Share2,
  MapPin
} from 'lucide-react';
import Link from 'next/link';

interface ApplicationItem {
  id: string;
  role: string;
  company: string;
  logo: string;
  appliedDate: string;
  status: 'Applied' | 'Under Review' | 'Shortlisted' | 'Interview' | 'Selected' | 'Rejected';
  nextStep: string;
  location: string;
}

const INITIAL_APPLICATIONS: ApplicationItem[] = [
  {
    id: 'app-1',
    role: 'Frontend Engineering Intern',
    company: 'Razorpay Software',
    logo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=120&q=80',
    appliedDate: 'Yesterday',
    status: 'Shortlisted',
    nextStep: 'Technical Round 1 scheduled for 15 Oct, 3:00 PM IST',
    location: 'Bengaluru, KA (Hybrid)'
  },
  {
    id: 'app-2',
    role: 'UI/UX Product Design Intern',
    company: 'Swiggy Studio',
    logo: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?auto=format&fit=crop&w=120&q=80',
    appliedDate: '3 days ago',
    status: 'Under Review',
    nextStep: 'Hiring manager reviewing Figma portfolio case study',
    location: 'Remote'
  },
  {
    id: 'app-3',
    role: 'AI & Data Science Trainee',
    company: 'CRED Data Labs',
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=120&q=80',
    appliedDate: '5 days ago',
    status: 'Applied',
    nextStep: 'Application successfully transmitted to recruiter pipeline',
    location: 'Bengaluru, KA'
  }
];

function StudentDashboardContent() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get('tab');

  const { profile, updateProfile } = useAuth();

  const [profileCopied, setProfileCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'daily' | 'opportunities' | 'applications' | 'saved' | 'profile'>('daily');

  useEffect(() => {
    if (tabParam === 'profile') setActiveTab('profile');
    else if (tabParam === 'applications') setActiveTab('applications');
    else if (tabParam === 'saved') setActiveTab('saved');
    else if (tabParam === 'opportunities') setActiveTab('opportunities');
  }, [tabParam]);

  // Daily Challenge & Streak State
  const [streakCount, setStreakCount] = useState<number>(12);
  const [challengeCompleted, setChallengeCompleted] = useState<boolean>(false);
  const [challengeAnswer, setChallengeAnswer] = useState<string>('');
  const [showChallengeModal, setShowChallengeModal] = useState<boolean>(false);

  // Video Profile Modal State
  const [showVideoModal, setShowVideoModal] = useState<boolean>(false);
  const [videoPitchPlaying, setVideoPitchPlaying] = useState<boolean>(false);
  const [hasActiveVideo, setHasActiveVideo] = useState<boolean>(true);
  const [videoStatusMsg, setVideoStatusMsg] = useState<string | null>(null);

  // Applications & Saved Roles
  const [applications, setApplications] = useState<ApplicationItem[]>(INITIAL_APPLICATIONS);
  const [appFilter, setAppFilter] = useState<string>('All');
  const [savedRoleIds, setSavedRoleIds] = useState<string[]>(['opp-1', 'opp-2', 'opp-4']);

  // Profile Edit Modal State
  const [showEditProfileModal, setShowEditProfileModal] = useState<boolean>(false);
  const [editForm, setEditForm] = useState({
    name: profile?.name || 'Aarav Sharma',
    headline: profile?.headline || 'CSE 2026 • Frontend & Full Stack Enthusiast',
    college: profile?.college || 'Vellore Institute of Technology (VIT)',
    degree: profile?.degree || 'B.Tech in Computer Science & Engineering',
    location: profile?.location || 'Chennai, Tamil Nadu',
    skills: profile?.skills ? profile.skills.join(', ') : 'React, TypeScript, Next.js, Tailwind CSS, Git, SQL',
    bio: profile?.bio || 'Passionate about performant UI architectures and creating high-impact early-career opportunities.'
  });

  const dailyOpportunities = [
    { ...SEEDED_OPPORTUNITIES[0], matchScore: 94 },
    { ...SEEDED_OPPORTUNITIES[1], matchScore: 91 },
    { ...SEEDED_OPPORTUNITIES[2], matchScore: 88 },
  ];

  const badges = [
    { name: 'Career Starter', earned: true, icon: Award, color: 'text-amber-500 bg-amber-50 border-amber-200' },
    { name: 'Profile Builder', earned: true, icon: CheckCircle2, color: 'text-blue-500 bg-blue-50 border-blue-200' },
    { name: 'Skill Builder', earned: true, icon: Zap, color: 'text-purple-500 bg-purple-50 border-purple-200' },
    { name: 'Opportunity Hunter', earned: true, icon: Target, color: 'text-emerald-500 bg-emerald-50 border-emerald-200' },
    { name: 'Video Ready', earned: hasActiveVideo, icon: Video, color: hasActiveVideo ? 'text-amber-500 bg-amber-50 border-amber-200' : 'text-slate-400 bg-slate-100 border-slate-200' },
    { name: 'Interview Ready', earned: challengeCompleted, icon: Sparkles, color: challengeCompleted ? 'text-emerald-500 bg-emerald-50 border-emerald-200' : 'text-slate-400 bg-slate-100 border-slate-200' },
  ];

  const handleCompleteChallenge = (e: React.FormEvent) => {
    e.preventDefault();
    if (!challengeCompleted) {
      setChallengeCompleted(true);
      setStreakCount(prev => prev + 1);
      setShowChallengeModal(false);
    }
  };

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    const skillsArray = editForm.skills.split(',').map(s => s.trim()).filter(Boolean);
    updateProfile({
      name: editForm.name,
      headline: editForm.headline,
      college: editForm.college,
      degree: editForm.degree,
      location: editForm.location,
      skills: skillsArray,
      bio: editForm.bio,
      careerScore: 84
    });
    setShowEditProfileModal(false);
  };

  const handleUnsave = (id: string) => {
    setSavedRoleIds(prev => prev.filter(item => item !== id));
  };

  const filteredApplications = applications.filter(app => {
    if (appFilter === 'All') return true;
    return app.status.toLowerCase() === appFilter.toLowerCase();
  });

  const savedOpportunitiesList = SEEDED_OPPORTUNITIES.filter(opp => savedRoleIds.includes(opp.id));

  return (
    <DashboardShell role="student">
      <div className="space-y-8">
        
        {/* ========================================================================= */}
        {/* WELCOME HEADER & TAB NAVIGATION                                            */}
        {/* ========================================================================= */}
        <div className="bg-gradient-to-r from-[#0A1428] via-[#0F1D38] to-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/15 border border-amber-500/30 px-3 py-1 rounded-full">
                  PehlaChance Daily
                </span>
                <span className="text-xs text-slate-300">
                  {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Good morning, {profile?.name?.split(' ')[0] || 'Aarav'}!
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Here is your career game plan today. Small daily actions create your first major breakthrough.
              </p>
            </div>

            {/* Career Streak Pill */}
            <div className="flex items-center gap-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-3.5 px-5 shrink-0 shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center border border-amber-500/30">
                <Flame className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-white">{streakCount}</span>
                  <span className="text-xs font-bold text-amber-400">Day Streak</span>
                </div>
                <span className="text-[10px] text-slate-400 font-semibold block">
                  {challengeCompleted ? '✓ Completed Today!' : 'Daily Challenge Ready'}
                </span>
              </div>
            </div>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-slate-800/80 scrollbar-none relative z-10">
            {[
              { id: 'daily', label: 'PehlaChance Daily' },
              { id: 'opportunities', label: 'Curated Opportunities' },
              { id: 'applications', label: `Applications (${applications.length})` },
              { id: 'saved', label: `Saved Roles (${savedRoleIds.length})` },
              { id: 'profile', label: 'My Professional Profile' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* TAB 1: PEHLACHANCE DAILY                                                  */}
        {/* ========================================================================= */}
        {activeTab === 'daily' && (
          <div className="space-y-8 animate-fade-in">
            {/* Career Score & Progress Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Career Score Widget */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Career Readiness Index</span>
                      <h3 className="text-lg font-extrabold text-[#0A1428] mt-0.5">Your Career Score</h3>
                    </div>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                      +6 this week ↗
                    </span>
                  </div>

                  {/* Big Score Visual */}
                  <div className="flex items-baseline gap-2 my-4">
                    <span className="text-5xl font-black text-[#0A1428] tracking-tight">{profile?.careerScore || 78}</span>
                    <span className="text-slate-400 font-bold text-lg">/ 100</span>
                    <span className="text-xs font-semibold text-slate-500 ml-2">Top 15% in CSE 2026</span>
                  </div>

                  {/* Progress Breakdown Bars */}
                  <div className="space-y-2.5 pt-2 text-xs">
                    <div>
                      <div className="flex justify-between font-semibold text-slate-700 mb-1">
                        <span>Verified Profile Credentials</span>
                        <span className="text-slate-900 font-bold">92%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-amber-500 h-full w-[92%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-semibold text-slate-700 mb-1">
                        <span>Skills Proof & GitHub Repos</span>
                        <span className="text-slate-900 font-bold">85%</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-600 h-full w-[85%]" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-semibold text-slate-700 mb-1">
                        <span>Video Pitch Introduction</span>
                        <span className="text-amber-600 font-bold">{hasActiveVideo ? '90% (Live)' : '40% (Pending)'}</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className={`h-full ${hasActiveVideo ? 'bg-purple-600 w-[90%]' : 'bg-amber-500 w-[40%]'}`} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between font-semibold text-slate-700 mb-1">
                        <span>ATS Resume Readiness</span>
                        <span className="text-emerald-700 font-bold">100% (Verified)</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-emerald-500 h-full w-[100%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">Updated automatically</span>
                  <button
                    onClick={() => setActiveTab('profile')}
                    className="font-bold text-amber-600 hover:underline flex items-center gap-1"
                  >
                    <span>Improve Score</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Today's Flash Career Challenge */}
              <div className="lg:col-span-7 bg-[#0A1428] rounded-3xl p-6 sm:p-7 text-white border border-slate-800 shadow-xs space-y-5 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                      Daily Career Challenge
                    </span>
                    <span className="text-xs font-bold text-slate-400">Reward: +{TODAY_DAILY_CHALLENGE.xpReward} XP</span>
                  </div>

                  <h3 className="text-lg font-bold text-white leading-snug">
                    {TODAY_DAILY_CHALLENGE.question}
                  </h3>

                  <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800/80 space-y-2 text-xs">
                    <span className="text-slate-400 font-bold block">Key Evaluation Criteria:</span>
                    <ul className="space-y-1.5 text-slate-300">
                      {TODAY_DAILY_CHALLENGE.tips.map((tip, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  {challengeCompleted ? (
                    <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Today's Challenge Completed! Streak saved (+50 XP).</span>
                    </div>
                  ) : (
                    <span className="text-xs text-slate-400">Takes ~2 minutes to practice</span>
                  )}

                  <button
                    onClick={() => setShowChallengeModal(true)}
                    className={`font-bold text-xs px-5 py-2.5 rounded-xl transition ${
                      challengeCompleted
                        ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                        : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md'
                    }`}
                  >
                    {challengeCompleted ? 'Review Answer' : 'Start Challenge'}
                  </button>
                </div>
              </div>

            </div>

            {/* Next Best Action + Skill Spotlight */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Next Best Action */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                      High Impact Move
                    </span>
                    <span className="text-xs font-bold text-emerald-600">{NEXT_BEST_ACTION.impact}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#0A1428]">{NEXT_BEST_ACTION.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {NEXT_BEST_ACTION.description}
                  </p>
                </div>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="w-full py-2.5 rounded-xl bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow"
                >
                  <Video className="w-3.5 h-3.5 text-amber-400" />
                  <span>{NEXT_BEST_ACTION.actionLabel}</span>
                </button>
              </div>

              {/* Skill Spotlight */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                      Skill of the Day
                    </span>
                    <span className="text-xs font-bold text-blue-600">{TODAY_SKILL_SPOTLIGHT.trendScore}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-[#0A1428]">{TODAY_SKILL_SPOTLIGHT.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {TODAY_SKILL_SPOTLIGHT.quickTip}
                  </p>
                </div>

                <Link
                  href="/resources"
                  className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                  <span>Explore Skill Guide</span>
                </Link>
              </div>

            </div>

            {/* Milestone Badges */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-[#0A1428]">Your Milestone Badges</h4>
                  <p className="text-xs text-slate-500">Unlocked as your verified profile, skills, and activity grow.</p>
                </div>
                <span className="text-xs font-bold text-amber-600">4 of 6 Earned</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {badges.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div 
                      key={idx} 
                      className={`p-3 rounded-2xl border flex flex-col items-center text-center gap-2 transition ${b.color}`}
                    >
                      <Icon className="w-6 h-6" />
                      <div>
                        <span className="text-xs font-bold block">{b.name}</span>
                        <span className="text-[10px] text-slate-500">{b.earned ? 'Unlocked' : 'In Progress'}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Today's 3 Recommended Opportunities */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-extrabold text-[#0A1428]">Today’s Match Opportunities</h3>
                  <p className="text-xs text-slate-500">Handpicked based on your React, TypeScript, and Computer Science profile.</p>
                </div>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
                >
                  <span>View All 20+ Listings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {dailyOpportunities.map((opp) => (
                  <OpportunityCard 
                    key={opp.id} 
                    opportunity={opp as unknown as Opportunity}
                    isSavedInitial={savedRoleIds.includes(opp.id)}
                    onSaveToggle={(id, isSaved) => {
                      if (isSaved) setSavedRoleIds(prev => [...prev, id]);
                      else setSavedRoleIds(prev => prev.filter(x => x !== id));
                    }}
                  />
                ))}
              </div>
            </div>

            {/* 60-Second Video Pitch Spotlight */}
            <div className="bg-[#0A1428] rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Video Talent Profile</span>
                  </div>
                  <h3 className="text-xl font-extrabold text-white mt-1">Your 60-Second Elevator Pitch</h3>
                  <p className="text-xs text-slate-300">Recruiters spend 80% more time on candidate profiles with active video introductions.</p>
                </div>

                <button
                  onClick={() => setShowVideoModal(true)}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl shadow transition shrink-0 text-center"
                >
                  {hasActiveVideo ? 'Preview / Update Video' : 'Record Video Pitch'}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                {/* Video preview thumbnail */}
                <div 
                  onClick={() => setShowVideoModal(true)}
                  className="md:col-span-1 relative rounded-2xl overflow-hidden aspect-video bg-slate-900 border border-slate-700 group cursor-pointer"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=400&q=80" 
                    alt="Aarav Video Pitch Preview"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl group-hover:scale-110 transition">
                      <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono bg-black/80 text-white px-2 py-0.5 rounded">
                    0:48s
                  </span>
                </div>

                {/* Video details & recruiter engagement */}
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      Ready for Employer Review
                    </span>
                    <span className="text-xs text-slate-400">14 Recruiter Views this week</span>
                  </div>
                  <h4 className="text-sm font-bold text-white">"Hi, I'm Aarav — CSE 2026 passionate about performant UI architectures."</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Highlights key coursework at VIT Chennai, 4 completed React/Next.js projects, and eagerness for 3-month summer internship roles.
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">React.js</span>
                    <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">TypeScript</span>
                    <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Next.js</span>
                    <span className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded">Tailwind</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 2: CURATED OPPORTUNITIES                                              */}
        {/* ========================================================================= */}
        {activeTab === 'opportunities' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between bg-white p-6 rounded-3xl border border-slate-200">
              <div>
                <h2 className="text-xl font-extrabold text-[#0A1428]">Recommended for Your Profile</h2>
                <p className="text-xs text-slate-500">Sorted by AI Match Score based on your skills and college background.</p>
              </div>
              <Link
                href="/opportunities"
                className="bg-[#0A1428] text-white px-5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5"
              >
                <span>Full Marketplace</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SEEDED_OPPORTUNITIES.slice(0, 9).map((opp) => (
                <OpportunityCard 
                  key={opp.id} 
                  opportunity={opp as unknown as Opportunity}
                  isSavedInitial={savedRoleIds.includes(opp.id)}
                  onSaveToggle={(id, isSaved) => {
                    if (isSaved) setSavedRoleIds(prev => [...prev, id]);
                    else setSavedRoleIds(prev => prev.filter(x => x !== id));
                  }}
                />
              ))}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 3: APPLICATIONS TRACKER                                               */}
        {/* ========================================================================= */}
        {activeTab === 'applications' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
              <div>
                <h2 className="text-xl font-extrabold text-[#0A1428]">Your Active Applications</h2>
                <p className="text-xs text-slate-500">Track interview rounds, screening updates, and employer decisions in real-time.</p>
              </div>

              {/* Status Filter Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none border-t border-slate-100 pt-3">
                {['All', 'Applied', 'Under Review', 'Shortlisted', 'Interview', 'Selected'].map(status => (
                  <button
                    key={status}
                    onClick={() => setAppFilter(status)}
                    className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition ${
                      appFilter === status
                        ? 'bg-[#0A1428] text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {filteredApplications.length > 0 ? (
              <div className="space-y-4">
                {filteredApplications.map(app => (
                  <div key={app.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 shrink-0">
                        <img src={app.logo} alt={app.company} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-700">{app.company}</span>
                          <span className="text-[11px] text-slate-400">• Applied {app.appliedDate}</span>
                        </div>
                        <h3 className="text-base font-extrabold text-[#0A1428]">{app.role}</h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{app.location}</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                        app.status === 'Shortlisted' ? 'bg-amber-50 text-amber-800 border-amber-200' :
                        app.status === 'Under Review' ? 'bg-blue-50 text-blue-800 border-blue-200' :
                        app.status === 'Selected' ? 'bg-emerald-50 text-emerald-800 border-emerald-200' :
                        'bg-slate-100 text-slate-800 border-slate-200'
                      }`}>
                        {app.status}
                      </span>
                      <span className="text-[11px] text-slate-500 text-left sm:text-right max-w-xs font-medium">
                        {app.nextStep}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
                <FileText className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">Your first opportunity starts here</h4>
                <p className="text-xs text-slate-500">No applications under this category yet.</p>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
                >
                  Explore Opportunities
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 4: SAVED ROLES                                                        */}
        {/* ========================================================================= */}
        {activeTab === 'saved' && (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-white p-6 rounded-3xl border border-slate-200">
              <h2 className="text-xl font-extrabold text-[#0A1428]">Saved Opportunities ({savedOpportunitiesList.length})</h2>
              <p className="text-xs text-slate-500">Bookmarks you've saved to apply to before deadlines close.</p>
            </div>

            {savedOpportunitiesList.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {savedOpportunitiesList.map(opp => (
                  <OpportunityCard 
                    key={opp.id} 
                    opportunity={opp as unknown as Opportunity}
                    isSavedInitial={true}
                    onSaveToggle={(id, isSaved) => {
                      if (!isSaved) handleUnsave(id);
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
                <Bookmark className="w-10 h-10 text-slate-300 mx-auto" />
                <h4 className="text-base font-bold text-slate-800">No saved opportunities yet</h4>
                <p className="text-xs text-slate-500">Save opportunities you want to explore later.</p>
                <button
                  onClick={() => setActiveTab('opportunities')}
                  className="bg-[#0A1428] text-white px-5 py-2.5 rounded-xl font-bold text-xs"
                >
                  Browse Verified Listings
                </button>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* TAB 5: MY PROFESSIONAL PROFILE                                            */}
        {/* ========================================================================= */}
        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fade-in">
            {/* Identity Banner */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                  <img src={profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80'} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-extrabold text-[#0A1428]">{profile?.name || 'Aarav Sharma'}</h2>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                      ✓ Verified Identity
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-slate-600">{profile?.headline || 'Frontend Engineer & Full Stack Web Developer'}</p>
                  <p className="text-xs text-slate-400">{profile?.college || 'VIT Chennai'} • {profile?.location || 'Chennai, Tamil Nadu'}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowEditProfileModal(true)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 flex items-center gap-1.5 transition"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Profile</span>
                </button>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('https://pehlachance.com/student/profile/' + (profile?.name?.toLowerCase().replace(/\s+/g, '-') || 'student'));
                    setProfileCopied(true);
                    setTimeout(() => setProfileCopied(false), 2500);
                  }}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-5 py-2.5 rounded-xl text-xs shadow transition flex items-center gap-1.5"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{profileCopied ? 'Profile Link Copied ✓' : 'GET DISCOVERED'}</span>
                </button>
              </div>
            </div>

            {/* Profile Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Left Column: Education & Skills */}
              <div className="lg:col-span-1 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Education</h4>
                  <div className="space-y-1 text-xs">
                    <span className="font-extrabold text-slate-900 block text-sm">{profile?.college || 'Vellore Institute of Technology'}</span>
                    <span className="text-slate-600 block">{profile?.degree || 'B.Tech Computer Science & Engineering'}</span>
                    <span className="text-slate-400 font-semibold block">Class of {profile?.gradYear || '2026'} • CGPA 8.8/10.0</span>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {(profile?.skills || ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'SQL']).map((skill, idx) => (
                      <span key={idx} className="text-xs font-bold bg-slate-100 text-slate-800 px-3 py-1 rounded-xl">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">ATS Resume</h4>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-amber-500" />
                      <span className="font-bold text-slate-800">Aarav_Sharma_Resume.pdf</span>
                    </div>
                    <Link href="/resume-builder" className="text-amber-600 font-bold hover:underline">
                      Edit
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Projects, Bio & Video Pitch */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">About Me</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {profile?.bio || 'Passionate about building intuitive web experiences for Bharat. Actively contributing to campus tech communities and seeking challenging summer frontend internship opportunities.'}
                  </p>
                </div>

                {/* Projects Showcase */}
                <div className="bg-white rounded-3xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Portfolio Projects</h4>
                    <span className="text-xs font-bold text-amber-600">3 Published</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-slate-900 text-sm">Smart Campus Placement Tracker</h5>
                        <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">Live Demo</span>
                      </div>
                      <p className="text-slate-600">
                        Architected a Next.js portal streamlining placement drives for 12 university departments, cutting application processing time by 40%.
                      </p>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px] font-semibold">
                        <span>Next.js</span> • <span>PostgreSQL</span> • <span>Tailwind CSS</span>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <div className="flex items-center justify-between">
                        <h5 className="font-bold text-slate-900 text-sm">AI Resume Keyword Optimizer</h5>
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">GitHub Open Source</span>
                      </div>
                      <p className="text-slate-600">
                        NLP analysis pipeline parsing student resume bullets against recruiter job specs, improving match scoring precision by 35%.
                      </p>
                      <div className="flex items-center gap-2 text-slate-400 text-[11px] font-semibold">
                        <span>Python</span> • <span>FastAPI</span> • <span>NLP</span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* ========================================================================= */}
      {/* MODAL 1: DAILY CHALLENGE MODAL                                            */}
      {/* ========================================================================= */}
      {showChallengeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowChallengeModal(false)} />
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 space-y-5 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Daily Behavioral Challenge
              </span>
              <button onClick={() => setShowChallengeModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-extrabold text-[#0A1428]">{TODAY_DAILY_CHALLENGE.question}</h3>
              <p className="text-xs text-slate-500">Practice your verbal structure or type your response below:</p>
            </div>

            <form onSubmit={handleCompleteChallenge} className="space-y-4 text-xs">
              <textarea
                rows={4}
                required
                value={challengeAnswer}
                onChange={(e) => setChallengeAnswer(e.target.value)}
                placeholder="Hi, I'm Aarav — CSE 2026 passionate about web performance..."
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />

              <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-900 space-y-1">
                <span className="font-bold block">Recruiter Pro-Tip:</span>
                <p>Highlight your degree, one major project breakthrough, and why you are excited for your first opportunity.</p>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowChallengeModal(false)}
                  className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-5 py-2 rounded-xl shadow"
                >
                  {challengeCompleted ? 'Save Updates' : 'Submit & Save Streak 🔥'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: 60-SECOND VIDEO PITCH STUDIO                                    */}
      {/* ========================================================================= */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowVideoModal(false)} />
          <div className="bg-[#0A1428] text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 z-10 shadow-2xl border border-slate-800 space-y-6 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Video Pitch Studio</span>
                <h3 className="text-base font-extrabold text-white">60-Second Elevator Introduction</h3>
              </div>
              <button onClick={() => setShowVideoModal(false)} className="p-1 text-slate-400 hover:text-white rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-slate-950 border border-slate-800 flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="Video Pitch" 
                className={`w-full h-full object-cover ${videoPitchPlaying ? 'opacity-90' : 'opacity-60'}`}
              />

              <button
                onClick={() => setVideoPitchPlaying(!videoPitchPlaying)}
                className="w-14 h-14 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-2xl hover:scale-110 transition z-10"
              >
                {videoPitchPlaying ? <Pause className="w-6 h-6 fill-slate-950" /> : <Play className="w-6 h-6 fill-slate-950 ml-1" />}
              </button>

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white bg-black/70 px-3 py-1 rounded-xl">
                <span>{videoPitchPlaying ? '0:24s / 0:48s' : '0:00s / 0:48s'}</span>
                <span className="text-emerald-400 font-bold">Max Limit: 60 Seconds</span>
              </div>
            </div>

            {videoStatusMsg && (
              <div className="p-3 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs rounded-xl font-semibold">
                {videoStatusMsg}
              </div>
            )}

            {/* Video Actions */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setVideoStatusMsg('Simulated: New 45-second video pitch uploaded successfully!');
                    setTimeout(() => setVideoStatusMsg(null), 3000);
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl flex items-center gap-1.5"
                >
                  <Upload className="w-3.5 h-3.5 text-amber-400" />
                  <span>Replace Video</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setHasActiveVideo(false);
                    setVideoStatusMsg('Video pitch deleted. You can record a new one anytime.');
                    setTimeout(() => setVideoStatusMsg(null), 3000);
                  }}
                  className="px-3 py-2 bg-slate-800 hover:bg-rose-900/40 text-rose-400 font-bold text-xs rounded-xl"
                  title="Delete Video"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setShowVideoModal(false)}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs px-6 py-2 rounded-xl"
              >
                Save & Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: EDIT PROFILE MODAL                                               */}
      {/* ========================================================================= */}
      {showEditProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowEditProfileModal(false)} />
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 z-10 shadow-2xl border border-slate-200 space-y-5 animate-fade-in relative">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600">
                Edit Professional Profile
              </span>
              <button onClick={() => setShowEditProfileModal(false)} className="p-1 text-slate-400 hover:text-slate-600 rounded-full">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-800 block mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Professional Headline</label>
                <input
                  type="text"
                  required
                  value={editForm.headline}
                  onChange={(e) => setEditForm({ ...editForm, headline: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="font-bold text-slate-800 block mb-1">College / University</label>
                  <input
                    type="text"
                    required
                    value={editForm.college}
                    onChange={(e) => setEditForm({ ...editForm, college: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-800 block mb-1">Degree & Major</label>
                  <input
                    type="text"
                    required
                    value={editForm.degree}
                    onChange={(e) => setEditForm({ ...editForm, degree: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">Technical Skills (comma separated)</label>
                <input
                  type="text"
                  required
                  value={editForm.skills}
                  onChange={(e) => setEditForm({ ...editForm, skills: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div>
                <label className="font-bold text-slate-800 block mb-1">About Bio</label>
                <textarea
                  rows={3}
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setShowEditProfileModal(false)}
                  className="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#0A1428] text-white font-bold px-5 py-2 rounded-xl shadow"
                >
                  Save Profile Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </DashboardShell>
  );
}

export default function StudentDashboardPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-xs font-bold text-slate-400">Loading Student Workspace...</div>}>
      <StudentDashboardContent />
    </Suspense>
  );
}
