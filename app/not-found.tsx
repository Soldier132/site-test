import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container py-24 text-center">
      <p className="text-sm text-slate-400">404</p>
      <h1 className="mt-2 text-4xl font-bold">Страница не найдена</h1>
      <p className="mt-4 text-slate-300">Возможно, ссылка устарела или была введена с ошибкой.</p>
      <Link href="/" className="mt-8 inline-block rounded-xl bg-accent px-6 py-3 text-white">
        На главную
      </Link>
    </section>
  );
}
