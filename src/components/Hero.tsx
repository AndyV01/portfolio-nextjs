'use client'

import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div
            className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <div className="space-y-2">
              <p className="text-primary-600 dark:text-primary-400 font-medium text-lg">
                Hola, soy
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                Andrés
                <br />
                <span className="gradient-text">Vallarino</span>
              </h1>
            </div>

            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400">
              Software Developer
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
              Soy Desarrollador Frontend / Full-Stack, con foco en React, TypeScript y Next.js, especializado en la creación de aplicaciones web escalables, mantenibles y orientadas a producto, aplicando buenas prácticas de código, UX y arquitectura frontend.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Contáctame
              </a>
              <a
                href="/Andres-Vallarino-CV.pdf"
                download
                className="px-8 py-3 glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/AndyV01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/andres-vallarino/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:andyduffdj25@gmail.com"
                className="p-3 glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Animated background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-8 bg-gradient-to-tl from-primary-500 to-purple-600 rounded-full opacity-30 animate-pulse delay-75"></div>

              {/* Profile image placeholder - puedes reemplazar con tu foto */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div >
                  <img
                    src="/images/id3D.gif"
                    alt="Andrés Vallarino"
                    style={{borderRadius: '50%', objectFit: 'cover', width: 250, height: 250}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
