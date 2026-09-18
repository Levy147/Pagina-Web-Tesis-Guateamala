import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Tesis por Carrera: Ingeniería, Derecho, Administración, Psicología y Más',
  description:
    'Asesoría de tesis por carrera en Guatemala: ingeniería industrial, civil y sistemas, derecho, administración de empresas, psicología, contaduría y más. Formato y redacción alineados a tu facultad.',
  keywords:
    'tesis de ingeniería, tesis de ingeniería industrial, tesis de ingeniería civil, tesis de sistemas, tesis de derecho, tesis de administración de empresas, tesis de psicología, tesis de contaduría, tesis por carrera Guatemala',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-por-carrera/',
  },
  openGraph: {
    title: 'Tesis por Carrera | Tesis Guatemala',
    description:
      'Asesoría de tesis adaptada a tu carrera: ingeniería, derecho, administración, psicología y más. Formato y redacción para tu facultad.',
  },
}

export default function TesisPorCarrera() {
  return (
    <LandingSEO
      slug="tesis-por-carrera"
      h1="Tesis por Carrera: Asesoría Adaptada a Tu Facultad y Tu Disciplina"
      intro="Cada carrera tiene exigencias y estilos de investigación distintos. Una tesis de ingeniería no se redacta como una de derecho ni se cita igual que una de psicología. En Tesis Guatemala adaptamos la asesoría al formato, la metodología y las normas de citación de tu carrera."
      sections={[
        {
          heading: 'Ingenierías: tesis técnicas y aplicadas',
          paragraphs: [
            'En tesis de ingeniería industrial, civil, sistemas o mecánica se prioriza el rigor técnico: diagnóstico, diseño, implementación o mejora de procesos. Te ayudamos a estructurar la metodología, a presentar datos, tablas, diagramas y cálculos de forma clara, y a redactar el informe con criterio de ingeniería.',
            'El formato suele incluir variables operacionales, población y muestra, y un análisis de resultados que demuestre la viabilidad de la propuesta. Nos aseguramos de que el documento cumpla el manual de tu facultad de ingeniería.',
          ],
        },
        {
          heading: 'Derecho, administración, psicología y más',
          paragraphs: [
            'En las tesis de derecho se usan sistemas de citación jurídica propios, con legislación y jurisprudencia. En administración y economía, el enfoque es aplicado, con estudios de caso. En psicología y educación, abundan los diseños cualitativos e instrumentos como entrevistas y cuestionarios.',
            'Gracias a nuestra experiencia con estudiantes de distintas universidades — USAC, URL, UFM, Mariano Gálvez, Da Vinci, del Istmo y otras — conocemos las particularidades de cada disciplina y te orientamos sobre estructura, redacción y las normas de la institución.',
          ],
        },
      ]}
      bullets={[
        'Ingeniería industrial, civil, sistemas y mecánica.',
        'Ciencias jurídicas y sociales con citación legal.',
        'Administración de empresas y ciencias económicas.',
        'Psicología, pedagogía y educación.',
        'Contaduría, mercadotecnia y negocios.',
        'Ciencias de la salud y otras disciplinas.',
      ]}
      services={[
        { title: 'Tesis de Ingeniería', desc: 'Metodología técnica, datos y presentación de resultados.' },
        { title: 'Tesis de Derecho', desc: 'Estructura jurídica y sistemas de citación propios.' },
        { title: 'Tesis de Administración', desc: 'Enfoque aplicado, caso de estudio y análisis de resultados.' },
        { title: 'Tesis de Psicología', desc: 'Diseños cualitativos, instrumentos y análisis.' },
      ]}
      faq={[
        {
          q: '¿Tienen experiencia en mi carrera?',
          a: 'Hemos acompañado tesis de ingeniería, derecho, administración, psicología, pedagogía, contaduría y otras disciplinas. Cuéntanos tu caso y te orientamos.',
        },
        {
          q: '¿Se adaptan al sistema de citación de mi facultad?',
          a: 'Sí. Trabajamos con norma APA, sistemas jurídicos de citación, Vancouver, ISO y las guías internas de cada universidad.',
        },
        {
          q: '¿Pueden ayudarme con mi tesis si estudie en una universidad específica?',
          a: 'Sí, hemos trabajado con estudiantes de la USAC, URL, UFM, Mariano Gálvez, Da Vinci, del Istmo, Panamericana y más universidades de Guatemala.',
        },
      ]}
      related={[
        { path: '/tesis-de-grado/', label: 'Tesis de Grado' },
        { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
        { path: '/normas-apa/', label: 'Norma APA y Formato' },
        { path: '/tareas-y-ensayos/', label: 'Ensayos y Tareas' },
      ]}
      ctaTitle="¿Ya sabes cuál es tu carrera?"
      ctaText="Escribinos por WhatsApp y te contamos cómo adaptamos la asesoría al formato y las normas de tu facultad."
    />
  )
}