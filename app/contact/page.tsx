import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Оставьте заявку и получите предложение по вашему проекту в течение 24 часов."
};

const reasons = [
  "Ответ в течение 1 рабочего дня",
  "Бесплатный мини-аудит текущего сайта",
  "План работ с этапами и бюджетом"
];

export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Контакты</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Расскажите о задаче, целях и сроках. Мы вернемся с понятным планом запуска и рекомендациями,
        как получить первые лиды быстрее.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ContactForm />

        <aside className="space-y-6">
          <div className="card space-y-4">
            <p>📍 Berlin, Germany</p>
            <p>✉️ hello@siteforge.dev</p>
            <p>🕒 Пн–Пт, 10:00–18:00 CET</p>
            <p>
              Telegram: <a href="https://t.me/siteforge_demo">@siteforge_demo</a>
            </p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold text-white">Почему стоит написать сейчас</h2>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {reasons.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <Link
              href="/services"
              className="mt-4 inline-block rounded-xl border border-slate-700 px-5 py-2 text-sm"
            >
              Сначала посмотреть пакеты
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
