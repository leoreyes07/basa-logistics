import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Ship, Plane, Truck, MapPin, Scale, Box, DollarSign, 
  ArrowRight, ArrowLeft, Check, Clipboard, Info, Calculator, Sparkles
} from 'lucide-react';
import { QuoteFormState, QuoteEstimationResult } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormState>({
    serviceType: 'Aéreo',
    origin: '',
    destination: 'Ciudad de Guatemala, Guatemala',
    weight: 150,
    volume: 1.2,
    declaredValue: 2500,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    notes: ''
  });

  const [calcResult, setCalcResult] = useState<QuoteEstimationResult | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [quoteNumber, setQuoteNumber] = useState('');

  const calculateQuote = () => {
    const { serviceType, weight, volume, declaredValue } = formData;
    let baseRate = 0;
    let fuelSurcharge = 0;
    let customsFees = 110; // Standard import process SAT fee (OEA agent fee)
    let estimatedDays = '';

    if (serviceType === 'Aéreo') {
      baseRate = weight * 4.5 + volume * 15;
      fuelSurcharge = baseRate * 0.12;
      estimatedDays = '2-4 días hábiles';
    } else if (serviceType === 'Marítimo') {
      baseRate = volume * 180 + (weight > 1000 ? (weight / 1000) * 45 : 35);
      fuelSurcharge = baseRate * 0.18;
      estimatedDays = '10-14 días calendario';
    } else { // Terrestre
      baseRate = weight * 0.35 + volume * 80;
      fuelSurcharge = baseRate * 0.15;
      estimatedDays = '5-7 días hábiles';
    }

    const insuranceCost = declaredValue * 0.008; // 0.8% secure cargo flete
    const totalCost = baseRate + fuelSurcharge + customsFees + insuranceCost;

    setCalcResult({
      baseRate: Math.round(baseRate),
      fuelSurcharge: Math.round(fuelSurcharge),
      customsFees: Math.round(customsFees),
      insuranceCost: Math.round(insuranceCost),
      totalCost: Math.round(totalCost),
      currency: 'USD',
      estimatedDays
    });
  };

  const handleNextStep = () => {
    if (step === 2) {
      calculateQuote();
    }
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumberInputChange = (name: 'weight' | 'volume' | 'declaredValue', val: number) => {
    setFormData((prev) => ({ ...prev, [name]: Math.max(0, val) }));
  };

  const submitFinalQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    const trackingDigits = Math.floor(10000 + Math.random() * 90000);
    const generatedQuoteNumber = `BASA-QT-${trackingDigits}`;
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          // TODO: Agrega tu Access Key de Web3Forms en el archivo .env
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || 'TU_ACCESS_KEY_AQUI',
          subject: `Nueva Solicitud de Cotización: ${generatedQuoteNumber}`,
          from_name: formData.contactName,
          email: formData.contactEmail,
          ...formData,
          ...calcResult,
          quoteNumber: generatedQuoteNumber
        })
      });
      
      if (!response.ok) {
        throw new Error('Error del servidor al procesar la cotización');
      }
      
      setQuoteNumber(generatedQuoteNumber);
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError('Hubo un error de conexión. Por favor intente nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseAndReset = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setFormData({
        serviceType: 'Aéreo',
        origin: '',
        destination: 'Ciudad de Guatemala, Guatemala',
        weight: 150,
        volume: 1.2,
        declaredValue: 2500,
        contactName: '',
        contactEmail: '',
        contactPhone: '',
        notes: ''
      });
      setCalcResult(null);
      setSubmitted(false);
      setIsSubmitting(false);
      setSubmitError('');
      setQuoteNumber('');
    }, 400);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black cursor-pointer"
          onClick={handleCloseAndReset}
        />

        {/* Modal Sheet body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 30 }}
          transition={{ type: 'spring', damping: 25 }}
          className="relative bg-white text-slate-800 rounded-3xl shadow-2xl w-full max-w-xl md:max-w-2xl overflow-hidden z-20 m-4 border border-slate-100"
          id="quote-wizard-modal"
        >
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-[#06183a] to-blue-900 text-white p-6 md:p-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-500/20 border border-blue-400/20 rounded-xl text-blue-300">
                <Calculator size={22} className="stroke-[2px]" />
              </div>
              <div>
                <h3 className="font-display font-black text-lg md:text-xl">Cotizador Digital de Fletes</h3>
                <p className="text-xs text-slate-300 font-sans mt-0.5">Calcule de forma express el costo estimado de su embarque</p>
              </div>
            </div>

            <button
              onClick={handleCloseAndReset}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg bg-white/10 hover:bg-white/25 transition-all cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>

          {!submitted ? (
            <div className="p-6 md:p-8">
              
              {/* Steps Progress Indicators */}
              <div className="flex items-center justify-between mb-8 max-w-md mx-auto relative px-4">
                <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 -translate-y-1/2 z-0" />
                <div 
                  className="absolute top-1/2 left-0 h-0.5 bg-blue-500 -translate-y-1/2 z-0 transition-all duration-300" 
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />

                {[1, 2, 3].map((num) => (
                  <div key={num} className="relative z-10 flex flex-col items-center">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center font-sans font-bold text-sm border-2 transition-all ${
                      step >= num 
                        ? 'bg-blue-600 border-blue-500 text-white shadow-md shadow-blue-500/20' 
                        : 'bg-white border-slate-200 text-slate-400'
                    }`}>
                      {step > num ? <Check size={14} className="stroke-[3px]" /> : num}
                    </div>
                    <span className={`text-[10px] sm:text-xs font-sans font-semibold mt-1.5 uppercase tracking-wider ${
                      step >= num ? 'text-blue-600 font-bold' : 'text-slate-400'
                    }`}>
                      {num === 1 && 'Itinerario'}
                      {num === 2 && 'Carga'}
                      {num === 3 && 'Resultados'}
                    </span>
                  </div>
                ))}
              </div>

              {/* Step Forms */}
              <div className="min-h-[280px]">
                {step === 1 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Cargo Mode Cards Selector */}
                    <div>
                      <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-3">
                        Seleccione Modalidad de Envío
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { value: 'Aéreo', label: 'Aéreo', desc: 'Rápido', icon: <Plane className="w-5 h-5" /> },
                          { value: 'Marítimo', label: 'Marítimo', desc: 'Económico', icon: <Ship className="w-5 h-5" /> },
                          { value: 'Terrestre', label: 'Terrestre', desc: 'Fronterizo', icon: <Truck className="w-5 h-5" /> }
                        ].map((mode) => (
                          <button
                            key={mode.value}
                            type="button"
                            onClick={() => setFormData(prev => ({ ...prev, serviceType: mode.value as QuoteFormState['serviceType'] }))}
                            className={`p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-1.5 transition-all cursor-pointer ${
                              formData.serviceType === mode.value 
                                ? 'bg-blue-50/50 border-blue-400 text-blue-600 shadow-sm' 
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            <div className={`p-2 rounded-lg ${formData.serviceType === mode.value ? 'bg-blue-100 text-blue-600' : 'bg-slate-50'}`}>
                              {mode.icon}
                            </div>
                            <span className="font-display font-bold text-sm">{mode.label}</span>
                            <span className="text-[10px] font-sans text-slate-400">{mode.desc}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Itinerary inputs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <MapPin size={12} className="text-blue-500" />
                          Ciudad y País de Origen
                        </label>
                        <input
                          type="text"
                          name="origin"
                          placeholder="ej. Miami, FL, USA"
                          value={formData.origin}
                          onChange={handleFormInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <MapPin size={12} className="text-blue-500" />
                          Bodega de Entrega (Destino)
                        </label>
                        <input
                          type="text"
                          name="destination"
                          placeholder="ej. Ciudad de Guatemala"
                          value={formData.destination}
                          onChange={handleFormInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-all focus:ring-2 focus:ring-blue-100"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Weight and Volume grid with buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                      
                      {/* Weight column */}
                      <div>
                        <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <Scale size={12} className="text-blue-500" />
                          Peso de Carga (kg)
                        </label>
                        <input
                          type="number"
                          value={formData.weight || ''}
                          onChange={(e) => handleNumberInputChange('weight', parseFloat(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm font-semibold text-slate-800 outline-none transition-all"
                        />
                      </div>

                      {/* Volume cubic column */}
                      <div>
                        <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <Box size={12} className="text-blue-500" />
                          Volumen (m³)
                        </label>
                        <input
                          type="number"
                          step="0.1"
                          value={formData.volume || ''}
                          onChange={(e) => handleNumberInputChange('volume', parseFloat(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm font-semibold text-slate-800 outline-none transition-all"
                        />
                      </div>

                      {/* Declared safe value column */}
                      <div>
                        <label className="block text-xs font-sans font-bold text-slate-500 uppercase tracking-widest mb-2 flex items-center gap-1">
                          <DollarSign size={12} className="text-blue-500" />
                          Valor Declarado ($)
                        </label>
                        <input
                          type="number"
                          value={formData.declaredValue || ''}
                          onChange={(e) => handleNumberInputChange('declaredValue', parseFloat(e.target.value))}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-xl py-3 px-4 font-sans text-sm font-semibold text-slate-800 outline-none transition-all"
                        />
                      </div>

                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl text-slate-600 text-xs flex gap-3 leading-relaxed">
                      <Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-blue-800 block mb-0.5">Nota de cubicaje:</strong>
                        El volumen se calcula multiplicando (Largo x Ancho x Alto en metros). Un volumen preciso nos permite reservar espacio prioritario en contenedores aéreos y marítimos.
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && calcResult && (
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Cost Breakdown Sheet */}
                    <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 space-y-3.5">
                      <h4 className="font-display font-bold text-[#06183a] text-sm uppercase tracking-wide border-b border-slate-200/60 pb-2">
                        Liquidación Estimada de Flete
                      </h4>

                      <div className="flex justify-between text-xs sm:text-sm font-sans text-slate-500">
                        <span>Flete Base Marítimo/Aéreo</span>
                        <strong className="text-slate-800 font-mono">${calcResult.baseRate.toLocaleString()} USD</strong>
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm font-sans text-slate-500">
                        <span>Recargo por Combustibles (Bunker/BAF)</span>
                        <strong className="text-slate-800 font-mono">${calcResult.fuelSurcharge.toLocaleString()} USD</strong>
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm font-sans text-slate-500">
                        <span>Manejo Aduanal Integrado SAT (Guía)</span>
                        <strong className="text-slate-800 font-mono">${calcResult.customsFees.toLocaleString()} USD</strong>
                      </div>

                      <div className="flex justify-between text-xs sm:text-sm font-sans text-slate-500">
                        <span>Seguro de Carga Declarado (All Risk)</span>
                        <strong className="text-slate-800 font-mono">${calcResult.insuranceCost.toLocaleString()} USD</strong>
                      </div>

                      <div className="flex justify-between border-t border-dashed border-slate-200 pt-3 text-sm sm:text-base font-sans text-slate-800 font-bold">
                        <span className="flex items-center gap-1.5 text-blue-600">
                          <Sparkles size={14} /> Total Estimado F.I.S.
                        </span>
                        <strong className="text-blue-600 text-lg font-mono">${calcResult.totalCost.toLocaleString()} USD</strong>
                      </div>
                    </div>

                    {/* Transit days indicator */}
                    <div className="grid grid-cols-2 gap-4 text-xs font-sans text-slate-600">
                      <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 flex items-center justify-between">
                        <span>Tránsito Estimado:</span>
                        <strong className="text-blue-700">{calcResult.estimatedDays}</strong>
                      </div>
                      <div className="bg-blue-50/50 p-2.5 rounded-lg border border-blue-100 flex items-center justify-between">
                        <span>Servicio Especial:</span>
                        <strong className="text-blue-700">Puerta a Bodega</strong>
                      </div>
                    </div>

                    {/* Personal data for submission */}
                    <form onSubmit={submitFinalQuote} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="sm:col-span-2">
                        <label className="block text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Nombre Completo de Contacto
                        </label>
                        <input
                          type="text"
                          required
                          name="contactName"
                          placeholder="ej. Lic. Alejandro Méndez"
                          value={formData.contactName}
                          onChange={handleFormInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-lg py-2 px-3 font-sans text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Correo de Contacto
                        </label>
                        <input
                          type="email"
                          required
                          name="contactEmail"
                          placeholder="ej. mercadeo@empresa.com"
                          value={formData.contactEmail}
                          onChange={handleFormInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-lg py-2 px-3 font-sans text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans font-bold text-slate-400 uppercase tracking-widest mb-1.5">
                          Teléfono de Contacto
                        </label>
                        <input
                          type="tel"
                          required
                          name="contactPhone"
                          placeholder="ej. +502 5555-5555"
                          value={formData.contactPhone}
                          onChange={handleFormInputChange}
                          className="w-full bg-slate-50 border border-slate-200 focus:border-blue-500 rounded-lg py-2 px-3 font-sans text-xs sm:text-sm text-slate-800 outline-none"
                        />
                      </div>
                    </form>

                  </motion.div>
                )}
              </div>

              {/* Navigation buttons inside Wizard */}
              <div className="flex items-center justify-between pt-8 border-t border-slate-100 mt-8">
                {step > 1 ? (
                  <button
                    onClick={handlePrevStep}
                    className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 font-sans font-bold text-sm px-5 py-2.5 rounded-xl border border-slate-200 transition-all active:scale-95 flex items-center gap-1.5"
                  >
                    <ArrowLeft size={16} /> Subir Anterior
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    onClick={handleNextStep}
                    disabled={step === 1 && !formData.origin.trim()}
                    className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm px-6 py-2.5 rounded-xl transition-all active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
                  >
                    Siguiente Paso <ArrowRight size={16} />
                  </button>
                ) : (
                  <div className="flex flex-col items-end gap-2">
                    {submitError && <span className="text-red-500 font-sans text-xs font-semibold">{submitError}</span>}
                    <button
                      onClick={submitFinalQuote}
                      disabled={!formData.contactName.trim() || !formData.contactEmail.trim() || !formData.contactPhone?.trim() || isSubmitting}
                      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-sm px-6 py-2.5 rounded-xl shadow-md active:scale-95 disabled:opacity-50 flex items-center gap-1.5"
                      id="submit-quote-btn"
                    >
                      {isSubmitting ? 'Enviando...' : 'Confirmar y Agendar'} {!isSubmitting && <Check size={16} />}
                    </button>
                  </div>
                )}
              </div>

            </div>
          ) : (
            // Quote Submission success representation
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center space-y-6"
              id="quote-success-panel"
            >
              <div className="w-16 h-16 bg-green-50 text-green-600 border border-green-200 rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check size={32} className="stroke-[3px]" />
              </div>

              <div className="space-y-2">
                <h4 className="font-display font-black text-2xl text-slate-900">¡Cotización Registrada con Éxito!</h4>
                <p className="font-sans text-slate-500 text-sm max-w-md mx-auto leading-relaxed">
                  Hemos enviado una copia detallada con términos arancelarios INCOTERMS a su correo electrónico. Un ingeniero fiscal de Basa se pondrá en contacto pronto.
                </p>
              </div>

              {/* Quote reference voucher */}
              <div className="bg-slate-50 rounded-2xl border border-slate-100 p-5 max-w-sm mx-auto space-y-2 text-left">
                <div className="flex justify-between items-center text-xs font-sans text-slate-400">
                  <span>CÓDIGO DE COTIZACIÓN</span>
                  <span className="font-bold">FECHA: 2026</span>
                </div>
                <div className="flex justify-between items-center">
                  <strong className="font-mono text-base text-blue-600 font-extrabold">{quoteNumber}</strong>
                  <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-2 py-0.5 rounded-full font-sans uppercase">
                    PROCESANDO
                  </span>
                </div>
                <div className="border-t border-slate-200/60 pt-2 flex justify-between items-center text-xs font-sans text-slate-500">
                  <span>Total Liquidado</span>
                  <strong className="text-slate-800 font-mono">${calcResult?.totalCost.toLocaleString()} USD</strong>
                </div>
              </div>

              <div>
                <button
                  onClick={handleCloseAndReset}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-sans font-bold text-sm px-6 py-3 rounded-xl shadow active:scale-95 transition-all text-center"
                >
                  Entendido y Cerrar
                </button>
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
