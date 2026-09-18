'use client'

import Link from 'next/link'

const services = [
  {
    path: '/tesis-de-grado/',
    title: 'Tesis de Grado',
    desc: 'Acompañamiento en formato, redacción y corrección para tu tesis de licenciatura.',
  },
  {
    path: '/tesis-de-maestria/',
    title: 'Tesis de Maestría',
    desc: 'Asesoría metodológica y de redacción para tu tesis de posgrado.',
  },
  {
    path: '/tesis-de-doctorado/',
    title: 'Tesis Doctoral',
    desc: 'Apoyo en investigación, redacción académica y preparación de la defensa.',
  },
  {
    path: '/tareas-y-ensayos/',
    title: 'Ensayos y Tareas',
    desc: 'Monografías, ensayos, síntesis y portafolios con calidad académica.',
  },
  {
    path: '/tesis-por-carrera/',
    title: 'Tesis por Carrera',
    desc: 'Ingeniería, derecho, administración, psicología y más disciplinas.',
  },
  {
    path: '/normas-apa/',
    title: 'Norma APA y Formato',
    desc: 'Citas, referencias y configuración del documento en Word.',
  },
]

export default function RelatedServices() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-light/15 to-primary-cyan/10 backdrop-blur-sm"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark">
              Servicios para tu <span className="text-primary-blue">Proceso Académico</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Te acompañamos en cada etapa: tesis de grado, maestría, doctorado, tareas y formato académico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.path}
                href={service.path}
                className="group bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-7 border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:border-primary-cyan/50"
              >
                <h3 className="text-xl font-bold text-primary-blue mb-2 group-hover:text-primary-dark transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{service.desc}</p>
                <span className="inline-block mt-4 text-primary-blue font-semibold group-hover:text-primary-cyan transition-colors">
                  Conocer más →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}