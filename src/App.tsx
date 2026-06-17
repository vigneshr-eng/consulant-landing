import React, { useEffect } from 'react';
import { BrowserRouter, HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import ExploreConsultants from './pages/ExploreConsultants';
import Contact from './pages/Contact';
import Login from './pages/Login';
import BecomeExpert from './pages/BecomeExpert';

// Scroll to top helper to improve SPA routing transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    // HashRouter is preferred in sandbox frame preview hosts to prevent raw 404s on subpath refreshes
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-800 bg-white antialiased selection:bg-indigo-600 selection:text-white">
        
        {/* Core Global Header Integration */}
        <Header />
        
        {/* Router Viewport Stage Container */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/consultants" element={<ExploreConsultants />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/become-expert" element={<BecomeExpert />} />
            {/* Fallback route redirection */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Core Global Footer Integration */}
        <Footer />

      </div>
    </HashRouter>
  );
}
