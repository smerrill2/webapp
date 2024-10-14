// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
  transpilePackages: ['framer-motion'], // Ensure framer-motion is transpiled
  // Add any other Next.js configurations here
};

module.exports = nextConfig;