/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.swell.store',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
