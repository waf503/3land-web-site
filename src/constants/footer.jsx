import { Linkedin, Facebook, Instagram } from 'lucide-react';
export const FOOTER_LINKS = [
    {
        title: 'Producto',
        links: [
            { name: 'Módulos', href: '#' },
            { name: 'Integraciones', href: '#' },
            { name: 'Seguridad', href: '#' },
            { name: 'Actualizaciones', href: '#' },
        ]
    },
    {
        title: 'Empresa',
        links: [
            { name: 'Sobre Nosotros', href: '#' },
            { name: 'Clientes', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Contacto', href: '#' },
        ]
    },
    {
        title: 'Legal',
        links: [
            { name: 'Términos de Servicio', href: '#' },
            { name: 'Privacidad', href: '#' },
            { name: 'Cookies', href: '#' },
            { name: 'SLA', href: '#' },
        ]
    }
];
export const SOCIAL_LINKS = [
    {
        Icon: Linkedin,
        href: '#',
        label: 'LinkedIn'
    },
    {
        Icon: Facebook,
        href: '#',
        label: 'Facebook'
    },
    {
        Icon: Instagram,
        href: '#',
        label: 'Instagram'
    },
]