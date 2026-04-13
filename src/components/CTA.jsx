import React, { useRef, useState } from 'react';

const CTA = () => {
  const btnRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"   // ✅ IMPORTANT (footer & hero se connect)
      className="py-24 bg-[#050A15] relative overflow-hidden"
      data-scroll-section
    >

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonBlue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-panel p-16 border-white/10">
        
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
          Ready to Secure Your <span className="text-gradient-gold">World?</span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Contact our specialists today for a comprehensive threat assessment and custom security deployment strategy.
        </p>

        {/* Button */}
        <div
          className="inline-block"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <button
            ref={btnRef}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            className="bg-gold-500 text-navy-900 px-12 py-6 rounded-full font-bold text-xl uppercase tracking-widest transition-transform duration-300 ease-out shadow-goldGlow hover:scale-105"
          >
            Get a Quick Quote
          </button>
        </div>

      </div>
    </section>
  );
};

export default CTA;