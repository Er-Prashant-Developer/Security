import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPresence, setShowPresence] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔥 Disable scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const navLinks = ['Home', 'About', 'Services', 'Industries', 'Projects', 'Careers'];

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">

          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/assets/logo.png" className="w-10 h-10 object-contain" />
            <span className="text-2xl font-bold tracking-wider">GNSS</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium uppercase hover:text-gold-400 transition"
              >
                {link}
              </a>
            ))}

            {/* OUR PRESENCE */}
            <button
              onClick={() => setShowPresence(true)}
              className="text-sm font-medium uppercase hover:text-gold-400 transition"
            >
              Our Presence
            </button>
          </div>

          {/* CTA */}
          <a 
            href="#contact"
            className="hidden lg:block bg-gold-500 hover:bg-gold-400 text-navy-900 px-6 py-2 rounded-full font-semibold transition-all hover:scale-105"
          >
            Get Quote
          </a>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white z-[1000]"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden fixed inset-0 bg-navy-900 z-[999] transition-transform duration-300 flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          {/* 🔥 CLOSE BUTTON FIX */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-white z-[1000]"
          >
            <X size={30} />
          </button>

          {/* LOGO */}
          <div className="flex items-center gap-3 mb-10">
            <img src="/assets/logo.png" className="w-10 h-10" />
            <span className="text-2xl font-bold">GNSS</span>
          </div>

          {/* LINKS */}
          {[...navLinks, "Our Presence"].map((link) => (
            <button 
              key={link} 
              className="text-2xl py-4 border-b border-white/10 text-left"
              onClick={() => {
                if (link === "Our Presence") {
                  setShowPresence(true);
                }
                setMobileMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}

          {/* CTA */}
          <a 
            href="#contact"
            className="mt-8 bg-gold-500 text-navy-900 px-6 py-4 rounded-xl font-bold uppercase text-lg text-center"
          >
            Get Quote
          </a>
        </div>
      </nav>

      {/* 🔥 FULL SCREEN POPUP */}
      {showPresence && (
        <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-lg flex items-center justify-center p-6">

          {/* CLOSE */}
          <button 
            onClick={() => setShowPresence(false)}
            className="absolute top-6 right-6 text-white text-3xl z-[10000]"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="w-full max-w-7xl bg-white rounded-2xl p-8 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-black max-h-[90vh] overflow-y-auto">

            {[
              {
                title: "Delhi",
                items: ["South Delhi", "Central Delhi", "East Delhi", "West Delhi", "North Delhi"]
              },
              {
                title: "Gurgaon",
                items: ["Sector 56", "Sector 65", "DLF Phase 1", "DLF Phase 2", "Sohna Road", "MG Road"]
              },
              {
                title: "Noida",
                items: ["Sector 16 & 18", "Sector 62 & 63", "Sector 135", "Sector 132", "Sector 15", "Sector 104a"]
              },
              {
                title: "Faridabad",
                items: ["Sector 24 & 25", "Industrial Area", "Palwal", "Sector 46 & 37", "Sector 19", "Sector 12"]
              },
              {
                title: "Ghaziabad",
                items: ["Kavi Nagar", "Sahibabad", "Kaushambi", "Raj Nagar", "Crossings Republik"]
              }
            ].map((city, i) => (
              <div key={i}>
                <h4 className="text-red-500 font-bold mb-3">{city.title}</h4>
                <ul className="space-y-2 text-sm md:text-base">
                  {city.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;