import { useState } from 'react'

const PLANS = [
    {
        name: 'Plan Emprendedor',
        desc: 'Ideal para profesionales independientes y microempresas.',
        monthlyPrice: 49,
        color: '#7a8aaa',
        features: [
            'Facturación electrónica ilimitada',
            'Envío automático por WhatsApp',
            'Gestión de firmas electrónicas',
            'Soporte técnico básico',
        ],
        cta: 'Contactar asesor',
        highlighted: false,
    },
    {
        name: 'Plan Profesional',
        desc: 'Para negocios en crecimiento que necesitan control total.',
        monthlyPrice: 99,
        color: '#3b7fff',
        features: [
            'Todo lo del Plan Emprendedor',
            'Sincronización multi-sucursal',
            'Control de inventario avanzado',
            'Reportes de rentabilidad en tiempo real',
            'Integración con puntos de venta (POS)',
        ],
        cta: 'Contactar asesor',
        highlighted: true,
        badge: 'Más solicitada',
    },
    {
        name: 'Plan Enterprise',
        desc: 'Soluciones personalizadas para operaciones corporativas.',
        monthlyPrice: 199,
        color: '#00e5b0',
        features: [
            'Todo lo del Plan Profesional',
            'Visibilidad financiera total',
            'Cuentas por cobrar y pagar (Bancos)',
            'Seguridad de grado bancario',
            'Account Manager dedicado',
        ],
        cta: 'Contactar asesor',
        highlighted: false,
    },
]

export default function Pricing() {
    return (
        <section id="pricing" className="section" style={{ overflow: 'hidden' }}>

            <div className="glow-blob" style={{
                width: 500, height: 500,
                background: 'radial-gradient(circle, rgba(59,127,255,0.1) 0%, transparent 70%)',
                bottom: -100, left: '50%', transform: 'translateX(-50%)',
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                    <div className="tag">✦ Precios</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        Planes que impulsan tu crecimiento
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem' }}>
                        Desde facturación básica hasta control total de proyectos. Elige el motor que tu empresa necesita para crecer.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1.25rem',
                    alignItems: 'start',
                }}>
                    {PLANS.map(plan => (
                        <div
                            key={plan.name}
                            style={{
                                background: plan.highlighted ? 'var(--bg-elevated)' : 'var(--bg-surface)',
                                border: plan.highlighted
                                    ? `1px solid ${plan.color}`
                                    : '1px solid var(--border)',
                                borderRadius: 18,
                                padding: '2rem',
                                position: 'relative',
                                overflow: 'hidden',
                                transform: plan.highlighted ? 'scale(1.03)' : 'scale(1)',
                                boxShadow: plan.highlighted
                                    ? `0 0 40px ${plan.color}25`
                                    : 'none',
                            }}
                        >
                            {plan.highlighted && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0, left: 0, right: 0,
                                    height: 2,
                                    background: `linear-gradient(90deg, transparent, ${plan.color}, transparent)`,
                                }} />
                            )}

                            {plan.badge && (
                                <div style={{
                                    position: 'absolute', top: '1.25rem', right: '1.25rem',
                                    background: `${plan.color}20`,
                                    color: plan.color,
                                    border: `1px solid ${plan.color}40`,
                                    borderRadius: 999,
                                    padding: '0.2rem 0.65rem',
                                    fontSize: '0.72rem',
                                    fontWeight: 600,
                                }}>{plan.badge}</div>
                            )}

                            <p style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: 700,
                                fontSize: '1.15rem',
                                color: 'var(--text-primary)',
                                marginBottom: '0.4rem',
                            }}>{plan.name}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>{plan.desc}</p>

                            <div style={{ marginBottom: '1.75rem' }}>
                                <span style={{
                                    fontFamily: 'Syne, sans-serif',
                                    fontWeight: 800,
                                    fontSize: '2.75rem',
                                    color: 'var(--text-primary)',
                                }}>${plan.monthlyPrice}</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginLeft: '0.25rem' }}>/mes</span>
                            </div>

                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '2rem' }}>
                                {plan.features.map(f => (
                                    <li key={f} style={{
                                        display: 'flex', alignItems: 'center', gap: '0.6rem',
                                        fontSize: '0.9rem', color: 'var(--text-muted)',
                                    }}>
                                        <span style={{ color: plan.color, fontSize: '0.75rem', flexShrink: 0 }}>✔</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                style={{
                                    display: 'block',
                                    textAlign: 'center',
                                    padding: '0.8rem',
                                    borderRadius: 10,
                                    fontWeight: 600,
                                    fontSize: '0.9rem',
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                    background: plan.highlighted ? plan.color : 'transparent',
                                    color: plan.highlighted ? '#fff' : plan.color,
                                    border: `1px solid ${plan.color}`,
                                    boxShadow: plan.highlighted ? `0 0 20px ${plan.color}40` : 'none',
                                }}
                                onMouseEnter={e => {
                                    if (!plan.highlighted) {
                                        e.currentTarget.style.background = `${plan.color}15`
                                    } else {
                                        e.currentTarget.style.filter = 'brightness(1.1)'
                                    }
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = plan.highlighted ? plan.color : 'transparent'
                                    e.currentTarget.style.filter = 'none'
                                }}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                        Tranquilidad fiscal y operativa a un clic de distancia.
                    </p>
                </div>
            </div>
        </section>
    )
}