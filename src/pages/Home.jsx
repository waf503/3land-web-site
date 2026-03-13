import { ArrowRight, Star, Shield, Zap } from 'lucide-react';
import Hero from "../sections/home/Hero.jsx";

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <Hero/>

            {/* Características para probar Scroll */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50">
                            <Zap className="text-yellow-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Rendimiento</h3>
                            <p className="text-slate-600">Vite 7 asegura tiempos de carga instantáneos.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50">
                            <Shield className="text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Seguridad</h3>
                            <p className="text-slate-600">Arquitectura modular y escalable.</p>
                        </div>
                        <div className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50">
                            <Star className="text-purple-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                            <p className="text-slate-600">Fácil de mantener y libre de deudas técnicas.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Espaciador final */}
            <section className="h-[50vh] bg-slate-50 flex items-center justify-center border-t border-slate-200">
                <p className="text-slate-400 font-medium italic">3Land Web Site - 2026</p>
            </section>
        </>
    );
}