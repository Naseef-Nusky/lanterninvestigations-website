import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, MessageSquare, ClipboardList, Search, FileCheck } from 'lucide-react';
import SEO from '../../SEO';

const BackgroundCheck = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const whoUses = [
    'Beginning a new relationship',
    'Recruiting employees',
    'Employing senior executives',
    'Purchasing a business',
    'Entering commercial partnerships',
    'Instructing contractors',
    'Making significant financial investments',
    'Protecting family interests',
  ];

  const checkTypes = [
    {
      title: 'Identity Verification',
      description: 'Confirm whether an individual is who they claim to be.',
    },
    {
      title: 'Address History',
      description:
        'Where lawfully available, we can establish previous and current address information relevant to your enquiry.',
    },
    {
      title: 'Employment Verification',
      description: 'Verify employment history and professional information where possible.',
    },
    {
      title: 'Business Background Checks',
      description:
        'Research businesses, directors and companies to help you understand who you are dealing with before entering into agreements.',
    },
    {
      title: 'Company Director Checks',
      description:
        'Investigate directorship history, business interests and publicly available company information.',
    },
    {
      title: 'Financial Background Checks',
      description:
        'Where information is publicly available, we can identify indicators such as insolvencies, bankruptcies, County Court Judgments and director disqualifications where relevant.',
    },
    {
      title: 'Relationship Background Checks',
      description:
        'Many clients ask us to carry out discreet background investigations before committing to a serious relationship. We can help verify information relating to identity, employment, relationship status, business interests, lifestyle concerns and publicly available information.',
    },
    {
      title: 'Reputation Investigations',
      description:
        'We research publicly available information to identify anything that may affect personal or commercial decision making.',
    },
    {
      title: 'Due Diligence Investigations',
      description:
        'Our due diligence investigations provide valuable intelligence before business acquisitions, investments, partnerships and commercial agreements.',
    },
  ];

  const clients = [
    'Private Individuals',
    'Businesses',
    'Company Directors',
    'Solicitors',
    'Landlords',
    'Recruitment Agencies',
    'Investors',
    'Financial Organisations',
    'High Net Worth Individuals',
    'Corporate Clients',
  ];

  const whyChoose = [
    'Over 25 Years of Investigative Experience',
    'Experienced UK Private Investigators',
    'Nationwide Coverage',
    'International Investigation Capability',
    'Professional Background Investigations',
    'Confidential Service',
    'Tailored Investigation Plans',
    'Fast Response Times',
    'Comprehensive Reports',
    'Friendly, Professional Advice',
  ];

  const process = [
    {
      number: '01',
      title: 'Initial Consultation',
      description:
        'We begin by discussing your enquiry confidentially and understanding exactly what information you require.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Investigation Planning',
      description:
        'A bespoke investigation strategy is prepared based on your objectives and the information available.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Background Investigation',
      description:
        'Our experienced investigators carry out detailed enquiries using professional investigative techniques and lawful research methods.',
      icon: Search,
    },
    {
      number: '04',
      title: 'Detailed Investigation Report',
      description:
        'Once enquiries have been completed, you will receive a comprehensive report outlining our findings in a clear and professional format.',
      icon: FileCheck,
    },
  ];

  const faqs = [
    {
      q: 'Why should I use a private investigator for a background check?',
      a: 'Professional investigators have the experience to verify information thoroughly and lawfully, helping you make informed decisions based on reliable findings.',
    },
    {
      q: 'Are your background investigations confidential?',
      a: 'Yes. Every enquiry is handled with complete discretion and strict confidentiality.',
    },
    {
      q: 'Can you investigate both people and businesses?',
      a: 'Yes. We undertake background investigations on individuals, companies, directors and commercial organisations.',
    },
    {
      q: 'How long does a background check take?',
      a: 'Timescales vary depending on the complexity of the investigation. Following your confidential consultation, we will provide an estimated completion time.',
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Background Check Services UK',
    description:
      'Professional background check services by experienced private investigators. Verify information, reduce risk and make confident decisions across the UK.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Background Check',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Background Check Services UK | Lantern Investigations"
        description="Professional background checks by experienced private investigators. Verify information, reduce risk and make confident decisions. Discreet background investigations across the UK."
        keywords="background check UK, background check services, private investigator background check, due diligence, company director checks, relationship background check"
        url="/service/background"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Background Check Services UK
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-semibold mb-3">
            Professional Background Checks by Experienced Private Investigators
          </p>
          <p className="text-base md:text-xl text-white/90">
            Verify Information. Reduce Risk. Make Confident Decisions.
          </p>
        </div>
      </div>

      {/* Intro */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <p className="text-gray-700 text-lg leading-relaxed">
            At Lantern Investigations, we provide professional background check services for private individuals, businesses, solicitors and organisations throughout the UK.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            With over 25 years of investigative experience, our team carries out discreet and confidential background investigations designed to verify important information before you make personal, financial or business decisions.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Whether you require a background check on a person, need to verify a business, or wish to instruct a private investigator before entering into a relationship or commercial agreement, our experienced investigators deliver accurate intelligence you can rely on.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every investigation is tailored to your individual requirements and conducted professionally, discreetly and in accordance with UK legislation.
          </p>
        </div>
      </div>

      {/* Professional services + who we assist */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
            Professional Background Check Services
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-left">
            A professional background investigation can provide valuable information that may not always be immediately apparent.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            Our experienced private investigators undertake comprehensive enquiries to help clients establish the facts before making important decisions.
          </p>
          <p className="text-gray-900 font-semibold mb-4 text-left">We regularly assist clients who are:</p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {whoUses.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            A professionally conducted background check can provide reassurance, reduce uncertainty and help protect you from unnecessary risk.
          </p>
        </div>
      </div>

      {/* What can include */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 text-left">
            What Can Our Background Checks Include?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-3 text-left">
            Every investigation is different.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-10 text-left">
            Depending on your objectives, our background investigations may include enquiries into:
          </p>
          <div className="space-y-8 text-left">
            {checkTypes.map((item) => (
              <div key={item.title}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who uses */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-left">
            Who Uses Our Background Check Services?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            Lantern Investigations provides professional background investigations for:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {clients.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-left">
            Whether you require a personal background check or comprehensive business due diligence, our investigators provide accurate and confidential intelligence tailored to your objectives.
          </p>
        </div>
      </div>

      {/* Why choose */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-left">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6 text-left">
            When you instruct Lantern Investigations, you benefit from:
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
            Our investigators have successfully completed thousands of investigations for private clients and businesses throughout the United Kingdom.
          </p>
        </div>
      </div>

      {/* Process — same style as homepage */}
      <div className="py-16 md:py-20 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,178,0.25),transparent_50%)]" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mont tracking-tight">
              Our Investigation Process
            </h2>
          </div>

          {/* Desktop timeline */}
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

          {/* Mobile / tablet vertical timeline */}
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
            Contact Lantern Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you’re looking for a trusted private investigator to carry out a professional background check, our experienced team is here to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Whether you require a background investigation, business due diligence, company checks or a relationship background check, Lantern Investigations provides discreet and confidential services throughout the UK.
          </p>
          <p className="text-gray-800 text-lg font-semibold mb-8">
            Contact Lantern Investigations today for a free, confidential consultation and discover how our professional background check services can help you make informed decisions.
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

export default BackgroundCheck;
