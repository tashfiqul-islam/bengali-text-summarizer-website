import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for improved error handling
  reactStrictMode: true,

  // Output a standalone build for improved performance
  output: 'standalone',
  
  // Configure image optimization
  images: {
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
    // Disable runtime image optimization in production
    unoptimized: process.env.NODE_ENV === 'production',
  },
  
  // Configure experimental features
  experimental: {
    // Enable and configure Server Actions
    serverActions: {
      allowedOrigins: ['localhost:3000', 'bengali-text-summarizer-website.vercel.app'],
      bodySizeLimit: '2mb',
    },
  },
  
  // Set custom headers for improved caching
  async headers() {
    return [
      {
        // Default cache policy for all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=59',
          },
        ],
      },
      {
        // Specific cache policy for static assets
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache policy for static JavaScript files
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Configure redirects (if needed)
  async redirects() {
    return [];
  },

  // Configure rewrites (if needed)
  async rewrites() {
    return [];
  },
};

export default nextConfig;
