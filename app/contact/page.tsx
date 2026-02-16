import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Оставьте заявку и получите план работ, оценку рисков и смету по вашей ИТ-задаче."
};

const reasons = [
  "Ответ в 1 рабочий день",
  "Бесплатная первичная диагностика",
  "План работ и рисков по этапам"
];

export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Контакты</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Опишите задачу: сбои, сеть, безопасность, ЭЦП/КриптоПро/VipNet, гос-сервисы или сопровождение.
        В ответ получите технический план и ориентир по срокам.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ContactForm />

        <aside className="space-y-6">
          <div className="card space-y-4">
            <p>📍 {siteConfig.location}</p>
            <p>✉️ {siteConfig.email}</p>
            <p>🕒 {siteConfig.workingHours}</p>
            <p>
              Telegram: <a href={siteConfig.telegramUrl}>{siteConfig.telegramHandle}</a>
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
              Посмотреть услуги
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}
