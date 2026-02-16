import Link from "next/link";
import { getAllPosts, getAllServices } from "@/lib/content";

const stats = [
  { label: "Запущенных проектов", value: "120+" },
  { label: "Средний срок MVP", value: "10 дней" },
  { label: "Средний Lighthouse", value: "92+" },
  { label: "Повторных клиентов", value: "68%" }
];

const processSteps = [
  {
    title: "01. Бриф и аудит",
    text: "Созваниваемся, фиксируем цели, ЦА, KPI и собираем список must-have функций."
  },
  {
    title: "02. Прототип и контент",
    text: "Проектируем структуру страниц, подготавливаем офферные тексты и сценарии CTA."
  },
  {
    title: "03. Разработка",
    text: "Собираем на Next.js, подключаем формы, блог, SEO, аналитику и техбазу под масштабирование."
  },
  {
    title: "04. Релиз и рост",
    text: "Публикуем проект, подключаем мониторинг и передаем удобный процесс обновления контента."
  }
];

const faq = [
  {
    q: "Сколько стоит полноценный сайт?",
    a: "Для DEMO-ориентира: лендинг от €1,200, корпоративный сайт от €2,800. Точная цена зависит от структуры и интеграций."
  },
  {
    q: "Можно ли редактировать сайт без разработчика?",
    a: "Да. Контент ведется через MDX + Decap CMS, редактор меняет статьи и услуги через веб-интерфейс."
  },
  {
    q: "Вы делаете SEO и аналитику сразу?",
    a: "Да, на старте закладываем метаданные, Open Graph, sitemap/robots и подключаем аналитику через env-переменные."
  }
];

export default function HomePage() {
  const services = getAllServices().slice(0, 3);
  const posts = getAllPosts().slice(0, 2);

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
          DEMO: Digital студия для сервисного бизнеса
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          Готовый сайт под ключ: дизайн, разработка, SEO и лидогенерация в одной поставке.
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          Этот демо-сайт показывает реальную структуру коммерческого проекта: лендинг, услуги, блог,
          формы заявок, SEO-техбаза и контентное управление без боли.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="rounded-xl bg-accent px-6 py-3 font-medium text-white">
            Получить смету за 24 часа
          </Link>
          <Link href="/services" className="rounded-xl border border-slate-700 px-6 py-3">
            Смотреть пакеты
          </Link>
        </div>
      </section>

      <section className="container pb-16">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <article key={item.label} className="card">
              <p className="text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-slate-300">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container pb-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Популярные услуги</h2>
          <Link href="/services" className="text-sm">
            Все услуги →
          </Link>
        </div>
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

      <section className="container pb-20">
        <h2 className="mb-8 text-3xl font-semibold">Как мы работаем</h2>
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
          <h2 className="text-3xl font-semibold">Свежие статьи</h2>
          <Link href="/blog" className="text-sm">
            Весь блог →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
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
