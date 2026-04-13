import React from "react";
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

const industries = [
  {
    name: "All Clients",
    icon: <Users size={32} />,
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Auto Sector",
    icon: <Car size={32} />,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Education Institutional",
    icon: <GraduationCap size={32} />,
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Food & Beverage Sector",
    icon: <Utensils size={32} />,
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Banking & Finance",
    icon: <Landmark size={32} />,
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Govt Sector",
    icon: <Building2 size={32} />,
    img: "https://images.unsplash.com/photo-1575517111839-3a3843ee7c1d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Health Care",
    icon: <HeartPulse size={32} />,
    img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Industrial Security Services",
    icon: <Factory size={32} />,
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Infrastructure",
    icon: <Network size={32} />,
    img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "IT Sector",
    icon: <Laptop size={32} />,
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=600&auto=format&fit=crop",
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
    img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Retail Security Services",
    icon: <Store size={32} />,
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=600&auto=format&fit=crop",
  },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="py-24 bg-[#02050A]"
      data-scroll-section
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-neonBlue-500 uppercase tracking-widest font-bold text-sm mb-4">
            Sectors We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold">
            Tailored Security For Every{" "}
            <span className="text-gradient">Industry</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {industries.map((ind, i) => (
            <div
              key={i}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer will-change-transform"
              data-scroll
              data-scroll-speed={i % 2 === 0 ? "1" : "0.5"}
            >

              {/* Image */}
              <img
                src={ind.img}
                alt={ind.name}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 saturate-50 group-hover:saturate-100"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>

              {/* Content */}
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