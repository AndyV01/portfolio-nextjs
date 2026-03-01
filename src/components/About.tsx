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
                Desarrollador Frontend / Full-Stack especializado en React, TypeScript y Next.js, con experiencia profesional desde 2021 creando aplicaciones web escalables y centradas en producto.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                En FlexiPaaS (OpenDevPro) lideré el desarrollo del módulo Flowchart: editores visuales drag &amp; drop para integraciones con nodos configurables, validaciones dinámicas y componentes reutilizables. Integración seamless con backend Spring Boot y APIs REST en producción.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Recientemente construí sistemas con arquitectura multi-agente y LLM Tool Calling real, aplicando LLMs en producción via Groq API y Anthropic API. Cuento con certificación en IA Generativa y Prompt Engineering (Desafío Latam). Mis proyectos demuestran orquestación de agentes especializados con Python + LangChain, tool calling real con Groq + LangChain tools, y deploy de sistemas de IA en Railway y Vercel.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Trabajo efectivamente en equipos ágiles (Scrum/Kanban), con fuerte comunicación en dailies, demos y colaboración continua usando Git, Jira y herramientas modernas de desarrollo. Mi fortaleza clave es la adaptabilidad rápida con actitud positiva en entornos dinámicos.
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
