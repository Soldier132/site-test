import Link from "next/link";

const links = [
  { href: "/", label: "Главная" },
  { href: "/services", label: "Услуги" },
  { href: "/blog", label: "Блог" },
  { href: "/contact", label: "Контакты" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-white">
          SiteForge Berlin
        </Link>
        <nav aria-label="Главная навигация">
          <ul className="flex gap-6 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
