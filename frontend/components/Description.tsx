'use client'

export default function Description() {
  const universities = [
    'USAC',
    'Valle de Guatemala',
    'URL',
    'Francisco Marroquín',
    'Da Vinci',
    'ENEB',
  ]

  return (
    <section id="servicios" className="py-16 md:py-24 bg-primary-cream/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary-dark">
            ¿Quiénes Somos?
          </h2>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              En <strong className="text-primary-blue">Tesis Galeano</strong>, nos especializamos en brindar 
              asesoría profesional a estudiantes universitarios durante su proceso de tesis y elaboración de tareas. 
              Nuestro enfoque se centra exclusivamente en el <strong>formato y contenido</strong>, ayudándote a 
              estructurar y redactar tus trabajos académicos con la calidad que tu universidad exige.
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
              <strong>Importante:</strong> No realizamos tesis o tareas completas. Nuestro servicio consiste en 
              asesorarte, guiarte y ayudarte a mejorar el formato y la redacción de tu trabajo, respetando siempre 
              la integridad académica y el proceso de aprendizaje.
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary-blue to-primary-light rounded-2xl shadow-xl p-8 md:p-12 text-primary-cream">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Experiencia en Universidades
            </h3>
            <p className="text-lg md:text-xl mb-8 text-center text-primary-cream/90">
              Tenemos experiencia trabajando con estudiantes de las principales universidades de Guatemala:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {universities.map((university, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center hover:bg-white/20 transition-all duration-200"
                >
                  <div className="text-primary-cream font-semibold text-lg">
                    {university}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-primary-cream/80 italic">
              Y muchas más universidades nacionales e internacionales
            </p>
          </div>

          <div className="mt-12 bg-primary-dark rounded-2xl shadow-xl p-8 md:p-12 text-primary-cream">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Nuestros Servicios
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-blue/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-cyan">
                  Asesoría en Formato
                </h4>
                <p className="text-primary-cream/90">
                  Te ayudamos a cumplir con las normas de formato de tu universidad: márgenes, espaciado, 
                  citas, referencias bibliográficas y estructura.
                </p>
              </div>
              <div className="bg-primary-blue/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-cyan">
                  Asesoría en Redacción
                </h4>
                <p className="text-primary-cream/90">
                  Mejoramos la calidad de tu redacción académica: coherencia, cohesión, estilo formal y 
                  claridad en la expresión de ideas.
                </p>
              </div>
              <div className="bg-primary-blue/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-cyan">
                  Procesos de Tesis
                </h4>
                <p className="text-primary-cream/90">
                  Te acompañamos en anteproyectos, tesinas, tesis de grado y otros procesos académicos 
                  según los requerimientos de tu universidad.
                </p>
              </div>
              <div className="bg-primary-blue/30 rounded-lg p-6">
                <h4 className="text-xl font-semibold mb-3 text-primary-cyan">
                  Elaboración de Tareas
                </h4>
                <p className="text-primary-cream/90">
                  Asesoría en la parte teórica y de redacción de tareas académicas, asegurando calidad 
                  y cumplimiento de estándares.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

