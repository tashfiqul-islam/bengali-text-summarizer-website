import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Enable React Strict Mode for improved error handling and performance
  reactStrictMode: true,

  // Output a standalone build for improved performance and easier deployment
  output: 'standalone',

  // Configure image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bengali-text-summarizer-website.vercel.app',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
    // Enable runtime image optimization for better performance
    unoptimized: false,
  },

  // Configure experimental features
  experimental: {
    // Enable Server Actions (stable feature in Next.js 14+)
    serverActions: {
      bodySizeLimit: '1mb',
      allowedOrigins: ['localhost:3000', 'bengali-text-summarizer-website.vercel.app'],
    },
    // Enable Turbopack for faster development builds
    turbo: {},
    // Enable CSS optimization for improved performance
    optimizeCss: true,
  },

  // Set custom headers for improved security, caching, and to address Permissions-Policy issue
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/(.*)',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
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
    ]
  },

  // Configure redirects (if needed)
  async redirects() {
    return []
  },

  // Configure rewrites (if needed)
  async rewrites() {
    return []
  },

  // Disable the `X-Powered-By` header for security
  poweredByHeader: false,

  // Enable gzip compression
  compress: true,

  // Use TypeScript for type checking during build
  typescript: {
    ignoreBuildErrors: false,
  },
}

export default nextConfig
