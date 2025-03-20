import { createClient } from '@supabase/supabase-js'

// 環境変数を切り替え
const supabaseUrl =
  process.env.NODE_ENV === 'development'
    ? process.env.SUPABASE_URL
    : process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabaseKey =
  process.env.NODE_ENV === 'development'
    ? process.env.SUPABASE_SERVICE_ROLE_KEY
    : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;


const supabase = createClient(
  supabaseUrl,
  supabaseKey,
  {
    auth:{
      autoRefreshToken: false,
      persistSession: false,
    }
  }
)



export default supabase 