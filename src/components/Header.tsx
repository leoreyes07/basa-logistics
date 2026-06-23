import React, { useState } from 'react';
import { Menu, X, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Nosotros', id: 'nosotros' },
    { name: 'Servicios', id: 'servicios' },
    { name: 'Rastreo', id: 'rastreo' },
    { name: 'Contacto', id: 'contacto' },
  ];

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-[#06183a] text-white border-b border-[#122e65]/50 backdrop-blur-md shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand logo linked to top */}
        <Link to="/" onClick={handleCloseMenu} className="cursor-pointer block">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm text-slate-300">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `transition-colors duration-200 cursor-pointer ${
              isActive ? 'text-white font-semibold underline underline-offset-8 decoration-blue-500 decoration-2' : 'hover:text-white'
            }`}
          >
            Inicio
          </NavLink>
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) => `transition-colors duration-200 cursor-pointer ${
                isActive ? 'text-white font-semibold underline underline-offset-8 decoration-blue-500 decoration-2' : 'hover:text-white'
              }`}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Action button & social shortcut */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={onOpenQuoteModal}
            className="cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-semibold text-sm px-5 py-2.5 rounded-lg border border-blue-400/20 shadow-md hover:shadow-lg shadow-blue-500/10 active:scale-95 transition-all duration-200"
          >
            Solicitar cotización
          </button>

          <a
            href="https://linkedin.com/company/basa-logistics"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Basa Logistics LinkedIn"
          >
            <Linkedin size={20} className="stroke-[2px]" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={onOpenQuoteModal}
            className="cursor-pointer bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-semibold text-xs px-3 py-2 rounded-md shadow-md active:scale-95 transition-all duration-150"
          >
            Cotizar
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-slate-300 hover:text-white cursor-pointer active:scale-90 transition-transform"
            aria-label="Abrir panel"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Slider / Drawer Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40 md:hidden"
              onClick={handleCloseMenu}
            />
            
            {/* Mobile Drawer Menu */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[#071329] text-white shadow-2xl z-50 md:hidden flex flex-col p-6 border-l border-[#122e65]"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#122e65]/60">
                <Logo iconOnly light />
                <button
                  onClick={handleCloseMenu}
                  className="p-1.5 text-slate-300 hover:text-white rounded-md bg-[#122e65]/40 hover:bg-[#122e65]/80 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-6">
                <NavLink
                  to="/"
                  end
                  onClick={handleCloseMenu}
                  className={({ isActive }) => `text-left font-display text-lg py-1 border-b border-transparent ${
                    isActive ? 'text-blue-400 font-semibold border-blue-500' : 'text-slate-300'
                  }`}
                >
                  Inicio
                </NavLink>
                {menuItems.map((item) => (
                  <NavLink
                    key={item.id}
                    to={`/${item.id}`}
                    onClick={handleCloseMenu}
                    className={({ isActive }) => `text-left font-display text-lg py-1 border-b border-transparent ${
                      isActive ? 'text-blue-400 font-semibold border-blue-500' : 'text-slate-300'
                    }`}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-[#122e65]/60 flex flex-col gap-4">
                <button
                  onClick={() => {
                    handleCloseMenu();
                    onOpenQuoteModal();
                  }}
                  className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-sans font-semibold py-3 px-4 rounded-lg shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95"
                >
                  Solicitar cotización
                </button>
                
                <div className="flex items-center justify-between text-slate-400 px-1 mt-2">
                  <span className="text-xs">Basa Logistics, GT</span>
                  <a
                    href="https://linkedin.com/company/basa-logistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    <Linkedin size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
