import { SOLUTIONS_DATA } from '../constants/solutions';
import SolutionRow from '../sections/solutions/SolutionRow';
import { Link } from 'react-router-dom';

export default function Solutions() {
    return (
        <>
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8">
                        Soluciones a la medida<br className="hidden md:block"/> de tu operación.
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-400 leading-relaxed mb-12">
                        Desde facturación básica hasta control total de proyectos. <br/> Elige el motor que tu empresa necesita para crecer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-background-dark font-bold px-8 py-4 rounded-xl transition-all hover:scale-105">
                            Ver Planes y Precios
                        </button>
                        <button className="bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl transition-all border border-white/10">
                            Hablar con un Experto
                        </button>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS LIST */}
            <section id="solutions" className="py-32 space-y-40">
                {SOLUTIONS_DATA.map((solution, index) => (
                    <SolutionRow key={index} solution={solution} index={index} />
                ))}
            </section>

            {/* FINAL CTA BANNER */}
            <section className="max-w-7xl mx-auto px-6 mb-32">
                <div className="relative rounded-[2.5rem] overflow-hidden p-12 lg:p-20 text-center bg-slate-900 border border-white/5 shadow-2xl">
                    <div className="absolute inset-0 bg-primary/5"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-10">
                            Tranquilidad fiscal y operativa <br className="hidden sm:block"/> a un clic de distancia.
                        </h2>
                        <button className="bg-primary hover:bg-primary/90 text-background-dark text-xl font-bold px-12 py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 hover:-translate-y-1">
                            Agendar Demo Gratuita
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}