import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'

export interface LandingSection {
  heading: string
  paragraphs: string[]
}

export interface LandingService {
  title: string
  desc: string
}

export interface LandingFaq {
  q: string
  a: string
}

export interface LandingSEOProps {
  slug: string
  title?: string
  h1: string
  intro: string
  sections: LandingSection[]
  bullets: string[]
  services: LandingService[]
  faq: LandingFaq[]
  related: { path: string; label: string }[]
  ctaTitle: string
  ctaText: string
}

const siteUrl = 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala'

export default function LandingSEO({
  slug,
  title,
  h1,
  intro,
  sections,
  bullets,
  services,
  faq,
  related,
  ctaTitle,
  ctaText,
}: LandingSEOProps) {
  const pageUrl = `${siteUrl}/${slug}/`

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title ?? h1,
    description: intro,
    url: pageUrl,
    provider: {
      '@type': 'ProfessionalService',
      name: 'Tesis Guatemala',
      url: siteUrl,
      telephone: '+50258203956',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Guatemala',
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Tesis Guatemala',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: pageUrl,
      },
    ],
  }

  return (
    <main className="min-h-screen relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([serviceJsonLd, breadcrumbJsonLd]) }}
      />
      <Header />
      <section className="bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light text-primary-cream py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 max-w-4xl mx-auto">{h1}</h1>
          <p className="text-lg md:text-xl mb-8 text-primary-cream/90 max-w-3xl mx-auto">{intro}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/50258203956?text=Hola,%20me%20interesa%20tu%20servicio%20de%20asesor%C3%ADa%20acad%C3%A9mica"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-cyan text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-cyan/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Consultar por WhatsApp
            </a>
            <a
              href={`${siteUrl}/#contacto`}
              className="bg-transparent border-2 border-primary-cyan text-primary-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-cyan/10 transition-all duration-200"
            >
              Solicitar Asesoría
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-cream/80 via-white/60 to-primary-cyan/10 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-14">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed mb-4">
                    {p}
                  </p>
                ))}
              </div>
            ))}

            {bullets.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                  Qué incluye nuestro acompañamiento
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start space-x-3 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-5 border border-white/30"
                    >
                      <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-cyan text-primary-dark flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <span className="text-gray-700 leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {services.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                  Servicios relacionados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((s, i) => (
                    <div
                      key={i}
                      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/30"
                    >
                      <h3 className="text-xl font-bold text-primary-blue mb-2">{s.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {faq.length > 0 && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-6">
                  Preguntas frecuentes
                </h2>
                <div className="space-y-4">
                  {faq.map((f, i) => (
                    <details
                      key={i}
                      className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/30 overflow-hidden group"
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
            )}

            {related.length > 0 && (
              <div className="bg-gradient-to-br from-primary-blue/90 to-primary-light/90 rounded-3xl shadow-2xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-6">También podemos ayudarte con</h2>
                <div className="flex flex-wrap gap-3">
                  {related.map((r, i) => (
                    <Link
                      key={i}
                      href={r.path}
                      className="bg-white/20 hover:bg-white/30 transition-colors px-5 py-3 rounded-lg font-medium"
                    >
                      {r.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-cream mb-4">{ctaTitle}</h2>
            <p className="text-lg text-primary-cream/90 mb-8">{ctaText}</p>
            <a
              href="https://wa.me/50258203956?text=Hola,%20me%20interesa%20su%20servicio%20de%20asesor%C3%ADa%20de%20tesis"
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