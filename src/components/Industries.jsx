import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
  Users,
  Car,
  GraduationCap,
  Utensils,
  Landmark,
  Building2,
  HeartPulse,
  Factory,
  Network,
  Laptop,
  Warehouse,
  Home,
  Store,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  {
    name: "All Clients",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Auto Sector",
    icon: <Car size={32} />,
    img: "https://images.unsplash.com/photo-1616877404877-b62fa0846edd?q=80&w=928&auto=format&fit=crop",
  },
  {
    name: "Education Institutional",
    icon: <GraduationCap size={32} />,
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Food & Beverage Sector",
    icon: <Utensils size={32} />,
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Banking & Finance",
    icon: <Landmark size={32} />,
    img: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Govt Sector",
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1618656172765-26774a4a38d2?w=1000&auto=format&fit=crop",
  },
  {
    name: "Health Care",
    icon: <HeartPulse size={32} />,
    img: "https://images.unsplash.com/photo-1708413226312-2c28dfbb346f?w=1000&auto=format&fit=crop",
  },
  {
    name: "Industrial Security Services",
    icon: <Factory size={32} />,
    img: "https://images.unsplash.com/photo-1773580995586-b0195c43386c?w=1000&auto=format&fit=crop",
  },
  {
    name: "Infrastructure",
    icon: <Network size={32} />,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "IT Sector",
    icon: <Laptop size={32} />,
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Warehouse & Logistics Security",
    icon: <Warehouse size={32} />,
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "NGO Sector",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Residential Security Services",
    icon: <Home size={32} />,
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Retail Security Services",
    icon: <Store size={32} />,
    img: "https://plus.unsplash.com/premium_photo-1682125948844-e2dc8996b0f0?w=1000&auto=format&fit=crop",
  },
];

const Industries = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      ".industry-card",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section
      id="clients"
      ref={sectionRef}
      className="py-24 bg-[#02050A]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-neonBlue-500 uppercase tracking-widest font-bold text-sm mb-4">
            Sectors We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Tailored Security For Every{" "}
            <span className="text-gradient">Clients</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((ind, i) => (
            <div
              key={i}
              className="industry-card group relative h-80 rounded-2xl overflow-hidden cursor-pointer will-change-transform"
            >

              <img
                src={ind.img}
                alt={ind.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 saturate-50 group-hover:saturate-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold font-heading text-white">
                  {ind.name}
                </h3>

                <div className="bg-gold-500/90 text-navy-900 p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  {ind.icon}
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Industries;