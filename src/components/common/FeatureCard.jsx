import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FeatureModal from './FeatureModal';

export default function FeatureCard({ icon: Icon, title, desc, color }) {
    const [isOpen, setIsOpen] = useState(false);

    // Sistema de temas heredado del CSS global
    const themeClass = color === 'indigo' ? 'theme-indigo' : 'theme-primary';

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className={`
                    ${themeClass} group relative flex flex-col items-start h-full p-6 rounded-2xl 
                    bg-navy-light/40 backdrop-blur-md border border-white/5 
                    /* Hover en Desktop */
                    md:hover:border-[var(--solution-accent)]/40 md:hover:-translate-y-1
                    /* Feedback táctil en Móvil */
                    active:scale-[0.97] active:bg-[var(--solution-accent)]/5
                    transition-all duration-300 cursor-pointer overflow-hidden
                `}
            >
                {/* Glow de fondo en hover (Desktop) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--solution-accent)]/5 via-transparent to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icono con contenedor dinámico */}
                <div className="relative p-3 rounded-xl bg-slate-800/50 mb-4 group-hover:bg-[var(--solution-accent)]/10 transition-all duration-300">
                    {Icon && (
                        <Icon
                            className="w-6 h-6 text-slate-custom group-hover:text-[var(--solution-accent)] transition-colors"
                            strokeWidth={2}
                        />
                    )}
                </div>

                {/* Título y Descripción con Clamping */}
                <h3 className="font-bold text-base mb-2 text-white group-hover:text-[var(--solution-accent)] transition-colors">
                    {title}
                </h3>

                <p className="text-sm text-slate-custom leading-relaxed line-clamp-2 mb-4">
                    {desc}
                </p>

                {/* Footer de la Card: Indicador de interactividad */}
                <div className="mt-auto pt-4 flex items-center justify-between w-full border-t border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--solution-accent)]
                        /* Visible en móvil, animado en desktop */
                        opacity-70 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all">
                        Ver Detalles
                    </span>
                    <ArrowRight size={14} className="text-[var(--solution-accent)] opacity-50 md:hidden" />
                </div>

                {/* Línea de acento inferior (Desktop) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--solution-accent)] md:group-hover:w-full transition-all duration-500" />
            </div>

            {/* Renderizado Condicional del Modal */}
            {isOpen && (
                <FeatureModal
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                    title={title}
                    desc={desc}
                    icon={Icon}
                    colorClass={themeClass}
                />
            )}
        </>
    );
}