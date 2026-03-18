// src/constants/footer.jsx
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone, Music2 } from 'lucide-react';

export const CONTACT_INFO = [
    {
        Icon: MapPin,
        text: "27 av. sur, entre la 6 y 10 calle poniente, #625, Colonia Flor Blanca, San Salvador, El Salvador",
    },
    {
        Icon: Phone,
        text: "(503) 77445560",
        href: "tel:+50377445560"
    },
    {
        Icon: Mail,
        text: "notificaciones@cimco.dev",
        href: "mailto:notificaciones@cimco.dev"
    }
];

export const SOCIAL_LINKS = [
    { Icon: Facebook, href: "https://www.facebook.com/bilanserp", label: "Facebook" },
    { Icon: MessageCircle, href: "https://wa.link/9i74l2", label: "Whatsapp" },
    { Icon: Instagram, href: "https://www.instagram.com/bilanserp/", label: "Instagram" },
    { Icon: Music2, href: "https://www.tiktok.com/@bilanserp", label: "TikTok" }
];

export const FOOTER_LINKS = [
    {
        title: "Producto",
        links: [
            { name: "Características", href: "#features" },
            { name: "Soluciones", href: "/solutions" },
            { name: "Precios", href: "#pricing" },
        ]
    },
    // Puedes agregar más grupos aquí...
];