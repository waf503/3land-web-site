import { useState } from 'react'
import { Zap, Target, CreditCard, ArrowRightLeft } from 'lucide-react'

export default function Contact() {
    const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', plan: '', message: '' })
    const [sent, setSent] = useState(false)
    const [loading, setLoading] = useState(false)

    const handle = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

    const submit = async (e) => {
        e.preventDefault()
        setLoading(true)
        await new Promise(r => setTimeout(r, 1200)) // simulate API call
        setLoading(false)
        setSent(true)
    }

    const inputStyle = {
        width: '100%',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: '0.75rem 1rem',
        color: 'var(--text-primary)',
        fontSize: '0.9rem',
        fontFamily: 'DM Sans, sans-serif',
        outline: 'none',
        transition: 'border-color 0.2s',
    }

    return (
        <section id="contact" className="section" style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>

            <div className="glow-blob" style={{
                width: 400, height: 400,
                background: 'radial-gradient(circle, rgba(0,229,176,0.1) 0%, transparent 70%)',
                top: 0, right: -100,
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '4rem',
                    alignItems: 'center',
                }}>

                    {/* Left - copy */}
                    <div>
                        <div className="tag">✦ Contacto</div>
                        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
                            Agenda una consultoría{' '}
                            <span style={{
                                background: 'linear-gradient(135deg, #3b7fff, #00e5b0)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}>gratuita</span>
                        </h2>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                            Agenda una consultoría gratuita de 15 minutos y descubre cómo Bilans automatiza tu operación desde hoy — sin compromiso.
                        </p>

                        {/* Trust points */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {[
                                { icon: Zap,             text: 'Respuesta en menos de 2 horas hábiles' },
                                { icon: Target,          text: 'Demo personalizada para tu industria'   },
                                { icon: CreditCard,      text: 'Sin tarjeta de crédito, sin compromisos' },
                                { icon: ArrowRightLeft,  text: 'Migración de datos incluida en todos los planes' },
                            ].map(item => (
                                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                    <div style={{
                                        width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                                        background: 'rgba(59,127,255,0.1)', border: '1px solid rgba(59,127,255,0.2)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    }}>
                                        <item.icon size={16} strokeWidth={1.5} color="var(--accent)" />
                                    </div>
                                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - form */}
                    <div style={{
                        background: 'var(--bg-elevated)',
                        border: '1px solid var(--border)',
                        borderRadius: 20,
                        padding: '2.25rem',
                    }}>
                        {sent ? (
                            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                                <h3 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 700, fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                                    ¡Mensaje recibido!
                                </h3>
                                <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>
                                    Un miembro de nuestro equipo se pondrá en contacto contigo en las próximas 2 horas hábiles.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                                {/* Row: name + company */}
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {[
                                        { name: 'name',    placeholder: 'Tu nombre',  label: 'Nombre' },
                                        { name: 'company', placeholder: 'Tu empresa', label: 'Empresa' },
                                    ].map(f => (
                                        <div key={f.name}>
                                            <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>{f.label}</label>
                                            <input
                                                required
                                                name={f.name}
                                                placeholder={f.placeholder}
                                                value={form[f.name]}
                                                onChange={handle}
                                                style={inputStyle}
                                                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                                onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Email */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>Email corporativo</label>
                                    <input
                                        required type="email"
                                        name="email" placeholder="tu@empresa.com"
                                        value={form.email} onChange={handle}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                    />
                                </div>

                                {/* Phone */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>Teléfono (opcional)</label>
                                    <input
                                        name="phone" placeholder="+52 555 000 0000"
                                        value={form.phone} onChange={handle}
                                        style={inputStyle}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                    />
                                </div>

                                {/* Plan */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>Plan de interés</label>
                                    <select
                                        name="plan" value={form.plan} onChange={handle}
                                        style={{ ...inputStyle, cursor: 'pointer' }}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                    >
                                        <option value="" style={{ background: '#0d1420' }}>Selecciona un plan</option>
                                        {['Plan Emprendedor', 'Plan Profesional', 'Plan Enterprise', 'Aún no lo sé'].map(p => (
                                            <option key={p} value={p} style={{ background: '#0d1420' }}>{p}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message */}
                                <div>
                                    <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: 500 }}>¿Algún requerimiento especial?</label>
                                    <textarea
                                        name="message" placeholder="Cuéntanos sobre tu negocio..."
                                        value={form.message} onChange={handle}
                                        rows={3}
                                        style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                                        onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                                        onBlur={e => e.target.style.borderColor = 'var(--border)'}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    style={{
                                        width: '100%',
                                        padding: '0.9rem',
                                        borderRadius: 10,
                                        border: 'none',
                                        background: loading ? 'rgba(59,127,255,0.5)' : 'var(--accent)',
                                        color: '#fff',
                                        fontWeight: 600,
                                        fontSize: '0.95rem',
                                        fontFamily: 'DM Sans, sans-serif',
                                        cursor: loading ? 'not-allowed' : 'pointer',
                                        transition: 'all 0.2s',
                                        boxShadow: '0 0 24px var(--accent-glow)',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                                    }}
                                >
                                    {loading ? (
                                        <>
                      <span style={{
                          width: 16, height: 16,
                          border: '2px solid rgba(255,255,255,0.3)',
                          borderTopColor: '#fff',
                          borderRadius: '50%',
                          display: 'inline-block',
                          animation: 'spin 0.7s linear infinite',
                      }} />
                                            Enviando...
                                        </>
                                    ) : 'Solicitar Demo Gratuita →'}
                                </button>

                                <p style={{ textAlign: 'center', color: 'var(--text-faint)', fontSize: '0.78rem' }}>
                                    Al enviar, aceptas nuestra{' '}
                                    <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>política de privacidad</a>
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    )
}