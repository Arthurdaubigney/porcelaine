import Link from "next/link";
import { JsonLd } from "./JsonLd";
import { SITE } from "@/lib/site";

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  const items = [{ name: "Accueil", path: "/" }, ...trail];
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: it.name,
            item: `${SITE.url}${it.path === "/" ? "" : it.path}`,
          })),
        }}
      />
      <nav aria-label="Fil d'Ariane" className="crumbs">
        <ol>
          {items.map((it, i) => (
            <li key={it.path}>
              {i < items.length - 1 ? <Link href={it.path}>{it.name}</Link> : <span aria-current="page">{it.name}</span>}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
