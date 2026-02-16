import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllServices, getServiceBySlug } from "@/lib/content";

type Params = { slug: string };

export async function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.excerpt
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <article className="container py-16">
      <p className="text-sm text-blue-300">Пакет от {service.priceFrom}</p>
      <h1 className="mt-2 text-4xl font-bold">{service.title}</h1>
      <div className="prose prose-invert mt-8 max-w-none prose-headings:text-white">
        <MDXRemote source={service.body} />
      </div>
    </article>
  );
}
