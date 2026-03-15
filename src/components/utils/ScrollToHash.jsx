import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (hash) {
            // Quitamos el '#' para obtener el ID
            const id = hash.replace('#', '');
            const element = document.getElementById(id);

            if (element) {
                // El timeout es CRÍTICO: Da tiempo a React a montar el
                // componente Home antes de intentar buscar el ID.
                const timer = setTimeout(() => {
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 150);

                return () => clearTimeout(timer);
            }
        } else {
            // Si navegamos a una página sin hash (ej: de Home a Solutions),
            // siempre volvemos arriba de todo.
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [hash, pathname]); // Se ejecuta cada vez que cambias de ruta o de ancla

    return null;
}