/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
}

module.exports = {
  output: 'export',
  basePath: '/Portfolio-Website',
  assetPrefix: '/Portfolio-Website/',
}



 



