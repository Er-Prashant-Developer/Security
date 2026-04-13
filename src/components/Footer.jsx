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
            <p className="text-gray-400 text-sm leading-relaxed">
              Generation Next Security Services is an ISO-certified security agency established in 2008,
              providing comprehensive security, maintenance, and housekeeping solutions across India.
              The company is led by experienced personnel from armed and paramilitary forces,
              ensuring high-quality service with a team of over 600 professionals.
            </p>
          </div>

          {/* Company (Navbar Links) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-gold-500 transition">Home</a></li>
              <li><a href="#about" className="hover:text-gold-500 transition">About</a></li>
              <li><a href="#services" className="hover:text-gold-500 transition">Services</a></li>
              <li><a href="#industries" className="hover:text-gold-500 transition">Industries</a></li>
              <li><a href="#projects" className="hover:text-gold-500 transition">Projects</a></li>
              <li><a href="#careers" className="hover:text-gold-500 transition">Careers</a></li>
              <li><a href="#contact" className="hover:text-gold-500 transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-gold-500">Security Guard</a></li>
              <li><a href="#services" className="hover:text-gold-500">Security Supervisor</a></li>
              <li><a href="#services" className="hover:text-gold-500">Gun Man</a></li>
              <li><a href="#services" className="hover:text-gold-500">ASO</a></li>
              <li><a href="#services" className="hover:text-gold-500">Bouncer</a></li>
              <li><a href="#services" className="hover:text-gold-500">Armed PSO</a></li>
              <li><a href="#services" className="hover:text-gold-500">Fire Safety Expert</a></li>
              <li><a href="#services" className="hover:text-gold-500">Surveillance Room</a></li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Other links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#industries" className="hover:text-gold-500">Security Services in Noida</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Private Security Guards</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Security Patrol Services</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Security Guard Services Near Me</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Building Security Services</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Security Services in Gurgaon</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Security Guard Services in Greater Noida</a></li>
              <li><a href="#industries" className="hover:text-gold-500">Security Services in Faridabad</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold-500 mt-1" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Pitampura+New+Delhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-500"
                >
                  Regd. office : CP-133, Pitampura,<br />
                  Near Muni Maya Ram Jain Hospital,<br />
                  New Delhi - 110034
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold-500 mt-1" />
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Burari+New+Delhi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-gold-500"
                >
                  Branch Office: 139/10/1, A-1 Block,<br />
                  Gali No. 9, Bengali Colony,<br />
                  Sant Nagar Burari, New Delhi - 110084
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gold-500" />
                <a 
                  href="mailto:info@securityservice.co.in" 
                  className="hover:text-gold-500"
                >
                  info@securityservice.co.in
                </a>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom Text */}
        <div className="pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
          Within our arsenal, lie vigilant security guards and sentinels of unyielding dedication,
          meticulously trained to safeguard your interests. Our services cater to Delhi NCR, Pune and Mumbai.
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Generation Next Security Service
        </div>

      </div>
    </footer>
  );
};

export default Footer;