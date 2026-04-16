import React, { useRef, useState } from 'react';

const CTA = () => {
  const containerRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();

    const x = (clientX - (left + width / 2)) * 0.2;
    const y = (clientY - (top + height / 2)) * 0.2;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-[#050A15] relative overflow-hidden"
    >

      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neonBlue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

    
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-panel p-16 border-white/10">
        
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-white mb-6">
          Ready to Secure Your <span className="text-gradient-gold">World?</span>
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Contact our specialists today for a comprehensive threat assessment and custom security deployment strategy.
        </p>

      
        <div className="flex justify-center gap-6 flex-wrap">

          <a href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-blue-600 transition transform hover:scale-110">
            <i className="fab fa-facebook-f text-white text-xl"></i>
          </a>

          <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-pink-500 transition transform hover:scale-110">
            <i className="fab fa-instagram text-white text-xl"></i>
          </a>

          <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-green-500 transition transform hover:scale-110">
            <i className="fab fa-whatsapp text-white text-xl"></i>
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-blue-400 transition transform hover:scale-110">
            <i className="fab fa-linkedin-in text-white text-xl"></i>
          </a>

      
          <a href="https://www.youtube.com/watch?v=6xP5oUY7V3w" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-red-600 transition transform hover:scale-110">
            <i className="fab fa-youtube text-white text-xl"></i>
          </a>

          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-4 rounded-full hover:bg-sky-500 transition transform hover:scale-110">
            <i className="fab fa-twitter text-white text-xl"></i>
          </a>

        </div>

      </div>
    </section>
  );
};

export default CTA;