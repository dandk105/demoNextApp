import { createBrowserClient } from "@supabase/ssr";
import { Database } from "../../interfaces/database.types";
import { getEnv } from "./env";

const { supabaseUrl, supabaseKey } = getEnv();

const supabase = createBrowserClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

export default supabase;
