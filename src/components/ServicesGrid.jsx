import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';

const ServicesGrid = () => {
  const services = [
    {
      id: 'covert',
      title: 'Covert Surveillance',
      image: '/covert.jpg',
      link: '/service/covert',
      intro:
        'Professional private surveillance remains one of the most effective investigative techniques for gathering factual evidence.',
      body:
        'Our experienced surveillance operatives conduct discreet observations using specialist equipment to capture high-quality photographic and video evidence suitable for legal proceedings where appropriate.',
      listTitle: 'Surveillance investigations include:',
      items: [
        'Relationship investigations',
        'Employee misconduct',
        'Insurance fraud',
        'Child custody matters',
        'Civil litigation',
        'Suspicious activity',
        'Lifestyle investigations',
      ],
      closing:
        'Every surveillance operation is planned individually to maximise results while remaining fully compliant with UK law.',
    },
    {
      id: 'background',
      title: 'Background Checks',
      image: '/background.jpg',
      link: '/service/background',
      intro: 'Knowing who you’re dealing with can protect both your personal and professional interests.',
      body:
        'Our comprehensive background checking services verify important information before you make significant personal, financial or business decisions.',
      listTitle: 'Our background investigations may include:',
      items: [
        'Identity verification',
        'Employment history',
        'Company director searches',
        'Financial intelligence',
        'County Court Judgments (where available)',
        'Business interests',
        'Reputation research',
        'Open-source intelligence (OSINT)',
        'Social media investigations',
      ],
      closing:
        'Whether you’re recruiting staff, entering a business partnership or beginning a personal relationship, our background investigations provide greater confidence before making important decisions.',
    },
    {
      id: 'fraud',
      title: 'Fraud Investigations',
      image: '/fraud.jpg',
      link: '/service/fraud',
      intro: 'Fraud affects businesses and individuals every day.',
      body:
        'Our specialist investigators conduct professional fraud investigations designed to identify fraudulent activity, gather evidence and minimise financial loss.',
      listTitle: 'We regularly investigate:',
      items: [
        'Insurance fraud',
        'Employee theft',
        'Expense fraud',
        'Identity fraud',
        'Investment scams',
        'Romance scams',
        'Procurement fraud',
        'Internal company fraud',
      ],
      closing:
        'Our investigators combine intelligence gathering, surveillance and digital research to establish the facts quickly and professionally.',
    },
    {
      id: 'corporate',
      title: 'Corporate Investigations',
      image: '/professional.jpg',
      link: '/contact',
      intro: 'Protecting your organisation requires more than assumptions.',
      body:
        'Our corporate investigation services help businesses identify internal risks, investigate misconduct and protect valuable assets.',
      listTitle: 'Corporate services include:',
      items: [
        'Employee investigations',
        'Internal theft',
        'Corporate surveillance',
        'Due diligence',
        'Intellectual property investigations',
        'Asset tracing',
        'Competitor intelligence',
        'Business partner verification',
      ],
      closing:
        'We work with companies of all sizes, from SMEs to multinational organisations, providing discreet investigations that support informed business decisions.',
    },
    {
      id: 'personal',
      title: 'Personal Investigations',
      image: '/personal.jpg',
      link: '/service/personal',
      intro: 'Sometimes you simply need answers.',
      body:
        'Our personal investigation services are designed for clients dealing with sensitive situations requiring professionalism and complete confidentiality.',
      listTitle: 'Personal investigations include:',
      items: [
        'Relationship investigations',
        'Infidelity investigations',
        'Online dating verification',
        'Family matters',
        'Neighbour disputes',
        'Lifestyle enquiries',
        'Address tracing',
        'People tracing',
      ],
      closing: 'Every case is handled with empathy, discretion and absolute confidentiality.',
    },
    {
      id: 'missing',
      title: 'Missing Person Investigations',
      image: '/missing.jpg',
      link: '/service/missing',
      intro: 'If someone important has disappeared or contact has been lost, our investigators can help.',
      body:
        'Using professional tracing techniques, specialist databases and intelligence resources, we assist clients in locating:',
      listTitle: null,
      items: [
        'Missing family members',
        'Friends',
        'Witnesses',
        'Debtors',
        'Former partners',
        'Long-lost relatives',
      ],
      closing: 'Our investigations extend throughout the UK and internationally where required.',
    },
    {
      id: 'tracing',
      title: 'People Tracing & Address Tracing',
      image: '/clarityUncertainty.jpg',
      link: '/contact',
      intro:
        'Finding someone’s current address or whereabouts can often be achieved through lawful investigative techniques.',
      body:
        'Our tracing services assist private clients, legal professionals and businesses in locating individuals quickly and efficiently.',
      listTitle: 'Common tracing enquiries include:',
      items: [
        'Debtor tracing',
        'Beneficiary tracing',
        'Witness tracing',
        'Family tracing',
        'Address verification',
        'Skip tracing',
      ],
      closing: null,
    },
    {
      id: 'international',
      title: 'International Investigations',
      image: '/trustedInvestigators.jpg',
      link: '/contact',
      intro: 'Some investigations extend beyond UK borders.',
      body:
        'Through our trusted international network, Lantern Investigations undertakes investigations across Europe and worldwide.',
      listTitle: 'International services include:',
      items: [
        'Overseas surveillance',
        'International people tracing',
        'Background investigations',
        'Corporate intelligence',
        'Asset tracing',
        'Due diligence',
      ],
      closing: null,
    },
  ];

  const whyChoose = [
    'Over 25 years of investigative experience',
    'Nationwide UK coverage',
    'International investigation capability',
    'Experienced private investigators',
    'Bespoke investigation strategies',
    'Professional surveillance teams',
    'Comprehensive evidence reports',
    'Rapid response to urgent enquiries',
    'Complete confidentiality',
    'Transparent communication throughout your investigation',
  ];

  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="relative mb-0 h-80">
        <div className="absolute inset-0 z-0">
          <img
            src="/servicesPagebg.jpg"
            alt="Our Services Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Professional Private Investigation Services
            </h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
              Trusted Private Investigators Across the UK
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center md:text-left">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At Lantern Investigations, we provide a comprehensive range of private investigation services for individuals, businesses, solicitors and organisations throughout the UK and internationally.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            With over 25 years of investigative experience, our team has successfully conducted thousands of investigations, ranging from discreet private surveillance and background checks to complex fraud investigations, corporate investigations, missing person enquiries and people tracing.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Every investigation is tailored to your objectives, ensuring we deliver accurate intelligence, professional evidence and complete peace of mind. Whether you need to hire a private investigator, require an experienced private detective, or are seeking specialist investigative support for your business, Lantern Investigations is here to help.
          </p>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Our services are delivered with complete confidentiality, professionalism and integrity, providing reliable evidence that enables you to make informed decisions with confidence.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 font-mont tracking-tight text-center">
            Our Investigation Services
          </h2>

          <div className="space-y-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                } md:flex`}
              >
                <div className="md:w-2/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-56 md:h-full object-cover min-h-[220px]"
                  />
                </div>
                <div className="md:w-3/5 p-6 md:p-8 text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">{service.intro}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">{service.body}</p>
                  {service.listTitle && (
                    <p className="text-gray-900 font-semibold mb-3">{service.listTitle}</p>
                  )}
                  <ul className="grid sm:grid-cols-2 gap-2 mb-4">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0047b2] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.closing && (
                    <p className="text-gray-700 leading-relaxed mb-5">{service.closing}</p>
                  )}
                  <Link
                    to={service.link}
                    className="inline-flex items-center bg-[#0047b2] text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                  >
                    {service.link === '/contact' ? 'Enquire Now' : 'Read More'}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight text-center">
            Why Choose Lantern Investigations?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Clients choose Lantern Investigations because we provide:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
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
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            We understand that every investigation is unique. Rather than offering generic solutions, we tailor each investigation to your objectives, ensuring the most effective approach for your circumstances.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mont tracking-tight">
            Need to Hire a Private Investigator?
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            If you’re looking to hire a private investigator, require a professional private detective, or need confidential investigative support for your business, Lantern Investigations is ready to help.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Our experienced investigators are available throughout the UK to discuss your enquiry in complete confidence.
          </p>
          <p className="text-blue-200 text-lg font-semibold mb-8">
            Contact Lantern Investigations today for a free, confidential consultation and discover how our professional investigation services can help uncover the truth.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-[#0047b2] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Speak With An Investigator
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesGrid;
