import {PAINPOINTS} from "../../constants/painpoints.jsx";
import {ArrowDown} from 'lucide-react';
import ProblemCard from "../../components/common/ProblemCard.jsx";
export default function PainPoints() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-[#081221] border-y border-slate-200 dark:border-white/5 transition-colors duration-500 overflow-hidden">
            <div className="container-bilans">
                {/* Header: El "Dolor" */}
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-6">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm">¿Qué obstáculos enfrentas?</span>
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                        Gestionar una empresa no debería ser una lucha constante
                    </h2>
                    <p className="text-bilans-body max-w-2xl mx-auto">
                        En un mundo donde el tiempo es dinero, muchas empresas se quedan atrás por procesos manuales y toma de decisiones basada en suposiciones.
                    </p>
                </div>

                {/* Grid de Problemas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Grid Uniforme con el formato de CoreBenefits */}
                    {PAINPOINTS.map((prob, index) => (
                        <ProblemCard
                            key={index}
                            icon={prob.icon}
                            title={prob.title}
                            desc={prob.desc}
                        />
                    ))}

                    {/* Card de Empatía / Cierre de sección */}
                    <div className="md:col-span-2 lg:col-span-1 p-8 rounded-2xl bg-primary/10 border-2 border-dashed border-primary/30 flex flex-col justify-center items-center text-center">
                        <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">¡Pero no tiene por qué ser así!</h3>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                            En <span className="font-bold text-primary">BILANS</span> entendemos tus desafíos porque hemos estado ahí.
                        </p>
                        <div className="animate-bounce">
                            <ArrowDown className="text-primary w-6 h-6" />
                        </div>
                    </div>
                </div>

                {/* Frase Final Estilo "Heartbeat" */}
                {/* Sección de cierre: Siguiendo fielmente el diseño de tus botones */}
                <div className="mt-20 text-center px-4">
                    <div className={`
                        inline-flex items-center justify-center px-8 py-5 rounded-xl transition-all duration-300
                        cursor-default border border-transparent
                        
                        /* MODO LIGHT: Estilo "Secondary" (Slate-700) para dar peso visual */
                        bg-slate-700 text-white shadow-lg shadow-slate-900/10
                        
                        /* MODO DARK: Estilo "Primary" (Cian) con texto invertido */
                        dark:bg-primary dark:text-background-dark dark:shadow-lg dark:shadow-primary/20
                        
                        /* Efecto sutil al pasar el mouse */
                        hover:scale-[1.01]
                    `}>
                        <p className="text-lg lg:text-xl font-bold tracking-tight leading-tight">
                            Un ERP no es solo tecnología:
                            <span className="text-primary dark:text-background-dark/80 ml-2">
                                es el corazón de tu negocio.
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}