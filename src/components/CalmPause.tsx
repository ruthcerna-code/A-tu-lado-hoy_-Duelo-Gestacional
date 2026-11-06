import React, { useState, useEffect } from 'react';
import { Wind, Play, Pause, RotateCcw } from 'lucide-react';

export const CalmPause: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<'inhala' | 'sosten' | 'exhala' | 'pausa'>('inhala');
  const [countdown, setCountdown] = useState(4);

  // Breathing cycle: Inhala (4s), Sostén (4s), Exhala (4s), Pausa (4s)
  useEffect(() => {
    if (!isActive) {
      setPhase('inhala');
      setCountdown(4);
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev > 1) return prev - 1;

        if (phase === 'inhala') {
          setPhase('sosten');
          return 4;
        } else if (phase === 'sosten') {
          setPhase('exhala');
          return 4;
        } else if (phase === 'exhala') {
          setPhase('pausa');
          return 4;
        } else {
          setPhase('inhala');
          return 4;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive, phase]);

  const getPhaseInstruction = () => {
    switch (phase) {
      case 'inhala':
        return 'Inhala despacio por la nariz... siente el aire llenar tu pecho';
      case 'sosten':
        return 'Sostén con gentileza... permanece en quietud sin tensionar los hombros';
      case 'exhala':
        return 'Exhala suavemente por la boca... suelta el peso acumulado';
      case 'pausa':
        return 'Reposa un instante... tu cuerpo sabe encontrar su propio equilibrio';
    }
  };

  const getPhaseScale = () => {
    if (!isActive) return 'scale-90 opacity-70';
    switch (phase) {
      case 'inhala':
        return 'scale-115 opacity-95 transition-all duration-[4000ms] ease-out';
      case 'sosten':
        return 'scale-115 opacity-90 transition-all duration-300';
      case 'exhala':
        return 'scale-85 opacity-65 transition-all duration-[4000ms] ease-in';
      case 'pausa':
        return 'scale-85 opacity-60 transition-all duration-300';
    }
  };

  return (
    <section id="pausa" className="py-12 md:py-20 bg-[#002E67] text-white relative overflow-hidden scroll-mt-20">
      
      {/* Background glow in Sands teal */}
      <div 
        aria-hidden="true" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#1A95BA]/20 rounded-full blur-3xl pointer-events-none" 
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="max-w-2xl mx-auto flex flex-col items-center text-center">
          
          {/* Header chip */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#1A95BA]/25 border border-[#1A95BA]/40 text-[#1A95BA] text-xs sm:text-sm font-bold tracking-wider uppercase mb-4">
            <Wind className="w-4 h-4 text-[#1A95BA]" />
            <span>Pausa de respiración consciente</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight text-balance">
            Tómate un momento para respirar
          </h2>

          <p className="mt-3 text-[16px] sm:text-[17px] text-white/90 leading-relaxed max-w-lg">
            No tienes que resolverlo todo hoy. Despega la lengua del paladar, baja los hombros y acompaña tu cuerpo durante unos segundos.
          </p>

          {/* Sands Animated Breathing Circle */}
          <div className="my-10 relative flex items-center justify-center w-56 h-56 sm:w-64 sm:h-64">
            
            {/* Outer halo */}
            <div 
              className={`absolute inset-0 rounded-full bg-[#1A95BA]/25 border border-[#1A95BA]/40 ${
                isActive ? getPhaseScale() : 'animate-sands-breath'
              }`} 
            />
            
            {/* Middle ring */}
            <div 
              className={`absolute inset-4 rounded-full bg-[#1A95BA]/35 border border-[#1A95BA]/60 transition-transform duration-700 ${
                isActive && (phase === 'inhala' || phase === 'sosten') ? 'scale-105' : 'scale-95'
              }`} 
            />

            {/* Core circle */}
            <div className="relative z-10 w-40 h-40 rounded-full bg-white text-[#002E67] shadow-xl flex flex-col items-center justify-center p-4 text-center border-2 border-[#1A95BA]">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#1A95BA]">
                {isActive ? phase : 'Calma'}
              </span>
              <span className="text-4xl font-extrabold text-[#002E67] mt-1 tabular-nums">
                {isActive ? countdown : '4:4'}
              </span>
              <span className="text-xs font-semibold text-[#475569] mt-0.5">
                {isActive ? 'segundos' : 'respira'}
              </span>
            </div>
          </div>

          {/* Instruction line */}
          <div className="min-h-[48px] flex items-center justify-center mb-6 px-4">
            <p className="text-[15px] sm:text-[16px] font-semibold text-white/95 text-balance">
              {isActive ? getPhaseInstruction() : 'Presiona el botón para iniciar el ritmo de respiración guiada.'}
            </p>
          </div>

          {/* Interactive Control Buttons */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsActive(!isActive)}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl bg-[#EF8E11] hover:bg-[#D87B00] active:scale-[0.98] text-[#001E44] font-bold text-base shadow-sm transition-all cursor-pointer"
            >
              {isActive ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pausar respiración</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5 fill-[#001E44]" />
                  <span>Tomar una pausa</span>
                </>
              )}
            </button>

            {isActive && (
              <button
                type="button"
                onClick={() => {
                  setIsActive(false);
                  setPhase('inhala');
                  setCountdown(4);
                }}
                className="p-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white shadow-xs transition-colors cursor-pointer"
                title="Reiniciar ejercicio"
                aria-label="Reiniciar ejercicio"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
