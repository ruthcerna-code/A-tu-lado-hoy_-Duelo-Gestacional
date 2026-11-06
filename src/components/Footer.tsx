import React from 'react';
import { AlertTriangle, PhoneCall, ExternalLink, LogOut } from 'lucide-react';

interface FooterProps {
  onOpenSection: (sectionId: string) => void;
  onOpenHelpResources: () => void;
  onOpenLawInfo: () => void;
  onOpenGuestAccess: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSection,
  onOpenHelpResources,
  onOpenLawInfo,
  onOpenGuestAccess,
}) => {
  const scrollTo = (id: string) => {
    onOpenSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleQuickExit = () => {
    window.location.replace('https://www.google.com');
  };

  return (
    <footer className="bg-[#001E44] text-white pt-14 pb-12 border-t-4 border-[#EF8E11]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* MANDATORY PROMINENT MEDICAL & CRISIS DISCLAIMER (Visible block, NOT fine print!) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#002E67] border-2 border-[#1A95BA] shadow-md mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#EF8E11] text-[#001E44] flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Aviso importante sobre el acompañamiento
                </h3>
                <p className="mt-1 text-sm sm:text-base text-white/90 font-medium leading-relaxed">
                  A Tu Lado Hoy complementa el apoyo profesional y no sustituye la atención médica, psicológica ni los servicios de emergencia. Si estás en riesgo o en una emergencia, busca ayuda inmediata.
                </p>
              </div>
            </div>

            {/* Direct High Contrast Buttons */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenHelpResources}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#EF8E11] hover:bg-[#D87B00] text-[#001E44] font-bold text-sm shadow-xs transition-colors cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Recursos de ayuda</span>
              </button>

              <button
                type="button"
                onClick={handleQuickExit}
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors cursor-pointer"
                title="Salir rápidamente a Google por privacidad"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Salida rápida</span>
              </button>
            </div>

          </div>
        </div>

        {/* Links Navigation Grid in Sands UK Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/15 text-left">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#1A95BA] flex items-center justify-center text-white">
                <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
                  <path
                    d="M16 4C16 4 9 13.5 9 18.5C9 22.64 12.13 26 16 26C19.87 26 23 22.64 23 18.5C23 13.5 16 4 16 4Z"
                    fill="#FFFFFF"
                    opacity="0.9"
                  />
                  <circle cx="16" cy="18.5" r="4.5" fill="#EF8E11" />
                </svg>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                A Tu Lado Hoy
              </span>
            </div>
            
            <p className="mt-3 text-sm text-white/80 leading-relaxed max-w-sm">
              Plataforma gratuita de acompañamiento emocional perinatal para mujeres en Perú. Inspirada en los principios de escucha compasiva, accesibilidad y no revictimización.
            </p>

            <p className="mt-4 text-xs text-white/60">
              atuladohoy.com · Acompañamiento sin juicios
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold tracking-wider text-[#1A95BA] uppercase mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <button onClick={() => scrollTo('inicio')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('etapas')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Por etapa (Embarazo, Posparto, Pérdida)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('herramientas')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Herramientas de apoyo
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('biblioteca')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Biblioteca perinatal
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('derechos')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Tus derechos (Ley N.º 32132)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('pausa')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Pausa de calma
                </button>
              </li>
            </ul>
          </div>

          {/* Legal, Support & Peru Helplines */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-wider text-[#1A95BA] uppercase mb-4">
              Líneas en Perú y privacidad
            </h4>
            <ul className="space-y-2.5 text-sm text-white/85">
              <li>
                <button onClick={onOpenHelpResources} className="hover:text-[#1A95BA] transition-colors cursor-pointer font-bold text-[#EF8E11]">
                  Línea 113 MINSA (Opción 5 - Salud Mental)
                </button>
              </li>
              <li>
                <button onClick={onOpenHelpResources} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Línea 100 (MIMP - Soporte y contención)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('privacidad')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Acceso sin registro y sin nombre real
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('privacidad')} className="hover:text-[#1A95BA] transition-colors cursor-pointer">
                  Cifrado declarado y eliminación de datos
                </button>
              </li>
              <li>
                <button onClick={onOpenLawInfo} className="hover:text-[#1A95BA] transition-colors cursor-pointer flex items-center gap-1.5">
                  <span>Información sobre la Ley N.º 32132</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#1A95BA]" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} A Tu Lado Hoy. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-2">
            <span>Diseño accesible con contraste adaptado para mujeres en el Perú.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
