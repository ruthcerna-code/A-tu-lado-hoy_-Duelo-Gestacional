import React from 'react';
import { X, Scale, ExternalLink, FileText, Info } from 'lucide-react';

interface LawInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LawInfoModal: React.FC<LawInfoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001E44]/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#002E67]/20 shadow-2xl relative text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#002E67]/70 hover:text-[#002E67] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Cerrar información de la ley"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#002E67] text-white flex items-center justify-center shrink-0">
            <Scale className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider block">
              Marco legal en el Perú
            </span>
            <h3 className="text-2xl font-extrabold text-[#002E67]">
              Sección informativa: Ley N.º 32132
            </h3>
          </div>
        </div>

        {/* Informative Content strictly adhering to guidelines */}
        <div className="space-y-4 text-sm sm:text-base text-[#475569] leading-relaxed mb-6">
          <p>
            Esta sección de <strong className="font-bold text-[#002E67]">A Tu Lado Hoy</strong> tiene como propósito facilitar a las usuarias el acceso a la información oficial sobre la promulgación de la <strong className="font-bold text-[#002E67]">Ley N.º 32132</strong> en el ordenamiento jurídico peruano.
          </p>

          <div className="p-4 rounded-xl bg-[#F4F9FA] border-2 border-[#1A95BA]/40">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-[#1A95BA] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#002E67]">
                  Aviso de orientación informativa
                </h4>
                <p className="text-xs text-[#475569] leading-relaxed mt-1">
                  A Tu Lado Hoy no realiza interpretaciones de los alcances legales de la Ley N.º 32132 ni brinda asesoría jurídica particular. Nuestro rol consiste en informar sobre la existencia de esta norma y orientar hacia las fuentes oficiales del Estado peruano.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#002E67]/15">
            <h4 className="text-sm font-bold text-[#002E67] flex items-center gap-2 mb-2">
              <FileText className="w-4 h-4 text-[#EF8E11]" />
              <span>Publicación oficial</span>
            </h4>
            <p className="text-xs text-[#475569] leading-relaxed">
              La norma se encuentra formalmente publicada en el Diario Oficial <em>El Peruano</em> y en el archivo normativo del Congreso de la República del Perú.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
          <a
            href="https://busquedas.elperuano.pe/normaslegales/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#002E67] text-xs font-bold border border-[#002E67]/15 transition-colors"
          >
            <span>Consultar en El Peruano</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#1A95BA]" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#002E67] hover:bg-[#001E44] text-white text-sm font-bold transition-colors cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
