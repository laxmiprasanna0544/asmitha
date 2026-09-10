import { supabase } from '@/lib/supabase';

// Export the single reusable client instance
export { supabase };

// Backward-compatible helper returning the single client instance
export function createClient() {
  return supabase;
}
