import { useState } from 'react'
import SectionTittle from '../Ui/SectionTittle'
import { testimonials } from '../Data/Testimonials'

function PhotoCard({ item, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`Show ${item.name}'s testimonial`}
      className="relative h-64 overflow-hidden text-white md:h-auto"
    >
      <img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 h-full w-full object-cover grayscale"
      />

      <div className="absolute inset-0 bg-brand/50 mix-blend-multiply" />
      <p className="absolute inset-x-0 bottom-0 p-4 text-xs font-semibold italic">
        {item.name}
      </p>
    </button>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(1) 
  const total = testimonials.length

  const left = testimonials[(active + total - 1) % total]
  const right = testimonials[(active + 1) % total]
  const current = testimonials[active]

  const select = (item) => setActive(testimonials.indexOf(item))

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <SectionTittle>Testimonials</SectionTittle>

      <div className="mt-10 grid gap-4 md:aspect-516/219 md:grid-cols-[136fr_206fr_136fr] md:gap-5">
        <PhotoCard item={left} onSelect={() => select(left)} />


        <figure className="flex flex-col items-center justify-center border border-brand/60 bg-white p-6 text-center lg:p-8">
          <img
            src={current.image}
            alt={current.name}
            className="h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
          />
          <blockquote className="mt-5 text-xs font-light leading-relaxed text-neutral-800">
            “{current.quote}”
          </blockquote>
          <span className="my-4 block h-px w-12 bg-brand" />
          <figcaption className="text-xs font-semibold italic text-neutral-900">
            {current.name}
          </figcaption>
        </figure>

        <PhotoCard item={right} onSelect={() => select(right)} />
      </div>
    </section>
  )
}