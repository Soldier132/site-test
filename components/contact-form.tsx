"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  company: "",
  message: "",
  website: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    const payload = await response.json();
    setStatus(payload.message);
    setLoading(false);

    if (response.ok) setForm(initialState);
  }

  return (
    <form className="card space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="name" className="mb-1 block text-sm">
          Имя
        </label>
        <input
          id="name"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm">
          Компания
        </label>
        <input
          id="company"
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm">
          Задача
        </label>
        <textarea
          id="message"
          required
          minLength={20}
          rows={6}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <input
        aria-hidden
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
      />

      <button
        disabled={loading}
        className="rounded-xl bg-accent px-6 py-3 font-medium text-white disabled:opacity-60"
      >
        {loading ? "Отправка..." : "Отправить заявку"}
      </button>
      {status && <p className="text-sm text-slate-300">{status}</p>}
    </form>
  );
}
