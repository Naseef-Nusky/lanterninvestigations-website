import React from "react";
import { Link } from "react-router-dom";
import SEO from '../SEO';
const TermsConditions = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions - Lantern Investigations",
    "description": "Terms and conditions for using Lantern Investigations services. Please read these terms carefully before using our website and services.",
    "url": "https://hendersonthomasinvestigations.com/terms-and-conditions",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com"
    },
    "about": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com"
    }
  };

  return (
    <div className="bg-white pt-16 md:pt-20">
      <SEO 
        title="Terms & Conditions - Service Terms | Lantern Investigations"
        description="Terms and conditions for using Lantern Investigations services. Please read these terms carefully before using our website and services."
        keywords="terms and conditions, service terms, legal terms, website terms, Lantern Investigations terms, investigation service terms"
        url="/terms-and-conditions"
        structuredData={structuredData}
      />
      {/* Page Header - Full Width */}
      <section className="relative mb-12 h-80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/aboutPagebg.jpg" 
            alt="Terms & Conditions Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-8">
              Terms & Conditions
            </h2>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before using our services. By using our website, you agree to these terms.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-12 px-6 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto text-justify">

        {/* Section 1 */}
        <h2 className="text-lg font-semibold text-black mb-2">1. Liability</h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          We try to ensure the accuracy of all of the content. However, we do not
          accept any liability for the use made by you of the content. The
          content of this site should only be used for information purposes and
          you should not rely on it to make (or refrain from making) any decision
          or take (or refrain from taking) any action.
          <br />
          <br />
          The site is for your personal use and is not to be used for any
          commercial purpose. As a result, Lantern Investigations will
          not be responsible in any circumstances for your loss of profits.
          Lantern Investigations will also not be responsible for any
          loss including wasted expenditure, corruption or destruction of data
          unless the loss results from something Lantern Investigations
          has done wrong.
          <br />
          <br />
          Lantern Investigations is not liable for any damages or
          losses resulting from your inability to use this site. Lantern
          Investigations cannot promise that the site will be uninterrupted or
          entirely error free. Because of the nature of the internet, the site is
          provided on an "as available" basis. Lantern Investigations
          will not be responsible to you if we are unable to provide the site for
          any reason beyond our control.
        </p>

        {/* Section 2 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          2. Data Protection and Privacy
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          Any details which you provide to us from which we can identify you are
          held and processed in accordance with our{" "}
          <Link
            to="/privacy-policy"
            className="text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>

        {/* Section 3 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          3. Changes to the Terms
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          Lantern Investigations may change the site or these terms at
          any time. If you use the site after Lantern Investigations has
          changed the terms, you will be bound by the new terms.
        </p>

        {/* Section 4 */}
        <h2 className="text-lg font-semibold text-black mb-2">
          4. Governing Law and Jurisdiction
        </h2>
        <p className="text-gray-700 mb-6 text-sm md:text-base leading-relaxed">
          These terms and your use of this site are governed by and construed in
          accordance with the laws of England and Wales, and any disputes will be
          decided only by the Courts of England and Wales.
        </p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
