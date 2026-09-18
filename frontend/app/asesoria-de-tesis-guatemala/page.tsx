import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Asesoría de Tesis en Guatemala: Guía Completa de Costos y Proceso',
  description:
    'Guía completa de asesoría de tesis en Guatemala: qué incluye, cuánto se cobra, quiénes son los asesores y dónde encontrar ayuda profesional para tu trabajo de graduación, tesis de grado, maestría o doctorado.',
  keywords:
    'asesoría de tesis Guatemala, ayuda tesis, costo asesoría de tesis, cuánto cobran por hacer una tesis, asesor de tesis, dónde encontrar ayuda para hacer tesis, corrección de tesis, trabajo de graduación Guatemala',
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/asesoria-de-tesis-guatemala/',
  },
  openGraph: {
    title: 'Asesoría de Tesis en Guatemala: Guía Completa | Tesis Guatemala',
    description:
      'Qué incluye una asesoría de tesis, cuánto cuesta, quiénes son los asesores y dónde encontrar ayuda profesional en Guatemala.',
  },
}

const faq = [
  {
    q: '¿Cuánto se cobra por una asesoría de tesis?',
    a: 'En Guatemala una asesoría de tesis por horas suele costar entre Q100 y Q400 por sesión según el nivel académico y la experiencia del asesor. Muchos servicios también ofrecen planes por hitos (por capítulo o por entrega) y asesorías por videollamada, con precios que varían según el alcance. Lo mejor es pedir una cotización clara y sin compromiso según tu etapa.',
  },
  {
    q: '¿Cuánto cobran para hacer una tesis?',
    a: 'El precio de "hacer" una tesis en Guatemala varía según el nivel (licenciatura, maestría o doctorado), la extensión y el plazo. Los rangos del mercado pueden ir desde Q8,000 hasta Q35,000 o más. Importante: hoy las universidades usan software antiplagio y de detección de IA, así que el acompañamiento (trabajar contigo) es la opción más segura y recomendable.',
  },
  {
    q: '¿Dónde puedo encontrar ayuda para hacer mi tesis?',
    a: 'Puedes encontrar ayuda en: el centro de escritura o unidad de tesis de tu universidad, asesores independientes y servicios de asesoría en línea como Tesis Guatemala, correctores de estilo profesionales, y plataformas de tutorías. Verifica siempre referencias, pedí cotización por escrito y desconfía de ofertas extremadamente baratas o que te prometan una tesis 100% aprobada.',
  },
  {
    q: '¿Cómo se les llama a los asesores de tesis?',
    a: 'Se les llama asesor de tesis, tutor, mentor académico, asesor metodológico, revisor o consultor académico. En la USAC, el asesor oficial es asignado por la facultad y, en varios programas, puede haber además un revisor de contenido y un revisor de estilo.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function AsesoriaDeTesis() {
  return (
    <main className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Header />

      <section className="bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light text-primary-cream py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            Asesoría de Tesis en Guatemala: Guía Completa de Costos y Proceso
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-cream/90 max-w-3xl mx-auto">
            La asesoría de tesis es un servicio de acompañamiento profesional que te guía en la
            planeación, redacción, corrección y defensa de tu trabajo de graduación. Aquí te
            explicamos qué incluye, cuánto cuesta y dónde conseguirla en Guatemala.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cream/80 via-white/60 to-primary-cyan/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-14">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                ¿Qué incluye una asesoría de tesis?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Una asesoría de tesis profesional normalmente cubre estas etapas:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'Planteamiento y protocolo: elección del tema, pregunta de investigación, objetivos y diseño del estudio.',
                  'Metodología y análisis: definición de variables, métodos de investigación y procesamiento de datos (por ejemplo con Excel o SPSS).',
                  'Redacción y normas: escritura académica según las normas exigidas, como APA 7, Vancouver, Chicago o las propias de tu universidad.',
                  'Control de plagio: revisión con sistemas como Turnitin para garantizar la originalidad del texto.',
                  'Preparación para la defensa: práctica de preguntas y diseño de la presentación del examen o sustentación.',
                  'Aplicación de correcciones: ayuda para implementar las observaciones del asesor y la terna sin desordenar el documento.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/30"
                  >
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan text-primary-dark flex items-center justify-center text-sm font-bold">
                      ✓
                    </span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                ¿Cuánto se cobra por una asesoría de tesis en Guatemala?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Los precios dependen del nivel académico, la etapa en la que estés y el tipo de
                acompañamiento. Como referencia del mercado en Guatemala:
              </p>
              <ul className="space-y-4">
                <li className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30">
                  <h3 className="text-xl font-bold text-primary-blue mb-2">Asesoría por hora o videollamada</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sesiones puntuales para resolver dudas metodológicas o de formato: generalmente entre Q100 y Q400 por sesión, según la experiencia del asesor. Algunos servicios ofrecen la primera consulta sin costo.
                  </p>
                </li>
                <li className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30">
                  <h3 className="text-xl font-bold text-primary-blue mb-2">Corrección por página o plan por hitos</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Un corrector de estilo cobra por página o por capítulo. Las asesorías por hitos (entregas parciales) permiten cotizar según tu avance y tu fecha límite.
                  </p>
                </li>
                <li className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/30">
                  <h3 className="text-xl font-bold text-primary-blue mb-2">Elaboración completa</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Si buscan "hacerte la tesis", los rangos van de Q8,000 a Q35,000 o más, según nivel y extensión. Recuerda que las universidades aplican antiplagio y detección de IA: la opción segura es el acompañamiento, donde tú aportas el contenido y el asesor te guía.
                  </p>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                ¿Dónde encontrar ayuda para tu tesis en Guatemala?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Existen varias opciones confiables:
              </p>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  'La unidad de tesis o centro de escritura de tu propia universidad (gratuito).',
                  'Tu asesor oficial designado por la facultad, como en la USAC.',
                  'Servicios de asesoría en línea y correctores de estilo, como Tesis Guatemala.',
                  'Plataformas de tutorías particulares por hora.',
                  'Grupos de estudiantes y redes sociales donde piden recomendaciones.',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start space-x-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/30"
                  >
                    <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-dark text-primary-cyan flex items-center justify-center text-sm font-bold">
                      •
                    </span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Antes de contratar: pedí referencias o portafolio, verificá su experiencia con tu
                universidad, exigí una cotización por escrito y acordá entregas parciales. Desconfiá
                de precios extremadamente bajos y de promesas de aprobación garantizada.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                ¿Quiénes son los asesores de tesis?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                El asesor de tesis puede ser el docente oficial que asigna tu universidad, un
                profesional externo con experiencia en investigación (asesor metodológico), un
                corrector de estilo o un mentor académico independiente. En la USAC, por ejemplo,
                el asesor oficial acompaña el desarrollo del estudio, y puede haber un revisor de
                contenido y uno de estilo. Un asesor externo es un apoyo complementario: revisa que
                tu reglamento universitario no prohíba recibir asistencia privada.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                ¿Cómo se llama el asesor de tesis y cómo trabaja?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                También se les conoce como tutor de tesis, mentor académico o consultor académico.
                Trabajan contigo — no en tu lugar —: revisan tu avance, te explican qué corregir,
                priorizan las observaciones y te dejan un plan claro para avanzar. El resultado final
                siempre lo validás vos, y la evaluación depende de tu profesor o comité.
              </p>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                Preguntas frecuentes sobre asesoría de tesis
              </h2>
              <div className="space-y-4">
                {faq.map((f, i) => (
                  <details
                    key={i}
                    className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 overflow-hidden"
                  >
                    <summary className="cursor-pointer font-semibold text-primary-dark text-lg px-6 py-4 hover:bg-white/90 transition-colors">
                      {f.q}
                    </summary>
                    <p className="px-6 pb-5 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-blue/90 to-primary-light/90 rounded-3xl shadow-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Nuestros servicios de asesoría</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Tesis de Grado', path: '/tesis-de-grado/' },
                  { label: 'Tesis de Maestría', path: '/tesis-de-maestria/' },
                  { label: 'Tesis Doctoral', path: '/tesis-de-doctorado/' },
                  { label: 'Tesis USAC', path: '/tesis-usac/' },
                  { label: 'Tesis URL', path: '/tesis-url/' },
                  { label: 'Tesis UFM', path: '/tesis-ufm/' },
                  { label: 'Ensayos y Tareas', path: '/tareas-y-ensayos/' },
                  { label: 'Norma APA y Formato', path: '/normas-apa/' },
                ].map((s) => (
                  <a
                    key={s.path}
                    href={`https://levy147.github.io/Pagina-Web-Tesis-Guateamala${s.path}`}
                    className="bg-white/20 hover:bg-white/30 transition-colors px-5 py-3 rounded-lg font-medium"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-cream mb-4">
              ¿Necesitás asesoría de tesis en Guatemala?
            </h2>
            <p className="text-lg text-primary-cream/90 mb-8">
              Escribinos por WhatsApp o completá el formulario y recibí una orientación clara sobre
              qué corregir, cuánto cuesta y cómo avanzar según tu etapa.
            </p>
            <a
              href="https://wa.me/50258203956?text=Hola,%20necesito%20asesor%C3%ADa%20de%20tesis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary-cyan text-primary-dark px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary-cyan/90 transition-all duration-200 shadow-lg"
            >
              Escríbenos ahora
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </main>
  )
}