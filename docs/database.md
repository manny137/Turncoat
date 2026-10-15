# Database

**Status:** no schema yet. `src/types/database.ts` is an empty placeholder
wired into typed clients; swap for generated types later.

PostgreSQL via Supabase. RLS is the authorization boundary.

## Anticipated entities (introduce incrementally, with RLS in the same migration)
profiles, user_preferences, topics, topic_translations, topic_sources,
news_items, news_sources, debate_sessions, debate_phases, debate_results,
evaluations, achievements, user_achievements, user_stats, challenges,
user_challenges, leaderboard_snapshots, categories, languages, admin_actions.

## Constraints
- Multiplayer-ready: don't bake "exactly one participant" into sessions.
- Topics: real columns/relations for category, subcategory, difficulty, source
  type, current-affairs relevance, geography, UPSC/GS relevance, ethical
  dimension, tags, source refs, validation status, active flag.
- Language variants via `topic_translations`.
- `admin_actions` is an audit log from day one.

First migration lands in Phase 3.
