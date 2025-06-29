import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Hero: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 32,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 20,
        },
      },
      "(max-width: 1024px)": {
        slides: {
          perView: 2,
          spacing: 24,
        },
      },
    },
  });

  const showcaseImages = [
    {
      url: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg",
      label: "Agency Website"
    },
    {
      url: "https://images.pexels.com/photos/8962339/pexels-photo-8962339.jpeg",
      label: "SaaS Platform"
    },
    {
      url: "https://images.pexels.com/photos/8867482/pexels-photo-8867482.jpeg",
      label: "Coach Website"
    },
    {
      url: "https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg",
      label: "Consultant Site"
    }
  ];

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden section-dark">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 opacity-50"></div>
      
      <div className="container relative z-10">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <div className="animate-fade-in">
            <h1 className="mb-8 font-bold">
              <span className="block mb-3">Your website should get you leads,</span>
              <span className="gradient-text">not just sit there</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              We craft high-converting websites and automations to turn visitors into customers, 
              so your site works as hard as you do.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="#contact" className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto group">
                <span className="flex items-center justify-center gap-3">
                  Get A Free Strategy Session 
                  <ChevronRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              <a href="#process" className="btn btn-secondary text-lg px-10 py-4 w-full sm:w-auto">
                See How We Work
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 animate-slide-up">
          <div ref={sliderRef} className="keen-slider">
            {showcaseImages.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="relative rounded-2xl overflow-hidden shadow-strong border border-neutral-800/50 group">
                  <img 
                    src={image.url} 
                    alt={image.label}
                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-center font-semibold text-lg text-neutral-50">{image.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;