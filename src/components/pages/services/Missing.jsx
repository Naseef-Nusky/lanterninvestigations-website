import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ClipboardList, Search, FileCheck } from 'lucide-react';
import SEO from '../../SEO';

const MissingPersons = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const whoLocate = [
    'Missing family members',
    'Long-lost relatives',
    'Friends',
    'Former partners',
    'Witnesses',
    'Debtors',
    'Beneficiaries',
    'Birth parents',
    'Adopted family members',
    'Former colleagues',
    'Business associates',
    'Individuals required for legal proceedings',
  ];

  const whyMissing = [
    'Family disputes',
    'Relationship breakdowns',
    'Financial difficulties',
    'Relocation without notice',
    'Deliberately changing identity or contact details',
    'Emigration',
    'Mental health difficulties',
    'Loss of contact over time',
  ];

  const services = [
    {
      title: 'Missing Person Tracing',
      description:
        'Professional enquiries designed to locate individuals throughout the UK and internationally.',
    },
    {
      title: 'Address Tracing',
      description: 'Establishing current or previous addresses where lawfully available.',
    },
    {
      title: 'Family Tracing',
      description: 'Helping reconnect families who have lost contact over many years.',
    },
    {
      title: 'Witness Tracing',
      description: 'Locating important witnesses required for legal proceedings.',
    },
    {
      title: 'Debtor Tracing',
      description:
        'Helping businesses, landlords and solicitors locate individuals who owe money.',
    },
    {
      title: 'Beneficiary Tracing',
      description: 'Tracing beneficiaries involved in probate and estate matters.',
    },
    {
      title: 'International Missing Person Investigations',
      description:
        'Through our trusted international investigation network, we can assist with enquiries outside the United Kingdom where appropriate.',
    },
  ];

  const whyChoose = [
    'Over 25 Years of Investigative Experience',
    'Experienced Private Investigators',
    'Nationwide UK Coverage',
    'International Investigation Capability',
    'Professional Missing Person Investigators',
    'Fast Response Times',
    'Confidential Service',
    'Tailored Investigation Strategies',
    'Comprehensive Investigation Reports',
    'Friendly, Professional Advice',
  ];

  const process = [
    {
      number: '01',
      title: 'Confidential Consultation',
      description:
        'We begin by discussing everything you know about the individual you are trying to locate. This allows us to understand your objectives and determine the most appropriate investigative strategy.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Investigation Planning',
      description:
        'Every investigation is individually planned using the information available together with our investigative experience.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Information Gathering',
      description:
        'Our investigators conduct professional enquiries using lawful investigative methods, specialist tracing resources and intelligence gathering techniques to establish the individual’s whereabouts where possible.',
      icon: Search,
    },
    {
      number: '04',
      title: 'Reporting',
      description:
        'Once enquiries have been completed, you will receive a detailed report outlining our findings together with any relevant information obtained during the investigation.',
      icon: FileCheck,
    },
  ];

  const faqs = [
    {
      q: 'Can a private investigator find a missing person?',
      a: 'Yes. Experienced private investigators can often assist in locating individuals by carrying out lawful enquiries, tracing investigations and information gathering. Every case is different, and outcomes depend on the information available and the circumstances of the investigation.',
    },
    {
      q: 'How long does a missing person investigation take?',
      a: 'Every investigation is different. Some individuals can be located quickly, while more complex enquiries may require additional time. Following your consultation, we will provide realistic expectations based on your case.',
    },
    {
      q: 'Can you trace someone who moved abroad?',
      a: 'Yes. Through our trusted international network, we regularly assist clients with tracing individuals overseas where appropriate.',
    },
    {
      q: 'Are missing person investigations confidential?',
      a: 'Absolutely. Every enquiry is handled with complete discretion, professionalism and strict confidentiality.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Missing Person Investigation Services UK',
    description:
      'Professional missing person tracing by experienced private investigators. Family, witness, debtor and international tracing across the UK.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Missing Person Investigation',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Missing Person Investigation Services UK | Lantern Investigations"
        description="Professional missing person tracing by experienced private investigators. Locate family, witnesses, debtors and more across the UK and internationally."
        keywords="missing person investigation UK, people tracing, family tracing, witness tracing, debtor tracing, private investigator find someone"
        url="/service/missing"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/missing.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Missing Person Investigation Services UK
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-semibold">
            Professional Missing Person Tracing by Experienced Private Investigators
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lantern Investigations, we understand how distressing it can be when someone suddenly disappears or contact is unexpectedly lost.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 25 years of investigative experience, our specialist private investigators provide professional missing person investigation services throughout the UK and internationally, helping families, businesses and legal professionals locate individuals quickly, discreetly and lawfully.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you are trying to locate a missing family member, trace a long-lost friend, find a debtor, identify a witness or reconnect with someone you have lost contact with, our experienced investigators have the knowledge and resources to help.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every missing person investigation is handled with complete confidentiality, professionalism and sensitivity, recognising that every case is unique and often emotionally challenging. Professional investigators commonly assist with tracing family members, witnesses, debtors and individuals required for legal matters using lawful investigative methods.
          </p>
        </div>
      </div>

      {/* Professional Missing Person Investigations */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Professional Missing Person Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Finding a missing person requires patience, experience and a structured investigative approach.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lantern Investigations, we combine over two decades of investigative expertise with proven tracing techniques to maximise the chances of locating individuals both within the United Kingdom and overseas.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our investigations are tailored to each client’s circumstances, allowing us to pursue the most appropriate lines of enquiry while maintaining complete discretion throughout the investigation.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Whether someone has disappeared recently or contact has been lost many years ago, we are committed to helping clients obtain answers.
          </p>
        </div>
      </div>

      {/* Who Can We Help Locate */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
            Who Can We Help Locate?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
            Our experienced investigators regularly assist with locating:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whoLocate.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            No two investigations are the same, which is why every enquiry is carefully assessed before an investigation begins.
          </p>
        </div>
      </div>

      {/* Why People Go Missing */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
            Why People Go Missing
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
            There are many reasons why someone may no longer be contactable.
          </p>
          <p className="text-gray-900 font-semibold mb-4 text-left">These may include:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whyMissing.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed text-left">
            Our role is not to make assumptions but to establish the facts through professional investigation.
          </p>
        </div>
      </div>

      {/* Our Missing Person Investigation Services */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-left">
            Our Missing Person Investigation Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 text-left">
            Depending on your circumstances, our investigators may carry out:
          </p>
          <div className="space-y-8 text-left">
            {services.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="py-16 md:py-20 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,178,0.25),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mont tracking-tight">
              Our Investigation Process
            </h2>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute top-10 left-[12%] right-[12%] h-px bg-blue-500/40" />
            <div className="grid grid-cols-4 gap-6">
              {process.map((step) => {
                const Icon = step.icon;
                return (
                  <div key={step.number} className="text-center relative">
                    <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-[#0047b2] border-4 border-[#0f172a] shadow-lg shadow-blue-900/40 flex items-center justify-center relative z-10">
                      <Icon className="w-8 h-8 text-white" strokeWidth={1.75} />
                    </div>
                    <p className="text-blue-300 text-sm font-semibold tracking-widest mb-2">
                      STEP {step.number}
                    </p>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:hidden space-y-0 max-w-xl mx-auto">
            {process.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === process.length - 1;
              return (
                <div key={step.number} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-[#0047b2] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    {!isLast && <div className="w-px flex-1 bg-blue-500/40 my-2 min-h-[2rem]" />}
                  </div>
                  <div className={`pb-8 ${isLast ? 'pb-0' : ''}`}>
                    <p className="text-blue-300 text-xs font-semibold tracking-widest mb-1">
                      STEP {step.number}
                    </p>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            Clients trust Lantern Investigations because we provide:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            Our reputation has been built on professionalism, integrity and consistently delivering high-quality investigative services for clients across the UK.
          </p>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left px-5 py-4 md:px-6 md:py-5 bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <span className="text-base md:text-lg font-semibold text-gray-900 pr-4 text-left flex-1">
                    {faq.q}
                  </span>
                  <span className="text-gray-600 text-xl flex-shrink-0">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 py-4 md:px-6 md:py-6 bg-white text-gray-700 leading-relaxed text-left">
                    <p className="text-left">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Speak to a Missing Person Investigation Specialist
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you’re searching for a missing person, need to hire a private investigator to locate someone, or require professional people tracing services, Lantern Investigations is here to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our experienced investigators provide confidential missing person investigations, family tracing, witness tracing, debtor tracing and international tracing services throughout the UK.
          </p>
          <p className="text-gray-800 text-lg font-semibold mb-8">
            Contact Lantern Investigations today for a free, confidential consultation and let our experienced investigators help you find the answers you’re looking for.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold text-lg"
          >
            Speak With An Investigator
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MissingPersons;
