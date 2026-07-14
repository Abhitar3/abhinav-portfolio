import { projects } from '../data/projects'
import SectionHeader from './SectionHeader'

const projectGroups = [
  {
    name: 'Generative AI',
    description: 'LLM applications, RAG systems, AI agents, guardrails, and deployed assistant workflows.',
  },
  {
    name: 'NLP',
    description: 'Text modeling, information extraction, summarization, prompt evaluation, and language-model research.',
  },
  {
    name: 'Machine Learning',
    description: 'Model training, transfer learning, evaluation, and future MLOps-focused workflows.',
  },
  {
    name: 'Data Analysis',
    description: 'Dashboards, survey analytics, statistical analysis, and stakeholder-facing insights.',
  },
]

function Projects() {
  return (
    <section id="projects" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected AI and data science work"
        />
        <div className="space-y-12">
          {projectGroups.map((group) => {
            const groupProjects = projects.filter((project) => project.group === group.name)

            return (
              <div key={group.name}>
                <div className="mb-5 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{group.name}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                      {group.description}
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-[#E0C36A]">
                    {groupProjects.length} {groupProjects.length === 1 ? 'project' : 'projects'}
                  </span>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {groupProjects.map((project) => (
                    <article
                      key={project.title}
                      className="flex flex-col rounded-lg border border-white/10 bg-white p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9A7A22]">
                          {project.category}
                        </p>
                        <span className="rounded-full bg-[#F8F1D5] px-3 py-1 text-xs font-bold text-[#6F5514]">
                          {project.status}
                        </span>
                      </div>
                      <h3 className="mt-4 text-2xl font-semibold leading-snug text-slate-950">
                        {project.title}
                      </h3>
                      <p className="mt-4 text-base leading-7 text-slate-700">
                        {project.description}
                      </p>
                      {project.features.length > 0 && (
                        <ul className="mt-5 space-y-2 text-sm leading-6 text-slate-700">
                          {project.features.map((feature) => (
                            <li key={feature} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A646]" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {project.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full bg-[#F8F1D5] px-3 py-1 text-xs font-semibold text-[#7A5D14]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.label}
                            href={link.href}
                            target={link.href.startsWith('#') ? undefined : '_blank'}
                            rel={link.href.startsWith('#') ? undefined : 'noreferrer'}
                            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-[#C9A646] hover:bg-[#F8F1D5]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
