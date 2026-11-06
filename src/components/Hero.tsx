import React from 'react';
import { ArrowRight, ShieldCheck, Heart, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenGuestAccess: () => void;
  onExploreLibrary: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGuestAccess, onExploreLibrary }) => {
  return (
    <section id="inicio" className="bg-[#002E67] text-white pt-10 pb-16 lg:py-20 overflow-hidden relative">
      
      {/* Subtle background decorative geometry in Sands brand tones */}
      <div 
        aria-hidden="true" 
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1A95BA]/15 rounded-full blur-3xl pointer-events-none -z-0" 
      />
      <div 
        aria-hidden="true" 
        className="absolute -bottom-20 left-10 w-[400px] h-[400px] bg-[#EF8E11]/10 rounded-full blur-3xl pointer-events-none -z-0" 
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Core Message & Call to Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Sands Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1A95BA]/25 border border-[#1A95BA]/40 text-[#1A95BA] text-xs sm:text-sm font-bold tracking-wide uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#EF8E11]" />
              <span>Acompañamiento emocional perinatal · Perú</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-[34px] sm:text-[44px] md:text-[52px] font-extrabold leading-[1.15] tracking-tight text-white max-w-xl text-balance">
              Siempre a tu lado.{' '}
              <span className="text-[#1A95BA] block sm:inline">
                Aquí también se trata de ti.
              </span>
            </h1>

            {/* Core Explanation */}
            <p className="mt-6 text-[17px] sm:text-[18px] text-white/90 leading-relaxed max-w-xl">
              Plataforma gratuita y confidencial de apoyo emocional durante el embarazo, el posparto y la pérdida gestacional o neonatal en Perú. Porque mientras los cuidados suelen volcarse exclusivamente en el bebé, tu cuerpo, tu duelo, tus dudas y tu silencio merecen un refugio seguro.
            </p>

            {/* Sands-style High Contrast CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenGuestAccess}
                className="px-8 py-4 text-[16px] font-bold text-[#001E44] bg-[#EF8E11] hover:bg-[#D87B00] active:scale-[0.98] rounded-xl shadow-md shadow-black/20 transition-all text-center whitespace-nowrap cursor-pointer"
              >
                Entrar sin crear cuenta
              </button>

              <button
                type="button"
                onClick={onExploreLibrary}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-[16px] font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl transition-all whitespace-nowrap cursor-pointer"
              >
                <span>Explorar la biblioteca</span>
                <ArrowRight className="w-4 h-4 text-[#1A95BA]" />
              </button>
            </div>

            {/* Trust Indicators Strip */}
            <div className="mt-10 pt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#1A95BA] shrink-0" />
                <span>100% Gratuito en Perú</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#1A95BA] shrink-0" />
                <span>Sin usar tu nombre real</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
                <CheckCircle2 className="w-4 h-4 text-[#1A95BA] shrink-0" />
                <span>Cifrado declarado</span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Photography with Sands Brand Frame (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              
              {/* Outer decorative brand frame */}
              <div className="relative p-2.5 bg-white/10 rounded-2xl border border-white/20 shadow-2xl backdrop-blur-xs">
                <div className="overflow-hidden rounded-xl aspect-[4/3] sm:aspect-[3/4] bg-[#001E44]">
                  <img
                    src="/src/assets/images/sands_hero_support_1793937713904.jpg"
                    alt="Mujer en momento de calma junto a la ventana con una taza tibia, acompañada con calidez"
                    className="w-full h-full object-cover object-center transform hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="eager"
                  />
                </div>

                {/* Sands-style overlay badge */}
                <div className="absolute -bottom-4 -left-4 bg-[#FFFFFF] text-[#002E67] p-3 rounded-xl border border-[#002E67]/15 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EF8E11]/20 flex items-center justify-center text-[#EF8E11] shrink-0">
                    <Heart className="w-5 h-5 fill-[#EF8E11]" />
                  </div>
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider block text-[#002E67]">
                      Espacio Seguro
                    </span>
                    <span className="text-[11px] font-semibold text-[#475569]">
                      Sin juicios ni expectativas
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
