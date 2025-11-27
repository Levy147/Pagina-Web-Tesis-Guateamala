import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Usa el dominio de GitHub Pages por defecto, o el personalizado si está configurado
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tuusuario.github.io/tesis-guatemala'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/#servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#contacto`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}

