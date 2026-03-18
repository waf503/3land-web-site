import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import Logo from './common/Logo';
import WhatsAppButton from "./common/WhatsAppButton";
import ThemeToggle from "./common/ThemeToggle";
export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-primary/10">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-2">
                    <Logo className="h-8 w-auto brightness-0 invert" />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)} // Solo cerramos el menú móvil
                            className="text-sm font-medium text-slate-200 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Actions Buttons */}
                <div className="flex items-center gap-4">
                    {/* 1. ESTE BOTÓN SOLO SE VE EN ESCRITORIO (md:flex) */}
                    <div className="hidden md:flex">
                        <WhatsAppButton theme="secondary">
                            Obtener BILANS ERP
                        </WhatsAppButton>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobil Menu - Fondo Sólido para mejor legibilidad */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-slate-900 border-b border-primary/10 p-6 md:hidden flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-top-2">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium text-slate-100 py-4 border-b border-white/5 last:border-0 active:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Botón de WhatsApp integrado en el menú móvil */}
                    <div className="pt-2">
                        <WhatsAppButton theme="success" className="w-full py-4 text-base">
                            Demo gratuita
                        </WhatsAppButton>
                    </div>
                </nav>
            )}
        </header>
    );
}