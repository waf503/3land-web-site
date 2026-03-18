import { SOLUTIONS_DATA } from '../constants/solutions';
import SolutionRow from '../sections/solutions/SolutionRow';
import WhatsAppButton from '../components/common/WhatsAppButton.jsx';
import { Link } from 'react-router-dom';

export default function Solutions() {
    return (
        <div className="bg-white dark:bg-background-dark transition-colors duration-500">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
                {/* Background Decor adaptativo */}
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[120px]"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-[1.1]">
                        Soluciones a la medida<br className="hidden md:block"/> de tu operación.
                    </h1>
                    <p className="max-w-2xl mx-auto text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-12 font-medium">
                        Desde facturación básica hasta control total de proyectos. <br/> Elige el motor que tu empresa necesita para crecer.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <WhatsAppButton theme="primary">
                            Agendar Consultoría
                        </WhatsAppButton>
                        <Link to="/pricing">
                            <button className="w-full md:w-auto bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-900 dark:text-white font-bold px-8 py-4 rounded-xl transition-all border border-slate-200 dark:border-white/10 cursor-pointer hover:scale-105 active:scale-95">
                                Ver Planes y Precios
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* SOLUTIONS LIST: Fondo alternado sutil */}
            <section id="solutions" className="py-32 space-y-40 bg-slate-50 dark:bg-background-dark">
                {SOLUTIONS_DATA.map((solution, index) => (
                    <SolutionRow key={index} solution={solution} index={index} />
                ))}
            </section>

            {/* FINAL CTA BANNER: Mantenemos el estilo oscuro que nos gustó para el cierre */}
            <section className="bg-slate-50 dark:bg-background-dark py-32 transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="relative rounded-[3rem] overflow-hidden p-12 lg:p-20 text-center bg-slate-900 border border-white/10 shadow-2xl shadow-slate-300 dark:shadow-none">
                        <div className="absolute inset-0 bg-primary/5 pattern-dots opacity-20"></div>
                        <div className="relative z-10 space-y-10">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 tracking-tight leading-tight">
                                Tranquilidad fiscal y operativa <br className="hidden sm:block"/> a un clic de distancia.
                            </h2>
                            <div className="flex justify-center">
                                <WhatsAppButton theme="primary">
                                    Agendar Demo Gratuita
                                </WhatsAppButton>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}