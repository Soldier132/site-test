import type { MetadataRoute } from "next";
import { getAllPosts, getAllServices } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

  const staticPages = ["", "/services", "/blog", "/contact"].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));

  const servicePages = getAllServices().map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date()
  }));

  const blogPages = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.date)
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
