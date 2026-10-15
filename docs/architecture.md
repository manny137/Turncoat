# Architecture

| Layer | Choice |
|---|---|
| Framework | Next.js 15 App Router |
| Language | TypeScript strict |
| UI | React 19 |
| Styling | Tailwind v4 (CSS-first `@theme`) |
| Animation | Motion — added in Phase 1 |
| 3D | React Three Fiber — Phase 1, only where justified |
| Data/Auth | Supabase (Postgres, Auth, Storage) |
| Validation | Zod |
| Testing | Vitest |

## Layout
```
src/app/            routes, layout, globals.css (tokens)
src/config/         site.ts, env.client.ts, env.server.ts
src/lib/supabase/   client / server / middleware
src/lib/utils/      cn
src/types/          database.ts (placeholder)
src/components/     empty until Phase 1/2
supabase/migrations empty until Phase 3
docs/
```

## Boundaries
- `src/config`: pure configuration; env access only in the two env modules.
- `src/lib/supabase`: the only place clients are created.
- Provider interfaces (`AIProvider`, `NewsProvider`, `SpeechProvider`,
  `TranslationProvider`) live under `src/lib/providers/*`, each with a mock.
- Client components use `client.ts` + `clientEnv`; server code uses
  `server.ts` + `serverEnv`. `server-only` enforces this at build time.

## Extensibility
- Debate engine must not hardcode Turncoat as the only mode.
- Session model must not assume exactly one participant (future multiplayer).
- Topics are structured, never a flat list.

## Not in Phase 0
Debate engine, topics, current affairs, AI, i18n UI, gamification, admin,
landing page (`page.tsx` is a plain placeholder).
