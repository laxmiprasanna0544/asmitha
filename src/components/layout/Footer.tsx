import React from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { ShieldCheck, Heart, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1428] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="lg" showTagline />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed mt-2">
              India’s Early-Career Opportunity Ecosystem. Connecting students, colleges, and companies through verified opportunities, professional identity, and career technology.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Verified Ecosystem & Zero Misleading Postings</span>
              </div>
            </div>
          </div>

          {/* Column 2: For Students */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              For Students
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/opportunities" className="hover:text-white transition">
                  Find Internships & Jobs
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Find Projects
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/student/dashboard" className="hover:text-white transition">
                  Build Your Profile
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-white transition flex items-center gap-1">
                  <span>AI Resume Builder</span>
                  <span className="text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.2 rounded font-bold">AI</span>
                </Link>
              </li>
              <li>
                <Link href="/ai-career-tools" className="hover:text-white transition">
                  AI Career Tools
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: For Companies */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              For Companies
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/companies" className="hover:text-white transition">
                  Hire Students
                </Link>
              </li>
              <li>
                <Link href="/companies/post-opportunity" className="hover:text-white transition">
                  Post an Opportunity
                </Link>
              </li>
              <li>
                <Link href="/companies/find-talent" className="hover:text-white transition">
                  Find Talent
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-white transition">
                  Employer Partnerships
                </Link>
              </li>
              <li>
                <Link href="/company/dashboard" className="hover:text-white transition">
                  Company Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: For Colleges & Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              For Colleges & Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/colleges" className="hover:text-white transition">
                  College Partnerships
                </Link>
              </li>
              <li>
                <Link href="/colleges/career-ready-campus" className="hover:text-white transition">
                  Career-Ready Campus
                </Link>
              </li>
              <li>
                <Link href="/colleges/dashboard" className="hover:text-white transition">
                  Institutional Dashboard
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition flex items-center gap-1">
                  <span>Careers</span>
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-bold">Hiring</span>
                </Link>
              </li>
              <li>
                <Link href="/career-journal" className="hover:text-white transition">
                  Career Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  FAQ & Support
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1">
            <span>PehlaChance — Connecting Education, Talent & Opportunity.</span>
          </div>
          <div className="flex items-center gap-6">
            <span>© {new Date().getFullYear()} PehlaChance. All rights reserved.</span>
            <Link href="/faq" className="hover:text-slate-400 transition">
              Student Safety
            </Link>
            <Link href="/faq" className="hover:text-slate-400 transition">
              Report an Opportunity
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
