import { ArrowRight, Star, Shield, Zap } from 'lucide-react';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.15),transparent_50%)]" />

                <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter">
                        Evoluciona tu <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-cyan-300">
              Presencia Digital
            </span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Estructura base con React 19 y Tailwind 4, siguiendo principios SOLID y código limpio.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 mx-auto group">
                        Comenzar Proyecto <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                </div>
            </section>

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