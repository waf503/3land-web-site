import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import Hero from "../sections/home/Hero.jsx";
import Features from "../sections/home/Features.jsx";
import CoreBenefits from "../sections/home/CoreBenefits.jsx";
import CTASection from "../sections/home/CTASection.jsx";

export default function Home() {
    return (
        <>
            {/** Hero Section */}
            <Hero/>
            {/** Feature Section */}
            <Features/>
            {/**Core and benefits*/}
            <CoreBenefits/>
            {/**CTA Section*/}
            <CTASection/>
        </>
    );
}