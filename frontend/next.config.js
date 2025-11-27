/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Para GitHub Pages - genera HTML estático
  images: {
    unoptimized: true, // Necesario para export estático
  },
  trailingSlash: true, // Recomendado para GitHub Pages
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
  },
  // Configuración para GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? process.env.BASE_PATH || '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? process.env.ASSET_PREFIX || '' : '',
}

module.exports = nextConfig

