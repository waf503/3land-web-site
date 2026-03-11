import { useState, useEffect } from 'react'
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
    { label: 'Producto',  href: '/#features', section: 'features' },
    { label: 'Precios',   href: '/#pricing',  section: 'pricing'  },
    { label: 'Nosotros',  href: '/about',     section: null        },
    { label: 'Contacto',  href: '/#contact',  section: 'contact'  },
]

export default function Header() {
    const [scrolled,  setScrolled]  = useState(false)
    const [menuOpen,  setMenuOpen]  = useState(false)
    const navigate  = useNavigate()
    const location  = useLocation()

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [menuOpen])

    const scrollToSection = (sectionId) => {
        const el = document.getElementById(sectionId)
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleNavClick = (link) => {
        setMenuOpen(false)
        if (link.section) {
            // Si ya estamos en Home, solo hace scroll
            if (location.pathname === '/') {
                setTimeout(() => scrollToSection(link.section), 50)
            } else {
                // Si estamos en otra page, navega a Home y luego hace scroll
                navigate('/')
                setTimeout(() => scrollToSection(link.section), 300)
            }
        }
    }

    return (
        <>
            <header style={{
                position: 'fixed',
                top: 0, left: 0, right: 0,
                zIndex: 1000,
                transition: 'all 0.3s ease',
                background: scrolled ? 'rgba(8,12,20,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
            }}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px' }}>

                    {/* Logo */}
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                        <img
                            src="/logo.png"
                            alt="Bilans ERP"
                            style={{ height: 40, width: 'auto', objectFit: 'contain', flexShrink: 0, filter: 'brightness(0) invert(1)' }}
                        />
                    </Link>

                    {/* Desktop nav */}
                    <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
                        {NAV_LINKS.map(link => (
                            link.section ? (
                                <button
                                    key={link.href}
                                    onClick={() => handleNavClick(link)}
                                    style={{
                                        background: 'none', border: 'none', cursor: 'pointer',
                                        fontSize: '0.9rem', fontWeight: 450,
                                        color: 'var(--text-muted)', transition: 'color 0.2s',
                                        fontFamily: 'DM Sans, sans-serif', padding: 0,
                                    }}
                                    onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                                    onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
                                >{link.label}</button>
                            ) : (
                                <NavLink
                                    key={link.href}
                                    to={link.href}
                                    style={({ isActive }) => ({
                                        textDecoration: 'none', fontSize: '0.9rem', fontWeight: 450,
                                        color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                                        transition: 'color 0.2s',
                                    })}
                                >{link.label}</NavLink>
                            )
                        ))}
                    </nav>

                    {/* CTA + Hamburger */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <button
                            onClick={() => handleNavClick({ section: 'contact' })}
                            className="btn btn-primary desktop-nav"
                            style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
                        >
                            Solicitar Demo
                        </button>

                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="hamburger"
                            aria-label="Menu"
                            style={{
                                display: 'none',
                                flexDirection: 'column', justifyContent: 'center',
                                alignItems: 'center', gap: '5px',
                                width: 40, height: 40,
                                background: 'transparent',
                                border: '1px solid var(--border)',
                                borderRadius: 8, cursor: 'pointer', padding: 0,
                            }}
                        >
                            {[0,1,2].map(i => (
                                <span key={i} style={{
                                    display: 'block', width: 18, height: 1.5,
                                    background: 'var(--text-primary)', borderRadius: 2,
                                    transition: 'all 0.3s ease',
                                    transform: menuOpen
                                        ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                                            : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                                                : 'scaleX(0)'
                                        : 'none',
                                    opacity: menuOpen && i === 1 ? 0 : 1,
                                }} />
                            ))}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile menu */}
            <div style={{
                position: 'fixed', inset: 0, zIndex: 999,
                background: 'rgba(8,12,20,0.97)', backdropFilter: 'blur(20px)',
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '2.5rem',
                transition: 'opacity 0.3s ease, visibility 0.3s ease',
                opacity: menuOpen ? 1 : 0,
                visibility: menuOpen ? 'visible' : 'hidden',
            }}>
                {NAV_LINKS.map((link, i) => (
                    link.section ? (
                        <button
                            key={link.href}
                            onClick={() => handleNavClick(link)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
                                fontSize: '2rem', color: 'var(--text-primary)',
                                transition: `transform 0.3s ${i * 0.07}s`,
                                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                            }}
                        >{link.label}</button>
                    ) : (
                        <NavLink
                            key={link.href}
                            to={link.href}
                            onClick={() => setMenuOpen(false)}
                            style={({ isActive }) => ({
                                textDecoration: 'none',
                                fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700,
                                fontSize: '2rem',
                                color: isActive ? 'var(--accent)' : 'var(--text-primary)',
                                transition: `transform 0.3s ${i * 0.07}s`,
                                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                            })}
                        >{link.label}</NavLink>
                    )
                ))}
                <button
                    onClick={() => handleNavClick({ section: 'contact' })}
                    className="btn btn-primary"
                    style={{ marginTop: '1rem', fontSize: '1rem', padding: '0.85rem 2.5rem' }}
                >
                    Solicitar Demo
                </button>
            </div>

            <style>{`
        @media (max-width: 767px) {
          .desktop-nav { display: none !important; }
          .hamburger   { display: flex !important; }
        }
      `}</style>
        </>
    )
}