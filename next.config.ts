import type { NextConfig } from 'next'

const config: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'knowhow.distrelec.com',
      },
      {
        protocol: 'https',
        hostname: 'www.idom.com',
      }
    ],
  },
}

export default config
