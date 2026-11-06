import React, { useState } from 'react';
import { X, PhoneCall, Heart, MessageSquare, AlertCircle, Check, ExternalLink } from 'lucide-react';

interface EmergencyResourcesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EmergencyResourcesModal: React.FC<EmergencyResourcesModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [trustedName, setTrustedName] = useState('');
  const [trustedPhone, setTrustedPhone] = useState('');
  const [savedContact, setSavedContact] = useState(false);
  const [messageCopied, setMessageCopied] = useState(false);

  if (!isOpen) return null;

  const defaultSosMessage = `Hola${trustedName ? ' ' + trustedName : ''}, necesito conversar contigo un momento con calma. ¿Podrías llamarme o escribirme cuando puedas?`;

  const handleCopyMessage = () => {
    navigator.clipboard?.writeText(defaultSosMessage);
    setMessageCopied(true);
    setTimeout(() => setMessageCopied(false), 2500);
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (trustedPhone.trim()) {
      setSavedContact(true);
      setTimeout(() => setSavedContact(false), 3000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001E44]/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#002E67]/20 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#002E67]/70 hover:text-[#002E67] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Cerrar recursos de ayuda"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#002E67] text-white flex items-center justify-center shrink-0">
            <PhoneCall className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider block">
              Atención inmediata en el Perú
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002E67]">
              Líneas de ayuda y apoyo en crisis
            </h3>
          </div>
        </div>

        {/* Prominent Safety Notice in Sands Amber Style */}
        <div className="p-4 rounded-xl bg-[#FFF9F2] border-2 border-[#EF8E11] mb-6 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#EF8E11] shrink-0 mt-0.5" />
          <p className="text-sm text-[#001E44] font-medium leading-relaxed">
            Si te encuentras ante una urgencia de salud física, desborde severo o en riesgo inmediato, comunícate sin demora con los servicios gratuitos del Estado peruano o acude al centro de salud más cercano.
          </p>
        </div>

        {/* Section 1: Official Peru Helplines in Sands UK Cards */}
        <div className="mb-8">
          <h4 className="text-lg font-bold text-[#002E67] mb-3">
            Líneas telefónicas oficiales y gratuitas en Perú
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Line 1: Linea 113 Opcion 5 */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#1A95BA] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider">MINSA · Salud Mental</span>
                  <span className="text-[11px] font-bold text-white bg-[#1A95BA] px-2 py-0.5 rounded">Gratuito 24h</span>
                </div>
                <div className="text-2xl font-extrabold text-[#002E67]">
                  Línea 113 <span className="text-sm font-semibold text-[#475569]">(Opción 5)</span>
                </div>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  Orientación psicológica gratuita a nivel nacional desde cualquier teléfono fijo o celular en Perú.
                </p>
              </div>
              <a
                href="tel:113"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#002E67] text-white text-xs font-bold hover:bg-[#001E44] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar al 113</span>
              </a>
            </div>

            {/* Line 2: Linea 100 MIMP */}
            <div className="p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#EF8E11] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#EF8E11] uppercase tracking-wider">MIMP · Contención</span>
                  <span className="text-[11px] font-bold text-[#001E44] bg-[#EF8E11] px-2 py-0.5 rounded">Gratuito 24h</span>
                </div>
                <div className="text-2xl font-extrabold text-[#002E67]">
                  Línea 100
                </div>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  Apoyo y soporte emocional del Ministerio de la Mujer y Poblaciones Vulnerables ante situaciones de crisis.
                </p>
              </div>
              <a
                href="tel:100"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#EF8E11] text-[#001E44] text-xs font-bold hover:bg-[#D87B00] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar al 100</span>
              </a>
            </div>

            {/* Line 3: SAMU 106 */}
            <div className="p-4 rounded-xl bg-white border border-[#002E67]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Urgencias Médicas</span>
                  <span className="text-[11px] font-semibold text-[#002E67] bg-[#E2E8F0] px-2 py-0.5 rounded">Gratuito</span>
                </div>
                <div className="text-xl font-bold text-[#002E67]">
                  SAMU 106
                </div>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  Atención médica de urgencias del Ministerio de Salud del Perú para emergencias de salud.
                </p>
              </div>
              <a
                href="tel:106"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#F1F5F9] text-[#002E67] text-xs font-bold hover:bg-[#E2E8F0] transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Llamar al 106</span>
              </a>
            </div>

            {/* Line 4: CSMC MINSA */}
            <div className="p-4 rounded-xl bg-white border border-[#002E67]/15 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#475569] uppercase tracking-wider">Presencial en Perú</span>
                </div>
                <div className="text-xl font-bold text-[#002E67]">
                  Centros de Salud Mental
                </div>
                <p className="text-xs text-[#475569] mt-1 leading-relaxed">
                  Red de Centros de Salud Mental Comunitaria (CSMC) de MINSA en distritos de Lima y regiones del país.
                </p>
              </div>
              <a
                href="https://www.gob.pe/institucion/minsa/campa%C3%B1as/8118-centros-de-salud-mental-comunitaria"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#F1F5F9] text-[#002E67] text-xs font-bold hover:bg-[#E2E8F0] transition-colors"
              >
                <span>Ver sedes oficiales</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#1A95BA]" />
              </a>
            </div>

          </div>
        </div>

        {/* Section 2: Contacto de Confianza */}
        <div className="p-5 rounded-xl bg-[#F8FAFC] border-2 border-[#002E67]/15">
          <div className="flex items-center gap-2.5 mb-2">
            <Heart className="w-5 h-5 text-[#EF8E11] fill-[#EF8E11]" />
            <h4 className="text-lg font-bold text-[#002E67]">
              Contacto de confianza
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-4">
            Ten a la mano el número de tu persona de mayor cercanía (madre, hermana, amiga, pareja) y un mensaje respetuoso preparado para avisarle sin tener que dar explicaciones complejas.
          </p>

          <form onSubmit={handleSaveContact} className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div>
              <label className="block text-xs font-bold text-[#002E67] mb-1">
                Nombre de confianza
              </label>
              <input
                type="text"
                placeholder="Ej. Ana, Mamá, Lucía..."
                value={trustedName}
                onChange={(e) => setTrustedName(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#002E67]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A95BA]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#002E67] mb-1">
                Teléfono o WhatsApp
              </label>
              <input
                type="tel"
                placeholder="Ej. 987 654 321"
                value={trustedPhone}
                onChange={(e) => setTrustedPhone(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-lg border border-[#002E67]/20 bg-white focus:outline-none focus:ring-2 focus:ring-[#1A95BA]"
              />
            </div>
          </form>

          {/* Quick Message Box */}
          <div className="p-3.5 rounded-lg bg-white border border-[#002E67]/15 mb-3">
            <span className="text-[11px] font-bold text-[#1A95BA] uppercase tracking-wider block mb-1">
              Mensaje preparado para enviar:
            </span>
            <p className="text-xs text-[#002E67] italic font-medium">
              "{defaultSosMessage}"
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleCopyMessage}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#E2E8F0] hover:bg-[#CBD5E1] text-[#002E67] text-xs font-bold transition-colors cursor-pointer"
            >
              {messageCopied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <MessageSquare className="w-3.5 h-3.5 text-[#1A95BA]" />}
              <span>{messageCopied ? '¡Mensaje copiado!' : 'Copiar mensaje'}</span>
            </button>

            {trustedPhone && (
              <a
                href={`https://wa.me/51${trustedPhone.replace(/\D/g, '')}?text=${encodeURIComponent(defaultSosMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#EF8E11] hover:bg-[#D87B00] text-[#001E44] text-xs font-bold transition-colors"
              >
                <span>Enviar por WhatsApp a {trustedName || 'contacto'}</span>
              </a>
            )}
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#002E67] hover:bg-[#001E44] text-white text-sm font-bold transition-colors cursor-pointer"
          >
            Cerrar recursos
          </button>
        </div>

      </div>
    </div>
  );
};
