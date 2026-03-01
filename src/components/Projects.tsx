'use client'

import { useInView } from 'react-intersection-observer'
import { Github, ExternalLink } from 'lucide-react'

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    
     {
      title: 'Job Assistant AI',
      description: 'Asistente de búsqueda laboral con arquitectura multi-agente y LLM tool calling real. 3 agentes especializados (Scraper, Analyzer, CV Optimizer) coordinados por un orquestador. Datos reales via Adzuna API y CV Optimizer con Groq + LangChain.',
      tags: ['React', 'Vite', 'TailwindCSS', 'Python', 'FastAPI', 'LangChain', 'Groq API', 'Adzuna API'],
      github: 'https://github.com/AndyV01/job-assistant-ai',
      demo: 'https://job-assistant-ai-tzle.vercel.app/',
      image: ['/projects/job_ia03.png', '/projects/job_ia04.png']
    },
    {
      title: 'Arcana Mystica — Tarot App',
      description: 'App de lectura de Tarot de nivel producción con sistema multi-agente de IA integrado. Construida con React + Vite, interpretaciones generadas por Claude 3 Haiku via Anthropic API en una arquitectura de 3 agentes especializados deployados como Serverless Functions en Vercel.',
      tags: ['React', 'Vite', 'CSS 3D', 'Canvas API', 'SVG', 'i18n', 'localStorage', 'Anthropic API', 'Vercel Serverless'],
      github: 'https://github.com/AndyV01/arcana-mystica',
      demo: 'https://arcana-mystica.vercel.app/',
      image: ['/projects/arcana01.png', '/projects/arcana02.png']
    },
   {
      title: 'E-commerce KushTeen',
      description: 'Plataforma de e-commerce full-stack desarrollada con React en el frontend y Node.js + Express en el backend, conectada a una base de datos PostgreSQL gestionada mediante Sequelize ORM. La aplicación incluye catálogo dinámico de productos con diseño responsive mobile-first, carrito de compras con manejo de estado, autenticación de usuarios, sistema de suscripciones, sección de noticias/blog y chatbot integrado. Consume y gestiona datos a través de una API REST propia, aplicando separación de responsabilidades entre cliente y servidor. El proyecto implementa un pipeline de CI/CD con GitHub Actions que ejecuta instalación de dependencias, validación de código con ESLint, build automático y despliegue continuo, simulando un entorno de producción real y aplicando buenas prácticas modernas de desarrollo frontend.',
      tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize'],
      github: 'https://github.com/AndyV01/FrontEndReact',
      demo: 'https://kushteenuy.netlify.app',
      image: ['/projects/01.jpeg', '/projects/02.jpeg']
    },
    {
      title: 'Galería de Arte',
      description: 'Aplicación de galería interactiva con servidor Node.js, diseñada para dispositivos móviles con slider y navegación optimizada. (Deploy en render.com)',
      tags: ['JavaScript', 'Node.js', 'Express', 'EJS', 'CSS'],
      github: 'https://github.com/AndyV01/Galery',
      demo: 'https://gallery-0jqi.onrender.com/',
      image: ['/projects/galery.jpeg', '/projects/galery02.jpeg']
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Proyectos <span className="gradient-text">Destacados</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Una selección de proyectos que demuestran mis habilidades en desarrollo frontend y backend
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`glass-effect rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Project Image */}
                <div className="relative grid grid-cols-2 bg-black">
                  {project.image.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-full object-contain"
                    />
                  ))}
                  <div className="absolute inset-0 group-hover:bg-black/30 transition-all duration-300" />
                </div>

                {/* Project Info */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-800 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      Código
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View More */}
          <div className="text-center mt-12">
            <a
              href="https://github.com/AndyV01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 glass-effect hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg font-medium transition-colors"
            >
              <Github className="w-5 h-5" />
              Ver más proyectos en GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
