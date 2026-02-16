import Link from "next/link";
import { siteConfig } from "@/lib/site";

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакты" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-cyan-900/30 bg-slate-950/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="font-semibold text-white">
          {siteConfig.brandName}
        </Link>
        <nav aria-label="Главная навигация" className="flex items-center gap-6">
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="rounded-lg bg-accent px-3 py-2 text-xs text-white md:text-sm">
            Получить аудит
          </Link>
        </nav>
      </div>
    </header>
  );
}
