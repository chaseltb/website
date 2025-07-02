import React, { useState, useEffect } from 'react';
import { Rocket, List, X } from 'phosphor-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-neutral-950/80 backdrop-blur-xl py-4 shadow-strong border-b border-neutral-800/50' 
        : 'bg-transparent py-6'
    }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 text-2xl font-bold group">
          <div className="p-2 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 group-hover:from-brand-400 group-hover:to-brand-500 transition-all duration-300">
            <Rocket className="h-6 w-6 text-white" weight="bold" />
          </div>
          <span className="gradient-text">
            Stellar<span className="text-neutral-50">Sites</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-neutral-300 hover:text-neutral-50 transition-colors duration-300 font-medium"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-neutral-300 hover:text-neutral-50 transition-colors duration-300 font-medium"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-neutral-300 hover:text-neutral-50 transition-colors duration-300 font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-neutral-300 hover:text-neutral-50 transition-colors duration-300 font-medium"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-neutral-300 hover:text-neutral-50 transition-colors duration-300 font-medium"
            >
              FAQ
            </button>
          </nav>
          
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary">
            Book a Call
          </button>
        </div>
        
        <button
          className="md:hidden p-2 text-neutral-300 hover:text-neutral-50 transition-colors duration-300"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" weight="bold" />
          ) : (
            <List className="h-6 w-6" weight="bold" />
          )}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-neutral-800/50 py-6 animate-fade-in">
          <div className="container flex flex-col gap-6">
            <button 
              onClick={() => scrollToSection('benefits')} 
              className="text-neutral-300 hover:text-neutral-50 py-2 text-left transition-colors duration-300"
            >
              Benefits
            </button>
            <button 
              onClick={() => scrollToSection('process')} 
              className="text-neutral-300 hover:text-neutral-50 py-2 text-left transition-colors duration-300"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-neutral-300 hover:text-neutral-50 py-2 text-left transition-colors duration-300"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')} 
              className="text-neutral-300 hover:text-neutral-50 py-2 text-left transition-colors duration-300"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('faq')} 
              className="text-neutral-300 hover:text-neutral-50 py-2 text-left transition-colors duration-300"
            >
              FAQ
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary w-full">
              Book a Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;