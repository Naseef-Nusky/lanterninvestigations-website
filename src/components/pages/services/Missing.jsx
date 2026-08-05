import React from "react";
import { Link } from "react-router-dom";
import SEO from '../../SEO';
const MissingPersons = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Missing Persons Investigation",
    "description": "Professional missing persons investigation services with compassionate support. Expert tracing and location services by Lantern Investigations.",
    "provider": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "51 Lime Street",
        "addressLocality": "London",
        "postalCode": "EC3M 7DQ",
        "addressCountry": "GB"
      },
      "telephone": "07979 359508",
      "email": "info@lanterninvestigations.com"
    },
    "serviceType": "Missing Persons Investigation",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": {
      "@type": "Offer",
      "name": "Missing Persons Investigation",
      "description": "Expert missing persons location services using advanced tracing methods and global contacts",
      "price": "Contact for quote",
      "availability": "InStock"
    }
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO 
        title="Missing Persons Investigation - Professional Tracing Services | Lantern Investigations"
        description="Professional missing persons investigation services with compassionate support. Expert tracing and location services by Lantern Investigations."
        keywords="missing persons investigation, missing person search, person tracing, missing person London, tracing services UK, locate missing person, find missing person"
        url="/service/missing"
        structuredData={structuredData}
      />
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/missing.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Missing Persons Investigator
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            Professional Support, Compassionate Service
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10 text-left md:text-justify">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Each year, many individuals go missing, leaving families and friends
            in distress. The process of locating a missing person can be both
            challenging and emotionally draining. This is where the expertise of
            professional missing persons investigators becomes invaluable.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A skilled investigator, such as Lantern Investigations, has
            the experience, tools, and resources needed to uncover the truth.
            Our services include tracing possible locations of missing
            individuals, locating birth parents, and ultimately helping families
            and loved ones find closure in difficult situations.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 leading-relaxed">
            When it comes to missing person investigations, Lantern
            Investigations is the trusted name you can rely on. Based in London,
            we have a team of highly skilled private investigators with
            experience in handling cases across the UK, consistently achieving
            successful outcomes in locating missing individuals.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We understand the emotional strain that missing person cases place
            on families, and we approach each case with empathy and dedication.
            Our team is committed to providing professional, compassionate
            support with a transparent and straightforward approach.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Utilising cutting-edge technology and adhering to ethical and legal
            investigative methods, our private investigators work tirelessly to
            track down missing persons. We also collaborate closely with law
            enforcement, when required, to ensure the best possible results for
            our clients.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Our Missing Persons Investigator Services
          </h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Locating Missing Persons
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our primary mission is to locate individuals who have gone
              missing, no matter the reasons behind their disappearance.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Finding Witnesses or Persons of Interest
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We can help track down potential witnesses or individuals who may
              hold key information vital to your case.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Investigating Cold Cases
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our team excels at revisiting unresolved cases, applying fresh
              investigative techniques and new perspectives to uncover potential
              leads.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">
              Providing Expert Testimony in Court
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Our skilled investigators are qualified to offer expert testimony
              in legal proceedings, helping to strengthen your case and support
              your efforts to achieve justice.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
<Link
  to="/contact"
  className="inline-block px-6 py-3 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold"
>
  Contact Us Today
</Link>
        </div>
      </div>
    </section>
  );
};

export default MissingPersons;