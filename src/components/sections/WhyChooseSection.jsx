import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      title: 'Complete Confidentiality',
      description: 'Every enquiry is handled with absolute discretion.',
      image: '/clarityUncertainty.jpg',
    },
    {
      title: 'Nationwide Coverage',
      description: 'Investigators operating throughout the UK.',
      image: '/nationwideExpertise.png',
    },
    {
      title: 'International Network',
      description: 'Trusted investigation partners worldwide.',
      image: '/trustedInvestigators.jpg',
    },
    {
      title: 'Experienced Investigators',
      description: 'Professional investigators with extensive operational experience.',
      image: '/tailoredSolutions.jpg',
    },
    {
      title: 'Fast Response',
      description: 'Investigations can often commence within 24 hours.',
      image: '/Fast%20Response.png',
    },
    {
      title: 'Detailed Evidence',
      description: 'Professional reports supported by photographs, video and factual findings.',
      image: '/faq.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight">
            Why Choose Lantern Investigations
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map(({ title, description, image }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">{description}</p>
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
