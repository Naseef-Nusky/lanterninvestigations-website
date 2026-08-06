import React from 'react';
import {
  User,
  Scale,
  Gavel,
  Shield,
  Briefcase,
  Building2,
  Crown,
  Landmark,
} from 'lucide-react';

const WhoWeWorkWith = () => {
  const clients = [
    { name: 'Private Clients', icon: User },
    { name: 'Solicitors', icon: Scale },
    { name: 'Barristers', icon: Gavel },
    { name: 'Insurance Companies', icon: Shield },
    { name: 'SMEs', icon: Briefcase },
    { name: 'Corporate Organisations', icon: Building2 },
    { name: 'High-Net-Worth Individuals', icon: Crown },
    { name: 'Financial Institutions', icon: Landmark },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-mont tracking-tight">
            Who We Work With
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We regularly assist:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {clients.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                <Icon className="w-6 h-6 text-[#0047b2]" strokeWidth={1.75} />
              </div>
              <p className="text-sm md:text-base font-semibold text-gray-900">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
