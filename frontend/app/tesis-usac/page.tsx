import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis USAC | Formato, Redacción y Corrección | Tesis Guatemala',
  description:
    'Asesoría de tesis para la Universidad de San Carlos de Guatemala: punto de tesis, formato por facultad, corrección de observaciones y norma APA. Acompañamiento para USAC licenciatura, maestría y doctorado.',
  keywords:
    'tesis USAC, asesoría tesis USAC, ayuda tesis USAC, punto de tesis USAC, tesis San Carlos, trabajo de graduación USAC, formato tesis USAC, corrección tesis USAC, normas APA USAC',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-usac/',
  },
  openGraph: {
    title: 'Asesoría de Tesis USAC | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la USAC: punto de tesis, formato por facultad, redacción y corrección de observaciones.',
  },
}

export default function TesisUsac() {
  return (
    <UniversityPage
      slug="tesis-usac"
      name="Universidad de San Carlos de Guatemala"
      acronym="USAC"
      h1="Asesoría de Tesis USAC: Formato, Redacción y Corrección"
      introParagraphs={[
        'La Universidad de San Carlos de Guatemala (USAC) es la universidad más grande del país y cada facultad tiene su propio proceso de tesis. El camino típico inicia con la aprobación del punto de tesis ante la unidad de tesis de tu facultad, continúa con el acompañamiento de un asesor designado y termina con la revisión de contenido y estilo, el examen privado y, en algunos casos, el examen público.',
        'En Tesis Guatemala conocemos estas etapas porque hemos acompañado a estudiantes de distintas facultades de la USAC. Te ayudamos a presentar tu informe con el formato y la calidad que exige la institución.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la USAC?"
      processParagraphs={[
        'El proceso comienza con el punto de tesis: un documento donde presentás tu tema, el problema de investigación, los objetivos preliminares y la justificación. Una vez aprobado, la facultad te asigna un asesor oficial. Después desarrollás el informe final, que pasa por revisión de contenido, revisión de estilo y, finalmente, la sustentación.',
        'Algunas facultades de la USAC, como Ciencias Económicas, exigen revisión de estilo obligatoria antes del examen privado; otras, como Derecho, requieren sistemas de citación propios con legislación y jurisprudencia. Nuestra asesoría se adapta al normativo vigente de tu carrera.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la USAC"
      formatParagraphs={[
        'Trabajamos sobre tu avance real: configuramos el documento en Microsoft Word según el manual de tu facultad, aplicamos las correcciones del asesor y la terna, ajustamos citas y referencias a norma APA 7 u otro sistema, y revisamos ortografía, gramática y redacción.',
        'Si tu facultad exige revisión de estilo, te dejamos el documento listo en forma para que el revisor no encuentre observaciones de formato y puedas avanzar al examen privado.',
      ]}
      faqExtra={[
        {
          q: '¿Me ayudan con el punto de tesis de la USAC?',
          a: 'Sí, te orientamos en la estructura del punto de tesis: tema, planteamiento del problema, objetivos y justificación. Eso sí, para comenzar el acompañamiento de tesis necesitás el anteproyecto o punto de tesis ya aprobado.',
        },
        {
          q: '¿Trabajan con todas las facultades de la USAC?',
          a: 'Tenemos experiencia con Ciencias Económicas, Ciencias Jurídicas y Sociales, Ingeniería, Humanidades, Psicología, Medicina y otras. El formato lo adaptamos al manual de tu unidad académica.',
        },
      ]}
    />
  )
}