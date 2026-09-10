'use client';

import React, { createContext, useContext, useEffect, useState, useMemo } from 'react';
import { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/lib/supabase';

export type UserRole = 'student' | 'company' | 'college' | 'admin';

export interface UserProfile {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  avatar?: string;
  headline?: string;
  phone?: string;
  college?: string;
  degree?: string;
  gradYear?: string;
  location?: string;
  skills?: string[];
  careerInterests?: string[];
  careerScore?: number;
  profileStrength?: number;
  bio?: string;
}

interface AuthContextType {
  user: User | null;
  session: Session | null;
  role: UserRole;
  profile: UserProfile | null;
  loading: boolean;
  authError: string | null;
  signInWithPassword: (email: string, password: string) => Promise<{ error: any; role: UserRole }>;
  signUpWithPassword: (email: string, password: string, metadata: Record<string, any>) => Promise<{ error: any }>;
  signInWithGoogle: (preferredRole?: UserRole) => Promise<{ error: any }>;
  signOut: () => Promise<void>;
  updateProfile: (updated: Partial<UserProfile>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [role, setRole] = useState<UserRole>('student');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [authError, setAuthError] = useState<string | null>(null);

  // Helper to construct a unified profile from user + metadata
  const buildProfileFromUser = (currentUser: User): UserProfile => {
    const meta = currentUser.user_metadata || {};
    const detectedRole = (meta.role as UserRole) || 'student';

    const googleName = meta.full_name || meta.name || currentUser.email?.split('@')[0] || 'PehlaChance Pioneer';
    const googleAvatar = meta.avatar_url || meta.picture || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80';

    return {
      id: currentUser.id,
      email: currentUser.email || '',
      name: meta.custom_name || googleName,
      role: detectedRole,
      avatar: meta.custom_avatar || googleAvatar,
      headline: meta.headline || 'Aspiring Software & Product Innovator',
      phone: meta.phone || '+91 98765 43210',
      college: meta.college || 'Vellore Institute of Technology (VIT)',
      degree: meta.degree || 'B.Tech in Computer Science & Engineering',
      gradYear: meta.grad_year || '2026',
      location: meta.location || 'Chennai, Tamil Nadu',
      skills: meta.skills || ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'REST APIs'],
      careerInterests: meta.career_interests || ['Frontend Engineering', 'Full Stack Development', 'AI Systems'],
      careerScore: meta.career_score || 78,
      profileStrength: meta.profile_strength || 82,
      bio: meta.bio || 'Passionate about performant UI architectures and creating high-impact early-career opportunities.'
    };
  };

  useEffect(() => {
    let mounted = true;

    // 1. Initial active session check
    const initSession = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        if (error) {
          console.warn('Supabase getSession notification:', error.message);
        }

        if (mounted) {
          if (data?.session?.user) {
            setSession(data.session);
            setUser(data.session.user);
            const prof = buildProfileFromUser(data.session.user);
            setProfile(prof);
            setRole(prof.role);
          } else {
            // Default demo profile for offline/guest browsing
            setProfile({
              id: 'guest-preview',
              email: 'aarav.sharma@vit.ac.in',
              name: 'Aarav Sharma',
              role: 'student',
              avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
              headline: 'CSE 2026 • Frontend & Full Stack Enthusiast',
              phone: '+91 98765 43210',
              college: 'Vellore Institute of Technology (VIT)',
              degree: 'B.Tech in Computer Science',
              gradYear: '2026',
              location: 'Chennai, Tamil Nadu',
              skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Git', 'SQL'],
              careerInterests: ['Frontend Engineering', 'Product Management'],
              careerScore: 78,
              profileStrength: 82,
              bio: 'Passionate about building intuitive web experiences for Bharat.'
            });
          }
          setLoading(false);
        }
      } catch (err: any) {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    initSession();

    // 2. Real-time auth state changes listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, newSession) => {
        if (!mounted) return;
        setSession(newSession);
        setUser(newSession?.user ?? null);

        if (newSession?.user) {
          const prof = buildProfileFromUser(newSession.user);
          setProfile(prof);
          setRole(prof.role);
        }
        setLoading(false);
      }
    );

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signInWithPassword = async (email: string, password: string) => {
    setAuthError(null);
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setAuthError(error.message);
        return { error, role: 'student' as UserRole };
      }
      if (data.user) {
        const prof = buildProfileFromUser(data.user);
        setUser(data.user);
        setSession(data.session);
        setProfile(prof);
        setRole(prof.role);
        return { error: null, role: prof.role };
      }
      return { error: new Error('User data missing'), role: 'student' as UserRole };
    } catch (err: any) {
      setAuthError(err.message || 'Login failed');
      return { error: err, role: 'student' as UserRole };
    }
  };

  const signUpWithPassword = async (email: string, password: string, metadata: Record<string, any>) => {
    setAuthError(null);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      });
      if (error) {
        setAuthError(error.message);
        return { error };
      }
      return { error: null };
    } catch (err: any) {
      setAuthError(err.message || 'Signup failed');
      return { error: err };
    }
  };

  const signInWithGoogle = async (preferredRole: UserRole = 'student') => {
    setAuthError(null);
    try {
      const origin = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
      const redirectUrl = `${origin}/auth/callback?role=${preferredRole}`;

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          queryParams: {
            access_type: 'offline',
            prompt: 'consent'
          }
        }
      });

      if (error) {
        setAuthError(error.message);
        return { error };
      }

      return { error: null };
    } catch (err: any) {
      setAuthError(err.message || 'Google OAuth failed');
      return { error: err };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (err) {
      console.warn('Sign out completed with notice:', err);
    } finally {
      setUser(null);
      setSession(null);
      setProfile(null);
      setRole('student');
    }
  };

  const updateProfile = (updated: Partial<UserProfile>) => {
    setProfile(prev => {
      if (!prev) return null;
      const next = { ...prev, ...updated };
      return next;
    });
  };

  const value = useMemo(() => ({
    user,
    session,
    role,
    profile,
    loading,
    authError,
    signInWithPassword,
    signUpWithPassword,
    signInWithGoogle,
    signOut,
    updateProfile
  }), [user, session, role, profile, loading, authError]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
