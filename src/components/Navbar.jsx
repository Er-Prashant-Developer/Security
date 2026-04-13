import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPresence, setShowPresence] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Industries', 'Projects', 'Careers'];

  return (
    <>
      {/* 🔥 NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-navy-900/90 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
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

            {/* 🔥 OUR PRESENCE BUTTON */}
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

          {/* MOBILE BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <div className={`lg:hidden fixed inset-0 bg-navy-900 z-40 transition-transform duration-300 flex flex-col pt-24 px-6 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>

          <div className="flex items-center gap-3 mb-10">
            <img src="/assets/logo.png" className="w-10 h-10" />
            <span className="text-2xl font-bold">GNSS</span>
          </div>

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
        <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-lg flex items-center justify-center">

          {/* CLOSE */}
          <button 
            onClick={() => setShowPresence(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* CONTENT */}
          <div className="w-[95%] max-w-7xl bg-white rounded-2xl p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-black">

            {/* Delhi */}
            <div>
              <h4 className="text-red-500 font-bold mb-3">Delhi</h4>
              <ul className="space-y-2">
                <li>South Delhi</li>
                <li>Central Delhi</li>
                <li>East Delhi</li>
                <li>West Delhi</li>
                <li>North Delhi</li>
              </ul>
            </div>

            {/* Gurgaon */}
            <div>
              <h4 className="text-red-500 font-bold mb-3">Gurgaon</h4>
              <ul className="space-y-2">
                <li>Sector 56</li>
                <li>Sector 65</li>
                <li>DLF Phase 1</li>
                <li>DLF Phase 2</li>
                <li>Sohna Road</li>
                <li>MG Road</li>
              </ul>
            </div>

            {/* Noida */}
            <div>
              <h4 className="text-red-500 font-bold mb-3">Noida</h4>
              <ul className="space-y-2">
                <li>Sector 16 & 18</li>
                <li>Sector 62 & 63</li>
                <li>Sector 135</li>
                <li>Sector 132</li>
                <li>Sector 15</li>
                <li>Sector 104a</li>
              </ul>
            </div>

            {/* Faridabad */}
            <div>
              <h4 className="text-red-500 font-bold mb-3">Faridabad</h4>
              <ul className="space-y-2">
                <li>Sector 24 & 25</li>
                <li>Industrial Area</li>
                <li>Palwal</li>
                <li>Sector 46 & 37</li>
                <li>Sector 19</li>
                <li>Sector 12</li>
              </ul>
            </div>

            {/* Ghaziabad */}
            <div>
              <h4 className="text-red-500 font-bold mb-3">Ghaziabad</h4>
              <ul className="space-y-2">
                <li>Kavi Nagar</li>
                <li>Sahibabad</li>
                <li>Kaushambi</li>
                <li>Raj Nagar</li>
                <li>Crossings Republik</li>
              </ul>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;