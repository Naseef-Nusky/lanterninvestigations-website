import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../SEO';

const AboutUs = () => {
  const image = '/background.jpg';

  const experienceAreas = [
    'Covert Surveillance',
    'Corporate Investigations',
    'Fraud Investigations',
    'Background Checks',
    'Missing Person Enquiries',
    'People Tracing',
    'Due Diligence',
    'Asset Tracing',
    'Relationship Investigations',
    'International Investigations',
  ];

  const values = [
    {
      title: 'Integrity',
      description:
        'Honesty, professionalism and ethical conduct are at the heart of everything we do. We provide clear, objective findings without speculation or exaggeration.',
    },
    {
      title: 'Confidentiality',
      description:
        'Every enquiry is treated with the strictest confidence. Your privacy and the security of your information remain our priority throughout every stage of an investigation.',
    },
    {
      title: 'Excellence',
      description:
        'We continually invest in investigative techniques, technology and professional development to ensure we deliver the highest possible standard of service.',
    },
    {
      title: 'Results',
      description:
        'We understand that clients instruct us because they need answers. Every investigation is planned with a clear objective and focused on achieving meaningful results.',
    },
    {
      title: 'Professionalism',
      description:
        'From your initial consultation through to the final report, you can expect honest advice, regular communication and exceptional client care.',
    },
  ];

  const whyChoose = [
    'Over 25 years of investigative experience',
    'Nationwide UK coverage',
    'International investigation capability',
    'Experienced private investigators',
    'Bespoke investigation strategies',
    'Lawful and ethical investigative practices',
    'Comprehensive evidence reports',
    'Professional communication throughout your case',
    'Rapid response to urgent enquiries',
    'Complete discretion and confidentiality',
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Lantern Investigations',
    description:
      'At Lantern Investigations, we believe that every client deserves the truth. Over 25 years of investigative experience delivering discreet, professional investigation services across the UK and internationally.',
    mainEntity: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      description:
        'Professional private investigation agency providing discreet, results-driven investigations for individuals, businesses and legal professionals.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '51 Lime Street',
        addressLocality: 'London',
        postalCode: 'EC3M 7DQ',
        addressCountry: 'GB',
      },
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
      serviceType: 'Private Investigation Services',
    },
  };

  return (
    <div className="pt-16 md:pt-20">
      <SEO
        title="About Lantern Investigations | Bringing the Truth to Light"
        description="At Lantern Investigations, we believe every client deserves the truth. Over 25 years of investigative experience delivering discreet, professional investigation services across the UK and internationally."
        keywords="about Lantern Investigations, private investigation company UK, private investigators, investigation agency, discreet investigations"
        url="/about"
        structuredData={structuredData}
      />

      {/* Page Header */}
      <section className="relative h-80">
        <div className="absolute inset-0 z-0">
          <img
            src="/aboutPagebg.jpg"
            alt="About Lantern Investigations"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center py-16 px-8 text-center">
          <div>
            <h1 className="text-4xl font-bold text-white mb-4">About Lantern Investigations</h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light">
              Bringing the Truth to Light
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 text-left">
              <p className="text-gray-800 text-lg font-semibold leading-relaxed mb-4">
                At Lantern Investigations, we believe that every client deserves the truth.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Whether you’re facing a personal matter, protecting your business, or seeking evidence for legal proceedings, our role is simple: to uncover the facts with professionalism, discretion and integrity.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With over 25 years of investigative experience, we have built a reputation for delivering reliable intelligence, lawful evidence and exceptional client service. Every investigation is approached with meticulous attention to detail, ensuring our clients receive clear, accurate and actionable findings that allow them to move forward with confidence.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                We understand that contacting a private investigation company is often during a difficult or uncertain time. That’s why we take the time to understand your circumstances, explain your options clearly and tailor every investigation to your individual objectives.
              </p>
              <p className="text-gray-800 text-lg font-semibold leading-relaxed">
                Our commitment is not simply to gather information — it’s to provide clarity when it matters most.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
                src={image}
                alt="About Lantern Investigations"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight text-center">
            Our Story
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            Lantern Investigations was founded with a clear vision:
          </p>
          <p className="text-gray-900 text-xl font-semibold leading-relaxed mb-6 text-center max-w-3xl mx-auto">
            To become one of the UK’s most trusted private investigation agencies by delivering professional, ethical and results-driven investigative services.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Over the past 25 years, our investigators have successfully supported thousands of private individuals, businesses, legal professionals and organisations throughout the United Kingdom and internationally.
          </p>
          <p className="text-gray-800 font-semibold mb-4 text-center">
            Our experience spans a wide range of investigations, including:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto mb-8">
            {experienceAreas.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Every case is unique, which is why we never rely on a one-size-fits-all approach. We carefully assess every enquiry before developing a bespoke investigation strategy designed to achieve the best possible outcome.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-mont">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our mission is to provide discreet, professional and evidence-led investigations that enable our clients to make informed decisions with confidence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are committed to maintaining the highest standards of professionalism while ensuring every investigation is conducted lawfully, ethically and with complete confidentiality.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Whether acting for a private client, solicitor or multinational organisation, we approach every instruction with the same level of dedication and attention to detail.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-mont">
                Our Vision
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our vision is to become the private investigation company that clients immediately think of when professionalism, discretion and reliability are essential.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By combining decades of investigative experience with modern intelligence-gathering techniques and the latest investigative technology, we continue to deliver high-quality results that clients can trust.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our aim is not simply to meet expectations but to exceed them on every investigation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 text-left font-mont">
            Our Values
          </h2>
          <div className="space-y-8 text-left">
            {values.map(({ title, description }) => (
              <div key={title}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Clients Choose */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight text-center">
            Why Clients Choose Lantern Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
            Choosing the right investigation company is an important decision.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            Clients continue to place their trust in Lantern Investigations because we provide:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {whyChoose.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Our reputation has been built through professionalism, reliability and consistently delivering high-quality investigative services.
          </p>
        </div>
      </section>

      {/* Modern + Coverage */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl space-y-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight text-center">
              A Modern Investigation Company
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Today’s investigations require far more than traditional surveillance.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Lantern Investigations combines experienced investigators with modern intelligence techniques, open-source intelligence (OSINT), digital research, specialist databases and advanced surveillance technology to provide comprehensive investigations that stand up to scrutiny.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              By embracing innovation while maintaining traditional investigative principles, we are able to deliver accurate intelligence efficiently and effectively.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 md:p-10 border border-gray-100">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-mont tracking-tight text-center">
              Nationwide &amp; International Coverage
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4 text-center max-w-3xl mx-auto">
              Our investigators operate throughout England, Scotland, Wales and Northern Ireland, while our trusted international network allows us to assist clients across Europe and worldwide.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Whether your enquiry is local, national or international, Lantern Investigations has the experience and capability to manage your case professionally.
            </p>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-16 bg-[#0f172a] text-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-mont tracking-tight">
            Our Commitment to Every Client
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            Every investigation begins with a confidential consultation where we take the time to understand your circumstances and objectives.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            From there, we create a tailored investigative strategy, provide clear communication throughout the investigation and deliver comprehensive reports supported by evidence wherever appropriate.
          </p>
          <p className="text-blue-200 text-lg font-semibold leading-relaxed mb-2">
            No unnecessary jargon. No unrealistic promises.
          </p>
          <p className="text-white text-lg font-semibold">
            Just professional investigations, conducted properly.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-mont tracking-tight">
            Speak With Lantern Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            If you require discreet, professional investigation services, our experienced team is ready to help.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Whether your enquiry is personal or corporate, you can be assured that your case will be handled with complete confidentiality, professionalism and care.
          </p>
          <p className="text-gray-900 text-xl font-semibold mb-8">
            Lantern Investigations — Bringing the Truth to Light.
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

export default AboutUs;
