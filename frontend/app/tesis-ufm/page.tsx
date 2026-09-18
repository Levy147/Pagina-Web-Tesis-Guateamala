import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis UFM | Redacción y Formato Universidad Francisco Marroquín',
  description:
    'Asesoría de tesis para la Universidad Francisco Marroquín (UFM): trabajo de graduación, rigor académico, formato, redacción y corrección de observaciones. Acompañamiento profesional de tesis UFM.',
  keywords:
    'tesis UFM, asesoría tesis UFM, tesis Francisco Marroquín, ayuda tesis UFM, trabajo de graduación UFM, formato tesis UFM, corrección tesis UFM',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-ufm/',
  },
  openGraph: {
    title: 'Asesoría de Tesis UFM | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Francisco Marroquín: redacción, formato y corrección de tesis.',
  },
}

export default function TesisUfm() {
  return (
    <UniversityPage
      slug="tesis-ufm"
      name="Universidad Francisco Marroquín"
      acronym="UFM"
      h1="Asesoría de Tesis UFM: Rigor Académico en Formato y Redacción"
      introParagraphs={[
        'La Universidad Francisco Marroquín se caracteriza por un enfoque académico riguroso y una fuerte exigencia en la claridad de las ideas. Su trabajo de graduación debe reflejar calidad argumentativa y cumplir con estándares de redacción profesional.',
        'En Tesis Guatemala acompañamos a estudiantes de la UFM en la estructuración, redacción y presentación formal de su tesis, ayudándolos a expresar sus investigaciones con precisión y estilo.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la UFM?"
      processParagraphs={[
        'El proceso de graduación en la UFM incluye la definición de un tema viable, el desarrollo de la investigación con acompañamiento de asesores, y la presentación final ante las autoridades académicas. La calidad de la redacción y la argumentación son clave para la aprobación.',
        'Nos enfocamos en esa parte: estructuración del documento, coherencia entre objetivos y conclusiones, redacción académica clara y formato impecable según los lineamientos de la universidad.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la UFM"
      formatParagraphs={[
        'Trabajamos sobre tu avance: corregimos estilo y redacción, configuramos el formato en Word y la citación en norma APA u otro sistema, y aplicamos las observaciones del asesor con orden.',
        'Nuestro objetivo es que entregues un documento profesional que refleje el nivel académico que la UFM espera.',
      ]}
      faqExtra={[
        {
          q: '¿Me ayudan con la redacción académica de mi tesis UFM?',
          a: 'Sí, es nuestro fuerte: claridad, coherencia, cohesión y estilo formal, respetando tus ideas y tu voz como autor.',
        },
        {
          q: '¿Configuran el formato completo en Word?',
          a: 'Sí, configuramos portada, índices, numeración, márgenes, estilos de títulos y todo lo que exija el manual de tu facultad de la UFM.',
        },
      ]}
    />
  )
}