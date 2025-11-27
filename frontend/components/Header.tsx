'use client'

import { FaWhatsapp, FaFacebook } from 'react-icons/fa'

export default function Header() {
  const whatsappLink = 'https://wa.me/50258203956'
  const facebookLink = '#' // Se configurará después

  return (
    <header className="bg-primary-dark text-primary-cream sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-white">Asesoria Profesional</span>
            </h1>
          </div>
          <nav className="flex items-center space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-200"
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>
            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-200"
              aria-label="Seguir en Facebook"
            >
              <FaFacebook className="text-xl" />
              <span className="hidden md:inline">Facebook</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

