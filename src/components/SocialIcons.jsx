import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 justify-center mt-6">

      <a 
        href="https://instagram.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-pink-500 transition transform hover:scale-110"
      >
        <FaInstagram size={22} />
      </a>

      <a 
        href="https://facebook.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-500 transition transform hover:scale-110"
      >
        <FaFacebook size={22} />
      </a>

      <a 
        href="https://linkedin.com/in/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-blue-400 transition transform hover:scale-110"
      >
        <FaLinkedin size={22} />
      </a>

      <a 
        href="https://twitter.com/yourusername" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-sky-400 transition transform hover:scale-110"
      >
        <FaTwitter size={22} />
      </a>

      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-green-500 transition transform hover:scale-110"
      >
        <FaWhatsapp size={22} />
      </a>

    </div>
  );
};

export default SocialIcons;