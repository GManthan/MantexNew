'use client'
import { useFadeUp } from './useFadeUp'
import { useRef, useEffect } from 'react'

const GROUPS = [
    {
        cat: 'Embedded Systems',
        items: [
            { name: 'ARM7 · LPC2148', pct: 90 }, { name: 'STM32', pct: 82 },
            { name: 'ESP8266 / NodeMCU', pct: 88 }, { name: 'Embedded C / C++', pct: 91 },
            { name: 'UART · SPI · I2C · ADC', pct: 88 }, { name: 'FreeRTOS', pct: 70 },
        ],
    },
    {
        cat: 'IoT & Cloud',
        items: [
            { name: 'MQTT Protocol', pct: 88 }, { name: 'Firebase RTDB', pct: 85 },
            { name: 'Node-RED', pct: 72 }, { name: 'Python automation', pct: 84 },
            { name: 'REST APIs', pct: 78 }, { name: 'Linux Dev Environment', pct: 72 },
        ],
    },
    {
        cat: 'Edge AI & ML',
        items: [
            { name: 'OpenCV', pct: 85 }, { name: 'TensorFlow Lite', pct: 78 },
            { name: 'MediaPipe', pct: 80 }, { name: 'Scikit-learn', pct: 72 },
            { name: 'Model quantization', pct: 68 }, { name: 'NumPy · Pandas', pct: 82 },
        ],
    },
    {
        cat: 'Debug & Tools',
        items: [
            { name: 'Oscilloscope · Logic Analyzer', pct: 88 }, { name: 'JTAG Debugging', pct: 80 },
            { name: 'Signal & Power Analysis', pct: 85 }, { name: 'Failure Root Cause Analysis', pct: 88 },
            { name: 'STM32CubeIDE · PlatformIO', pct: 80 }, { name: 'Git · GitHub', pct: 83 },
        ],
    },
]

function Bar({ name, pct }: { name: string; pct: number }) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current; if (!el) return
        const fill = el.querySelector('.bar-fill') as HTMLElement; if (!fill) return
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) { fill.style.width = `${pct}%`; obs.disconnect() }
        }, { threshold: 0.3 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [pct])
    return (
        <div ref={ref} style={{ paddingBottom: 2 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.74rem', color: 'var(--text-secondary)' }}>{name}</span>
                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--text-muted)' }}>{pct}%</span>
            </div>
            <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1, marginTop: 5 }}>
                <div className="bar-fill" style={{ height: '100%', background: 'linear-gradient(90deg, var(--accent), rgba(99,179,237,0.4))', borderRadius: 1, width: 0, transition: 'width 1s cubic-bezier(0.4, 0, 0.2, 1)' }} />
            </div>
        </div>
    )
}

const EXPLORING = [
    'RTOS-based AI task scheduling', 'Model quantization for embedded deployment',
    'Low-power AI inference strategies', 'Telecom hardware failure prediction models', 'Embedded Linux integration',
]

export default function Skills() {
    const ref = useFadeUp()
    return (
        <section id="skills" className="section-padding">
            <div className="container-width" ref={ref}>
                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>005 · Technical Stack</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Capability Profile</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 18, marginBottom: 44 }}>
                    {GROUPS.map((g, gi) => (
                        <div key={gi} className="fu" style={{ transitionDelay: `${gi * 0.08}s`, background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 22px' }}>
                            <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 16 }}>{g.cat}</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
                                {g.items.map(item => <Bar key={item.name} name={item.name} pct={item.pct} />)}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Currently Exploring */}
                <div className="fu" style={{ transitionDelay: '0.32s' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Currently Exploring</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {EXPLORING.map((e, i) => (
                            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6, padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, animation: 'blink 2s step-end infinite' }} />
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{e}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
