import type { MetadataRoute } from "next";
import { CASE_STUDY_SLUGS } from "@/lib/case-studies";

function siteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/^https?:\/\//, "")}`;
  }
  return "http://localhost:3000";
}

const STATIC_PATHS = [
  "/",
  "/about",
  "/services",
  "/talent",
  "/contact",
  "/call",
  "/saudi",
  "/uae"
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8
  }));

  const caseStudyEntries: MetadataRoute.Sitemap = CASE_STUDY_SLUGS.map(
    (slug) => ({
      url: `${base}/case-studies/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7
    })
  );

  return [...staticEntries, ...caseStudyEntries];
}
