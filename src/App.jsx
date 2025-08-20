import { AHeroSection, Navbar, TrainingSection, HeroSection, OurTrainingPart, FooterSection } from './components/index'
import heroBg from './assets/heroBg.avif'
import Achievement from './components/sections/Achievement'

export default function App() {
  return (
    <div className='h-screen w-full overflow-x-hidden relative font-global'>
      <img
        className="md:max-h-[130vh] h-screen w-full object-cover  fixed -z-10 top-20 left-0"
        src={heroBg} />
      <Navbar />
      <HeroSection />
      <AHeroSection />
      <TrainingSection />
      <Achievement />
      <OurTrainingPart />
      <FooterSection />
    </div>
  )
}
