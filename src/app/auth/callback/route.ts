import { NextResponse } from 'next/server';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const roleParam = searchParams.get('role');
  const next = searchParams.get('next');

  if (code) {
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
        'placeholder-key',
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet) {
            try {
              cookiesToSet.forEach(({ name, value, options }) =>
                cookieStore.set(name, value, options)
              );
            } catch {
              // Server component context guard
            }
          },
        },
      }
    );

    const { data, error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error && data?.user) {
      const userMeta = data.user.user_metadata || {};
      const userRole = userMeta.role || roleParam || 'student';
      const isProfileComplete = Boolean(userMeta.profile_completed || userMeta.college);

      // If next path was explicitly provided, respect it
      if (next) {
        return NextResponse.redirect(`${origin}${next}`);
      }

      // Role-based redirection
      if (userRole === 'company') {
        return NextResponse.redirect(`${origin}/company/dashboard`);
      } else if (userRole === 'college') {
        return NextResponse.redirect(`${origin}/colleges/dashboard`);
      } else {
        // Student path: Onboarding for fresh Google sign-ins, Dashboard for completed profiles
        if (!isProfileComplete) {
          return NextResponse.redirect(`${origin}/student/onboarding`);
        }
        return NextResponse.redirect(`${origin}/student/dashboard`);
      }
    }
  }

  return NextResponse.redirect(`${origin}/login?error=Could%20not%20authenticate`);
}
