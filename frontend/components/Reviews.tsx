'use client'

import { FaStar } from 'react-icons/fa'

interface Review {
  name: string
  university: string
  career: string
  rating: number
  comment: string
}

const reviews: Review[] = [
  {
    name: 'María González',
    university: 'USAC',
    career: 'Psicología',
    rating: 5,
    comment: 'Excelente servicio. Me ayudaron mucho con el formato de mi tesis y la redacción quedó perfecta. Muy profesionales y puntuales.',
  },
  {
    name: 'Carlos Ramírez',
    university: 'UVG',
    career: 'Ingeniería',
    rating: 5,
    comment: 'La asesoría fue fundamental para completar mi anteproyecto. El equipo es muy conocedor y siempre disponible para resolver dudas.',
  },
  {
    name: 'Ana Martínez',
    university: 'URL',
    career: 'Derecho',
    rating: 5,
    comment: 'Recomiendo totalmente sus servicios. Me guiaron paso a paso en el proceso de mi tesina y el resultado superó mis expectativas.',
  },
  {
    name: 'Luis Hernández',
    university: 'UFM',
    career: 'Administración',
    rating: 5,
    comment: 'Profesionales de primera. Me ayudaron a mejorar significativamente la calidad de mi trabajo académico. Muy satisfecho.',
  },
  {
    name: 'Sofía Morales',
    university: 'Da Vinci',
    career: 'Diseño',
    rating: 5,
    comment: 'El mejor servicio de asesoría que he encontrado. Entienden perfectamente las necesidades de cada universidad y carrera.',
  },
  {
    name: 'Diego Castillo',
    university: 'ENEB',
    career: 'Negocios',
    rating: 5,
    comment: 'Excelente atención y resultados. Me ayudaron a estructurar mi tesis de manera profesional. Definitivamente los recomiendo.',
  },
]

export default function Reviews() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-cream/95 to-white/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary-dark">
          Lo Que Dicen Nuestros Estudiantes
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-xl" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{review.comment}"
              </p>
              <div className="border-t border-gray-200 pt-4">
                <p className="font-semibold text-primary-dark">{review.name}</p>
                <p className="text-sm text-gray-600">
                  {review.career} - {review.university}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

