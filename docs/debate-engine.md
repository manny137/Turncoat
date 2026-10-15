# Debate Engine (planning only — Phase 3)

```
SETUP → PREPARATION → SIDE_1_ARGUMENT → SWITCH → SIDE_2_ARGUMENT
      → REBUTTAL → CONCLUSION → EVALUATION → RESULTS
```

- Explicit typed state machine, not boolean flags. Handles pause, resume,
  restart, refresh, visibility changes, timer completion, completion, abandonment.
- Durations in one `src/config/debate.config.ts`, user-overridable
  (prep, first argument, second argument, rebuttal, conclusion).
- **The Switch** is the signature moment: freeze, announce ("SWITCH SIDES" +
  DEFEND/OPPOSE), animate, change side label and accent, start second timer.
- **Timer correctness:** authoritative countdown from wall-clock timestamps,
  never rAF accumulation; no negative time; throttling-safe; animation is
  decoupled from correctness.
- **Resilience:** separate local timer state, persisted session state, and
  server sync; survive refresh and brief network loss.
- Future modes plug into the same engine; only Turncoat is built until told otherwise.
