import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Download, FileText, BookOpen, Video } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Resources: React.FC = () => {
  const resources = [
    {
      title: "Website Conversion Template",
      description: "A comprehensive template for building high-converting service business websites. Includes section-by-section guidance and copy examples.",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      downloadUrl: "/templates/website-conversion-template.pdf",
      type: "PDF Template"
    },
    {
      title: "Conversion Optimization Guide",
      description: "Learn the exact strategies we use to optimize websites for maximum conversions.",
      icon: <BookOpen className="h-8 w-8 text-purple-600" />,
      downloadUrl: "/guides/conversion-optimization.pdf",
      type: "PDF Guide"
    },
    {
      title: "Website Audit Checklist",
      description: "A comprehensive checklist to evaluate your current website's conversion potential.",
      icon: <FileText className="h-8 w-8 text-purple-600" />,
      downloadUrl: "/checklists/website-audit.pdf",
      type: "PDF Checklist"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Resources | Stellar Sites</title>
        <meta name="description" content="Download free resources to help improve your website's conversion rate." />
      </Helmet>

      <Header />

      <main className="pt-32">
        <section className="section bg-space-800">
          <div className="container">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="mb-6">Free Resources</h1>
              <p className="text-xl text-space-200">
                Download our proven templates and guides to help improve your website's conversion rate
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <div key={index} className="card">
                  <div className="mb-6">{resource.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{resource.title}</h3>
                  <p className="text-space-200 mb-6">{resource.description}</p>
                  <p className="text-space-400 mb-4">{resource.type}</p>
                  <a 
                    href={resource.downloadUrl}
                    className="btn btn-primary w-full flex items-center justify-center gap-2"
                    download
                  >
                    <Download size={18} />
                    Download Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Resources;