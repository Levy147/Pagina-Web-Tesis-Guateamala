'use client'

import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppFloat() {
  const whatsappLink = 'https://wa.me/50258203956?text=Hola,%20me%20interesa%20tu%20servicio%20de%20asesoría%20de%20tesis'

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 group"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-3xl md:text-4xl" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
        ¡Escríbenos ahora!
      </div>
    </a>
  )
}

