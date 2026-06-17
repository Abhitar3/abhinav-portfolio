import { skills } from '../data/skills'
import SectionHeader from './SectionHeader'

function Skills() {
  return (
    <section id="skills" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Skills"
          title="Tools for data, models, apps, and evaluation"
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.group}
              className="rounded-lg border border-white/10 bg-white p-6 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="text-xl font-semibold text-slate-950">{skillGroup.group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
