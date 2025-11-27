/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Genera HTML estático (funciona en GitHub Pages y Netlify)
  images: {
    unoptimized: true, // Necesario para export estático
  },
  trailingSlash: true, // Recomendado para GitHub Pages
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
  },
  // Configuración para GitHub Pages (solo si BASE_PATH está definido)
  basePath: process.env.BASE_PATH || '',
  assetPrefix: process.env.ASSET_PREFIX || '',
  // Asegurar que react-icons se incluya correctamente en el bundle
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      }
    }
    return config
  },
}

module.exports = nextConfig

