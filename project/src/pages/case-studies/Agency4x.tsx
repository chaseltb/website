import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BarChart2, Users, Clock, Target } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Agency4x: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: Agency 4x Growth | Stellar Sites</title>
        <meta name="description" content="How we helped an agency quadruple their booking rate with strategic website optimization." />
      </Helmet>

      <Header />

      <main className="pt-32">
        <article className="section bg-space-800">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-16">
                <h1 className="mb-6">How We Helped an Agency 4x Their Booking Rate</h1>
                <p className="text-xl text-space-200 mb-8">
                  A complete website redesign that transformed visitor engagement and lead generation
                </p>
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="Agency team collaboration" 
                  className="rounded-xl shadow-lg border border-space-700"
                />
              </header>

              <div className="grid md:grid-cols-2 gap-8 mb-16">
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    400%
                  </h3>
                  <p className="text-space-200">Increase in booking rate</p>
                </div>
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    2.5x
                  </h3>
                  <p className="text-space-200">Increase in average deal size</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2>The Challenge</h2>
                <p>
                  The agency was struggling with a common problem: their website looked great but wasn't converting visitors into leads. Despite having a strong portfolio and impressive client results, their booking rate was stuck at just 1%.
                </p>

                <h2>Our Approach</h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="card">
                    <Target className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Strategic Positioning</h3>
                    <p className="text-space-200">Repositioned their messaging to focus on client outcomes rather than service features</p>
                  </div>
                  <div className="card">
                    <Users className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Social Proof</h3>
                    <p className="text-space-200">Added strategic placement of case studies and testimonials throughout the user journey</p>
                  </div>
                </div>

                <h2>The Results</h2>
                <p>
                  Within 30 days of launching the new site, the agency saw dramatic improvements:
                </p>
                <ul>
                  <li>Booking rate increased from 1% to 4%</li>
                  <li>Average time on site doubled</li>
                  <li>Lead quality improved significantly</li>
                  <li>Sales cycle shortened by 40%</li>
                </ul>

                <div className="bg-space-900 p-8 rounded-xl border border-space-700 my-8">
                  <blockquote className="text-xl italic mb-4">
                    "The new site doesn't just look better — it actually works. We're getting more qualified leads and closing bigger deals."
                  </blockquote>
                  <p className="font-bold">Sam Thornton</p>
                  <p className="text-space-300">Agency Owner</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-xl text-space-200 mb-8">
                  Ready to transform your website into a lead-generating machine?
                </p>
                <a href="#contact" className="btn btn-primary">
                  Book Your Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
};

export default Agency4x;