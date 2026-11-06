import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/Header";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { GoogleTag } from "@/components/GoogleTag";
import { SITE } from "@/lib/site";
import "./globals.css";

// Polices hébergées dans le dépôt (sous-ensemble latin) : la construction ne dépend d'aucun service externe.
const serif = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-italic.woff2", weight: "600", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});

const sans = localFont({
  src: "../fonts/inter-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Rachat & Estimation de Porcelaine Ancienne | " + SITE.name,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Estimation gratuite et rachat de porcelaine ancienne et d'objets d'art : Sèvres, Limoges, Meissen. Expertise argumentée, sans engagement.",
  applicationName: SITE.name,
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#FAF9F5",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#contenu" className="skip">Aller au contenu</a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
        <CookieBanner />
        <GoogleTag />
      </body>
    </html>
  );
}
