import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://jszlsczylpmojobqugvi.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzemxzY3p5bHBtb2pvYnF1Z3ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczNjcwMjksImV4cCI6MjA2Mjk0MzAyOX0.Tu_zqjtMmI6vv3y6ORt5Hh16zq_I58GcZw5z76z0RQk';
export const supabase = createClient(supabaseUrl, supabaseKey);