/** @type {import('next').NextConfig} */
const SITE_HOST = "www.maison-porcelaine.fr";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), interest-cohort=()" },
];

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
  async redirects() {
    // L'ancienne adresse vercel.app redirige vers le domaine officiel (pas de contenu dupliqué).
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "porcelaine-seven.vercel.app" }],
        destination: `https://${SITE_HOST}/:path*`,
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
