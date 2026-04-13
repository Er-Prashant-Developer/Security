import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projects = [
  { num: "01", title: "Apex Tower Alpha", type: "Corporate HQ", img: "https://images.unsplash.com/photo-1582650047385-e21bc5693026?q=80&w=800&auto=format&fit=crop" },
  { num: "02", title: "Global Summit 2025", type: "Event Security", img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" },
  { num: "03", title: "Helios Data Center", type: "High-Tech Facility", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop" },
  { num: "04", title: "Royal Crown Estate", type: "Private Residential", img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&auto=format&fit=crop" }
];

const Projects = () => {
  const scrollRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    let panels = gsap.utils.toArray(".project-panel");

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        snap: 1 / (panels.length - 1),
        end: () => "+=" + scrollRef.current.offsetWidth
      }
    });
  }, { scope: containerRef });

  return (
   <section ref={containerRef} id="projects" className="h-screen py-20 bg-navy-900 overflow-hidden relative pt-32 md:pt-40" data-scroll-section >
      
      {/* Heading */}
      <div className="absolute top-6 md:top-10 left-6 md:left-12 z-10">
        <span className="text-gold-500 uppercase tracking-widest font-bold text-sm mb-2 block">
          Case Studies
        </span>
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
          Featured <span className="text-gradient">Deployments</span>
        </h2>
      </div>

      {/* Horizontal Scroll */}
      <div ref={scrollRef} className="flex h-full w-[400vw] sm:w-[300vw] md:w-[250vw]">
        {projects.map((proj, i) => (
          <div key={i} className="project-panel w-screen h-full flex items-center justify-center p-6 md:p-24 relative">
            
            <div className="w-full h-full md:h-[85%] max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-32 md:mt-20">
              
              {/* Info */}
              <div className="flex-1 text-white md:order-1 order-2 w-full md:pr-10">
                <span className="text-neonBlue-500 font-mono text-xl">{proj.num}</span>

                <h3 className="text-5xl md:text-7xl font-heading font-bold mt-4 mb-6 leading-tight">
                  {proj.title}
                </h3>

                <p className="text-gold-500 text-xl tracking-widest uppercase mb-8">
                  {proj.type}
                </p>
                
                <p className="text-gray-400 text-lg mb-8 max-w-sm">
                  Comprehensive risk assessment and deployment of our elite tactical teams, resulting in zero incidents throughout the operational timeframe.
                </p>

                <button className="border-b-2 border-gold-500 pb-1 text-white font-bold uppercase tracking-wider hover:text-gold-500 transition-colors">
                  View Case Study
                </button>
              </div>

              {/* Image */}
              <div className="flex-[1.5] w-full h-[50vh] md:h-[90%] relative overflow-hidden rounded-3xl glass-panel md:order-2 order-1">
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" 
                />
                <div className="absolute inset-0 bg-navy-900/20 mix-blend-multiply"></div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;