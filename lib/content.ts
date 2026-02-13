import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { Post, Service } from "@/lib/types";

function readDirContent(dir: string) {
  const full = path.join(process.cwd(), dir);
  return fs.readdirSync(full).filter((file) => file.endsWith(".mdx"));
}

export function getAllServices(): Service[] {
  return readDirContent("content/services")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(process.cwd(), "content/services", file), "utf8");
      const { data, content } = matter(source);
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        priceFrom: data.priceFrom,
        features: data.features ?? [],
        body: content
      } as Service;
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getServiceBySlug(slug: string): Service | null {
  return getAllServices().find((s) => s.slug === slug) ?? null;
}

export function getAllPosts(): Post[] {
  return readDirContent("content/blog")
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(process.cwd(), "content/blog", file), "utf8");
      const { data, content } = matter(source);
      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags ?? [],
        body: content
      } as Post;
    })
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export function getPostBySlug(slug: string): Post | null {
  return getAllPosts().find((p) => p.slug === slug) ?? null;
}
