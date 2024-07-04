import { createClient } from '@supabase/supabase-js'

export const useSupabase = () => {
  const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

  return { supabase }
}
