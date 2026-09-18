import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Tesis Doctoral | Asesoría de Investigación y Redacción Académica',
  description:
    'Asesoría profesional para tu tesis doctoral o investigación doctoral: rigor metodológico, marco teórico, redacción académica, formato y corrección de observaciones. Acompañamiento de doctorado a distancia.',
  keywords:
    'tesis doctoral, doctorado tesis, asesoría tesis doctoral, investigación doctoral, redacción académica doctorado, metodología doctorado, corrección tesis doctoral, tesis PhD Guatemala',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-de-doctorado/',
  },
  openGraph: {
    title: 'Tesis Doctoral | Tesis Guatemala',
    description:
      'Acompañamiento para tesis doctoral: rigor metodológico, redacción académica, formato y corrección de observaciones.',
  },
}

export default function TesisDeDoctorado() {
  return (
    <LandingSEO
      slug="tesis-de-doctorado"
      h1="Tesis Doctoral: Asesoría de Investigación y Redacción Académica de Alto Nivel"
      intro="La tesis doctoral es el trabajo de investigación más exigente del mundo académico: originalidad, rigor teórico y metodológico, y un aporte inédito a tu disciplina. En Tesis Guatemala acompañamos a estudiantes de doctorado en la organización, redacción y formato de su investigación."
      sections={[
        {
          heading: 'Las exigencias de un doctorado',
          paragraphs: [
            'Un trabajo doctoral debe superar exámenes de candidatura, defender una propuesta, realizar un estudio inédito y producir un manuscrito a la altura de las normas científicas internacionales. Cada corrección del comité puede involucrar meses de relectura y ajustes, especialmente en la coherencia entre la pregunta de investigación, el marco teórico y la metodología.',
            'Uno de los puntos más frecuentes en las tesis doctorales es la revisión de literatura y el estado del arte. Te ayudamos a estructurar esta sección con criterio académico, a cohesionar la argumentación y a normalizar las citas y referencias para que el documento cumpla los estándares de tu programa en Guatemala o en el extranjero.',
          ],
        },
        {
          heading: 'Cómo te acompañamos en tu doctorado',
          paragraphs: [
            'Trabajamos sobre tus avances reales, ya sea que estés en la propuesta, en el capítulo de metodología o en la discusión de resultados. Revisamos la consistencia interna del documento, mejoramos la redacción académica en español o inglés y nos aseguramos de que el formato cumpla las guías de tu institución.',
            'También te asesoramos en la preparación de la defensa: estructura de la presentación, orden de las ideas y los argumentos clave que debés defender frente al comité evaluador.',
          ],
        },
      ]}
      bullets={[
        'Revisión de coherencia entre pregunta, objetivos, marco teórico y metodología.',
        'Estructuración del estado del arte y revisión de literatura.',
        'Redacción académica y editorialización de alto nivel.',
        'Normalización de citas y referencias según normas internacionales.',
        'Formato y configuración del manuscrito para entrega.',
        'Preparación para la defensa y el examen doctoral.',
      ]}
      services={[
        { title: 'Asesoría Metodológica', desc: 'Diseño y rigor de la investigación doctoral.' },
        { title: 'Revisión de Literatura', desc: 'Organización del estado del arte y marco teórico.' },
        { title: 'Redacción Académica', desc: 'Argumentación, claridad y estilo científico.' },
        { title: 'Preparación de Defensa', desc: 'Presentación y argumentos frente al comité.' },
      ]}
      faq={[
        {
          q: '¿Acompañan doctorados a distancia o internacionales?',
          a: 'Sí, trabajamos de forma remota por WhatsApp, correo y videollamada. Hemos apoyado tesis doctorales de estudiantes hispanohablantes en distintos programas internacionales.',
        },
        {
          q: '¿Puedo contratar ayuda solo para un capítulo?',
          a: 'Sí, puedes solicitar la revisión de un capítulo específico, la corrección de estilo de todo el documento o el acompañamiento completo por etapas.',
        },
        {
          q: '¿Revisan tesis en inglés?',
          a: 'Sí, ofrecemos revisión y corrección de redacción académica en inglés, y consultas en español para que el proceso no sea barrera.',
        },
      ]}
      related={[
        { path: '/tesis-de-grado/', label: 'Tesis de Grado' },
        { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
        { path: '/normas-apa/', label: 'Norma APA y Formato' },
        { path: '/tesis-por-carrera/', label: 'Tesis por Carrera' },
      ]}
      ctaTitle="¿Avanzando en tu doctorado?"
      ctaText="Escribinos por WhatsApp y te ayudamos a destrabar la metodología, la redacción o el formato de tu tesis doctoral."
    />
  )
}