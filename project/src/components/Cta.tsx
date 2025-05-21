import React from 'react';
import { ChevronRight, Rocket } from 'lucide-react';

const Cta: React.FC = () => {
  return (
    <section id="contact" className="section bg-space-800">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-space-900 rounded-2xl p-8 md:p-12 border border-space-700 shadow-2xl">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-purple-700 p-3 rounded-full shadow-lg">
            <Rocket className="h-6 w-6" />
          </div>
          
          <div className="text-center mb-8 pt-5">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to turn your website into a lead generating machine?
            </h2>
            <p className="text-xl text-space-200 max-w-2xl mx-auto">
              Book your free 30-minute strategy call today and let's discuss how we can help your business grow.
            </p>
          </div>
          
          <form className="max-w-md mx-auto space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-space-300 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-space-900 border border-space-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="John Smith"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-space-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-space-900 border border-space-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="john@example.com"
                required
              />
            </div>
            
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-space-300 mb-1">
                Current Website (if any)
              </label>
              <input
                type="url"
                id="website"
                className="w-full px-4 py-3 bg-space-900 border border-space-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-space-300 mb-1">
                What are your main goals?
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 bg-space-900 border border-space-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
                placeholder="I need a website that helps me book more client calls..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full btn btn-primary py-4 text-lg flex items-center justify-center gap-2"
            >
              Book Your Free Strategy Call <ChevronRight size={18} />
            </button>
          </form>
          
          <p className="text-space-400 text-sm text-center mt-6">
            No obligation. We'll respond within 24 hours to schedule your call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cta;