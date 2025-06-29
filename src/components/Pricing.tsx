import React from 'react';
import { CheckIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

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
        "Quarterly consultations",
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
    <section id="pricing" className="section section-light">
      <div className="container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6">Simple, Transparent Pricing</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Choose the right plan to turn your website into a lead generating machine
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`card relative ${
                plan.popular ? 'border-brand-500/50 shadow-strong ring-1 ring-brand-500/20' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-brand-500 to-brand-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-2xl font-bold mb-3 text-neutral-100">{plan.name}</h3>
                <p className="text-neutral-400 leading-relaxed">{plan.description}</p>
              </div>

              <div className="mb-10">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl font-bold text-neutral-100">${plan.price}</span>
                  <span className="text-neutral-400">setup</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-neutral-100">+${plan.monthly}</span>
                  <span className="text-neutral-400">/month</span>
                </div>
              </div>

              <ul className="space-y-5 mb-10">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-4">
                    <div className="p-1 rounded-full bg-brand-500/20 border border-brand-500/30 flex-shrink-0 mt-0.5">
                      <CheckIcon className="h-4 w-4 text-brand-400" />
                    </div>
                    <span className="text-neutral-300 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`btn w-full flex items-center justify-center gap-3 text-lg py-4 group ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                Get Started 
                <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl glass border border-neutral-800/50">
            <p className="text-neutral-300 mb-6 text-lg leading-relaxed">
              All plans include fast hosting, SSL certificate, unlimited revisions, and support
            </p>
            <p className="text-neutral-400">
              Need custom integrations? <a href="#contact" className="text-brand-400 hover:text-brand-300 transition-colors duration-300 font-medium">Contact us</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;