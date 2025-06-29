import React from 'react';
import { ChatBubbleLeftRightIcon, PencilSquareIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <ChatBubbleLeftRightIcon className="h-10 w-10 text-brand-500" />,
      title: "Free strategy call",
      description: "We discuss your business, market, and analyze what your business needs to do to turn browsers into customers."
    },
    {
      number: "02",
      icon: <PencilSquareIcon className="h-10 w-10 text-brand-500" />,
      title: "First revision in less than a week",
      description: "We deliver a responsive design in under a week and modify it based on your feedback."
    },
    {
      number: "03",
      icon: <RocketLaunchIcon className="h-10 w-10 text-brand-500" />,
      title: "Launch with confidence",
      description: "Once the site is ready for launch, we handle the technical setup so you can focus on the business side."
    }
  ];

  return (
    <section id="process" className="section section-light relative overflow-hidden">
      <div className="absolute inset-0 gradient-overlay"></div>
      <div className="container relative z-10">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6">Our streamlined 3-step process</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            From concept to launch with a streamlined process focused on results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card relative group"
            >
              <div className="absolute -top-6 -left-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl h-14 w-14 flex items-center justify-center font-bold text-white text-lg shadow-medium">
                {step.number}
              </div>
              <div className="mb-8 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 w-fit group-hover:bg-brand-500/20 transition-colors duration-300">
                {step.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-100">{step.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-lg">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 flex flex-col items-center justify-center text-center">
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Our process is designed to be quick and painless, getting you from concept to a live, converting website in days, not months.
            </p>
          </div>
          <a href="#contact" className="btn btn-primary text-lg px-10 py-4">
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;