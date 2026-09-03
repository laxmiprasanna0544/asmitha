'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { Menu, X, ChevronRight, Sparkles, User, Building2, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Find Internships', href: '/internships' },
    { label: 'For Students', href: '/students' },
    { label: 'For Companies', href: '/companies' },
    { label: 'For Colleges', href: '/colleges' },
    { label: 'Opportunities', href: '/opportunities' },
    { label: 'Career Resources', href: '/resources' },
    { label: 'About Us', href: '/about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav py-3 shadow-sm border-b border-slate-200/80'
            : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo */}
            <div className="flex items-center gap-8">
              <Logo size={isScrolled ? 'sm' : 'md'} />
              
              {/* Desktop Nav Links */}
              <nav className="hidden lg:flex items-center gap-6">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-xs font-semibold tracking-tight transition-colors hover:text-amber-600 relative py-1 ${
                        isActive
                          ? 'text-amber-600 font-bold'
                          : 'text-slate-700'
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500 rounded-full" />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Right: Auth Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/login"
                className="text-xs font-bold text-slate-800 hover:text-amber-600 px-3.5 py-2 rounded-lg transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-xs font-bold bg-[#0A1428] hover:bg-[#0F1D38] text-white px-4 py-2 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center gap-1.5 border border-slate-700/40"
              >
                <span>Get Started</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/register"
                className="text-xs font-bold bg-[#0A1428] text-white px-3 py-1.5 rounded-lg flex items-center gap-1"
              >
                <span>Get Started</span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-[65px] right-0 left-0 bg-white border-b border-slate-200 p-6 shadow-xl max-h-[calc(100vh-70px)] overflow-y-auto animate-fade-in">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-2 pb-4 border-b border-slate-100">
                <Link
                  href="/register?role=student"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-amber-400 transition"
                >
                  <User className="w-5 h-5 text-amber-500 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Students</span>
                </Link>
                <Link
                  href="/register?role=company"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-amber-400 transition"
                >
                  <Building2 className="w-5 h-5 text-slate-700 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Companies</span>
                </Link>
                <Link
                  href="/register?role=college"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-slate-50 border border-slate-200 text-center hover:border-amber-400 transition"
                >
                  <GraduationCap className="w-5 h-5 text-slate-700 mb-1" />
                  <span className="text-[11px] font-bold text-slate-800">Colleges</span>
                </Link>
              </div>

              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-2.5 px-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-bold text-slate-800 bg-slate-100 rounded-lg"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0A1428] rounded-lg shadow"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
