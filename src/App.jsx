import Hero from './Components/Sections/Hero'
import Ourstory from './Components/Sections/Ourstory'
import Activities from './Components/Sections/Activities'
import WildlifeSightings from './Components/Sections/WildlifeSightings'
import Iteneraries from './Components/Sections/Iteneraries'
import Testimonials from './Components/Sections/Testimonials'
import Gallery from './Components/Sections/Gallery'
import Footer from './Components/layout/Footer'

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <Ourstory />
        <Activities />
        <WildlifeSightings />
        <Iteneraries />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  )
}