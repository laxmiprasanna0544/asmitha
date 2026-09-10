'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Logo } from '../shared/Logo';
import { useAuth } from '@/context/AuthContext';
import { SEEDED_NOTIFICATIONS, NotificationItem } from '@/data/notifications';
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
  CheckCircle2,
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
  const router = useRouter();
  const { profile, signOut } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [headerSearch, setHeaderSearch] = useState('');
  
  // Notifications State
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>(SEEDED_NOTIFICATIONS);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (headerSearch.trim()) {
      router.push(`/opportunities?search=${encodeURIComponent(headerSearch.trim())}`);
    }
  };

  const roleConfigs: Record<'student' | 'company' | 'college', RoleConfig> = {
    student: {
      name: 'Student Portal',
      user: { 
        name: profile?.name || 'Aarav Sharma', 
        detail: `${profile?.college?.split(' ')[0] || 'VIT'} • ${profile?.degree?.split(' ')[0] || 'CSE'} 2026`, 
        avatar: profile?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80' 
      },
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
      user: { 
        name: 'ScaleVantage Talent Team', 
        detail: 'Verified Employer • Tech & SaaS', 
        avatar: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=100&q=80' 
      },
      nav: [
        { label: 'Dashboard', href: '/company/dashboard', icon: LayoutDashboard },
        { label: 'Post Opportunity', href: '/companies/post-opportunity', icon: Briefcase, badge: 'New' },
        { label: 'Candidate Discovery', href: '/companies/find-talent', icon: Search },
        { label: 'Opportunities Marketplace', href: '/opportunities', icon: Building2 },
        { label: 'Applicant Pipeline', href: '/company/dashboard?tab=pipeline', icon: UserCheck },
        { label: 'Campus Drives', href: '/colleges/career-ready-campus', icon: Calendar },
        { label: 'Hiring Analytics', href: '/company/dashboard?tab=analytics', icon: TrendingUp },
      ]
    },
    college: {
      name: 'Institutional Portal',
      user: { 
        name: 'Dr. R. K. Varma', 
        detail: 'Director of Placement • DTU Delhi', 
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' 
      },
      nav: [
        { label: 'Dashboard', href: '/colleges/dashboard', icon: LayoutDashboard },
        { label: 'Student Directory', href: '/colleges/dashboard?tab=students', icon: GraduationCap },
        { label: 'Departments', href: '/colleges/dashboard?tab=departments', icon: Building2 },
        { label: 'Campus Drives', href: '/colleges/career-ready-campus', icon: Briefcase },
        { label: 'Partner Companies', href: '/companies', icon: Users },
        { label: 'Upcoming Events', href: '/events', icon: Calendar },
        { label: 'Career Readiness', href: '/colleges/career-ready-campus', icon: Sparkles },
        { label: 'Analytics & Reports', href: '/colleges/dashboard?tab=reports', icon: TrendingUp },
      ]
    }
  };

  const currentRole = roleConfigs[role];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
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
          <div className="flex items-center gap-3 sm:gap-4 relative">
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={headerSearch}
                onChange={(e) => setHeaderSearch(e.target.value)}
                placeholder="Search opportunities..."
                className="w-full bg-slate-100 border border-slate-200 text-xs rounded-lg pl-9 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
              />
            </form>

            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 text-slate-600 hover:bg-slate-100 rounded-xl relative transition"
                title="Notifications"
              >
                <Bell className="w-5 h-5 text-slate-600" />
                {unreadCount > 0 && (
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500 absolute top-1.5 right-1.5 ring-2 ring-white animate-pulse" />
                )}
              </button>

              {/* Notification Popover Drawer */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 z-50 p-4 space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-extrabold text-slate-900">Notifications</span>
                      {unreadCount > 0 && (
                        <span className="text-[10px] font-bold bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                          {unreadCount} New
                        </span>
                      )}
                    </div>
                    <button
                      onClick={handleMarkAllRead}
                      className="text-[11px] font-bold text-amber-600 hover:underline"
                    >
                      Mark all read
                    </button>
                  </div>

                  <div className="space-y-2 max-h-72 overflow-y-auto">
                    {notifications.map((n) => (
                      <div 
                        key={n.id}
                        className={`p-3 rounded-2xl border text-xs space-y-1 transition ${
                          n.read ? 'bg-white border-slate-100 text-slate-600' : 'bg-amber-50/50 border-amber-200/80 text-slate-900 font-semibold'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-[11px] text-[#0A1428]">{n.title}</span>
                          <span className="text-[10px] text-slate-400 font-normal">{n.timestamp}</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-snug">{n.message}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowNotifications(false)}
                    className="w-full py-1.5 text-center text-xs font-bold text-slate-500 hover:text-slate-800 border-t border-slate-100 pt-2"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>

            {/* Profile Avatar & Details */}
            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-amber-400 shrink-0">
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
                        <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
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
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-bold text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition text-left"
              >
                <LogOut className="w-4 h-4 text-slate-400" />
                <span>Sign Out</span>
              </button>
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
