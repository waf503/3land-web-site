import BenefitCard from "../../components/common/BenefitCard.jsx";
import {CORE_BENEFITS_DATA} from "../../constants/benefitsItems.jsx";

export default function CoreBenefits () {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-12">
                    {CORE_BENEFITS_DATA.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            icon={benefit.icon}
                            title={benefit.title}
                            desc={benefit.desc}
                        />
                    ))}                </div>
            </div>
        </section>
    )
}