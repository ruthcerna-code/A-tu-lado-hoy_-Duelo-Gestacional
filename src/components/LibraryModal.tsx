import React, { useState } from 'react';
import { X, BookOpen, Clock, ArrowLeft } from 'lucide-react';

interface LibraryArticle {
  id: string;
  category: 'bienestar' | 'duelo' | 'posparto';
  categoryLabel: string;
  title: string;
  summary: string;
  readTime: string;
  content: string[];
}

const ARTICLES: LibraryArticle[] = [
  {
    id: '1',
    category: 'bienestar',
    categoryLabel: 'Bienestar emocional',
    title: 'Cuando el cuerpo pide una pausa: validar el cansancio sin culpa',
    summary: 'Aprender a reconocer que el agotamiento no es un fallo personal, sino una señal legítima de que necesitas tregua y apoyo.',
    readTime: '4 min de lectura',
    content: [
      'En nuestra sociedad es común que se espere de la mujer una fortaleza inquebrantable. Durante el embarazo y tras dar a luz, la atención del entorno gira casi exclusivamente en torno al bebé, mientras que la mujer muchas veces aprende a callar su cansancio para no incomodar.',
      'El agotamiento físico y emocional no es un signo de debilidad. Cuando sientas que las fuerzas escasean, no te juzgues con severidad: tu cuerpo ha transitado cambios inmensos y tu mente procesa un volumen emocional desgastante.',
      'Permitirte decir "hoy no puedo con todo" es un acto de cuidado indispensable. Aquí no hay calificaciones ni metas que cumplir; tu bienestar también es valioso y merece ser procurado.'
    ]
  },
  {
    id: '2',
    category: 'duelo',
    categoryLabel: 'Duelo gestacional y perinatal',
    title: 'Nombrar la ausencia: el derecho a vivir el duelo por una partida temprana',
    summary: 'El dolor ante la pérdida gestacional o neonatal merece ser reconocido y nombrado, sin silencios impuestos ni frases bienintencionadas que minimicen el amor.',
    readTime: '5 min de lectura',
    content: [
      'Una de las realidades más solitarias para una mujer en el Perú y en muchos lugares es el duelo gestacional y perinatal. Con frecuencia, el entorno social tiende a guardar silencio o a pronunciar frases que, aun con buena intención, desestiman la magnitud del vínculo.',
      'Toda pérdida en cualquier semana de gestación o en los primeros días tras el nacimiento duele porque involucra sueños, proyectos, ilusiones y un profundo cariño que existió desde el primer instante.',
      'No tienes la obligación de superar nada en plazos que otros te dicten. Tu proceso tiene su propio tiempo, sus propios rituales y su propio espacio de memoria. En A Tu Lado Hoy sostenemos ese dolor con el máximo respeto a tu intimidad.'
    ]
  },
  {
    id: '3',
    category: 'posparto',
    categoryLabel: 'Posparto',
    title: 'El puerperio y la transformación de la propia identidad',
    summary: 'Reconocer los cambios en el cuerpo, el desborde hormonal y la sensación de extrañeza ante una nueva rutina.',
    readTime: '4 min de lectura',
    content: [
      'El posparto es mucho más que la recuperación física de las primeras semanas: es un proceso profundo donde conviven el cariño, el desconcierto, la falta de sueño y la sensación de haber dejado atrás partes de la mujer que eras antes.',
      'Sentir extrañeza al mirarte al espejo o experimentar melancolía repentina (lo que comúnmente se conoce como baby blues) es una respuesta biológica y emocional habitual ante el brusco descenso hormonal y la exigencia de la crianza.',
      'No estás obligada a sentir una dicha ininterrumpida. Si la tristeza o la sensación de agobio persisten o se profundizan, buscar escucha y orientación oportuna es un paso amoroso contigo misma.'
    ]
  },
  {
    id: '4',
    category: 'bienestar',
    categoryLabel: 'Bienestar emocional',
    title: 'Poner límites con el entorno: cómo proteger tu calma',
    summary: 'Consejos suaves para responder a opiniones no solicitadas de familiares y amistades sin desgastar tu energía.',
    readTime: '3 min de lectura',
    content: [
      'Durante las etapas perinatales abundan las visitas, las opiniones sobre crianza y los consejos que, aunque vengan del afecto, pueden resultar invasivos.',
      'Tienes pleno derecho a decidir quién visita tu hogar, cuándo necesitas silencio y qué temas prefieres no debatir. Cuidar tu tranquilidad no es descortesía: es preservar el ambiente sereno que tú y tu hogar necesitan.'
    ]
  },
  {
    id: '5',
    category: 'duelo',
    categoryLabel: 'Duelo gestacional y perinatal',
    title: 'Rituales de despedida y memoria íntima',
    summary: 'Espacios simbólicos para honrar a quien no pudo quedarse, respetando tus creencias y tu ritmo personal.',
    readTime: '4 min de lectura',
    content: [
      'Muchas mujeres encuentran alivio al crear un pequeño acto simbólico: escribir una carta privada que no se leerá a nadie, sembrar una planta en una maceta, o conservar una cajita con recuerdos íntimos.',
      'No hay reglas obligatorias ni pasos determinados. Lo único fundamental es que cualquier gesto o silencio responda únicamente a lo que te brinde paz a ti.'
    ]
  }
];

