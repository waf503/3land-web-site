import { useEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

export default function ScrollToHash() {
    const { hash, pathname, key } = useLocation();
    const navType = useNavigationType(); // Detecta si es PUSH, POP o REPLACE

    useEffect(() => {
        const scrollToElement = () => {
            if (hash) {
                const id = hash.replace('#', '');
                const element = document.getElementById(id);

                if (element) {
                    // Mantenemos tu timer crítico
                    setTimeout(() => {
                        element.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }, 100);
                }
            } else if (navType === 'PUSH' || navType === 'REPLACE') {
                // Solo hacemos scroll arriba si es una navegación nueva y no hay hash
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        };

        scrollToElement();

    }, [hash, pathname, key]); // <--- La clave es agregar 'key'

    return null;
}