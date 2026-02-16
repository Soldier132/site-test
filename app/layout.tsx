import type { Metadata } from "next";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.brandName} — системный инженер и инженер ИБ`,
    template: `%s | ${siteConfig.brandName}`
  },
  description:
    "Системное администрирование Windows/Server, сети, виртуализация Hyper-V, ИБ, ЭЦП/КриптоПро/VipNet и сопровождение гос-систем.",
  openGraph: {
    title: siteConfig.brandName,
    description: siteConfig.tagline,
    url: baseUrl,
    siteName: siteConfig.brandName,
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
