import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText, BookOpen, CaretRight } from 'phosphor-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ROICalculator from '../components/ROICalculator';

const Resources: React.FC = () => {
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
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">See Your Potential ROI</h2>
              <p className="text-lg text-neutral-400 leading-relaxed">
                Calculate how much additional revenue you could generate with our done-for-you web design, development, SEO, and copywriting services
              </p>
            </div>

            <ROICalculator />
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