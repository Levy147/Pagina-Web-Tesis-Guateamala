import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis Da Vinci | Tesis de Grado y Esquema | Tesis Guatemala',
  description:
    'Asesoría de tesis para la Universidad Da Vinci de Guatemala: esquema de tesis, trabajo de graduación, redacción, formato y corrección de observaciones. Acompañamiento para licenciatura y posgrado.',
  keywords:
    'tesis Da Vinci, asesoría tesis Da Vinci, tesis Universidad Da Vinci, esquema de tesis Da Vinci, trabajo de graduación Da Vinci, corrección tesis Da Vinci, formato tesis Da Vinci',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-da-vinci/',
  },
  openGraph: {
    title: 'Asesoría de Tesis Da Vinci | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Da Vinci: esquema de tesis, formato y corrección.',
  },
}

export default function TesisDaVinci() {
  return (
    <UniversityPage
      slug="tesis-da-vinci"
      name="Universidad Da Vinci de Guatemala"
      acronym="Da Vinci"
      h1="Asesoría de Tesis Da Vinci: Esquema, Redacción y Formato"
      introParagraphs={[
        'La Universidad Da Vinci de Guatemala combina una enseñanza práctica con la exigencia de trabajos de graduación bien fundamentados. Sus programas de licenciatura y posgrado requieren tesis y esquemas de tesis que cumplan los lineamientos institucionales.',
        'En Tesis Guatemala acompañamos a estudiantes de la Da Vinci en la estructuración del esquema de tesis, la redacción de los capítulos y la presentación formal del documento.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la Universidad Da Vinci?"
      processParagraphs={[
        'El proceso suele iniciar con un esquema de tesis que define el tema, el planteamiento del problema, los objetivos y el diseño metodológico preliminar. Posteriormente se desarrolla la investigación y el informe final, pasando por revisiones del asesor.',
        'Nuestra asesoría te ayuda a armar un esquema sólido desde el inicio, porque eso define la calidad y la viabilidad de todo el trabajo.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la Da Vinci"
      formatParagraphs={[
        'Revisamos tu esquema y tus avances, configuramos el formato en Word según los lineamientos de la universidad, corregimos redacción y citación, y aplicamos las observaciones del asesor de forma ordenada.',
        'Trabajamos de la mano contigo para que el documento final cumpla el estándar académico de la institución.',
      ]}
      faqExtra={[
        {
          q: '¿Me ayudan a armar mi esquema de tesis?',
          a: 'Sí, te orientamos en la estructura del esquema: título, problema, preguntas, objetivos, justificación y metodología, para que sea viable y aprobable.',
        },
        {
          q: '¿Trabajan con programas de posgrado de la Da Vinci?',
          a: 'Sí, acompañamos tanto licenciaturas como maestrías y posgrados en línea de la Universidad Da Vinci.',
        },
      ]}
    />
  )
}