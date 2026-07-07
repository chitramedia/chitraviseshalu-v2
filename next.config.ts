import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // ---------------------------------------------------------------------------
  // Image optimisation
  // ---------------------------------------------------------------------------
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // ---------------------------------------------------------------------------
  // Experimental
  // ---------------------------------------------------------------------------
  experimental: {
    // Tree-shake lucide-react at the package level instead of per-import
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig
