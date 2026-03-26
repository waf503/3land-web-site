import Hero from "../sections/home/Hero.jsx";
import Features from "../sections/home/Features.jsx";
import CoreBenefits from "../sections/home/CoreBenefits.jsx";
import CTASection from "../sections/home/CTASection.jsx";
import TrustedBy from "../sections/home/TrustedBy.jsx";
import PainPoints from "../sections/home/PainPoints.jsx";

export default function Home() {
    return (
        <>
            {/** Hero Section */}
            <Hero/>
            <PainPoints />
            {/** Feature Section */}
            <Features/>
            {/**Core and benefits*/}
            <CoreBenefits/>
            {/**CTA Section*/}
            <CTASection/>
            {/** Trusted By: Prueba social inmediata (Logos) */}
            <TrustedBy/>
        </>
    );
}