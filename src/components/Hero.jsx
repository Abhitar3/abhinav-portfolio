function Hero() {
  return (
    <section id="home" className="relative px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#E0C36A]">
            Applied AI & Data Science
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight text-white sm:text-6xl">
            Abhinav Reddy Terupally
          </h1>
          <p className="mt-5 max-w-3xl text-xl font-medium leading-8 text-slate-200">
            Data Science Graduate | Machine Learning | NLP/LLM Workflows | Analytics
          </p>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            I build applied machine learning, data science, and AI projects across NLP, LLM
            workflows, analytics, RAG, and model evaluation. My work focuses on turning complex
            datasets and research ideas into reliable, explainable, and useful applications.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-[#C9A646] px-6 py-3 text-center text-sm font-bold text-[#071126] shadow-lg shadow-black/30 transition hover:-translate-y-0.5 hover:bg-[#E0C36A]"
            >
              View Projects
            </a>
            <a
              href="/Abhinav_Reddy_Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#C9A646]/40 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-[#E0C36A] hover:bg-[#C9A646]/10"
            >
              Download Resume
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/20 px-6 py-3 text-center text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:border-[#C9A646]/70 hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid gap-4">
            {[
              ['Focus', 'ML, NLP, RAG, analytics, model evaluation'],
              ['AI Apps', 'Chatbots, advising tools, research assistants'],
              ['Analytics', 'Power BI dashboards, DAX, survey insights'],
              ['Responsible AI', 'Prompt safety, guardrails, jailbreak analysis'],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg bg-white p-5 transition hover:-translate-y-1">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#9A7A22]">
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
