import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-cyan-900/30 py-8 text-sm text-slate-400">
      <div className="container flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.brandName}. {siteConfig.tagline}.</p>
        <p>{siteConfig.email} · {siteConfig.telegramHandle}</p>
      </div>
    </footer>
  );
}
