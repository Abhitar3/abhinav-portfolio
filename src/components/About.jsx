import SectionHeader from './SectionHeader'

function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="About" title="Research-minded builder for applied AI systems" />
        <div className="rounded-lg border border-white/10 bg-white p-8 shadow-xl shadow-black/20">
          <p className="text-lg leading-8 text-slate-700">
            I recently completed my MS in Data Science at the University of Delaware. My interests
            include applied AI, NLP/LLM systems, data analytics, responsible AI, and
            production-minded machine learning pipelines. I enjoy building projects that connect
            research, engineering, and real-world value, from Power BI dashboards to LLM-powered
            systems and NLP research workflows.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
