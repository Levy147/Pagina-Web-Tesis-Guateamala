import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tesis Guatemala | Asesoría de Tesis, Tareas y Trabajos Académicos en Guatemala',
  description: 'Asesoría profesional de tesis en Guatemala: tesis de grado, maestría y doctorado, tareas, ensayos, monografías y norma APA. Formato y redacción para USAC, URL, UFM, Da Vinci y más universidades. Solicita tu asesoría ahora.',
  keywords: 'tesis Guatemala, asesoría tesis Guatemala, ayuda tesis Guatemala, tesis de grado, tesis de licenciatura, tesis de maestría, tesis doctoral, tesina, tareas universitarias, ayuda tareas, tareas académicas, ensayos académicos, monografías, portafolios, trabajo de graduación, norma APA, citación APA, corrección tesis, formato tesis, formato Word tesis, redacción académica, metodología de investigación, USAC, UVG, URL, UFM, Universidad San Carlos de Guatemala, Universidad Francisco Marroquín, Universidad Rafael Landívar',
  authors: [{ name: 'Tesis Guatemala' }],
  creator: 'Tesis Guatemala',
  publisher: 'Tesis Guatemala',
  category: 'Educación',
  classification: 'Asesoría Académica',
  openGraph: {
    title: 'Tesis Guatemala | Asesoría de Tesis, Tareas y Trabajos Académicos en Guatemala',
    description: 'Asesoría especializada para estudiantes universitarios en Guatemala. Te ayudamos con tesis, tesina, tareas académicas, formato y redacción profesional. Experiencia en múltiples universidades.',
    type: 'website',
    locale: 'es_GT',
    siteName: 'Tesis Guatemala',
    url: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/',
    images: [
      {
        url: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png',
        width: 1200,
        height: 630,
        alt: 'Tesis Guatemala - Asesoría Universitaria Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tesis Guatemala - Asesoría Universitaria | Ayuda con Tesis y Tareas',
    description: 'Asesoría especializada para estudiantes universitarios. Tesis, tesina, tareas académicas, formato y redacción profesional.',
    images: ['https://levy147.github.io/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png'],
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
    google: 'google8c37fbe32fd6c04c',
  },
  alternates: {
    canonical: 'https://levy147.github.io/Pagina-Web-Tesis-Guateamala/',
  },
  metadataBase: new URL('https://levy147.github.io/Pagina-Web-Tesis-Guateamala/'),
  icons: {
    icon: [
      { url: '/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png', type: 'image/png' },
      { url: '/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png', type: 'image/png', sizes: '32x32' },
      { url: '/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/Pagina-Web-Tesis-Guateamala/logos/LogoPaginaWebActualizado.png',
  },
  other: {
    'theme-color': '#1a365d',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Obtener basePath para las rutas del favicon (igual que en el carrusel)
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Pagina-Web-Tesis-Guateamala'

  return (
    <html lang="es">
      <head>
        {/* Favicon con basePath explícito (igual que el carrusel de imágenes) */}
        <link rel="icon" type="image/png" href={`${basePath}/logos/LogoPaginaWebActualizado.png`} />
        <link rel="shortcut icon" type="image/png" href={`${basePath}/logos/LogoPaginaWebActualizado.png`} />
        <link rel="apple-touch-icon" href={`${basePath}/logos/LogoPaginaWebActualizado.png`} />
        <StructuredData />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

