import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Award, Shield, History, MapPin, CheckCircle, HelpCircle, X, ChevronRight } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

import officeImg from '@/assets/img/advisor_guatemala_city.webp';

export default function AboutSection() {
  const [showMilestones, setShowMilestones] = useState(false);


  const milestones = [
    { year: '1995', title: 'Fundación Corporativa', desc: 'Iniciamos operaciones ofreciendo soluciones logísticas ágiles y precisas en Guatemala.' },
    { year: '2005', title: 'Distribución Multimodal', desc: 'Ampliamos el servicio de transporte terrestre regional e internacional.' },
    { year: '2015', title: 'Red Global', desc: 'Consolidación de nuestra red global de proveedores y presencia en aduanas.' },
    { year: '2026', title: 'Experiencia Comprobada', desc: 'Celebramos más de 30 años transportando cargas exitosamente a nivel mundial.' }
  ];

  const pillars = [
    { icon: <Shield className="w-5 h-5" />, title: 'Presencia Total', desc: 'Presencia en todas las aduanas de Guatemala y red global de proveedores.' },
    { icon: <History className="w-5 h-5" />, title: 'Experiencia Comprobada', desc: 'Más de 30 años conectando tu carga con el mundo exitosamente.' },
    { icon: <Award className="w-5 h-5" />, title: 'Atención Personalizada', desc: 'Respuesta rápida y asesoría experta sin complicaciones.' }
  ];

  return (
    <section id="nosotros" className="py-20 bg-[#2563eb] text-white overflow-hidden relative">
      {/* Visual decorative circles/vectors behind */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#06183a] rounded-full blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text content matching Image 3 structure */}
          <div className="lg:col-span-7">
            <ScrollReveal animation="fade-right">
              <div className="space-y-6">
                <span className="font-sans font-bold text-blue-200 uppercase tracking-widest text-xs">
                  Nuestra Trayectoria
                </span>
                
                <h2 className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4" id="about-title">
                  Nuestra Historia
                </h2>
                
                <p className="font-sans text-lg sm:text-xl text-blue-50 leading-relaxed font-light">
                  Desde 1995 que inició operaciones la corporación, hemos ofrecido soluciones logísticas ágiles y precisas, las cuales están diseñadas estratégicamente para adaptarse a las necesidades de cada uno de nuestros clientes.
                </p>

                <p className="font-sans text-sm sm:text-base text-blue-100/90 leading-relaxed">
                  Contamos con una red global de proveedores, presencia en todas las aduanas de Guatemala, y brindamos una respuesta rápida y atención personalizada.
                </p>

                {/* Core Values Pillars Quick List */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-blue-400/30">
                  {pillars.map((pillar, idx) => (
                    <div key={idx} className="space-y-2">
                      <div className="p-2 bg-blue-500/30 border border-blue-400/20 rounded-lg w-fit text-blue-200">
                        {pillar.icon}
                      </div>
                      <h4 className="font-display font-bold text-white text-sm">{pillar.title}</h4>
                      <p className="font-sans text-xs text-blue-100/80 leading-normal">{pillar.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Interactive button that triggers details timeline */}
                <div className="pt-6">
                  <button
                    onClick={() => setShowMilestones(true)}
                    className="cursor-pointer bg-white hover:bg-blue-50 text-blue-600 font-sans font-bold text-sm px-6 py-3.5 rounded-xl shadow-md active:scale-95 transition-all flex items-center gap-2"
                    id="about-knowledge-more-btn"
                  >
                    Conocer más historia
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right illustration Image matching Image 3 crop */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <ScrollReveal animation="fade-left">
              <div className="absolute inset-0 bg-blue-900 border-2 border-blue-400/30 rounded-3xl translate-x-3 translate-y-3 pointer-events-none" />
              
              <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
                <img
                  src={officeImg}
                  alt="Basa Logistics asesores con tablet en oficina de Guatemala"
                  className="w-full h-[320px] sm:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/60 via-transparent to-transparent" />
                
                {/* Floating certificate stamp badge */}
                <div className="absolute bottom-6 right-6 bg-blue-950/90 border border-blue-500/30 backdrop-blur-md p-4 rounded-xl flex items-center gap-3">
                  <Award size={32} className="text-yellow-400 shrink-0" />
                  <div className="leading-tight">
                    <p className="font-sans text-[11px] font-bold text-slate-300 uppercase tracking-wider">Historial SAT</p>
                    <p className="font-display font-extrabold text-white text-xs">Aduana Confiable OEA</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Floating Detailed History Modal (Milestones) */}
      <AnimatePresence>
        {showMilestones && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setShowMilestones(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl h-fit max-h-[85vh] bg-white text-slate-800 rounded-3xl shadow-2xl overflow-y-auto z-50 border border-slate-100 p-6 md:p-8"
              id="milestone-history-modal"
            >
              <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-blue-100 rounded-xl text-blue-600">
                    <History size={22} />
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-xl text-slate-900">Nuestra Línea de Tiempo</h3>
                    <p className="text-xs text-slate-400 font-sans mt-0.5">La evolución comercial de Basa Logistics desde 1995</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMilestones(false)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Vertical steps representing timelines */}
              <div className="relative pl-6 border-l-2 border-slate-200 ml-4 py-6 space-y-8">
                {milestones.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Circle Bullet with Year */}
                    <div className="absolute -left-[39px] top-1 bg-blue-600 text-white font-mono font-bold text-xs px-2 py-1 rounded border-2 border-white shadow-sm shrink-0">
                      {item.year}
                    </div>

                    <div>
                      <h4 className="font-display font-extrabold text-base text-slate-800">{item.title}</h4>
                      <p className="font-sans text-sm text-slate-500 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setShowMilestones(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm px-6 py-2.5 rounded-lg active:scale-95 transition-all"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
