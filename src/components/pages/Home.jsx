import React from 'react';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import ServicesSlider from '../sections/ServicesSlider';
import WhyChooseSection from '../sections/WhyChooseSection';
import ProcessSection from '../sections/ProcessSection';
import WhoWeWorkWith from '../sections/WhoWeWorkWith';
import FAQAccordion from '../sections/FAQAccordion';
import ContactSection from '../sections/ContactSection';
import SEO from '../SEO';

const HomePage = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Lantern Investigations',
    url: 'https://www.lanterninvestigations.com',
    description:
      'Professional private investigators providing discreet, results-driven investigations for individuals, businesses and legal professionals across the UK and internationally.',
    publisher: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lanterninvestigations.com/logo-new.png',
      },
    },
  };

  return (
    <>
      <SEO
        title="Private Investigations & Intelligence | Lantern Investigations"
        description="Professional private investigators providing discreet, results-driven investigations for individuals, businesses and legal professionals across the UK and internationally."
        keywords="private investigator UK, private investigations, covert surveillance, fraud investigation, missing persons, background checks, corporate investigations"
        url="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gray-50">
        <HeroSection />
        <AboutSection />
        <ServicesSlider />
        <WhyChooseSection />
        <ProcessSection />
        <WhoWeWorkWith />
        <FAQAccordion />
        <ContactSection />
      </div>
    </>
  );
};

export default HomePage;
