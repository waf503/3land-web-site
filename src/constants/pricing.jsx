import { Zap, Building, Rocket } from 'lucide-react';

export const PRICING_PLANS = [
    {
        id: 'starter',
        name: 'Plan Emprendedor',
        description: 'Ideal para emprendedores y pequeñas empresas en crecimiento.',
        price: 49,
        icon: Zap,
        features: [
            'Facturación electrónica ilimitada',
            'Envío automático por WhatsApp',
            'Gestión de firmas electrónicas',
            'Soporte técnico básico'
        ],
        isPopular: false,
        buttonText: 'Contactar asesor',
    },
    {
        id: 'business',
        name: 'Plan Profesional',
        description: 'Perfecto para medianas empresas en crecimiento que necesitan control total.',
        price: 99,
        icon: Rocket,
        features: [
            'Todo lo del Plan Emprendedor',
            'Sincronización multi-sucursal',
            'Control de inventario avanzado',
            'Reportes de rentabilidad en tiempo real',
            'Integración con puntos de venta (POS)'
        ],
        isPopular: true, // Este plan se destacará visualmente
        buttonText: 'Contactar asesor',
    },
    {
        id: 'enterprise',
        name: 'Plan Empresarial',
        description: 'Soluciones personalizadas para corporativos y grandes operaciones.',
        price: 'Consultar',
        icon: Building,
        features: [
            'Todo lo del Plan Profesional',
            'Visibilidad financiera total',
            'Cuentas por cobrar y pagar (Bancos)',
            'Seguridad de grado bancario',
            'Account Manager dedicado'
        ],
        isPopular: false,
        buttonText: 'Contactar asesor',
    },
];