import React from 'react';
import { BookOpen, Scale, ArrowRight, Heart, Feather, RefreshCw, FileText } from 'lucide-react';

interface LibraryAndRightsProps {
  onOpenLibrary: (category?: string) => void;
  onOpenLawInfo: () => void;
}

export const LibraryAndRights: React.FC<LibraryAndRightsProps> = ({
  onOpenLibrary,
  onOpenLawInfo,
}) => {
  return (
    <section id="biblioteca" className="py-12 md:py-20 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column (7 cols): Sands-Style Biblioteca Hub */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white border border-[#002E67]/15 shadow-xs">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A95BA] uppercase mb-2">
                <BookOpen className="w-4 h-4" />
                <span>Centro de información y lectura</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002E67] tracking-tight">
                Biblioteca perinatal de apoyo
              </h2>

              <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
                Artículos, reflexiones y recursos sobre salud emocional y duelo, elaborados para brindar consuelo, información honesta y acompañamiento.
              </p>

              {/* 3 Topic Cards */}
              <div className="mt-6 space-y-3">
                
                {/* Topic 1: Bienestar emocional */}
                <button
                  type="button"
                  onClick={() => onOpenLibrary('bienestar')}
                  className="w-full text-left p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#002E67]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#1A95BA]/15 text-[#1A95BA] flex items-center justify-center shrink-0">
                      <Heart className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#002E67] group-hover:text-[#1A95BA] transition-colors">
                        Bienestar emocional
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569]">
                        Validar el cansancio, límites familiares y el derecho a pausar.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A95BA] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>

                {/* Topic 2: Duelo gestacional y perinatal */}
                <button
                  type="button"
                  onClick={() => onOpenLibrary('duelo')}
                  className="w-full text-left p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#002E67]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#002E67]/10 text-[#002E67] flex items-center justify-center shrink-0">
                      <Feather className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#002E67] group-hover:text-[#1A95BA] transition-colors">
                        Duelo gestacional y perinatal
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569]">
                        Nombrar la pérdida, el valor de la memoria y la soledad del duelo.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A95BA] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>

                {/* Topic 3: Posparto */}
                <button
                  type="button"
                  onClick={() => onOpenLibrary('posparto')}
                  className="w-full text-left p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#F1F5F9] border border-[#002E67]/10 transition-all flex items-center justify-between group cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#EF8E11]/15 text-[#EF8E11] flex items-center justify-center shrink-0">
                      <RefreshCw className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#002E67] group-hover:text-[#1A95BA] transition-colors">
                        Posparto y adaptación
                      </h3>
                      <p className="text-xs sm:text-sm text-[#475569]">
                        Transformación de la identidad, noches en vela y recuperación.
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[#1A95BA] group-hover:translate-x-1 transition-transform shrink-0 ml-2" />
                </button>

              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#002E67]/10">
              <button
                type="button"
                onClick={() => onOpenLibrary()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#002E67] hover:bg-[#00224D] text-white font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                <span>Explorar la biblioteca completa</span>
                <ArrowRight className="w-4 h-4 text-[#1A95BA]" />
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Sands UK Signature Deep Navy Card: "Tus derechos en Perú" */}
          <div 
            id="derechos"
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#002E67] text-white border border-[#1A95BA]/30 shadow-md relative overflow-hidden scroll-mt-24"
          >
            {/* Subtle brand glow in teal */}
            <div 
              aria-hidden="true" 
              className="absolute -top-10 -right-10 w-44 h-44 bg-[#1A95BA]/25 rounded-full blur-2xl pointer-events-none" 
            />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#1A95BA]/30 text-[#1A95BA] text-xs font-bold tracking-wider uppercase mb-4 border border-[#1A95BA]/30">
                <Scale className="w-3.5 h-3.5" />
                <span>Marco legal peruano</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                Tus derechos en Perú
              </h2>

              <p className="mt-4 text-sm sm:text-base text-white/90 leading-relaxed">
                El acompañamiento integral incluye conocer el marco de respaldo existente en el país. Contamos con una sección dedicada exclusivamente a brindar información sobre la promulgación de la <strong className="font-bold text-[#1A95BA]">Ley N.º 32132</strong> en el territorio peruano.
              </p>

              <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/15">
                <div className="flex items-start gap-3">
                  <FileText className="w-4 h-4 text-[#EF8E11] shrink-0 mt-0.5" />
                  <p className="text-xs text-white/85 leading-relaxed">
                    Accede al espacio informativo sobre la Ley N.º 32132, con referencias a su publicación oficial en las normas legales del Diario Oficial <em>El Peruano</em>.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <button
                type="button"
                onClick={onOpenLawInfo}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#EF8E11] hover:bg-[#D87B00] text-[#001E44] font-bold text-sm shadow-xs transition-colors cursor-pointer"
              >
                <span>Conocer la ley</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
