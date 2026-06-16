function Resume() {
  return (
    <section id="resume" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-lg border border-cyan-200/20 bg-white p-8 text-center shadow-2xl shadow-black/25">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-600">Resume</p>
        <h2 className="mt-3 text-3xl font-semibold text-slate-950">Detailed background and project history</h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-700">
          Download my resume for a detailed overview of my education, technical skills, research
          experience, and AI/data science projects.
        </p>
        <a
          href="/Abhinav_Reddy_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          Download Resume
        </a>
      </div>
    </section>
  )
}

export default Resume
