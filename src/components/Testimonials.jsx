import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "Aegis completely revolutionized our approach to corporate security. Their agents are not just guards; they are highly trained specialists who represent our brand perfectly.",
    author: "Eleanor Vance",
    role: "Director of Operations, Vertex Inc.",
  },
  {
    quote: "The response time and the level of technological integration they provide is unmatched in the industry. Knowing Aegis is monitoring our facilities lets us sleep at night.",
    author: "Marcus Thorne",
    role: "CEO, Thorne Logistics",
  },
  {
    quote: "We hired Aegis for a high-profile international summit. Their discreet yet formidable presence ensured the event proceeded flawlessly without a single breach.",
    author: "Dr. Alistair Reed",
    role: "Head of Security, Global Events Corp",
  }
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  const prev = () => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-navy-900 relative border-t border-white/5" data-scroll-section>
      <div className="max-w-5xl mx-auto px-6 text-center">
        <Quote className="text-white/10 mx-auto mb-8" size={80} />
        
        <div className="relative min-h-[250px] flex items-center justify-center overflow-hidden">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className={`absolute transition-all duration-700 ease-in-out ${i === current ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              style={{ transform: i < current ? 'translateX(-100%)' : i > current ? 'translateX(100%)' : 'translateX(0)' }}
            >
              <h3 className="text-2xl md:text-4xl font-heading text-white leading-relaxed mb-8">
                "{t.quote}"
              </h3>
              <div>
                <p className="text-gold-500 font-bold text-xl uppercase tracking-wider">{t.author}</p>
                <p className="text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <button onClick={prev} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
            <ChevronLeft size={24} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-gold-500' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
          <button onClick={next} className="p-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
