import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[index];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Title corresponding to Image 2 visual structure */}
        <div className="text-center mb-10">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#06183a] tracking-tight">
            Testimonios
          </h2>
          <div className="w-12 h-0.5 bg-blue-500 mx-auto mt-3" />
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xl">
          
          {/* Quote icon representing the editorial design */}
          <div className="absolute top-6 left-8 text-blue-100/80 pointer-events-none">
            <Quote size={80} className="fill-current stroke-none" />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center text-center space-y-6"
              >
                {/* Trust Stars block */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Quoted Testimonial */}
                <p className="font-sans text-lg md:text-xl text-slate-700 font-medium italic leading-relaxed max-w-2xl">
                  "{current.quote}"
                </p>

                {/* Client Profile Row including image matching Image 2 */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-slate-100/80 w-full justify-center">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-blue-100 shadow-md grayscale-[10%]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="text-center sm:text-left">
                    <h4 className="font-display font-bold text-slate-950 text-base">{current.name}</h4>
                    <p className="font-sans text-xs text-blue-500 font-semibold mt-0.5">
                      {current.position} <span className="text-slate-400">| {current.company}</span>
                    </p>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Quick Manual navigation arrows left/right */}
          <div className="absolute inset-y-0 -left-4 sm:-left-6 md:-left-12 flex items-center">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white border border-slate-100 hover:border-blue-100 text-slate-600 hover:text-blue-600 hover:shadow-lg focus:outline-none cursor-pointer active:scale-90 transition-all shadow-md"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          
          <div className="absolute inset-y-0 -right-4 sm:-right-6 md:-right-12 flex items-center">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white border border-slate-100 hover:border-blue-100 text-slate-600 hover:text-blue-600 hover:shadow-lg focus:outline-none cursor-pointer active:scale-90 transition-all shadow-md"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {TESTIMONIALS_DATA.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-blue-600' : 'w-2 bg-slate-300'
              }`}
              aria-label={`Ir al testimonio ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
