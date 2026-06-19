/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrackingSection from './components/TrackingSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  // Handle smooth scroll navigation
  const navigateToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    
    if (sectionId === 'inicio') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // height of the sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Pre-load tracking from URL query parameters (e.g. ?tracking=BASA-MX502)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const trackingCode = params.get('tracking');
    if (trackingCode) {
      // Small timeout to allow the element to render and scroll
      setTimeout(() => {
        navigateToSection('rastreo');
        
        // Find input and simulate event or just load sample in tracking section
        const searchInput = document.getElementById('tracking-search-input') as HTMLInputElement;
        const searchBtn = document.getElementById('tracking-search-btn') as HTMLButtonElement;
        if (searchInput && searchBtn) {
          searchInput.value = trackingCode;
          // Trigger form search
          searchBtn.click();
        }
      }, 600);
    }
  }, []);

  // Scroll spy to highlight active menu section based on scroll position
  useEffect(() => {
    const sections = ['inicio', 'nosotros', 'servicios', 'rastreo', 'contacto'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset of viewport active trigger

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }

      // Special case: top of page is always 'inicio'
      if (window.scrollY < 100) {
        setActiveSection('inicio');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white antialiased">
      {/* Sticky Header Nav */}
      <Header 
        onOpenQuoteModal={() => setIsQuoteOpen(true)}
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero 
          onOpenQuoteModal={() => setIsQuoteOpen(true)}
          onNavigateToTracking={() => navigateToSection('rastreo')}
        />

        {/* About corporate profiles */}
        <AboutSection />

        {/* Services grid */}
        <ServicesSection />

        {/* Cargo Tracking Section */}
        <TrackingSection />

        {/* Client trust testimonials */}
        <Testimonials />

        {/* Contact and HQ map section */}
        <ContactSection />
      </main>

      {/* Footer copyright and actions */}
      <Footer onNavigate={navigateToSection} />

      {/* Interactive cargo quotation wizard */}
      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </div>
  );
}
