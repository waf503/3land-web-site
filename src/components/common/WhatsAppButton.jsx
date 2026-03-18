// src/components/common/WhatsAppButton.jsx
import PropTypes from 'prop-types';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
                                           children = "Solicitar Demo",
                                           className = "", // Clases extra para posicionamiento (ej: mt-4, mx-auto)
                                           icon = true,
                                           // 1. Nueva Prop para el tema, con un valor por defecto
                                           theme = "primary"
                                       }) {
    // CENTRALIZA AQUÍ TU CONFIGURACIÓN DE WHATSAPP
    const whatsappNumber = "50377445560";
    const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios del ERP BILANS.";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // 2. MAPA DE ESTILOS (Themes)
    // Definimos las combinaciones de clases de Tailwind para cada variante.
    const themeStyles = {
        // Tema principal (el que ya tenías)
        primary: "bg-primary hover:bg-primary/90 text-background-dark shadow-lg shadow-primary/20 border border-transparent",

        // Tema secundario (ej: slate oscuro)
        secondary: "bg-slate-700 hover:bg-slate-600 text-white shadow-lg shadow-slate-900/20 border border-transparent",

        // Tema de éxito/WhatsApp (Verde)
        success: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 border border-transparent",

        // Tema Outline (solo borde, fondo transparente)
        outline: "bg-transparent hover:bg-primary/10 text-primary border border-primary/50 shadow-none",

        // Tema Minimalista (sin fondo, solo texto)
        ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white shadow-none border border-transparent"
    };

    // 3. Selección del estilo actual (con respaldo al primario si el tema no existe)
    const currentThemeClasses = themeStyles[theme] || themeStyles.primary;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            // 4. Combinación de clases: Base + Tema + Clases Extra
            className={`
                px-6 py-2.5 rounded-lg text-sm font-bold 
                transition-all cursor-pointer active:scale-95 no-underline 
                flex items-center justify-center gap-2
                ${currentThemeClasses}
                ${className}
            `}
        >
            {icon && <MessageCircle className="w-4 h-4" />}
            {children}
        </a>
    );
}

WhatsAppButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
    // 5. Validación estricta del tema usando 'oneOf'
    theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'outline', 'ghost']),
};