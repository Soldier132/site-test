import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt
  };
}

export default async function BlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="container py-16">
      <p className="text-sm text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
      <h1 className="mt-2 text-4xl font-bold">{post.title}</h1>
      <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white">
        <MDXRemote source={post.body} />
      </div>
    </article>
  );
}
