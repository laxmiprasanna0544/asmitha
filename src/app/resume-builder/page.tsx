'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Sparkles, 
  Download, 
  Wand2, 
  Check, 
  Layout, 
  Type, 
  Plus, 
  Trash2, 
  User, 
  GraduationCap, 
  Code, 
  Award, 
  Briefcase,
  FileText
} from 'lucide-react';

export default function ResumeBuilderPage() {
  // Resume Form State
  const [personalInfo, setPersonalInfo] = useState({
    fullName: 'Aarav Sharma',
    email: 'aarav.sharma@vit.ac.in',
    phone: '+91 98765 43210',
    location: 'Chennai, Tamil Nadu',
    linkedin: 'linkedin.com/in/aarav-sharma-dev',
    github: 'github.com/aaravsharma-dev'
  });

  const [education, setEducation] = useState([
    {
      institution: 'Vellore Institute of Technology (VIT)',
      degree: 'B.Tech in Computer Science & Engineering',
      year: '2022 - 2026',
      cgpa: '8.8 / 10.0'
    }
  ]);

  const [skills, setSkills] = useState(['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Git', 'SQL']);

  const [projects, setProjects] = useState([
    {
      title: 'Smart Campus Placement Tracker',
      tech: 'Next.js, Prisma, PostgreSQL',
      date: 'Aug 2026',
      details: 'Built a real-time dashboard for tracking campus placement drives, student applications, and company interview schedules.'
    },
    {
      title: 'AI Resume Keyword Optimizer',
      tech: 'Python, OpenAI API, Flask',
      date: 'Jun 2026',
      details: 'Developed an NLP tool analyzing resume bullet points against job descriptions to suggest action-oriented rewrites.'
    }
  ]);

  // Controls State
  const [activeTemplate, setActiveTemplate] = useState<'modern' | 'minimal' | 'executive'>('modern');
  const [activeFont, setActiveFont] = useState<'sans' | 'mono' | 'serif'>('sans');
  const [activeSpacing, setActiveSpacing] = useState<'compact' | 'normal' | 'spacious'>('normal');
  const [aiEnhanced, setAiEnhanced] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleAiImprove = () => {
    setAiEnhanced(true);
    setProjects([
      {
        title: 'Smart Campus Placement Tracker',
        tech: 'Next.js, Prisma, PostgreSQL',
        date: 'Aug 2026',
        details: 'Architected a scalable Next.js web portal streamlining placement tracking across 12 university departments, cutting application processing time by 40%.'
      },
      {
        title: 'AI Resume Keyword Optimizer',
        tech: 'Python, OpenAI API, Flask',
        date: 'Jun 2026',
        details: 'Engineered an NLP text processing pipeline analyzing student resume bullets against recruiter criteria, improving match scoring precision by 35%.'
      }
    ]);
  };

  const handleDownload = () => {
    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      alert('Your ATS-optimized PDF Resume has been simulated and saved!');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Header Banner */}
          <div className="bg-[#0A1428] text-white rounded-3xl p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 uppercase tracking-wider bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
                <Sparkles className="w-3.5 h-3.5" /> AI Resume Studio
              </div>
              <h1 className="text-3xl font-extrabold text-white tracking-tight">
                AI Resume Builder
              </h1>
              <p className="text-sm text-slate-300 max-w-xl">
                “You know your skills. We’ll help you present them.” Structured, recruiter-approved, and ATS-friendly.
              </p>
            </div>

            {/* Controls Bar */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleAiImprove}
                className={`text-xs font-extrabold px-4 py-2.5 rounded-xl border flex items-center gap-2 transition ${
                  aiEnhanced
                    ? 'bg-emerald-600 text-white border-emerald-500'
                    : 'bg-amber-500 hover:bg-amber-600 text-slate-950 border-amber-400 shadow-sm'
                }`}
              >
                <Wand2 className="w-4 h-4" />
                <span>{aiEnhanced ? 'AI Wording Enhanced ✓' : 'Enhance Wording with AI'}</span>
              </button>

              <button
                onClick={handleDownload}
                disabled={downloading}
                className="text-xs font-bold bg-white text-slate-900 hover:bg-slate-100 px-4 py-2.5 rounded-xl border border-slate-300 shadow-xs flex items-center gap-2 transition"
              >
                <Download className="w-4 h-4 text-amber-600" />
                <span>{downloading ? 'Generating PDF...' : 'Download PDF'}</span>
              </button>
            </div>
          </div>

          {/* Builder Layout: Form Left (5 cols) | Live Preview Right (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Input Form Controls */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Customization Toolbar */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                  <Layout className="w-4 h-4 text-amber-500" /> Styling & Controls
                </h3>

                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setActiveTemplate('modern')}
                    className={`text-xs font-bold p-2.5 rounded-xl border transition ${
                      activeTemplate === 'modern' ? 'bg-[#0A1428] text-white border-[#0A1428]' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    Modern Tech
                  </button>
                  <button
                    onClick={() => setActiveTemplate('executive')}
                    className={`text-xs font-bold p-2.5 rounded-xl border transition ${
                      activeTemplate === 'executive' ? 'bg-[#0A1428] text-white border-[#0A1428]' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    Executive
                  </button>
                  <button
                    onClick={() => setActiveTemplate('minimal')}
                    className={`text-xs font-bold p-2.5 rounded-xl border transition ${
                      activeTemplate === 'minimal' ? 'bg-[#0A1428] text-white border-[#0A1428]' : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    Minimal
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-500" /> Personal Information
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Full Name</label>
                    <input
                      type="text"
                      value={personalInfo.fullName}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Email Address</label>
                    <input
                      type="text"
                      value={personalInfo.email}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Phone Number</label>
                    <input
                      type="text"
                      value={personalInfo.phone}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Location</label>
                    <input
                      type="text"
                      value={personalInfo.location}
                      onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 font-medium focus:outline-none focus:ring-2 focus:ring-amber-500/20"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Code className="w-4 h-4 text-amber-500" /> Technical Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((s, i) => (
                    <span key={i} className="text-xs bg-slate-100 font-semibold text-slate-800 px-3 py-1 rounded-md flex items-center gap-1">
                      {s}
                      <button 
                        onClick={() => setSkills(skills.filter((_, idx) => idx !== i))}
                        className="text-slate-400 hover:text-red-500 ml-1"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Live Resume A4 Preview Container */}
            <div className="lg:col-span-7 sticky top-28">
              <div className="bg-white rounded-2xl border border-slate-300 p-8 sm:p-12 shadow-2xl space-y-6 text-slate-900 min-h-[750px] relative">
                
                {/* Resume Header */}
                <div className={`pb-6 ${activeTemplate === 'modern' ? 'border-b-2 border-slate-900' : 'border-b border-slate-200'}`}>
                  <h1 className="text-2xl font-extrabold text-slate-900 tracking-tight">{personalInfo.fullName}</h1>
                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 mt-2 font-medium">
                    <span>{personalInfo.email}</span>
                    <span>•</span>
                    <span>{personalInfo.phone}</span>
                    <span>•</span>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex gap-4 text-xs text-amber-600 font-bold mt-1">
                    <span>{personalInfo.linkedin}</span>
                    <span>{personalInfo.github}</span>
                  </div>
                </div>

                {/* Section: Education */}
                <div className="space-y-3">
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                    Education & Credentials
                  </h2>
                  {education.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start text-xs">
                      <div>
                        <div className="font-bold text-slate-900">{edu.institution}</div>
                        <div className="text-slate-600">{edu.degree}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-700">{edu.year}</div>
                        <div className="text-emerald-700 font-bold">CGPA: {edu.cgpa}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Section: Projects & Proof of Work */}
                <div className="space-y-4">
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1 flex items-center justify-between">
                    <span>Projects & Verified Proof of Work</span>
                    {aiEnhanced && (
                      <span className="text-[9px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                        AI Impact Enhanced
                      </span>
                    )}
                  </h2>
                  {projects.map((proj, idx) => (
                    <div key={idx} className="space-y-1 text-xs">
                      <div className="flex justify-between items-center font-bold text-slate-900">
                        <span>{proj.title} <span className="font-normal text-slate-500">({proj.tech})</span></span>
                        <span className="text-slate-500 font-medium">{proj.date}</span>
                      </div>
                      <p className="text-slate-700 leading-relaxed pl-2 border-l-2 border-slate-200">
                        {proj.details}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Section: Skills */}
                <div className="space-y-2">
                  <h2 className="text-xs font-extrabold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                    Skills & Competencies
                  </h2>
                  <div className="text-xs font-medium text-slate-800">
                    <span className="font-bold">Languages & Frameworks: </span>
                    {skills.join(', ')}
                  </div>
                </div>

                {/* Bottom Watermark */}
                <div className="pt-8 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                  <span>PehlaChance Verified Profile Resume</span>
                  <span>ATS Score: 96%</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
