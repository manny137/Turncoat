import { z } from "zod";

/**
 * Browser-safe environment. Only NEXT_PUBLIC_* values.
 * Each variable is referenced as a literal `process.env.NEXT_PUBLIC_X`
 * because Next.js inlines them at build time only in that form.
 */
const clientEnvSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

export function parseClientEnv(input: Record<string, unknown>): ClientEnv {
  const parsed = clientEnvSchema.safeParse(input);
  if (!parsed.success) {
    console.error("Invalid public environment variables:", parsed.error.flatten().fieldErrors);
    throw new Error("Invalid environment configuration. Compare .env.local with .env.example.");
  }
  return parsed.data;
}

export const clientEnv = parseClientEnv({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
});
