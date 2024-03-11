/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
     ignoreBuildErrors: true
  },
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dashboard.ciaraa.com',
        pathname: '/**',
      },
       {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
