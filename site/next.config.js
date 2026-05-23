/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Custom Kasm Repository',
    description: 'Custom Kasm Repository with supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://ragedogg.github.io/kasm-custom-repository/',
    contactUrl: 'https://github.com/ragedogg',
  },
  reactStrictMode: true,
  basePath: '/kasm-custom-repository/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
