import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis URL | Trabajo de Graduación Universidad Rafael Landívar',
  description:
    'Asesoría de tesis para la Universidad Rafael Landívar (URL): trabajo de graduación, formato de la Facultad, corrección de observaciones y norma APA. Acompañamiento para licenciatura y maestría.',
  keywords:
    'tesis URL, asesoría tesis URL, tesis Rafael Landívar, trabajo de graduación URL, formato tesis URL, corrección tesis URL, ayuda tesis Landívar',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-url/',
  },
  openGraph: {
    title: 'Asesoría de Tesis URL | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Rafael Landívar: trabajo de graduación, formato y corrección.',
  },
}

export default function TesisUrl() {
  return (
    <UniversityPage
      slug="tesis-url"
      name="Universidad Rafael Landívar"
      acronym="URL"
      h1="Asesoría de Tesis URL: Trabajo de Graduación y Corrección Académica"
      introParagraphs={[
        'La Universidad Rafael Landívar tiene facultades en distintas sedes del país y exige trabajos de graduación con un alto nivel académico e investigativo. El acompañamiento del asesor es fundamental para cumplir con la calidad que caracteriza a la URL, tanto en licenciatura como en maestría.',
        'Hemos apoyado a estudiantes de la Landívar en la estructuración, el formato y la redacción de su tesis, adaptándonos a las guías y manuales de cada facultad.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la URL?"
      processParagraphs={[
        'En la URL el trabajo de graduación puede desarrollarse como tesis, estudio de caso o informe de investigación, según tu carrera. El estudiante presenta su propuesta, recibe acompañamiento de un asesor y pasa por etapas de revisión hasta la defensa ante el tribunal.', 
        'Las facultades de Ciencias Económicas y Empresariales, Ciencias Jurídicas y Sociales, Psicología, Ingeniería y Pedagogía tienen lineamientos específicos de formato y profundidad. Nuestra asesoría respeta esas guías y te orienta en cada entrega.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la URL"
      formatParagraphs={[
        'Revisamos tu borrador real, configuramos el formato en Word según la guía de tu facultad, corregimos la redacción académica, normalizamos citas y referencias y aplicamos las observaciones del asesor sin desordenar el documento.',
        'Si tu trabajo requiere análisis de resultados o preparación para la defensa, también te orientamos para que llegues con confianza y claridad.',
      ]}
      faqExtra={[
        {
          q: '¿Conocen el formato de las distintas facultades de la URL?',
          a: 'Sí, hemos trabajado con estudiantes de Ciencias Económicas y Empresariales, Ciencias Jurídicas y Sociales, Psicología, Ingeniería y Pedagogía de la URL, ajustándonos a los lineamientos de cada facultad.',
        },
        {
          q: '¿Pueden ayudarme si estudio en una sede fuera de la capital?',
          a: 'Sí, toda la asesoría es en línea por WhatsApp, correo y videollamada, sin importar en qué sede de la URL estudies.',
        },
      ]}
    />
  )
}