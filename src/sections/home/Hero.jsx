
export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 hero-gradient -z-10"></div>
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                    <div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Nueva Versión 4.0
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-white">
                        Optimiza tu gestión empresarial con <span className="text-primary">Bilans ERP</span>
                    </h1>
                    <p className="text-lg  text-slate-custom max-w-xl leading-relaxed">
                        Automatiza procesos, escala tu negocio y toma decisiones basadas en datos con nuestra plataforma
                        integral diseñada para el crecimiento sostenible de empresas modernas.
                    </p>
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            className="
                            bg-primary
                            hover:bg-primary/90
                            text-background-dark
                            px-8 py-4
                            rounded-xl
                            text-base
                            font-bold
                            transition-all">
                            Agendar Demo
                        </button>
                        <button
                            className="
                            border
                            border-slate-300
                            border-navy-lighter
                            hover:bg-navy-lighter
                            px-8 py-4 rounded-xl
                            text-base
                            text-white
                            font-bold
                            transition-all
                            ">
                            Ver Planes
                        </button>
                    </div>
                </div>
                <div className="relative lg:ml-10">
                    {/* Contenedor con animación y efecto glass */}
                    <div
                        className="animate-float rounded-xl overflow-hidden shadow-2xl shadow-primary/20 border border-white/10 glass p-1 transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">

                        {/* Barra superior estilo "Navegador" */}
                        <div className="bg-navy-lighter/50 px-4 py-2 flex items-center gap-1.5 border-b border-white/5">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                            <div className="ml-4 h-4 w-64 bg-background-dark/30 rounded-full" />
                        </div>

                        {/* La imagen propiamente dicha */}
                        <img
                            src="/bilans-erp-dashboard.png"
                            alt="Dashboard ERP"
                            className="w-full h-auto object-cover rounded-b-lg"
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </section>
    )
}