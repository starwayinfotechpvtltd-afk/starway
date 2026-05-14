/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,

  images: {
    unoptimized: true,
  },

  experimental: {
    optimizeCss: false,
  },
};

module.exports = nextConfig;