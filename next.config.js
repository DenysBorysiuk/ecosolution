/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    deviceSizes: [342, 360, 480, 596, 768, 1024, 1280, 1366, 1440, 1920, 2048],
  },
};

module.exports = nextConfig;
