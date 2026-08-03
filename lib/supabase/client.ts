import { createBrowserClient } from '@supabase/ssr'

// Publishable (anon) credentials — safe to expose in client code.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://veusygytgloynbpjluno.supabase.co'
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZldXN5Z3l0Z2xveW5icGpsdW5vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAzMDk4MTgsImV4cCI6MjA4NTg4NTgxOH0.ZMUZMkIDJ0Gp_JsBaqb2UyT4STuUwzWjDqNI-FjOx_w'

export function createClient() {
  return createBrowserClient(SUPABASE_URL, SUPABASE_ANON_KEY)
}
