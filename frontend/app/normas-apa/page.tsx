import type { Metadata } from 'next'
import LandingSEO from '@/components/LandingSEO'

export const metadata: Metadata = {
  title: 'Normas APA y Formato de Tesis | Corrección de Citas y Referencias',
  description:
    'Corrección de normas APA 7, citas y referencias bibliográficas, y configuración del formato de tesis en Word: márgenes, espaciado, portada, índices y numeración. Asesoría para Guatemala.',
  keywords:
    'normas APA, norma APA 7, citación APA, referencias bibliográficas, formato tesis, configuración Word tesis, márgenes tesis, portada tesis, índice, corrección de formato, formato APA Guatemala',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/normas-apa/',
  },
  openGraph: {
    title: 'Normas APA y Formato de Tesis | Tesis Guatemala',
    description:
      'Corrección de norma APA 7, citas, referencias y formato de tesis en Word para Guatemala.',
  },
}

export default function NormasApa() {
  return (
    <LandingSEO
      slug="normas-apa"
      h1="Normas APA y Formato de Tesis: Corrección de Citas, Referencias y Word"
      intro="Uno de los motivos más comunes de las observaciones en una tesis es el formato: citas mal hechas, referencias incompletas, márgenes incorrectos o índices desordenados. En Tesis Guatemala nos especializamos en la configuración del formato en Word y en la normalización de citas y referencias según las normas de tu universidad."
      sections={[
        {
          heading: 'Normas APA 7 y otros sistemas de citación',
          paragraphs: [
            'La norma APA 7 regula las citas dentro del texto, la lista de referencias, la presentación de tablas y figuras y el estilo general del documento. Errores frecuentes incluyen citas sin el año, referencias incompletas, uso incorrecto de la sangría, o mezclar normas en un mismo documento.',
            'También trabajamos con otros sistemas: Vancouver (ciencias de la salud), formato jurídico con notas al pie (derecho), ISO 690 y las guías internas de cada facultad. Revisamos título, portada, índices, numeración romana y arábiga, encabezados, espaciado, márgenes y sangría.',
          ],
        },
        {
          heading: 'Configuración profesional del documento en Word',
          paragraphs: [
            'Configuramos el documento completo para que cumpla el manual de tu universidad: estilos de títulos, tabla de contenido automática, numeración de páginas, figuras, tablas, anexos y glosario. Esto no solo evita correcciones de forma, sino que te ahorra horas valiosas antes de la entrega.',
            'Si ya recibiste observaciones, te ayudamos a aplicarlas sin desordenar el resto del documento, priorizando qué ajustar primero y dejándote un archivo ordenado y profesional.',
          ],
        },
      ]}
      bullets={[
        'Corrección de citas dentro del texto según norma APA 7.',
        'Revisión y normalización de la lista de referencias bibliográficas.',
        'Configuración de márgenes, espaciado, sangría y numeración en Word.',
        'Tabla de contenido, índices de tablas y figuras automáticos.',
        'Portada, título, resumen y páginas preliminares según tu universidad.',
        'Aplicación ordenada de las correcciones del asesor o revisor.',
      ]}
      services={[
        { title: 'Norma APA 7', desc: 'Citas y referencias normalizadas en tu documento.' },
        { title: 'Formato Word', desc: 'Configuración completa del documento en Microsoft Word.' },
        { title: 'Vancouver y Otros', desc: 'Sistemas de citación según tu área: salud, derecho, ISO.' },
        { title: 'Aplicación de Correcciones', desc: 'Implementación de las observaciones del tutor.' },
      ]}
      faq={[
        {
          q: '¿Pueden revisar solo mis referencias bibliográficas?',
          a: 'Sí, podemos corregir únicamente la sección de citas y referencias, o revisar el documento completo si lo prefieres.',
        },
        {
          q: '¿Trabajan con normas APA 7?',
          a: 'Sí, aplicamos la séptima edición de APA y también otros sistemas como Vancouver, ISO o el formato jurídico de tu facultad.',
        },
        {
          q: '¿Me ayudan con el índice automático de Word?',
          a: 'Sí, configuramos los estilos de títulos y la tabla de contenido automática para que el índice siempre esté actualizado.',
        },
      ]}
      related={[
        { path: '/tesis-de-grado/', label: 'Tesis de Grado' },
        { path: '/tesis-de-maestria/', label: 'Tesis de Maestría' },
        { path: '/tesis-por-carrera/', label: 'Tesis por Carrera' },
      ]}
      ctaTitle="¿Te están rechazando por el formato?"
      ctaText="Escribinos por WhatsApp con tu documento o el manual de tu universidad y te cotizamos la corrección de norma APA y formato."
    />
  )
}