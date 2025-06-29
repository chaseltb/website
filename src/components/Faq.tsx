import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-neutral-800/50 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between focus:outline-none group"
        onClick={toggleOpen}
      >
        <h3 className="text-left text-lg font-semibold text-neutral-100 group-hover:text-brand-400 transition-colors duration-300">{question}</h3>
        <div className="p-2 rounded-lg bg-neutral-800/50 group-hover:bg-brand-500/20 transition-colors duration-300">
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-brand-400" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-brand-400" />
          )}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-neutral-400 leading-relaxed text-lg">{answer}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqs = [
    {
      question: "What platforms do you build on?",
      answer: "For small projects, we build your site in Vite.js or Next.js. For larger or more hands on projects, we use Webflow or Framer for speed and to make it easier for you to edit. We'll recommend what's best for you based on your specific needs and requirements."
    },
    {
      question: "What if I already have a website?",
      answer: "We can revamp it, migrate it, or build you something better from scratch. We'll analyze your current site and recommend the best approach for your goals."
    },
    {
      question: "How long does it take?",
      answer: "We will have a rough draft sent to you within 7 days. Most projects are done in less than two weeks after our strategy call. We work efficiently without compromising on quality or conversion optimization. We also have an ASAP option, if you need a new website yesterday."
    },
    {
      question: "Do you offer ongoing maintenance?",
      answer: "Yes, we will maintain your website as technology changes. If your plan includes it, we will improve the SEO and performance regularly."
    },
    {
      question: "How much does a website cost?",
      answer: "Our websites range from $619-$3k, with the exact price depending on your specific needs, features, and complexity. We'll provide a detailed quote after our initial consultation."
    },
    {
      question: "Will my website be optimized for SEO?",
      answer: "Absolutely. All our websites are built with SEO best practices in mind, including proper structure & tags, fast loading times, optimized images, and clean code."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  return (
    <section id="faq" className="section section-dark">
      <div className="container">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="mb-6">Frequently Asked Questions</h2>
        </div>
        
        <div className="max-w-4xl mx-auto card">
          {faqs.map((faq, index) => (
            <FaqItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => toggleFaq(index)}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-neutral-400 mb-6 text-lg">
            Have a question that's not answered here?
          </p>
          <a href="#contact" className="btn btn-secondary text-lg px-8 py-4">
            Ask Us Directly
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;