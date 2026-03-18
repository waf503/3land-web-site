import PricingCard from '../components/common/PricingCard';
import { PRICING_PLANS } from '../constants/pricing';

export default function Pricing() {
    return (
        <div className="bg-white dark:bg-background-dark transition-colors duration-500">
            {/* 1. SECCIÓN HERO */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-slate-200 dark:border-white/5">
                <div className="absolute inset-0 pattern-dots opacity-5 dark:opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-bold mb-8">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Precios Transparentes
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-8">
                        Planes que impulsan tu <br/> <span className="text-primary">crecimiento</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        Desde facturación básica hasta control total de proyectos. Elige el motor que tu empresa necesita para crecer.
                    </p>
                </div>
            </section>

            {/* 2. CUADRÍCULA DE PLANES */}
            <section className="py-24 relative bg-slate-50 dark:bg-background-dark transition-colors">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Badge Mensualidades */}
                    <div className="flex justify-center mb-16">
                        <div className="px-6 py-2 rounded-full bg-white dark:bg-white/10 backdrop-blur-md border border-slate-200 dark:border-white/20 shadow-sm flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary dark:bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary dark:bg-white"></span>
                            </span>
                            <span className="text-slate-900 dark:text-white text-sm font-bold tracking-wide uppercase">
                                Mensualidades desde:
                            </span>
                        </div>
                    </div>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-stretch">
                        {PRICING_PLANS.map((plan) => (
                            <PricingCard key={plan.id} plan={plan} />
                        ))}
                    </div>

                    {/* Nota aclaratoria adaptativa */}
                    <div className="mt-24 text-center text-slate-500 text-sm max-w-2xl mx-auto border border-slate-200 dark:border-white/5 rounded-2xl p-8 bg-white dark:bg-background-dark/20 leading-relaxed shadow-sm">
                        * Los precios mostrados son en USD y no incluyen impuestos locales aplicables. La facturación es mensual. Puedes cambiar de plan o cancelar tu suscripción en cualquier momento desde tu panel de control.
                    </div>
                </div>
            </section>
        </div>
    );
}