interface LibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const LibraryModal: React.FC<LibraryModalProps> = ({
  isOpen,
  onClose,
  initialCategory = 'todos',
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || 'todos');
  const [activeArticle, setActiveArticle] = useState<LibraryArticle | null>(null);

  if (!isOpen) return null;

  const filteredArticles = selectedCategory === 'todos' 
    ? ARTICLES 
    : ARTICLES.filter(a => a.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001E44]/75 backdrop-blur-xs animate-in fade-in duration-200 overflow-y-auto">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl p-6 sm:p-8 border-2 border-[#002E67]/20 shadow-2xl relative text-left my-8 max-h-[90vh] overflow-y-auto flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-[#002E67]/70 hover:text-[#002E67] hover:bg-[#F1F5F9] transition-colors cursor-pointer"
          aria-label="Cerrar biblioteca"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#002E67] text-white flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 stroke-[2]" />
          </div>
          <div>
            <span className="text-xs font-bold text-[#1A95BA] uppercase tracking-wider block">
              Recursos de lectura
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#002E67]">
              Biblioteca perinatal
            </h3>
          </div>
        </div>

        {activeArticle ? (
          /* Single Article Reader View */
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1A95BA] hover:text-[#002E67] transition-colors mb-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Volver a la lista de artículos</span>
            </button>

            <div className="pb-3 border-b border-[#002E67]/10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1A95BA] block mb-1">
                {activeArticle.categoryLabel}
              </span>
              <h4 className="text-2xl font-extrabold text-[#002E67] leading-tight">
                {activeArticle.title}
              </h4>
              <div className="flex items-center gap-2 text-xs text-[#475569] mt-2">
                <Clock className="w-3.5 h-3.5 text-[#1A95BA]" />
                <span>{activeArticle.readTime}</span>
              </div>
            </div>

            <div className="space-y-3.5 text-sm sm:text-base text-[#475569] leading-relaxed pt-2">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 pt-4 border-t border-[#002E67]/10 flex justify-between items-center">
              <span className="text-xs text-[#475569] italic">
                A Tu Lado Hoy · Acompañamiento respetuoso en Perú
              </span>
              <button
                type="button"
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2 rounded-xl bg-[#002E67] text-white text-xs font-bold hover:bg-[#001E44] transition-colors cursor-pointer"
              >
                Volver a la biblioteca
              </button>
            </div>
          </div>
        ) : (
          /* Article List & Category Filter Tabs */
          <div>
            {/* Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {[
                { id: 'todos', label: 'Todos los temas' },
                { id: 'bienestar', label: 'Bienestar emocional' },
                { id: 'duelo', label: 'Duelo gestacional o perinatal' },
                { id: 'posparto', label: 'Posparto' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    selectedCategory === cat.id
                      ? 'bg-[#002E67] text-white shadow-xs'
                      : 'bg-[#F1F5F9] text-[#475569] hover:bg-[#E2E8F0]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* List */}
            <div className="space-y-3">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="p-5 rounded-xl bg-[#F8FAFC] border border-[#002E67]/15 hover:border-[#1A95BA] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[11px] font-bold text-[#1A95BA] uppercase tracking-wider">
                      {article.categoryLabel}
                    </span>
                    <span className="text-[11px] text-[#475569] font-semibold">
                      {article.readTime}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-[#002E67] group-hover:text-[#1A95BA] transition-colors leading-snug">
                    {article.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-[#475569] leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
