import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSlider from '../sections/ServicesSlider';
// eslint-disable-next-line
import FAQAccordion from '../sections/FAQAccordion';
import ContactSection from '../sections/ContactSection';
import SEO from '../SEO';

const HomePage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Lantern Investigations",
    "url": "https://hendersonthomasinvestigations.com",
    "description": "UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, and discreet investigative services.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://hendersonthomasinvestigations.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "logo": {
        "@type": "ImageObject",
        "url": "https://hendersonthomasinvestigations.com/logo-new.png"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Professional Private Detective Services London | Lantern Investigations"
        description="UK's top-rated private detective agency specializing in corporate investigations, covert surveillance, fraud investigation, missing persons, and background checks. Professional, confidential solutions in London and across the UK."
        keywords="private detective London, private investigator UK, corporate investigations, covert surveillance, fraud investigation, missing persons, background checks, professional detective services"
        url="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <AboutSection />
        <ServicesSlider />
        {/* <FAQAccordion /> */}
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
