import React from 'react';
import { MessageSquare, ClipboardList, Search, FileCheck } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Confidential Consultation',
      description: 'Discuss your case with an experienced investigator.',
      icon: MessageSquare,
    },
    {
      number: '02',
      title: 'Investigation Strategy',
      description: 'We develop a bespoke investigation plan based on your objectives.',
      icon: ClipboardList,
    },
    {
      number: '03',
      title: 'Evidence Collection',
      description: 'Our investigators gather intelligence using lawful investigative techniques.',
      icon: Search,
    },
    {
      number: '04',
      title: 'Professional Reporting',
      description: 'Receive a comprehensive report containing all relevant findings and supporting evidence.',
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#0f172a] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,71,178,0.25),transparent_50%)]" />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mont tracking-tight">
            Our Investigation Process
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A clear, professional approach from first contact through to final evidence.
          </p>
        </div>

        {/* Desktop timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-10 left-[12%] right-[12%] h-px bg-blue-500/40" />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step) => {
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
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
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
    </section>
  );
};

export default ProcessSection;
