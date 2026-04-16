import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const blogs = [
  {
    title: "5 Reasons Security Guards are Essential for Every Business",
    desc: "In the business world today, one cannot stress enough on the issue of safety and security of the premises, employees, and customers."
  },
  {
    title: "The Importance of Security Guards for Business",
    desc: "A good business plan includes plans for growth and expansion, but none of that would be possible without safeguarding the establishment."
  },
  {
    title: "How to Choose a Private Security Company",
    desc: "When your company or property requires private security services, you cannot simply hire the first company you come across."
  }
];

const Blogs = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(current === 0 ? blogs.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === blogs.length - 1 ? 0 : current + 1);
  };

  return (
    <section
      id="blogs"
      className="py-24 bg-navy-900 text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        
        <div className="text-center mb-16">
          <span className="text-gold-500 uppercase tracking-widest font-bold text-sm">
            Our Blog
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3">
            Latest <span className="text-gradient">Insights</span>
          </h2>
        </div>

      
        <div className="relative flex items-center justify-center">

        
          <button
            onClick={prevSlide}
            className="absolute left-0 sm:left-2 md:left-10 z-10 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 bg-navy-900/50 sm:bg-transparent transition"
          >
            <ChevronLeft />
          </button>

          
          <div className="w-full max-w-2xl h-auto min-h-[300px] sm:min-h-[250px] md:min-h-[350px] bg-orange-200 text-black rounded-2xl shadow-xl p-8 px-12 sm:px-16 md:p-10 flex flex-col justify-between text-center transition-all duration-500">

            <div>
              <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-4">
                {blogs[current].title}
              </h3>

              <p className="text-gray-600">
                {blogs[current].desc}
              </p>
            </div>

            <button className="mt-6 font-semibold border-b-2 border-black hover:text-red-500 hover:border-red-500 transition self-center">
              Read More
            </button>

          </div>

          
          <button
            onClick={nextSlide}
            className="absolute right-0 sm:right-2 md:right-10 z-10 w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center rounded-full border border-white/20 hover:bg-white/10 bg-navy-900/50 sm:bg-transparent transition"
          >
            <ChevronRight />
          </button>

        </div>

      
        <div className="flex justify-center mt-10 gap-3">
          {blogs.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`cursor-pointer h-2 rounded-full transition-all ${
                current === index
                  ? "w-8 bg-gold-500"
                  : "w-2 bg-white/30"
              }`}
            ></div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;