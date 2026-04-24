import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug için buraya bir log atalım, boş mu geliyor görelim:
console.log("URL:", supabaseUrl); 

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL veya Key bulunamadı! .env dosyasını ve VITE_ önekini kontrol edin.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);