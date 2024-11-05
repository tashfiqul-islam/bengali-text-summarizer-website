import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bengali-text-summarizer-website.vercel.app",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
    domains: ['bengali-text-summarizer-website.vercel.app', 'localhost'],
    unoptimized: process.env.NODE_ENV === 'production',
  },
  experimental: {
    // Experimental features can be added here if needed
  },
  devIndicators: {
    appIsrStatus: true,
    buildActivity: true,
    buildActivityPosition: "bottom-right",
  },
  output: 'standalone',
  assetPrefix: process.env.NODE_ENV === 'production' 
    ? 'https://bengali-text-summarizer-website.vercel.app' 
    : undefined,
  basePath: '',
};

export default nextConfig;
