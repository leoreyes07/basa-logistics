import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Ship, Plane, Truck, FileCheck, ShieldCheck, Warehouse, ArrowRight, X, Check } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string, className = "w-8 h-8") => {
    switch (iconName) {
      case 'ship':
        return <Ship className={className} />;
      case 'plane':
        return <Plane className={className} />;
      case 'truck':
        return <Truck className={className} />;
      case 'file-check':
        return <FileCheck className={className} />;
      case 'shield-check':
        return <ShieldCheck className={className} />;
      case 'warehouse':
        return <Warehouse className={className} />;
      default:
        return <Ship className={className} />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-blue-600 font-sans font-extrabold text-xs uppercase tracking-widest"
          >
            Servicios Logísticos Especializados
          </motion.div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#06183a] tracking-tight mt-2">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full" />
          <p className="font-sans text-slate-500 mt-4 max-w-2xl mx-auto text-base sm:text-lg">
            Ofrecemos un portafolio completo de soluciones integrales diseñadas estratégicamente para agilizar su cadena de suministro terrestre, aérea y oceánica.
          </p>
        </div>

        {/* Services Showcase Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white hover:bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 p-8 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div>
                {/* Icon wrapper with circular blue layout shown in Image 3 */}
                <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-[#2563eb] group-hover:text-white group-hover:border-blue-300 transition-colors duration-300 mb-6 shadow-sm">
                  {getServiceIcon(service.iconName, "w-7 h-7 stroke-[1.8px]")}
                </div>

                <h3 className="font-display font-bold text-slate-900 text-xl group-hover:text-blue-600 transition-colors duration-200 mb-3">
                  {service.title}
                </h3>
                
                <p className="font-sans text-slate-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 mt-auto flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="cursor-pointer text-blue-600 hover:text-blue-700 font-sans font-bold text-sm tracking-wide flex items-center gap-1.5 focus:outline-none"
                  id={`service-more-btn-${service.id}`}
                >
                  Ver Detalles
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase">Basa Logística</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating About-us micro banner previewing the quote modal */}
        <div className="mt-20 bg-gradient-to-r from-[#06183a] to-blue-900 rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="font-display font-bold text-2xl md:text-3xl text-white mb-3">
              ¿Listo para agilizar su logística comercial?
            </h3>
            <p className="font-sans text-slate-300 text-sm sm:text-base leading-relaxed">
              Consiga una estimación de flete y prearchivo de aduanas en cuestión de minutos. Nuestro equipo de ingenieros logísticos creará una propuesta de negocios a la medida.
            </p>
          </div>
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="shrink-0 relative z-10"
          >
            <a 
              href="#contacto"
              className="bg-white hover:bg-slate-100 text-[#06183a] font-sans font-bold text-base px-8 py-4 rounded-xl shadow-lg transition-all duration-200 inline-block text-center"
            >
              Contáctenos Hoy
            </a>
          </motion.div>
        </div>

      </div>

      {/* Floating Detailed Modal for knowing more about services */}
      <AnimatePresence>
        {selectedService && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
              onClick={() => setSelectedService(null)}
            />
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed inset-x-4 bottom-4 top-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl h-fit max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-y-auto z-50 border border-slate-100 scrollbar-thin"
              id="service-detail-modal"
            >
              {/* Cover Banner with Icon */}
              <div className="relative bg-gradient-to-r from-[#06183a] to-blue-900 text-white p-6 md:p-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/20 border border-blue-400/20 rounded-xl text-blue-300 shrink-0">
                    {getServiceIcon(selectedService.iconName, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-blue-300">Detalles de Operación</span>
                    <h4 className="font-display font-extrabold text-xl md:text-2xl mt-0.5">{selectedService.title}</h4>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 text-slate-300 hover:text-white rounded-lg bg-white/10 hover:bg-white/25 transition-all cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main Information */}
              <div className="p-6 md:p-8 space-y-6">
                <div>
                  <h5 className="font-display font-bold text-slate-800 text-base mb-2">Descripción General:</h5>
                  <p className="font-sans text-slate-600 text-sm leading-relaxed">
                    {selectedService.fullDetails}
                  </p>
                </div>

                {/* Key features bullets list */}
                <div>
                  <h5 className="font-display font-bold text-slate-800 text-base mb-4">¿Qué incluye nuestro servicio?</h5>
                  <div className="grid grid-cols-1 gap-3">
                    {selectedService.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-xl hover:border-blue-100 transition-colors">
                        <div className="p-1 bg-blue-100 rounded-full text-blue-600 shrink-0 mt-0.5">
                          <Check size={14} className="stroke-[3px]" />
                        </div>
                        <span className="font-sans text-slate-600 text-sm leading-normal">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action button inside modal */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="font-sans text-xs text-slate-400 font-semibold">Basa Logistics Co.</span>
                  <a
                    href="#contacto"
                    onClick={() => setSelectedService(null)}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-bold text-sm px-6 py-3 rounded-xl shadow-md transition-all active:scale-95 text-center"
                  >
                    Cotizar este flete
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
