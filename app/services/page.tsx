import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Разработка сайтов, SEO-поддержка и техническое сопровождение в одном пакете."
};

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Услуги</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Выбирайте готовый пакет или соберём индивидуальный scope под ваши цели и бюджет.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.slug} className="card">
            <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
            <p className="mt-3 text-slate-300">{service.excerpt}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {service.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-5 flex items-center justify-between">
              <span className="text-blue-300">от {service.priceFrom}</span>
              <Link href={`/services/${service.slug}`}>Детали →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
