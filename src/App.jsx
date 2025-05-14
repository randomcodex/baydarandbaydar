// Main application component for Baydar & Baydar
// Sets up routing and layout for the website

import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

// Lazy load non-critical components
const Portfolio = lazy(() => import('./pages/Portfolio'));
const Vision = lazy(() => import('./pages/Vision'));
const IGM = lazy(() => import('./pages/IGM'));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Main content area with routing */}
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Route for the home page */}
            <Route path="/" element={<Home />} />
            {/* Route for the vision page */}
            <Route path="/vision" element={<Vision />} />
            {/* Route for the portfolio page */}
            <Route path="/portfolio" element={<Portfolio />} />
            {/* Route for the IGM page */}
            <Route path="/igm" element={<IGM />} />
            {/* Route for the portfolio page */}
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </Suspense>
      </main>

      {/* Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}