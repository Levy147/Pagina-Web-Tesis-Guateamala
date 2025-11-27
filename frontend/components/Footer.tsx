'use client'

import { FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = 'https://wa.me/50258203956'
  const facebookLink = '#' // Se configurará después

  return (
    <footer className="bg-primary-dark text-primary-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tesis <span className="text-primary-cyan">Guatemala</span>
            </h3>
            <p className="text-primary-cream/80 leading-relaxed">
              Asesoría profesional para estudiantes universitarios en procesos de tesis y elaboración de tareas académicas.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#servicios" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Nuestros Servicios
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Solicitar Asesoría
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contáctanos</h4>
            <div className="space-y-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-cream/80 hover:text-primary-cyan transition-colors"
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </a>
              <a
                href={facebookLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-primary-cream/80 hover:text-primary-cyan transition-colors"
              >
                <FaFacebook />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-cream/20 pt-8 text-center text-primary-cream/60">
          <p>&copy; {currentYear} Tesis Guatemala. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Asesoría académica profesional - Formato y redacción de trabajos universitarios
          </p>
        </div>
      </div>
    </footer>
  )
}

