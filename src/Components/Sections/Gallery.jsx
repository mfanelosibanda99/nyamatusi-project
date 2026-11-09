import SectionTittle from '../Ui/SectionTittle'

// Each row lists its pictures; `span` is the relative width taken from Figma
const rows = [
  [
    { src: '/sec6-1.png', alt: 'Safari vehicle on the plains', span: 258 },
    { src: '/sec6-2.png', alt: 'Elephant seen from the jeep', span: 113 },
    { src: '/sec6-3.png', alt: 'Canoeing on the river', span: 110 },
  ],
  [
    { src: '/sec6-4.png', alt: 'Giraffe at sunset', span: 80 },
    { src: '/sec6-5.png', alt: 'Sunset over the savanna', span: 80 },
    { src: '/sec6-6.png', alt: 'Paw prints in the sand', span: 80 },
    { src: '/sec6-7.png', alt: 'Lodge interior', span: 227 },
  ],
]

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <SectionTittle>Our gallery</SectionTittle>

      {/* Plain grid on small screens, two-row mosaic from md up */}
      <div className="mt-10 grid grid-cols-2 gap-2 sm:grid-cols-3 md:flex md:flex-col md:gap-1.5">
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            className="contents md:flex md:aspect-[488/118] md:gap-1.5"
          >
            {row.map((item) => (
              <div
                key={item.src}
                className="relative h-40 md:h-auto md:min-w-0"
                style={{ flex: item.span }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  )
}