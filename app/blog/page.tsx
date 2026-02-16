import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Блог",
  description: "Блог DEMO-студии: продуктовые и технические материалы по росту сайта и лидогенерации."
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Блог</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Публикуем прикладные материалы для владельцев бизнеса, маркетологов и продуктовых команд.
      </p>

      <div className="mt-10 space-y-6">
        {posts.map((post) => (
          <article key={post.slug} className="card">
            <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{post.title}</h2>
            <p className="mt-2 text-slate-300">{post.excerpt}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
            <Link href={`/blog/${post.slug}`} className="mt-4 inline-block">
              Читать →
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
