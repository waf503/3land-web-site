import { Link } from 'react-router-dom'

const FOOTER_LINKS = {
    'Productos':  ['Facturación Electrónica', 'Bilans Pyme', 'Bilans Enterprise', 'Restaurantes & POS'],
    'Empresa':   ['Nosotros', 'Soporte Técnico', 'Blog', 'Contacto'],
    'Legal':     ['Política de Privacidad', 'Términos de Servicio', 'Cookies', 'SLA'],
}

export default function Footer() {
    return (
        <footer style={{
            background: 'var(--bg-surface)',
            borderTop: '1px solid var(--border)',
            paddingTop: '4rem',
            paddingBottom: '2rem',
        }}>
            <div className="container">

                {/* Top grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                    gap: '2.5rem',
                    paddingBottom: '3rem',
                    borderBottom: '1px solid var(--border)',
                }}>

                    {/* Brand col */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <div style={{ marginBottom: '1rem' }}>
                            <Link to="/">
                                <img
                                    src="/logo.png"
                                    alt="Bilans ERP"
                                    style={{ height: 20, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
                                />
                            </Link>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 200 }}>
                            Potenciando el crecimiento de las empresas mediante tecnología inteligente y acompañamiento fiscal de primer nivel.
                        </p>

                        {/* Contact info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '1rem' }}>
                            <a href="mailto:hola@bilans.com" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                                hola@bilans.com
                            </a>
                            <a href="tel:+50322222222" style={{ color: 'var(--text-muted)', fontSize: '0.82rem', textDecoration: 'none' }}>
                                +503 2222-2222
                            </a>
                        </div>

                        {/* Social icons */}
                        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
                            {[{ label: '𝕏', href: '#' }, { label: 'in', href: '#' }, { label: 'fb', href: '#' }].map(s => (
                                <a key={s.label} href={s.href} style={{
                                    width: 34, height: 34,
                                    borderRadius: 8,
                                    border: '1px solid var(--border)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--text-muted)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    transition: 'all 0.2s',
                                }}
                                   onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)' }}
                                   onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-muted)' }}
                                >{s.label}</a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(FOOTER_LINKS).map(([title, links]) => (
                        <div key={title}>
                            <p style={{
                                fontFamily: 'Syne, sans-serif',
                                fontWeight: 600,
                                fontSize: '0.8rem',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'var(--text-primary)',
                                marginBottom: '1rem',
                            }}>{title}</p>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                {links.map(l => (
                                    <li key={l}>
                                        <a href="#" style={{
                                            color: 'var(--text-muted)',
                                            fontSize: '0.875rem',
                                            textDecoration: 'none',
                                            transition: 'color 0.2s',
                                        }}
                                           onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                           onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                                        >{l}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div style={{
                    paddingTop: '1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}>
                    <p style={{ color: 'var(--text-faint)', fontSize: '0.82rem' }}>
                        © {new Date().getFullYear()} Bilans ERP. Todos los derechos reservados.
                    </p>
                    <p style={{ color: 'var(--text-faint)', fontSize: '0.82rem' }}>
                        Hecho con ♥ para las PyMEs de Latinoamérica
                    </p>
                </div>
            </div>
        </footer>
    )
}