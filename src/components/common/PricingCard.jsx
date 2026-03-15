import { Check } from 'lucide-react';

export default function PricingCard({ plan }) {
    const { name, description, price, icon: Icon, features, isPopular, buttonText } = plan;

    return (
        <div className={`
            relative p-8 rounded-3xl border flex flex-col transition-all duration-300 group
            
            /* Efecto de sombra al pasar el mouse (para todas) */
            hover:shadow-[0_20px_50px_rgba(0,194,224,0.2)]
        
            ${isPopular
                    ? 'bg-background-dark/50 border-primary/50 shadow-[0_20px_50px_rgba(0,194,224,0.15)] scale-105 z-10 hover:scale-110'
                    : 'bg-background-dark/20 border-white/5 z-0 hover:border-primary/30 hover:bg-background-dark/40 hover:scale-105 hover:z-20'
                }
        `}>

            {/* Etiqueta de "Más Popular" */}
            {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-background-dark px-6 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                    Más Popular
                </div>
            )}

            {/* Cabecera de la Tarjeta */}
            <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl border ${isPopular ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-white/5 border-white/10 text-slate-400'}`}>
                    {Icon && <Icon size={28} strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{name}</h3>
            </div>

            <p className="text-slate-400 text-sm mb-8 leading-relaxed min-h-[60px]">{description}</p>

            {/* Sección de Precio */}
            <div className="mb-10 flex items-baseline gap-1">
                {typeof price === 'number' ? (
                    <>
                        <span className="text-5xl font-black text-white tracking-tight">${price}</span>
                        <span className="text-slate-500 text-lg font-medium">/ mes</span>
                    </>
                ) : (
                    <span className="text-4xl font-black text-white tracking-tight">{price}</span>
                )}
            </div>

            {/* Lista de Características */}
            <ul className="space-y-4 mb-12 text-sm text-slate-300 flex-grow">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                        <Check size={18} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Botón de Acción */}
            <button className={`w-full py-4 rounded-xl text-center font-bold text-lg transition-all duration-300 cursor-pointer
                ${isPopular
                ? 'bg-primary text-background-dark hover:bg-primary/90 shadow-[0_10px_30px_rgba(0,194,224,0.3)]'
                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
            }`}>
                {buttonText}
            </button>
        </div>
    );
}