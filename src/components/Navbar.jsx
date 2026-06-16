const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold text-white sm:text-lg">
          Abhinav Reddy Terupally
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-200"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/Abhinav_Reddy_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-cyan-300/50 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-300/10"
        >
          Resume
        </a>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-5 pb-3 text-sm md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 font-medium text-slate-300 transition hover:text-cyan-200"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
