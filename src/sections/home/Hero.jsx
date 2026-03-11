import { LayoutDashboard, Package, Grid2x2, CircleDot, Minus } from 'lucide-react'

const SIDEBAR_ICONS = [LayoutDashboard, Grid2x2, Package, CircleDot, Minus]

export default function Hero() {
    return (
        <section id="hero" className="section" style={{ paddingTop: '10rem', paddingBottom: '8rem', overflow: 'hidden' }}>

            {/* Background glows */}
            <div className="glow-blob" style={{
                width: 600, height: 600,
                background: 'radial-gradient(circle, rgba(59,127,255,0.18) 0%, transparent 70%)',
                top: -100, left: '50%', transform: 'translateX(-50%)',
            }} />
            <div className="glow-blob" style={{
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(0,229,176,0.12) 0%, transparent 70%)',
                top: 200, right: -100,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Badge */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                    <div className="animate-fade-up" style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.35rem 1rem',
                        borderRadius: 999,
                        border: '1px solid rgba(0,229,176,0.25)',
                        background: 'rgba(0,229,176,0.06)',
                        color: 'var(--accent-alt)',
                        fontSize: '0.8rem', fontWeight: 500, letterSpacing: '0.04em',
                    }}>
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-alt)', display: 'inline-block', animation: 'pulse-glow 2s infinite' }} />
                        Nueva Versión 4.0 — Optimiza tu gestión empresarial
                    </div>
                </div>

                {/* Headline */}
                <h1 className="animate-fade-up delay-1" style={{
                    fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                    fontWeight: 800,
                    textAlign: 'center',
                    maxWidth: 820,
                    margin: '0 auto 1.5rem',
                    lineHeight: 1.1,
                }}>
                    Optimiza tu gestión{' '}
                    <span style={{
                        background: 'linear-gradient(135deg, #3b7fff 0%, #00e5b0 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
            empresarial
          </span>
                </h1>

                {/* Subheadline */}
                <p className="animate-fade-up delay-2" style={{
                    fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                    color: 'var(--text-muted)',
                    textAlign: 'center',
                    maxWidth: 580,
                    margin: '0 auto 2.5rem',
                    lineHeight: 1.7,
                    fontWeight: 300,
                }}>
                    Automatiza procesos, escala tu negocio y toma decisiones basadas en datos con nuestra plataforma integral diseñada para el crecimiento sostenible de empresas modernas.
                </p>

                {/* CTAs */}
                <div className="animate-fade-up delay-3" style={{
                    display: 'flex', flexWrap: 'wrap',
                    gap: '1rem', justifyContent: 'center',
                    marginBottom: '4rem',
                }}>
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                        Agendar Demo
                    </a>
                    <a href="#pricing" className="btn btn-ghost" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                        Ver Planes →
                    </a>
                </div>

                {/* Stats row */}
                <div className="animate-fade-up delay-4" style={{
                    display: 'flex', flexWrap: 'wrap',
                    justifyContent: 'center', gap: '3rem',
                    marginBottom: '4rem',
                }}>
                    {[
                        { value: '14+',      label: 'Módulos integrados'    },
                        { value: '99.9%',    label: 'Uptime garantizado'    },
                        { value: '100%',     label: 'En la nube'            },
                        { value: '4.9 ★',    label: 'Calificación promedio' },
                    ].map(stat => (
                        <div key={stat.value} style={{ textAlign: 'center' }}>
                            <p style={{
                                fontFamily: 'Plus Jakarta Sans, sans-serif',
                                fontWeight: 800,
                                fontSize: '1.75rem',
                                background: 'linear-gradient(135deg, #fff 60%, #7a8aaa)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>{stat.value}</p>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '0.2rem' }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Dashboard mockup */}
                <div className="animate-fade-up delay-5" style={{
                    position: 'relative',
                    maxWidth: 900,
                    margin: '0 auto',
                    animation: 'float 6s ease-in-out infinite',
                }}>
                    {/* Glow behind card */}
                    <div style={{
                        position: 'absolute',
                        inset: '-1px',
                        borderRadius: 20,
                        background: 'linear-gradient(135deg, rgba(59,127,255,0.3), rgba(0,229,176,0.15))',
                        filter: 'blur(1px)',
                        zIndex: 0,
                    }} />

                    <div style={{
                        position: 'relative', zIndex: 1,
                        background: 'var(--bg-elevated)',
                        borderRadius: 18,
                        border: '1px solid rgba(255,255,255,0.08)',
                        overflow: 'hidden',
                    }}>
                        {/* Window chrome */}
                        <div style={{
                            padding: '0.75rem 1.25rem',
                            borderBottom: '1px solid var(--border)',
                            display: 'flex', alignItems: 'center', gap: '0.5rem',
                            background: 'rgba(255,255,255,0.02)',
                        }}>
                            {['#ff5f57','#febc2e','#28c840'].map(c => (
                                <div key={c} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                            ))}
                            <div style={{
                                marginLeft: '0.75rem', flex: 1, maxWidth: 260,
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: 6, height: 22,
                                display: 'flex', alignItems: 'center', paddingLeft: '0.6rem',
                            }}>
                                <span style={{ color: 'var(--text-faint)', fontSize: '0.7rem' }}>app.bilans.com/dashboard</span>
                            </div>
                        </div>

                        {/* Dashboard content */}
                        <div style={{ padding: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>

                            {/* Sidebar */}
                            <div style={{
                                width: 48, flexShrink: 0,
                                display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center',
                                paddingTop: '0.5rem',
                            }}>
                                {SIDEBAR_ICONS.map((Icon, i) => (
                                    <div key={i} style={{
                                        width: 34, height: 34, borderRadius: 9,
                                        background: i === 0 ? 'var(--accent)' : 'rgba(255,255,255,0.04)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <Icon size={16} strokeWidth={1.5} color={i === 0 ? '#fff' : 'var(--text-faint)'} />
                                    </div>
                                ))}
                            </div>

                            {/* Main content */}
                            <div style={{ flex: 1, minWidth: 200 }}>
                                {/* KPI cards */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '0.75rem', marginBottom: '1rem' }}>
                                    {[
                                        { label: 'Ventas del mes', value: '$148,290', delta: '+12.4%', up: true },
                                        { label: 'Órdenes activas', value: '384',      delta: '+8.1%',  up: true },
                                        { label: 'Stock crítico',    value: '7 items',  delta: '-2',     up: false },
                                        { label: 'Nómina pend.',     value: '$31,200',  delta: '3 días',  up: true },
                                    ].map(kpi => (
                                        <div key={kpi.label} style={{
                                            background: 'rgba(255,255,255,0.03)',
                                            borderRadius: 10, padding: '0.85rem',
                                            border: '1px solid var(--border)',
                                        }}>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.65rem', marginBottom: '0.35rem' }}>{kpi.label}</p>
                                            <p style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1rem', color: 'var(--text-primary)' }}>{kpi.value}</p>
                                            <p style={{ fontSize: '0.65rem', color: kpi.up ? 'var(--accent-alt)' : '#ff6b6b', marginTop: '0.2rem' }}>{kpi.delta}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Fake chart bars */}
                                <div style={{
                                    background: 'rgba(255,255,255,0.02)',
                                    border: '1px solid var(--border)',
                                    borderRadius: 10, padding: '1rem',
                                }}>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '0.75rem' }}>Ingresos — últimos 6 meses</p>
                                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: 60 }}>
                                        {[40, 65, 50, 80, 72, 95].map((h, i) => (
                                            <div key={i} style={{
                                                flex: 1,
                                                height: `${h}%`,
                                                borderRadius: '4px 4px 0 0',
                                                background: i === 5
                                                    ? 'linear-gradient(180deg, #3b7fff, #00e5b0)'
                                                    : 'rgba(59,127,255,0.25)',
                                            }} />
                                        ))}
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.5rem' }}>
                                        {['Ago','Sep','Oct','Nov','Dic','Ene'].map(m => (
                                            <span key={m} style={{ color: 'var(--text-faint)', fontSize: '0.6rem' }}>{m}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}