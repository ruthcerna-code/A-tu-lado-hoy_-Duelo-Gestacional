import React, { useState } from 'react';
import { Menu, X, PhoneCall, LogOut, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenGuestAccess: () => void;
  onOpenHelpResources: () => void;
  onOpenSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenGuestAccess,
  onOpenHelpResources,
  onOpenSection,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    onOpenSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sands UK Signature "Quick Exit" feature for user privacy & safety
  const handleQuickExit = () => {
    // Immediately replace URL to neutral website (Google or BBC)
    window.location.replace('https://www.google.com');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-[#002E67]/10 transition-all">
      
      {/* 1. Sands UK Signature Top Helpline & Quick Exit Utility Bar */}
      <div className="bg-[#002E67] text-white py-2 px-4 sm:px-8 text-xs font-medium">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
          
          {/* Helpline prompt */}
          <div className="flex items-center gap-2 overflow-hidden truncate">
            <span className="hidden sm:inline-block w-2 h-2 rounded-full bg-[#EF8E11]" />
            <span className="text-white/90">
              Líneas gratuitas de apoyo en Perú:
            </span>
            <span className="font-bold text-[#1A95BA] whitespace-nowrap">
              113 (Opción 5)
            </span>
            <span className="text-white/50 hidden md:inline">|</span>
            <span className="font-bold text-[#1A95BA] whitespace-nowrap hidden md:inline">
              Línea 100
            </span>
            <button
              type="button"
              onClick={onOpenHelpResources}
              className="underline text-white/90 hover:text-[#EF8E11] ml-1 transition-colors cursor-pointer hidden lg:inline"
            >
              Ver recursos inmediatos
            </button>
          </div>

          {/* Right actions: Direct Help Modal trigger & Sands Quick Exit button */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenHelpResources}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#1A95BA]/30 hover:bg-[#1A95BA]/50 text-white text-[11px] font-semibold transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3 h-3 text-[#1A95BA]" />
              <span className="hidden sm:inline">Directorio Perú</span>
              <span className="sm:hidden">Ayuda</span>
            </button>

            {/* Sands Quick Exit: Instant redirection for privacy */}
            <button
              type="button"
              onClick={handleQuickExit}
              title="Salir de la página inmediatamente por seguridad"
              className="inline-flex items-center gap-1 px-3 py-1 rounded bg-[#EF8E11] hover:bg-[#D87B00] text-[#001E44] font-bold text-[11px] transition-colors cursor-pointer"
            >
              <LogOut className="w-3 h-3" />
              <span>Salida rápida</span>
            </button>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Bar (Sands UK Brand Architecture) */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between gap-6">
        
        {/* Brand Logo with Sands-style Teardrop & Sunburst dual symbol */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); scrollTo('inicio'); }}
          className="flex items-center gap-3 group whitespace-nowrap shrink-0"
        >
          {/* Sands-style dual icon: Teardrop (loss/care) + Sunburst/leaf (hope/life) */}
          <div className="w-10 h-10 rounded-xl bg-[#002E67] flex items-center justify-center text-white shadow-xs group-hover:bg-[#00224D] transition-colors">
            <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
              {/* Teardrop in Teal */}
              <path
                d="M16 4C16 4 9 13.5 9 18.5C9 22.64 12.13 26 16 26C19.87 26 23 22.64 23 18.5C23 13.5 16 4 16 4Z"
                fill="#1A95BA"
                opacity="0.85"
              />
              {/* Sunburst / warm ray in Gold Amber */}
              <circle cx="16" cy="18.5" r="4.5" fill="#EF8E11" />
              <path d="M16 11V13M16 24V26M10.5 18.5H12.5M19.5 18.5H21.5" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-extrabold text-[20px] sm:text-[22px] tracking-tight text-[#002E67] leading-tight">
              A Tu Lado Hoy
            </span>
            <span className="text-[11px] font-semibold text-[#1A95BA] tracking-wider uppercase -mt-0.5">
              Acompañamiento Perinatal · Perú
            </span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-[15px] font-semibold text-[#002E67]/85">
          <button
            onClick={() => scrollTo('inicio')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Inicio
          </button>
          <button
            onClick={() => scrollTo('etapas')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Por etapa
          </button>
          <button
            onClick={() => scrollTo('herramientas')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Herramientas
          </button>
          <button
            onClick={() => scrollTo('biblioteca')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Biblioteca
          </button>
          <button
            onClick={() => scrollTo('derechos')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Ley N.º 32132
          </button>
          <button
            onClick={() => scrollTo('privacidad')}
            className="hover:text-[#1A95BA] transition-colors whitespace-nowrap py-1 cursor-pointer"
          >
            Privacidad
          </button>
        </nav>

        {/* Sands Primary Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenGuestAccess}
            className="px-5 sm:px-6 py-2.5 text-[15px] font-bold text-[#001E44] bg-[#EF8E11] hover:bg-[#D87B00] active:scale-[0.98] rounded-xl shadow-xs transition-all whitespace-nowrap cursor-pointer"
          >
            Buscar apoyo
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#002E67] hover:bg-[#F1F5F9] rounded-lg transition-colors cursor-pointer"
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#002E67]/15 px-6 py-5 shadow-xl animate-in fade-in duration-150">
          <nav className="flex flex-col gap-3 text-base font-semibold text-[#002E67]">
            <button
              onClick={() => scrollTo('inicio')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollTo('etapas')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Acompañamiento por etapa
            </button>
            <button
              onClick={() => scrollTo('herramientas')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Herramientas de apoyo
            </button>
            <button
              onClick={() => scrollTo('biblioteca')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Biblioteca perinatal
            </button>
            <button
              onClick={() => scrollTo('derechos')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Tus derechos (Ley N.º 32132)
            </button>
            <button
              onClick={() => scrollTo('privacidad')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Privacidad y control
            </button>
            <button
              onClick={() => scrollTo('pausa')}
              className="text-left py-2 hover:text-[#1A95BA] border-b border-[#002E67]/10"
            >
              Pausa de respiración
            </button>

            <div className="pt-3 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenGuestAccess();
                }}
                className="w-full py-3 text-center font-bold text-[#001E44] bg-[#EF8E11] hover:bg-[#D87B00] rounded-xl shadow-xs transition-colors"
              >
                Entrar sin crear cuenta
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHelpResources();
                }}
                className="w-full py-2.5 text-center font-semibold text-white bg-[#002E67] hover:bg-[#00224D] rounded-xl text-sm"
              >
                Líneas de ayuda en Perú (113 y 100)
              </button>
            </div>
          </nav>
        </div>
      )}

    </header>
  );
};
