export default function StructuredData() {
  const siteUrl = 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/'
  
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${siteUrl}#organization`,
    name: 'Tesis Guatemala',
    description: 'Asesoría profesional para estudiantes universitarios en procesos de tesis, tesina, tareas académicas, formato y redacción académica en Guatemala',
    url: siteUrl,
    telephone: '+50258203956',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GT',
      addressLocality: 'Guatemala',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Guatemala',
    },
    serviceType: [
      'Asesoría en Formato de Tesis',
      'Asesoría en Redacción Académica',
      'Procesos de Tesis',
      'Asesoría en Tesina',
      'Elaboración de Tareas Académicas',
      'Ayuda con Ensayos',
      'Ayuda con Monografías',
      'Ayuda con Portafolios',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '6',
    },
    sameAs: [
      'https://www.facebook.com/tesisguatemala',
      'https://wa.me/50258203956',
    ],
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}#service`,
    name: 'Asesoría Universitaria en Tesis y Tareas Académicas',
    description: 'Servicios de asesoría profesional para estudiantes universitarios: tesis, tesina, tareas académicas, formato y redacción',
    provider: {
      '@id': `${siteUrl}#organization`,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Guatemala',
    },
    serviceType: 'Asesoría Académica',
    offers: {
      '@type': 'Offer',
      description: 'Asesoría profesional en formato y redacción de trabajos universitarios',
    },
  }

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteUrl}#website`,
    url: siteUrl,
    name: 'Tesis Guatemala',
    description: 'Asesoría profesional para estudiantes universitarios en Guatemala. Ayuda con tesis, tesina, tareas académicas, formato y redacción.',
    publisher: {
      '@id': `${siteUrl}#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
    </>
  )

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

