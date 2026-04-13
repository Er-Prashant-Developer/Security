import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 2 });

    const words = textRef.current.children;

    tl.fromTo(words,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
    );

    tl.fromTo([subtextRef.current, ctaRef.current],
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
      "-=0.5"
    );
  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* 🔥 YOUTUBE BACKGROUND */}
      <div className="absolute inset-0 z-0 overflow-hidden">

        <iframe
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/6xP5oUY7V3w?autoplay=1&mute=1&loop=1&playlist=6xP5oUY7V3w&controls=0&modestbranding=1&showinfo=0"
          title="Background Video"
          frameBorder="0"
          allow="autoplay"
        ></iframe>

        {/* Overlay */}
        <div className="absolute inset-0 bg-navy-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>

      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        
        <h1 
          ref={textRef} 
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight leading-tight mb-6 flex flex-wrap justify-center gap-x-4"
        >
          <span>GNSS</span> 
          <span>Security</span> 
          <span className="text-gold-500">Solutions</span>
        </h1>

        <p 
          ref={subtextRef} 
          className="text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 font-light hidden md:block"
        >
          For a Safer Tomorrow. Professional protection services leveraging advanced technology and highly trained personnel.
        </p>
        
        {/* BUTTONS */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-6">
          
          <button 
            data-scroll-to
            data-scroll-target="#services"
            className="bg-gold-500 hover:bg-gold-400 text-navy-900 px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all shadow-goldGlow hover:scale-105"
          >
            Discover Our Services
          </button>

          <button 
            data-scroll-to
            data-scroll-target="#contact"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all hover:scale-105"
          >
            Contact Security
          </button>

        </div>
      </div>

      {/* SCROLL */}
      <div 
        data-scroll-to
        data-scroll-target="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce cursor-pointer"
      >
        <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
        <ChevronDown className="text-gold-500" size={24} />
      </div>

    </section>
  );
};

export default Hero;