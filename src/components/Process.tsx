import React from 'react';
import { MessageSquare, PenTool, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="h-10 w-10 text-purple-600" />,
      title: "Free strategy call",
      description: "We discuss your business, market, and analyze what your business needs to do to turn browsers into customers."
    },
    {
      number: "02",
      icon: <PenTool className="h-10 w-10 text-purple-600" />,
      title: "First revision in less than a week",
      description: "We deliver a responsive design in under a week and modify it based on your feedback."
    },
    {
      number: "03",
      icon: <Rocket className="h-10 w-10 text-purple-600" />,
      title: "Launch with confidence",
      description: "Once the site is ready for launch, we handle the technical setup so you can focus on the business side."
    }
  ];

  return (
    <section id="process" className="section bg-space-800/50 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-stars bg-cover bg-center opacity-5 z-0"></div>
      <div className="container relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">Our streamlined 3-step process</h2>
          <p className="text-xl text-space-200">
            From concept to launch with a streamlined process focused on results
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="card relative group hover:transform hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute -top-4 -left-4 bg-space-900 border border-space-700 rounded-full h-12 w-12 flex items-center justify-center font-bold text-purple-500">
                {step.number}
              </div>
              <div className="mb-6">{step.icon}</div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-space-200">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <p className="text-space-300 mb-6 max-w-3xl">
            Our process is designed to be quick and painless, getting you from concept to a live, converting website in days, not months.
          </p>
          <a href="#contact" className="btn btn-primary">
            Start the Conversation
          </a>
        </div>
      </div>
    </section>
  );
};

export default Process;