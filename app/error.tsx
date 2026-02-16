"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="container py-24 text-center">
      <p className="text-sm text-slate-400">500</p>
      <h1 className="mt-2 text-4xl font-bold">Внутренняя ошибка</h1>
      <p className="mt-4 text-slate-300">Что-то пошло не так. Попробуйте обновить страницу.</p>
      <button onClick={() => reset()} className="mt-8 rounded-xl bg-accent px-6 py-3 text-white">
        Повторить
      </button>
    </section>
  );
}
