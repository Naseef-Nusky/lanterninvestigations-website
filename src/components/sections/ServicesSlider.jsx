import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesSlider = () => {
  const services = [
    {
      id: 1,
      title: 'Covert Surveillance',
      desc:
        'Our experienced surveillance operatives conduct discreet observations using professional equipment to obtain high-quality photographic and video evidence. Ideal for: Infidelity Investigations, Employee Misconduct, Insurance Fraud, Child Custody Matters, and Civil Litigation.',
      img: '/covert.jpg',
      link: '/service/covert',
    },
    {
      id: 2,
      title: 'Background Checks',
      desc:
        'Protect yourself before making important decisions. We carry out comprehensive background investigations on individuals and companies. Checks include: Identity Verification, Financial Intelligence, Employment History, Company Searches, Reputation Reports, and Social Media Intelligence.',
      img: '/background.jpg',
      link: '/service/background',
    },
    {
      id: 3,
      title: 'Fraud Investigations',
      desc:
        'Fraud can affect both businesses and private individuals. Our investigators specialise in uncovering fraudulent activity through intelligence gathering, surveillance and evidence collection. We investigate: Insurance Fraud, Employee Theft, Financial Fraud, Romance Scams, Investment Fraud, and Identity Fraud.',
      img: '/fraud.jpg',
      link: '/service/fraud',
    },
    {
      id: 4,
      title: 'Missing Person Investigations',
      desc:
        'When someone disappears or contact has been lost, time matters. Using specialist tracing databases, intelligence sources and investigative techniques, we help locate missing family members, debtors, witnesses and long-lost relatives both within the UK and internationally.',
      img: '/missing.jpg',
      link: '/service/missing',
    },
    {
      id: 5,
      title: 'Personal Investigations',
      desc:
        'Sensitive matters require experienced investigators. Whether you’re concerned about a relationship, suspicious behaviour or simply need answers, we provide confidential investigations with complete professionalism. Services include: Relationship Investigations, Matrimonial Enquiries, Address Tracing, Online Dating Verification, Lifestyle Investigations, and Neighbour Disputes.',
      img: '/personal.jpg',
      link: '/service/personal',
    },
    {
      id: 6,
      title: 'Corporate Investigations',
      desc:
        'Protect your business from financial loss and reputational damage. Our corporate investigation team assists businesses of all sizes with confidential intelligence gathering. Services include: Employee Investigations, Internal Theft, Due Diligence, Corporate Surveillance, Intellectual Property Theft, and Competitor Intelligence.',
      img: '/professional.jpg',
      link: '/our-services',
    },
  ];

  // Create infinite loop by duplicating services
  const infiniteServices = [...services, ...services, ...services];

  // Responsive breakpoints:
  // Mobile (< 768px): 1 slide
  // iPad (768px - 1023px): 2 slides
  // iPad Pro (1024px - 1919px): 3 slides
  // Full HD & above (>= 1920px): 4 slides
  const getSlidesToShow = () => {
    if (typeof window === 'undefined') return 1;
    const w = window.innerWidth;
    if (w >= 1920) return 4;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    return 1;
  };

  const [slidesToShow, setSlidesToShow] = useState(1);
  const [index, setIndex] = useState(services.length); // Start at the middle set
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const onResize = () => setSlidesToShow(getSlidesToShow());
    setSlidesToShow(getSlidesToShow());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const max = Math.max(0, infiniteServices.length - slidesToShow);
    if (index > max) setIndex(max);
  }, [slidesToShow, index, infiniteServices.length]);

  // True infinite loop - seamless continuous movement
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // When we reach the end of the duplicated array, reset to start of middle set
        if (nextIndex >= infiniteServices.length - services.length) {
          // Reset to start of middle set without animation
          setTimeout(() => setIndex(services.length), 0);
          return services.length;
        }
        return nextIndex;
      });
    }, 2000); // Move every 2 seconds for smooth chain effect

    return () => clearInterval(interval);
  }, [services.length, infiniteServices.length, isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    const max = Math.max(0, infiniteServices.length - slidesToShow);
    setIndex((i) => (i >= max ? services.length : i + 1));
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume after 3 seconds
  };
  
  const prev = () => {
    setIsAutoPlaying(false); // Pause auto-play when user interacts
    const max = Math.max(0, infiniteServices.length - slidesToShow);
    setIndex((i) => (i <= services.length ? max : i - 1));
    setTimeout(() => setIsAutoPlaying(true), 3000); // Resume after 3 seconds
  };

  const isMobile = slidesToShow === 1;

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-center px-4">
          Professional Investigation Services
        </h2>
        <p className="text-gray-600 mb-12 max-w-4xl mx-auto text-center px-4">
          Discreet, results-driven investigation services for individuals, businesses and legal professionals.
        </p>

        <div className="relative container mx-auto px-4">
          <div
            className="overflow-hidden"
            onTouchStart={(e) => setTouchStartX(e.changedTouches[0].clientX)}
            onTouchEnd={(e) => {
              if (touchStartX === null) return;
              const delta = e.changedTouches[0].clientX - touchStartX;
              if (Math.abs(delta) > 40) {
                if (delta > 0) prev(); else next();
              }
              setTouchStartX(null);
            }}
            style={{ touchAction: 'pan-y' }}
          >
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${index * (100 / slidesToShow)}%)`,
              }}
            >
              {infiniteServices.map((s, idx) => (
                <div
                  key={`${s.id}-${idx}`}
                  className="flex-shrink-0"
                  style={{ 
                    width: isMobile ? '100%' : `${100 / slidesToShow}%`,
                    paddingLeft: isMobile ? '0' : '12px',
                    paddingRight: isMobile ? '0' : '12px'
                  }}
                >
                  <div className={`bg-white overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                    isMobile ? 'rounded-2xl border-0 shadow-lg' : 'rounded-2xl shadow-lg border border-gray-100'
                  }`}>
                    <div className="relative">
                      <div
                        className={`w-full bg-cover bg-center ${isMobile ? 'h-64' : 'h-56'}`}
                        style={{ backgroundImage: `url(${s.img})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                          {s.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {s.desc}
                      </p>
                      
                      {/* Read More Button */}
                      <div className="mt-auto flex justify-end">
                        <Link 
                          to={s.link}
                          className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center"
                        >
                          Read More
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-xl text-gray-600 hover:text-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-110 ${
              isMobile ? 'left-2 w-10 h-10' : '-left-6 w-12 h-12'
            }`}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            className={`absolute top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 border border-gray-200 shadow-xl rounded-full flex items-center justify-center text-xl text-gray-600 hover:text-blue-600 transition-all duration-300 hover:shadow-2xl hover:scale-110 ${
              isMobile ? 'right-2 w-10 h-10' : '-right-6 w-12 h-12'
            }`}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {Array.from({ length: services.length }).map((_, i) => {
            const adjustedIndex = index >= services.length ? index - services.length : index;
            return (
              <button
                key={i}
                onClick={() => setIndex(i + services.length)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  (adjustedIndex % services.length) === i ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;