import React from 'react';
import { Sprout, HeartHandshake, Feather, ArrowRight } from 'lucide-react';

export const WhoWeAccompany: React.FC = () => {
  return (
    <section id="etapas" className="py-12 md:py-20 bg-[#F8FAFC] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A95BA] uppercase mb-2">
            <span>Acompañamiento cercano</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002E67] tracking-tight text-balance">
            Para ti, en el momento que estés viviendo
          </h2>
          <p className="mt-3 text-[16px] sm:text-[17px] text-[#475569] leading-relaxed">
            Cada vivencia perinatal es personal e irrepetible. No hay una forma correcta ni una emoción obligatoria: el agotamiento, la alegría contenida, la tristeza profunda o la incertidumbre tienen cabida en este refugio, sin presiones ni plazos impuestos.
          </p>
        </div>

        {/* Sands UK 2-Column Feature: Editorial Image + 3 Support Pathway Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Documentary Caring Hands Image (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl overflow-hidden bg-white border border-[#002E67]/10 shadow-xs p-6">
            <div className="rounded-xl overflow-hidden aspect-[4/3] bg-[#002E67]/5 mb-5">
              <img
                src="/src/assets/images/sands_community_care_1793937712849.jpg"
                alt="Manos sosteniéndose en señal de apoyo empático y solidario ante el dolor o la duda"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div>
              <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider block mb-1">
                La fuerza de no estar sola
              </span>
              <h3 className="text-xl font-bold text-[#002E67] leading-snug">
                Nadie debería atravesar este camino en soledad
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Tanto si buscas un instante de desahogo en tu diario íntimo como si necesitas escribirle a nuestras acompañantes, este espacio respeta tu ritmo.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Structured Stage Cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            
            {/* Stage 1: Embarazo */}
            <div className="sands-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-l-[#1A95BA]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1A95BA]/15 text-[#1A95BA] flex items-center justify-center shrink-0">
                  <Sprout className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002E67]">
                    Embarazo
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Dudas sobre el cuerpo, temores al parto, ambivalencia y la necesidad de pausar sin exigencias de optimismo constante.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider shrink-0 hidden sm:inline">
                Etapa 01
              </span>
            </div>

            {/* Stage 2: Posparto */}
            <div className="sands-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-l-[#EF8E11]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#EF8E11]/15 text-[#EF8E11] flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002E67]">
                    Posparto y puerperio
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Agotamiento extremo, soledad invisible, cambios hormonales y el derecho a expresar que la crianza puede resultar abrumadora.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#EF8E11] uppercase tracking-wider shrink-0 hidden sm:inline">
                Etapa 02
              </span>
            </div>

            {/* Stage 3: Pérdida gestacional o neonatal */}
            <div className="sands-card p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-l-4 border-l-[#002E67]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#002E67]/10 text-[#002E67] flex items-center justify-center shrink-0">
                  <Feather className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#002E67]">
                    Pérdida gestacional o neonatal
                  </h3>
                  <p className="text-sm text-[#475569] mt-1 leading-relaxed">
                    Honrar la memoria, nombrar la ausencia y validar el duelo por una partida temprana en cualquier semana de gestación o tras nacer.
                  </p>
                </div>
              </div>
              <span className="text-xs font-bold text-[#002E67] uppercase tracking-wider shrink-0 hidden sm:inline">
                Etapa 03
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
