import React, { useState } from 'react';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Are investigations confidential?',
      a: 'Yes. Every enquiry is handled with complete discretion and confidentiality.',
    },
    {
      q: 'Do you operate nationwide?',
      a: 'Yes. We provide investigation services across England, Scotland, Wales and Northern Ireland, with international capability when required.',
    },
    {
      q: 'Can investigations begin quickly?',
      a: 'Subject to availability, many investigations can begin within 24 hours.',
    },
    {
      q: 'Will I receive evidence?',
      a: 'Yes. Where applicable, you’ll receive a detailed investigation report supported by photographic, video and written evidence.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-8xl">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Get answers to the most common questions about our private investigation services
        </p>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm mb-4">
              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left px-5 py-4 md:px-6 md:py-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 text-left flex-1">
                  {faq.q}
                </span>
                <span className="ml-4 text-gray-600 text-xl md:text-2xl select-none flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-panel-${index}`}
                  className="px-5 py-4 md:px-6 md:py-6 bg-white text-gray-700 leading-relaxed text-left"
                >
                  <p className="text-left">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
