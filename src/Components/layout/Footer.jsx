const columns = [
  {
    title: 'Useful information',
    links: [
      { label: 'Travel information', href: '#' },
      { label: 'Safari logistics', href: '#' },
      { label: 'Privacy policy', href: '#' },
      { label: 'Terms and conditions', href: '#' },
    ],
  },
  {
    title: 'Sitemap',
    links: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#about' },
      { label: 'Suggested itineraries', href: '#itineraries' },
      { label: 'Gallery', href: '#gallery' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { label: 'Plan your safari', href: '#' },
      { label: 'Contact us', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 md:px-12">
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-5 text-sm font-semibold italic">{col.title}</h3>
            <ul className="space-y-3 text-sm font-light">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        <div>
          <h3 className="mb-5 text-sm font-semibold italic">
            Sign up for our newsletter
          </h3>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm"
          >
            <input
              type="email"
              placeholder="Email"
              className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-black px-6 py-3 text-sm font-semibold italic"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/40 py-4 text-center text-xs font-light">
        © Copyright {new Date().getFullYear()} Nyamatusi camp. All rights reserved
      </div>
    </footer>
  )
}