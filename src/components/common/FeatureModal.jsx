import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink } from 'lucide-react';

export default function FeatureModal({ isOpen, onClose, title, desc, icon: Icon, colorClass }) {

    useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-6">
            {/* Overlay - Bloqueo total de fondo con desenfoque */}
            <div
                className="absolute inset-0 bg-slate-950/95 backdrop-blur-md animate-in fade-in duration-500"
                onClick={onClose}
            />

            {/* CONTENEDOR DEL MODAL */}
            <div className={`
            ${colorClass} relative w-full max-w-6xl bg-navy-light 
            /* Móvil: Pantalla completa parcial con bordes redondeados arriba */
            h-[92vh] md:h-auto rounded-t-[2.5rem] md:rounded-2xl 
            border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.8)] 
            flex flex-col md:flex-row overflow-hidden
            /* Animación: Sube desde el fondo en móvil, zoom en desktop */
            animate-in slide-in-from-bottom-full md:slide-in-from-bottom-0 md:zoom-in-95 duration-500`
            }>

                {/* COLUMNA DE TEXTO (Izquierda en Desktop / Abajo en Móvil) */}
                <div className="flex-[0.9] p-8 md:p-14 flex flex-col order-2 md:order-1 overflow-y-auto custom-scrollbar">
                    <div className="mb-auto">
                        {/* Header del Modal */}
                        <div className="flex items-center gap-3 mb-6 md:mb-10">
                            <div className="p-3 rounded-xl bg-[var(--solution-accent)]/10 border border-[var(--solution-accent)]/20">
                                {Icon && <Icon className="w-6 h-6 text-[var(--solution-accent)]" />}
                            </div>
                            <div className="hidden md:block h-px w-8 bg-white/10" />
                            <span className="text-[10px] font-black text-[var(--solution-accent)] uppercase tracking-[0.3em]">
                            Detalles del Módulo
                        </span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 md:mb-8 tracking-tight leading-tight">
                            {title}
                        </h2>

                        <p className="text-base md:text-lg text-slate-custom leading-relaxed mb-8 md:mb-12 max-w-md">
                            {desc}
                        </p>

                    </div>

                    {/* BOTONES DE ACCIÓN (Fijos al fondo) */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-white/5 mt-auto">
                        <button className="flex-1 group relative overflow-hidden py-4 rounded-xl bg-[var(--solution-accent)] text-background-dark font-black text-sm uppercase tracking-widest transition-all hover:shadow-[0_0_25px_rgba(var(--solution-accent),0.4)] hover:-translate-y-1 active:scale-95">
                            <div className="relative z-10 flex items-center justify-center gap-2">
                                Agendar Demo <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </div>
                        </button>

                        <button
                            onClick={onClose}
                            className="px-10 py-4 rounded-xl bg-white/5 text-white font-bold text-sm uppercase border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
                        >
                            Cerrar
                        </button>
                    </div>
                </div>

                {/* COLUMNA VISUAL (Derecha en Desktop / Arriba en Móvil) */}
                <div className="h-56 sm:h-72 md:h-auto md:flex-1 bg-slate-900/90 relative flex items-center justify-center p-8 lg:p-16 order-1 md:order-2 overflow-hidden border-b md:border-b-0 md:border-l border-white/5">
                    {/* Botón Cerrar (X) - Posición absoluta según el dispositivo */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white/70 hover:text-white hover:scale-110 transition-all"
                    >
                        <X size={22} />
                    </button>

                    {/* Glow de fondo dinámico */}
                    <div className="absolute w-[120%] h-[120%] bg-[var(--solution-accent)]/10 blur-[120px] rounded-full animate-pulse" />

                    {/* MOCKUP DE INTERFAZ */}
                    <div className="relative w-full aspect-video bg-[#0d1117] rounded-xl border border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] overflow-hidden transform hover:scale-[1.03] transition-transform duration-700">
                        <div className="bg-[#161b22] px-4 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/20"></div>
                            </div>
                            <div className="flex items-center gap-2 opacity-20 hidden sm:flex">
                                <span className="text-[9px] text-white font-mono uppercase tracking-widest">bilans.cloud/dashboard</span>
                            </div>
                        </div>

                        <div className="h-full flex items-center justify-center bg-gradient-to-br from-transparent to-white/[0.02]">
                            <div className="flex flex-col items-center">
                                {Icon && <Icon size={64} strokeWidth={0.5} className="text-[var(--solution-accent)] opacity-20" />}
                                <div className="mt-4 px-4 py-1 rounded border border-white/5 bg-white/5">
                                    <span className="text-[8px] font-mono text-white/30 tracking-[0.4em]">PREVIEW_UNAVAILABLE</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}