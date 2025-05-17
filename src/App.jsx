import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home.jsx';
import './index.css';

const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio.jsx'));
const Vision = lazy(() => import('./pages/Vision/Vision.jsx'));
const IGM = lazy(() => import('./pages/IGM/IGM.jsx'));

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/vision" element={<Vision />} />
            <Route path="/igm" element={<IGM />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}