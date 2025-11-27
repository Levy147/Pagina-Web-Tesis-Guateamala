import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tesis Guatemala - Asesoría Universitaria Profesional | Formato y Redacción de Tesis',
  description: 'Asesoría profesional para estudiantes de posgrado, maestrías y doctorados. Te ayudamos con formato, redacción y desarrollo teórico de tesis, ensayos, monografías y portafolios. Experiencia en USAC, UVG, URL, UFM, Da Vinci y más universidades.',
  keywords: 'asesoría tesis Guatemala, ayuda tesis universitaria, formato tesis, redacción académica, asesoría tesis posgrado, maestría tesis, doctorado tesis, formato Word tesis, corrección tesis, ensayos académicos, monografías, portafolios universitarios, USAC, UVG, URL, UFM',
  authors: [{ name: 'Tesis Guatemala' }],
  creator: 'Tesis Guatemala',
  publisher: 'Tesis Guatemala',
  openGraph: {
    title: 'Tesis Guatemala - Asesoría Universitaria Profesional',
    description: 'Asesoría especializada para estudiantes de posgrado, maestrías y doctorados en procesos de tesis y tareas académicas. Formato y redacción profesional.',
    type: 'website',
    locale: 'es_GT',
    siteName: 'Tesis Guatemala',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesis Guatemala - Asesoría Universitaria Profesional',
    description: 'Asesoría especializada para estudiantes de posgrado, maestrías y doctorados',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agregar cuando tengas Google Search Console
    // google: 'tu-codigo-de-verificacion',
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || 'https://tuusuario.github.io/tesis-guatemala',
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
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

