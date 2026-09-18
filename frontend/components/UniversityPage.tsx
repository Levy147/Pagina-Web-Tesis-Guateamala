import LandingSEO from './LandingSEO'

export interface UniversityFaq {
  q: string
  a: string
}

export interface UniversityPageProps {
  slug: string
  name: string
  acronym: string
  h1: string
  introParagraphs: string[]
  processTitle: string
  processParagraphs: string[]
  formatTitle: string
  formatParagraphs: string[]
  faqExtra: UniversityFaq[]
}

const universityLinks = [
  { label: 'Tesis USAC', path: '/tesis-usac/' },
  { label: 'Tesis URL', path: '/tesis-url/' },
  { label: 'Tesis UFM', path: '/tesis-ufm/' },
  { label: 'Tesis Mariano Gálvez', path: '/tesis-mariano-galvez/' },
  { label: 'Tesis Da Vinci', path: '/tesis-da-vinci/' },
  { label: 'Tesis del Istmo', path: '/tesis-del-istmo/' },
  { label: 'Tesis Panamericana', path: '/tesis-panamericana/' },
  { label: 'Tesis Regional', path: '/tesis-regional/' },
  { label: 'Tesis Rural', path: '/tesis-rural/' },
]

export default function UniversityPage({
  slug,
  name,
  acronym,
  h1,
  introParagraphs,
  processTitle,
  processParagraphs,
  formatTitle,
  formatParagraphs,
  faqExtra,
}: UniversityPageProps) {
  const related = [
    ...universityLinks.filter((u) => u.label !== `Tesis ${acronym}`).slice(0, 4),
    { path: '/asesoria-de-tesis-guatemala/', label: 'Asesoría de Tesis: Guía Completa' },
    { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
  ]

  return (
    <LandingSEO
      slug={slug}
      h1={h1}
      intro={introParagraphs.join(' ')}
      sections={[
        {
          heading: processTitle,
          paragraphs: processParagraphs,
        },
        {
          heading: formatTitle,
          paragraphs: formatParagraphs,
        },
      ]}
      bullets={[
        'Configuración completa del formato en Microsoft Word según el manual de tu universidad.',
        'Revisión y aplicación ordenada de las correcciones del asesor o la terna.',
        'Normalización de citas y referencias bajo norma APA 7 u otro sistema de citación.',
        'Ajuste de portada, índices, numeración, tablas, figuras y anexos.',
        'Revisión de ortografía, gramática y redacción académica.',
        'Acompañamiento por capítulos o entregas parciales hasta la versión final.',
      ]}
      services={[
        { title: 'Asesoría en Formato', desc: 'Configuración del documento según el manual de tu institución.' },
        { title: 'Asesoría en Redacción', desc: 'Claridad, coherencia y estilo académico en tu texto.' },
        { title: 'Corrección de Observaciones', desc: 'Aplicación de los cambios sugeridos por asesor y jurado.' },
        { title: 'Acompañamiento Continuo', desc: 'Seguimiento hasta que tu trabajo esté listo para entregar.' },
      ]}
      faq={[
        {
          q: `¿Conocen el proceso de tesis de la ${name}?`,
          a: `Sí, hemos acompañado estudiantes de la ${name} (${acronym}) en licenciatura y posgrado, adaptándonos a su normativo de graduación y a las modalidades de trabajo de graduación vigentes.`,
        },
        {
          q: '¿Necesito tener aprobado mi anteproyecto o punto de tesis?',
          a: 'Requisito importante en Tesis Guatemala: el estudiante debe tener aprobado el anteproyecto o punto de tesis. A partir de ahí podemos apoyarte con el formato, la redacción y la corrección de observaciones.',
        },
        ...faqExtra,
      ]}
      related={related}
      ctaTitle={`¿Estudiás en la ${name} y necesitás ayuda con tu tesis?`}
      ctaText="Escribinos por WhatsApp o completá el formulario y te asesoramos sobre formato, redacción y corrección para tu universidad."
    />
  )
}