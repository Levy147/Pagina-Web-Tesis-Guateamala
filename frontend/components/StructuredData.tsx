export default function StructuredData() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Tesis Guatemala',
    description: 'Asesoría profesional para estudiantes universitarios en procesos de tesis, formato y redacción académica',
    url: 'https://www.tesisguatemala.com',
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
      'Elaboración de Tareas Académicas',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '6',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

