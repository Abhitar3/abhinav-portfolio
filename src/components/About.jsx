import SectionHeader from './SectionHeader'

function About() {
  return (
    <section id="about" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeader eyebrow="About" title="Builder learning across ML, AI, and data systems" />
        <div className="rounded-lg border border-white/10 bg-white p-8 shadow-xl shadow-black/20">
          <p className="text-lg leading-8 text-slate-700">
            I recently completed my MS in Data Science at the University of Delaware. I like
            building practical projects that turn data, models, and research ideas into something
            usable, whether that is a Power BI dashboard, an NLP research workflow, a RAG assistant,
            or a machine learning model served through an API. I am especially interested in applied
            machine learning, NLP/LLM systems, analytics, and the engineering work around reliable
            ML pipelines. I am still learning and improving in MLOps, backend serving, Docker,
            CI/CD, and model monitoring, and I use my projects to keep building that skill set in a
            hands-on way.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
