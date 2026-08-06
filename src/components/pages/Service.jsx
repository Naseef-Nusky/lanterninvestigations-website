import React from 'react';
import ServicesGrid from '../ServicesGrid.jsx';
import SEO from '../SEO';

const Services = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Private Investigation Services',
    description:
      'Trusted private investigators across the UK offering covert surveillance, background checks, fraud investigations, corporate investigations, personal investigations, missing person enquiries, people tracing and international investigations.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '51 Lime Street',
        addressLocality: 'London',
        postalCode: 'EC3M 7DQ',
        addressCountry: 'GB',
      },
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Private Investigation',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Professional Private Investigation Services | Lantern Investigations"
        description="Trusted private investigators across the UK. Covert surveillance, background checks, fraud investigations, corporate investigations, personal investigations, missing persons, people tracing and international investigations."
        keywords="private investigation services UK, hire a private investigator, private detective, covert surveillance, background checks, fraud investigation, corporate investigations, missing persons, people tracing"
        url="/our-services"
        structuredData={structuredData}
      />
      <ServicesGrid />
    </section>
  );
};

export default Services;
