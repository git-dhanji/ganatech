import { AHeroSection, Navbar, TrainingSection, HeroSection, OurTrainingPart, FooterSection } from './components/index'
import heroBg from './assets/heroBg.avif'
import Achievement from './components/sections/Achievement'
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';

export default function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Always scroll to top on reload/refresh
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // use "smooth" if you want animation
    });
  }, []);

  // Calculate scale based on scroll position
  const scale = 1 + (scrollY / window.innerHeight) * 0.1; // Scale from 1 to 2

  return (
    <div className='w-full overflow-x-hidden relative font-global'>
      <motion.img
        animate={{ scale }}
        transition={{ type: "tween", ease: "easeIn", duration: 0 }}
        className="md:max-h-[130vh] h-screen w-full object-cover fixed -z-10 top-20 left-0"
        src={heroBg}
        alt="Hero Background"
      />

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