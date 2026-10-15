/**
 * Site-level configuration. Kept separate from future debate config
 * (debate.config.ts, Phase 3) and topic taxonomy (Phase 4).
 */
export const siteConfig = {
  name: "Turncoat",
  tagline: "Master the art of changing your mind.",
  description:
    "Turncoat is a debating and reasoning platform built around the ability to understand, defend, challenge, and reverse perspectives.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
} as const;

/** Primary navigation skeleton (§9). Most routes don't exist until Phase 2+. */
export const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Turncoat Arena", href: "/arena" },
  { label: "Current Affairs", href: "/current-affairs" },
  { label: "Practice", href: "/practice" },
  { label: "Challenges", href: "/challenges" },
  { label: "Leaderboard", href: "/leaderboard" },
  { label: "Profile", href: "/profile" },
  { label: "Settings", href: "/settings" },
] as const;
