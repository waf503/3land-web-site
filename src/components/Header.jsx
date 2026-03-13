import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants/navigation';
import Logo from '../common/Logo';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50 glass">
            <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo con el filtro invertido de tu referencia */}
                <Link to="/" className="flex items-center gap-2">
                    <Logo className="h-8 w-auto brightness-0 invert" />
                </Link>

                {/* Desktop Nav - Aplicando colores de tu referencia */}
                <div className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm font-medium text-slate-200 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Botones de Acción */}
                <div className="flex items-center gap-4">
                    <button className="hidden sm:block text-sm font-semibold text-slate-200 hover:text-primary transition-colors cursor-pointer">
                        Log In
                    </button>

                    <button className="bg-primary hover:bg-primary/90 text-background-dark px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer active:scale-95">
                        Demo gratuita
                    </button>

                    {/* Botón hamburguesa móvil */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Menú Móvil - Adaptado al estilo Glass */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full glass p-6 md:hidden flex flex-col gap-4">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
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