import React, { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-space-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
          <Rocket className="text-purple-600" size={28} />
          <span className="bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
            Stellar<span className="text-space-50">Sites</span>
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-6">
            <button onClick={() => scrollToSection('benefits')} className="text-space-200 hover:text-purple-500 transition-colors">Benefits</button>
            <button onClick={() => scrollToSection('process')} className="text-space-200 hover:text-purple-500 transition-colors">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="text-space-200 hover:text-purple-500 transition-colors">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-space-200 hover:text-purple-500 transition-colors">Results</button>
            <button onClick={() => scrollToSection('faq')} className="text-space-200 hover:text-purple-500 transition-colors">FAQ</button>
          </nav>
          
          <button onClick={() => scrollToSection('contact')} className="btn btn-primary">Book a Call</button>
        </div>
        
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-space-800 border-t border-space-700 py-4">
          <div className="container flex flex-col gap-4">
            <button onClick={() => scrollToSection('benefits')} className="text-space-200 py-2">Benefits</button>
            <button onClick={() => scrollToSection('process')} className="text-space-200 py-2">Process</button>
            <button onClick={() => scrollToSection('pricing')} className="text-space-200 py-2">Pricing</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-space-200 py-2">Results</button>
            <button onClick={() => scrollToSection('faq')} className="text-space-200 py-2">FAQ</button>
            <button onClick={() => scrollToSection('contact')} className="btn btn-primary w-full text-center">Book a Call</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header