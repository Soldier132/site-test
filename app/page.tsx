import Link from "next/link";
import { getAllServices } from "@/lib/content";

export default function HomePage() {
  const services = getAllServices().slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SiteForge Berlin",
    areaServed: "Berlin",
    serviceType: "Веб-разработка",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  };

  return (
    <>
      <section className="container py-20">
        <p className="mb-4 inline-flex rounded-full border border-accent/40 px-4 py-1 text-xs text-blue-300">
          Веб-студия для малого бизнеса в Берлине
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Делаем сайты под ключ: быстро, SEO-готово и с архитектурой на рост.
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          Мы проектируем и запускаем конверсионные сайты: лендинг, услуги, блог, формы,
          аналитика и админка без боли. Запуск MVP — от 7 дней.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-accent px-6 py-3 font-medium text-white">
            Обсудить проект
          </Link>
          <Link href="/services" className="rounded-xl border border-slate-700 px-6 py-3">
            Смотреть услуги
          </Link>
        </div>
      </section>

      <section className="container pb-20">
        <h2 className="mb-8 text-3xl font-semibold">Популярные услуги</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.excerpt}</p>
              <p className="mt-4 text-sm text-blue-300">от {service.priceFrom}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm">
                Подробнее →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
