
export default function FeatureCard({ icon: Icon, title, desc }) {
    return (
        <div className="glass p-5 rounded-2xl border border-white/5 hover:border-primary/40 transition-all group flex flex-col items-start h-full">
            {/* Icon */}
            <div className="p-2 rounded-lg bg-primary/10 mb-3 group-hover:scale-110 transition-transform duration-300">
                {Icon && <Icon className="w-6 h-6 text-primary" strokeWidth={2.5} />}
            </div>

            {/* Title */}
            <h3 className="font-bold text-sm mb-1 text-white group-hover:text-primary transition-colors">
                {title}
            </h3>
            {/* Desc */}
            <p className="text-xs text-slate-custom leading-relaxed">
                {desc}
            </p>
        </div>
    );
}