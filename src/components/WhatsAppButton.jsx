import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917042252897" // 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[9999] group"
    >
    
      <span className="absolute inset-0 rounded-full bg-green-500 blur-xl opacity-70 group-hover:opacity-100 transition duration-300"></span>

  
      <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-green-600 shadow-lg transform transition duration-300 group-hover:scale-110 animate-pulse">
        <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      </div>
    </a>
  );
};

export default WhatsAppButton;