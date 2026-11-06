import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  Calendar, 
  Wind, 
  FileCheck2, 
  MessageCircleHeart, 
  PhoneCall, 
  BookOpen, 
  Scale, 
  Check, 
  Send, 
  Trash2, 
  AlertCircle 
} from 'lucide-react';
import { ToolItem } from './ToolsGrid';

interface ToolDetailModalProps {
  tool: ToolItem | null;
  onClose: () => void;
  onOpenCalmSection: () => void;
  onOpenHelpResources: () => void;
  onOpenLibrary: () => void;
  onOpenLawInfo: () => void;
}

export const ToolDetailModal: React.FC<ToolDetailModalProps> = ({
  tool,
  onClose,
  onOpenCalmSection,
  onOpenHelpResources,
  onOpenLibrary,
  onOpenLawInfo,
}) => {
  const [journalNote, setJournalNote] = useState('');
  const [journalSaved, setJournalSaved] = useState(false);
  const [selectedMood, setSelectedMood] = useState<string>('En calma');
  const [supportMessage, setSupportMessage] = useState('');
  const [supportSent, setSupportSent] = useState(false);

  if (!tool) return null;

  const Icon = tool.icon;
  const isPrivate = tool.badgeType === 'private';
  const isTeam = tool.badgeType === 'team';
  const isOrientation = tool.badgeType === 'orientation';

  const handleSaveJournal = () => {
    if (journalNote.trim()) {
      setJournalSaved(true);
      setTimeout(() => setJournalSaved(false), 3000);
    }
  };

  const handleSendSupport = (e: React.FormEvent) => {
    e.preventDefault();
    if (supportMessage.trim()) {
      setSupportSent(true);
      setTimeout(() => {
        setSupportSent(false);
        setSupportMessage('');
      }, 3500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001E44]/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="w-full max-w-xl bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#002E67]/20 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#002E67]/70 hover:text-[#002E67] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Cerrar vista de herramienta"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-5">
          <div 
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              isPrivate 
                ? 'bg-[#002E67] text-white shadow-xs'
                : isTeam
                ? 'bg-[#EF8E11] text-[#001E44] shadow-xs'
                : isOrientation
                ? 'bg-[#1A95BA] text-white shadow-xs'
                : 'bg-[#F1F5F9] text-[#002E67]'
            }`}
          >
            <Icon className="w-6 h-6 stroke-[2]" />
          </div>

          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider">
                Herramienta interactiva
              </span>
              {isPrivate && (
                <span className="text-[11px] font-bold text-[#002E67] bg-[#E2E8F0] px-2 py-0.5 rounded uppercase">
                  Solo tuyo
                </span>
              )}
              {isTeam && (
                <span className="text-[11px] font-bold text-[#9E5700] bg-[#FEF3E2] px-2 py-0.5 rounded uppercase">
                  Canal con el equipo
                </span>
              )}
            </div>
            <h3 className="text-2xl font-extrabold text-[#002E67]">
              {tool.name}
            </h3>
          </div>
        </div>

        {/* Differentiated Notice Banners in Sands Style */}
        {isPrivate && (
          <div className="p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#002E67] mb-5">
            <div className="flex items-start gap-3">
              <Lock className="w-5 h-5 text-[#002E67] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#002E67]">
                  Solo para ti
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">
                  Tus notas son privadas e íntimas. Nadie más tiene acceso a lo que escribes aquí, ni siquiera el equipo de la plataforma.
                </p>
              </div>
            </div>
          </div>
        )}

        {isTeam && (
          <div className="p-4 rounded-xl bg-[#FFF9F2] border-2 border-[#EF8E11] mb-5">
            <div className="flex items-start gap-3">
              <MessageCircleHeart className="w-5 h-5 text-[#EF8E11] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#001E44]">
                  Para escribirle al equipo
                </h4>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mt-0.5">
                  A diferencia de tu diario privado, este canal es leído y respondido con calidez y respeto por nuestras acompañantes.
                </p>
              </div>
            </div>
          </div>
        )}

        {isOrientation && (
          <div className="p-4 rounded-xl bg-[#E1F2F6] border-2 border-[#1A95BA] mb-5">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-[#0E627B] shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-[#0E627B]">
                  Una orientación, no un diagnóstico
                </h4>
                <p className="text-xs sm:text-sm text-[#0E627B] leading-relaxed mt-0.5">
                  La Escala de Edimburgo (EPDS) es un instrumento de reflexión sobre tu bienestar anímico. No sustituye la consulta médica ni psicológica especializada.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Dynamic Tool Interactive Demonstration Body */}
        <div className="space-y-4 mb-6">
          
          {/* 1. DIARIO PERSONAL */}
          {tool.id === 'diario' && (
            <div className="space-y-3">
              <p className="text-sm text-[#475569] leading-relaxed">
                Escribe lo que necesites vaciar hoy. Puedes desahogarte, plasmar el cansancio o poner en palabras tu silencio.
              </p>
              <textarea
                rows={4}
                value={journalNote}
                onChange={(e) => setJournalNote(e.target.value)}
                placeholder="¿Cómo se siente tu cuerpo y tu mente en este momento?..."
                className="w-full p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#002E67]/20 text-sm text-[#002E67] focus:outline-none focus:border-[#002E67] resize-none"
              />
              <div className="flex flex-wrap items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleSaveJournal}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#002E67] text-white text-xs font-bold hover:bg-[#001E44] transition-colors cursor-pointer"
                >
                  <Check className="w-4 h-4" />
                  <span>{journalSaved ? 'Guardado en tu diario local' : 'Guardar en mi diario'}</span>
                </button>

                {journalNote && (
                  <button
                    type="button"
                    onClick={() => setJournalNote('')}
                    className="inline-flex items-center gap-1 text-xs text-[#475569] hover:text-red-700 transition-colors p-2 cursor-pointer font-semibold"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>Borrar borrador</span>
                  </button>
                )}
              </div>
            </div>
          )}

          {/* 2. REGISTRO Y CALENDARIO EMOCIONAL */}
          {tool.id === 'animo' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                Elige cómo te sientes hoy para registrarlo en tu calendario. No hay emociones incorrectas.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { label: 'En calma', icon: '🌿' },
                  { label: 'Agotada', icon: '☕' },
                  { label: 'Triste / En duelo', icon: '🌧️' },
                  { label: 'Abrumada', icon: '🌀' },
                  { label: 'Esperanzada', icon: '🌱' },
                  { label: 'Sensible', icon: '🌸' },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => setSelectedMood(item.label)}
                    className={`p-3 rounded-xl border-2 text-left flex items-center gap-2 transition-all cursor-pointer ${
                      selectedMood === item.label
                        ? 'bg-[#E1F2F6] border-[#1A95BA] text-[#002E67] font-bold'
                        : 'bg-white border-[#002E67]/10 text-[#475569] hover:border-[#1A95BA]/40'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="text-xs">{item.label}</span>
                  </button>
                ))}
              </div>

              {/* Calendar Simulation */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#002E67]/15">
                <span className="text-xs font-bold text-[#002E67] uppercase tracking-wider block mb-2">
                  Vista semanal de observación emocional
                </span>
                <div className="grid grid-cols-7 gap-1 text-center">
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
                    <div key={i} className="text-[11px] font-bold text-[#475569] py-1">
                      {d}
                    </div>
                  ))}
                  {[
                    { day: 1, mood: 'bg-[#1A95BA]' },
                    { day: 2, mood: 'bg-[#EF8E11]' },
                    { day: 3, mood: 'bg-[#002E67]' },
                    { day: 4, mood: 'bg-[#1A95BA]' },
                    { day: 5, mood: 'bg-[#EF8E11]' },
                    { day: 6, mood: 'bg-[#1A95BA]' },
                    { day: 7, mood: 'bg-[#002E67]' },
                  ].map((item) => (
                    <div
                      key={item.day}
                      className="aspect-square rounded-lg flex flex-col items-center justify-center p-1 bg-white border border-[#002E67]/10"
                    >
                      <span className="text-[10px] font-semibold text-[#475569]">{item.day}</span>
                      <span className={`w-2 h-2 rounded-full mt-0.5 ${item.mood}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. RESPIRACIONES GUIADAS */}
          {tool.id === 'respiraciones' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                Pausas cortas que regulan el sistema nervioso. Puedes practicarlas sentada o acostada.
              </p>
              <div className="p-5 rounded-xl bg-[#E1F2F6] border-2 border-[#1A95BA] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#002E67]">
                    Respiración guiada 4-4-4-4
                  </h4>
                  <p className="text-xs text-[#475569]">
                    Inhala, sostén, exhala y reposa en calma.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenCalmSection();
                  }}
                  className="px-4 py-2 rounded-lg bg-[#002E67] text-white text-xs font-bold hover:bg-[#001E44] transition-colors cursor-pointer"
                >
                  Abrir ejercicio
                </button>
              </div>
            </div>
          )}

          {/* 4. CUESTIONARIO EPDS */}
          {tool.id === 'epds' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                La Escala de Edimburgo (EPDS) consta de 10 preguntas breves sobre tu sentir en los últimos 7 días. Su propósito aquí es únicamente de <strong className="font-bold text-[#002E67]">orientación y autoobservación</strong>.
              </p>
              
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#002E67]/20 space-y-2">
                <div className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider">
                  Ejemplo de pregunta orientativa:
                </div>
                <p className="text-xs sm:text-sm text-[#002E67] font-semibold italic">
                  "He podido reír y ver el lado positivo de las cosas..."
                </p>
                <div className="space-y-1.5 pt-1 text-xs text-[#475569]">
                  <div className="p-2 rounded bg-white border border-[#002E67]/10">Tanto como siempre he podido</div>
                  <div className="p-2 rounded bg-white border border-[#002E67]/10">Ahora no tanto</div>
                  <div className="p-2 rounded bg-white border border-[#002E67]/10">Mucho menos ahora</div>
                  <div className="p-2 rounded bg-white border border-[#002E67]/10">No, en absoluto</div>
                </div>
              </div>
            </div>
          )}

          {/* 5. HILO DE APOYO CON EL EQUIPO */}
          {tool.id === 'hilo' && (
            <div className="space-y-3">
              <p className="text-sm text-[#475569] leading-relaxed">
                Escribe aquí si necesitas que una acompañante lea tu sentir. Las respuestas se envían con calidez y respeto.
              </p>

              {supportSent ? (
                <div className="p-5 rounded-xl bg-[#E1F2F6] border-2 border-[#1A95BA] text-center">
                  <Check className="w-6 h-6 text-[#1A95BA] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-[#002E67]">
                    Mensaje recibido con calidez
                  </h4>
                  <p className="text-xs text-[#475569] mt-1">
                    Nuestro equipo leerá tus palabras con el debido respeto y cuidado.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendSupport} className="space-y-3">
                  <textarea
                    rows={4}
                    value={supportMessage}
                    onChange={(e) => setSupportMessage(e.target.value)}
                    placeholder="Escribe tu mensaje para el equipo de A Tu Lado Hoy..."
                    className="w-full p-4 rounded-xl bg-[#F8FAFC] border-2 border-[#EF8E11]/40 text-sm text-[#002E67] focus:outline-none focus:border-[#EF8E11] resize-none"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#475569]">
                      Mensaje leído por acompañantes
                    </span>
                    <button
                      type="submit"
                      disabled={!supportMessage.trim()}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#EF8E11] text-[#001E44] text-xs font-bold hover:bg-[#D87B00] disabled:opacity-50 transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Enviar al equipo</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* 6. RECURSOS DE AYUDA */}
          {tool.id === 'contacto' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                Directorio directo a servicios de apoyo oficial en Perú y contacto de confianza.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenHelpResources();
                }}
                className="w-full py-3.5 rounded-xl bg-[#002E67] text-white font-bold text-sm hover:bg-[#001E44] transition-colors cursor-pointer"
              >
                Abrir directorio de ayuda y contacto
              </button>
            </div>
          )}

          {/* 7. BIBLIOTECA */}
          {tool.id === 'biblioteca' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                Accede a lecturas sobre bienestar, duelo gestacional o perinatal y posparto.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLibrary();
                }}
                className="w-full py-3.5 rounded-xl bg-[#002E67] text-white font-bold text-sm hover:bg-[#001E44] transition-colors cursor-pointer"
              >
                Explorar artículos de la biblioteca
              </button>
            </div>
          )}

          {/* 8. DERECHOS EN PERÚ */}
          {tool.id === 'derechos' && (
            <div className="space-y-4">
              <p className="text-sm text-[#475569] leading-relaxed">
                Espacio informativo dedicado a difundir la existencia de la Ley N.º 32132 en el Perú.
              </p>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenLawInfo();
                }}
                className="w-full py-3.5 rounded-xl bg-[#002E67] text-white font-bold text-sm hover:bg-[#001E44] transition-colors cursor-pointer"
              >
                Ver sección sobre la Ley N.º 32132
              </button>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#002E67]/10 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#002E67] text-xs font-bold transition-colors cursor-pointer"
          >
            Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};
