import WhatsAppButton from "../../components/common/WhatsAppButton.jsx";

export default function CTASection() {
    return (
        <section
            id="features"
            className="py-32 bg-white dark:bg-background-dark transition-colors duration-500"
        >
            <div className="container-bilans">
                {/* Contenedor Principal:
                    - Light: Azul Navy Profundo (Slate-900) con sombra azulada.
                    - Dark: Tu cta-mesh original.
                */}
                <div className="relative overflow-hidden p-12 lg:p-24 rounded-[3rem] text-center
                                bg-slate-900 dark:cta-mesh
                                border border-white/10 dark:border-primary/30
                                shadow-[0_40px_100px_-20px_rgba(15,23,42,0.3)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">

                    {/* Textura de puntos (pattern-dots) adaptada */}
                    <div className="absolute inset-0 pattern-dots opacity-10 dark:opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 space-y-8">
                        <h2 className="text-5xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
                            No dejes la rentabilidad de tu empresa para el <span className="text-primary">próximo mes.</span>
                        </h2>

                        <p className="text-xl lg:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed opacity-90">
                            Agenda una consultoría gratuita de 15 minutos y descubre cómo Bilans automatiza tu operación desde hoy.
                        </p>

                        <div className="flex flex-wrap justify-center gap-6 pt-4">
                            {/* El botón de WhatsApp debería resaltar.
                                Si theme="outline" lo hace ver muy oscuro en el fondo Navy,
                                podrías considerar un botón sólido aquí para el CTA final.
                            */}
                            <WhatsAppButton theme="primary" icon={false}>
                                Obtener BILANS ERP
                            </WhatsAppButton>
                        </div>
                    </div>

                    {/* Resplandor central (Glow) */}
                    {/* En Light mode lo hacemos un poco más sutil para que no ensucie el texto */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full
                                    bg-primary/10 dark:bg-primary/5 blur-[120px] rounded-full -z-0"></div>
                </div>
            </div>
        </section>
    );
}