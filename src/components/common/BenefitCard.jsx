export default function BenefitCard({ icon: Icon, title, desc }) {
    return (
        <div className="flex flex-col items-center text-center space-y-4 group">
            {/* Contenedor del Icono con el Shadow/Glow de tu referencia */}
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary
                          shadow-[0_0_20px_rgba(0,194,224,0.3)] group-hover:scale-110 transition-all duration-300">
                {Icon && <Icon size={32} strokeWidth={1.5} />}
            </div>

            <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 dark:text-slate-custom text-sm leading-relaxed max-w-xs">
                {desc}
            </p>
        </div>
    );
}