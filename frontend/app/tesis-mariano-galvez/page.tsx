import type { Metadata } from 'next'
import UniversityPage from '@/components/UniversityPage'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis Mariano Gálvez | Trabajo de Graduación y Examen Técnico',
  description:
    'Asesoría de tesis para la Universidad Mariano Gálvez de Guatemala: trabajo de graduación, tesis de licenciatura y maestría, formato, redacción y corrección de observaciones.',
  keywords:
    'tesis Mariano Gálvez, asesoría tesis UMG, trabajo de graduación Mariano Gálvez, tesis UMG, corrección tesis UMG, examen técnico profesional, formato tesis Mariano Gálvez',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/tesis-mariano-galvez/',
  },
  openGraph: {
    title: 'Asesoría de Tesis Mariano Gálvez | Tesis Guatemala',
    description:
      'Acompañamiento para estudiantes de la Universidad Mariano Gálvez: trabajo de graduación, formato y corrección.',
  },
}

export default function TesisUmG() {
  return (
    <UniversityPage
      slug="tesis-mariano-galvez"
      name="Universidad Mariano Gálvez de Guatemala"
      acronym="UMG"
      h1="Asesoría de Tesis Mariano Gálvez: Trabajo de Graduación y Corrección"
      introParagraphs={[
        'La Universidad Mariano Gálvez es una de las instituciones con más presencia en Guatemala, con sedes en todo el país. Sus trabajos de graduación y tesis de licenciatura exigen cumplir con formatos específicos por facultad y, en muchas carreras, la preparación para examen técnico profesional.',
        'Hemos acompañado a estudiantes de la Mariano Gálvez en la estructura, el formato y la redacción de su tesis, ayudándolos a cumplir los plazos y las observaciones del asesor.',
      ]}
      processTitle="¿Cómo es el proceso de tesis en la Mariano Gálvez?"
      processParagraphs={[
        'Dependiendo de la carrera, la graduación se logra mediante tesis, trabajo de graduación o examen técnico profesional. El estudiante desarrolla su investigación con el acompañamiento de un asesor y debe cumplir las fases de revisión establecidas en el reglamento de su facultad.',
        'La clave está en llegar con un documento bien estructurado y en aplicar correctamente las observaciones para no atrasarse. Ahí es donde aporta nuestra asesoría.',
      ]}
      formatTitle="Cómo te ayudamos con tu tesis de la Mariano Gálvez"
      formatParagraphs={[
        'Configuramos el documento en Word según el formato de tu facultad, corregimos la redacción académica, normalizamos citas y referencias en norma APA y te ayudamos a implementar las correcciones del asesor de forma ordenada.',
        'Si tu carrera incluye examen técnico profesional, también te orientamos en la parte de presentación y organización de ideas.',
      ]}
      faqExtra={[
        {
          q: '¿Ayudan con tesis de carreras como derecho, ingeniería o administración?',
          a: 'Sí, tenemos experiencia con estudiantes de distintas facultades de la Mariano Gálvez, desde Derecho hasta Ingeniería, Administración y Psicología.',
        },
        {
          q: '¿Pueden ayudarme a distancia desde otra sede?',
          a: 'Sí, la asesoría es 100% en línea, así que no importa si estás en la sede central o en cualquier departamento del país.',
        },
      ]}
    />
  )
}