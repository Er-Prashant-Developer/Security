import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Preloader = ({ loading }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const percentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    let obj = { value: 0 };

    
    tl.to(obj, {
      value: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate: () => {
        if (percentRef.current) {
          percentRef.current.innerText = Math.round(obj.value) + '%';
        }
      }
    });

  
    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
      "-=1.5"
    );

    
    if (!loading) {
      gsap.to(containerRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut',
        delay: 0.2
      });
    }
  }, [loading]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy-900 ${!loading ? 'pointer-events-none' : ''}`}
    >
      <div className="flex flex-col items-center">

        
        <img
          src="/assets/logo.png"
          alt="Company Logo"
          className="w-20 h-20 object-contain mb-6 animate-pulse"
        />

      
        <div
          ref={textRef}
          className="text-xl md:text-3xl font-heading font-bold text-white tracking-widest uppercase mb-4 text-center px-4"
        >
          GNSS <span className="text-gold-500 block sm:inline mt-2 sm:mt-0">Security Service</span>
        </div>

      
        <div
          className="text-neonBlue-400 font-mono text-xl"
          ref={percentRef}
        >
          0%
        </div>

      </div>
    </div>
  );
};

export default Preloader;