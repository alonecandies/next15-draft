import type {NextConfig} from 'next'

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.nextjswp.com'
      },
      {
        protocol: 'https',
        hostname: '**.gravatar.com'
      }
    ]
  },
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}

export default nextConfig
