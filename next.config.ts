/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output to 'export' for static site generation
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Set basePath for production environment
  basePath: process.env.NODE_ENV === 'production' ? '/bengali-text-summarizer' : '',
  // Enable React Strict Mode for better development practices
  reactStrictMode: true,
  // Remove console logs in production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Disable the `X-Powered-By` header for security reasons
  poweredByHeader: false,
  // Enable compression for better performance
  compress: true,
}

module.exports = nextConfig
