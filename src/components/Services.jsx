import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { 
  Video, 
  ShieldCheck, 
  Flame, 
  UserCheck, 
  Users, 
  UserCog 
} from 'lucide-react';

// 🔫 Gun Icon
const GunIcon = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 12h14l3-3v6l-3-3H2z" />
  </svg>
);

const services = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Security Services",
    img: "/assets/about1.jpeg",
    desc: "We provide complete security solutions including guarding, monitoring, and risk management. Our trained professionals ensure safety across residential, corporate, and industrial sectors with advanced strategies and modern technology."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Security Guard",
    img: "/assets/about2.jpeg",
    desc: "Highly trained security guards ensuring protection, discipline, and vigilance. Our guards are skilled in surveillance, emergency response, and maintaining safety in all environments."
  },
  {
    icon: <Users size={40} />,
    title: "Security Supervisor",
    img: "/assets/about3.jpeg",
    desc: "Experienced supervisors managing security teams, ensuring discipline, monitoring operations, and maintaining high security standards across all sites."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Armed PSO",
    img: "/assets/about4.jpeg",
    desc: "Highly trained armed personal security officers providing VIP protection with strict protocols, risk analysis, and professional conduct."
  },
  {
    icon: <GunIcon size={40} />,
    title: "Gunman",
    img: "/assets/about5.jpeg",
    desc: "Licensed gunmen for high-risk environments ensuring safety with strict discipline and professional weapon handling."
  },
  {
    icon: <Flame size={40} />,
    title: "Fire Safety Expert",
    img: "/assets/about6.jpeg",
    desc: "Experts in fire safety, prevention, and emergency handling with training in evacuation, firefighting, and safety compliance."
  },
  {
    icon: <UserCog size={40} />,
    title: "ASO",
    img: "/assets/about7.jpeg",
    desc: "Assistant Security Officers supporting operations, coordination, and maintaining discipline across all security activities."
  },
  {
    icon: <Video size={40} />,
    title: "Surveillance Room",
    img: "/assets/about8.jpeg",
    desc: "24/7 CCTV monitoring with advanced systems ensuring complete surveillance, threat detection, and incident prevention."
  },
  {
    icon: <UserCheck size={40} />,
    title: "Bouncer",
    img: "/assets/about10.jpeg",
    desc: "Professional bouncers for events ensuring crowd control, discipline, and security in high-energy environments."
  }
];

const Services = () => {
  const sectionRef = useRef(null);
  const [activeService, setActiveService] = useState(null);

  useGSAP(() => {
    gsap.fromTo(
      '.service-card',
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-[#0a0f1c] relative">

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-neonBlue-500 uppercase tracking-widest font-bold text-sm mb-4 block">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Comprehensive <span className="text-gradient-gold">Security Services</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We provide highly trained personnel and advanced technology to ensure complete safety.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveService(service)}
              className="service-card group cursor-pointer glass-panel 
              hover:bg-white/10 hover:-translate-y-2 
              hover:shadow-[0_0_25px_rgba(255,215,0,0.3)] 
              border border-transparent hover:border-gold-500/40
              transition-all duration-300 
              relative overflow-hidden"
            >

              {/* IMAGE */}
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img 
                  src={service.img} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8">

                <div className="text-gold-500 mb-6 transform group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-2 font-heading">
                  {service.title}
                </h3>

                {/* 🔥 CLICK TEXT */}
                <span className="text-gold-500 text-sm font-semibold opacity-0 group-hover:opacity-100 transition">
                  Click to view →
                </span>

                <p className="text-gray-400 leading-relaxed mt-3 group-hover:text-gray-200 transition-colors">
                  {service.desc.slice(0, 80)}...
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* POPUP */}
        {activeService && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[1000] p-4">
            
            <div className="bg-[#0f172a] rounded-2xl max-w-2xl w-full p-6 relative max-h-[90vh] overflow-y-auto">

              <button 
                onClick={() => setActiveService(null)}
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
              >
                ✕
              </button>

              <img 
                src={activeService.img} 
                alt={activeService.title}
                className="w-full h-64 object-cover object-top rounded-xl mb-6"
              />

              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                {activeService.title}
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {activeService.desc}
              </p>

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Services;