import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import LocomotiveScroll from 'locomotive-scroll';

import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    // Wait for preloader animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize Locomotive Scroll after loading
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
      });
      
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, [loading]);

  return (
    <>
      <Preloader loading={loading} />
      
      {!loading && (
        <div ref={containerRef} data-scroll-container className="bg-navy-900 min-h-screen text-white font-sans overflow-x-hidden w-full relative">
          <Navbar />
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Industries />
          <Projects />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
