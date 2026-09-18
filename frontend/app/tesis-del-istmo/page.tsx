import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis del Istmo (UNIS) | Formato, Redacción y Corrección',
  description:
    'Asesoría de tesis para la Universidad del Istmo de Guatemala (UNIS): tesis y trabajo de graduación con estándares internacionales. Formato, redacción y corrección de observaciones.',
  keywords:
    'tesis del Istmo, asesoría tesis UNIS, tesis Universidad del Istmo, trabajo de graduación UNIS, corrección tesis UNIS, formato tesis UNIS, tesis UNIS Guatemala',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-del-istmo/',
  },
  openGraph: {
    title: 'Asesoría de Tesis del Istmo (UNIS) | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad del Istmo: formato, redacción y corrección de tesis.',
  },
}

export default function TesisDelIstmo() {
  return (
    <UniversityPage
      slug="tesis-del-istmo"
      name="Universidad del Istmo"
      acronym="UNIS"
      h1="Asesoría de Tesis UNIS: Estándares Internacionales de Formato y Redacción"
      introParagraphs={[
        'La Universidad del Istmo promueve una formación profesional exigente, con estándares internacionales. Sus tesis y trabajos de graduación requieren no solo buen contenido, sino una presentación formal impecable que refleje el nivel de la institución.',
        'Hemos acompañado a estudiantes de la UNIS en la estructura, el formato y la redacción de su tesis, ayudándolos a cumplir las observaciones de sus asesores con orden y claridad.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la UNIS?"
      processParagraphs={[
        'El proceso de graduación en la Universidad del Istmo incluye la definición del tema, el desarrollo de la investigación con un asesor, y la presentación final del trabajo de graduación. La calidad del documento y su presentación influyen directamente en la evaluación.',
        'Nos enfocamos en la parte formal y de redacción: estructura de capítulos, coherencia académica, citación correcta y un documento visualmente profesional.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la UNIS"
      formatParagraphs={[
        'Trabajamos sobre tu avance real: configuramos el formato en Word, corregimos la redacción académica, normalizamos citas y referencias en norma APA u otro sistema, y te ayudamos a implementar las correcciones del asesor.',
        'Si estás preparando la presentación de tu trabajo, también te orientamos sobre cómo organizar y exponer tus resultados.',
      ]}
      faqExtra={[
        {
          q: '¿Trabajan con las carreras de la UNIS?',
          a: 'Sí, acompañamos a estudiantes de las distintas carreras de la UNIS, tanto de licenciatura como de maestría.',
        },
        {
          q: '¿Me ayudan con la presentación final de mi tesis?',
          a: 'Sí, te asesoramos en la estructura y el orden de la presentación para que tus resultados y conclusiones queden claros frente al tribunal.',
        },
      ]}
    />
  )
}