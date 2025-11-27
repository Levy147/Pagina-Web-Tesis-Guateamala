import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Usa el dominio de GitHub Pages por defecto, o el personalizado si está configurado
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tuusuario.github.io/tesis-guatemala'
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

