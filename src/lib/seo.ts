import type { Metadata } from "next";
import { SITE } from "./site";

type PageSeo = { title: string; description: string; path: string };

export function pageMetadata({ title, description, path }: PageSeo): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE.name,
      locale: SITE.locale,
      type: "website",
      images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: "Vase en porcelaine bleu de Sèvres" }],
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
