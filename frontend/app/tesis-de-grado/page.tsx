import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Tesis de Grado en Guatemala | Asesoría y Corrección | Tesis Guatemala',
  description:
    'Asesoría profesional para tu tesis de grado o tesis de licenciatura en Guatemala. Redacción, formato, norma APA y corrección de las observaciones del asesor. Acompañamiento paso a paso para USAC, URL, UFM y más.',
  keywords:
    'tesis de grado Guatemala, tesis de licenciatura, tesis grado USAC, tesis grado URL, tesis grado UFM, trabajo de graduación, asesoría tesis de grado, corrección tesis, anteproyecto, punto de tesis',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-de-grado/',
  },
  openGraph: {
    title: 'Tesis de Grado en Guatemala | Tesis Guatemala',
    description:
      'Asesoría profesional para tu tesis de grado: formato, redacción, norma APA y corrección de observaciones. Experiencia con USAC, URL, UFM y más.',
  },
}

export default function TesisDeGrado() {
  return (
    <LandingSEO
      slug="tesis-de-grado"
      h1="Tesis de Grado en Guatemala: Asesoría Profesional de Formato y Redacción"
      intro="La tesis de grado es el trabajo de graduación que certifica tu formación académica en la licenciatura. En Tesis Guatemala te acompañamos durante todo el proceso: desde la corrección del formato en Word hasta la preparación de la terna, enfocándonos en que tu trabajo cumpla los estándares de tu universidad."
      sections={[
        {
          heading: '¿En qué consiste una tesis de grado?',
          paragraphs: [
            'Una tesis de grado — o trabajo de graduación, según la universidad — es el documento final donde demuestrás tus competencias de investigación dentro de la carrera. Para aprobarla, necesitás que el anteproyecto o punto de tesis esté aprobado por la unidad de tesis de tu facultad y que el informe cumpla las exigencias de formato, redacción y normativa de la institución.',
            'El proceso típico incluye: planteamiento del problema, justificación, objetivos, marco teórico, metodología, presentación de resultados, conclusiones y referencias bibliográficas. Cada universidad tiene su propio manual de estilo, y la corrección de las observaciones del asesor y la terna puede ser la etapa que más tiempo consume si no tenés un acompañamiento claro.',
          ],
        },
        {
          heading: 'Cómo te ayudamos con tu tesis de grado',
          paragraphs: [
            'Trabajamos sobre tu documento real. Revisamos la estructura, configuramos el formato en Microsoft Word según el manual de tu facultad, aplicamos las correcciones del asesor, ajustamos las citas y referencias bibliográficas a norma APA u otro sistema, y te orientamos sobre la coherencia y claridad de tu redacción.',
            'Si estás en la etapa de presentar el anteproyecto o ya tenés un borrador avanzado, podemos apoyarte en la parte de formato y corrección de estilo sin necesidad de que empieces de cero. Nuestro enfoque es acompañarte sin suplantarte: vos aportás el contenido de la investigación y nosotros te ayudamos a que el documento se vea profesional.',
          ],
        },
      ]}
      bullets={[
        'Configuración completa del formato en Word: márgenes, espaciado, numeración de páginas, encabezados y estructura de capítulos.',
        'Revisión y aplicación de las correcciones sugeridas por el asesor o la terna.',
        'Normalización de citas y referencias bibliográficas según norma APA 7, Vancouver u otro sistema.',
        'Ajuste de tablas, figuras, anexos y glosario al formato requerido.',
        'Revisión de ortografía, gramática, puntuación y claridad del texto académico.',
        'Orientación para cumplir con los requisitos de entrega de tu universidad.',
      ]}
      services={[
        { title: 'Asesoría en Formato', desc: 'Configuración de Word y ajuste al manual de estilo de tu facultad.' },
        { title: 'Asesoría en Redacción', desc: 'Mejoramos coherencia, claridad y estilo formal de tu texto.' },
        { title: 'Corrección de Observaciones', desc: 'Aplicamos y documentamos las correcciones del asesor y la terna.' },
        { title: 'Acompañamiento Integral', desc: 'Seguimiento continuo hasta que tu tesis de grado esté lista para entregar.' },
      ]}
      faq={[
        {
          q: '¿Pueden ayudarme si ya aprobé mi anteproyecto o punto de tesis?',
          a: 'Sí, de hecho ese es el momento ideal para comenzar. Una vez aprobado el punto de tesis, trabajamos sobre tu borrador para darle formato, corregir la redacción y aplicar las observaciones que te hagan.',
        },
        {
          q: '¿Trabajan con tesis de la USAC y otras universidades públicas?',
          a: 'Sí, tenemos experiencia con la Universidad de San Carlos de Guatemala, la Universidad Rural, la Universidad de San Cristóbal y otras universidades nacionales. Adaptamos el formato al manual vigente de cada facultad.',
        },
        {
          q: '¿Pueden ayudarme con la norma APA?',
          a: 'Sí, nos especializamos en formato APA 7 y en la corrección de citas y referencias bibliográficas, tanto en el cuerpo del texto como en la sección de referencias y anexos.',
        },
      ]}
      related={[
        { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
        { path: '/tesis-de-doctorado/', label: 'Tesis Doctoral' },
        { path: '/tareas-y-ensayos/', label: 'Ensayos y Tareas Académicas' },
        { path: '/normas-apa/', label: 'Norma APA y Formato' },
        { path: '/tesis-por-carrera/', label: 'Tesis por Carrera' },
      ]}
      ctaTitle="¿Necesitás ayuda con tu tesis de grado?"
      ctaText="Completá el formulario o escribinos por WhatsApp y te asesoramos sobre formato, redacción y corrección de las observaciones de tu asesor."
    />
  )
}