import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);
  const isoRef = useRef(null);
  const fullFormRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0.8 });

    const words = textRef.current.children;

    // Heading
    tl.fromTo(words,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, stagger: 0.08, ease: "power3.out" }
    );

  
    tl.fromTo(fullFormRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.4"
    );

    
    tl.fromTo(isoRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
      "-=0.3"
    );

    
    tl.fromTo([subtextRef.current, ctaRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
      "-=0.2"
    );

  }, { scope: containerRef });

  return (
    <section id="home" ref={containerRef} className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/6xP5oUY7V3w?autoplay=1&mute=1&loop=1&playlist=6xP5oUY7V3w&controls=0"
          title="Background Video"
          frameBorder="0"
          allow="autoplay"
        ></iframe>

        <div className="absolute inset-0 bg-navy-900/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent"></div>
      </div>

      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        
        
        <h1 
          ref={textRef} 
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold uppercase tracking-tight leading-tight mb-4 flex flex-wrap justify-center gap-x-2 sm:gap-x-4 px-2 sm:px-0"
        >



          <span>Generation Next</span> 
          <span>Security</span> 
          <span className="text-gold-500">Services</span>
        </h1>

      

        
        <div 
          ref={isoRef}
          className="mb-6 px-4 sm:px-6 py-2 rounded-full border border-gold-500/40 bg-white/10 backdrop-blur-md text-center"
        >
          <span className="text-gold-500 font-bold tracking-widest text-xs sm:text-sm md:text-base uppercase flex flex-col sm:inline-block">
            <span className="sm:inline">ISO Certified Company</span> <span className="sm:inline">9001:2015</span>
          </span>
        </div>

        
        <p 
          ref={subtextRef} 
          className="text-base sm:text-lg md:text-2xl text-gray-300 max-w-3xl mb-10 font-light px-4 sm:px-0"
        >
          For a Safer Tomorrow. Professional protection services leveraging advanced technology and highly trained personnel.
        </p>
        
        
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-6 sm:px-0">
          
          <button className="bg-gold-500 hover:bg-gold-400 text-navy-900 w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-lg uppercase tracking-wider transition-all shadow-goldGlow hover:scale-105 whitespace-nowrap">
            Discover Our Services
          </button>

          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white w-full sm:w-auto px-8 py-4 rounded-full font-bold text-sm sm:text-lg uppercase tracking-wider transition-all hover:scale-105 whitespace-nowrap">
            Contact Security
          </button>

        </div>
      </div>

      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center animate-bounce cursor-pointer">
        <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">Scroll</span>
        <ChevronDown className="text-gold-500" size={24} />
      </div>

    </section>
  );
};

export default Hero;