import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo/metadata";
import { services } from "@/lib/content/services";
import { industries } from "@/lib/content/industries";
import { portfolio } from "@/lib/content/portfolio";
import { caseStudies } from "@/lib/content/case-studies";
import { blogPosts } from "@/lib/content/site";

export const dynamic = "force-static";

const buildDate = new Date();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/portfolio",
    "/case-studies",
    "/capabilities",
    "/why-us",
    "/process",
    "/testimonials",
    "/clients",
    "/faq",
    "/careers",
    "/blog",
    "/contact",
    "/privacy",
    "/terms",
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: buildDate,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const dynamicRoutes = [
    ...services.map((s) => `/services/${s.slug}`),
    ...industries.map((i) => `/industries/${i.slug}`),
    ...portfolio.map((p) => `/portfolio/${p.slug}`),
    ...caseStudies.map((c) => `/case-studies/${c.slug}`),
    ...blogPosts.map((b) => `/blog/${b.slug}`),
  ].map((path) => ({
    url: absoluteUrl(path),
    lastModified: buildDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
