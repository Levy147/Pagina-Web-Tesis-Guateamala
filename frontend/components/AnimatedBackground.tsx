'use client'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradiente animado base */}
      <div className="absolute inset-0 animate-gradient-shift"></div>
      
      {/* Formas animadas flotantes */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-cyan/25 rounded-full blur-3xl animate-float-1"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary-blue/35 rounded-full blur-3xl animate-float-2"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl animate-float-3"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary-cyan/20 rounded-full blur-3xl animate-float-4"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary-dark/20 rounded-full blur-3xl animate-float-1"></div>
      
      {/* Overlay sutil para mantener legibilidad */}
      <div className="absolute inset-0 bg-primary-cream/15"></div>
    </div>
  )
}

