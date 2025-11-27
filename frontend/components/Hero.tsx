export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light text-primary-cream py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Asesoría Universitaria
          <span className="block text-primary-cyan mt-2">de Excelencia</span>
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-primary-cream/90 max-w-3xl mx-auto">
        Te acompañamos en cada paso de tu proceso académico con las correcciones de tu Tesis: Configuracion del formato en Microsoft Word y aplicacion de cambios del asesor o Terna.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacto"
            className="bg-primary-cyan text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-cyan/90 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Solicitar Asesoría
          </a>
          <a
            href="#servicios"
            className="bg-transparent border-2 border-primary-cyan text-primary-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-cyan/10 transition-all duration-200"
          >
            Conocer Más
          </a>
        </div>
      </div>
    </section>
  )
}

