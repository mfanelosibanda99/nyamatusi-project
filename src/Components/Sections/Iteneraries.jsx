import { useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import SectionTittle from '../Ui/SectionTittle'
import { iteneraries } from '../Data/Iteneraries'

function FeaturedCard({ item }) {
  const [liked, setLiked] = useState(true)

  return (
    <article className="flex flex-col sm:flex-row lg:flex-268">

      <div className="relative flex flex-col bg-brand text-white sm:flex-145">
        <button
          type="button"
          aria-label="Save itinerary"
          aria-pressed={liked}
          onClick={() => setLiked(!liked)}
          className="absolute left-[80%] top-0 -translate-x-1/2 bg-white p-2 text-red-600"
        >
          {liked ? <FaHeart size={12} /> : <FaRegHeart size={12} />}
        </button>

        <div className="flex-1 p-5 pt-12">
          <h3 className="text-sm font-semibold">{item.title}</h3>
          <p className="mt-3 text-xs font-light leading-relaxed">
            {item.description}
          </p>
          <ul className="mt-4 space-y-2 text-xs font-light">
            {item.features.map((feature) => (
              <li key={feature} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-white/60 px-5 py-3 text-sm font-semibold">
          {item.price}
        </p>
        <a
          href="#"
          className="flex items-center justify-between border-t border-white/60 px-5 py-3 text-xs font-semibold"
        >
          See full itinerary
          <FiArrowRight size={16} />
        </a>
      </div>


      <div className="relative h-56 sm:h-auto sm:flex-123">
        <img
          src={item.image}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    </article>
  )
}

function ImageCard({ item }) {
  return (
    <article className="relative h-64 overflow-hidden text-white lg:h-auto lg:flex-141">
      <img
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0" style={{ backgroundImage: item.overlay }} />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-semibold italic">{item.title}</h3>
        <p className="text-xs font-light italic">{item.subtitle}</p>
      </div>
    </article>
  )
}

export default function Iteneraries() {
  return (
    <section id="itineraries" className="py-20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <SectionTittle>Suggested itineraries</SectionTittle>
      </div>


      <div className="mx-auto mt-8 max-w-1340px px-6">
        <div className="flex flex-col gap-4 lg:aspect-568/213 lg:flex-row lg:gap-2">
          {iteneraries.map((item) =>
            item.featured ? (
              <FeaturedCard key={item.id} item={item} />
            ) : (
              <ImageCard key={item.id} item={item} />
            )
          )}
        </div>
      </div>
    </section>
  )
}