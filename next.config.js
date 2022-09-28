/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['streamcoimg-a.akamaihd.net'],
  },
};

module.exports = nextConfig;
