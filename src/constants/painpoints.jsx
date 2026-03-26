import {BarChart3, ZapOff, ShieldAlert, LifeBuoy  } from 'lucide-react';

export const PAINPOINTS = [
    {
        icon: ZapOff,
        title: "Procesos manuales e ineficientes",
        desc: "Retrasos, duplicación de trabajo y errores humanos que frenan tu productividad diaria.",
        color: "red"
    },
    {
        icon: BarChart3,
        title: "Falta de visibilidad centralizada",
        desc: "Información dispersa en hojas de cálculo y sistemas desconectados. Tomas decisiones a ciegas.",
        color: "orange"
    },
    {
        icon: ZapOff, // Podrías usar uno de flexibilidad/nube
        title: "Dificultad para adaptarse",
        desc: "Sistemas antiguos o poco flexibles que no evolucionan al ritmo que tu negocio exige.",
        color: "amber"
    },
    {
        icon: ShieldAlert,
        title: "Cumplimiento de estándares",
        desc: "Facturación electrónica y otras obligaciones legales",
        color: "rose"
    },
    {
        icon: LifeBuoy,
        title: "Falta de soporte confiable",
        desc: "Proveedores que no entienden las necesidades locales ni te dan respuesta cuando más los necesitas.",
        color: "slate"
    }
];