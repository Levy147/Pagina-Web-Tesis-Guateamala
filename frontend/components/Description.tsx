'use client'

import { FaFileAlt, FaPenNib, FaGraduationCap, FaBook, FaCheckCircle, FaInfoCircle } from 'react-icons/fa'

export default function Description() {
  const services = [
    {
      icon: FaFileAlt,
      title: 'Asesoría en Formato',
      description: 'Te ayudamos a cumplir con las normas de formato de tu universidad: márgenes, espaciado, citas, referencias bibliográficas y estructura.',
      color: 'from-primary-blue to-primary-light',
      iconColor: 'text-primary-blue',
    },
    {
      icon: FaPenNib,
      title: 'Asesoría en Redacción',
      description: 'Mejoramos la calidad de tu redacción académica: coherencia, cohesión, estilo formal y claridad en la expresión de ideas.',
      color: 'from-primary-light to-primary-cyan',
      iconColor: 'text-primary-light',
    },
    {
      icon: FaGraduationCap,
      title: 'Procesos de Tesis',
      description: 'Te acompañamos en anteproyectos, tesinas, tesis de grado y otros procesos académicos según los requerimientos de tu universidad.',
      color: 'from-primary-cyan to-primary-blue',
      iconColor: 'text-primary-cyan',
    },
    {
      icon: FaBook,
      title: 'Elaboración de Tareas',
      description: 'Asesoría en la parte teórica y de redacción de tareas académicas: Ensayos, Monografías, Síntesis, Portafolios, etc.',
      color: 'from-primary-dark to-primary-blue',
      iconColor: 'text-primary-dark',
    },
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 relative">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-cream/80 via-white/60 to-primary-cyan/10 backdrop-blur-sm"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Sección Quiénes Somos */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary-dark">
              ¿Quiénes <span className="text-primary-blue">Somos?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Card principal con glassmorphism */}
              <div className="bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border border-white/30 hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-primary-blue/10 rounded-full p-3">
                    <FaInfoCircle className="text-3xl text-primary-blue" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">
                      Nuestra <span className="text-primary-blue">Misión</span>
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  En <strong className="text-primary-blue">Tesis Guatemala</strong>, nos especializamos en brindar asesoría profesional a estudiantes universitarios durante su proceso de tesis y elaboración de tareas académicas: <strong>Ensayos, Monografías, Síntesis, Portafolios</strong>, etc.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                Nuestro enfoque se centra especificamente en la configuracion del <strong className="text-primary-blue">formato y desarrollo de temas teóricos</strong>, ayudando a estructurar y redactar trabajos académicos con la calidad y estandar que exije tu universidad.
                </p>
              </div>

              {/* Card de información importante */}
              <div className="bg-gradient-to-br from-primary-blue/90 to-primary-light/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-10 border border-white/20 text-white hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="bg-white/20 rounded-full p-3">
                    <FaCheckCircle className="text-3xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      Requisito <span className="text-primary-cyan">Importante</span>
                    </h3>
                  </div>
                </div>
                <p className="text-lg text-white/95 leading-relaxed">
                  El estudiante ya tiene que tener <strong>aprobado el Anteproyecto o Punto de tesis</strong>, a partir de allí, ya podemos apoyarte con el proceso de la tesis.
                </p>
              </div>
            </div>
          </div>

          {/* Sección Nuestros Servicios */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-primary-dark">
              Nuestros <span className="text-primary-blue">Servicios</span>
            </h2>
            <p className="text-center text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Servicios especializados para acompañarte en cada etapa de tu proceso académico
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    {/* Gradiente de fondo animado */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    {/* Contenido */}
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`bg-gradient-to-br ${service.color} bg-opacity-10 rounded-xl p-4 group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className={`text-3xl ${service.iconColor}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-primary-dark mb-3 group-hover:text-primary-blue transition-colors">
                            {service.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Efecto de borde animado */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-0`}></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

