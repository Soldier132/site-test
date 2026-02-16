import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Пакеты разработки: лендинг, корпоративный сайт и SEO-сопровождение с прозрачными этапами."
};

const guarantees = [
  "Фиксируем scope и дедлайны до старта",
  "Еженедельный статус-репорт",
  "SEO-фундамент в базовой поставке",
  "Передаем проект с понятной документацией"
];

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Услуги и пакеты</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Ниже — DEMO-линейка услуг для B2B/B2C сервисных компаний. Каждый пакет можно масштабировать
        под ваши процессы и команду.
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
            <div className="mt-5 flex items-center justify-between gap-3">
              <span className="text-blue-300">от {service.priceFrom}</span>
              <Link href={`/services/${service.slug}`}>Детали →</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Что входит в любой пакет</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {guarantees.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2 className="text-xl font-semibold text-white">Нужен индивидуальный scope?</h2>
          <p className="mt-3 text-slate-300">
            Соберем solution под ваши цели: мультиязычность, интеграции с CRM/ERP, кабинет клиента,
            автоматизация заявок и аналитика по воронке.
          </p>
          <Link href="/contact" className="mt-4 inline-block rounded-xl bg-accent px-5 py-2 text-white">
            Получить персональное предложение
          </Link>
        </article>
      </div>
    </section>
  );
}
