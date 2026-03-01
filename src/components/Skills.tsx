'use client'

import { useInView } from 'react-intersection-observer'

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Vite',
        'Tailwind CSS',
        'HTML5',
        'CSS3',
      ],
    },
    {
      title: 'IA & Agentes',
      skills: [
        'LangChain',
        'LLM Tool Calling',
        'Multi-Agent Systems',
        'Groq API',
        'Anthropic API',
        'Prompt Engineering',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Python',
        'FastAPI',
        'Node.js',
        'Express',
        'PostgreSQL',
        'MongoDB',
        'REST API',
      ],
    },
    {
      title: 'DevOps & Tools',
      skills: [
        'Git & GitHub',
        'CI/CD - GitHub Actions',
        'Vercel',
        'Netlify',
        'Railway',
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Habilidades <span className="gradient-text">Técnicas</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-blue-600 mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`glass-effect p-6 rounded-xl transition-all duration-500 hover:shadow-xl ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-6 text-primary-600 dark:text-primary-400">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Learning Section */}
          <div className="mt-12 text-center">
            <div className="glass-effect p-8 rounded-xl inline-block">
              <h3 className="text-xl font-bold mb-3">
                🚀 Actualmente aprendiendo
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full font-medium">
                  LangGraph & Agent Frameworks
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full font-medium">
                  Production AI Systems
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-full font-medium">
                  React Server Components
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
