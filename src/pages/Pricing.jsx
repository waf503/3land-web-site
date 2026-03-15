import PricingCard from '../components/common/PricingCard';
import { PRICING_PLANS } from '../constants/pricing';

export default function Pricing() {
    return (
        <> {/* Usamos un fragment para no ensuciar el DOM */}
            {/* 1. SECCIÓN HERO DE PRECIOS */}
            <section className="py-32 relative overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 pattern-dots opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Precios Transparentes
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
                        Planes que impulsan tu <br/> <span className="text-primary">crecimiento</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-medium leading-relaxed">
                        Desde facturación básica hasta control total de proyectos. Elige el motor que tu empresa necesita para crecer.
                    </p>
                </div>
            </section>

            {/* 2. CUADRÍCULA DE PLANES (PRICING GRID) */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Badge Mensualidades */}
                    <div className="flex justify-center mb-16">
                        <div className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                            </span>
                            <span className="text-white text-sm font-bold tracking-wide uppercase">
                                Mensualidades desde:
                            </span>
                        </div>
                    </div>

                    {/* Grid de Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                        {PRICING_PLANS.map((plan) => (
                            <PricingCard key={plan.id} plan={plan} />
                        ))}
                    </div>

                    {/* Nota aclaratoria */}
                    <div className="mt-24 text-center text-slate-500 text-sm max-w-2xl mx-auto border border-white/5 rounded-2xl p-8 bg-background-dark/20 leading-relaxed">
                        * Los precios mostrados son en USD y no incluyen impuestos locales aplicables. La facturación es mensual. Puedes cambiar de plan o cancelar tu suscripción en cualquier momento desde tu panel de control.
                    </div>
                </div>
            </section>
        </>
    );
}