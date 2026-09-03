'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { User, Building2, GraduationCap, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<'student' | 'company' | 'college'>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'student') router.push('/student/dashboard');
    else if (role === 'company') router.push('/company/dashboard');
    else router.push('/college/dashboard');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 max-w-md w-full space-y-6">
        
        <div className="text-center space-y-2">
          <Logo size="md" />
          <h1 className="text-2xl font-extrabold text-[#0A1428] pt-2">Sign In to PehlaChance</h1>
          <p className="text-xs text-slate-500">Access your opportunity workspace</p>
        </div>

        {/* Role Toggle */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
              role === 'student' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Student</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('company')}
            className={`py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
              role === 'company' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Company</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('college')}
            className={`py-2 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1 ${
              role === 'college' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>College</span>
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-800 block mb-1">
              {role === 'student' ? 'Student Email' : role === 'company' ? 'Work Email' : 'Official Institutional Email'}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@domain.com"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <div>
            <label className="font-bold text-slate-800 block mb-1">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold py-3 rounded-xl shadow flex items-center justify-center gap-2 transition"
          >
            <span>Sign In to {role.toUpperCase()} Portal</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Don't have an account?{' '}
          <Link href="/register" className="font-bold text-amber-600 hover:underline">
            Get Started
          </Link>
        </div>

      </div>
    </div>
  );
}
