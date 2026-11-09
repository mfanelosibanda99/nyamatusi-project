import { useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Activities', href: '#activities' },
  { label: 'Itineraries', href: '#itineraries' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Gallery', href: '#gallery' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <nav className="flex items-center justify-between px-6 py-5 md:px-12">
        {/* Logo */}
        <a href="#" className="text-xl font-regular tracking-wide text-brand">
          Nyamatusi
        </a>

        <div className="flex items-center gap-10">
          {/* Desktop links */}
          <ul className="hidden items-center gap-8 text-sm font-light md:flex">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="transition hover:text-brand">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="flex flex-col items-end gap-1.5"
          >
            <span className="h-0.5 w-8 bg-white" />
            <span className="h-0.5 w-6 bg-white" />
            <span className="h-0.5 w-4 bg-white" />
          </button>
        </div>
      </nav>

      {/* Divider line */}
      <hr className="border-white/70" />

      {/* Menu panel opened by the hamburger */}
      {open && (
        <ul className="absolute inset-x-0 top-full flex flex-col gap-4 bg-black/80 px-6 py-6 text-sm font-light md:px-12">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}