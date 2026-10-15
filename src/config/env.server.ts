import "server-only";
import { z } from "zod";
import { clientEnv } from "./env.client";

/**
 * Server-only environment (includes secrets). The `server-only` import makes
 * the build fail if this module is ever pulled into a client bundle.
 */
const serverEnvSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional(),
  AI_PROVIDER: z.enum(["anthropic", "mock"]).default("mock"),
  ANTHROPIC_API_KEY: z.string().min(1).optional(),
  NEWS_PROVIDER: z.enum(["mock"]).default("mock"),
});

const parsed = serverEnvSchema.safeParse({
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || undefined,
  AI_PROVIDER: process.env.AI_PROVIDER || undefined,
  ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY || undefined,
  NEWS_PROVIDER: process.env.NEWS_PROVIDER || undefined,
});

if (!parsed.success) {
  console.error("Invalid server environment variables:", parsed.error.flatten().fieldErrors);
  throw new Error("Invalid server environment configuration. Compare .env.local with .env.example.");
}

export const serverEnv = { ...clientEnv, ...parsed.data };
