'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { 
  LayoutDashboard, 
  UserCheck, 
  Briefcase, 
  FileText, 
  Sparkles, 
  Calendar, 
  BookOpen, 
  Users, 
  Building2, 
  GraduationCap, 
  TrendingUp, 
  Bell, 
  Search, 
  ChevronDown, 
  LogOut,
  Menu,
  X,
  Bookmark,
  Award,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  badge?: string;
}

interface RoleConfig {
  name: string;
  user: { name: string; detail: string; avatar: string };
  nav: NavItem[];
}

interface DashboardShellProps {
  role: 'student' | 'company' | 'college';
  children: React.ReactNode;
}

export const DashboardShell: React.FC<DashboardShellProps> = ({ role, children }) => {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const roleConfigs: Record<'student' | 'company' | 'college', RoleConfig> = {
    student: {
      name: 'Student Portal',
      user: { name: 'Aarav Sharma', detail: 'VIT Chennai • CSE 2026', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
      nav: [
        { label: 'Dashboard', href: '/student/dashboard', icon: LayoutDashboard },
        { label: 'My Profile', href: '/student/dashboard?tab=profile', icon: UserCheck },
        { label: 'Opportunities', href: '/opportunities', icon: Briefcase },
        { label: 'Applications', href: '/student/dashboard?tab=applications', icon: FileText },
        { label: 'Saved Roles', href: '/student/dashboard?tab=saved', icon: Bookmark },
        { label: 'AI Resume Builder', href: '/resume-builder', icon: Sparkles, badge: 'AI' },
        { label: 'AI Career Tools', href: '/ai-career-tools', icon: Award },
        { label: 'Events & Bootcamps', href: '/events', icon: Calendar },
        { label: 'Career Journal', href: '/career-journal', icon: BookOpen },
        { label: 'Campus Community', href: '/ambassador', icon: Users },
      ]
    },
    company: {
      name: 'Employer Portal',
      user: { name: 'ScaleVantage Talent Team', detail: 'Verified Employer • Tech & SaaS', avatar: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80' },
      nav: [
        { label: 'Dashboard', href: '/company/dashboard', icon: LayoutDashboard },
        { label: 'Company Profile', href: '/company/dashboard?tab=profile', icon: Building2 },
        { label: 'Post Opportunity', href: '/companies/post-opportunity', icon: Briefcase, badge: 'New' },
        { label: 'Candidate Discovery', href: '/companies/find-talent', icon: Search },
        { label: 'Applications', href: '/company/dashboard?tab=applications', icon: FileText },
        { label: 'Interviews & Pipeline', href: '/company/dashboard?tab=pipeline', icon: UserCheck },
        { label: 'Hires & Placement', href: '/company/dashboard?tab=hires', icon: Award },
        { label: 'Hiring Analytics', href: '/company/dashboard?tab=analytics', icon: TrendingUp },
      ]
    },
    college: {
      name: 'Institutional Portal',
      user: { name: 'Dr. R. K. Varma', detail: 'Director of Placement • DTU Delhi', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
      nav: [
        { label: 'Dashboard', href: '/college/dashboard', icon: LayoutDashboard },
        { label: 'Student Directory', href: '/college/dashboard?tab=students', icon: GraduationCap },
        { label: 'Departments', href: '/college/dashboard?tab=departments', icon: Building2 },
        { label: 'Campus Drives', href: '/colleges/career-ready-campus', icon: Briefcase },
        { label: 'Partner Companies', href: '/companies', icon: Users },
        { label: 'Upcoming Events', href: '/events', icon: Calendar },
        { label: 'Career Readiness', href: '/colleges/career-ready-campus', icon: Sparkles },
        { label: 'Analytics & Reports', href: '/college/dashboard?tab=reports', icon: TrendingUp },
      ]
    }
  };

  const currentRole = roleConfigs[role];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Top Navbar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              <Menu className="w-5 h-5" />
            </button>
            <Logo size="sm" />
            <span className="hidden sm:inline-block text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md border border-slate-200">
              {currentRole.name}
            </span>
          </div>

          {/* Search & Profile Actions */}
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search dashboard..."
                className="w-full bg-slate-100 border border-slate-200 text-xs rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </div>

            <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-2 right-2 ring-2 ring-white" />
            </button>

            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={currentRole.user.avatar} alt="User" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block text-left">
                <span className="text-xs font-bold text-slate-900 block leading-tight">{currentRole.user.name}</span>
                <span className="text-[10px] text-slate-500 font-medium block leading-tight">{currentRole.user.detail}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout Container */}
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0A1428] text-slate-300 transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto pt-16 lg:pt-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-4 flex flex-col justify-between h-full">
            <div>
              <div className="px-3 py-2 mb-4 bg-slate-900/80 rounded-lg border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{role} Portal</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 font-bold px-1.5 py-0.5 rounded">Active</span>
              </div>

              <nav className="space-y-1">
                {currentRole.nav.map((item, idx) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={idx}
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-semibold transition ${
                        isActive 
                          ? 'bg-amber-500 text-slate-950 font-bold' 
                          : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                          isActive ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'
                        }`}>
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-4 border-t border-slate-800">
              <Link
                href="/login"
                className="flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              >
                <LogOut className="w-4 h-4 text-slate-400" />
                <span>Sign Out</span>
              </Link>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
