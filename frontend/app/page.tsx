'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Experience from '@/components/Experience'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Description />
        <Experience />
        <ContactForm onFormSubmit={() => setFormSubmitted(true)} />
        <Footer />
        <WhatsAppFloat />
      </div>
    </main>
  )
}

