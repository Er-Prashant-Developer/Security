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

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
      document.documentElement.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const open = () => setShowPresence(true);
    window.addEventListener("openPresence", open);

    return () => {
      window.removeEventListener("openPresence", open);
    };
  }, []);

  const navLinks = ['Home', 'About', 'Services', 'Clients', 'Blogs', 'Training'];

  return (
    <>
      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* LOGO */}
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/assets/logo.png" className="w-16 h-16 md:w-20 md:h-20 object-contain" alt="GNSS Logo" />
            <span className="text-xl md:text-2xl font-bold tracking-wider text-white">GNSS</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8 text-white">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className="text-sm font-medium uppercase hover:text-gold-400 transition"
              >
                {link}
              </a>
            ))}

            <button
              onClick={() => setShowPresence(true)}
              className="text-sm font-medium uppercase hover:text-gold-400 transition"
            >
              Our Presence
            </button>
          </div>

          {/* DESKTOP SOCIAL ICONS */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-600 transition">
              <i className="fab fa-facebook-f text-white"></i>
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-pink-500 transition">
              <i className="fab fa-instagram text-white"></i>
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-green-500 transition">
              <i className="fab fa-whatsapp text-white"></i>
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-blue-400 transition">
              <i className="fab fa-linkedin-in text-white"></i>
            </a>

            {/* NEW */}
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-red-600 transition">
              <i className="fab fa-youtube text-white"></i>
            </a>
            <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-sky-500 transition">
              <i className="fab fa-twitter text-white"></i>
            </a>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="lg:hidden text-white relative z-50 p-2"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div 
        className={`lg:hidden fixed top-0 left-0 w-full h-[100dvh] bg-navy-900 z-[99999] transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-[100%]'
        } flex flex-col pt-8 px-6 pb-12`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <img src="/assets/logo.png" className="w-14 h-14" alt="logo" />
            <span className="text-2xl font-bold text-white">GNSS</span>
          </div>

          <button onClick={() => setMobileMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col items-center gap-6 flex-1 justify-center">
          {[...navLinks, "Our Presence"].map((link) => (
            <button 
              key={link}
              className="text-2xl text-white hover:text-gold-500"
              onClick={() => {
                if (link === "Our Presence") setShowPresence(true);
                setMobileMenuOpen(false);
              }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* MOBILE SOCIAL */}
        <div className="flex gap-6 justify-center">
          <i className="fab fa-facebook-f text-white"></i>
          <i className="fab fa-instagram text-white"></i>
          <i className="fab fa-whatsapp text-white"></i>
          <i className="fab fa-linkedin-in text-white"></i>
          <i className="fab fa-youtube text-white"></i>
          <i className="fab fa-twitter text-white"></i>
        </div>
      </div>

      {/* OUR PRESENCE POPUP */}
      {showPresence && (
        <div className="fixed inset-0 z-[999999] bg-black/80 flex items-center justify-center p-6">
          <button 
            onClick={() => setShowPresence(false)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          <div className="w-full max-w-7xl bg-white rounded-2xl p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 text-black">
            <div>
              <h3 className="text-red-500 font-bold">Delhi</h3>
              <p>South Delhi</p><p>Central Delhi</p><p>East Delhi</p><p>West Delhi</p><p>North Delhi</p>
            </div>
            <div>
              <h3 className="text-red-500 font-bold">Gurgaon</h3>
              <p>Sector 56</p><p>Sector 65</p>
            </div>
            <div>
              <h3 className="text-red-500 font-bold">Noida</h3>
              <p>Sector 16</p><p>Sector 62</p>
            </div>
            <div>
              <h3 className="text-red-500 font-bold">Faridabad</h3>
              <p>Sector 24</p>
            </div>
            <div>
              <h3 className="text-red-500 font-bold">Ghaziabad</h3>
              <p>Kavi Nagar</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;