import { CheckCircle2 } from 'lucide-react';
import WhatsAppButton from '../../components/common/WhatsAppButton.jsx';

export default function SolutionRow({ solution, index }) {
    const isEven = index % 2 === 0;
    const { tag, title, description, features, image, color, buttonText } = solution;
    const themeClass = color === 'indigo' ? 'theme-indigo' : 'theme-primary';

    return (
        <div className={`${themeClass} max-w-7xl mx-auto px-6 transition-colors duration-500`}>
            <div className={`flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                {/* Contenido de Texto */}
                <div className="flex-1 w-full">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6
                        bg-[var(--solution-accent)]/10 text-[var(--solution-accent)] border border-[var(--solution-accent)]/20">
                        {tag}
                    </span>

                    {/* Título adaptativo: text-slate-900 en light */}
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
                        {title}
                    </h3>

                    {/* Descripción adaptativa: text-slate-600 en light */}
                    <p className="text-lg text-slate-600 dark:text-slate-custom mb-8 leading-relaxed">
                        {description}
                    </p>

                    <ul className="space-y-4 mb-10">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                                <CheckCircle2 className="text-[var(--solution-accent)] mt-1 flex-shrink-0" size={20} />
                                <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Integración de WhatsAppButton */}
                    <WhatsAppButton theme="primary" icon={true}>
                        {buttonText || "Consultar Solución"}
                    </WhatsAppButton>
                </div>

                {/* Contenedor de Imagen con Efecto Navegador adaptado */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-navy-light border border-slate-200 dark:border-white/5
                        transition-transform hover:-translate-y-2 solution-card-glow">

                        <div className="bg-slate-50 dark:bg-white/5 px-4 py-3 flex gap-1.5 border-b border-slate-200 dark:border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40"></div>
                        </div>

                        <img className="w-full h-auto min-h-[300px] object-cover" src={image} alt={title} loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    );
}