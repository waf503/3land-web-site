export default function CTASection() {
    return (
        <section className="py-24 relative bg-background-dark">
            <div className="max-w-6xl mx-auto px-6">
                {/* Contenedor Principal con el Gradiente Mesh y Bordes Redondeados */}
                <div className="cta-mesh p-12 lg:p-24 rounded-[3rem] text-center space-y-10 relative overflow-hidden border border-primary/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    {/* Textura de puntos de fondo (Usando la utilidad que definimos) */}
                    <div className="absolute inset-0 pattern-dots opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 space-y-6">
                        <h2 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            No dejes la rentabilidad de tu empresa para el <span className="text-primary">próximo mes.</span>
                        </h2>

                        <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                            Agenda una consultoría gratuita de 15 minutos y descubre cómo Bilans automatiza tu operación desde hoy.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-8">
                            <button className="bg-primary hover:bg-primary/90 text-background-dark px-12 py-6 rounded-2xl text-xl font-black transition-all shadow-[0_0_30px_rgba(0,194,224,0.4)] transform hover:scale-105 cursor-pointer">
                                Agendar Demo Gratuita
                            </button>

                            <button className="border-2 border-primary/50 text-white hover:bg-primary/10 px-12 py-6 rounded-2xl text-xl font-black transition-all backdrop-blur-sm cursor-pointer">
                                Contactar a Ventas
                            </button>
                        </div>
                    </div>

                    {/* Resplandor abstracto central para dar profundidad */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-0"></div>
                </div>
            </div>
        </section>
    );
}