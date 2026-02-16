import type { Metadata } from "next";
import Link from "next/link";
import { getAllServices } from "@/lib/content";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Системное администрирование, ИБ, сети и интеграции гос-систем: аудит, внедрение и сопровождение."
};

const guarantees = [
  "Приоритизация критичных рисков и инцидентов",
  "Прозрачный план работ и смета",
  "Документация по итогам внедрения",
  "Сопровождение после запуска"
];

export default function ServicesPage() {
  const services = getAllServices();

  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">ИТ-услуги и сопровождение</h1>
      <p className="mt-4 max-w-3xl text-slate-300">
        Закрываю эксплуатационные и инфраструктурные задачи: от поддержки пользователей и серверов до
        настройки сети, hardening и интеграции с гос-системами.
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
              <span className="text-cyan-300">{service.priceFrom}</span>
              <Link href={`/services/${service.slug}`}>Детали →</Link>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        <article className="card">
          <h2 className="text-xl font-semibold text-white">Подход к работе</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            {guarantees.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>

        <article className="card">
          <h2 className="text-xl font-semibold text-white">Нужен аудит и план?</h2>
          <p className="mt-3 text-slate-300">
            Отправьте текущую проблему или описание инфраструктуры — подготовлю план работ, оценку
            рисков и смету по этапам.
          </p>
          <Link href="/contact" className="mt-4 inline-block rounded-xl bg-accent px-5 py-2 text-white">
            Получить аудит
          </Link>
        </article>
      </div>
    </section>
  );
}
