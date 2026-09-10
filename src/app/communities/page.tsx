'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Users, MapPin, Sparkles, MessageSquare, ArrowRight, X, CheckCircle2, Globe, Shield } from 'lucide-react';

interface CommunityHub {
  id: string;
  name: string;
  type: 'city' | 'domain';
  members: number;
  colleges: number;
  description: string;
  focus: string[];
  upcomingMeetup: string;
  lead: string;
}

const CITY_HUBS: CommunityHub[] = [
  {
    id: 'city-hyd',
    name: 'Hyderabad Student & Tech Hub',
    type: 'city',
    members: 2840,
    colleges: 38,
    description: 'Connecting engineering and business students across HITEC City, Gachibowli, and Telangana university campuses with local startup founders and tech leaders.',
    focus: ['Cloud & DevOps', 'Fintech', 'Campus Placement Readiness', 'Hackathons'],
    upcomingMeetup: 'HITEC City Founders & Interns Mixer (Oct 18)',
    lead: 'Kavya Reddy (IIT Hyderabad Chapter)'
  },
  {
    id: 'city-blr',
    name: 'Bengaluru Tech & Early Startup Guild',
    type: 'city',
    members: 4620,
    colleges: 52,
    description: 'The premier student network in the startup capital. Direct access to Koramangala and Indiranagar product teams, engineering hackathons, and demo days.',
    focus: ['AI/ML Engineering', 'Full Stack Next.js', 'Venture & Product Growth', 'Open Source'],
    upcomingMeetup: 'Indiranagar Demo Night for Freshers (Oct 22)',
    lead: 'Rohan Deshmukh (RVCE Chapter)'
  },
  {
    id: 'city-chn',
    name: 'Chennai SaaS & Engineering Guild',
    type: 'city',
    members: 2410,
    colleges: 34,
    description: 'Rooted in the SaaS capital of India. Collaborative initiatives between Tier-1/Tier-2 college students and leading enterprise product makers.',
    focus: ['B2B SaaS', 'Core Systems & Backend', 'Dev Tools', 'Technical Writing'],
    upcomingMeetup: 'OMR Student SaaS Workshop (Nov 02)',
    lead: 'Senthil Kumar (Anna University Chapter)'
  },
  {
    id: 'city-pun',
    name: 'Pune Automotive & Deep Tech Chapter',
    type: 'city',
    members: 1950,
    colleges: 29,
    description: 'Vibrant student engineering chapter focusing on automotive software, embedded IoT systems, and early manufacturing technology.',
    focus: ['Embedded Systems', 'Data Science', 'Mechanical Tech', 'Industrial AI'],
    upcomingMeetup: 'COEP Tech Showcase & Career Circle (Oct 28)',
    lead: 'Ananya Joshi (COEP Chapter)'
  },
  {
    id: 'city-mum',
    name: 'Mumbai Financial Services & Media Guild',
    type: 'city',
    members: 2730,
    colleges: 41,
    description: 'Empowering students across Mumbai and Navi Mumbai pursuing careers in quantitative finance, fintech, brand strategy, and media production.',
    focus: ['Quantitative Finance', 'Investment Banking Prep', 'Brand Marketing', 'Creator Economy'],
    upcomingMeetup: 'BKC FinTech Student Round Table (Nov 08)',
    lead: 'Aman Merchant (NMIMS Chapter)'
  },
  {
    id: 'city-del',
    name: 'Delhi NCR Policy, AI & Commerce Circle',
    type: 'city',
    members: 3890,
    colleges: 48,
    description: 'Spanning New Delhi, Gurugram, and Noida. Connecting tech innovators, commerce scholars, and policy builders with high-growth companies.',
    focus: ['Applied AI', 'E-Commerce Growth', 'Tech Policy', 'Consulting & Analytics'],
    upcomingMeetup: 'Cyber City Startup Career Summit (Nov 15)',
    lead: 'Pooja Verma (DTU Chapter)'
  }
];

