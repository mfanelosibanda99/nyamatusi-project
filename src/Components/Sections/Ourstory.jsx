import SectionTittle from '../Ui/SectionTittle'
import Button from '../Ui/Button'


const photos = [
  {
    src: '/sec1-2.png',
    alt: 'Elephant seen from a safari jeep',
    className: 'left-0 top-[21.7%] h-[67%] w-[60%]',
  },
  {
    src: '/sec1-1.png',
    alt: 'Lion roaring',
    className: 'left-[65%] top-0 h-[40%] w-[35%]',
  },
  {
    src: '/sec1-3.png',
    alt: 'Lodge deck overlooking the river',
    className: 'left-[65%] top-[44.4%] h-[55.6%] w-[35%]',
  },
]

export default function Ourstory() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:px-12">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">

        <div className="flex flex-col gap-20">
          <SectionTittle>Our story</SectionTittle>

          <div>
            <div className="max-w-md space-y-5 text-sm font-light leading-relaxed text-neutral-800">
              <p>
                Nyamatusi Camp is our flagship in terms of its Eco-conscious
                style. Our Mana Pools safari lodge is set in one of the wildest
                and most remote parts of Africa, on the banks of the world's
                oldest rivers. Embracing comfort, this property embodies
                sustainable design. Fully solar-powered and built from
                all-natural materials it encompasses its wilderness location in
                the most elegant way. Here, your Mana Pools safari plays out
                against a sweeping riverine landscape, where epic encounters of
                the giants that roam this land await.
              </p>
              <p>
                Consisting of six luxury tented suites, with uninterrupted views
                of the river and escarpment beyond, our Mana Pools safari lodge
                invites a blissful escape to nature. Each romantic guest tent is
                adorned with soft drapery and is replete with…
              </p>
            </div>

            <Button href="#" className="mt-8">
              Enquire now
            </Button>
          </div>
        </div>


        <div className="relative aspect-270/295 w-full">
          {photos.map((photo) => (
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt}
              className={`absolute object-cover ${photo.className}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}