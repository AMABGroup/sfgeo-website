import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure private docket assets (engineer signature, etc.) get bundled
  // into the /api/docket serverless function. Without this, Next.js's
  // file tracer doesn't follow runtime fs.readFile() calls and the file
  // isn't packaged.
  outputFileTracingIncludes: {
    "/api/docket": ["./src/lib/assets/**/*"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      {
        source: "/docket/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/services/site-classification',
        destination: '/site-classification',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
