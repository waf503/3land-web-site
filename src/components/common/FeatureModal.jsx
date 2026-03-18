import { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import WhatsAppButton from '../common/WhatsAppButton.jsx';

export default function FeatureModal({ isOpen, onClose, title, desc, icon: Icon, colorClass }) {

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6 transition-all duration-500">
            {/* Overlay Adaptativo */}
            <div
                className="absolute inset-0 bg-slate-900/60 dark:bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-500"
                onClick={onClose}
            />

            {/* CONTENEDOR DEL MODAL */}
            <div className={`
                ${colorClass} relative w-full max-w-6xl 
                /* Adaptación de Fondo y Bordes */
                bg-white dark:bg-navy-light 
                h-[92vh] md:h-auto rounded-t-[2.5rem] md:rounded-3xl 
                border border-slate-200 dark:border-white/10 
                shadow-[0_40px_100px_-15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_60px_rgba(0,0,0,0.8)] 
                flex flex-col md:flex-row overflow-hidden
                /* Animaciones */
                animate-in slide-in-from-bottom-full md:slide-in-from-bottom-0 md:zoom-in-95 duration-500`
            }>

                {/* COLUMNA DE TEXTO (Adaptativa) */}
                <div className="flex-[0.9] p-8 md:p-14 flex flex-col order-2 md:order-1 overflow-y-auto custom-scrollbar">
                    <div className="mb-auto">
                        {/* Header del Modal */}
                        <div className="flex items-center gap-3 mb-6 md:mb-10">
                            <div className="p-3 rounded-xl bg-[var(--solution-accent)]/10 border border-[var(--solution-accent)]/20">
                                {Icon && <Icon className="w-6 h-6 text-[var(--solution-accent)]" />}
                            </div>
                            <div className="hidden md:block h-px w-8 bg-slate-200 dark:bg-white/10" />
                            <span className="text-[10px] font-black text-[var(--solution-accent)] uppercase tracking-[0.3em]">
                                Detalles del Módulo
                            </span>
                        </div>

                        {/* Texto Adaptativo */}
                        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            {title}
                        </h2>

                        <p className="text-base md:text-lg text-slate-600 dark:text-slate-custom leading-relaxed mb-8 md:mb-12 max-w-md font-medium">
                            {desc}
                        </p>
                    </div>

                    {/* BOTONES DE ACCIÓN */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100 dark:border-white/5 mt-auto">
                        <WhatsAppButton
                            theme="primary"
                            className="flex-1 py-4 text-sm uppercase tracking-widest"
                            message={`Hola Bilans, me interesa saber más sobre el módulo: ${title}`}
                        >
                            Contactar <ArrowRight size={18} />
                        </WhatsAppButton>

                        <button
                            onClick={onClose}
                            className="px-10 py-4 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold text-sm uppercase border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all active:scale-95"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>

                {/* COLUMNA VISUAL (Adaptativa) */}
                <div className="h-56 sm:h-72 md:h-auto md:flex-1 bg-slate-50 dark:bg-slate-900/90 relative flex items-center justify-center p-8 lg:p-16 order-1 md:order-2 overflow-hidden border-b md:border-b-0 md:border-l border-slate-200 dark:border-white/5">

                    {/* Botón Cerrar Flotante (X) */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-md text-slate-900 dark:text-white/70 hover:scale-110 shadow-lg border border-slate-200 dark:border-transparent transition-all"
                    >
                        <X size={22} />
                    </button>

                    {/* Glow dinámico */}
                    <div className="absolute w-[120%] h-[120%] bg-[var(--solution-accent)]/10 dark:bg-[var(--solution-accent)]/10 blur-[120px] rounded-full animate-pulse" />

                    {/* MOCKUP DE INTERFAZ (Estilo Glass Adaptativo) */}
                    <div className="relative w-full aspect-video bg-white dark:bg-[#0d1117] rounded-2xl border border-slate-200 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform hover:scale-[1.03] transition-transform duration-700">
                        <div className="bg-slate-50 dark:bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-slate-200 dark:border-white/5">
                            <div className="flex gap-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-400/40"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/40"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-400/40"></div>
                            </div>
                            <div className="flex items-center gap-2 opacity-40 dark:opacity-20 hidden sm:flex">
                                <span className="text-[9px] text-slate-900 dark:text-white font-mono uppercase tracking-widest font-bold">bilans.cloud/dashboard</span>
                            </div>
                        </div>

                        <div className="h-full flex items-center justify-center bg-gradient-to-br from-transparent to-slate-100 dark:to-white/[0.02]">
                            <div className="flex flex-col items-center">
                                {Icon && <Icon size={64} strokeWidth={0.5} className="text-[var(--solution-accent)] opacity-30" />}
                                <div className="mt-4 px-4 py-1 rounded border border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-white/5">
                                    <span className="text-[8px] font-mono text-slate-400 dark:text-white/30 tracking-[0.4em] font-bold">MÓDULO_ACTIVO</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}