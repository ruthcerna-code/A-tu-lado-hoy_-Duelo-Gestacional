import React from 'react';
import { ShieldCheck, UserX, KeyRound, Trash2, Info } from 'lucide-react';

interface PrivacyAndControlProps {
  onOpenPrivacyDetails: () => void;
}

export const PrivacyAndControl: React.FC<PrivacyAndControlProps> = ({ onOpenPrivacyDetails }) => {
  return (
    <section id="privacidad" className="py-12 md:py-20 bg-white border-t border-[#002E67]/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A95BA] uppercase mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Privacidad, control y transparencia</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002E67] tracking-tight text-balance">
            Tú decides qué compartes y hasta dónde llegar
          </h2>
          <p className="mt-3 text-[16px] sm:text-[17px] text-[#475569] leading-relaxed">
            Sin barreras de registro obligatorio ni requisitos de revelar tu identidad. Cuidamos cada aspecto para que este espacio sea un refugio seguro.
          </p>
        </div>

        {/* 4 Sands-Style Structured Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Tile 1: Entrar sin cuenta */}
          <div className="sands-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#002E67]/10 text-[#002E67] flex items-center justify-center mb-4">
                <UserX className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-[#002E67] leading-snug">
                Entrar sin cuenta
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Accede de inmediato sin correos obligatorios ni contraseñas. Si deseas conservar tus registros a largo plazo en varios dispositivos, existe la opción de crear una cuenta opcional.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#002E67]/10 text-xs font-bold text-[#1A95BA]">
              Acceso directo e irrestricto
            </div>
          </div>

          {/* Tile 2: Sin usar tu nombre real */}
          <div className="sands-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#1A95BA]/15 text-[#1A95BA] flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-[#002E67] leading-snug">
                Sin usar tu nombre real
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                No solicitamos tu documento de identidad ni tu nombre verdadero. Puedes utilizar un seudónimo protector o navegar en completo anonimato.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#002E67]/10 text-xs font-bold text-[#1A95BA]">
              Identidad 100% protegida
            </div>
          </div>

          {/* Tile 3: Cifrado declarado por la plataforma */}
          <div className="sands-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#002E67]/10 text-[#002E67] flex items-center justify-center mb-4">
                <KeyRound className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-[#002E67] leading-snug">
                Cifrado declarado por la plataforma
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Los datos que decides escribir son tratados con protocolos de cifrado declarados e implementados en la plataforma para salvaguardar tu diario íntimo y calendario.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#002E67]/10 text-xs font-bold text-[#475569]">
              Característica declarada
            </div>
          </div>

          {/* Tile 4: Descargar o eliminar tu información */}
          <div className="sands-card p-6 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#EF8E11]/15 text-[#EF8E11] flex items-center justify-center mb-4">
                <Trash2 className="w-6 h-6 stroke-[2]" />
              </div>
              <h3 className="text-lg font-bold text-[#002E67] leading-snug">
                Descargar o eliminar tu información
              </h3>
              <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                Tus palabras te pertenecen en todo momento. Cuentas con herramientas directas para descargar una copia o borrar definitivamente tus notas cuando tú lo decidas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#002E67]/10 text-xs font-bold text-[#EF8E11]">
              Control absoluto del usuario
            </div>
          </div>

        </div>

        {/* Sands UK Honest Transparency Statement */}
        <div className="mt-8 p-6 rounded-2xl bg-[#F8FAFC] border border-[#002E67]/15 flex items-start gap-4">
          <div className="w-9 h-9 rounded-xl bg-[#002E67] text-white flex items-center justify-center shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="text-base font-bold text-[#002E67]">
              Claridad y honestidad sobre la seguridad digital
            </h4>
            <p className="mt-1 text-sm text-[#475569] leading-relaxed">
              El cifrado y las opciones de descarga o eliminación son características técnicas declaradas e implementadas por la plataforma para proteger tu estancia. No prometemos confidencialidad absoluta en entornos digitales ni presentamos nuestra seguridad como certificada o auditada por entidades externas. Te invitamos a compartir únicamente aquello con lo que te sientas plenamente cómoda.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
