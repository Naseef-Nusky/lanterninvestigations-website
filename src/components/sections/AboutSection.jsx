import React from 'react';

const AboutSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight">
            Trusted Private Investigators
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Lantern Investigations, we understand that every enquiry is unique.
          </p>
          <p className="text-base text-gray-600 leading-relaxed mb-4">
            Whether you’re facing a personal matter, protecting your business, or requiring intelligence for legal proceedings, our experienced investigators deliver accurate evidence using lawful, professional investigative techniques.
          </p>
          <p className="text-base text-gray-600 leading-relaxed">
            From surveillance and fraud investigations to people tracing and comprehensive background checks, our priority is simple:{' '}
            <span className="font-semibold text-gray-900">To uncover the truth with complete discretion.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
