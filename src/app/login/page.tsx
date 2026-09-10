'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { User, Building2, GraduationCap, ArrowRight, Loader2, KeyRound, CheckCircle2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth, UserRole } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();
  const { signInWithPassword, signInWithGoogle, loading: authLoading } = useAuth();

  const [role, setRole] = useState<UserRole>('student');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Forgot Password Modal State
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotSent, setForgotSent] = useState(false);
  const [forgotError, setForgotError] = useState<string | null>(null);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const { error, role: resolvedRole } = await signInWithPassword(email, password);

      if (error) {
        setErrorMsg(error.message || 'Invalid email or password. Please try again.');
        setLoading(false);
        return;
      }

      // Route to designated portal
      const targetRole = resolvedRole || role;
      if (targetRole === 'company') {
        router.push('/company/dashboard');
      } else if (targetRole === 'college') {
        router.push('/colleges/dashboard');
      } else {
        router.push('/student/dashboard');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await signInWithGoogle(role);
      if (error) {
        setErrorMsg(error.message || 'Unable to connect to Google OAuth.');
        setGoogleLoading(false);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Google OAuth encountered an error.');
      setGoogleLoading(false);
    }
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotLoading(true);
    setForgotError(null);

    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : '';
      const { error } = await supabase.auth.resetPasswordForEmail(forgotEmail, {
        redirectTo: `${origin}/login?reset=success`
      });

      if (error) {
        setForgotError(error.message);
      } else {
        setForgotSent(true);
      }
    } catch (err: any) {
      setForgotError(err.message || 'Could not send recovery link.');
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 max-w-md w-full space-y-6">
        
        <div className="text-center space-y-2">
          <Logo size="md" />
          <h1 className="text-2xl font-extrabold text-[#0A1428] pt-2">Sign In to PehlaChance</h1>
          <p className="text-xs text-slate-500">Access your verified opportunity workspace</p>
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

        {/* Real Google OAuth Button */}
        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={googleLoading}
          className="w-full bg-white hover:bg-slate-50 text-slate-800 font-bold py-3 px-4 rounded-xl border border-slate-300 shadow-xs flex items-center justify-center gap-3 transition hover:shadow-sm disabled:opacity-60 text-xs"
        >
          {googleLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-amber-500" />
              <span>Connecting to Google...</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span>Continue with Google</span>
            </>
          )}
        </button>

        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-slate-200" />
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">or sign in with email</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

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
            <div className="flex items-center justify-between mb-1">
              <label className="font-bold text-slate-800">Password</label>
              <button
                type="button"
                onClick={() => {
                  setForgotEmail(email);
                  setShowForgotModal(true);
                }}
                className="text-[11px] font-bold text-amber-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
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
            disabled={loading}
            className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold py-3 rounded-xl shadow flex items-center justify-center gap-2 transition disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                <span>Signing In...</span>
              </>
            ) : (
              <>
                <span>Sign In to {role.toUpperCase()} Portal</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Don't have an account?{' '}
          <Link href="/register" className="font-bold text-amber-600 hover:underline">
            Create account
          </Link>
        </div>

      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs" onClick={() => setShowForgotModal(false)} />
          <div className="bg-white rounded-3xl max-w-sm w-full p-6 z-10 shadow-2xl border border-slate-200 space-y-4 animate-fade-in relative">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <KeyRound className="w-5 h-5" />
            </div>

            <div className="space-y-1">
              <h3 className="text-base font-extrabold text-slate-900">Reset your password</h3>
              <p className="text-xs text-slate-500">
                Enter your registered email and we'll send a password recovery link.
              </p>
            </div>

            {forgotSent ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center">
                <CheckCircle2 className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-900">Recovery Link Sent!</p>
                <p className="text-[11px] text-emerald-700">Please check your inbox at {forgotEmail} to reset your password.</p>
                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="mt-2 w-full py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPasswordSubmit} className="space-y-3">
                {forgotError && (
                  <div className="p-2 bg-rose-50 text-rose-700 text-xs rounded-lg">
                    {forgotError}
                  </div>
                )}
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="name@domain.com"
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(false)}
                    className="flex-1 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={forgotLoading}
                    className="flex-1 py-2 bg-[#0A1428] text-white font-bold text-xs rounded-xl flex items-center justify-center gap-1.5"
                  >
                    {forgotLoading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : 'Send Link'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
