'use client'
import { useFadeUp } from './useFadeUp'

const EXP = [
    {
        role: 'Debug Engineer Intern', company: 'Jabil', period: 'Feb 2026 – Present · Final Sem', type: 'Industry Internship',
        bullets: [
            'PCB-level fault isolation and rework validation across SMT and assembly stages',
            'Power rail and signal integrity verification using oscilloscopes and DMMs',
            'Root cause analysis on production failures — component, solder, and assembly defects',
            'Test yield analysis and cross-functional debug coordination with Test & Quality teams',
            'Failure documentation, trend tracking, and debug knowledge base maintenance',
        ],
    },
    {
        role: 'IoT Intern', company: 'Acmegrade', period: '4 Months', type: 'Internship',
        bullets: [
            'Designed MQTT-based device-to-cloud communication pipelines',
            'Built real-time Firebase dashboards for sensor monitoring',
            'Automated sensor data acquisition with Python — 98% delivery reliability',
            'End-to-end IoT prototyping from embedded firmware to cloud visualization',
        ],
    },
    {
        role: 'Embedded Systems Intern', company: 'Indo German Tool Room', period: '2 Months', type: 'Internship',
        bullets: [
            'Developed ARM7 LPC2148 firmware in Embedded C for industrial control systems',
            'Implemented ADC, UART, and PWM-based peripheral control',
            'Debugged hardware interfaces using JTAG and logic analyzers',
            'Validated SPI, I2C, and UART peripheral-level communication',
        ],
    },
]

export default function Experience() {
    const ref = useFadeUp()
    return (
        <section id="experience" className="section-padding">
            <div className="container-width" ref={ref}>
                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>003 · Experience</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Professional Timeline</h2>
                </div>

                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, var(--border) 5%, var(--border) 95%, transparent)' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, paddingLeft: 32 }}>
                        {EXP.map((e, i) => (
                            <div key={i} className="fu" style={{ transitionDelay: `${i * 0.1}s`, position: 'relative' }}>
                                <div style={{ position: 'absolute', left: -36, top: 8, width: 8, height: 8, borderRadius: '50%', background: 'var(--accent)', boxShadow: '0 0 0 3px var(--bg-primary), 0 0 0 4px rgba(99,179,237,0.3)' }} />
                                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '22px 26px', transition: 'border-color 0.2s ease, transform 0.2s ease', cursor: 'default' }}
                                    onMouseEnter={el => { (el.currentTarget as HTMLElement).style.borderColor = 'rgba(99,179,237,0.25)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(-2px)' }}
                                    onMouseLeave={el => { (el.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; (el.currentTarget as HTMLElement).style.transform = 'translateY(0)' }}
                                >
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8, marginBottom: 14 }}>
                                        <div>
                                            <h3 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: 3 }}>{e.role}</h3>
                                            <span style={{ color: 'var(--accent)', fontSize: '0.8rem', fontWeight: 500 }}>{e.company}</span>
                                        </div>
                                        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', padding: '2px 8px', background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)', color: 'var(--text-secondary)', borderRadius: 3 }}>{e.type}</span>
                                            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>{e.period}</span>
                                        </div>
                                    </div>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
                                        {e.bullets.map((b, bi) => (
                                            <li key={bi} style={{ display: 'flex', gap: 10, color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.65 }}>
                                                <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 2 }}>›</span>{b}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
