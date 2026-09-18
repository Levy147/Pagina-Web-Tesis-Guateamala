import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Tesis de Maestría en Guatemala | Asesoría Metodológica y de Redacción',
  description:
    'Asesoría profesional para tu tesis de maestría en Guatemala: metodología, marco teórico, redacción académica, formato y corrección de observaciones. Acompañamiento de posgrado con experiencia en universidades internacionales.',
  keywords:
    'tesis de maestría Guatemala, tesis posgrado, tesis maestría USAC, tesis maestría URL, metodología de investigación, asesoría metodológica, redacción académica, corrección tesis de maestría',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-de-maestria/',
  },
  openGraph: {
    title: 'Tesis de Maestría en Guatemala | Tesis Guatemala',
    description:
      'Asesoría para tesis de maestría: metodología, redacción académica, formato y corrección. Experiencia en posgrado a nivel nacional e internacional.',
  },
}

export default function TesisDeMaestria() {
  return (
    <LandingSEO
      slug="tesis-de-maestria"
      h1="Tesis de Maestría en Guatemala: Acompañamiento Metodológico y de Redacción"
      intro="El nivel de posgrado exige un rigor metodológico y académico más alto que la licenciatura. En Tesis Guatemala acompañamos a estudiantes de maestría en la estructura, la redacción y el formato de su tesis, ayudándolos a cumplir las exigencias del asesor y del comité de tesis."
      sections={[
        {
          heading: 'El reto de la tesis de maestría',
          paragraphs: [
            'Una tesis de maestría debe demostrar un manejo profundo de la teoría, una metodología bien fundamentada y un aporte relevante para tu disciplina. Muchos profesionales que trabajan tiempo completo se atrasan no por falta de capacidad, sino por no saber cómo ordenar las correcciones ni cuál es el formato exacto que exige su universidad.',
            'Te ayudamos a interpretar las observaciones del asesor y a priorizar qué corregir primero, para que el documento mantenga coherencia entre objetivos, metodología, resultados y conclusiones. Trabajamos capítulo por capítulo, respetando las líneas de investigación de tu programa de maestría.',
          ],
        },
        {
          heading: 'Qué hacemos por tu tesis de posgrado',
          paragraphs: [
            'Revisamos el planteamiento del problema, los objetivos, la hipótesis o supuestos de investigación, el marco teórico, el diseño metodológico, el instrumento de recolección de datos y el análisis de resultados. Además, corregimos la redacción académica y normalizamos la citación en formato APA, Vancouver u otro requerido por tu escuela de posgrado.',
            'Si tu tesis exige estadística o análisis de datos, te orientamos en la presentación de tablas y figuras para que comuniquen tus resultados con claridad. Y si te piden preparar la defensa, te apoyamos en la organización de la sustentación final.',
          ],
        },
      ]}
      bullets={[
        'Plan de trabajo por hitos para que sepas qué corregir y en qué orden.',
        'Revisión de metodología, instrumentos y análisis de datos.',
        'Redacción y corrección de estilo académico de nivel posgrado.',
        'Normalización de citas y referencias según el formato de tu universidad.',
        'Configuración del documento completo en Word o PDF.',
        'Seguimiento por etapas o capítulos hasta la entrega final.',
      ]}
      services={[
        { title: 'Asesoría Metodológica', desc: 'Diseño y coherencia de la investigación de tu maestría.' },
        { title: 'Revisión de Instrumentos', desc: 'Orientación en cuestionarios, entrevistas y herramientas de recolección.' },
        { title: 'Corrección de Estilo', desc: 'Redacción académica, claridad y coherencia del documento.' },
        { title: 'Preparación de Defensa', desc: 'Organización de la sustentación y presentación final.' },
      ]}
      faq={[
        {
          q: '¿Trabajan con tesis de maestría de universidades de Guatemala?',
          a: 'Sí. Tenemos experiencia con estudiantes de posgrado de la USAC, la Universidad Rafael Landívar, la Universidad del Istmo y otras instituciones, ajustándonos al normativo de graduación de cada escuela de posgrado.',
        },
        {
          q: '¿Me pueden ayudar solo con un capítulo o con las correcciones?',
          a: 'Sí, puedes enviar capítulos específicos o las observaciones del asesor y te orientamos sobre qué resolver primero y cómo implementarlo sin desordenar el documento.',
        },
        {
          q: '¿Ayudan con el análisis de datos?',
          a: 'Te orientamos en la presentación e interpretación de resultados, incluyendo cómo estructurar tablas y figuras y qué técnicas de análisis aplicar según tu marco metodológico.',
        },
      ]}
      related={[
        { path: '/tesis-de-grado/', label: 'Tesis de Grado' },
        { path: '/tesis-de-doctorado/', label: 'Tesis Doctoral' },
        { path: '/tareas-y-ensayos/', label: 'Ensayos y Tareas Académicas' },
        { path: '/normas-apa/', label: 'Norma APA y Formato' },
        { path: '/tesis-por-carrera/', label: 'Tesis por Carrera' },
      ]}
      ctaTitle="¿Tu tesis de maestría está estancada?"
      ctaText="Escribinos por WhatsApp o completá el formulario y te orientamos sobre metodología, redacción y corrección para avanzar con orden."
    />
  )
}