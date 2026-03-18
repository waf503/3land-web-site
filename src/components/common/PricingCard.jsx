import { Check } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function PricingCard({ plan }) {
    const { name, description, price, icon: Icon, features, isPopular, buttonText } = plan;

    return (
        <div className={`
            relative p-8 rounded-3xl border flex flex-col transition-all duration-500 group
            
            ${isPopular
            ? 'bg-white dark:bg-background-dark/50 border-primary shadow-[0_20px_50px_rgba(0,194,224,0.15)] scale-105 z-10 hover:scale-110'
            : 'bg-white dark:bg-background-dark/20 border-slate-200 dark:border-white/5 z-0 hover:border-primary/30 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-none hover:scale-105 hover:z-20'
        }
        `}>

            {/* Etiqueta de "Más Popular" */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-slate-900 px-6 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-lg z-20">
                    Más Popular
                </div>
            )}

            {/* Cabecera de la Tarjeta */}
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl border transition-colors ${isPopular
                    ? 'bg-primary/10 border-primary/20 text-primary'
                    : 'bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-500 dark:text-slate-400'}`}>
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">{name}</h3>
            </div>

            <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed min-h-[60px]">{description}</p>

            {/* Sección de Precio */}
            <div className="mb-10 flex items-baseline gap-1">
                {typeof price === 'number' ? (
                    <>
                        <span className="text-5xl font-black text-slate-900 dark:text-white tracking-tight">${price}</span>
                        <span className="text-slate-500 text-lg font-medium">/ mes</span>
                    </>
                ) : (
                    <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">{price}</span>
                )}
            </div>

            {/* Lista de Características */}
            <ul className="space-y-4 mb-12 text-[15px] text-slate-700 dark:text-slate-300 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-1 flex-shrink-0" />
                        <span className="leading-tight">{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Botón de Acción Integrado */}
            <WhatsAppButton
                theme={isPopular ? "primary" : "outline"}
                className="w-full justify-center py-4 text-lg"
            >
                {buttonText || "Comenzar ahora"}
            </WhatsAppButton>
        </div>
    );
}