import { ReceiptText, ShoppingCart, Package, Users, Building2, Truck, BarChart2, Landmark, UserCog, ShieldCheck } from 'lucide-react'

const FEATURES = [
    {
        icon: ReceiptText,
        title: 'Facturación Electrónica',
        desc: 'Emisión legal instantánea de DTEs. Envío automático por WhatsApp al cliente y gestión completa de firma electrónica ante Hacienda.',
        color: '#3b7fff',
    },
    {
        icon: ShoppingCart,
        title: 'Ventas',
        desc: 'Gestión completa del ciclo comercial: cotizaciones, órdenes de venta, despachos y facturación en un solo flujo integrado.',
        color: '#00e5b0',
    },
    {
        icon: Package,
        title: 'Inventarios',
        desc: 'Control de stock en tiempo real, multi-sucursal y multi-bodega. Alertas de bajo inventario y sincronización exacta de entradas y salidas.',
        color: '#a78bfa',
    },
    {
        icon: Building2,
        title: 'CRM',
        desc: 'Embudo de ventas avanzado con seguimiento de oportunidades, historial de clientes y automatización para convertir más prospectos.',
        color: '#fb923c',
    },
    {
        icon: Truck,
        title: 'Compras & Proveedores',
        desc: 'Control total de adquisiciones y gestión de suministros. Órdenes de compra, recepción de mercancía y relación con proveedores centralizada.',
        color: '#f472b6',
    },
    {
        icon: Landmark,
        title: 'Contabilidad & Bancos',
        desc: 'Libros contables automatizados, conciliación bancaria, cuentas por cobrar y pagar. Cumplimiento tributario con reportes fiscales integrados.',
        color: '#34d399',
    },
    {
        icon: BarChart2,
        title: 'Analítica en Tiempo Real',
        desc: 'Dashboards actualizados al segundo con KPIs gerenciales. Visualiza el estado de tu empresa y toma decisiones estratégicas inmediatas.',
        color: '#00c2e0',
    },
    {
        icon: UserCog,
        title: 'Recursos Humanos',
        desc: 'Gestión integral de talento: nómina, asistencia, vacaciones y evaluaciones de desempeño. Tu equipo siempre organizado.',
        color: '#fbbf24',
    },
    {
        icon: ShieldCheck,
        title: 'Cumplimiento y Seguridad',
        desc: 'Protección de datos bajo estándares internacionales. Seguridad de grado bancario y cumplimiento total con normativas fiscales locales.',
        color: '#e879f9',
    },
]

export default function Features() {
    return (
        <section id="features" className="section" style={{ background: 'var(--bg-surface)' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div className="tag">✦ Módulos</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, maxWidth: 660, margin: '0 auto 1rem' }}>
                        Potencia cada área de tu negocio
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                        Módulos especializados e integrados para un control total. Sin silos de información, sin hojas de cálculo perdidas.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.25rem',
                }}>
                    {FEATURES.map((f, i) => (
                        <div key={f.title} className="card" style={{ animationDelay: `${i * 0.08}s` }}>
                            <div style={{
                                position: 'absolute',
                                top: 0, right: 0,
                                width: 120, height: 120,
                                background: `radial-gradient(circle at top right, ${f.color}18, transparent 70%)`,
                                borderRadius: '0 16px 0 0',
                            }} />
                            <div style={{
                                width: 46, height: 46,
                                borderRadius: 12,
                                background: `${f.color}18`,
                                border: `1px solid ${f.color}30`,
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '1.25rem',
                                color: f.color,
                            }}>
                                <f.icon size={22} strokeWidth={1.5} color={f.color} />
                            </div>
                            <h3 style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 700,
                                fontSize: '1.05rem',
                                color: 'var(--text-primary)',
                                marginBottom: '0.6rem',
                            }}>
                                {f.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '1.5rem' }}>
                        No dejes la rentabilidad de tu empresa para el próximo mes.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="#contact" className="btn btn-primary">Agendar Demo Gratuita</a>
                        <a href="#pricing" className="btn btn-ghost">Ver Planes →</a>
                    </div>
                </div>
            </div>
        </section>
    )
}