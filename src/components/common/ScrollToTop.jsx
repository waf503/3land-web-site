import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Lógica para mostrar el botón solo después de 400px de scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 400) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="fixed bottom-8 right-8 z-[90] p-3 rounded-xl
                       /* Colores Adaptativos */
                       bg-white dark:bg-slate-800
                       text-primary dark:text-primary
                       /* Bordes y Sombras */
                       border border-slate-200 dark:border-white/10
                       shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.5)]
                       /* Interacción */
                       hover:scale-110 active:scale-95 hover:-translate-y-1
                       transition-all duration-300 cursor-pointer group"
        >
            <ChevronUp
                size={24}
                strokeWidth={2.5}
                className="group-hover:animate-bounce"
            />
        </button>
    );
}