// src/components/common/ThemeToggle.jsx
import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    // Inicializamos el estado basándonos en localStorage o preferencia del sistema
    const [isDark, setIsDark] = useState(() => {
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            // Si no hay nada guardado, devolvemos 'true' (Dark Mode por defecto)
            return savedTheme ? savedTheme === 'dark' : true;
        }
        return true;
    });

    useEffect(() => {
        const root = window.document.documentElement;

        if (isDark) {
            root.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className="relative p-2 rounded-full bg-slate-200 dark:bg-white/5 text-slate-600 dark:text-yellow-400 hover:scale-110 transition-all duration-300 border border-transparent dark:border-white/10"
            aria-label="Cambiar tema"
        >
            {isDark ? (
                <Sun size={20} strokeWidth={2.5} className="animate-in zoom-in duration-300" />
            ) : (
                <Moon size={20} strokeWidth={2.5} className="animate-in zoom-in duration-300 text-slate-700" />
            )}
        </button>
    );
}