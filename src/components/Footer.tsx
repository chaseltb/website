import React from 'react';
import { Rocket, Envelope, Phone } from 'phosphor-react';
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
    <footer className="bg-neutral-950 border-t border-neutral-800/50 pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 text-2xl font-bold mb-6 group">
              <div className="p-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 group-hover:from-brand-400 group-hover:to-brand-500 transition-all duration-300">
                <Rocket className="h-6 w-6 text-white" weight="bold" />
              </div>
              <span className="gradient-text">
                Etherea<span className="text-neutral-50">Labs</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed text-lg">
              We build high-converting websites for service businesses who want more leads — not just a pretty design.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/chase-thompson-9a9394228/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@etherea-labs" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://x.com/etherealabs" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-neutral-100">Quick Links</h3>
            <ul className="space-y-4">
              <li><button onClick={() => scrollToSection('benefits')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Benefits</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Process</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Pricing</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Results</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">FAQ</button></li>
              <li><Link to="/resources" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-6 text-neutral-100">Case Studies</h3>
            <ul className="space-y-4">
              <li><Link to="/case-studies/homers-hardwood" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Homer's Hardwood Floors</Link></li>
              <li><Link to="/case-studies/saas-conversion" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">SaaS Conversion Boost</Link></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Contact</button></li>
              <li className="flex items-center gap-3 pt-2">
                <Envelope className="h-5 w-5 text-brand-500" weight="bold" />
                <a href="mailto:hello@etherealabs.com" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">
                  hello@etherealabs.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-500" weight="bold" />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800/50 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Etherea Labs. All rights reserved.
          </p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="text-neutral-500 text-sm hover:text-neutral-400 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-neutral-500 text-sm hover:text-neutral-400 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;