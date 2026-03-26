import { FEATURES_ITEMS } from '../../constants/featuresItems'
import FeatureCard from "../../components/common/FeatureCard";

export default function Features() {
    return (
        <section
            id="features"
            className="py-32 bg-white dark:bg-background-dark transition-colors duration-500"
        >
            <div className="container-bilans">
                {/* Header de Sección: Jerarquía Clara */}
                <div className="max-w-3xl mx-auto text-center mb-20 space-y-5">
                    <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.1]">
                        Potencia cada área de tu negocio
                    </h2>
                    <p className="text-bilans-body max-w-2xl mx-auto">
                        Módulos especializados e integrados para un control total y una gestión eficiente.
                    </p>
                </div>

                {/* Grid con espaciado amplio (gap-8) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {FEATURES_ITEMS.map((feat)=> (
                        <FeatureCard
                            key={feat.title}
                            icon={feat.icon}
                            title={feat.title}
                            desc={feat.desc}
                            color={feat.color}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}