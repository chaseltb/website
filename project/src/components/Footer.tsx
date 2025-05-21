import React from 'react';
import { Rocket, Mail, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <footer className="bg-space-900 border-t border-space-800 pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4">
              <Rocket className="text-purple-600" size={24} />
              <span>
                Stellar<span className="text-purple-500">Sites</span>
              </span>
            </Link>
            <p className="text-space-300 mb-6 max-w-md">
              We build high-converting websites for service businesses who want more leads — not just a pretty design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-space-800 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-space-800 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-space-800 p-2 rounded-full hover:bg-purple-700 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><button onClick={() => scrollToSection('benefits')} className="text-space-300 hover:text-purple-500 transition-colors">Benefits</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-space-300 hover:text-purple-500 transition-colors">Process</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-space-300 hover:text-purple-500 transition-colors">Pricing</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-space-300 hover:text-purple-500 transition-colors">Results</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-space-300 hover:text-purple-500 transition-colors">FAQ</button></li>
              <li><Link to="/resources" className="text-space-300 hover:text-purple-500 transition-colors">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Case Studies</h3>
            <ul className="space-y-3">
              <li><Link to="/case-studies/agency-4x" className="text-space-300 hover:text-purple-500 transition-colors">Agency 4x Growth</Link></li>
              <li><Link to="/case-studies/saas-conversion" className="text-space-300 hover:text-purple-500 transition-colors">SaaS Conversion Boost</Link></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-space-300 hover:text-purple-500 transition-colors">Contact</button></li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-purple-500" />
                <a href="mailto:hello@stellarsites.com" className="text-space-300 hover:text-purple-500 transition-colors">
                  hello@stellarsites.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-purple-500" />
                <a href="tel:+15551234567" className="text-space-300 hover:text-purple-500 transition-colors">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-space-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-space-400 text-sm">
            &copy; {currentYear} Stellar Sites. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-space-400 text-sm hover:text-space-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-space-400 text-sm hover:text-space-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer