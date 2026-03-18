import { PARTNERS } from "../../constants/partners";

export default function TrustedBy() {
    // Triplicamos el array para asegurar un scroll infinito fluido en pantallas ultra-wide
    const carrouselLogos = [...PARTNERS, ...PARTNERS, ...PARTNERS];

    return (
        <section className="py-24 bg-slate-50 dark:bg-[#060d19] border-y border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-500">
            <div className="container-bilans">
                <p className="text-center text-xs lg:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mb-16 opacity-80">
                    Empresas que confían en Bilans ERP
                </p>

                <div className="relative flex overflow-hidden group">
                    {/* Contenedor del Scroll Infinito */}
                    <div className="flex animate-infinite-scroll whitespace-nowrap gap-20 lg:gap-40 items-center will-change-transform">
                        {carrouselLogos.map((partner, idx) => (
                            <div key={idx} className="flex-shrink-0 transition-transform duration-300 hover:scale-110">
                                <img
                                    src={partner.src}
                                    alt={partner.name}
                                    className="h-16 lg:h-24 w-auto object-contain
                                               /* Modo Light: Escala de grises y contraste suave */
                                               grayscale opacity-60 contrast-125
                                               /* Modo Dark: Brillo para destacar sobre el fondo oscuro */
                                               dark:brightness-200 dark:opacity-40
                                               /* Hover: Recupera color original en ambos mundos */
                                               hover:grayscale-0 hover:opacity-100 dark:hover:opacity-100
                                               transition-all duration-500 cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Degradados laterales (Fade out) adaptativos */}
                    <div className="absolute inset-y-0 left-0 w-32 lg:w-64 z-10
                                    bg-gradient-to-r from-slate-50 to-transparent
                                    dark:from-[#060d19] dark:to-transparent pointer-events-none"></div>

                    <div className="absolute inset-y-0 right-0 w-32 lg:w-64 z-10
                                    bg-gradient-to-l from-slate-50 to-transparent
                                    dark:from-[#060d19] dark:to-transparent pointer-events-none"></div>
                </div>
            </div>
        </section>
    );
}