import React from 'react';
import { ChevronRight, Rocket } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Hero: React.FC = () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: 3,
      spacing: 24,
    },
    breakpoints: {
      "(max-width: 768px)": {
        slides: {
          perView: 1,
          spacing: 16,
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
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 relative overflow-hidden bg-space-800">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="mb-6 font-bold">
            <span className="block mb-2">Your website should get you leads, not just sit there</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-space-200 mb-8 max-w-3xl mx-auto">
           We craft high-converting websites and automations to turn visitors into customers, so your site works as hard as you do.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4 w-full sm:w-auto">
              <span className="flex items-center justify-center gap-2">
                Get A Free Strategy Session <ChevronRight size={18} />
              </span>
            </a>
            <a href="#process" className="btn btn-secondary w-full sm:w-auto">
              See How We Work
            </a>
          </div>
        </div>
        
        <div className="mt-16">
          <div ref={sliderRef} className="keen-slider">
            {showcaseImages.map((image, index) => (
              <div key={index} className="keen-slider__slide">
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-purple-700/10 border border-space-700">
                  <img 
                    src={image.url} 
                    alt={image.label}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-space-900 to-transparent p-4">
                    <p className="text-center font-medium">{image.label}</p>
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