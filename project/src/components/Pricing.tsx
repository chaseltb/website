import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Amethyst",
      description: "Ideal for startups needing a high-converting landing page",
      price: 619,
      monthly: 59,
      features: [
        "High converting landing page",
        "Lead generation form",
        "Prequalify leads and trigger a notification to your team",
        "Basic SEO optimization",
        "Mobile-responsive design",
      ]
    },
    {
      name: "Topaz",
      description: "For businesses with multiple services",
      price: 1019,
      monthly: 95,
      popular: true,
      features: [
        "Everything in Amethyst",
        "Up to 10 service pages optimized for SEO",
        "24/7 AI chat agent",
        "Monthly analytics",
        "Quarterly consulations",
      ]
    },
    {
      name: "Diamond",
      description: "Complete solution for growing service businesses",
      price: 1799,
      monthly: 249,
      features: [
        "Everything in Topaz",
        "Up to 5 service area pages",
        "Payment processing",
        "Calendar booking integration",
        "Quarterly SEO improvements",
        "Monthly consultations",
        "Priority development",
      ]
    }
  ];

  return (
    <section id="pricing" className="section bg-space-800">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-space-200">
            Choose the right plan to turn your website into a lead generating machine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card relative ${
                plan.popular ? 'border-purple-600 shadow-lg shadow-purple-600/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-space-200">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-space-300">setup</span>
                </div>
                <div className="flex items-baseline gap-2 mt-2">
                  <span className="text-2xl font-bold">+${plan.monthly}</span>
                  <span className="text-space-300">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`btn w-full flex items-center justify-center gap-2 ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                Get Started <ChevronRight size={18} />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-space-300 mb-4">
            All plans include fast hosting, SSL certificate, unlimited revisions, and support
          </p>
          <p className="text-space-200">
            Need custom integrations? <a href="#contact" className="text-purple-500 hover:text-purple-400">Contact us</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;