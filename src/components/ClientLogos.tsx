import React from 'react';
import { ExclamationTriangleIcon, TrendingDownIcon, ClockIcon, CurrencyDollarIcon, UserMinusIcon, TargetIcon } from '@heroicons/react/24/outline';

const ClientLogos: React.FC = () => {
  const painPoints = [
    {
      icon: <TrendingDownIcon className="h-7 w-7 text-red-400" />,
      title: 'Visitors Leave Without Acting',
      description: 'Your website gets traffic but you have low conversion rates, so visitors leave without taking action.'
    },
    {
      icon: <CurrencyDollarIcon className="h-7 w-7 text-red-400" />,
      title: 'Lost Revenue',
      description: 'In 2025, customers expect fast, professional service. If your website doesn\'t meet these expectations, you\'re leaving money on the table.'
    },
    {
      icon: <TargetIcon className="h-7 w-7 text-red-400" />,
      title: 'Unclear Messaging',
      description: 'Your message isn\'t resonating with your ideal clients, causing confusion and missed opportunities.'
    }
  ];

  return (
    <section className="section-light py-20 border-y border-neutral-800/30">
      <div className="container">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="p-3 rounded-2xl bg-red-500/10 border border-red-500/20">
              <ExclamationTriangleIcon className="h-8 w-8 text-red-400" />
            </div>
            <h2 className="text-4xl font-bold">Is your website turning away customers?</h2>
          </div>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Our fast, high-converting sites and smart automations turn browsers into buyers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="card group hover:border-red-500/30 transition-all duration-500"
            >
              <div className="mb-6 p-3 rounded-xl bg-red-500/5 border border-red-500/10 w-fit group-hover:bg-red-500/10 transition-colors duration-300">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-neutral-100">{point.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass border border-neutral-800/50">
            <p className="text-neutral-300 text-lg leading-relaxed">
              Websites usually need a redesign every 2-3 years because of changing technologies and customer expectations. 
              A poorly optimized site actively hurts your business by turning away potential clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;