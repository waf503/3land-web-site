import BenefitCard from "../../components/common/BenefitCard.jsx";
import { CORE_BENEFITS_DATA } from "../../constants/benefitsItems.jsx";

export default function CoreBenefits() {
    return (
        /* Fondo adaptativo con transición suave */
        <section className="py-32 relative overflow-hidden bg-white dark:bg-background-dark transition-colors duration-500">
            {/* Decoración de fondo sutil (opcional para dar textura) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none
                            bg-[radial-gradient(circle_at_center,rgba(0,194,224,0.03)_0%,transparent_70%)]
                            dark:hidden" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid md:grid-cols-3 gap-16 lg:gap-24">
                    {CORE_BENEFITS_DATA.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            desc={benefit.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}