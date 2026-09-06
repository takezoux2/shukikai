import { describe, expect, it } from "vitest";
import {
  getBranchesJsonLd,
  getBreadcrumbJsonLd,
  getCoursesJsonLd,
  getFaqJsonLd,
  getFullUrl,
  getInstructorsJsonLd,
  getOrganizationJsonLd,
  getWebSiteJsonLd,
  SITE_URL,
} from "./jsonLd";

describe("JSON-LD Generators for AEO", () => {
  it("generates valid Organization schema", () => {
    const org = getOrganizationJsonLd();
    expect(org["@context"]).toBe("https://schema.org");
    expect(org["@type"]).toContain("MartialArtsSchool");
    expect(org.name).toBe("空手道 脩己会 総本部道場");
    expect(org.telephone).toBe("03-3813-7779");
    expect(org.address).toBeDefined();
    expect(org.geo).toBeDefined();
  });

  it("generates valid WebSite schema", () => {
    const website = getWebSiteJsonLd();
    expect(website["@context"]).toBe("https://schema.org");
    expect(website["@type"]).toBe("WebSite");
    expect(website.name).toBe("空手道 脩己会 総本部道場");
    expect(website.url).toBe(SITE_URL);
  });

  it("generates valid BreadcrumbList schema", () => {
    const breadcrumb = getBreadcrumbJsonLd([
      { name: "よくあるご質問", path: "/qa" },
    ]);
    expect(breadcrumb["@context"]).toBe("https://schema.org");
    expect(breadcrumb["@type"]).toBe("BreadcrumbList");
    const items = breadcrumb.itemListElement as Array<{
      position: number;
      name: string;
      item?: string;
    }>;
    expect(items).toHaveLength(2);
    expect(items[0].name).toBe("ホーム");
    expect(items[1].name).toBe("よくあるご質問");
    expect(items[1].item).toContain("/qa");
  });

  it("generates valid FAQPage schema", () => {
    const faq = getFaqJsonLd();
    expect(faq["@context"]).toBe("https://schema.org");
    expect(faq["@type"]).toBe("FAQPage");
    const entities = faq.mainEntity as Array<{
      "@type": string;
      name: string;
      acceptedAnswer: { text: string };
    }>;
    expect(entities.length).toBeGreaterThanOrEqual(4);
    expect(entities[0].name).toContain("何歳から何歳まで入会できますか？");
    expect(entities[0].acceptedAnswer.text).toContain("3歳");
  });

  it("generates valid Instructors Person schemas", () => {
    const instructors = getInstructorsJsonLd();
    expect(instructors).toHaveLength(4);
    expect(instructors[0].name).toBe("林 正秀");
    expect(instructors[0].jobTitle).toContain("会長");
    expect(instructors[1].name).toBe("岩永 強");
    expect(instructors[2].name).toBe("石山 昌憲");
    expect(instructors[3].name).toBe("安田 晃樹");
  });

  it("generates valid Branches schema", () => {
    const branches = getBranchesJsonLd();
    expect(branches["@type"]).toBe("ItemList");
    const items = branches.itemListElement as Array<unknown>;
    expect(items.length).toBeGreaterThanOrEqual(8);
  });

  it("generates valid Courses schema", () => {
    const courses = getCoursesJsonLd();
    expect(courses["@type"]).toBe("ItemList");
    const items = courses.itemListElement as Array<{
      item: { name: string; offers?: { price: string } };
    }>;
    expect(items.length).toBeGreaterThanOrEqual(3);
    expect(items[0].item.name).toContain("キッズ");
  });

  it("formats full URLs correctly", () => {
    const relativeUrl = getFullUrl("/img/pc/photo01.png");
    expect(relativeUrl).toMatch(/^https:\/\//);
    const absoluteUrl = getFullUrl("https://example.com/test.png");
    expect(absoluteUrl).toBe("https://example.com/test.png");
  });
});
