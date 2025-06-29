import React from 'react';
import { 
  ChartBarIcon, 
  ClockIcon, 
  PencilIcon, 
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <ChartBarIcon className="h-8 w-8 text-brand-500" />,
      title: "Built to convert",
      description: "Each section builds trust and is intentionally designed to help visitors act."
    },
    {
      icon: <PencilIcon className="h-8 w-8 text-brand-500" />,
      title: "Copy that converts",
      description: "Messaging tailored to your ideal customers that highlights how you help, how it helps, and why it matters."
    },
    {
      icon: <ClockIcon className="h-8 w-8 text-brand-500" />,
      title: "Loads fast, ranks better",
      description: "Sites are optimized for speed and SEO so they perform well and get found."
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-brand-500" />,
      title: "Mobile-first & responsive everywhere",
      description: "Most people visit from their phones. Your site will work beautifully on every device."
    }
  ];

  return (
    <section id="benefits" className="section section-dark">
      <div className="container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6">
            <span className="gradient-text">
              Why our websites deliver results
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group flex flex-col h-full">
              <div className="mb-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 w-fit group-hover:bg-brand-500/20 transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-neutral-100">
                {benefit.title}
              </h3>
              <p className="text-neutral-400 flex-grow leading-relaxed text-lg">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default Benefits;