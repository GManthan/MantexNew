'use client'
import { PcbBackground } from './Shared'

const TAGS = ['Embedded Systems', 'Telecom Debug', 'Edge AI', 'Real-Time Firmware', 'IoT Architectures']

export default function Hero() {
    return (
        <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '80px 24px 40px', overflow: 'hidden' }}>
            <PcbBackground />
            <div className="container-width" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ maxWidth: 700 }}>

                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 24 }}>
                        Aurangabad, Maharashtra · Open to Relocation
                    </div>

                    <h1 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 3.1rem)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 20 }}>
                        Debugging Complex Hardware.{' '}
                        <span style={{ color: 'var(--accent)' }}>Deploying Intelligent Systems at the Edge.</span>
                    </h1>

                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 20, maxWidth: 580 }}>
                        Debug Engineer Intern at Jabil (final semester, B.Tech E&TC). Building expertise in PCB-level fault isolation, embedded firmware, and deploying AI inference on constrained hardware.
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
                        {TAGS.map(t => (
                            <span key={t} style={{
                                fontFamily: 'var(--mono)', fontSize: '0.68rem', padding: '3px 10px',
                                background: 'var(--accent-dim)', border: '1px solid rgba(99,179,237,0.2)',
                                color: 'var(--accent)', borderRadius: 3, letterSpacing: '0.03em',
                            }}>{t}</span>
                        ))}
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginBottom: 36 }}>
                        <a href="#projects" className="btn-primary">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5-5 5M6 12h12" /></svg>
                            View Work
                        </a>
                        <a href="https://drive.google.com/file/d/YOUR_RESUME_ID/view" target="_blank" rel="noopener noreferrer" className="btn-outline">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                            Resume
                        </a>
                        <a href="#contact" className="btn-outline">Contact</a>
                    </div>

                    <div style={{ display: 'flex', gap: 20 }}>
                        {[
                            { label: 'GitHub', href: 'https://github.com/GManthan', path: 'M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22' },
                            { label: 'LinkedIn', href: 'https://linkedin.com/in/manthangourshete', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z' },
                            { label: 'Email', href: 'mailto:manthancg23@gmail.com', path: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6' },
                        ].map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" title={s.label}
                                style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                                onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d={s.path} />
                                </svg>
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
