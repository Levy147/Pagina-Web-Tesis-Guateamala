'use client'

import UniversitiesCarousel from './UniversitiesCarousel'

export default function Experience() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Fondo con gradiente y efecto glassmorphism */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/20 via-primary-light/15 to-primary-cyan/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-dark">
              Nuestra <span className="text-primary-blue">Experiencia</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Hemos apoyado a muchos estudiantes de <strong className="text-primary-blue">posgrado, Maestrías y Doctorados</strong>, 
              de distintas universidades internacionales.
            </p>
          </div>

          <div className="bg-white/60 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
            <UniversitiesCarousel />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 italic">
              Y muchas más universidades nacionales e internacionales
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

