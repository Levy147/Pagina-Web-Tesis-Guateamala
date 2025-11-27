'use client'

import { useState, FormEvent } from 'react'
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa'

interface FormData {
  nombre: string
  universidad: string
  pais: string
  carrera: string
  proceso: string[]
  telefono: string
  codigoPais: string
  descripcion: string
}

const procesosOptions = [
  'Anteproyecto',
  'Proceso de Tesis',
  'Tesina',
  'Tesis de Grado',
  'Tareas Académicas',
  'Otro',
]

const countryCodes = [
  { code: '+502', country: 'Guatemala' },
  { code: '+1', country: 'Estados Unidos/Canadá' },
  { code: '+52', country: 'México' },
  { code: '+506', country: 'Costa Rica' },
  { code: '+504', country: 'Honduras' },
  { code: '+503', country: 'El Salvador' },
  { code: '+505', country: 'Nicaragua' },
  { code: '+507', country: 'Panamá' },
  { code: '+57', country: 'Colombia' },
  { code: '+51', country: 'Perú' },
  { code: '+56', country: 'Chile' },
  { code: '+54', country: 'Argentina' },
  { code: '+34', country: 'España' },
]

export default function ContactForm({ onFormSubmit }: { onFormSubmit?: () => void }) {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    universidad: '',
    pais: '',
    carrera: '',
    proceso: [],
    telefono: '',
    codigoPais: '+502',
    descripcion: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (proceso: string) => {
    setFormData((prev) => ({
      ...prev,
      proceso: prev.proceso.includes(proceso)
        ? prev.proceso.filter((p) => p !== proceso)
        : [...prev.proceso, proceso],
    }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          nombre: '',
          universidad: '',
          pais: '',
          carrera: '',
          proceso: [],
          telefono: '',
          codigoPais: '+502',
          descripcion: '',
        })
        if (onFormSubmit) onFormSubmit()
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Error al enviar el formulario')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Error de conexión. Por favor, intente nuevamente o contáctenos por WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-16 md:py-24 relative overflow-hidden">
      {/* Fondo mejorado con gradiente y efectos */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark via-primary-blue to-primary-light"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(151,249,249,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(21,111,176,0.15),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary-cream">
            Solicita Tu Asesoría
          </h2>
          <p className="text-center text-primary-cream/90 mb-8 text-lg">
            Completa el formulario y nos pondremos en contacto contigo pronto
          </p>

          {submitStatus === 'success' && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-6 flex items-center space-x-2">
              <FaCheckCircle className="text-xl" />
              <span>¡Formulario enviado exitosamente! Nos pondremos en contacto contigo pronto.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-500 text-white p-4 rounded-lg mb-6">
              {errorMessage || 'Error al enviar el formulario. Por favor, intente nuevamente.'}
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-semibold text-gray-700 mb-2">
                Nombre Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="Ingresa tu nombre completo"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="universidad" className="block text-sm font-semibold text-gray-700 mb-2">
                  Universidad
                </label>
                <input
                  type="text"
                  id="universidad"
                  name="universidad"
                  value={formData.universidad}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="Ej: USAC, UVG, URL..."
                />
              </div>

              <div>
                <label htmlFor="pais" className="block text-sm font-semibold text-gray-700 mb-2">
                  País
                </label>
                <input
                  type="text"
                  id="pais"
                  name="pais"
                  value={formData.pais}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="Ej: Guatemala"
                />
              </div>
            </div>

            <div>
              <label htmlFor="carrera" className="block text-sm font-semibold text-gray-700 mb-2">
                Carrera
              </label>
              <input
                type="text"
                id="carrera"
                name="carrera"
                value={formData.carrera}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                placeholder="Ej: Psicología, Ingeniería, Derecho..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Proceso en el que necesitas ayuda <span className="text-red-500">*</span>
              </label>
              <div className="grid md:grid-cols-2 gap-3">
                {procesosOptions.map((proceso) => (
                  <label
                    key={proceso}
                    className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={formData.proceso.includes(proceso)}
                      onChange={() => handleCheckboxChange(proceso)}
                      className="w-4 h-4 text-primary-blue focus:ring-primary-blue border-gray-300 rounded"
                    />
                    <span className="text-gray-700">{proceso}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                Número de Teléfono <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select
                  id="codigoPais"
                  name="codigoPais"
                  value={formData.codigoPais}
                  onChange={handleInputChange}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all bg-white"
                >
                  {countryCodes.map(({ code, country }) => (
                    <option key={code} value={code}>
                      {code} ({country})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  required
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all"
                  placeholder="1234-5678"
                />
              </div>
            </div>

            <div>
              <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-700 mb-2">
                Descripción: ¿En qué proceso te encuentras? <span className="text-red-500">*</span>
              </label>
              <textarea
                id="descripcion"
                name="descripcion"
                required
                value={formData.descripcion}
                onChange={handleInputChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-all resize-none"
                placeholder="Cuéntanos en qué etapa de tu proceso académico te encuentras y cómo podemos ayudarte..."
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-blue/90 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
              </button>
              <a
                href="https://wa.me/50258203956"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="text-xl" />
                <span>Contactar por WhatsApp</span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

