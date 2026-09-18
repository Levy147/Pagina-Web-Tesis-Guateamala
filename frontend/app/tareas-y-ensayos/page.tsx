import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Tareas y Ensayos Universitarios en Guatemala | Asesoría Académica',
  description:
    'Asesoría académica para ensayos, monografías, síntesis, portafolios y tareas universitarias en Guatemala. Redacción, formato y orientación teórica para mejorar la calidad de tus trabajos.',
  keywords:
    'tareas universitarias Guatemala, ayuda tareas, ensayos académicos, monografía, síntesis, portafolio, trabajos académicos, tareas de universidad, ayuda ensayos, redacción de tareas',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tareas-y-ensayos/',
  },
  openGraph: {
    title: 'Tareas y Ensayos Universitarios | Tesis Guatemala',
    description:
      'Asesoría para ensayos, monografías, síntesis, portafolios y tareas universitarias: redacción, formato y orientación teórica.',
  },
}

export default function TareasYEnsayos() {
  return (
    <LandingSEO
      slug="tareas-y-ensayos"
      h1="Tareas, Ensayos y Trabajos Académicos Universitarios en Guatemala"
      intro="No todo lo académico es una tesis. Los ensayos, monografías, síntesis y portafolios también exigen estructura, redacción clara y cumplimiento de normas. En Tesis Guatemala te asesoramos para que tus tareas universitarias reflejen la calidad que tu institución espera."
      sections={[
        {
          heading: '¿Qué tipo de trabajos académicos te ayudamos a elaborar?',
          paragraphs: [
            'Trabajamos con ensayos argumentativos, monografías, síntesis de lecturas, informes de investigación, portafolios, resúmenes críticos y otros trabajos de la universidad. La diferencia entre un trabajo aprobado y uno con observaciones casi siempre está en la estructura, la coherencia de las ideas y el cuidado del formato.',
            'Nuestra asesoría se enfoca en la parte teórica y de redacción: te ayudamos a organizar tus ideas, a citar correctamente las fuentes, a redactar con claridad y a darle al documento el formato que exige el curso o tu universidad.',
          ],
        },
        {
          heading: '¿Cómo funciona el acompañamiento?',
          paragraphs: [
            'Nos compartís el enunciado del trabajo, la guía o rúbrica de tu catedrático y tu borrador o avance. Te devolvemos observaciones concretas con recomendaciones de redacción, estructura y formato para que apliques con tus propias palabras, mejorando tu aprendizaje real.',
            'Si estás empezando de cero, te orientamos sobre cómo armar el esquema del trabajo, qué información investigar y cómo desarrollarla con una redacción académica adecuada.',
          ],
        },
      ]}
      bullets={[
        'Ensayos argumentativos y de opinión con estructura académica.',
        'Monografías y trabajos de investigación documental.',
        'Síntesis, resúmenes y análisis crítico de lecturas.',
        'Portafolios y actividades de los cursos de la carrera.',
        'Corrección de redacción, ortografía y estilo.',
        'Formato según los lineamientos de tu universidad.',
      ]}
      services={[
        { title: 'Ensayos', desc: 'Estructura, argumentación y redacción académica.' },
        { title: 'Monografías', desc: 'Investigación documental y desarrollo por capítulos.' },
        { title: 'Síntesis y Portafolios', desc: 'Organización y redacción de actividades del curso.' },
        { title: 'Corrección Académica', desc: 'Revisión de ortografía, gramática, estilo y formato.' },
      ]}
      faq={[
        {
          q: '¿Ayudan con tareas de todas las carreras?',
          a: 'Sí, apoyamos trabajos de administración, ingeniería, psicología, derecho, educación y muchas otras disciplinas. El acompañamiento se enfoca en redacción, estructura y formato.',
        },
        {
          q: '¿Pueden orientarme si solo tengo el enunciado?',
          a: 'Sí. Te ayudamos a armar el esquema del trabajo, definir los puntos a desarrollar y planificar la redacción para que avances con claridad.',
        },
        {
          q: '¿La asesoría es solo de redacción?',
          a: 'Principalmente sí: orientación teórica, estructura y redacción. El contenido y las decisiones las tomás vos, nosotros te ayudamos a expresarlas con calidad académica.',
        },
      ]}
      related={[
        { path: '/tesis-de-grado/', label: 'Tesis de Grado' },
        { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
        { path: '/normas-apa/', label: 'Norma APA y Formato' },
      ]}
      ctaTitle="¿Tenés una tarea o ensayo por entregar?"
      ctaText="Escribinos por WhatsApp con el enunciado y te orientamos sobre estructura, redacción y formato para que apruebes con confianza."
    />
  )
}