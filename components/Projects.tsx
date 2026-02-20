'use client'
import { useFadeUp } from './useFadeUp'

const PROJECTS = [
    {
        name: 'Pinchit AI', type: 'Gesture Automation',
        stack: ['OpenCV', 'Python', 'Arduino'],
        metrics: ['90% accuracy', '<200ms inference'],
        desc: 'Camera-based hand gesture recognition driving Arduino actuators via UART. MediaPipe hand landmark detection → custom classifier → serial actuation pipeline.',
        github: 'https://github.com/GManthan',
    },
    {
        name: 'AI Sign Language Translator', type: 'Wearable Embedded',
        stack: ['Arduino', 'Flex Sensors', 'Python', 'ML'],
        metrics: ['92% accuracy', '5-class vocab'],
        desc: 'Wearable flex-sensor glove streaming ADC data to a Python ML pipeline for gesture classification. Embedded firmware handles sampling; Python handles inference and text output.',
        github: 'https://github.com/GManthan',
    },
    {
        name: 'Smart IoT Energy Monitor', type: 'Industrial IoT',
        stack: ['NodeMCU', 'MQTT', 'Firebase', 'Python'],
        metrics: ['95% uptime', 'Live sync'],
        desc: 'Distributed NodeMCU sensor nodes publishing to an MQTT broker. Firebase RTDB aggregates readings; custom web dashboard visualizes real-time power consumption.',
        github: 'https://github.com/GManthan',
    },
]

export default function Projects() {
    const ref = useFadeUp()
    return (
        <section id="projects" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container-width" ref={ref}>
                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>004 · Projects</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Featured AI-Integrated Work</h2>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 18 }}>
                    {PROJECTS.map((p, i) => (
                        <div key={i} className="fu" style={{ transitionDelay: `${i * 0.09}s`, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: 12, transition: 'border-color 0.2s ease, transform 0.2s ease' }}
                            onMouseEnter={el => { (el.currentTarget as HTMLElement).style.borderColor = 'rgba(99,179,237,0.25)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                            onMouseLeave={el => { (el.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                <div>
                                    <h3 style={{ fontWeight: 600, fontSize: '0.92rem', marginBottom: 3 }}>{p.name}</h3>
                                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{p.type}</span>
                                </div>
                                <a href={p.github} target="_blank" rel="noopener noreferrer"
                                    style={{ color: 'var(--text-muted)', transition: 'color 0.2s', flexShrink: 0 }}
                                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-muted)')}
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
                                    </svg>
                                </a>
                            </div>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.78rem', lineHeight: 1.7, flex: 1 }}>{p.desc}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {p.metrics.map(m => <span key={m} style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', padding: '2px 8px', background: 'var(--accent-dim)', border: '1px solid rgba(99,179,237,0.2)', color: 'var(--accent)', borderRadius: 3 }}>{m}</span>)}
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                                {p.stack.map(s => <span key={s} style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', padding: '2px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-secondary)', borderRadius: 3 }}>{s}</span>)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
