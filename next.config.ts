import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        domains: ['www.prydwen.gg']
  },
  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/src/resonance.cdn/cdn/characters/icons/:path*', // Points to your image directory
      },
    ];
  },
};

export default nextConfig;
