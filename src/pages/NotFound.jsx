import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <section className="section" style={{
            paddingTop: '12rem', paddingBottom: '8rem',
            textAlign: 'center', overflow: 'hidden',
        }}>
            <div className="glow-blob" style={{
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(59,127,255,0.12) 0%, transparent 70%)',
                top: 0, left: '50%', transform: 'translateX(-50%)',
            }} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <p style={{
                    fontFamily: 'Syne, sans-serif', fontWeight: 800,
                    fontSize: '8rem', lineHeight: 1,
                    background: 'linear-gradient(135deg, rgba(59,127,255,0.4), rgba(0,229,176,0.2))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem',
                }}>404</p>
                <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 800, marginBottom: '1rem' }}>
                    Página no encontrada
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginBottom: '2.5rem' }}>
                    La página que buscas no existe o fue movida.
                </p>
                <Link to="/" className="btn btn-primary" style={{ fontSize: '1rem', padding: '0.85rem 2rem' }}>
                    ← Volver al inicio
                </Link>
            </div>
        </section>
    )
}