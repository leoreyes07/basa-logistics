import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import QuoteModal from './QuoteModal';

export default function Layout() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white antialiased">
      <Header onOpenQuoteModal={() => setIsQuoteOpen(true)} />
      
      <main className="flex-1">
        <Outlet context={{ onOpenQuoteModal: () => setIsQuoteOpen(true) }} />
      </main>

      <Footer />

      <QuoteModal 
        isOpen={isQuoteOpen} 
        onClose={() => setIsQuoteOpen(false)} 
      />
    </div>
  );
}
