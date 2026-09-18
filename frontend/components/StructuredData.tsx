export default function StructuredData() {
  const siteUrl = 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/'

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#organization`,
    name: 'Tesis Guatemala',
    description: 'Asesoría profesional para estudiantes universitarios en procesos de tesis, tesina, tareas académicas, formato y redacción académica en Guatemala',
    url: siteUrl,
    telephone: '+50258203956',
    image: `${siteUrl}logos/LogoPaginaWebActualizado.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zona 10',
      postalCode: '01010',
      addressLocality: 'Ciudad de Guatemala',
      addressRegion: 'Guatemala',
      addressCountry: 'GT',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Guatemala',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '6',
    },
    priceRange: '$$',
    sameAs: [
      'https://www.facebook.com/Tesising',
      'https://wa.me/50258203956',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría en Formato de Tesis' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría en Redacción Académica' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Procesos de Tesis y Anteproyectos' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría en Tesina' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría de Tesis de Grado' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría de Tesis de Maestría' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Asesoría de Tesis Doctoral' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Elaboración de Tareas Académicas' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Ayuda con Ensayos y Monografías' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Corrección de Normas APA y Formato' },
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Corrección de Citas y Referencias Bibliográficas' },
      },
    ],
  }

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${siteUrl}#service`,
    name: 'Asesoría Universitaria en Tesis y Tareas Académicas',
    description: 'Servicios de asesoría profesional para estudiantes universitarios: tesis de grado, maestría, doctorado, tesina, tareas académicas, formato y redacción en Guatemala',
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

  const structuredData = [organizationData, serviceData, websiteData]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  )
}