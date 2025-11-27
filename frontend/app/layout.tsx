import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tesis Galeano - Asesoría Universitaria Profesional',
  description: 'Asesoría especializada para estudiantes universitarios en procesos de tesis, anteproyectos, tesinas y elaboración de tareas. Experiencia en USAC, UVG, URL, UFM, Da Vinci, ENEB y más.',
  keywords: 'asesoría tesis, ayuda tesis universitaria, formato tesis, redacción académica, asesoría universitaria Guatemala',
  authors: [{ name: 'Tesis Galeano' }],
  openGraph: {
    title: 'Tesis Galeano - Asesoría Universitaria Profesional',
    description: 'Asesoría especializada para estudiantes universitarios en procesos de tesis y tareas académicas',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

