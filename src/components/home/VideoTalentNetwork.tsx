'use client';

import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, Video, Award, BookOpen, Layers, ShieldCheck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const VideoTalentNetwork: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'video' | 'identity'>('video');

  const identityLayers = [
    { num: '01', title: 'Verified Profile', desc: 'Accredited university credentials, degree, batch, and verified contact details.' },
    { num: '02', title: 'Proof-of-Work Skills', desc: 'Demonstrated capabilities in languages, frameworks, design tools, and data stacks.' },
    { num: '03', title: 'Live Projects & Repos', desc: 'Real GitHub code proof, live demo links, and peer-reviewed project artifacts.' },
    { num: '04', title: 'AI-Structured Resume', desc: 'Recruiter-friendly, clean markdown format optimized for early-career readability.' },
    { num: '05', title: '60-Second Video Intro', desc: 'Meet the human behind the resume. Articulate ambition, communication, and drive.' }
  ];

  const sampleTalent = [
    {
      name: 'Ananya Sharma',
      college: 'VIT Chennai • CSE 2026',
      role: 'Frontend & UI Engineering',
      duration: '0:48s',
      strength: '94%',
      skills: ['React.js', 'Tailwind', 'Next.js', 'Figma'],
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      pitchQuote: '"I build accessible web applications that load under 1 second."'
    },
    {
      name: 'Rohan Deshmukh',
      college: 'COEP Pune • Mechanical / IoT 2025',
      role: 'Embedded Systems & Robotics',
      duration: '0:54s',
      strength: '91%',
      skills: ['C++', 'Arduino', 'ROS', 'Python'],
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      pitchQuote: '"Built autonomous obstacle-navigating bots for college tech fest."'
    },
    {
      name: 'Sneha Patel',
      college: 'NMIMS Mumbai • BBA 2026',
      role: 'Growth Marketing & Content',
      duration: '0:42s',
      strength: '95%',
      skills: ['SEO', 'Content Strategy', 'Notion', 'Analytics'],
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      pitchQuote: '"Scaled student campus newsletter to 4,000+ weekly subscribers."'
    }
  ];

  return (
    <section className="py-24 bg-[#0A1428] text-white border-b border-slate-800 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-300 px-4 py-1.5 rounded-full text-xs font-bold">
            <Video className="w-3.5 h-3.5 text-amber-400" />
            <span>Video-First Talent Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Meet the Person Behind the Resume.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            A resume can tell a company about your education. <br className="hidden sm:inline" />
            <span className="text-amber-400 font-bold">A video can show them who you are.</span>
          </p>

          <p className="text-xs text-slate-400 italic">
            "Because Potential Cannot Always Fit on One Page."
          </p>
        </div>

        {/* 5 Layers of Professional Identity Grid */}
        <div className="bg-slate-900/90 rounded-3xl p-8 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">Professional Identity Architecture</span>
              <h3 className="text-xl font-extrabold text-white mt-1">Five Layers of a Standout Candidate</h3>
            </div>
            <span className="text-xs text-slate-400 font-medium">Beyond static PDFs • Built for early-career proof</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {identityLayers.map((l, i) => (
              <div key={i} className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-2 hover:border-amber-500/40 transition">
                <span className="text-xs font-mono font-bold text-amber-400">{l.num}</span>
                <h4 className="text-sm font-bold text-white">{l.title}</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Live Talent Video Profiles Showcase */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-extrabold text-white">Featured Video Pitch Introductions</h3>
              <p className="text-xs text-slate-400 mt-0.5">Authentic 60-second introductions from students ready for their first chance.</p>
            </div>
            <span className="hidden sm:inline-block text-xs font-bold text-amber-400">
              Don't Just Apply. Get Discovered.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleTalent.map((t, idx) => (
              <div 
                key={idx}
                className="bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-xl hover:border-amber-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Video Box */}
                  <div className="relative aspect-video overflow-hidden bg-slate-950">
                    <img 
                      src={t.image} 
                      alt={t.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-between p-3.5">
                      <div className="flex justify-between items-center">
                        <span className="bg-[#0A1428]/90 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                          {t.role}
                        </span>
                        <span className="text-[10px] font-mono text-slate-200 bg-black/60 px-2 py-0.5 rounded">
                          {t.duration}
                        </span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                          Strength {t.strength}
                        </span>
                        <div className="w-9 h-9 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                          <Play className="w-4 h-4 fill-slate-950 ml-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-5 space-y-3">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-base font-bold text-white">{t.name}</h4>
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <p className="text-xs text-slate-400 font-medium">{t.college}</p>
                    </div>

                    <p className="text-xs text-slate-300 italic bg-slate-950/60 p-2.5 rounded-xl border border-slate-800">
                      {t.pitchQuote}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {t.skills.map((s, si) => (
                        <span key={si} className="text-[10px] font-semibold bg-slate-800 text-slate-300 px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Link
                    href="/register?role=student"
                    className="w-full bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold py-2 rounded-xl transition text-center block"
                  >
                    View Verified Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              href="/register?role=student"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3 rounded-xl text-xs font-extrabold shadow-lg transition"
            >
              <span>Record Your 60-Second Introduction Video</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
