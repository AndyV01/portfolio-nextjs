'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/AndyV01',
      label: 'GitHub',
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://www.linkedin.com/in/andres-vallarino/',
      label: 'LinkedIn',
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: 'mailto:andyduffdj25@gmail.com',
      label: 'Email',
    },
  ]

  const quickLinks = [
    { label: 'Sobre mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left - Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Andrés Vallarino
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Frontend Developer apasionado por crear experiencias web excepcionales.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Center - Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Contact */}
          <div>
            <h4 className="font-bold mb-4">Contacto</h4>
            <div className="space-y-2 text-gray-600 dark:text-gray-400">
              <p>
                <a
                  href="mailto:andyduffdj25@gmail.com"
                  className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  andyduffdj25@gmail.com
                </a>
              </p>
              <p>Argentina</p>
              <p className="pt-4">
                <a
                  href="/Andres-Vallarino-CV.pdf"
                  download
                  className="inline-block px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Descargar CV
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Andrés Vallarino. Hecho con
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            y Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
