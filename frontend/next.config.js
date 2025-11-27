/** @type {import('next').NextConfig} */
/** Configuración para GitHub Pages como project page */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Genera HTML estático (funciona en GitHub Pages y Netlify)
  
  // Nombre exacto del repositorio en GitHub Pages
  basePath: process.env.BASE_PATH || '/Pagina-Web-Tesis-Guateamala',
  assetPrefix: process.env.ASSET_PREFIX || '/Pagina-Web-Tesis-Guateamala/',
  
  images: {
    unoptimized: true, // Necesario para export estático
  },
  
  trailingSlash: true, // Recomendado para GitHub Pages
  
  env: {
    API_URL: process.env.API_URL || 'http://localhost:3001',
    NEXT_PUBLIC_BASE_PATH: process.env.BASE_PATH || '/Pagina-Web-Tesis-Guateamala',
  },
  
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

