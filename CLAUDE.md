# CLAUDE.md — Turncoat Project Memory

Read this before touching code. Deeper detail lives in `/docs`.

## Identity
**Turncoat** — "Master the art of changing your mind." A premium, cinematic,
multilingual debating platform. Flagship: the **Turncoat debate** (argue one
side, forced switch, argue the opposite, get evaluated). Primary audience:
UPSC aspirants; also students, debaters, general public. Must feel premium
and cosmic — never a government-portal look, never cheap cyberpunk.
Signature: THINK. DEFEND. SWITCH.

## Current phase
**Phase 0 — Foundation: files authored, NOT yet verified.**
The authoring sandbox had no network, so `npm install`, lint, typecheck,
tests and build have not been run. First action in any new session:
`npm install && npm run typecheck && npm run lint && npm run test && npm run build`
and fix anything that surfaces (package versions are caret ranges chosen
from memory).

Not implemented (do not assume): landing page, app shell, debate engine,
topics DB, current affairs, AI, i18n UI, gamification, leaderboard, voice,
multiplayer, admin. See `docs/roadmap.md`. Do not build ahead of the
current phase without explicit instruction.

## Architecture
- Next.js 15 App Router, React 19, TypeScript strict (`noUncheckedIndexedAccess`).
- Tailwind v4, CSS-first tokens in `src/app/globals.css` `@theme`
  (`--color-void` → `bg-void`). No `tailwind.config.ts`.
- Supabase via `@supabase/ssr`: `src/lib/supabase/{client,server,middleware}.ts`.
  Never create Supabase clients elsewhere.
- Env: `src/config/env.client.ts` (NEXT_PUBLIC_* only, browser-safe) and
  `src/config/env.server.ts` (secrets, guarded by `server-only`). Never read
  `process.env` elsewhere.
- Layers kept separate: `src/config` (structure), `src/data` (Phase 4 topics/seeds),
  i18n layer (Phase 7), `src/lib/providers/*` (AI/News/Speech/Translation interfaces,
  each with a labeled mock).

## Conventions
1. No magic numbers (durations, XP thresholds) — central config only.
2. No scattered hardcoded translated strings; wait for the Phase 7 i18n layer,
   but use logical CSS properties (`ms-*`, `ps-*`) from now for RTL readiness.
3. No provider lock-in; mock providers must be clearly labeled.
4. No placeholder presented as finished (no fake AI scores).
5. Smallest coherent change; inspect before modifying; preserve working behavior.
6. `server.ts` and `env.server.ts` are server-only; never import into `"use client"` files.
7. Secrets never reach the client.
8. Every migration ships with its RLS policies.

## Commands
```bash
npm install | npm run dev | npm run build | npm run start
npm run lint | npm run typecheck | npm run test | npm run format
```

## Known constraints
- `src/types/database.ts` is a placeholder; regenerate after first migration.
- Middleware only refreshes sessions; no route protection yet.
- `three` / `@react-three/fiber` / `motion` deliberately not installed until Phase 1 needs them.
- `.env.local` is required to run (placeholder Supabase values pass validation).

## Docs index
product · architecture · design-system · database · debate-engine ·
current-affairs · i18n · ai · roadmap · decisions (all in `docs/`).
