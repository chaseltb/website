import React from 'react';
import { Helmet } from 'react-helmet-async';
import { TrendingUp, Users, Lightning, Target } from 'phosphor-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const SaasConversion: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Case Study: SaaS Conversion Boost | Stellar Sites</title>
        <meta name="description" content="How we helped a SaaS company increase trial signups by 156% through strategic website optimization." />
      </Helmet>

      <Header />

      <main className="pt-32">
        <article className="section bg-space-800">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <header className="text-center mb-16">
                <h1 className="mb-6">How We Boosted a SaaS Company's Trial Signups by 156%</h1>
                <p className="text-xl text-space-200 mb-8">
                  A data-driven approach to increasing conversion rates and reducing customer acquisition costs
                </p>
                <img 
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                  alt="SaaS dashboard on laptop" 
                  className="rounded-xl shadow-lg border border-space-700"
                />
              </header>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    156%
                  </h3>
                  <p className="text-space-200">Increase in trial signups</p>
                </div>
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    -42%
                  </h3>
                  <p className="text-space-200">Lower acquisition cost</p>
                </div>
                <div className="card text-center">
                  <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
                    89%
                  </h3>
                  <p className="text-space-200">Higher trial-to-paid</p>
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h2>The Challenge</h2>
                <p>
                  The SaaS company had a solid product but struggled to convert website visitors into trial users. Their previous website focused too heavily on features rather than benefits, and the signup process was causing friction.
                </p>

                <h2>Our Approach</h2>
                <div className="grid md:grid-cols-2 gap-8 my-8">
                  <div className="card">
                    <Users className="h-8 w-8 text-purple-600 mb-4" weight="bold" />
                    <h3 className="text-xl font-bold mb-2">User-Centric Design</h3>
                    <p className="text-space-200">Simplified the trial signup process and highlighted key benefits</p>
                  </div>
                  <div className="card">
                    <Lightning className="h-8 w-8 text-purple-600 mb-4" weight="bold" />
                    <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                    <p className="text-space-200">Improved page load times and mobile responsiveness</p>
                  </div>
                </div>

                <h2>The Results</h2>
                <p>
                  The new website delivered impressive results within the first quarter:
                </p>
                <ul>
                  <li>Trial signups increased by 156%</li>
                  <li>Customer acquisition costs decreased by 42%</li>
                  <li>Trial-to-paid conversion rate improved by 89%</li>
                  <li>Average time to first value reduced by 60%</li>
                </ul>

                <div className="bg-space-900 p-8 rounded-xl border border-space-700 my-8">
                  <blockquote className="text-xl italic mb-4">
                    "The new website has transformed our business. We're not just getting more trials — we're getting better-qualified users who are more likely to convert to paid plans."
                  </blockquote>
                  <p className="font-bold">Sarah Chen</p>
                  <p className="text-space-300">Head of Growth</p>
                </div>
              </div>

              <div className="mt-16 text-center">
                <p className="text-xl text-space-200 mb-8">
                  Want to see similar results for your SaaS company?
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

export default SaasConversion;