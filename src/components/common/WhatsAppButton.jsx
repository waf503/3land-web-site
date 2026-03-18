import PropTypes from 'prop-types';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton({
                                           children = "Solicitar Demo",
                                           className = "",
                                           icon = true,
                                           theme = "primary",
                                           // 1. Nueva Prop para el mensaje personalizado
                                           message = ""
                                       }) {
    const whatsappNumber = "50377445560";

    // 2. Lógica de Mensaje: Si hay un mensaje por prop, úsalo. Si no, usa el genérico.
    const defaultMessage = "Hola, me gustaría obtener más información sobre sus servicios del ERP BILANS.";
    const finalMessage = message || defaultMessage;

    // 3. Generación de URL dinámica con encodeURIComponent para evitar errores con espacios o símbolos
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(finalMessage)}`;

    const themeStyles = {
        primary: "bg-primary hover:bg-primary/90 text-background-dark shadow-lg shadow-primary/20 border border-transparent",
        secondary: "bg-slate-700 hover:bg-slate-600 text-white shadow-lg shadow-slate-900/20 border border-transparent",
        success: "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/20 border border-transparent",
        outline: "bg-transparent hover:bg-primary/10 text-primary border border-primary/50 shadow-none",
        ghost: "bg-transparent hover:bg-white/5 text-slate-300 hover:text-white shadow-none border border-transparent"
    };

    const currentThemeClasses = themeStyles[theme] || themeStyles.primary;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`
                px-6 py-3 rounded-xl text-sm font-bold 
                transition-all cursor-pointer active:scale-95 no-underline 
                flex items-center justify-center gap-2
                ${currentThemeClasses}
                ${className}
            `}
        >
            {icon && <MessageCircle className="w-5 h-5" />}
            {children}
        </a>
    );
}

WhatsAppButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.bool,
    message: PropTypes.string, // Validación para el mensaje
    theme: PropTypes.oneOf(['primary', 'secondary', 'success', 'outline', 'ghost']),
};