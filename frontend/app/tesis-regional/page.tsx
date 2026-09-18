import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis Universidad Regional | Formato y Redacción',
  description:
    'Asesoría de tesis para la Universidad Regional de Guatemala: trabajo de graduación, tesis de licenciatura y maestría, formato, redacción y corrección de observaciones.',
  keywords:
    'tesis Universidad Regional, asesoría tesis Regional de Guatemala, tesis Regional Guatemala, trabajo de graduación Regional, corrección tesis Regional, formato tesis Regional',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-regional/',
  },
  openGraph: {
    title: 'Asesoría de Tesis Universidad Regional | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Regional de Guatemala: formato y corrección de tesis.',
  },
}

export default function TesisRegional() {
  return (
    <UniversityPage
      slug="tesis-regional"
      name="Universidad Regional de Guatemala"
      acronym="Regional"
      h1="Asesoría de Tesis Universidad Regional: Formato y Redacción Académica"
      introParagraphs={[
        'La Universidad Regional de Guatemala acompaña a profesionales en distintas áreas y sus trabajos de graduación exigen cumplir los lineamientos de formato y redacción de la institución.',
        'En Tesis Guatemala ayudamos a estudiantes de la Regional a estructurar su tesis, corregir la redacción y aplicar las observaciones del asesor para que cumplan los plazos establecidos.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la Universidad Regional?"
      processParagraphs={[
        'El proceso de graduación incluye el desarrollo de la investigación, la revisión del documento por el asesor y la presentación final. La aplicación ordenada de las correcciones es clave para evitar demoras.',
        'Nuestra asesoría trabaja por hitos: definimos qué corregir primero y qué puede esperar, para que avances con claridad sin reescribir todo el documento.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la Regional"
      formatParagraphs={[
        'Configuramos el formato completo en Word, revisamos la estructura y coherencia del documento, corregimos ortografía, gramática y citación, y te orientamos en el desarrollo de temas teóricos.',
        'El acompañamiento se adapta a tu carrera y a la guía de la institución, con seguimiento por entregas parciales.',
      ]}
      faqExtra={[
        {
          q: '¿Pueden ayudarme si apenas estoy empezando mi tesis?',
          a: 'Sí, mientras tengas aprobado tu anteproyecto o punto de tesis, podemos acompañarte desde el inicio en la estructura y el formato.',
        },
        {
          q: '¿La asesoría incluye solo la parte de forma?',
          a: 'Nos enfocamos en formato y desarrollo de temas teóricos, además de la corrección de redacción, citas y referencias.',
        },
      ]}
    />
  )
}