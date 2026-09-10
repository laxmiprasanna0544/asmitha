import React from 'react';
import Link from 'next/link';
import { Logo } from '../shared/Logo';
import { ShieldCheck, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1428] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Master Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="md" />
            
            <p className="text-sm font-bold text-amber-400">
              Every Student Deserves a First Chance.
            </p>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              India's Video-First, AI-Powered Early Career Talent Network. Helping students showcase their potential, discover genuine opportunities, and take their first step into the professional world.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 bg-slate-900/90 border border-slate-800 px-3.5 py-1.5 rounded-full text-xs text-slate-300">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Verified Opportunities & Zero Ghosting</span>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/opportunities" className="hover:text-white transition">
                  Opportunities
                </Link>
              </li>
              <li>
                <Link href="/students" className="hover:text-white transition">
                  For Students
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-white transition">
                  For Companies
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-white transition">
                  For Colleges
                </Link>
              </li>
              <li>
                <Link href="/internships" className="hover:text-white transition">
                  Internships
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Company
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/partner-with-us" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/colleges" className="hover:text-white transition">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers at PehlaChance
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/resources" className="hover:text-white transition">
                  Career Resources
                </Link>
              </li>
              <li>
                <Link href="/career-journal" className="hover:text-white transition">
                  Blog & Career Journal
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Help Centre
                </Link>
              </li>
              <li>
                <Link href="/resume-builder" className="hover:text-white transition flex items-center gap-1">
                  <span>AI Resume Builder</span>
                  <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1 py-0.2 rounded font-bold">AI</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Safety & Scam Shield
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-4">
              Legal
            </h3>
            <ul className="space-y-2.5 text-xs font-medium">
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} PehlaChance. Every Student Deserves a First Chance.</p>
          <div className="flex items-center gap-2 text-slate-400">
            <span>Built for India's Next Generation</span>
            <span>•</span>
            <span className="text-amber-400 font-semibold">Video-First & AI-Powered</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
