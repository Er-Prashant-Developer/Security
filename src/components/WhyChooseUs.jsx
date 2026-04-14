import React, { useRef } from 'react';
import { Zap, Shield, SearchCheck } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '.wcu-item',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section
      ref={containerRef}
      id="why"
      className="py-24 bg-[#02050A]"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="text-neonBlue-500 uppercase tracking-widest font-bold text-sm mb-4 block">
            The GNSS Advantage
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8">
            Why We Are The <span className="text-gradient">Industry Leaders</span>
          </h2>

          <div className="flex flex-col gap-8">

            <div className="wcu-item flex gap-6">
              <div className="bg-gold-500/20 p-4 rounded-xl">
                <Shield className="text-gold-500" size={30} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Vetted Professionals</h4>
                <p className="text-gray-400">
                  Our guards undergo rigorous background checks and advanced training programs.
                </p>
              </div>
            </div>

            <div className="wcu-item flex gap-6">
              <div className="bg-neonBlue-500/20 p-4 rounded-xl">
                <Zap className="text-neonBlue-500" size={30} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Rapid Response</h4>
                <p className="text-gray-400">
                  Fast response teams with advanced communication systems.
                </p>
              </div>
            </div>

            <div className="wcu-item flex gap-6">
              <div className="bg-white/10 p-4 rounded-xl">
                <SearchCheck className="text-white" size={30} />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-2">Transparent Reporting</h4>
                <p className="text-gray-400">
                  Real-time reports and full transparency in every operation.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden relative shadow-lg">
          
          {/* 🔥 LOCAL IMAGE UPDATED */}
          <img
            src="/assets/about4.jpeg"
            alt="Security Team"
            className="w-full h-full object-cover"
          />

          {/* LIGHT OVERLAY */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* TEXT BOX */}
          <div className="absolute bottom-5 left-5 right-5 bg-black/60 backdrop-blur-md p-5 rounded-xl">
            <p className="text-white text-sm md:text-base">
              "Professional security teams ensuring safety across all environments."
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;