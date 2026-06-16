import React from 'react';
import { Linkedin, Phone, MessageCircle } from 'lucide-react';
import Logo from './Logo';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="bg-[#051128] text-slate-400 font-sans text-sm pb-24 md:pb-8 border-t border-[#122e65]/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#122e65]/30">
          
          {/* Logo linkage */}
          <Logo 
            className="cursor-pointer" 
            onClick={() => onNavigate('inicio')}
          />

          {/* Quick Menu items centered */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Inicio
            </button>
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Nosotros
            </button>
            <button
              onClick={() => onNavigate('servicios')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Servicios
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* LinkedIn on right */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/company/basa-logistics"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-colors font-bold shadow-sm"
              aria-label="LinkedIn Basa"
            >
              <Linkedin size={18} />
            </a>
          </div>

        </div>

        {/* Real copy claims matching Image 1 & 3 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {currentYear} basalogistics.com. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <a href="#privacidad" className="hover:underline transition-all">Política de Privacidad</a>
            <span>•</span>
            <a href="#terminos" className="hover:underline transition-all">Términos del Servicio</a>
            <span>•</span>
            <span className="font-sans font-bold text-slate-600">SAT GT Certificado</span>
          </div>
        </div>
      </div>

      {/* Floating Bottom Navigation CTA Bar for mobile viewports matching Image 2 */}
      <div className="fixed bottom-0 inset-x-0 z-30 md:hidden bg-slate-900/90 backdrop-blur-md border-t border-slate-800 p-3.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href="https://wa.me/50222004700?text=Hola%20Basa%20Logistics,%20solicito%20información%20sobre%20un%20flete"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-[#25d366] hover:bg-[#20ba5a] text-white font-sans font-bold text-xs py-3 px-3.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95"
          id="mobile-btn-whatsapp"
        >
          <MessageCircle size={15} className="fill-current" />
          Contactar por WhatsApp
        </a>

        <a
          href="tel:+50222004700"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-sans font-bold text-xs py-3 px-3.5 rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-transform active:scale-95"
          id="mobile-btn-phone"
        >
          <Phone size={14} />
          Llamar Ahora
        </a>
      </div>
    </footer>
  );
}
