import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const pages = [
  { path: "", priority: 1 },
  { path: "/themes", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/why-us", priority: 0.7 },
  { path: "/tools", priority: 0.6 },
  { path: "/privacy", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
