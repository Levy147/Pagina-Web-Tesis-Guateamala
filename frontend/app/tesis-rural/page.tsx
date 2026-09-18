import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis Universidad Rural | Trabajo de Graduación y Desarrollo',
  description:
    'Asesoría de tesis para la Universidad Rural de Guatemala: trabajo de graduación, proyectos de desarrollo, formato, redacción y corrección de observaciones para licenciatura y posgrado.',
  keywords:
    'tesis Universidad Rural, asesoría tesis Rural de Guatemala, tesis Rural Guatemala, trabajo de graduación Rural, corrección tesis Rural, formato tesis Rural, proyectos de desarrollo Rural',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-rural/',
  },
  openGraph: {
    title: 'Asesoría de Tesis Universidad Rural | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Rural de Guatemala: trabajo de graduación, formato y corrección.',
  },
}

export default function TesisRural() {
  return (
    <UniversityPage
      slug="tesis-rural"
      name="Universidad Rural de Guatemala"
      acronym="Rural"
      h1="Asesoría de Tesis Universidad Rural: Trabajo de Graduación y Proyectos"
      introParagraphs={[
        'La Universidad Rural de Guatemala forma profesionales comprometidos con el desarrollo del país, especialmente en áreas rurales y comunitarias. Sus trabajos de graduación suelen combinar investigación y propuestas con impacto social.',
        'Hemos acompañado a estudiantes de la Rural en la estructura, el formato y la redacción de su tesis, ayudándolos a presentar propuestas claras y bien fundamentadas.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la Universidad Rural?"
      processParagraphs={[
        'El proceso de graduación incluye el desarrollo de la investigación o proyecto, la revisión por el asesor y la presentación final. Los trabajos enfocados en desarrollo comunitario requieren una estructura metodológica bien definida y resultados claros.',
        'Te ayudamos a organizar esa estructura: planteamiento, diagnóstico, propuesta y conclusiones, con un formato que cumpla los lineamientos de la institución.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la Rural"
      formatParagraphs={[
        'Configuramos el documento en Word, corregimos la redacción académica, normalizamos citas y referencias y aplicamos las observaciones del asesor de forma ordenada y sin reescribir tu trabajo.',
        'El acompañamiento es en línea, con seguimiento por entregas parciales hasta la versión final aprobada.',
      ]}
      faqExtra={[
        {
          q: '¿Apoyan tesis con enfoque de desarrollo comunitario?',
          a: 'Sí, te ayudamos a estructurar el diagnóstico, la propuesta y los resultados con orden metodológico y claridad.',
        },
        {
          q: '¿Me ayudan si trabajo y tengo poco tiempo?',
          a: 'Sí, planificamos el trabajo por hitos y priorizamos las correcciones para que avances en tus tiempos libres sin sentirte abrumado.',
        },
      ]}
    />
  )
}