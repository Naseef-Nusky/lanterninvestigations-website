import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Professional Investigation Services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <p className="inline-block text-xs md:text-sm uppercase tracking-[0.28em] text-blue-200 font-semibold mb-6 border border-white/20 bg-white/5 px-4 py-2 rounded-md backdrop-blur-sm">
            Private Investigations &amp; Intelligence
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-mont tracking-tight text-center">
            Bringing the Truth to Light
          </h1>

          <p className="text-lg md:text-xl mb-5 text-blue-50 leading-relaxed font-light max-w-3xl mx-auto text-center">
            Professional private investigators providing discreet, results-driven investigations for individuals, businesses and legal professionals across the UK and internationally.
          </p>

          <p className="text-base md:text-lg mb-10 text-gray-200 leading-relaxed max-w-3xl mx-auto text-center">
            Every investigation is handled with complete confidentiality, professionalism and integrity—delivering the evidence you need to make informed decisions with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center max-w-xl mx-auto sm:max-w-none">
            <Link
              to="/our-services"
              className="group relative inline-flex items-center justify-center gap-2.5 min-w-[200px] overflow-hidden rounded-xl bg-[#0047b2] px-8 py-4 text-center text-[15px] font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(0,71,178,0.45)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0056d6] hover:shadow-[0_16px_40px_rgba(0,71,178,0.55)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 translate-x-[-120%] transition-transform duration-700 group-hover:translate-x-[120%]" />
              <span className="relative">Our Services</span>
              <ArrowRight className="relative w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2.5 min-w-[240px] rounded-xl border border-white/30 bg-white/10 px-8 py-4 text-center text-[15px] font-semibold tracking-wide text-white backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#0f172a] hover:shadow-[0_14px_32px_rgba(0,0,0,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black/40"
            >
              <Phone className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
              <span>Speak With An Investigator</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
