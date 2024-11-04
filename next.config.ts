/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set output to 'export' for static site generation
  output: 'export',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Set basePath and assetPrefix for production environment
  basePath: process.env.NODE_ENV === 'production' ? '/bengali-text-summarizer' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/bengali-text-summarizer/' : '',
  
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

  // Add trailing slash for consistent URL handling
  trailingSlash: true,
  
  // Configure headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
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
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self' data:;",
          },
        ],
      },
    ];
  },
  
  // Optimize the build process
  swcMinify: true,
  
  // Configure webpack for optimizations
  webpack: (config: { optimization: { splitChunks: { cacheGroups: { styles: { name: string; test: RegExp; chunks: string; enforce: boolean; }; }; }; }; }, { dev, isServer }: any) => {
    // Optimize CSS
    if (!dev && !isServer) {
      config.optimization.splitChunks.cacheGroups.styles = {
        name: 'styles',
        test: /\.(css|scss)$/,
        chunks: 'all',
        enforce: true,
      };
    }
    
    return config;
  },
};

module.exports = nextConfig;
