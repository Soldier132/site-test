import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Блог",
  description: "Практические статьи по веб-разработке, SEO и росту конверсии."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Блог</h1>
      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-slate-300">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block">
              Читать →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
