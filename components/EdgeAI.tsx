'use client'
import { useFadeUp } from './useFadeUp'

const CAPABILITIES = [
    'Computer Vision · OpenCV real-time processing',
    'Custom ML model training — gesture classification',
    'TensorFlow Lite on embedded targets',
    'Sub-200ms inference latency',
    'Model quantization (INT8 / FP16)',
    'UART bridge — AI engine ↔ microcontroller',
]

const PIPELINE = [
    { step: '01', title: 'Data Acquisition', items: ['Camera / flex-sensor input', 'Signal conditioning', 'Dataset labeling'] },
    { step: '02', title: 'Model Training', items: ['Feature extraction', 'Preprocessing & augmentation', 'Validation'] },
    { step: '03', title: 'Optimization', items: ['Latency profiling', 'Memory footprint reduction', 'TFLite quantization'] },
    { step: '04', title: 'Deployment', items: ['TFLite integration', 'UART hardware bridge', 'Actuator control loop'] },
]

const STACK = [
    { label: 'Inference', value: 'TensorFlow Lite · INT8 / FP32' },
    { label: 'Vision', value: 'OpenCV · MediaPipe Hands' },
    { label: 'Training', value: 'Python · Scikit-learn · NumPy' },
    { label: 'Bridge', value: 'UART / Serial · Arduino · ARM' },
    { label: 'Inputs', value: 'Camera · Flex sensors · ADC' },
    { label: 'Metrics', value: '~90% accuracy · <200ms latency' },
]

export default function EdgeAI() {
    const ref = useFadeUp()
    return (
        <section id="ai" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container-width" ref={ref}>

                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>002 · Applied AI &amp; Edge Intelligence</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        AI deployed on hardware — not in notebooks.
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 36 }}>
                    {/* Capabilities */}
                    <div className="fu" style={{ transitionDelay: '0.08s', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '22px 26px' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18 }}>Core Capabilities</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 9 }}>
                            {CAPABILITIES.map((c, i) => (
                                <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                                    <span style={{ color: 'var(--accent)', flexShrink: 0 }}>›</span>{c}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stack */}
                    <div className="fu" style={{ transitionDelay: '0.16s', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '22px 26px' }}>
                        <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18 }}>Stack &amp; Toolchain</div>
                        {STACK.map(r => (
                            <div key={r.label} style={{ display: 'flex', gap: 12, borderBottom: '1px solid var(--border)', paddingBottom: 9, marginBottom: 9 }}>
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--accent)', minWidth: 68, flexShrink: 0, paddingTop: 1 }}>{r.label}</span>
                                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{r.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pipeline */}
                <div className="fu" style={{ transitionDelay: '0.24s' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>Edge AI Pipeline</div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 14 }}>
                        {PIPELINE.map((p) => (
                            <div key={p.step} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
                                {/* Single number with shadow — no duplicate */}
                                <div style={{
                                    fontFamily: 'var(--mono)', fontWeight: 800,
                                    fontSize: '0.8rem', color: 'var(--accent)',
                                    marginBottom: 10, letterSpacing: '0.06em',
                                    textShadow: '3px 3px 0px rgba(99,179,237,0.12), 6px 6px 0px rgba(99,179,237,0.06)',
                                }}>
                                    {p.step}
                                </div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.86rem', marginBottom: 12 }}>{p.title}</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    {p.items.map((item, i) => (
                                        <li key={i} style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', display: 'flex', gap: 8 }}>
                                            <span style={{ color: 'var(--text-muted)', flexShrink: 0 }}>—</span>{item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}
