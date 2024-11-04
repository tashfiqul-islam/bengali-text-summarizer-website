const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Base path and asset prefix for GitHub Pages
  basePath: isProd ? '/bengali-text-summarizer' : '',
  assetPrefix: isProd ? '/bengali-text-summarizer/' : '',

  // Configure for static export
  output: 'export',

  // Image optimization settings
  images: {
    unoptimized: true,
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  // Disable the `X-Powered-By` header for security reasons
  poweredByHeader: false,
};

module.exports = nextConfig;
