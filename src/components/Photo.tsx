import Image from "next/image";
import { PHOTOS, type PhotoKey } from "@/data/photos";

type PhotoProps = {
  name: PhotoKey;
  sizes: string;
  priority?: boolean;
  className?: string;
};

/** Photographie CC0 du Met, optimisée par next/image (alt + title issus de data/photos.ts). */
export function Photo({ name, sizes, priority = false, className }: PhotoProps) {
  const p = PHOTOS[name];
  return (
    <Image
      src={p.src}
      width={p.width}
      height={p.height}
      alt={p.alt}
      title={p.title}
      sizes={sizes}
      priority={priority}
      quality={78}
      className={className}
    />
  );
}
