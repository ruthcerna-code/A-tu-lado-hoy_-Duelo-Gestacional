import React from 'react';
import { 
  Lock, 
  Calendar, 
  Wind, 
  FileCheck2, 
  MessageCircleHeart, 
  PhoneCall, 
  BookOpen, 
  Scale, 
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export interface ToolItem {
  id: string;
  name: string;
  shortDesc: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeNote?: string;
  badgeType?: 'private' | 'team' | 'orientation' | 'standard';
  actionPrompt: string;
}

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'diario',
    name: 'Diario personal',
    shortDesc: 'Un espacio íntimo para escribir y soltar lo que sientes en tu propio ritmo.',
    icon: Lock,
    accentColor: '#002E67',
    badgeType: 'private',
    badgeNote: 'Solo para ti: tus notas son privadas y nadie más tiene acceso a ellas.',
    actionPrompt: 'Abrir diario íntimo'
  },
  {
    id: 'animo',
    name: 'Registro y calendario del estado de ánimo',
    shortDesc: 'Observa tus cambios a lo largo del tiempo sin exigirte estar bien.',
    icon: Calendar,
    accentColor: '#1A95BA',
    badgeType: 'standard',
    actionPrompt: 'Ver calendario emocional'
  },
  {
    id: 'respiraciones',
    name: 'Respiraciones guiadas y pausas de calma',
    shortDesc: 'Secuencias conscientes para relajar el cuerpo y pausar en momentos de sobrecarga.',
    icon: Wind,
    accentColor: '#1A95BA',
    badgeType: 'standard',
    actionPrompt: 'Iniciar respiración guiada'
  },
  {
    id: 'epds',
    name: 'Cuestionario EPDS',
    shortDesc: 'Escala de Edimburgo para reflexionar sobre tu bienestar anímico en esta etapa.',
    icon: FileCheck2,
    accentColor: '#EF8E11',
    badgeType: 'orientation',
    badgeNote: 'Una orientación, no un diagnóstico.',
    actionPrompt: 'Conocer cuestionario orientativo'
  },
  {
    id: 'hilo',
    name: 'Hilo de apoyo con el equipo',
    shortDesc: 'Canal para comunicarte directamente con el equipo cuando necesites ser escuchada.',
    icon: MessageCircleHeart,
    accentColor: '#EF8E11',
    badgeType: 'team',
    badgeNote: 'Para escribirle al equipo: a diferencia del diario, este canal es leído por acompañantes.',
    actionPrompt: 'Escribir un mensaje al equipo'
  },
  {
    id: 'contacto',
    name: 'Recursos de ayuda y contacto de confianza',
    shortDesc: 'Directorio de contención inmediata en Perú y comunicación rápida con tu persona elegida.',
    icon: PhoneCall,
    accentColor: '#002E67',
    badgeType: 'standard',
    actionPrompt: 'Ver directorio y contacto'
  },
  {
    id: 'biblioteca',
    name: 'Biblioteca perinatal',
    shortDesc: 'Lecturas cuidadas sobre bienestar emocional y duelo gestacional o perinatal.',
    icon: BookOpen,
    accentColor: '#1A95BA',
    badgeType: 'standard',
    actionPrompt: 'Consultar lecturas de apoyo'
  },
  {
    id: 'derechos',
    name: 'Derechos en Perú y Ley N.º 32132',
    shortDesc: 'Información sobre el marco legal y la sección informativa sobre la Ley N.º 32132.',
    icon: Scale,
    accentColor: '#002E67',
    badgeType: 'standard',
    actionPrompt: 'Ver sección informativa de la ley'
  }
];

interface ToolsGridProps {
  onSelectTool: (tool: ToolItem) => void;
}

export const ToolsGrid: React.FC<ToolsGridProps> = ({ onSelectTool }) => {
  return (
    <section id="herramientas" className="py-12 md:py-20 bg-white border-y border-[#002E67]/10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 text-left">
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wider text-[#1A95BA] uppercase mb-2">
            <span>Herramientas de apoyo práctico</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002E67] tracking-tight text-balance">
            Funcionalidades creadas para sostenerte
          </h2>
          <p className="mt-3 text-[16px] sm:text-[17px] text-[#475569] leading-relaxed">
            Herramientas sencillas y comprensibles que respetan tus tiempos. Puedes utilizarlas de forma libre sin crear una cuenta.
          </p>
        </div>

        {/* 4x2 Grid of 8 Tool Cards in Sands UK Style */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TOOLS_DATA.map((tool) => {
            const Icon = tool.icon;
            const isPrivate = tool.badgeType === 'private';
            const isTeam = tool.badgeType === 'team';
            const isOrientation = tool.badgeType === 'orientation';

            return (
              <div
                key={tool.id}
                onClick={() => onSelectTool(tool)}
                className={`group text-left p-6 rounded-2xl transition-all duration-200 flex flex-col justify-between cursor-pointer border ${
                  isPrivate
                    ? 'bg-[#F8FAFC] border-2 border-[#002E67] hover:shadow-lg'
                    : isTeam
                    ? 'bg-[#FFF9F2] border-2 border-[#EF8E11] hover:shadow-lg'
                    : isOrientation
                    ? 'bg-[#F4F9FA] border-2 border-[#1A95BA] hover:shadow-lg'
                    : 'bg-white border border-[#002E67]/15 hover:border-[#1A95BA] hover:shadow-md'
                }`}
              >
                <div>
                  {/* Icon & Status Tag */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
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

                    {/* Differentiated Tag */}
                    {isPrivate && (
                      <span className="text-[11px] font-bold tracking-wider text-[#002E67] bg-[#E2E8F0] px-2.5 py-1 rounded-md uppercase">
                        Solo tuyo
                      </span>
                    )}
                    {isTeam && (
                      <span className="text-[11px] font-bold tracking-wider text-[#9E5700] bg-[#FEF3E2] px-2.5 py-1 rounded-md uppercase">
                        Para el equipo
                      </span>
                    )}
                    {isOrientation && (
                      <span className="text-[11px] font-bold tracking-wider text-[#0E627B] bg-[#E1F2F6] px-2.5 py-1 rounded-md uppercase">
                        Orientación
                      </span>
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-[#002E67] group-hover:text-[#1A95BA] transition-colors leading-snug">
                    {tool.name}
                  </h3>

                  {/* 1-Line Description */}
                  <p className="mt-2 text-sm text-[#475569] leading-relaxed">
                    {tool.shortDesc}
                  </p>
                </div>

                {/* Footer notes & action */}
                <div className="mt-6 pt-4 border-t border-[#002E67]/10 flex flex-col gap-2">
                  {/* Distinctive notes */}
                  {isPrivate && (
                    <p className="text-xs font-semibold text-[#002E67] leading-snug">
                      {tool.badgeNote}
                    </p>
                  )}

                  {isTeam && (
                    <p className="text-xs font-semibold text-[#9E5700] leading-snug">
                      {tool.badgeNote}
                    </p>
                  )}

                  {isOrientation && (
                    <div className="p-2 rounded bg-[#E1F2F6] border border-[#1A95BA]/30">
                      <p className="text-xs font-bold text-[#0E627B] leading-snug">
                        {tool.badgeNote}
                      </p>
                    </div>
                  )}

                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002E67] group-hover:text-[#1A95BA] group-hover:translate-x-1 transition-all mt-1">
                    <span>{tool.actionPrompt}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
