import React from 'react';

const AboutSection = () => {
  const features = [
    {
      title: "Clarity in Uncertainty",
      description: "Life is full of unanswered questions and hidden truths. That's where we step in — uncovering the facts and providing you with clarity when faced with uncertainty.",
      image: "/clarityUncertainty.jpg"
    },
    {
      title: "Nationwide Expertise",
      description: "Based in London, we support clients across the UK with professional and confidential investigation services delivered with integrity and discretion.",
      image: "/nationwideExpertise.png"
    },
    {
      title: "Trusted Investigators",
      description: "Our experienced team takes pride in delivering results, ensuring every case is handled with the utmost care and expertise.",
      image: "/trustedInvestigators.jpg"
    },
    {
      title: "Tailored Solutions",
      description: "From personal investigations to fraud detection and background checks, we provide customised solutions to meet your unique needs — in London, Surrey, and nationwide.",
      image: "/tailoredSolutions.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight">
            Your Local Private Investigator
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Henderson Thomas Investigations specialises in both private and corporate investigations. 
            Our team operates globally, providing expert support for cases across the UK.
          </p>
        </div>

        {/* Features Grid with Images */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
                
                {/* Bottom Accent Line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-0 group-hover:w-full transition-all duration-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;