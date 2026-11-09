import SectionTittle from '../Ui/SectionTittle'

// On lg screens the positions are percentages of the collage box, taken from Figma.
// On smaller screens the pictures fall back to a plain grid.
const sightings = [
  {
    src: '/sec3-1.png',
    alt: 'Giraffe at sunset',
    position: 'lg:left-0 lg:top-[46.9%] lg:h-[45%]',
  },
  {
    src: '/sec3-2.png',
    alt: 'Impala',
    position: 'lg:left-[20.4%] lg:top-[55.7%] lg:h-[44.3%]',
  },
  {
    src: '/sec3-3.png',
    alt: 'Zebras',
    position: 'lg:left-[40.6%] lg:top-[37.4%] lg:h-[41.6%]',
  },
  {
    src: '/sec3-4.png',
    alt: 'Elephant',
    position: 'lg:left-[60.9%] lg:top-0 lg:h-[58.8%]',
  },
  {
    src: '/sec3-5.png',
    alt: 'Herd of wildebeest',
    position: 'lg:left-[60.9%] lg:top-[61.8%] lg:h-[33.6%]',
  },
  {
    src: '/sec3-6.png',
    alt: 'Lion roaring',
    position: 'lg:left-[81.1%] lg:top-[16.8%] lg:h-[83.2%]',
  },
]

export default function WildlifeSightings() {
  return (
    <section id="sightings" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="relative lg:aspect-[530/262]">
        {/* Heading and text */}
        <div className="lg:absolute lg:left-0 lg:top-0 lg:w-1/2">
          <SectionTittle>Recent wildlife sightings</SectionTittle>
          <p className="mt-8 max-w-md text-sm font-light leading-relaxed text-neutral-800">
            Wildlife sightings include elephant, kudu, sable antelope, zebra,
            wildebeest, the rare and endangered roan antelope, buffalo, lion,
            leopard, hyena, and many other wildlife species.
          </p>
        </div>

        {/* Pictures: grid on small screens, collage on lg */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:mt-0 lg:contents">
          {sightings.map((item) => (
            <img
              key={item.src}
              src={item.src}
              alt={item.alt}
              className={`h-48 w-full object-cover lg:absolute lg:w-[18.9%] ${item.position}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}