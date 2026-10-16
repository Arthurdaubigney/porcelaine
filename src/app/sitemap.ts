import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: [string, number][] = [
    ["/", 1],
    ["/estimation", 0.9],
    ["/expertises", 0.8],
    ["/a-propos", 0.6],
    ["/contact", 0.6],
  ];
  return pages.map(([path, priority]) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  }));
}
