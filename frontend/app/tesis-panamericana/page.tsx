import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis Panamericana | Trabajo de Graduación y Maestría',
  description:
    'Asesoría de tesis para la Universidad Panamericana de Guatemala (UPANA): trabajo de graduación, tesis de licenciatura y maestría, formato, redacción y corrección de observaciones.',
  keywords:
    'tesis Panamericana, asesoría tesis UPANA, tesis Universidad Panamericana, trabajo de graduación Panamericana, corrección tesis UPANA, maestría tesis Panamericana, formato tesis Panamericana',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-panamericana/',
  },
  openGraph: {
    title: 'Asesoría de Tesis Panamericana | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Panamericana: trabajo de graduación, formato y corrección.',
  },
}

export default function TesisPanamericana() {
  return (
    <UniversityPage
      slug="tesis-panamericana"
      name="Universidad Panamericana de Guatemala"
      acronym="UPANA"
      h1="Asesoría de Tesis Panamericana: Trabajo de Graduación y Corrección"
      introParagraphs={[
        'La Universidad Panamericana de Guatemala tiene presencia en todo el país y sus trabajos de graduación deben cumplir los lineamientos de cada facultad y sede. La tesis es el requisito final de licenciatura y uno de los caminos de graduación en maestría.',
        'Con la UPANA acompañamos a estudiantes en la estructura, el formato y la redacción de su trabajo de graduación, ayudándolos a resolver las correcciones del asesor sin retrasos.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la Panamericana?"
      processParagraphs={[
        'El proceso incluye la aprobación de la idea o protocolo, el desarrollo del estudio, la revisión del borrador por parte del asesor y la evaluación final. Cada programa tiene formatos y referencias específicas que deben respetarse.',
        'La mayoría de los atrasos se deben a observaciones de forma no resueltas. Nuestra asesoría se enfoca justamente en eso: dejar el documento con un formato impecable y aplicar las observaciones en orden.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la UPANA"
      formatParagraphs={[
        'Configuramos el documento en Word según el manual de tu facultad, revisamos la coherencia entre objetivos y conclusiones, corregimos la redacción académica y normalizamos citas y referencias.',
        'También apoyamos a estudiantes de maestría de la UPANA en la estructura y presentación de sus investigaciones de posgrado.',
      ]}
      faqExtra={[
        {
          q: '¿Ayudan a estudiantes de las sedes de la Panamericana?',
          a: 'Sí, la asesoría es en línea, así que puedes recibirla sin importar si estudias en la sede central o en cualquier extensión de la UPANA en el interior.',
        },
        {
          q: '¿Apoyan tesis de maestría de la Panamericana?',
          a: 'Sí, atendemos tanto licenciaturas como maestrías y posgrados de la Universidad Panamericana de Guatemala.',
        },
      ]}
    />
  )
}