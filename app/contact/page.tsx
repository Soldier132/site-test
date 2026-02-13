import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Оставьте заявку и получите предложение по вашему проекту в течение 24 часов."
};

export default function ContactPage() {
  return (
    <section className="container py-16">
      <h1 className="text-4xl font-bold">Контакты</h1>
      <p className="mt-4 max-w-2xl text-slate-300">
        Расскажите о задаче, целях и сроках. Ответим с планом реализации и бюджетом.
      </p>
      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <ContactForm />
        <aside className="card space-y-4">
          <p>📍 Berlin, Germany</p>
          <p>✉️ hello@siteforge.dev</p>
          <p>🕒 Пн–Пт, 10:00–18:00 CET</p>
        </aside>
      </div>
    </section>
  );
}
