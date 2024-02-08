/** @type {import('next').NextConfig} */

module.exports = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        port: '',
        pathname: '/icons/**',
      },
    ],
  },
};
