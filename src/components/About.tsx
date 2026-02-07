'use client'

import { useInView } from 'react-intersection-observer'
import { Code2, Rocket, Users } from 'lucide-react'

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: '4+ Años',
      description: 'De experiencia en desarrollo frontend',
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: '15+ Proyectos',
      description: 'Desplegados en producción',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Trabajo en Equipo',
      description: 'Colaboración en proyectos ágiles',
    },
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Sobre <span className="gradient-text">Mí</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Soy Desarrollador Frontend / Full-Stack con experiencia profesional desde 2021,
                con foco en React, TypeScript y Next.js, orientado a la creación de aplicaciones web escalables,
                mantenibles y centradas en producto, aplicando buenas prácticas de código, UX y arquitectura frontend.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Mi último rol fue en el equipo de Producto de FlexiPaaS (OpenDevPro), donde trabajé principalmente en el desarrollo del frontend utilizando React,
                Next y TypeScript. Participé en la construcción del módulo Flowchart,
                desarrollando editores visuales para integraciones mediante nodos configurables,
                con funcionalidades como drag & drop de variables, previsualización, validaciones dinámicas y componentes reutilizables.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Colaboré estrechamente con equipos backend, integrando el frontend con servicios en Spring Boot y APIs REST, participando en mantenimiento evolutivo y resolución de bugs en entornos productivos.
                Trabajo con comodidad en equipos ágiles, utilizando Git y Jira, participando en dailies, demos y comunicación continua.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Complemento mi experiencia con formación continua. Cuento con certificación en IA Generativa y Prompt Engineering (Desafío Latam), aplicando IA para mejorar productividad, documentación y flujos de desarrollo.

                Me interesa aportar valor real a proyectos y equipos, seguir creciendo y construir productos digitales de calidad.
              </p>
            </div>

            {/* Right - Highlights */}
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`glass-effect p-6 rounded-xl hover:shadow-xl transition-all duration-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
