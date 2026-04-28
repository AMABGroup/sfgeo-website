import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
