import { createClient } from '@supabase/supabase-js'

// بنجيب بيانات الاتصال من المتغيرات اللي حطيناها في Vercel
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

// بننشئ عميل Supabase عشان نقدر نستخدمه في باقي المشروع
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
