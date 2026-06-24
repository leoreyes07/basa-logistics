import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Mail, Phone, Clock, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { OFFICE_INFO } from '../data';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple verification
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setShowErrorAlert(true);
      setTimeout(() => setShowErrorAlert(false), 4000);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        asunto: '',
        mensaje: ''
      });
      
      // Hide success banner after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title matching Image 1 layout */}
        <div className="mb-14">
          <h2 className="font-display font-extrabold text-[#06183a] text-4xl sm:text-5xl tracking-tight text-center sm:text-left">
            Contacto
          </h2>
          <div className="w-16 h-1 bg-blue-600 mt-3 rounded-full mx-auto sm:mx-0" />
        </div>

        {/* Form and Address Columns container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form Section */}
          <div className="lg:col-span-7 bg-slate-50/50 rounded-3xl border border-slate-100 p-6 md:p-8 shadow-sm">
            <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl mb-6">
              Envíenos un Mensaje Directo
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name field */}
              <div>
                <label htmlFor="nombre" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  placeholder="Nombre Completo"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Columns for Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Correo Electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="Teléfono (ej. +502 2200-0000)"
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="asunto" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  placeholder="Asunto"
                  value={formData.asunto}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="mensaje" className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Escriba su mensaje aquí..."
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100 resize-none"
                />
              </div>

              <AnimatePresence>
                {showErrorAlert && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-amber-50 border border-amber-200 text-amber-700 rounded-xl text-xs flex items-center gap-2"
                  >
                    <AlertTriangle size={16} className="shrink-0" />
                    <span>Por favor complete su Nombre, Correo Electrónico y el Mensaje antes de enviar.</span>
                  </motion.div>
                )}

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl text-sm flex items-start gap-3"
                  >
                    <CheckCircle size={20} className="text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold">¡Mensaje enviado con éxito!</strong>
                      <span className="text-xs text-green-600/95 mt-0.5 block">Uno de nuestros coordinadores logísticos se pondrá en contacto con usted a la brevedad.</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-bold text-sm px-8 py-3.5 rounded-xl shadow-md transition-all active:scale-95 disabled:opacity-50 flex items-center gap-2 shadow-blue-500/10"
                  id="contact-submit-btn"
                >
                  {isSubmitting ? 'Procediendo...' : 'Enviar Mensaje'}
                  {!isSubmitting && <Send size={15} />}
                </button>
              </div>

            </form>
          </div>

          {/* Right Column: HQ Address card & Maps frame matching Image 1 layout */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50/30 p-6 md:p-8 rounded-3xl border border-slate-100/80">
              <h3 className="font-display font-bold text-slate-800 text-lg sm:text-xl mb-6">
                Oficinas Centrales
              </h3>

              {/* Contact Information Cards */}
              <div className="space-y-5">
                
                {/* Address point */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Dirección</h4>
                    <p className="font-sans text-sm text-slate-600 mt-1 leading-relaxed">
                      {OFFICE_INFO.address}
                    </p>
                  </div>
                </div>

                {/* Email point */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Correo Electrónico</h4>
                    <a 
                      href={`mailto:${OFFICE_INFO.email}`} 
                      className="font-sans text-sm text-blue-600 font-semibold hover:underline mt-1 block transition-all"
                    >
                      {OFFICE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Phone point */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Teléfonos de Asistencia</h4>
                    <div className="mt-1 space-y-0.5">
                      <a 
                        href={`tel:${OFFICE_INFO.phone.replace(/\s+/g, '')}`} 
                        className="font-sans text-sm text-slate-600 font-semibold hover:text-blue-600 block transition-all"
                      >
                        {OFFICE_INFO.phone} (PBX)
                      </a>
                      <a 
                        href="tel:+0005559876" 
                        className="font-sans text-sm text-slate-400 font-semibold hover:text-blue-600 block transition-all"
                      >
                        +000 555-9876 (Asistencia Intl.)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Hours point */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-800 text-xs uppercase tracking-wider">Horario de Atención</h4>
                    <p className="font-sans text-sm text-slate-600 mt-1 leading-normal">
                      {OFFICE_INFO.hours}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* High Fidelity OpenStreetMap Embed centered in Las Margaritas, Zona 10, GT */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 flex flex-col h-[280px]">
              
              {/* Google Maps Style Top Bar overlay shown in Image 1 */}
              <div className="absolute top-3 left-3 right-3 bg-white border border-slate-100 rounded-xl p-3 flex items-center justify-between shadow-lg z-10">
                <div className="leading-tight">
                  <h4 className="font-display font-extrabold text-[#06183a] text-xs">Logística Demo</h4>
                  <p className="text-[10px] text-slate-400 font-sans mt-0.5">Avenida Siempreviva 742, Nivel 5</p>
                </div>
                <div className="flex gap-1">
                  <a 
                    href="https://www.google.com/maps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 rounded-lg text-[10px] font-sans font-bold shadow-md transition-all flex items-center gap-1"
                  >
                    <Send size={10} />
                    Rutas
                  </a>
                </div>
              </div>

              {/* The Map Frame itself */}
              <iframe 
                title="Basa Logistics Oficina Central Guatemala Map"
                className="w-full h-full border-none pointer-events-auto"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-90.5135%2C14.5995%2C-90.4995%2C14.6075&amp;layer=mapnik&amp;marker=14.6025%2C-90.5065"
              />

              {/* Legend overlay */}
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-100 text-[10px] text-slate-500 rounded px-2 py-0.5 flex gap-1 font-sans z-10 shadow">
                <span>© OpenStreetMap Contributors</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
