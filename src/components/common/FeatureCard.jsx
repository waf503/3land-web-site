import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import FeatureModal from './FeatureModal';

export default function FeatureCard({ icon: Icon, title, desc, color }) {
    const [isOpen, setIsOpen] = useState(false);

    // Mantenemos tu sistema de temas (indigo/primary)
    const themeClass = color === 'indigo' ? 'theme-indigo' : 'theme-primary';

    return (
        <>
            <div
                onClick={() => setIsOpen(true)}
                className={`
                    ${themeClass} group relative flex flex-col items-start h-full p-6 rounded-2xl 
                    /* FONDO Y BORDES ADAPTATIVOS */
                    bg-white border-slate-200 shadow-sm
                    dark:bg-navy-light/40 dark:backdrop-blur-md dark:border-white/5 
                    
                    /* HOVER ESTÁNDAR */
                    hover:border-[var(--solution-accent)]/40 hover:-translate-y-1
                    hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-none
                    
                    /* FEEDBACK TÁCTIL */
                    active:scale-[0.97] active:bg-[var(--solution-accent)]/5
                    transition-all duration-300 cursor-pointer overflow-hidden
                `}
            >
                {/* Glow de fondo (Sutil en light, vibrante en dark) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--solution-accent)]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Contenedor de Icono: Ajustado para contraste en blanco */}
                <div className="relative p-3 rounded-xl mb-4
                                bg-slate-100 dark:bg-slate-800/50
                                group-hover:bg-[var(--solution-accent)]/10 transition-all duration-300">
                    {Icon && (
                        <Icon
                            className="w-6 h-6 text-slate-500 dark:text-slate-custom group-hover:text-[var(--solution-accent)] transition-colors"
                            strokeWidth={2}
                        />
                    )}
                </div>

                {/* Título: Slate-900 para legibilidad Pro en Light */}
                <h3 className="font-bold text-base mb-2 text-slate-900 dark:text-white group-hover:text-[var(--solution-accent)] transition-colors">
                    {title}
                </h3>

                {/* Descripción: Slate-600 para armonía visual */}
                <p className="text-sm text-slate-600 dark:text-slate-custom leading-relaxed line-clamp-2 mb-4">
                    {desc}
                </p>

                {/* Footer de la Card: Separador adaptativo */}
                <div className="mt-auto pt-4 flex items-center justify-between w-full border-t border-slate-100 dark:border-white/5">
                    <span className="text-[10px] font-black uppercase tracking-widest text-[var(--solution-accent)]
                        opacity-70 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-1 transition-all">
                        Ver Detalles
                    </span>
                    <ArrowRight size={14} className="text-[var(--solution-accent)] opacity-50 md:hidden" />
                </div>

                {/* Línea de acento inferior (Funciona en ambos modos) */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[var(--solution-accent)] group-hover:w-full transition-all duration-500" />
            </div>

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