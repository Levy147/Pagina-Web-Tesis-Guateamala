'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Description from '@/components/Description'
import Reviews from '@/components/Reviews'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Description />
        <Reviews />
        <ContactForm onFormSubmit={() => setFormSubmitted(true)} />
        <Footer />
      </div>
    </main>
  )
}

