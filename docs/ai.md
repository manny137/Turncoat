# AI Architecture (planning only — Phase 6)

```
AIProvider: generateTopic · classifyTopic · summarizeNews ·
            evaluateDebate · generateFeedback · translateContent
```

- Implementations: `mock` (labeled, no network) and `anthropic`; chosen by `AI_PROVIDER`.
- Keys are server-side only.
- Generated topics are validated (grounding, neutrality, debate quality, side
  balance, relevance, language, category, difficulty) before display; no invented
  citations; admin approval in Phase 10.
- Evaluation is structured (Zod-validated): argument quality, reasoning,
  evidence, relevance, clarity, articulation, counterargument, adaptability,
  balance, nuance, consistency, current-affairs awareness → overall score,
  strengths, improvements, Side 1 vs Side 2 comparison.
- **Fairness:** never score ideology; score reasoning and ability to defend the assigned side.
- Mock output is never presented as a real evaluation.
