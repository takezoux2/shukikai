import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/jsonLd";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/class", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/info", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/schedule", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/access", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/instructor", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/branch", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/qa", changeFrequency: "monthly" as const, priority: 0.8 },
    { path: "/message", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/privacy", changeFrequency: "yearly" as const, priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
