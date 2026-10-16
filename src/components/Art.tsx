type ArtProps = {
  src: string;
  alt: string;
  title: string;
  priority?: boolean;
  className?: string;
};

/** Illustration SVG (4:5). Les SVG ne gagnent rien à passer par next/image. */
export function Art({ src, alt, title, priority = false, className }: ArtProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      title={title}
      width={400}
      height={500}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
    />
  );
}
