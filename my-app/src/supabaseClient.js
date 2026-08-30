import { createClient } from '@supabase/supabase-js';

const rawUrl = import.meta.env.VITE_SUPABASE_URL || '';
const sanitizedUrl = rawUrl.replace(/\/rest\/v1\/?$/, '');
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || '';

if (!sanitizedUrl || !supabaseKey) {
  console.warn('Supabase environment variables are missing. Data-driven sections will render without live content.');
}

const supabase = sanitizedUrl && supabaseKey
  ? createClient(sanitizedUrl, supabaseKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    })
  : null;

export default supabase;
