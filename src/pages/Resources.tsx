import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText, BookOpen, Calculator, CaretRight } from 'phosphor-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resources: React.FC = () => {
  const [monthlyVisitors, setMonthlyVisitors] = useState<number>(1000);
  const [currentConversion, setCurrentConversion] = useState<number>(2);
  const [averageValue, setAverageValue] = useState<number>(500);
  const [targetConversion, setTargetConversion] = useState<number>(5);

  const currentLeads = Math.round((monthlyVisitors * currentConversion) / 100);
  const currentRevenue = currentLeads * averageValue;
  const targetLeads = Math.round((monthlyVisitors * targetConversion) / 100);
  const targetRevenue = targetLeads * averageValue;
  const monthlyIncrease = targetRevenue - currentRevenue;
  const yearlyIncrease = monthlyIncrease * 12;

  const resources = [
    {
      title: "Website Conversion Template",
      description: "A comprehensive template for building high-converting service business websites. Includes section-by-section guidance and copy examples.",
      icon: <FileText className="h-8 w-8 text-purple-600" weight="bold" />,
      downloadUrl: "/templates/website-conversion-template.pdf",
      type: "PDF Template"
    },
    {
      title: "Conversion Optimization Guide",
      description: "Learn the exact strategies we use to optimize websites for maximum conversions.",
      icon: <BookOpen className="h-8 w-8 text-purple-600" weight="bold" />,
      downloadUrl: "/guides/conversion-optimization.pdf",
      type: "PDF Guide"
    },
    {
      title: "Website Audit Checklist",
      description: "A comprehensive checklist to evaluate your current website's conversion potential.",
      icon: <FileText className="h-8 w-8 text-purple-600" weight="bold" />,
      downloadUrl: "/checklists/website-audit.pdf",
      type: "PDF Checklist"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources | Etherea Labs</title>
        <meta name="description" content="Download free resources to help improve your website's conversion rate." />
      </Helmet>

      <Header />

      <main className="pt-32">
        {/* Free Resources Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="mb-6">Free Resources</h1>
              <p className="text-xl text-neutral-400">
                Download our proven templates and guides to help improve your website's conversion rate
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="card">
                  <div className="mb-6">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-neutral-400 mb-6">{resource.description}</p>
                  <p className="text-neutral-500 mb-4">{resource.type}</p>
                  <a 
                    href={resource.downloadUrl}
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                    download
                  >
                    <Download className="h-5 w-5" weight="bold" />
                    Download Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="section section-light">
          <div className="container">
            <div className="text-center mb-16 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-brand-500/10 border border-brand-500/20">
                  <Calculator className="h-8 w-8 text-brand-400" weight="bold" />
                </div>
                <h2 className="text-4xl font-bold">Website ROI Calculator</h2>
              </div>
              <p className="text-xl text-neutral-400 leading-relaxed">
                See how much additional revenue you could generate by improving your website's conversion rate
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Calculator Inputs */}
                <div className="card">
                  <h3 className="text-2xl font-bold mb-8 text-neutral-100">Enter Your Current Numbers</h3>
                  
                  <div className="space-y-8">
                    <div>
                      <label htmlFor="visitors" className="block text-sm font-semibold text-neutral-300 mb-3">
                        Monthly Website Visitors
                      </label>
                      <input
                        type="number"
                        id="visitors"
                        value={monthlyVisitors}
                        onChange={(e) => setMonthlyVisitors(Number(e.target.value))}
                        className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                        placeholder="1000"
                      />
                    </div>

                    <div>
                      <label htmlFor="conversion" className="block text-sm font-semibold text-neutral-300 mb-3">
                        Current Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        id="conversion"
                        value={currentConversion}
                        onChange={(e) => setCurrentConversion(Number(e.target.value))}
                        step="0.1"
                        className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                        placeholder="2.0"
                      />
                    </div>

                    <div>
                      <label htmlFor="value" className="block text-sm font-semibold text-neutral-300 mb-3">
                        Average Customer Value ($)
                      </label>
                      <input
                        type="number"
                        id="value"
                        value={averageValue}
                        onChange={(e) => setAverageValue(Number(e.target.value))}
                        className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                        placeholder="500"
                      />
                    </div>

                    <div>
                      <label htmlFor="target" className="block text-sm font-semibold text-neutral-300 mb-3">
                        Target Conversion Rate (%)
                      </label>
                      <input
                        type="number"
                        id="target"
                        value={targetConversion}
                        onChange={(e) => setTargetConversion(Number(e.target.value))}
                        step="0.1"
                        className="w-full px-6 py-4 bg-neutral-900/50 border border-neutral-700/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-neutral-100 placeholder-neutral-500 backdrop-blur-sm transition-all duration-300"
                        placeholder="5.0"
                      />
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="space-y-6">
                  <div className="card">
                    <h3 className="text-xl font-bold mb-6 text-neutral-100">Current Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Monthly Leads:</span>
                        <span className="text-2xl font-bold text-neutral-100">{currentLeads}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Monthly Revenue:</span>
                        <span className="text-2xl font-bold text-neutral-100">${currentRevenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="card border-brand-500/30 bg-gradient-to-br from-brand-500/5 to-accent-500/5">
                    <h3 className="text-xl font-bold mb-6 text-neutral-100">Projected Performance</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Monthly Leads:</span>
                        <span className="text-2xl font-bold gradient-text">{targetLeads}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Monthly Revenue:</span>
                        <span className="text-2xl font-bold gradient-text">${targetRevenue.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="card bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
                    <h3 className="text-xl font-bold mb-6 text-neutral-100">Revenue Increase</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Additional Monthly:</span>
                        <span className="text-3xl font-bold text-green-400">+${monthlyIncrease.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-neutral-400">Additional Yearly:</span>
                        <span className="text-3xl font-bold text-green-400">+${yearlyIncrease.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-neutral-900/40 p-6 rounded-xl border border-neutral-800/50">
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      * Results are projections based on your inputs. Actual results may vary depending on various factors including traffic quality, market conditions, and implementation effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark">
          <div className="container">
            <div className="max-w-4xl mx-auto card relative overflow-hidden">
              <div className="absolute inset-0 gradient-overlay opacity-50"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-neutral-100">
                  Ready to Turn These Numbers Into Reality?
                </h2>
                <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
                  The calculator shows the potential, but achieving these results requires the right strategy, design, and implementation. Let's discuss how we can help you reach your conversion goals.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a href="#contact" className="btn btn-primary text-lg px-10 py-4 w-full sm:w-auto group">
                    <span className="flex items-center justify-center gap-3">
                      Book Your Free Strategy Call 
                      <CaretRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" weight="bold" />
                    </span>
                  </a>
                  <a href="/" className="btn btn-secondary text-lg px-10 py-4 w-full sm:w-auto">
                    Learn About Our Process
                  </a>
                </div>
                
                <p className="text-neutral-500 text-sm mt-8">
                  No obligation. We'll analyze your current site and discuss realistic improvement opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resources;