const DOMAIN_HUBS: CommunityHub[] = [
  {
    id: 'dom-tech',
    name: 'Technology & Software Engineering Hub',
    type: 'domain',
    members: 8120,
    colleges: 180,
    description: 'For aspiring software engineers, frontend builders, backend architects, and mobile developers across all of India.',
    focus: ['TypeScript / Next.js', 'System Design', 'Algorithms', 'Cloud Infrastructure'],
    upcomingMeetup: 'National Code Sprint & Resume Teardown (Every Saturday)',
    lead: 'Arjun Menon (Engineering Community Lead)'
  },
  {
    id: 'dom-mkt',
    name: 'Marketing, Growth & Community Hub',
    type: 'domain',
    members: 3410,
    colleges: 95,
    description: 'Master viral distribution, social storytelling, performance marketing, and community management through real-world teardowns.',
    focus: ['Content Strategy', 'SEO & Analytics', 'Brand Storytelling', 'User Acquisition'],
    upcomingMeetup: 'Zero-to-1 Distribution Masterclass (Oct 25)',
    lead: 'Sneha Patel (Growth Mentor)'
  },
  {
    id: 'dom-fin',
    name: 'Finance, FinTech & Business Analytics Hub',
    type: 'domain',
    members: 2980,
    colleges: 82,
    description: 'Demystifying financial modeling, equity research, venture funding mechanics, and fintech operations for college undergraduates.',
    focus: ['Financial Modeling', 'Fintech APIs', 'Valuation Basics', 'Risk & Compliance'],
    upcomingMeetup: 'Fintech Case Study Challenge 2026 (Nov 05)',
    lead: 'Vikram Sethi (Ex-Analyst Mentor)'
  },
  {
    id: 'dom-stu',
    name: 'Startups & Founder Apprenticeship Hub',
    type: 'domain',
    members: 4560,
    colleges: 130,
    description: 'For ambitious students who want to be employee #1 to #10 at early-stage startups or launch their own venture during college.',
    focus: ['Founder Office Hours', 'Generalist Skills', 'Pitching & Validation', 'No-Code MVP'],
    upcomingMeetup: 'Early-Stage Founders Looking for Interns (Oct 30)',
    lead: 'Tanvi Shah (Venture Associate)'
  }
];

export default function CommunitiesPage() {
  const [activeTab, setActiveTab] = useState<'cities' | 'domains'>('cities');
  const [selectedHub, setSelectedHub] = useState<CommunityHub | null>(null);
  const [joinedHubs, setJoinedHubs] = useState<string[]>(['city-blr', 'dom-tech']);

  const hubs = activeTab === 'cities' ? CITY_HUBS : DOMAIN_HUBS;

  const toggleJoin = (hubId: string) => {
    if (joinedHubs.includes(hubId)) {
      setJoinedHubs(joinedHubs.filter((id) => id !== hubId));
    } else {
      setJoinedHubs([...joinedHubs, hubId]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 inline-flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Student Peer Ecosystem
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0A1428] tracking-tight">
              PehlaChance Student Communities
            </h1>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl">
              Connect with ambitious peers, senior mentors, and startup founders in your city or domain. Share proof of work, collaborate on projects, and discover unlisted internships.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('cities')}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl transition flex items-center gap-2 ${
                activeTab === 'cities'
                  ? 'bg-[#0A1428] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>City Chapters (6 Metro Hubs)</span>
            </button>
            <button
              onClick={() => setActiveTab('domains')}
              className={`text-xs font-bold px-5 py-2.5 rounded-xl transition flex items-center gap-2 ${
                activeTab === 'domains'
                  ? 'bg-[#0A1428] text-white shadow-xs'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>Domain Guilds (4 Specializations)</span>
            </button>
          </div>

          {/* Hubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hubs.map((hub) => {
              const isJoined = joinedHubs.includes(hub.id);

              return (
                <div
                  key={hub.id}
                  onClick={() => setSelectedHub(hub)}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded">
                        {hub.type === 'city' ? 'City Chapter' : 'Domain Guild'}
                      </span>
                      <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {hub.members.toLocaleString()} Members
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition leading-snug">
                      {hub.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {hub.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {hub.focus.slice(0, 3).map((f, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 font-semibold px-2 py-0.5 rounded">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <div className="text-[11px] text-slate-500">
                      <span className="font-semibold text-slate-800">Next Meetup:</span> {hub.upcomingMeetup}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs font-bold text-[#0A1428] inline-flex items-center gap-1">
                        Explore Hub Details →
                      </span>
                      {isJoined && (
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Joined
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </main>

      {/* Community Detail Modal */}
      {selectedHub && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedHub(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                {selectedHub.type === 'city' ? 'City Hub' : 'Domain Hub'}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{selectedHub.name}</h2>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{selectedHub.members.toLocaleString()} Active Students</span>
                <span>•</span>
                <span>{selectedHub.colleges} College Chapters Connected</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">{selectedHub.description}</p>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 space-y-3 text-xs">
              <div>
                <span className="font-bold text-slate-900 block mb-1.5">Core Focus Areas & Skills:</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedHub.focus.map((f, i) => (
                    <span key={i} className="bg-white border border-slate-200 px-2.5 py-1 rounded-lg text-slate-800 font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60">
                <span className="font-bold text-slate-900">Upcoming Regional Meetup:</span>
                <p className="text-slate-600 mt-0.5">{selectedHub.upcomingMeetup}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900">Student Lead / Chapter Head:</span>
                <p className="text-slate-600 mt-0.5">{selectedHub.lead}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedHub(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  toggleJoin(selectedHub.id);
                }}
                className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition flex items-center justify-center gap-1.5 ${
                  joinedHubs.includes(selectedHub.id)
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-300'
                    : 'bg-[#0A1428] text-white hover:bg-[#0F1D38]'
                }`}
              >
                {joinedHubs.includes(selectedHub.id) ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Member of Hub ✓ (Leave)</span>
                  </>
                ) : (
                  <span>Join Community Hub</span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
