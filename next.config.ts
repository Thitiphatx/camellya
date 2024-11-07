import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
        domains: ['www.prydwen.gg']
  }
};

export default nextConfig;
