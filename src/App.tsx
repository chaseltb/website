import React, { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Footer from './components/Footer';

// Lazy load non-critical components
const Testimonials = lazy(() => import('./components/Testimonials'));
const Pricing = lazy(() => import('./components/Pricing'));
const Faq = lazy(() => import('./components/Faq'));
const Cta = lazy(() => import('./components/Cta'));
const Resources = lazy(() => import('./pages/Resources'));
const HomersHardwood = lazy(() => import('./pages/case-studies/HomersHardwood'));
const SaasConversion = lazy(() => import('./pages/case-studies/SaasConversion'));

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Etherea Labs | High-Converting Websites For Service Businesses</title>
        <meta name="description" content="We build high-converting websites for service businesses who want more leads — not just a pretty design." />
        <meta property="og:title" content="Etherea Labs | High-Converting Websites" />
        <meta property="og:description" content="Turn visitors into leads with a site built to convert." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Etherea Labs | High-Converting Websites" />
        <meta name="twitter:description" content="Turn visitors into leads with a site built to convert." />
        <link rel="canonical" href="https://etherealabs.com" />
      </Helmet>
      
      <Header />
      
      <main>
        <Hero />
        <ClientLogos />
        <Benefits />
        <Process />
        <Suspense fallback={<div className="section bg-space-800" />}>
          <Testimonials />
          <Pricing />
          <Faq />
          <Cta />
        </Suspense>
      </main>
      
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={
          <Suspense fallback={<div className="min-h-screen bg-space-900" />}>
            <Resources />
          </Suspense>
        } />
        <Route path="/case-studies/homers-hardwood" element={
          <Suspense fallback={<div className="min-h-screen bg-space-900" />}>
            <HomersHardwood />
          </Suspense>
        } />
        <Route path="/case-studies/saas-conversion" element={
          <Suspense fallback={<div className="min-h-screen bg-space-900" />}>
            <SaasConversion />
          </Suspense>
        } />
      </Routes>
    </Router>
  );
}

export default App;