import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure private docket assets (engineer signature, etc.) get bundled
  // into the /api/docket serverless function. Without this, Next.js's
  // file tracer doesn't follow runtime fs.readFile() calls and the file
  // isn't packaged.
  outputFileTracingIncludes: {
    "/api/docket": ["./src/lib/assets/**/*"],
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
