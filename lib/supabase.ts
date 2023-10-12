import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nbwcrihmaycbzfsyhauv.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5id2NyaWhtYXljYnpmc3loYXV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcxMDM5NzQsImV4cCI6MjAxMjY3OTk3NH0._-nqcrS8GDeiyVeFcaH_GVHpxIsamhNaZnHERUKKlT0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
