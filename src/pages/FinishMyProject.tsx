import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CaretRight, CheckCircle, Clock, Rocket, Target, Users } from 'phosphor-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const FinishMyProject: React.FC = () => {
  const benefits = [
    {
      icon: <Rocket className="h-8 w-8 text-brand-500" weight="bold" />,
      title: "Get unstuck and launched fast",
      description: "I pick up where you left off and finish your Vibe project without needing long calls or hand-holding."
    },
    {
      icon: <Target className="h-8 w-8 text-brand-500" weight="bold" />,
      title: "No confusing tech or extra tools",
      description: "You don't need to learn a new platform. I work directly inside your existing project so there's zero setup on your end."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-brand-500" weight="bold" />,
      title: "Built to look good and actually convert",
      description: "I fine-tune layouts, sections, and CTAs so your site isn't just \"done\", it's ready to win clients."
    }
  ];

  const process = [
    {
      number: "01",
      title: "Share your Vibe project link",
      description: "You fill out a simple form and give access. No tech setup needed."
    },
    {
      number: "02", 
      title: "I clean it up and finish it",
      description: "From layout fixes to missing pages and logic, I handle it all so it looks and works great."
    },
    {
      number: "03",
      title: "You launch with confidence", 
      description: "You'll get a polished, finished site — ready to publish, share, and grow your business."
    }
  ];

  const testimonials = [
    {
      quote: "I had a half-built site sitting for a month. He cleaned it up, finished the flow, and it actually brought in two consults the first week.",
      name: "David",
      title: "Marketing Consultant"
    },
    {
      quote: "I love Vibe but I was totally lost with layouts. He made it work and even improved my copy.",
      name: "Amy", 
      title: "Personal Brand Coach"
    },
    {
      quote: "I spent weeks stuck. He finished it in days and it actually looks better than I imagined.",
      name: "Jess",
      title: "Wellness Coach"
    }
  ];

  const faqs = [
    {
      question: "What if I only have a rough start or idea?",
      answer: "No problem. Even if you only have 1-2 pages done, I can finish the structure and build around your goals."
    },
    {
      question: "Do I need to give a full design brief?",
      answer: "Nope. Just a short form and your project link. I'll handle the rest and check in if anything's unclear."
    },
    {
      question: "How long does it take?",
      answer: "Most projects are completed in 3–5 business days."
    },
    {
      question: "Will this work for my niche?",
      answer: "Yes — I've helped founders in coaching, wellness, tech, and creative industries."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Finish My Vibe Project | Etherea Labs</title>
        <meta name="description" content="Stuck on your Vibe website? I help non-technical founders finish their projects fast so you can finally launch and start getting leads." />
        <meta property="og:title" content="Finish My Vibe Project | Etherea Labs" />
        <meta property="og:description" content="Get your half-finished Vibe website completed and launched in 3-5 days." />
        <link rel="canonical" href="https://etherealabs.com/finishmyproject" />
      </Helmet>

      <Header />

      <main className="pt-32">
        {/* Hero Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="mb-8 font-bold">
                <span className="block mb-3">I help non-technical founders finish their vibe-coded projects fast</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                So you can finally launch and start getting leads. Used by busy business owners who hit a wall — and needed a pro to step in and finish the job.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
                <a href="#contact" className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto group">
                  <span className="flex items-center justify-center gap-3">
                    Finish My Site Now
                    <CaretRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
                  </span>
                </a>
                <p className="text-neutral-500 text-sm">No pressure. I'll review your project first and confirm fit before starting.</p>
              </div>

              {/* Industries */}
              <div className="glass p-8 rounded-2xl border border-neutral-800/50">
                <p className="text-neutral-300 mb-6 text-lg font-medium">
                  Trusted by coaches, solopreneurs, creatives, and early-stage startups
                </p>
                <p className="text-neutral-400 text-sm">(Even the "not-techy" ones)</p>
                <div className="flex flex-wrap justify-center gap-8 mt-6 text-neutral-400">
                  <span className="flex items-center gap-2">🧘‍♀️ Coaches</span>
                  <span className="flex items-center gap-2">💼 Consultants</span>
                  <span className="flex items-center gap-2">🎨 Creators</span>
                  <span className="flex items-center gap-2">🧠 Educators</span>
                  <span className="flex items-center gap-2">📈 Agencies</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section section-light">
          <div className="container">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="mb-6">Why founders choose me to finish their Vibe projects</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="card group flex flex-col h-full">
                  <div className="mb-6 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 w-fit group-hover:bg-brand-500/20 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-neutral-100">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 flex-grow leading-relaxed text-lg">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="mb-6">Simple 3-step process</h2>
              <p className="text-xl text-neutral-400 leading-relaxed">
                From stuck to launched in just a few days
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {process.map((step, index) => (
                <div key={index} className="card relative group">
                  <div className="absolute -top-6 -left-6 bg-gradient-to-br from-brand-500 to-brand-600 rounded-2xl h-14 w-14 flex items-center justify-center font-bold text-white text-lg shadow-medium">
                    {step.number}
                  </div>
                  <div className="mb-8 p-4 rounded-xl bg-brand-500/10 border border-brand-500/20 w-fit group-hover:bg-brand-500/20 transition-colors duration-300">
                    <Clock className="h-10 w-10 text-brand-500" weight="bold" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-neutral-100">{step.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="section section-light">
          <div className="container">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="mb-6">What founders say after I finish their projects</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card">
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
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="text-center mb-20 max-w-4xl mx-auto">
              <h2 className="mb-6">Frequently Asked Questions</h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {faqs.map((faq, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-semibold mb-4 text-neutral-100">{faq.question}</h3>
                  <p className="text-neutral-400 leading-relaxed text-lg">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section section-light">
          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto card relative overflow-hidden">
              <div className="absolute inset-0 gradient-overlay opacity-50"></div>
              
              <div className="relative z-10 text-center mb-12 pt-8">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-100">
                  🎯 Let's finish your Vibe site and get it launched
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                  Send your link and project goal — I'll handle the rest.
                </p>
              </div>
              
              <form className="max-w-lg mx-auto space-y-8 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-neutral-300 mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                    placeholder="John Smith"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-neutral-300 mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="vibe-link" className="block text-sm font-semibold text-neutral-300 mb-3">
                    Your Vibe Project Link
                  </label>
                  <input
                    type="url"
                    id="vibe-link"
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                    placeholder="https://your-vibe-project.com"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="project-goal" className="block text-sm font-semibold text-neutral-300 mb-3">
                    What's your main goal for this project?
                  </label>
                  <textarea
                    id="project-goal"
                    rows={4}
                    className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="I want to launch my coaching website and start booking discovery calls..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full btn btn-primary py-5 text-lg flex items-center justify-center gap-3 group"
                >
                  Finish My Site Now
                  <CaretRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
                </button>
              </form>
              
              <p className="text-neutral-500 text-sm text-center mt-8 relative z-10">
                No pressure. I'll review your project first and confirm fit before starting.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default FinishMyProject;