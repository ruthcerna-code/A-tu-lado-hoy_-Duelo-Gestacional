import React, { useState } from 'react';
import { X, UserX, Shield, ArrowRight, Check } from 'lucide-react';

interface GuestAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEnterAsGuest: (pseudonym: string) => void;
}

export const GuestAccessModal: React.FC<GuestAccessModalProps> = ({
  isOpen,
  onClose,
  onEnterAsGuest,
}) => {
  const [selectedMode, setSelectedMode] = useState<'anon' | 'pseudonym' | 'account'>('anon');
  const [pseudonym, setPseudonym] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleContinue = () => {
    const finalName = selectedMode === 'pseudonym' && pseudonym.trim() ? pseudonym.trim() : 'Compañera';
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onEnterAsGuest(finalName);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001E44]/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#002E67]/20 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#002E67]/70 hover:text-[#002E67] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header in Sands Style */}
        <div className="flex items-center gap-3.5 mb-3">
          <div className="w-12 h-12 rounded-xl bg-[#002E67] flex items-center justify-center text-white">
            <UserX className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider block">
              Acceso seguro y sin registro
            </span>
            <h3 className="text-2xl font-extrabold text-[#002E67]">
              Entrar a A Tu Lado Hoy
            </h3>
          </div>
        </div>

        <p className="text-sm text-[#475569] leading-relaxed mb-6">
          Creemos que el acompañamiento debe ser accesible sin barreras ni exigencias de datos personales. Elige la modalidad con la que te sientas más cómoda:
        </p>

        {isSuccess ? (
          <div className="p-8 rounded-xl bg-[#E1F2F6] border-2 border-[#1A95BA] text-center my-6">
            <div className="w-12 h-12 rounded-full bg-[#1A95BA] text-white mx-auto flex items-center justify-center mb-3">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="text-xl font-bold text-[#002E67]">
              Bienvenida a tu espacio
            </h4>
            <p className="text-sm text-[#475569] mt-1">
              Entrando sin registrar datos personales...
            </p>
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            
            {/* Option 1: 100% Anonymous */}
            <div
              onClick={() => setSelectedMode('anon')}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                selectedMode === 'anon'
                  ? 'bg-[#F4F9FA] border-[#1A95BA] shadow-xs'
                  : 'bg-white border-[#002E67]/15 hover:border-[#1A95BA]/50'
              }`}
            >
              <input
                type="radio"
                name="entryMode"
                checked={selectedMode === 'anon'}
                onChange={() => setSelectedMode('anon')}
                className="mt-1 text-[#1A95BA] focus:ring-[#1A95BA]"
              />
              <div>
                <h4 className="text-base font-bold text-[#002E67]">
                  Entrar de forma anónima
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Sin nombre, sin correo. Tus herramientas se activan de inmediato en este dispositivo.
                </p>
              </div>
            </div>

            {/* Option 2: Pseudonym */}
            <div
              onClick={() => setSelectedMode('pseudonym')}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                selectedMode === 'pseudonym'
                  ? 'bg-[#F4F9FA] border-[#1A95BA] shadow-xs'
                  : 'bg-white border-[#002E67]/15 hover:border-[#1A95BA]/50'
              }`}
            >
              <input
                type="radio"
                name="entryMode"
                checked={selectedMode === 'pseudonym'}
                onChange={() => setSelectedMode('pseudonym')}
                className="mt-1 text-[#1A95BA] focus:ring-[#1A95BA]"
              />
              <div className="flex-1">
                <h4 className="text-base font-bold text-[#002E67]">
                  Usar un seudónimo protector
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Elige un alias con el que te sientas en paz (ej. Esperanza, Mar, Luna).
                </p>
                {selectedMode === 'pseudonym' && (
                  <div className="mt-3">
                    <input
                      type="text"
                      placeholder="Escribe tu seudónimo aquí..."
                      value={pseudonym}
                      onChange={(e) => setPseudonym(e.target.value)}
                      className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border-2 border-[#1A95BA] focus:outline-none"
                      autoFocus
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Option 3: Future account info */}
            <div
              onClick={() => setSelectedMode('account')}
              className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                selectedMode === 'account'
                  ? 'bg-[#F4F9FA] border-[#1A95BA] shadow-xs'
                  : 'bg-white border-[#002E67]/15 hover:border-[#1A95BA]/50'
              }`}
            >
              <input
                type="radio"
                name="entryMode"
                checked={selectedMode === 'account'}
                onChange={() => setSelectedMode('account')}
                className="mt-1 text-[#1A95BA] focus:ring-[#1A95BA]"
              />
              <div>
                <h4 className="text-base font-bold text-[#002E67]">
                  Crear una cuenta (opcional)
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                  Solo si deseas sincronizar y conservar tus registros en varios dispositivos.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* Buttons in Sands Style */}
        {!isSuccess && (
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-bold text-[#475569] hover:text-[#002E67] transition-colors"
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-[#EF8E11] hover:bg-[#D87B00] text-[#001E44] font-bold text-sm shadow-xs transition-all cursor-pointer"
            >
              <span>Ingresar ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-5 pt-4 border-t border-[#002E67]/10 flex items-center justify-center gap-2 text-xs text-[#475569]">
          <Shield className="w-3.5 h-3.5 text-[#1A95BA]" />
          <span>La plataforma declara el resguardo seguro y no solicita datos identificatorios</span>
        </div>

      </div>
    </div>
  );
};
