import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ClipboardList, Search, FileCheck } from 'lucide-react';
import SEO from '../../SEO';

const Personal = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const relationshipItems = [
    'Suspected infidelity',
    'Secret relationships',
    'Double lives',
    'Suspicious behaviour',
    'Unexplained absences',
    'Lifestyle verification',
  ];

  const onlineDatingVerify = [
    'Identity',
    'Employment',
    'Relationship status',
    'Business interests',
    'Lifestyle claims',
  ];

  const familyItems = [
    'Family disputes',
    'Child welfare concerns',
    'Missing family members',
    'Family tracing',
    'Welfare enquiries',
    'Family-related investigations',
  ];

  const tracingItems = [
    'Family tracing',
    'Former partner tracing',
    'Friend tracing',
    'Debtor tracing',
    'Witness tracing',
    'Beneficiary tracing',
  ];

  const whyChoose = [
    'Over 25 Years of Investigative Experience',
    'Experienced UK Private Investigators',
    'Nationwide Coverage',
    'International Investigation Capability',
    'Bespoke Investigation Strategies',
    'Professional Surveillance Teams',
    'Detailed Investigation Reports',
    'Fast Response Times',
    'Complete Confidentiality',
    'Outstanding Client Service',
  ];

  const process = [
    {
      number: '01',
      title: 'Confidential Consultation',
      description:
        'Every investigation begins with a confidential discussion to understand your circumstances and objectives.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Investigation Planning',
      description: 'A bespoke investigation strategy is prepared specifically for your enquiry.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Investigation',
      description:
        'Our experienced investigators carry out discreet enquiries using professional investigative techniques to establish the facts.',
      icon: Search,
    },
    {
      number: '04',
      title: 'Comprehensive Investigation Report',
      description:
        'Following completion of the investigation, you will receive a professional report detailing our findings together with supporting evidence where appropriate.',
      icon: FileCheck,
    },
  ];

  const faqs = [
    {
      q: 'Are personal investigations confidential?',
      a: 'Absolutely. Every enquiry is handled with complete discretion and strict confidentiality.',
    },
    {
      q: 'Can you investigate suspected infidelity?',
      a: 'Yes. Our experienced investigators regularly assist clients with relationship investigations, covert surveillance and evidence gathering where there is a legitimate reason to do so.',
    },
    {
      q: 'Do you investigate online dating scams?',
      a: 'Yes. We investigate romance scams, false identities and individuals suspected of dishonest behaviour within online relationships.',
    },
    {
      q: 'Do you provide personal investigation services throughout the UK?',
      a: 'Yes. Lantern Investigations provides professional personal investigation services throughout England, Scotland, Wales and Northern Ireland, together with international investigations where required.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Personal Investigation Services',
    description:
      'Professional personal investigation services by experienced private investigators. Discreet relationship, infidelity, background and tracing investigations across the UK.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Personal Investigation',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Personal Investigation Services UK | Lantern Investigations"
        description="Professional personal investigation services by experienced private investigators. Discreet relationship, infidelity, family and tracing investigations across the UK."
        keywords="personal investigation UK, relationship investigation, infidelity investigation, private investigator, people tracing, covert surveillance personal"
        url="/service/personal"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/personal.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Personal Investigation Services
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-semibold mb-3">
            Professional Personal Investigation Services by Experienced Private Investigators
          </p>
          <p className="text-base md:text-xl text-white/90">
            Discreet, Confidential & Professional Private Investigators Across the UK
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lantern Investigations, we understand that personal matters often require sensitivity, discretion and complete confidentiality.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 25 years of investigative experience, our highly experienced private investigators provide professional personal investigation services for individuals throughout the United Kingdom and internationally.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you have concerns about a relationship, need answers regarding a family matter, wish to verify information, or require professional evidence, our investigators deliver a discreet and tailored service designed to establish the facts.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every investigation is conducted with professionalism, integrity and complete confidentiality, ensuring you receive reliable information that allows you to make informed decisions with confidence.
          </p>
        </div>
      </div>

      {/* Professional Personal Investigation Services */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Professional Personal Investigation Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Every personal investigation is different.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced investigators take time to understand your circumstances before developing a bespoke investigation strategy tailored specifically to your objectives.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether your enquiry requires covert surveillance, relationship investigations, background enquiries or people tracing, our team is committed to obtaining the answers you need professionally and discreetly.
          </p>
          <p className="text-gray-900 font-semibold text-lg">Our objective is simple:</p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            To establish the facts while protecting your privacy throughout every stage of the investigation.
          </p>
        </div>
      </div>

      {/* Our Personal Investigation Services intro */}
      <div className="pt-14 pb-6 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Our Personal Investigation Services
          </h2>
        </div>
      </div>

      {/* Relationship Investigations */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Relationship Investigations
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Relationship concerns can be emotionally challenging, particularly when trust has broken down.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our investigators provide discreet investigations designed to establish the facts, allowing you to make important decisions based on evidence rather than uncertainty.
          </p>
          <p className="text-gray-900 font-semibold mb-4">We regularly investigate:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {relationshipItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every investigation is handled with complete discretion and professionalism.
          </p>
        </div>
      </div>

      {/* Infidelity Investigations */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Infidelity Investigations</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you believe your partner may be unfaithful, obtaining factual evidence can provide clarity during a difficult time.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced surveillance investigators conduct discreet investigations designed to establish the truth while maintaining complete confidentiality.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Where appropriate, clients receive detailed reports together with photographic or video evidence obtained during the investigation.
          </p>
        </div>
      </div>

      {/* Online Dating Investigations */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            Online Dating Investigations
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Meeting people online has become increasingly common, but unfortunately so have romance scams and false identities.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you have concerns about someone you have met online, our investigators can verify important information before emotional or financial commitments are made.
          </p>
          <p className="text-gray-900 font-semibold mb-4">Our investigations may include verifying:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {onlineDatingVerify.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Checks */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Background Checks</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Before placing your trust in someone, it is often sensible to verify the information you have been given.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our professional background investigation services help clients confirm important details before entering relationships, making financial commitments or entering business arrangements.
          </p>
        </div>
      </div>

      {/* Family Investigations */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Family Investigations</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Family matters often require experienced investigators who understand the importance of professionalism and discretion.
          </p>
          <p className="text-gray-900 font-semibold mb-4">We regularly assist with:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {familyItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every enquiry is handled with care, sensitivity and complete confidentiality.
          </p>
        </div>
      </div>

      {/* People Tracing */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">People Tracing</h3>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            If you have lost contact with someone important, our investigators can help locate individuals throughout the UK and internationally.
          </p>
          <p className="text-gray-900 font-semibold mb-4">Our tracing services include:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {tracingItems.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lifestyle Investigations */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Lifestyle Investigations</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Changes in behaviour can sometimes raise legitimate concerns.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our investigators can discreetly establish factual information regarding an individual’s movements and activities where there is a lawful and legitimate reason to do so.
          </p>
        </div>
      </div>

      {/* Covert Surveillance */}
      <div className="py-10 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Covert Surveillance</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Professional covert surveillance remains one of the most effective investigative techniques available.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced surveillance teams operate discreetly throughout the UK, obtaining evidence through carefully planned surveillance operations.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Where appropriate, clients receive detailed reports supported by photographic and video evidence.
          </p>
        </div>
      </div>

      {/* Why Choose */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            With over 25 years of investigative experience, Lantern Investigations has built a reputation for delivering professional, discreet and results-driven investigations.
          </p>
          <p className="text-gray-900 font-semibold mb-4 text-left">Clients choose us because we provide:</p>
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
            We understand that every personal investigation involves sensitive circumstances, which is why we approach every case with professionalism, integrity and complete discretion.
          </p>
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

      {/* FAQ */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.q}
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-sm"
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
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Speak to an Experienced Private Investigator
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you’re looking to hire a private investigator for a personal investigation, relationship investigation, infidelity investigation, background investigation, people tracing or covert surveillance, Lantern Investigations is here to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Our experienced investigators provide confidential, professional and discreet investigation services throughout the UK.
          </p>
          <p className="text-gray-800 text-lg font-semibold mb-8">
            Contact Lantern Investigations today for a free, confidential consultation and let our experienced private investigators help you uncover the truth.
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

export default Personal;
