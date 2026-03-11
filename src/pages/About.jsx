import { Target, Zap, Lock, Globe, Briefcase, Code2, Palette, HeartHandshake } from 'lucide-react'

const TEAM = [
    { name: 'Carlos Mendoza',  role: 'CEO & Co-fundador',       icon: Briefcase  },
    { name: 'Laura Ríos',      role: 'CTO & Co-fundadora',      icon: Code2      },
    { name: 'Andrés Herrera',  role: 'Head of Product',         icon: Palette    },
    { name: 'Sofía Castro',    role: 'Head of Customer Success', icon: HeartHandshake },
]

const VALUES = [
    { icon: Target, color: '#3b7fff', title: 'Enfocados en PyMEs',    desc: 'No somos un ERP corporativo adaptado. Fuimos construidos desde cero para empresas de 1 a 200 empleados.' },
    { icon: Zap,    color: '#00e5b0', title: 'Velocidad ante todo',   desc: 'Onboarding en minutos, no en meses. Creemos que el software no debería necesitar consultores para funcionar.' },
    { icon: Lock,   color: '#a78bfa', title: 'Transparencia total',   desc: 'Precios públicos, sin sorpresas. Tus datos son tuyos siempre — exporta todo cuando quieras.' },
    { icon: Globe,  color: '#fb923c', title: 'Hecho en Latinoamérica', desc: 'Entendemos los retos fiscales, culturales y operativos de la región. No es una traducción — es nativo.' },
]

export default function About() {
    return (
        <>
            {/* Hero */}
            <section className="section" style={{ paddingTop: '10rem', paddingBottom: '6rem', textAlign: 'center', overflow: 'hidden' }}>
                <div className="glow-blob" style={{
                    width: 500, height: 500,
                    background: 'radial-gradient(circle, rgba(59,127,255,0.15) 0%, transparent 70%)',
                    top: 0, left: '50%', transform: 'translateX(-50%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="tag">✦ Nosotros</div>
                    <h1 style={{
                        fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                        fontWeight: 800, maxWidth: 720,
                        margin: '0 auto 1.5rem',
                    }}>
                        Construimos el ERP que{' '}
                        <span style={{
                            background: 'linear-gradient(135deg, #3b7fff, #00e5b0)',
                            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                        }}>nosotros necesitábamos</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-muted)', fontSize: '1.1rem',
                        maxWidth: 560, margin: '0 auto', lineHeight: 1.7,
                    }}>
                        ErpFlow nació en 2021 cuando sus fundadores, frustrados con soluciones complejas y costosas, decidieron construir la herramienta que siempre quisieron tener en sus propias empresas.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: 'var(--bg-surface)', padding: '4rem 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                        gap: '2rem', textAlign: 'center',
                    }}>
                        {[
                            { value: '2021',     label: 'Año de fundación'       },
                            { value: '+2,400',   label: 'Empresas confían en nosotros' },
                            { value: '12',       label: 'Países en Latinoamérica' },
                            { value: '47',       label: 'Personas en el equipo'   },
                        ].map(stat => (
                            <div key={stat.value}>
                                <p style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800,
                                    fontSize: '2.25rem',
                                    background: 'linear-gradient(135deg, #fff 60%, #7a8aaa)',
                                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                                }}>{stat.value}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div className="tag">✦ Valores</div>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>
                            Lo que nos define
                        </h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                        gap: '1.25rem',
                    }}>
                        {VALUES.map(v => (
                            <div key={v.title} className="card">
                                <div style={{
                                    width: 46, height: 46, borderRadius: 12,
                                    background: `${v.color}18`, border: `1px solid ${v.color}30`,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    marginBottom: '1rem',
                                }}>
                                    <v.icon size={22} strokeWidth={1.5} color={v.color} />
                                </div>
                                <h3 style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
                                    fontSize: '1.05rem', marginBottom: '0.6rem', color: 'var(--text-primary)',
                                }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <div className="tag">✦ Equipo</div>
                        <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>
                            Las personas detrás del producto
                        </h2>
                    </div>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '1.25rem',
                    }}>
                        {TEAM.map(member => (
                            <div key={member.name} className="card" style={{ textAlign: 'center' }}>
                                <div style={{
                                    width: 72, height: 72, borderRadius: '50%',
                                    background: 'var(--bg-base)',
                                    border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    margin: '0 auto 1rem',
                                }}>
                                    <member.icon size={28} strokeWidth={1.5} color="var(--accent)" />
                                </div>
                                <p style={{
                                    fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
                                    fontSize: '1rem', color: 'var(--text-primary)', marginBottom: '0.35rem',
                                }}>{member.name}</p>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Bottom */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>
                        ¿Quieres unirte a la historia?
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2rem' }}>
                        Prueba ErpFlow gratis por 14 días. Sin tarjeta de crédito.
                    </p>
                    <a href="/#contact" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.5rem' }}>
                        Empezar ahora →
                    </a>
                </div>
            </section>
        </>
    )
}