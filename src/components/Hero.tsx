import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Plane, Ship, Truck } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateToTracking: () => void;
}

export default function Hero({ onOpenQuoteModal, onNavigateToTracking }: HeroProps) {
  // Scenic image of Guatemala City skyscrapers with volcano backdrop in high-definition
  const bgUrl = "https://images.unsplash.com/photo-1568556486596-9e8ad965c80b?q=80&w=1600&auto=format&fit=crop";

  return (
    <div id="inicio" className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[820px] flex items-center justify-center overflow-hidden bg-[#040e21]">
      {/* Background Image with optimized parallax-like overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-out scale-105"
        style={{ 
          backgroundImage: `url(${bgUrl})`,
        }}
        id="hero-bg"
      />

      {/* Modern Gradient Overlays for readable text & brand coherence */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#030d22]/95 via-[#040f25]/85 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#06183a] via-transparent to-[#030d22]/40" />

      {/* Floating abstract decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full z-10">
        <div className="max-w-3xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-400/20 px-3.5 py-1.5 rounded-full text-blue-400 font-sans font-semibold text-xs uppercase tracking-wider mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Líderes logísticos en Centroamérica
          </motion.div>

          {/* Title - "Expertos en logística integral desde el corazón de Guatemala" */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-6"
            id="hero-title"
          >
            Expertos en logística integral desde el corazón de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 font-extrabold">
              Guatemala
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            Transporte internacional, gestión aduanal con solidez legal y logística integrada para conectar tu negocio de forma inteligente, segura y sin complicaciones.
          </motion.p>

          {/* Call-to-Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <button
              onClick={onOpenQuoteModal}
              className="cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-sans font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              id="hero-btn-quote"
            >
              Solicitar Cotización
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={onNavigateToTracking}
              className="cursor-pointer bg-slate-800/60 hover:bg-slate-800/90 text-white font-sans font-semibold text-base px-8 py-4 rounded-xl border border-slate-700/50 hover:border-slate-600/80 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
              id="hero-btn-tracking"
            >
              Rastrear mi Carga
            </button>
          </motion.div>
        </div>

        {/* Feature quick showcase grid at the bottom of the hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 md:mt-24 max-w-5xl"
        >
          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
              <Ship size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">Marítimo Global</h3>
              <p className="font-sans text-sm text-slate-400 mt-1">Conexión con puertos principales de América Latina, Asia y Europa.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
              <Plane size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">Aéreo Express</h3>
              <p className="font-sans text-sm text-slate-400 mt-1">Vuelos nacionales e internacionales diarios de alta prioridad.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/40 border border-slate-800/50 backdrop-blur-sm">
            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
              <Truck size={24} />
            </div>
            <div>
              <h3 className="font-display font-bold text-white text-base">Terrestre FTL/LCL</h3>
              <p className="font-sans text-sm text-slate-400 mt-1">Distribución ágil con GPS en toda Centroamérica y México.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
