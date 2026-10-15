# Turncoat

> Master the art of changing your mind.

Phase 0 (Foundation) scaffold. See `CLAUDE.md` and `/docs`.

## Setup
```bash
npm install
cp .env.example .env.local   # placeholder Supabase values pass validation
npm run dev                  # http://localhost:3000
```

## Verify
```bash
npm run typecheck && npm run lint && npm run test && npm run build
```

## Database
No schema yet; first migration arrives in Phase 3 (`supabase/migrations`).
Optional: `npx supabase init` then `npx supabase link` once you create a project.
