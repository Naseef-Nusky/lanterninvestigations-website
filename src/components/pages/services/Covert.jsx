import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ClipboardList, Eye, FileCheck } from 'lucide-react';
import SEO from '../../SEO';

const Covert = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const whenHelp = [
    'Relationship investigations',
    'Suspected infidelity',
    'Employee misconduct',
    'Insurance fraud',
    'Workplace theft',
    'Child custody disputes',
    'Lifestyle investigations',
    'Civil litigation support',
    'Evidence gathering',
    'Corporate investigations',
    'Asset monitoring',
    'High-value investigations',
  ];

  const whyChoose = [
    'Over 25 Years of Experience',
    'Experienced Private Investigators',
    'Nationwide UK Coverage',
    'International Investigation Capability',
    'Professional Surveillance Teams',
    'Detailed Investigation Planning',
    'High-Quality Evidence',
    'Comprehensive Investigation Reports',
    'Complete Confidentiality',
    'Professional Client Communication',
  ];

  const process = [
    {
      number: '01',
      title: 'Confidential Consultation',
      description:
        'Every investigation begins with a confidential discussion about your circumstances and objectives. We explain the options available and recommend the most appropriate surveillance strategy.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Investigation Planning',
      description:
        'Our investigators carefully assess the location, objectives and timescale before planning the operation. Every surveillance assignment is tailored specifically to your case.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Surveillance Deployment',
      description:
        'Experienced surveillance investigators carry out discreet observations while documenting relevant activity through detailed notes together with photographic or video evidence where appropriate.',
      icon: Eye,
    },
    {
      number: '04',
      title: 'Investigation Report',
      description:
        'Following completion of the investigation, you will receive a comprehensive report containing our findings together with supporting evidence where available. Our reports are presented professionally and clearly, allowing you to understand exactly what has been established.',
      icon: FileCheck,
    },
  ];

  const faqs = [
    {
      q: 'Is covert surveillance legal?',
      a: 'Surveillance activities in the UK must comply with applicable laws and depend on the circumstances in which they are carried out. Lantern Investigations conducts investigations lawfully and will advise you on the most appropriate approach for your case.',
    },
    {
      q: 'Will the person know they are being watched?',
      a: 'The purpose of professional covert surveillance is to gather information discreetly. Every operation is planned to minimise the likelihood of detection while remaining lawful and appropriate to the circumstances.',
    },
    {
      q: 'What evidence will I receive?',
      a: 'Where appropriate, clients receive a detailed investigation report supported by photographs, video evidence and written observations gathered during the investigation.',
    },
    {
      q: 'Do you provide surveillance across the UK?',
      a: 'Yes. Lantern Investigations provides covert surveillance services throughout England, Scotland, Wales and Northern Ireland, together with international surveillance support where required.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Professional Covert Surveillance Services UK',
    description:
      'Professional covert surveillance services by experienced private investigators. Discreet, lawful surveillance for personal and corporate investigations across the UK.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Covert Surveillance',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Covert Surveillance Services UK | Lantern Investigations"
        description="Professional covert surveillance by experienced private investigators. Discreet surveillance for personal and corporate investigations across the UK."
        keywords="covert surveillance UK, private surveillance, discreet surveillance, private investigator surveillance, hire private investigator, surveillance services"
        url="/service/covert"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/covert.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Covert Surveillance
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-semibold mb-3">
            Professional Covert Surveillance Services UK
          </p>
          <p className="text-base md:text-xl text-white/90">
            Discreet Surveillance by Experienced Private Investigators
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lantern Investigations, we provide professional covert surveillance services for private individuals, businesses, solicitors and corporate organisations throughout the United Kingdom.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 25 years of investigative experience, our specialist surveillance investigators conduct discreet, lawful and professionally managed surveillance operations designed to obtain clear photographic, video and observational evidence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you need to investigate suspected infidelity, employee misconduct, insurance fraud or suspicious activity, our experienced private investigators can provide the reliable evidence you need to make informed decisions.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every surveillance operation is carefully planned around your objectives, ensuring maximum effectiveness while maintaining complete confidentiality. Covert surveillance is widely used by professional investigators to gather factual evidence when conducted lawfully and proportionately.
          </p>
        </div>
      </div>

      {/* What Is Covert Surveillance */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            What Is Covert Surveillance?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Covert surveillance is one of the most effective investigative methods available to a professional private investigator.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            It involves discreetly observing an individual without drawing attention, allowing investigators to establish facts, verify information and document activities through professional evidence gathering.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our surveillance teams use years of experience, detailed planning and proven investigative techniques to monitor movements and activities while remaining as discreet as possible.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every investigation is unique, which is why we develop a bespoke surveillance strategy for every client.
          </p>
        </div>
      </div>

      {/* When Can Covert Surveillance Help */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
            When Can Covert Surveillance Help?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
            Our private surveillance services are suitable for a wide range of personal and corporate investigations.
          </p>
          <p className="text-gray-900 font-semibold mb-4 text-left">We regularly assist clients with:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whenHelp.map((item) => (
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
            Whether you are a private individual seeking answers or a business protecting its interests, Lantern Investigations provides discreet and professional surveillance throughout the UK.
          </p>
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
            With more than 25 years of investigative experience, we understand that successful surveillance relies on far more than simply following someone.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            Every operation is carefully assessed before deployment to maximise the likelihood of obtaining useful evidence.
          </p>
          <p className="text-gray-900 font-semibold mb-4 text-left">
            Clients choose Lantern Investigations because we provide:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-900 font-semibold text-lg mb-2 text-left">Our objective is simple:</p>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            To obtain reliable evidence while maintaining the highest professional standards throughout every investigation.
          </p>
        </div>
      </div>

      {/* Process — same style as homepage */}
      <div className="py-16 md:py-20 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,178,0.25),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mont tracking-tight">
              Our Covert Surveillance Process
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

      {/* Why Instruct a Professional */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why Instruct a Professional Private Investigator?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Attempting to carry out surveillance yourself can often alert the subject and compromise valuable evidence.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Professional surveillance investigators have the experience, patience and planning required to conduct effective observations while remaining discreet.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            By instructing Lantern Investigations, you benefit from decades of investigative experience, professional surveillance techniques and objective evidence gathering.
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
            Speak With a Surveillance Specialist
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you’re looking to hire a private investigator for covert surveillance, private surveillance, or a professional private investigation, Lantern Investigations is here to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our experienced surveillance investigators provide confidential services for private clients, solicitors and businesses across the UK.
          </p>
          <p className="text-gray-800 text-lg font-semibold mb-8">
            Contact Lantern Investigations today for a free, confidential consultation and discover how our professional covert surveillance services can help uncover the truth.
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

export default Covert;
