// Main application component for Baydar & Baydar
// Sets up routing and layout for the website

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vision from './pages/Vision';
import Portfolio from './pages/Portfolio';
import IGM from './pages/IGM';

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation bar at the top of the page */}
      <Navbar />

      {/* Main content area with routing */}
      <main className="flex-grow">
        <Routes>
          {/* Route for the home page */}
          <Route path="/" element={<Home />} />
          {/* Route for the vision page */}
          <Route path="/vision" element={<Vision />} />
          {/* Route for the portfolio page */}
          <Route path="/brands" element={<Portfolio />} />
          {/* Route for the IGM page */}
          <Route path="/igm" element={<IGM />} />
          {/* Route for the portfolio page */}
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </main>

      {/* Footer at the bottom of the page */}
      <Footer />
    </div>
  );
}