import React from 'react';
import { 
  BarChart2, 
  Clock, 
  Edit3, 
  Smartphone, 
  CheckCircle2 
} from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <BarChart2 className="h-8 w-8 text-purple-600" />,
      title: "Built to convert",
      description: "Each section builds trust and is intentionally designed to help visitors act."
    },
    {
      icon: <Edit3 className="h-8 w-8 text-purple-600" />,
      title: "Copy that converts",
      description: "Messaging tailored to your ideal customers that highlights how you help, how it helps, and why it matters."
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: "Loads fast, ranks better",
      description: "Sites are optimized for speed and SEO so they perform well and get found."
    },
    {
      icon: <Smartphone className="h-8 w-8 text-purple-600" />,
      title: "Mobile-first & responsive everywhere",
      description: "Most people visit from their phones. Your site will work beautifully on every device."
    }
  ];

  return (
    <section id="benefits" className="section bg-space-800">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
              Why our websites deliver results
            </span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card group flex flex-col h-full">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                {/* <CheckCircle2 className="h-5 w-5 text-purple-600" /> */}
                {benefit.title}
              </h3>
              <p className="text-space-200 flex-grow">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div> 
    </section>
  );
};

export default Benefits;