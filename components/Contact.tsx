'use client'
import { useState } from 'react'
import { useFadeUp } from './useFadeUp'

const INFO = [
    { label: 'Email', value: 'manthancg23@gmail.com', href: 'mailto:manthancg23@gmail.com' },
    { label: 'Phone', value: '+91 7020406293', href: 'tel:+917020406293' },
    { label: 'Location', value: 'Aurangabad, Maharashtra', href: undefined },
    { label: 'LinkedIn', value: 'linkedin.com/in/manthangourshete', href: 'https://linkedin.com/in/manthangourshete' },
    { label: 'GitHub', value: 'github.com/GManthan', href: 'https://github.com/GManthan' },
]

const AWARDS = [
    { title: 'OpenAI × NxtWave Buildathon', detail: 'Zonal Winner', year: '2024' },
    { title: 'India Skills 2025–26', detail: 'State Qualified', year: '2025' },
    { title: 'Avishkar Zonal', detail: 'Bronze Medal', year: '2024' },
    { title: 'Innohack 2.0', detail: 'Top 10 Finalist', year: '2025' },
]

export default function Contact() {
    const ref = useFadeUp()
    const [status, setStatus] = useState('')
    const [sending, setSending] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); setSending(true); setStatus('')
        const fd = new FormData(e.currentTarget)
        fd.append('access_key', 'e6fd6fb9-47f2-4686-b73e-b9da28e22a83')
        const obj = Object.fromEntries(fd)
        try {
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(obj),
            })
            const data = await res.json()
            setStatus(data.success ? 'ok' : 'err')
            if (data.success) (e.target as HTMLFormElement).reset()
        } catch { setStatus('err') }
        finally { setSending(false) }
    }

    const inp: React.CSSProperties = {
        width: '100%', padding: '10px 14px', background: 'var(--bg-card)',
        border: '1px solid var(--border)', borderRadius: 5, color: 'var(--text-primary)',
        fontSize: '0.84rem', fontFamily: 'inherit', outline: 'none',
    }

    return (
        <>
            {/* Achievements */}
            <section id="achievements" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container-width" ref={useFadeUp()}>
                    <div className="fu" style={{ marginBottom: 32 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>006 · Achievements</div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Recognition</h2>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
                        {AWARDS.map((a, i) => (
                            <div key={i} className="fu" style={{ transitionDelay: `${i * 0.08}s`, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '18px 20px', transition: 'border-color 0.2s ease, transform 0.2s ease' }}
                                onMouseEnter={el => { (el.currentTarget as HTMLElement).style.borderColor = 'rgba(99,179,237,0.25)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                                onMouseLeave={el => { (el.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                            >
                                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--text-muted)', marginBottom: 8 }}>{a.year}</div>
                                <h3 style={{ fontWeight: 600, fontSize: '0.86rem', lineHeight: 1.4, marginBottom: 10 }}>{a.title}</h3>
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', padding: '2px 8px', background: 'var(--accent-dim)', border: '1px solid rgba(99,179,237,0.2)', color: 'var(--accent)', borderRadius: 3 }}>{a.detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="section-padding">
                <div className="container-width" ref={ref}>
                    <div className="fu" style={{ marginBottom: 36 }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>007 · Contact</div>
                        <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', maxWidth: 520 }}>
                            Open to roles in embedded systems, debug engineering, and edge AI.
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 40 }}>
                        <div className="fu" style={{ transitionDelay: '0.08s' }}>
                            {INFO.map(c => (
                                <div key={c.label} style={{ display: 'flex', gap: 16, borderBottom: '1px solid var(--border)', paddingBottom: 12, marginBottom: 12 }}>
                                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--accent)', minWidth: 70, flexShrink: 0, paddingTop: 2 }}>{c.label}</span>
                                    {c.href
                                        ? <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                                            style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s' }}
                                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                                        >{c.value}</a>
                                        : <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{c.value}</span>}
                                </div>
                            ))}
                        </div>

                        <div className="fu" style={{ transitionDelay: '0.16s', display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {status === 'ok' && <div style={{ padding: '10px 14px', background: 'rgba(104,211,145,0.08)', border: '1px solid rgba(104,211,145,0.22)', borderRadius: 5, color: '#68D391', fontSize: '0.8rem' }}>Sent. I&apos;ll reply within 24 hours.</div>}
                            {status === 'err' && <div style={{ padding: '10px 14px', background: 'rgba(252,92,101,0.08)', border: '1px solid rgba(252,92,101,0.22)', borderRadius: 5, color: '#FC5C65', fontSize: '0.8rem' }}>Failed — email manthancg23@gmail.com directly.</div>}
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                                    <input style={inp} type="text" name="name" placeholder="Name" required />
                                    <input style={inp} type="email" name="email" placeholder="Email" required />
                                </div>
                                <input style={inp} type="text" name="subject" placeholder="Subject" required />
                                <textarea style={{ ...inp, resize: 'vertical', minHeight: 100 }} name="message" placeholder="Message" rows={4} required />
                                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                                <button type="submit" disabled={sending} className="btn-primary" style={{ justifyContent: 'center', opacity: sending ? 0.6 : 1 }}>
                                    {sending ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
