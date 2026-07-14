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
    <header className="sticky top-0 z-50 border-b border-[#C9A646]/20 bg-[#050914]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="text-base font-semibold text-white sm:text-lg">
          Abhinav Reddy Terupally
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-[#E0C36A]"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a
          href="/Abhinav_Reddy_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#C9A646]/60 px-4 py-2 text-sm font-semibold text-[#F5E6B1] transition hover:border-[#E0C36A] hover:bg-[#C9A646]/10"
        >
          Resume
        </a>
      </nav>
      <div className="mx-auto flex max-w-7xl gap-4 overflow-x-auto px-5 pb-3 text-sm md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="shrink-0 font-medium text-slate-300 transition hover:text-[#E0C36A]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  )
}

export default Navbar
