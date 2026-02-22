'use client'
import { useFadeUp } from './useFadeUp'
import { useEffect, useRef } from 'react'

const LAYERS = [
    {
        num: '01', label: 'Hardware Foundation',
        desc: 'PCB-level fault isolation, signal integrity, power rail analysis',
        tags: ['ARM7 · LPC2148', 'STM32', 'ESP8266', 'Oscilloscope', 'JTAG', 'Logic Analyser'],
        from: 'left',
    },
    {
        num: '02', label: 'Firmware & RTOS',
        desc: 'Bare-metal and RTOS-based embedded C/C++ development',
        tags: ['Embedded C / C++', 'FreeRTOS', 'ADC · UART · SPI · I2C', 'PWM Control', 'Interrupt Handling'],
        from: 'right',
    },
    {
        num: '03', label: 'Connectivity',
        desc: 'Sensor-to-cloud pipelines, protocol design, data transport',
        tags: ['MQTT', 'Firebase RTDB', 'REST APIs', 'Node-RED', 'Python automation', 'Linux Dev'],
        from: 'left',
    },
    {
        num: '04', label: 'Edge Intelligence',
        desc: 'On-device ML inference below 200ms on microcontroller-class hardware',
        tags: ['TensorFlow Lite', 'OpenCV', 'MediaPipe', 'Scikit-learn', 'Model quantization', 'UART AI bridge'],
        from: 'right',
    },
    {
        num: '05', label: 'Visualization & Tools',
        desc: 'End-to-end toolchain — from IDE to deployment and version control',
        tags: ['STM32CubeIDE', 'PlatformIO', 'Git · GitHub', 'Firebase Dashboard', 'Root Cause Reports'],
        from: 'left',
    },
]

const EXPLORING = [
    'RTOS-based AI task scheduling',
    'Model quantization for MCUs',
    'Low-power inference strategies',
    'Telecom failure prediction',
    'Embedded Linux',
]

function LayerCard({ layer, index }: { layer: typeof LAYERS[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = ref.current; if (!el) return
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                el.style.opacity = '1'
                el.style.transform = 'translateX(0)'
                obs.disconnect()
            }
        }, { threshold: 0.2 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])

    return (
        <div ref={ref} className="stack-layer" style={{
            transitionDelay: `${index * 0.07}s`,
            opacity: 0,
            transform: layer.from === 'left' ? 'translateX(-24px)' : 'translateX(24px)',
            transition: `opacity 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.07}s, transform 0.55s cubic-bezier(0.22,1,0.36,1) ${index * 0.07}s`,
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: 0,
            overflow: 'hidden',
            cursor: 'default',
        }}
            onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(99,179,237,0.2)'
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateX(0) translateY(-2px)'
            }}
            onMouseLeave={e => {
                ; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'
                    ; (e.currentTarget as HTMLElement).style.transform = 'translateX(0) translateY(0)'
            }}
        >
            {/* Left accent bar */}
            <div className="stack-layer-bar" />

            <div style={{ padding: '20px 24px', flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'baseline', gap: 8, marginBottom: 10 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                        <span style={{
                            fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)',
                            fontWeight: 700, letterSpacing: '0.06em',
                            textShadow: '2px 2px 0 rgba(99,179,237,0.1), 4px 4px 0 rgba(99,179,237,0.05)'
                        }}>{layer.num}</span>
                        <h3 style={{ fontWeight: 600, fontSize: '0.9rem' }}>{layer.label}</h3>
                    </div>
                    <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--text-muted)', textAlign: 'right' }}>{layer.desc}</span>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {layer.tags.map(t => (
                        <span key={t} style={{
                            fontFamily: 'var(--mono)', fontSize: '0.66rem', padding: '2px 8px',
                            background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border)',
                            color: 'var(--text-secondary)', borderRadius: 3,
                        }}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default function Skills() {
    const ref = useFadeUp()
    return (
        <section id="skills" className="section-padding">
            <div className="container-width" ref={ref}>
                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>005 · Engineering Capabilities</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>Integrated Engineering Stack</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.82rem', marginTop: 10 }}>From bare-metal hardware to intelligent edge inference — built layer by layer.</p>
                </div>

                {/* Layered stack */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 44, position: 'relative' }}>
                    {/* Vertical spine */}
                    <div style={{
                        position: 'absolute', left: 0, top: 0, bottom: 0, width: 3,
                        background: 'linear-gradient(to bottom, transparent, var(--accent) 20%, var(--accent) 80%, transparent)',
                        opacity: 0.15, borderRadius: 2,
                    }} />
                    {LAYERS.map((l, i) => <LayerCard key={i} layer={l} index={i} />)}
                </div>

                {/* Currently Exploring */}
                <div className="fu fu-d4">
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 16 }}>Currently Exploring</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                        {EXPLORING.map((e, i) => (
                            <div key={i} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 6, padding: '7px 14px', display: 'flex', alignItems: 'center', gap: 9 }}>
                                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, animation: 'blink 2s step-end infinite' }} />
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.73rem', color: 'var(--text-secondary)' }}>{e}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
