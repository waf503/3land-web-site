import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import Logo from './common/Logo';
import WhatsAppButton from "./common/WhatsAppButton";
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
                    <WhatsAppButton theme="secondary">
                        Obtener BILANS ERP
                    </WhatsAppButton>

                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobil glass menu */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={(e) => handleLinkClick(e, link.href)}
                            className="text-lg font-medium text-slate-100 py-3 border-b border-primary/10 last:border-0"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>
    );
}