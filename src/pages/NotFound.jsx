import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Terminal, Search } from 'lucide-react';

export default function NotFound() {
    return (
        /* pt-20 asegura que el contenido empiece debajo del Header (h-20) */
        <div className="min-h-screen pt-20 flex items-center justify-center px-6 relative overflow-hidden bg-background-dark">

            {/* Glow de fondo dinámico */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10 animate-pulse" />

            <div className="max-w-2xl w-full text-center">
                {/* Visual del Error */}
                <div className="relative inline-block mb-12">
                    <span className="text-[10rem] md:text-[14rem] font-black text-white/5 leading-none select-none">
                        404
                    </span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="p-5 rounded-2xl bg-navy-light border border-white/10 shadow-2xl backdrop-blur-sm transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                            <Terminal size={56} className="text-primary animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Texto Descriptivo */}
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                    Módulo fuera de alcance
                </h1>
                <p className="text-lg text-slate-custom mb-12 max-w-md mx-auto leading-relaxed">
                    Parece que la ruta que buscas no existe en el sistema o ha sido reubicada.
                    Verifica el enlace o utiliza los accesos rápidos.
                </p>

                {/* Botonera con Feedback Táctil */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-primary text-background-dark font-black rounded-xl hover:shadow-[0_10px_30px_rgba(var(--solution-accent),0.3)] hover:-translate-y-1 transition-all active:scale-95"
                    >
                        <Home size={20} />
                        Volver al Dashboard
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-10 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all active:scale-95"
                    >
                        <ArrowLeft size={20} />
                        Página Anterior
                    </button>
                </div>

                {/* Debug Info Estilo Tech */}
                <div className="mt-20 flex flex-col items-center gap-3">
                    <div className="h-px w-16 bg-white/10" />
                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-[0.4em]">
                        <Search size={12} />
                        System Status: 404_NOT_FOUND
                    </div>
                </div>
            </div>
        </div>
    );
}