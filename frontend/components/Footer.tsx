'use client'

import Link from 'next/link'
import { FaWhatsapp, FaFacebook, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappLink = 'https://wa.me/50258203956'
  const facebookLink = 'https://www.facebook.com/Tesising' // Se configurará después

  return (
    <footer className="bg-primary-dark text-primary-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Tesis <span className="text-primary-cyan">Guatemala</span>
            </h3>
            <p className="text-primary-cream/80 leading-relaxed">
              Asesoría profesional para estudiantes universitarios en procesos de tesis y elaboración de tareas académicas.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Nuestros Servicios</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/asesoria-de-tesis-guatemala/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Asesoría de Tesis (Guía)
                </Link>
              </li>
              <li>
                <Link href="/tesis-de-grado/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Tesis de Grado
                </Link>
              </li>
              <li>
                <Link href="/tesis-de-maestria/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Tesis de Maestría
                </Link>
              </li>
              <li>
                <Link href="/tesis-de-doctorado/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Tesis Doctoral
                </Link>
              </li>
              <li>
                <Link href="/tareas-y-ensayos/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Ensayos y Tareas
                </Link>
              </li>
              <li>
                <Link href="/tesis-por-carrera/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Tesis por Carrera
                </Link>
              </li>
              <li>
                <Link href="/normas-apa/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Norma APA y Formato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Tesis por Universidad</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tesis-usac/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  USAC
                </Link>
              </li>
              <li>
                <Link href="/tesis-url/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Universidad Rafael Landívar
                </Link>
              </li>
              <li>
                <Link href="/tesis-ufm/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Francisco Marroquín
                </Link>
              </li>
              <li>
                <Link href="/tesis-mariano-galvez/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Mariano Gálvez
                </Link>
              </li>
              <li>
                <Link href="/tesis-da-vinci/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Universidad Da Vinci
                </Link>
              </li>
              <li>
                <Link href="/tesis-del-istmo/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Universidad del Istmo
                </Link>
              </li>
              <li>
                <Link href="/tesis-panamericana/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Panamericana
                </Link>
              </li>
              <li>
                <Link href="/tesis-rural/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Universidad Rural
                </Link>
              </li>
              <li>
                <Link href="/tesis-regional/" className="text-primary-cream/80 hover:text-primary-cyan transition-colors">
                  Universidad Regional
                </Link>
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

