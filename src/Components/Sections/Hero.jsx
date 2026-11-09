import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
import Navbar from '../layout/Navbar'

const socials = [
  { label: 'Facebook', icon: FaFacebookF, href: '#' },
  { label: 'Instagram', icon: FaInstagram, href: '#' },
  { label: 'Twitter', icon: FaTwitter, href: '#' },
]

export default function Hero() {
  return (
    <section
      className="relative h-screen min-h-600px bg-cover bg-center"
      style={{ backgroundImage: "url('/nav-bg.png')" }}
    >

      <div className="absolute inset-0 bg-black/20" />

      <Navbar />


      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <h1 className="-mt-30vh text-5xl font-extralight md:text-7xl lg:text-8xl">
          Indulge in
        </h1>
      </div>


      <ul className="absolute right-5 top-[42%] z-10 flex flex-col gap-5 text-white md:right-12">
        {socials.map(({ label, icon: Icon, href }) => (
          <li key={label}>
            <a href={href} aria-label={label} className="transition hover:text-brand">
              <Icon size={30} />
            </a>
          </li>
        ))}
      </ul>


      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 transition hover:translate-y-1 text-white"
      >
        <FiChevronDown size={36} strokeWidth={1} />
      </a>
    </section>
  )
}