import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { siteConfig } from "@/config/site";
import { organizationJsonLd } from "@/lib/seo";
import { JsonLd } from "@/components/ui/JsonLd";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Tailored Menswear from Pakistan`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "PRIDE menswear",
    "Pakistani menswear",
    "men's suits Pakistan",
    "sherwani",
    "waistcoat",
    "shalwar kameez",
    "made to measure",
    "tailoring",
  ],
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    title: `${siteConfig.name} | Tailored Menswear from Pakistan`,
    description: siteConfig.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Tailored Menswear from Pakistan`,
    description: siteConfig.description,
  },
  robots: siteConfig.allowIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export const viewport: Viewport = {
  themeColor: "#f7f4ee",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${cormorant.variable} ${manrope.variable}`} suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        {children}
        <Footer />
        <WhatsAppFloat />
        <JsonLd data={organizationJsonLd()} />
      </body>
    </html>
  );
}
