// next.config.js
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export', // Enable static export
  images: {
    domains: ['fakestoreapi.com'],  // Allow images from fakestoreapi.com
  },
};

export default nextConfig;
