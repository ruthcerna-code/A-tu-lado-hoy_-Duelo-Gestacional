import React from 'react';
import { ArrowRight, Heart, Sparkles, Sun } from 'lucide-react';

interface FinalCTAProps {
  onOpenGuestAccess: () => void;
  onExploreLibrary: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGuestAccess, onExploreLibrary }) => {
  return (
    <section className="py-14 md:py-20 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Sands UK Signature Deep Navy Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-[#002E67] text-white p-8 sm:p-14 lg:p-16 text-center shadow-xl border border-[#1A95BA]/30">
          
          {/* Subtle background glow */}
          <div 
            aria-hidden="true" 
            className="absolute top-0 right-0 w-80 h-80 bg-[#1A95BA]/20 rounded-full blur-3xl pointer-events-none" 
          />
          <div 
            aria-hidden="true" 
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#EF8E11]/15 rounded-full blur-3xl pointer-events-none" 
          />

          <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
            
            {/* Sands-style sunburst / hope icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-[#EF8E11] mb-6 shadow-sm">
              <Sun className="w-8 h-8 stroke-[2.2]" />
            </div>

            {/* Bold Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
              Cuando lo necesites, aquí estamos{' '}
              <span className="text-[#1A95BA] block sm:inline">
                a tu lado
              </span>
            </h2>

            <p className="mt-4 text-[16px] sm:text-[18px] text-white/90 leading-relaxed max-w-xl">
              Sin trámites complicados, sin costo y sin exigencias sobre tu recuperación. Puedes entrar ahora mismo o regresar en el momento exacto en que sientas la necesidad de ser acompañada.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenGuestAccess}
                className="w-full sm:w-auto px-8 py-4 text-base font-bold text-[#001E44] bg-[#EF8E11] hover:bg-[#D87B00] active:scale-[0.98] rounded-xl shadow-md transition-all text-center whitespace-nowrap cursor-pointer"
              >
                Entrar a la app
              </button>

              <button
                type="button"
                onClick={onExploreLibrary}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl transition-all text-center whitespace-nowrap cursor-pointer"
              >
                <span>Explorar la biblioteca</span>
                <ArrowRight className="w-4 h-4 text-[#1A95BA]" />
              </button>
            </div>

            <p className="mt-6 text-xs text-white/70">
              Acceso libre y confidencial las 24 horas para utilizar tus herramientas a tu propio ritmo.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
