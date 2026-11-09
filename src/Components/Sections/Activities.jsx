import { useState } from 'react'
import SectionTittle from '../Ui/SectionTittle'
import { activities } from '../Data/Activities'

export default function Activities() {
  const [active, setActive] = useState(0)

  return (
    <section id="activities" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <SectionTittle>Our activities</SectionTittle>

      <div className="mt-10 flex flex-col gap-1.5 lg:h-[380px] lg:flex-row">
        {activities.map((activity, index) => {
          const isActive = index === active

          return (
            <article
              key={activity.title}
              tabIndex={0}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
              className={`relative min-w-0 cursor-pointer overflow-hidden text-white transition-all duration-500 ${
                isActive
                  ? 'h-72 lg:h-auto lg:flex-[1.3]'
                  : 'h-40 lg:h-auto lg:flex-1'
              }`}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Dark gradient at the bottom for readable text */}
              <div className="absolute inset-0" style={{ backgroundImage: activity.overlay }} />

              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-base font-medium">{activity.title}</h3>
                {isActive && activity.description && (
                  <p className="mt-2 text-xs font-light leading-relaxed">
                    {activity.description}
                  </p>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}