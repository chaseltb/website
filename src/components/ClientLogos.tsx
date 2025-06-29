import React from 'react';
import { AlertTriangle, TrendingDown, Clock, DollarSign, UserX, Target } from 'lucide-react';

const ClientLogos: React.FC = () => {
  const painPoints = [
    {
      icon: <TrendingDown size={24} className="text-red-500" />,
      title: 'Visitors Leave Without Acting',
      description: 'Your website gets traffic but you have low conversion rates, so visitors leave without taking action.'
    },
    {
      icon: <DollarSign size={24} className="text-red-500" />,
      title: 'Lost Revenue',
      description: 'In 2025, customers expect fast, professional service. If your website doesn\'t meet these expectations, you\'re leaving money on the table.'
    },
    {
      icon: <Target size={24} className="text-red-500" />,
      title: 'Unclear Messaging',
      description: 'Your message isn\'t resonating with your ideal clients'
    }
  ];

  return (
    <section className="bg-space-800/50 backdrop-blur-sm py-16 border-y border-space-700">
      <div className="container">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle size={32} className="text-red-500" />
            <h2 className="text-3xl font-bold">Is your website turning away customers?</h2>
          </div>
          <p className="text-xl text-space-200">
            Our fast, high-converting sites and smart automations turn browsers into buyers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex flex-col items-start p-6 rounded-lg bg-space-800/80 border border-space-700 hover:border-red-500/50 transition-all duration-300"
            >
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-space-200">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-space-200 text-lg">
           Websites usually need a redesign every 2-3 years because of changing technologies and customer expectations. A poorly optimized site actively hurts your business by turning away potential clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;