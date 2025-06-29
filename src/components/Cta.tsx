import React from 'react';
import { ChevronRightIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

const Cta: React.FC = () => {
  return (
    <section id="contact" className="section section-light">
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto card relative overflow-hidden">
          <div className="absolute inset-0 gradient-overlay opacity-50"></div>
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-4 rounded-2xl bg-gradient-to-br from-brand-500 to-brand-600 shadow-strong">
            <RocketLaunchIcon className="h-8 w-8 text-white" />
          </div>
          
          <div className="relative z-10 text-center mb-12 pt-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-100">
              Ready to turn your website into a lead generating machine?
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Book your free 30-minute strategy call today and let's discuss how we can help your business grow.
            </p>
          </div>
          
          <form className="max-w-lg mx-auto space-y-8 relative z-10">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-neutral-300 mb-3">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                placeholder="John Smith"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-neutral-300 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="website" className="block text-sm font-semibold text-neutral-300 mb-3">
                Current Website (if any)
              </label>
              <input
                type="url"
                id="website"
                className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-neutral-300 mb-3">
                What are your main goals?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 resize-none"
                placeholder="I need a website that helps me book more client calls..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary py-5 text-lg flex items-center justify-center gap-3 group"
            >
              Book Your Free Strategy Call 
              <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </form>
          
          <p className="text-neutral-500 text-sm text-center mt-8 relative z-10">
            No obligation. We'll respond within 24 hours to schedule your call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;