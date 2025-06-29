import React from 'react';
import { Star, Quote } from 'lucide-react';

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
    <section id="testimonials" className="section bg-space-800">
      <div className="container">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="mb-4">Success Stories</h2>
          <p className="text-xl text-space-200">
            Real results from real clients who upgraded their online presence
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-space-800/80 rounded-xl p-8 border border-space-700 relative hover:border-purple-600 transition-all duration-300"
            >
              <div className="absolute -top-6 -left-6 text-purple-600">
                <Quote size={48} />
              </div>
              
              <img 
                src={testimonial.image} 
                alt={testimonial.name}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
              
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <blockquote className="text-lg mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-space-300">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="card text-center py-10">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">50+</h3>
            <p className="text-space-200">Successful projects delivered</p>
          </div>
          <div className="card text-center py-10">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">108%</h3>
            <p className="text-space-200">Average conversion improvement</p>
          </div>
          <div className="card text-center py-10">
            <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">7-10</h3>
            <p className="text-space-200">Days from start to launch</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;