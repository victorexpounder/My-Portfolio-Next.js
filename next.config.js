/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true
  },
  distDir: 'my-custom-build-directory',
}

module.exports = nextConfig
