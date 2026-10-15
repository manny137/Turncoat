# Design System — Premium Cosmic Academia

Deep black, midnight blue, electric blue, subtle white, restrained cyan,
deep-space gradients, restrained glow. Not neon-everywhere, not cyberpunk.
"An intelligent civilization's interface for thinking."

## Tokens (in `src/app/globals.css`)
- Space: `void #05060a`, `midnight #0a0e1a`, `midnight-elevated #10152a`, `nebula #161c33`
- Accent: `electric-blue #3b82f6` (+dim), `cyan #22d3ee` (+dim) — used sparingly
- Sides: `defend #3b82f6`, `oppose #ef4444` (semantic, used across the debate engine)
- Text: `cosmic-white`, `cosmic-muted`, `cosmic-faint`
- Semantic: `success`, `warning`, `danger`
- Fonts: Inter (`font-sans`), Space Grotesk (`font-display`) via `next/font`
- Radii: sm 6 / md 10 / lg 16 / xl 24 px
- Glow: `shadow-glow-sm|md|cyan` — focus, active timers, the Switch only; `shadow-card`

## Base behavior
Dark color scheme, visible cyan `:focus-visible` ring, global reduced-motion
safety net (component-level degradation still required in Phase 1+).

## Deferred
Component library (buttons, cards, inputs, tabs, badges, modals, nav, timers,
progress, notification/empty/loading/error states), motion tokens, landing page.
Every component must cover loading, empty, error, hover, focus, disabled,
active, selected, mobile.
