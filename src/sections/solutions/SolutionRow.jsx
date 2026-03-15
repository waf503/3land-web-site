import { CheckCircle2 } from 'lucide-react';

export default function SolutionRow({ solution, index }) {
    const isEven = index % 2 === 0;
    const { tag, title, description, features, image, color, buttonText } = solution;
    const themeClass = color === 'indigo' ? 'theme-indigo' : 'theme-primary';

    return (
        <div className={`${themeClass} max-w-7xl mx-auto px-6`}>
            {/* EXPLICACIÓN DEL CAMBIO:
               Usamos 'flex-col-reverse' para que en móvil la IMAGEN (que está abajo en el HTML)
               suba al principio y el TEXTO quede abajo.
               Luego en desktop 'lg:flex-row' o 'lg:flex-row-reverse' maneja la alternancia.
            */}
            <div className={`flex flex-col-reverse ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>

                {/* Contenido de Texto */}
                <div className="flex-1 w-full">
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6
                        bg-[var(--solution-accent)]/10 text-[var(--solution-accent)] border border-[var(--solution-accent)]/20">
                        {tag}
                    </span>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                        {title}
                    </h3>

                    <p className="text-lg text-slate-custom mb-8 leading-relaxed">
                        {description}
                    </p>

                    <ul className="space-y-4 mb-10">
                        {features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="text-[var(--solution-accent)] mt-1 flex-shrink-0" size={20} />
                                <span className="text-slate-300">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="border-2 border-[var(--solution-accent)] text-[var(--solution-accent)]
                        hover:bg-[var(--solution-accent)]/10 font-bold px-8 py-3 rounded-xl transition-all hover:scale-105">
                        {buttonText}
                    </button>
                </div>

                {/* Contenedor de Imagen */}
                <div className="flex-1 w-full">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl bg-navy-light border border-white/5
                        transition-transform hover:-translate-y-2 solution-card-glow">

                        <div className="bg-white/5 px-4 py-2 flex gap-1.5 border-b border-white/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
                        </div>

                        <img className="w-full h-auto min-h-[300px] object-cover" src={image} alt={title} />
                    </div>
                </div>
            </div>
        </div>
    );
}