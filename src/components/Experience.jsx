import { experience } from '../data/experience'
import SectionHeader from './SectionHeader'

function Experience() {
  return (
    <section id="experience" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Experience"
          title="Applied research and data science experience"
        />
        <div className="grid gap-6">
          {experience.map((role) => (
            <article
              key={`${role.title}-${role.organization}`}
              className="rounded-lg border border-white/10 bg-white p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1"
            >
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-950">{role.title}</h3>
                  <p className="mt-1 text-base font-semibold text-indigo-700">{role.organization}</p>
                </div>
                <p className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
                  {role.date}
                </p>
              </div>
              <ul className="mt-5 space-y-3 text-base leading-7 text-slate-700">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
