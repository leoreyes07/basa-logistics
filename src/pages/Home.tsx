import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Testimonials from '../components/Testimonials';

export default function Home() {
  const { onOpenQuoteModal } = useOutletContext<{ onOpenQuoteModal: () => void }>();
  const navigate = useNavigate();

  return (
    <>
      <Hero 
        onOpenQuoteModal={onOpenQuoteModal} 
        onNavigateToTracking={() => navigate('/rastreo')} 
      />
      <Testimonials />
    </>
  );
}
