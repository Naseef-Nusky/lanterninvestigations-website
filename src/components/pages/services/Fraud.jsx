import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import SEO from '../../SEO';

const FraudInvestigation = () => {
  const employeeFraud = [
    'Employee theft',
    'Expense fraud',
    'Time theft',
    'Unauthorised secondary employment',
    'Abuse of company resources',
    'Dishonest conduct',
    'Breaches of trust',
  ];

  const blackmailAssist = [
    'Identifying the individual responsible where possible',
    'Gathering and preserving evidence',
    'Investigating online activity',
    'Supporting clients with evidence suitable for legal advisers or law enforcement where appropriate',
    'Advising on practical next steps while maintaining complete confidentiality',
  ];

  const corporateServices = [
    'Internal fraud investigations',
    'Procurement fraud',
    'Director misconduct',
    'Shareholder disputes',
    'Supplier fraud',
    'Due diligence investigations',
    'Asset tracing',
    'Corporate intelligence',
  ];

  const legalOptions = [
    'Civil recovery claims',
    'Asset recovery',
    'Recovery of monies obtained through fraud',
    'Injunctions where appropriate',
    'Legal advice regarding financial losses',
    'Representation through specialist fraud solicitors',
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Fraud Investigation Services',
    description:
      'Professional fraud investigation services for employee fraud, insurance fraud, financial fraud, identity fraud, romance fraud, blackmail and corporate fraud across the UK.',
    provider: {
      '@type': 'Organization',
      name: 'Lantern Investigations',
      url: 'https://www.lanterninvestigations.com',
      telephone: '07979 359508',
      email: 'info@lanterninvestigations.com',
    },
    serviceType: 'Fraud Investigation',
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO
        title="Fraud Investigation Services UK | Lantern Investigations"
        description="Professional fraud investigation services for employee, insurance, financial, identity, romance and corporate fraud. Experienced investigators across the UK."
        keywords="fraud investigation UK, employee fraud, insurance fraud, financial fraud, identity fraud, romance fraud, corporate fraud investigation, private investigator fraud"
        url="/service/fraud"
        structuredData={structuredData}
      />

      {/* Hero */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/fraud.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Fraud Investigation Services
          </h1>
          <p className="text-lg md:text-2xl text-blue-100 font-semibold">
            Professional Fraud Investigations Across the UK
          </p>
        </div>
      </div>

      {/* Types intro */}
      <div className="bg-white py-14">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Types of Fraud We Investigate
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our experienced fraud investigators assist private individuals, businesses and legal professionals with a wide range of fraud investigations throughout the UK.
          </p>
        </div>
      </div>

      {/* Employee Fraud */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Employee Fraud</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Internal fraud can have a significant financial impact on any business.
          </p>
          <p className="text-gray-900 font-semibold mb-4">We investigate:</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {employeeFraud.map((item) => (
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

      {/* Insurance Fraud */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Insurance Fraud</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            False or exaggerated insurance claims can result in substantial financial losses.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our investigators gather evidence through surveillance, witness enquiries and professional investigation techniques to establish the facts.
          </p>
        </div>
      </div>

      {/* Financial Fraud */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Financial Fraud</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Financial fraud can occur in both personal and commercial settings.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We investigate allegations involving financial deception, misrepresentation, hidden transactions and dishonest conduct to help clients understand exactly what has occurred.
          </p>
        </div>
      </div>

      {/* Identity Fraud */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Identity Fraud</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Identity theft is becoming increasingly common.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you believe your identity has been misused or someone is using false details for financial gain, our investigators can carry out a professional investigation to establish the facts.
          </p>
        </div>
      </div>

      {/* Romance Fraud */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl space-y-4 text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Romance Fraud</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Online dating scams continue to affect thousands of people every year.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            If you believe someone has entered into a relationship with the intention of obtaining money through deception, our investigators can discreetly establish the true identity of the individual, verify their claims and gather evidence where appropriate.
          </p>
        </div>
      </div>

      {/* Blackmail & Sextortion */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Blackmail & Sextortion Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Being subjected to blackmail, online blackmail or sextortion can be extremely distressing.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Our experienced investigators provide confidential support for clients who are being threatened, extorted or coerced into making payments.
          </p>
          <p className="text-gray-900 font-semibold mb-4">We can assist by:</p>
          <div className="space-y-3 mb-6">
            {blackmailAssist.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-base md:text-lg leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Every blackmail investigation is handled with professionalism, discretion and sensitivity.
          </p>
        </div>
      </div>

      {/* Corporate Fraud */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Corporate Fraud Investigations
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We help businesses investigate suspected fraud, financial irregularities and dishonest conduct.
          </p>
          <p className="text-gray-900 font-semibold mb-4">
            Our corporate investigation services include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {corporateServices.map((item) => (
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

      {/* Legal Support */}
      <div className="py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Legal Support & Recovery of Financial Losses
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Where a fraud investigation identifies evidence of financial loss, Lantern Investigations can, where appropriate, introduce clients to experienced solicitors who may be able to advise on recovering stolen funds or pursuing civil claims.
          </p>
          <p className="text-gray-900 font-semibold mb-4">
            Depending on the circumstances of your case, legal options may include:
          </p>
          <div className="grid sm:grid-cols-2 gap-3 mb-6">
            {legalOptions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl px-4 py-3 border border-gray-100"
              >
                <CheckCircle2 className="w-5 h-5 text-[#0047b2] flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            While every case is different and outcomes cannot be guaranteed, working alongside experienced legal professionals means clients can receive advice on the options available once the investigation has concluded.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="py-14 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Speak With a Fraud Investigator
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Contact Lantern Investigations today for a free, confidential consultation about your fraud investigation enquiry.
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

export default FraudInvestigation;
