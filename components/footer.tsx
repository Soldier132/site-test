export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-sm text-slate-400">
      <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} SiteForge Berlin. Все права защищены.</p>
        <p>Собрано на Next.js + TypeScript + Tailwind.</p>
      </div>
    </footer>
  );
}
