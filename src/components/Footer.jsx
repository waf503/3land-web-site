import { Facebook, Instagram, Linkedin, Globe, Languages } from 'lucide-react';
import {FOOTER_LINKS, SOCIAL_LINKS} from "../constants/footer.jsx";
import Logo from "./common/Logo.jsx";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer className="dark:bg-[#060d19] pt-20 pb-10 border-t border-slate-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Columna Branding */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center gap-2">
                            <Logo className="h-8 w-auto brightness-0 invert" />
                        </Link>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-custom leading-relaxed">
                        Solución integral en la nube para empresas que buscan eficiencia, control y escalabilidad en sus
                        operaciones diarias.
                    </p>
                    <div className="flex gap-4">
                        {SOCIAL_LINKS.map(({ Icon, href, label }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="w-10 h-10 rounded-lg bg-slate-200 dark:bg-navy-lighter flex items-center justify-center text-slate-600 dark:text-slate-custom hover:text-primary transition-all hover:-translate-y-1"
                            >
                                <Icon size={18} strokeWidth={2} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Columnas de Enlaces Dinámicas */}
                {FOOTER_LINKS.map((group, idx) => (
                    <div key={idx}>
                        <h4 className="font-bold mb-6 text-slate-900 dark:text-white uppercase text-xs tracking-widest">{group.title}</h4>
                        <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-custom">
                            {group.links.map((link, lIdx) => (
                                <li key={lIdx}>
                                    <a href={link.href} className="hover:text-primary transition-colors inline-block">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-custom">
                    © {new Date().getFullYear()} Bilans ERP. Todos los derechos reservados.
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-custom">
                    <Languages size={14} className="text-primary" />
                    <span>Español (Latinoamérica)</span>
                </div>
            </div>
        </footer>
    );
}