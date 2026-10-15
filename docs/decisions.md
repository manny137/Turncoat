# Decisions Log

## 2026-10-15 — Phase 0
1. Next.js 15 App Router, React 19, TS strict + `noUncheckedIndexedAccess`.
2. Tailwind v4 CSS-first tokens; no `tailwind.config.ts`.
3. Env split into `env.client.ts` (browser-safe) and `env.server.ts`
   (`server-only`) so a single module never evaluates server secrets in the browser.
4. Supabase via `@supabase/ssr`; middleware refreshes sessions only.
5. `motion`, `three`, `@react-three/fiber` deferred to Phase 1.
6. **Authored without network access.** Install, lint, typecheck, tests and
   build were not run. Versions are caret ranges from memory; verify first.
