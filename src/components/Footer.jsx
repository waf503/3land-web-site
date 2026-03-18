// src/components/Footer.jsx
import { Languages, MapPin, Phone, Mail } from 'lucide-react';
import { FOOTER_LINKS, SOCIAL_LINKS } from "../constants/footer.jsx";
import Logo from "./common/Logo.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-slate-900 pt-24 pb-12 border-t border-white/5">
            <div className="container-bilans">
                {/* ESTÁNDAR: Grid de 12 columnas.
                    - Branding: Ocupa 4 columnas (un tercio del ancho).
                    - Contacto: Ocupa 3 columnas.
                    - Enlaces: Ocupan 2-3 columnas cada uno.
                */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

                    {/* Columna Branding (4/12) */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link to="/" className="inline-block hover:opacity-80 transition-opacity">
                            <Logo className="h-9 w-auto brightness-0 invert" />
                        </Link>
                        <p className="text-[15px] text-slate-400 leading-relaxed max-w-sm">
                            Solución integral en la nube para empresas que buscan eficiencia,
                            control y escalabilidad en sus operaciones diarias.
                        </p>
                        <div className="flex gap-4">
                            {SOCIAL_LINKS.map(({ Icon, href, label }, idx) => (
                                <a
                                    key={idx}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-slate-400 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all"
                                >
                                    <Icon size={20} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Columna Contacto (3/12) */}
                    <div className="lg:col-span-3 lg:ml-auto">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                            Contacto
                        </h4>
                        <ul className="space-y-5">
                            <li className="flex gap-4 group">
                                <MapPin size={20} className="text-primary shrink-0 transition-transform group-hover:scale-110" />
                                <span className="text-[14px] text-slate-400 leading-snug">
                                    27 av. sur, entre la 6 y 10 calle poniente, #625, Col. Flor Blanca, San Salvador.
                                </span>
                            </li>
                            <li className="flex gap-4 group items-center">
                                <Phone size={20} className="text-primary shrink-0" />
                                <a href="tel:+50377445560" className="text-[14px] text-slate-400 hover:text-white transition-colors">
                                    (503) 77445560
                                </a>
                            </li>
                            <li className="flex gap-4 group items-center">
                                <Mail size={20} className="text-primary shrink-0" />
                                <a href="mailto:notificaciones@cimco.dev" className="text-[14px] text-slate-400 hover:text-white transition-colors">
                                    notificaciones@cimco.dev
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Columnas de Enlaces Dinámicas (Resto de columnas) */}
                    {FOOTER_LINKS.map((group, idx) => (
                        <div key={idx} className="lg:col-span-2 lg:ml-auto">
                            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-8">
                                {group.title}
                            </h4>
                            <ul className="space-y-4">
                                {group.links.map((link, lIdx) => (
                                    <li key={lIdx}>
                                        <a href={link.href} className="text-[14px] text-slate-400 hover:text-primary hover:translate-x-1 transition-all inline-block">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar: Estilo Minimalista */}
                <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
                        <p className="text-[13px] text-slate-500">
                            © {new Date().getFullYear()} Bilans ERP. Un producto de <span className="text-slate-300 font-medium">Cimco Dev</span>.
                        </p>
                        {/*<div className="flex gap-6">*/}
                        {/*    <Link to="/privacy" className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors">Privacidad</Link>*/}
                        {/*    <Link to="/terms" className="text-[13px] text-slate-500 hover:text-slate-300 transition-colors">Términos</Link>*/}
                        {/*</div>*/}
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-white/5 text-[12px] text-slate-400">
                        <Languages size={14} className="text-primary" />
                        <span>Español (Latinoamérica)</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}