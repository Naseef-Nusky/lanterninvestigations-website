import React from 'react';

const ProfessionalServicesSection = () => {
  const services = [
    {
      title: "Fraud Investigation",
      description: "Fraud is on the rise, costing victims billions annually. Our investigation team specializes in uncovering fraudulent activities, from financial scams to corporate fraud, with cutting-edge forensic analysis and deep industry expertise.",
      image: "/fraud.jpg"
    },
    {
      title: "Personal Investigations",
      description: "From background checks and infidelity investigations to online dating inquiries, our detectives handle sensitive cases with care and discretion, providing you with the truth you deserve.",
      image: "/personal.jpg"
    },
    {
      title: "Background Checking Services",
      description: "From criminal, employment, and financial checks to personal verification, our team provides accurate and confidential background checking services.",
      image: "/professional.jpg"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wide">
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight">
            Our Professional Services
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Confidential, professional, and tailored investigation services delivering clear, reliable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white">
              {/* Image Section */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-blue-800/40 to-indigo-900/50"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  {service.description}
                </p>
                
                {/* Read More Button */}
                <div className="flex justify-end">
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300 flex items-center">
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
                
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

export default ProfessionalServicesSection;
