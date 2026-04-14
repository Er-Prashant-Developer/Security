import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ShieldCheck, Target } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: 25, suffix: '+' },
  { label: 'Trained Professionals', value: 500, suffix: '+' },
  { label: 'Client Retention', value: 98, suffix: '%' },
];

const About = () => {
  const sectionRef = useRef(null);
  const numberRefs = useRef([]);
  numberRefs.current = [];

  const addToRefs = (el) => {
    if (el && !numberRefs.current.includes(el)) {
      numberRefs.current.push(el);
    }
  };

  useGSAP(() => {

    gsap.fromTo('.about-content > *',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );

    gsap.fromTo('.about-img',
      { y: 80, opacity: 0, scale: 1.05 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );

    numberRefs.current.forEach((el, index) => {
      let obj = { value: 0 };

      gsap.to(obj, {
        value: stats[index].value,
        duration: 2,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
        },
        onUpdate: () => {
          el.innerText = Math.round(obj.value) + stats[index].suffix;
        }
      });
    });

  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-navy-900 relative">

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE */}
        <div className="relative grid grid-cols-2 gap-4 h-[600px]">
          
          <img 
            src="/assets/about6.jpeg" 
            alt="CCTV Monitoring" 
            className="about-img rounded-2xl object-cover w-full h-full object-top" 
          />

          <div className="flex flex-col gap-4 pt-12">
            
            <div className="about-img bg-navy-800 rounded-2xl p-6 glass-panel border border-gold-500/30 flex items-center gap-4">
              <div className="bg-gold-500/20 p-3 rounded-full">
                <ShieldCheck className="text-gold-500" size={32} />
              </div>
              <div>
                <h4 className="font-bold text-xl">ISO</h4>
                <p className="text-gray-400 text-sm">Certified Company</p>
              </div>
            </div>

            <img 
              src="/assets/about17.jpeg" 
              alt="Security Team" 
              className="about-img rounded-2xl object-cover w-full h-full object-top" 
            />
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          
          <span className="text-neonBlue-500 uppercase tracking-widest font-bold text-sm mb-4 block">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Uncompromising <span className="text-gradient-gold">Protection</span> You Can Trust.
          </h2>

          {/* 🔥 UPDATED TEXT (IMAGE SE LIYA HUA) */}
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Generation Next Security Services is an ISO-certified security agency established in 2008, 
            providing comprehensive security, maintenance, and housekeeping solutions across India. 
            The company is led by experienced personnel from armed and paramilitary forces, ensuring 
            high-quality service with a team of over 600 professionals.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              '24/7 Monitoring & Rapid Response',
              'Highly trained ex-military personnel',
              'Advanced risk assessment protocols'
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Target className="text-gold-500" size={20} />
                <span className="font-medium text-gray-100">{item}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
            {stats.map((stat, i) => (
              <div key={i}>
                <h3 ref={addToRefs} className="text-4xl font-bold mb-2">0</h3>
                <p className="text-sm text-gray-400 uppercase">{stat.label}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;