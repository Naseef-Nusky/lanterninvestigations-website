import React from 'react';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Professional Investigation Services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight font-mont tracking-tight">
            Henderson Thomas Investigations
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-blue-100 leading-relaxed font-light">
            Specialist in private, corporate and legal investigations
          </p>
          <div className="flex justify-center">
            <Link 
              to="/about" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Read About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;