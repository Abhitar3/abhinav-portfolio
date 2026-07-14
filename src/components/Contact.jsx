function Contact() {
  return (
    <section id="contact" className="px-5 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-lg border border-white/10 bg-white p-8 shadow-xl shadow-black/20">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9A7A22]">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950">Let&apos;s connect</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            I&apos;m open to applied AI, data science, analytics, and responsible AI opportunities.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href="mailto:terupallyabhinavreddy@gmail.com"
              className="rounded-lg border border-slate-200 p-5 transition hover:border-[#C9A646] hover:bg-[#F8F1D5]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Email
              </span>
              <p className="mt-2 break-words font-semibold text-slate-950">
                terupallyabhinavreddy@gmail.com
              </p>
            </a>
            <div className="rounded-lg border border-slate-200 p-5">
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                Location
              </span>
              <p className="mt-2 font-semibold text-slate-950">Newark, DE</p>
            </div>
            <a
              href="https://www.linkedin.com/in/abhinav-reddy-terupally"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 p-5 transition hover:border-[#C9A646] hover:bg-[#F8F1D5]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                LinkedIn
              </span>
              <p className="mt-2 font-semibold text-slate-950">abhinav-reddy-terupally</p>
            </a>
            <a
              href="https://github.com/Abhitar3"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-200 p-5 transition hover:border-[#C9A646] hover:bg-[#F8F1D5]"
            >
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
                GitHub
              </span>
              <p className="mt-2 font-semibold text-slate-950">github.com/Abhitar3</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
