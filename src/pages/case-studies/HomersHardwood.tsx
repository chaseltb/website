import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChartBar, Users, Clock, Target, Phone, MagnifyingGlass, Star, Wrench } from 'phosphor-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomersHardwood: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Homer's Hardwood Floors | Stellar Sites</title>
        <meta name="description" content="How we helped Homer's Hardwood Floors transform from word-of-mouth only to 24/7 online lead generation after 16+ years in business." />
      </Helmet>

      <Header />

      <main className="pt-32">
        <article className="section section-dark">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-16">
                <h1 className="mb-6">From Word-of-Mouth Only to 24/7 Online Lead Generation</h1>
                <p className="text-xl text-neutral-400 mb-8">
                  How Homer's Hardwood Floors LLC transformed their business after 16+ years with zero online presence
                </p>
                <img 
                  src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Beautiful hardwood flooring installation" 
                  className="rounded-xl shadow-strong border border-neutral-800/50 w-full h-80 object-cover"
                />
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">
                    16+
                  </h3>
                  <p className="text-neutral-400">Years in business with zero online presence</p>
                </div>
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 gradient-text">
                    24/7
                  </h3>
                  <p className="text-neutral-400">Lead generation now working around the clock</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-8 text-neutral-100">The Challenge</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  Homer's Hardwood Floors LLC had built a solid reputation since 2008, but they faced a common problem for local businesses: their online presence didn't match their real-world success.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                  <div className="card">
                    <MagnifyingGlass className="h-8 w-8 text-red-400 mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">Zero Online Presence</h4>
                    <p className="text-neutral-400">Despite 16+ years in business</p>
                  </div>
                  <div className="card">
                    <Phone className="h-8 w-8 text-red-400 mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">Word-of-Mouth Only</h4>
                    <p className="text-neutral-400">Completely dependent on referrals</p>
                  </div>
                  <div className="card">
                    <ChartBar className="h-8 w-8 text-red-400 mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">Inconsistent Revenue</h4>
                    <p className="text-neutral-400">Unpredictable lead flow</p>
                  </div>
                </div>

                <div className="bg-neutral-900/40 p-8 rounded-xl border border-neutral-800/50 my-12">
                  <blockquote className="text-xl italic mb-4 text-neutral-300">
                    "We've relied solely on word of mouth and referrals since 2008, but we know we're missing out on so much business. Several of our customers have asked if they could leave us a Google review because they were so impressed with the work we did. We want more people to know about our business without having to just hope it's a good month."
                  </blockquote>
                  <p className="font-bold text-neutral-100">Homer's Hardwood Floors Owner</p>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-neutral-100">The Solution</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  Rather than creating just another basic website, I developed a comprehensive online presence strategy designed to work around the clock generating qualified leads.
                </p>

                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="card">
                    <Target className="h-8 w-8 text-brand-500 mb-4" weight="bold" />
                    <h3 className="text-xl font-bold mb-4 text-neutral-100">Website Features</h3>
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Conversion-focused homepage</li>
                      <li>• Dedicated service pages for each flooring type</li>
                      <li>• Local service areas optimization</li>
                      <li>• Mobile-responsive design</li>
                      <li>• Fast loading speeds under 2 seconds</li>
                    </ul>
                  </div>
                  <div className="card">
                    <Wrench className="h-8 w-8 text-brand-500 mb-4" weight="bold" />
                    <h3 className="text-xl font-bold mb-4 text-neutral-100">Technical Foundation</h3>
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Domain setup with Google Search Console</li>
                      <li>• SEO optimization for local searches</li>
                      <li>• Strategic call-to-action placement</li>
                      <li>• Google My Business profile setup</li>
                      <li>• Review collection system</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-neutral-100">The Approach</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  I started by understanding their business through a detailed conversation about their services, values, and current customer acquisition methods. This helped ensure the website would authentically represent their brand and speak directly to their ideal customers.
                </p>

                <div className="bg-gradient-to-r from-brand-500/10 to-accent-500/10 p-8 rounded-xl border border-brand-500/20 my-12">
                  <h3 className="text-xl font-bold mb-6 text-neutral-100">The focus was on creating an online presence that would:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Capture leads when owner wasn't available</li>
                      <li>• Provide instant answers to common questions</li>
                      <li>• Showcase work and expertise to build trust</li>
                    </ul>
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Make it easy for customers to leave reviews</li>
                      <li>• Improve visibility in local search results</li>
                      <li>• Work as a 24/7 sales representative</li>
                    </ul>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-neutral-100">Key Results & Impact</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  The new website transformed how Homer's Hardwood Floors connects with potential customers:
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
                  <div className="card text-center">
                    <Clock className="h-12 w-12 text-brand-500 mx-auto mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">24/7 Lead Generation</h4>
                    <p className="text-neutral-400">No more dependence on referral timing</p>
                  </div>
                  <div className="card text-center">
                    <Phone className="h-12 w-12 text-brand-500 mx-auto mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">Reduced Phone Time</h4>
                    <p className="text-neutral-400">Common questions answered on site</p>
                  </div>
                  <div className="card text-center">
                    <Star className="h-12 w-12 text-brand-500 mx-auto mb-4" weight="bold" />
                    <h4 className="text-lg font-semibold mb-2 text-neutral-100">Professional Credibility</h4>
                    <p className="text-neutral-400">Competing for larger projects</p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-neutral-100">Lessons Learned</h2>
                
                <div className="grid md:grid-cols-2 gap-8 my-12">
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4 text-neutral-100">For Local Businesses:</h3>
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Speed matters more than fancy features</li>
                      <li>• Mobile optimization isn't optional</li>
                      <li>• Local SEO drives qualified traffic</li>
                      <li>• Clear messaging beats clever copy</li>
                    </ul>
                  </div>
                  <div className="card">
                    <h3 className="text-xl font-bold mb-4 text-neutral-100">For Business Owners:</h3>
                    <p className="text-neutral-300 leading-relaxed">
                      A website should work like your best salesperson: available 24/7, answering common questions, building trust, and guiding visitors toward becoming customers.
                    </p>
                  </div>
                </div>

                <div className="bg-neutral-900/40 p-8 rounded-xl border border-neutral-800/50 my-12">
                  <h2 className="text-2xl font-bold mb-6 text-neutral-100">Is Your Business Ready for This Kind of Growth?</h2>
                  <p className="text-lg text-neutral-300 leading-relaxed mb-6">
                    If you're a business owner who relates to Homer's story, you're not alone. Many successful local businesses have built great reputations through quality work and word-of-mouth, but they're missing out on the customers who are actively searching online.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4 text-neutral-100">You might be ready for a website that generates leads if:</h3>
                  <ul className="space-y-3 text-neutral-300 mb-8">
                    <li>• You're turning away business because you're too busy to answer all the calls</li>
                    <li>• Customers have asked where they can leave you reviews online</li>
                    <li>• You've noticed competitors showing up in Google searches while you don't</li>
                    <li>• You want more predictable lead flow instead of hoping for a good referral month</li>
                    <li>• You're spending too much time answering the same questions over the phone</li>
                  </ul>
                </div>

                <h2 className="text-3xl font-bold mb-8 text-neutral-100">What Makes a Website Actually Work for Your Business?</h2>
                <p className="text-lg text-neutral-300 leading-relaxed mb-8">
                  Not all websites are created equal. The difference between a website that sits there looking pretty and one that brings in customers comes down to understanding your specific business needs and customer behavior.
                </p>

                <div className="card mb-12">
                  <h3 className="text-xl font-bold mb-6 text-neutral-100">A lead-generating website should:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Load fast enough that mobile users don't bounce</li>
                      <li>• Answer your most common customer questions automatically</li>
                      <li>• Show up when local customers search for your services</li>
                    </ul>
                    <ul className="space-y-3 text-neutral-300">
                      <li>• Make it easy for visitors to contact you or request quotes</li>
                      <li>• Build trust through professional presentation of your work</li>
                      <li>• Work as your 24/7 sales representative</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-16 text-center">
                <div className="card max-w-3xl mx-auto">
                  <h2 className="text-2xl font-bold mb-6 text-neutral-100">Ready to Stop Missing Out on Online Customers?</h2>
                  <p className="text-lg text-neutral-300 mb-8 leading-relaxed">
                    If you're tired of wondering how many potential customers can't find you online, let's talk about creating a website that works as hard as you do.
                  </p>
                  <p className="text-neutral-400 mb-8">
                    I specialize in helping established local businesses like Homer's Hardwood Floors build online presences that generate consistent leads. Every project starts with understanding your business, your customers, and what success looks like for you.
                  </p>
                  <a href="#contact" className="btn btn-primary text-lg px-10 py-4">
                    Book Your Free Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default HomersHardwood;