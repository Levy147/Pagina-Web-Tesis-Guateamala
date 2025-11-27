'use client'

import Image from 'next/image'

const universities = [
  { name: 'USAC', logo: '/logos/LOGOUSAC.png' },
  { name: 'Universidad Francisco Marroquín', logo: '/logos/Universidad Francisco Marroquin.png' },
  { name: 'Universidad Rafael Landívar', logo: '/logos/Universidad Rafael Landivar.png' },
  { name: 'Universidad Da Vinci', logo: '/logos/LOGO-DAVINCI-LOGO-UNIVERSDIDAD-DAVINCI.png' },
  { name: 'Universidad Mariano Gálvez', logo: '/logos/UNIVERSIDAD-MARIANO-GALVEZ-LOGO.png' },
  { name: 'Universidad del Istmo', logo: '/logos/LOGO-UNIS-LOGO-UNIVERSIDAD-DEL-ITSMO.png' },
  { name: 'Universidad Panamericana', logo: '/logos/LOGO-UNIVERSIDAD-PANAMERICANA-DE-GUATEMALA.png' },
  { name: 'Universidad Regional', logo: '/logos/LOGO-UREGIONAL-LOGO-UNIVERSIDAD-REGIONAL-DE-GUATEMALA.png' },
  { name: 'Universidad Rural', logo: '/logos/universidad ruralde guatemala.png' },
]

export default function UniversitiesCarousel() {
  // Duplicar las universidades para efecto infinito
  const duplicatedUniversities = [...universities, ...universities, ...universities]

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Gradientes en los bordes para efecto fade */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white/60 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white/60 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex gap-6 animate-scroll hover:pause-animation">
        {duplicatedUniversities.map((university, index) => (
          <div
            key={`${university.name}-${index}`}
            className="flex-shrink-0 w-48 h-32 bg-white/95 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center p-4 border border-gray-200/50 hover:scale-110 hover:border-primary-blue/50 group"
          >
            <div className="relative w-full h-full">
              <Image
                src={university.logo}
                alt={university.name}
                fill
                className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 192px, 192px"
                unoptimized
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

