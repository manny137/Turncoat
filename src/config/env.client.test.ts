import { describe, expect, it, vi } from "vitest";

vi.stubEnv("NEXT_PUBLIC_SUPABASE_URL", "https://example.supabase.co");
vi.stubEnv("NEXT_PUBLIC_SUPABASE_ANON_KEY", "anon");

describe("parseClientEnv", () => {
  it("accepts valid values and defaults the site URL", async () => {
    const { parseClientEnv } = await import("./env.client");
    const env = parseClientEnv({
      NEXT_PUBLIC_SUPABASE_URL: "https://x.supabase.co",
      NEXT_PUBLIC_SUPABASE_ANON_KEY: "k",
    });
    expect(env.NEXT_PUBLIC_SITE_URL).toBe("http://localhost:3000");
  });

  it("throws on an invalid Supabase URL", async () => {
    const { parseClientEnv } = await import("./env.client");
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() =>
      parseClientEnv({ NEXT_PUBLIC_SUPABASE_URL: "nope", NEXT_PUBLIC_SUPABASE_ANON_KEY: "k" }),
    ).toThrow();
    spy.mockRestore();
  });
});
