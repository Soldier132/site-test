import Link from "next/link";
import { getAllPosts, getAllServices } from "@/lib/content";
import { siteConfig } from "@/lib/site";

const stats = [
  { label: "Опыт эксплуатации", value: "10+ лет" },
  { label: "SLA первичной реакции", value: "1 рабочий день" },
  { label: "Платформы", value: "Windows / Server / Hyper-V" },
  { label: "Профиль", value: "Сети + ИБ + ГосИС" }
];

const processSteps = [
  {
    title: "01. Диагностика",
    text: "Собираю фактическую схему инфраструктуры, узкие места, риски и критичные инциденты."
  },
  {
    title: "02. План и смета",
    text: "Формирую список работ, приоритеты, сроки и прозрачную оценку с вариантами реализации."
  },
  {
    title: "03. Реализация и документация",
    text: "Выполняю изменения, фиксирую настройки, передаю понятные регламенты и инструкции."
  },
  {
    title: "04. Поддержка и мониторинг",
    text: "Сопровождаю эксплуатацию, контролирую стабильность и предупреждаю повторные сбои."
  }
];

const faq = [
  {
    q: "Как быстро вы реагируете?",
    a: "Первичная реакция по заявке — в течение 1 рабочего дня. Аварийные случаи согласовываются отдельно."
  },
  {
    q: "Работаете удалённо или с выездом?",
    a: "Оба варианта доступны: удалённое подключение, а также выезд по договорённости для сложных работ."
  },
  {
    q: "Можете закрыть ИБ-задачи: ЭЦП, КриптоПро, VipNet?",
    a: "Да. Настройка, диагностика, устранение конфликтов ПО и базовый hardening рабочих мест/серверов."
  },
  {
    q: "Передаете документацию и регламенты?",
    a: "Да. По итогам работ предоставляю схему, список изменений, инструкции и рекомендации по эксплуатации."
  }
];

export default function HomePage() {
  const services = getAllServices().slice(0, 4);
  const posts = getAllPosts().slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.brandName,
    areaServed: "Россия",
    serviceType: "Системное администрирование и информационная безопасность",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"
  };

  return (
    <>
      <section className="hero-surface container py-20">
        <p className="mb-4 inline-flex rounded-full border border-cyan-700/40 px-4 py-1 text-xs text-cyan-300">
          Системный инженер / ИБ
        </p>
        <h1 className="max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          Надёжная ИТ-инфраструктура без хаоса: Windows, сети, безопасность и гос-системы.
        </h1>
        <p className="mt-6 max-w-3xl text-slate-300">
          Поддержка для частных и корпоративных клиентов: администрирование Windows 10/11 и Server,
          Hyper-V, сети Cisco/MikroTik/TP-Link/ExeGate, ИБ и эксплуатация критичных рабочих мест.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-accent px-6 py-3 font-medium text-white">
            Получить план работ за 24 часа
          </Link>
          <Link href="/services" className="rounded-xl border border-slate-700 px-6 py-3">
            Посмотреть услуги
          </Link>
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="card">
              <p className="text-2xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Ключевые направления</h2>
          <Link href="/services" className="text-sm">
            Все услуги →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{service.excerpt}</p>
              <p className="mt-4 text-sm text-cyan-300">{service.priceFrom}</p>
              <Link href={`/services/${service.slug}`} className="mt-4 inline-block text-sm">
                Подробнее →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <h2 className="mb-8 text-3xl font-semibold">Как строится работа</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step) => (
            <article key={step.title} className="card">
              <h3 className="text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-slate-300">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Материалы по эксплуатации и ИБ</h2>
          <Link href="/blog" className="text-sm">
            Весь блог →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="card">
              <p className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("ru-RU")}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{post.title}</h3>
              <p className="mt-2 text-slate-300">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="mt-4 inline-block text-sm">
                Читать →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <h2 className="mb-8 text-3xl font-semibold">FAQ</h2>
        <div className="space-y-4">
          {faq.map((item) => (
            <article key={item.q} className="card">
              <h3 className="text-lg font-semibold text-white">{item.q}</h3>
              <p className="mt-2 text-slate-300">{item.a}</p>
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
