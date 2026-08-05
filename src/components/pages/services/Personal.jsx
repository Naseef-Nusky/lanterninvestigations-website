import React from "react";
import { Link } from "react-router-dom";
import SEO from '../../SEO';

const PersonalInvestigation = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Personal Investigation Services",
    "description": "Confidential personal investigation services for sensitive matters including background checks, infidelity investigations, and family matters. Trusted solutions by Lantern Investigations.",
    "provider": {
      "@type": "Organization",
      "name": "Lantern Investigations",
      "url": "https://hendersonthomasinvestigations.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "51 Lime Street",
        "addressLocality": "London",
        "postalCode": "EC3M 7DQ",
        "addressCountry": "GB"
      },
      "telephone": "07979 359508",
      "email": "info@lanterninvestigations.com"
    },
    "serviceType": "Personal Investigation",
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": {
      "@type": "Offer",
      "name": "Personal Investigation Services",
      "description": "Confidential personal investigation services including background checks, online dating enquiries, infidelity investigations, and family matters",
      "price": "Contact for quote",
      "availability": "InStock"
    }
  };

  return (
    <section className="bg-gray-50 pt-16 md:pt-20">
      <SEO 
        title="Personal Investigation Services - Confidential Solutions | Lantern Investigations"
        description="Confidential personal investigation services for sensitive matters including background checks, infidelity investigations, and family matters. Trusted solutions by Lantern Investigations."
        keywords="personal investigation, private investigation, infidelity investigation, background check personal, family investigation, personal detective London, confidential investigation UK"
        url="/service/personal"
        structuredData={structuredData}
      />
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/personal.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        {/* Hero Text */}
        <div className="relative z-10 px-6">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Personal Investigation Services
          </h1>
          <p className="text-lg md:text-2xl text-[#ffd700] font-semibold">
            100% Confidential & Trusted Solutions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 space-y-10 text-left md:text-justify">
        {/* Intro */}
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            In a world where information holds immense power, private investigators act as the unseen guardians of our most personal secrets and mysteries. These expert professionals venture into the unknown to uncover the truth, resolve uncertainties, and bring clarity to a wide range of personal and individual matters.
          </p>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold">Lantern Investigations</span>, we recognise the importance of the services we provide. Our mission is to deliver exceptional investigative solutions that are precisely tailored to meet your unique needs.
          </p>
        </div>

        {/* Who We Are */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Who Are Lantern Investigations?</h2>
          <p className="text-gray-700 leading-relaxed">
            Lantern Investigations is a leading private detective agency renowned for its exceptional skills and unwavering commitment to our clients. With a team of highly experienced, dedicated, and professional investigators, we conduct global investigations with comprehensive international coverage. Specialising in both private and corporate investigations, we cater to the unique needs of individuals seeking answers, closure, or protection.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What sets Lantern Investigations apart from other agencies is our personalised approach, high professional standards, and meticulous attention to detail in each case. Unlike larger firms where clients may feel like just another number, we take the time to understand the specific circumstances and emotions surrounding every investigation. By building strong relationships with our clients, we offer a compassionate yet determined approach to uncovering the truth.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Additionally, our extensive network of resources, local expertise, and valuable connections distinguishes us from the competition. From forensic specialists to affordable private investigator services, local detectives to legal advisors, we’ve built invaluable partnerships over the years. These alliances give us access to top-tier information and expertise, enhancing our ability to solve even the most sensitive and complex cases with professionalism and integrity.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose Our Private Investigator Services?</h2>
          <p className="text-gray-700 leading-relaxed">
            At Lantern Investigations, we set ourselves apart by offering personalised and confidential solutions that prioritise your specific needs. We understand that every case is unique, and we tailor our approach to uncover the truth in the most efficient way possible. With years of experience in a wide range of investigations, from background checks to covert surveillance, our team of skilled investigators has the expertise to handle any case.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our commitment to excellence goes beyond just solving cases; it includes providing exceptional customer service. We believe in maintaining open communication and transparency throughout the investigation process, so you are always kept informed about the progress and findings. We value the trust you place in us, which is why confidentiality is paramount. You can be assured that all information shared with us will be treated with the utmost discretion, and all our investigators comply fully with the Data Protection Act.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In addition to our expertise and dedication, we utilise advanced technology and specialised tools to ensure our investigations are thorough and successful. With the increasing complexity of methods used by those attempting to hide the truth, we stay ahead of the curve. From state-of-the-art surveillance equipment to cutting-edge forensic analysis techniques, we have the latest resources at our disposal to ensure the best outcomes.
          </p>
          <p className="text-gray-700 leading-relaxed font-semibold">
            Choosing our private investigator services means choosing a team committed not only to uncovering the truth but doing so with efficiency and respect for your privacy. Don’t settle for anything less when it comes to obtaining reliable information—trust us with your most sensitive matters today.
          </p>
        </div>

        {/* Our Process */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800">Our Process</h2>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Initial Consultation</h3>
            <p className="text-gray-700 leading-relaxed">
              A successful investigation always begins with a comprehensive consultation. We take the time to listen and understand your specific situation, goals, and any concerns you may have. This confidential discussion allows us to establish a clear understanding of your needs and expectations, ensuring that we create a bespoke plan of action. By personalising our approach from the very start, we ensure that every step of the investigation is aligned with your objectives, giving you the best chance of achieving the desired outcome.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Investigation Phase</h3>
            <p className="text-gray-700 leading-relaxed">
              Once we’ve established the goals and scope of your case, our dedicated investigators spring into action. Combining time-tested investigative techniques with the latest technological tools, we gather evidence, conduct thorough interviews, and follow every lead with precision. Our team is proficient in a wide range of methods, including surveillance, digital forensics, and adherence to legal protocols, allowing us to approach your case from every angle. We ensure that each step is taken carefully and strategically, providing you with the most comprehensive and accurate results.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Reporting & Documentation</h3>
            <p className="text-gray-700 leading-relaxed">
              Transparency and accountability are at the heart of our approach. Throughout the investigation, we maintain detailed records and document all findings thoroughly. Our reports are not only clear and concise but also prepared to be admissible in legal proceedings, should the need arise. We ensure you are kept informed throughout the process, providing you with updates at every stage, so you always know exactly where your case stands.
            </p>

            <h3 className="text-xl font-semibold text-gray-800">Client Communication</h3>
            <p className="text-gray-700 leading-relaxed">
              We understand that clear communication is crucial for a successful partnership. Our team makes it a priority to keep you informed with regular updates on the status of your case. If you have any questions or concerns, we’re always available to provide answers and offer guidance. Your peace of mind is our focus, and we strive to ensure you feel supported and confident at every step of the investigation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
<Link
  to="/contact"
  className="inline-block px-6 py-3 bg-[#0047b2] text-white rounded-lg shadow-md hover:bg-[#003080] transition-colors font-semibold"
>
  Contact Us Today
</Link>
        </div>
      </div>
    </section>
  );
};

export default PersonalInvestigation;