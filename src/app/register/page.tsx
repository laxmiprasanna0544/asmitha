'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { User, Building2, GraduationCap, ArrowRight, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useAuth, UserRole } from '@/context/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { signUpWithPassword, signInWithGoogle } = useAuth();

  const [role, setRole] = useState<UserRole>('student');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Common Fields
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Role Specific Fields
  const [fullName, setFullName] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const [degree, setDegree] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [institutionName, setInstitutionName] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match. Please verify.');
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);

    try {
      let metadata: Record<string, any> = {
        role,
        profile_completed: false
      };

      if (role === 'student') {
        metadata = {
          ...metadata,
          full_name: fullName,
          college: collegeName,
          degree: degree,
          career_score: 50
        };
      } else if (role === 'company') {
        metadata = {
          ...metadata,
          company_name: companyName,
          contact_person: fullName
        };
      } else {
        metadata = {
          ...metadata,
          institution_name: institutionName,
          contact_person: fullName
        };
      }

      const { error } = await signUpWithPassword(email, password, metadata);

      if (error) {
        setErrorMsg(error.message || 'Registration could not be completed.');
        setLoading(false);
        return;
      }

      // Successful registration: redirect to onboarding for students or respective dashboard
      if (role === 'student') {
        router.push('/student/onboarding');
      } else if (role === 'company') {
        router.push('/company/dashboard');
      } else {
        router.push('/colleges/dashboard');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An unexpected error occurred during signup.');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setGoogleLoading(true);
    setErrorMsg(null);
    try {
      const { error } = await signInWithGoogle(role);
      if (error) {
        setErrorMsg(error.message || 'Google signup failed.');
        setGoogleLoading(false);
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Google OAuth encountered an error.');
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 py-12">
      <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-8 max-w-lg w-full space-y-6">
        
        <div className="text-center space-y-2">
          <Logo size="md" />
          <h1 className="text-2xl font-extrabold text-[#0A1428] pt-2">Join PehlaChance</h1>
          <p className="text-xs text-slate-500">Create your account and unlock your first opportunity</p>
        </div>

        {/* Role Selector Tabs */}
        <div className="grid grid-cols-3 gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            type="button"
            onClick={() => setRole('student')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'student' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <User className="w-4 h-4 text-amber-400" />
            <span>Student</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('company')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'company' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-amber-400" />
            <span>Company</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('college')}
            className={`py-2.5 rounded-lg text-xs font-bold transition flex items-center justify-center gap-1.5 ${
              role === 'college' ? 'bg-[#0A1428] text-white shadow' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <GraduationCap className="w-4 h-4 text-amber-400" />
            <span>College</span>
          </button>
        </div>

        {/* Continue with Google */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
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
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">or sign up with email</span>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {errorMsg && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-xs rounded-xl font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4 text-xs">
          <div>
            <label className="font-bold text-slate-800 block mb-1">
              {role === 'student' ? 'Full Name' : role === 'company' ? 'Contact Person Name' : 'Administrator Name'}
            </label>
            <input
              type="text"
              required
              placeholder={role === 'student' ? 'Aarav Sharma' : 'Name'}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          <div>
            <label className="font-bold text-slate-800 block mb-1">
              {role === 'student' ? 'Student / Personal Email' : role === 'company' ? 'Official Work Email' : 'Official Institutional Email'}
            </label>
            <input
              type="email"
              required
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
            />
          </div>

          {role === 'student' && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-bold text-slate-800 block mb-1">College / University</label>
                <input
                  type="text"
                  required
                  placeholder="VIT, DTU, etc."
                  value={collegeName}
                  onChange={(e) => setCollegeName(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
              <div>
                <label className="font-bold text-slate-800 block mb-1">Degree & Major</label>
                <input
                  type="text"
                  required
                  placeholder="B.Tech CSE"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                />
              </div>
            </div>
          )}

          {role === 'company' && (
            <div>
              <label className="font-bold text-slate-800 block mb-1">Company / Organization Name</label>
              <input
                type="text"
                required
                placeholder="ScaleVantage Labs"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          )}

          {role === 'college' && (
            <div>
              <label className="font-bold text-slate-800 block mb-1">Institution Name</label>
              <input
                type="text"
                required
                placeholder="Delhi Technological University"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          )}

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="font-bold text-slate-800 block mb-1">Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
            <div>
              <label className="font-bold text-slate-800 block mb-1">Confirm Password</label>
              <input
                type="password"
                required
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#0A1428] hover:bg-[#0F1D38] text-white font-bold py-3 rounded-xl shadow flex items-center justify-center gap-2 transition disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-amber-400" />
                <span>Creating Account...</span>
              </>
            ) : (
              <>
                <span>Complete {role.toUpperCase()} Sign Up</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </>
            )}
          </button>
        </form>

        <div className="text-center text-xs text-slate-500 pt-2 border-t border-slate-100">
          Already registered?{' '}
          <Link href="/login" className="font-bold text-amber-600 hover:underline">
            Sign In
          </Link>
        </div>

      </div>
    </div>
  );
}
