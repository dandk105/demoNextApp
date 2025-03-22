

export function getEnv(): { supabaseUrl: string; supabaseKey: string } {
  // 環境変数を切り替え
  const supabaseUrl =
    process.env.NODE_ENV === "development"
      ? process.env.SUPABASE_URL
      : process.env.NEXT_PUBLIC_SUPABASE_URL;

  const supabaseKey =
    process.env.NODE_ENV === "development"
      ? process.env.SUPABASE_SERVICE_ROLE_KEY
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl) {
    throw new Error(
      "Missing environment variable: SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL"
    );
  }

  if (!supabaseKey) {
    throw new Error(
      "Missing environment variable: SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY"
    );
  }
  return { supabaseUrl, supabaseKey };
}