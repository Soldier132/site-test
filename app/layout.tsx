import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "SiteForge Berlin — сайты под ключ",
    template: "%s | SiteForge Berlin"
  },
  description:
    "Разрабатываем производительные сайты и лендинги под ключ для малого и среднего бизнеса в Берлине.",
  openGraph: {
    title: "SiteForge Berlin",
    description:
      "Современные сайты с SEO, блогом, формами и аналитикой. Запуск за 7-14 дней.",
    url: baseUrl,
    siteName: "SiteForge Berlin",
    type: "website",
    locale: "ru_RU"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
