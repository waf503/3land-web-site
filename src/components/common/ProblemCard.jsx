// src/components/common/ProblemCard.jsx
export default function ProblemCard({ icon: Icon, title, desc }) {
    return (
        <div className="flex flex-col items-center text-center space-y-5 group transition-all duration-500">
            {/* Contenedor del Icono: 100% ADN Bilans */}
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-primary transition-all duration-500
                          bg-white shadow-[0_10px_25px_-5px_rgba(0,194,224,0.15)]
                          dark:bg-primary/10 dark:shadow-[0_0_20px_rgba(0,194,224,0.2)]
                          group-hover:scale-110 group-hover:-translate-y-1">
                {Icon && <Icon size={32} strokeWidth={1.5} />}
            </div>

            {/* Título: Slate-900 / White con hover a Primary */}
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors duration-300">
                {title}
            </h3>

            {/* Descripción: Usando tu clase uniforme .text-bilans-muted */}
            <p className="text-slate-600 dark:text-slate-custom text-[15px] leading-relaxed max-w-xs">
                {desc}
            </p>
        </div>
    );
}