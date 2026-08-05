import React from "react";
import SEO from '../SEO';
// import { Link } from "react-router-dom";
const AboutUs = () => {
  const image = "/background.jpg"; // Replace with your image path

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Lantern Investigations",
    "description": "Learn about Lantern Investigations, a leading private detective agency specializing in professional investigation services with discretion and expertise.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "description": "Professional private investigation agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "51 Lime Street",
        "addressLocality": "London",
        "postalCode": "EC3M 7DQ",
        "addressCountry": "GB"
      },
      "telephone": "07979 359508",
      "email": "info@lanterninvestigations.com",
      "foundingDate": "2020",
      "areaServed": {
        "@type": "Country",
        "name": "United Kingdom"
      },
      "serviceType": "Private Investigation Services",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Investigation Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Covert Surveillance"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Fraud Investigation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Missing Persons Investigation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal Investigation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Background Check Services"
            }
          }
        ]
      }
    }
  };

  return (
    <div className="pt-16 md:pt-20">
      <SEO 
        title="About Us - Professional Private Investigators | Lantern Investigations"
        description="Learn about Lantern Investigations, a leading private detective agency specializing in professional investigation services with discretion and expertise. Experienced investigators serving London and UK."
        keywords="about Lantern Investigations, private detective agency, professional investigators, investigation services London, private investigation company, detective agency UK"
        url="/about"
        structuredData={structuredData}
      />
      {/* Page Header - Full Width */}
      <section className="relative h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/aboutPagebg.jpg" 
            alt="About Us Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
             About Us
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                Lantern Investigations specialises in a wide range of investigative services, delivering clear, reliable results with professionalism and discretion.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12 pb-10">
            {/* Text Content */}
            
            <div className="md:w-1/2 text-center">
              <p className="text-gray-700 text-lg  leading-relaxed mb-4">
                Lantern Investigations specialises in a wide range of investigative services. Our dedicated team of skilled male and female investigators operates with professionalism and precision, ensuring your case is managed with the utmost care and discretion.
              </p>
              <p className="text-gray-700 text-lg  leading-relaxed mb-4">
                We focus on gathering robust and reliable evidence, enabling our clients to uncover the truth and make informed decisions with confidence. Whether your concern involves personal, corporate, or legal matters, our experts bring years of experience, advanced resources, and cutting-edge equipment to thoroughly investigate and resolve your case.
              </p>
              <p className="text-gray-800 text-lg font-semibold mb-6">
                Whatever the challenge, you can rely on Lantern Investigations for a comprehensive and effective solution.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/2">
              <img
                src={image}
                alt="About Lantern Investigations"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
