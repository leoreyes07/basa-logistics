import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import TrackingSection from './components/TrackingSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<AboutSection />} />
          <Route path="/servicios" element={<ServicesSection />} />
          <Route path="/rastreo" element={<TrackingSection />} />
          <Route path="/contacto" element={<ContactSection />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
