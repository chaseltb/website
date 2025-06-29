import React from 'react';
import { StarIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/solid';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "I used to get compliments on my website. Now I get leads. Within the first month after launch, I saw a 35% increase in form submissions.",
      name: "Jenna Wilson",
      title: "Funnel Consultant",
      stars: 5,
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      quote: "My old site looked good but didn't convert. Since working with Stellar Sites, my conversion rate jumped from 1.2% to 4.8% — that's money in the bank!",
      name: "Michael Chang",
      title: "Executive Coach",
      stars: 5,
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1600"
    }
  ];
  
  return (
    <section id="testimonials" className="section section-dark">
      <div className="container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6">Success Stories</h2>
          <p className="text-xl text-neutral-400 leading-relaxed">
            Real results from real clients who upgraded their online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card relative group"
            >
              <div className="absolute -top-4 -left-4 p-3 rounded-xl bg-brand-500/20 border border-brand-500/30">
                <ChatBubbleBottomCenterTextIcon className="h-6 w-6 text-brand-400" />
              </div>
              
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-56 object-cover rounded-xl mb-8 border border-neutral-800/50"
              />
              
              <div className="flex mb-6">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-8 italic text-neutral-300 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-semibold text-xl text-neutral-100">{testimonial.name}</p>
                <p className="text-neutral-400">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card text-center py-12">
            <h3 className="text-5xl font-bold mb-4 gradient-text">50+</h3>
            <p className="text-neutral-400 text-lg">Successful projects delivered</p>
          </div>
          <div className="card text-center py-12">
            <h3 className="text-5xl font-bold mb-4 gradient-text">108%</h3>
            <p className="text-neutral-400 text-lg">Average conversion improvement</p>
          </div>
          <div className="card text-center py-12">
            <h3 className="text-5xl font-bold mb-4 gradient-text">7-10</h3>
            <p className="text-neutral-400 text-lg">Days from start to launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;