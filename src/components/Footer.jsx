import React from 'react';
import { MapPin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#02050A] pt-24 pb-12 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* About */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">About Us</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Generation Next Security Services is an ISO-certified security agency established in 2008,
              providing comprehensive security, maintenance, and housekeeping solutions across India.
              The company is led by experienced personnel from armed and paramilitary forces,
              ensuring high-quality service with a team of over 600 professionals.
            </p>

            {/* CERTIFICATION IMAGE */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="/assets/footer.png"
                alt="Certifications"
                className="rounded-lg w-full max-w-xs object-contain hover:scale-105 transition duration-300"
              />
            </a>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-gold-500">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500">About</a></li>
              <li><a href="#services" className="hover:text-gold-500">Services</a></li>
              <li><a href="#clients" className="hover:text-gold-500">Clients</a></li>
              <li><a href="#blogs" className="hover:text-gold-500">Blogs</a></li>
              <li><a href="#training" className="hover:text-gold-500">Training</a></li>

              <li>
                <button
                  onClick={() => window.dispatchEvent(new Event("openPresence"))}
                  className="hover:text-gold-500 text-left"
                >
                  Our Presence
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Security Guard",
                "Security Supervisor",
                "Gun Man",
                "ASO",
                "Bouncer",
                "Armed PSO",
                "Fire Safety Expert",
                "Surveillance Room"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#services" className="hover:text-gold-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Other links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {[
                "Security Services in Noida",
                "Private Security Guards",
                "Security Patrol Services",
                "Security Guard Services Near Me",
                "Building Security Services",
                "Security Services in Gurgaon",
                "Security Guard Services in Greater Noida",
                "Security Services in Faridabad"
              ].map((item, i) => (
                <li key={i}>
                  <a href="#industries" className="hover:text-gold-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold-500 mt-1" />
                <a href="https://maps.google.com" target="_blank" className="hover:text-gold-500">
                  CP-133, Pitampura, New Delhi - 110034
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold-500 mt-1" />
                <a href="https://maps.google.com" target="_blank" className="hover:text-gold-500">
                  Burari, New Delhi - 110084
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gold-500" />
                <a href="mailto:info@securityservice.co.in" className="hover:text-gold-500">
                  info@securityservice.co.in
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Generation Next Security Service
        </div>

      </div>
    </footer>
  );
};

export default Footer;