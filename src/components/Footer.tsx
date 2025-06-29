import React from 'react';
import { RocketLaunchIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
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
                <RocketLaunchIcon className="h-6 w-6 text-white" />
              </div>
              <span className="gradient-text">
                Stellar<span className="text-neutral-50">Sites</span>
              </span>
            </Link>
            <p className="text-neutral-400 mb-8 max-w-md leading-relaxed text-lg">
              We build high-converting websites for service businesses who want more leads — not just a pretty design.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.221.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z"/>
                </svg>
              </a>
              <a href="#" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="p-3 rounded-xl bg-neutral-800/50 hover:bg-brand-500/20 border border-neutral-700/50 hover:border-brand-500/30 transition-all duration-300 group">
                <svg className="h-5 w-5 text-neutral-400 group-hover:text-brand-400 transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
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
              <li><Link to="/case-studies/agency-4x" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Agency 4x Growth</Link></li>
              <li><Link to="/case-studies/saas-conversion" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">SaaS Conversion Boost</Link></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">Contact</button></li>
              <li className="flex items-center gap-3 pt-2">
                <EnvelopeIcon className="h-5 w-5 text-brand-500" />
                <a href="mailto:hello@stellarsites.com" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">
                  hello@stellarsites.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-brand-500" />
                <a href="tel:+15551234567" className="text-neutral-400 hover:text-brand-400 transition-colors duration-300">
                  (555) 123-4567
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800/50 pt-10 mt-10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {currentYear} Stellar Sites. All rights reserved.
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