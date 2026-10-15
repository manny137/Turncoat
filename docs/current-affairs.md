# Current Affairs (planning only — Phase 5)

```
SOURCE → INGEST → NORMALIZE → DEDUPLICATE → CLASSIFY → RELEVANCE SCORE
 → AI ANALYSIS → TOPIC GENERATION → VALIDATION → DATABASE → USER
```

- Frontend never reads raw feeds; only validated database records.
- `NewsProvider` interface with a labeled mock first; no vendor is load-bearing.
- Preferred sources: PIB, ministries, Parliament/PRS, reputable Indian and
  international press, scientific publications, institutional releases.
- No reckless scraping: use APIs, RSS, licensed or public sources; respect ToS.
  Store attribution (source, date, URL) on every item.
- **Debate this:** motions must be debatable, not restated headlines, two
  defensible sides, no distortion or inflammatory language, with source context.
- UI shows source, publication date, relevant date, category, why it matters,
  related motion; actions "Read context" and "Debate this".
- Seed data is clearly marked and never passed off as real events.
