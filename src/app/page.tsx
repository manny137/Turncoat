import { siteConfig } from "@/config/site";

/**
 * PHASE 0 PLACEHOLDER — proves shell, fonts, tokens and TS compile together.
 * The cinematic landing page is Phase 1.
 */
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-display text-sm tracking-[0.3em] text-cosmic-faint uppercase">
        Phase 0 — Foundation
      </p>
      <h1 className="font-display text-4xl font-semibold text-cosmic-white sm:text-6xl">
        {siteConfig.name}
      </h1>
      <p className="max-w-md text-balance text-cosmic-muted">{siteConfig.tagline}</p>
    </main>
  );
}
