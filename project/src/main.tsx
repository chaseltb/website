import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="min-h-screen bg-space-900" />}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>
);