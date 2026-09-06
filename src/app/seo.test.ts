import { describe, expect, it } from "vitest";
import robots from "./robots";
import sitemap from "./sitemap";

describe("SEO / AEO Route Handlers", () => {
  it("generates sitemap entries for all main pages", () => {
    const entries = sitemap();
    expect(entries.length).toBeGreaterThanOrEqual(10);
    const urls = entries.map((e) => e.url);
    expect(urls.some((url) => url.endsWith("/class"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/info"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/qa"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/branch"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/instructor"))).toBe(true);
    expect(urls.some((url) => url.endsWith("/access"))).toBe(true);
  });

  it("generates robots.txt with AI crawlers allowed", () => {
    const config = robots();
    expect(config.sitemap).toContain("sitemap.xml");
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
    expect(rules.length).toBeGreaterThanOrEqual(2);
    const aiRule = rules.find((r) => Array.isArray(r.userAgent));
    expect(aiRule?.userAgent).toContain("GPTBot");
    expect(aiRule?.userAgent).toContain("PerplexityBot");
    expect(aiRule?.userAgent).toContain("ClaudeBot");
  });
});
