import { Link } from 'react-router-dom';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden transition-colors duration-500">
            {/* Gradiente de fondo adaptativo */}
            <div className="absolute inset-0 bg-[var(--background-image-hero-light)] dark:hero-gradient -z-10"></div>

            <div className="container-bilans grid lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    {/* Badge de Versión */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nueva Versión 4.0
                    </div>

                    {/* Título: Cambia de Slate oscuro a Blanco */}
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
                        Optimiza tu gestión empresarial con <span className="text-primary">Bilans ERP</span>
                    </h1>

                    {/* Párrafo: Cambia de Slate muted a Slate Custom (gris azulado) */}
                    <p className="text-lg text-slate-600 dark:text-slate-custom max-w-xl leading-relaxed">
                        Automatiza procesos, escala tu negocio y toma decisiones basadas en datos con nuestra plataforma
                        integral diseñada para el crecimiento sostenible.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Link
                            to="/solutions#solutions"
                            className="bg-slate-900 dark:bg-primary text-white dark:text-background-dark px-8 py-4 rounded-xl text-base font-bold transition-all hover:scale-105 inline-block text-center shadow-xl shadow-slate-200 dark:shadow-primary/20"
                        >
                            Ver Planes
                        </Link>
                    </div>
                </div>

                {/* Mockup del Dashboard */}
                <div className="relative lg:ml-10">
                    <div className="animate-float rounded-xl overflow-hidden shadow-2xl shadow-slate-300 dark:shadow-primary/20 border border-slate-200 dark:border-white/10 glass p-1 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">

                        {/* Barra superior estilo "Navegador" adaptada */}
                        <div className="bg-slate-100 dark:bg-navy-lighter/50 px-4 py-2 flex items-center gap-1.5 border-b border-slate-200 dark:border-white/5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            <div className="ml-4 h-4 w-64 bg-slate-200 dark:bg-background-dark/30 rounded-full" />
                        </div>

                        <img
                            src="/bilans-erp-dashboard.png"
                            alt="Dashboard ERP"
                            className="w-full h-auto object-cover rounded-b-lg"
                        />
                    </div>
                    {/* Brillo de fondo sutil */}
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/30 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </section>
    );
}