import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceSubpage from './pages/ServiceSubpage';
import Doctor from './pages/Doctor';
import Insurance from './pages/Insurance';
import Location from './pages/Location';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Privacy from './pages/Privacy';
import Korean from './pages/Korean';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/primary-care-plano" element={<ServiceSubpage type="primary" />} />
            <Route path="/services/preventive-care-plano" element={<ServiceSubpage type="preventive" />} />
            <Route path="/services/chronic-disease-management-plano" element={<ServiceSubpage type="chronic" />} />
            <Route path="/services/physical-exams-plano" element={<ServiceSubpage type="physical" />} />
            <Route path="/dr-steven-chae-plano" element={<Doctor />} />
            <Route path="/insurance-payments" element={<Insurance />} />
            <Route path="/location-hours" element={<Location />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/korean" element={<Korean />} />
          </Routes>
        </main>
        <Footer />
        <MobileBottomBar />
      </div>
    </Router>
  );
}
