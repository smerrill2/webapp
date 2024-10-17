// src/lib/supabaseServerClient.ts

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

// Temporary logging for debugging purposes
console.log('Supabase URL:', supabaseUrl);
// Avoid logging the service key to prevent security risks
// console.log('Supabase Service Key:', supabaseServiceKey);

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Missing Supabase URL or Service Key in environment variables.');
}

export const supabaseServer = createClient(supabaseUrl, supabaseServiceKey);