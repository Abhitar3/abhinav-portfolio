function Hero() {
  return (
    <section id="home" className="relative px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            Applied AI & Data Science
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Abhinav Reddy Terupally
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-slate-200">
            Applied AI & Data Science Graduate | Machine Learning | NLP/LLM Systems | Analytics
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I build applied machine learning, data science, and AI projects across NLP, LLM
            systems, analytics, RAG, and model evaluation. My work focuses on turning complex
            datasets and research ideas into reliable, explainable, and useful systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-200"
            >
              View Projects
            </a>
            <a
              href="/Abhinav_Reddy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-purple-300/40 px-6 py-3 text-center text-sm font-bold text-purple-100 transition hover:-translate-y-0.5 hover:border-purple-200 hover:bg-purple-300/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid gap-4">
            {[
              ['Focus', 'ML, NLP, RAG, analytics, model evaluation'],
              ['Systems', 'LangGraph, FastAPI, Pydantic, ChromaDB'],
              ['Analytics', 'Power BI dashboards, DAX, survey modeling'],
              ['AI Safety', 'Responsible AI, guardrails, jailbreak analysis'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white p-5 transition hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-indigo-600">
                  {label}
                </p>
                <p className="mt-2 text-base font-semibold text-slate-900">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
