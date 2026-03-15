import { FEATURES_ITEMS } from '../../constants/featuresItems'
import FeatureCard from "../../components/common/FeatureCard";

export default function Features() {
    return (
        <section id="features" className="py-24 bg-[#081221]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-3xl lg:text-4xl font-bold text-white">
                        Potencia cada área de tu negocio
                    </h1>
                    <p className="text-slate-custom">
                        Módulos especializados e integrados para un control total.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
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