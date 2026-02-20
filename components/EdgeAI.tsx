'use client'
import { useFadeUp } from './useFadeUp'

const CAPABILITIES = [
    'Computer Vision — OpenCV-based real-time processing',
    'Custom ML model training for gesture classification',
    'TensorFlow Lite deployment on embedded targets',
    'Real-time inference optimization — sub-200ms latency',
    'Model accuracy benchmarking (~90% on edge hardware)',
    'Sensor & vision input preprocessing pipelines',
    'Model quantization for embedded memory constraints',
    'Serial/UART bridge between AI engine and microcontroller',
]

const PIPELINE = [
    {
        step: '01', title: 'Data Acquisition',
        items: ['Camera or flex-sensor input', 'Signal conditioning & normalization', 'Labeled dataset construction'],
    },
    {
        step: '02', title: 'Model Training',
        items: ['Feature extraction (landmark / ADC vectors)', 'Dataset preprocessing & augmentation', 'Classification model training & validation'],
    },
    {
        step: '03', title: 'Optimization',
        items: ['Latency profiling & reduction', 'Memory footprint analysis', 'TFLite quantization (INT8 / FP16)'],
    },
    {
        step: '04', title: 'Deployment',
        items: ['TensorFlow Lite integration', 'Serial / UART hardware bridge', 'Real-time actuator control loop'],
    },
]

export default function EdgeAI() {
    const ref = useFadeUp()
    return (
        <section id="ai" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container-width" ref={ref}>

                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>002 · Applied AI &amp; Edge Intelligence</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', maxWidth: 600 }}>
                        AI deployed on hardware — not in notebooks.
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.75, marginTop: 12, maxWidth: 600 }}>
                        Every model in my portfolio runs on microcontroller-class hardware under real latency constraints. The pipeline spans data acquisition, model training, optimization, and physical actuation.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginBottom: 40 }}>
                    {/* Capabilities */}
                    <div className="fu" style={{ transitionDelay: '0.08s', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '24px 28px' }}>
                        <h3 style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                            Core AI Capabilities
                        </h3>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {CAPABILITIES.map((c, i) => (
                                <li key={i} style={{ display: 'flex', gap: 10, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                                    <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: 1 }}>›</span>
                                    {c}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Tech stack used */}
                    <div className="fu" style={{ transitionDelay: '0.16s', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '24px 28px' }}>
                        <h3 style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                            Stack &amp; Toolchain
                        </h3>
                        {[
                            { label: 'Inference Engine', value: 'TensorFlow Lite (FP32 · INT8 quantized)' },
                            { label: 'Vision Library', value: 'OpenCV · MediaPipe Hands' },
                            { label: 'Training', value: 'Python · Scikit-learn · NumPy · Pandas' },
                            { label: 'Hardware Bridge', value: 'UART / Serial · Arduino · ARM MCU' },
                            { label: 'Sensor Inputs', value: 'Flex sensors · Camera · ADC channels' },
                            { label: 'Target Hardware', value: 'Arduino Uno / Nano · ESP8266 · Laptop GPU' },
                            { label: 'Metrics', value: '~90% accuracy · <200ms inference latency' },
                        ].map(r => (
                            <div key={r.label} style={{ display: 'flex', gap: 12, borderBottom: '1px solid var(--border)', paddingBottom: 9, marginBottom: 9 }}>
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.66rem', color: 'var(--accent)', minWidth: 110, flexShrink: 0, paddingTop: 1 }}>{r.label}</span>
                                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>{r.value}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Pipeline */}
                <div className="fu" style={{ transitionDelay: '0.24s' }}>
                    <h3 style={{ fontFamily: 'var(--mono)', fontSize: '0.72rem', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }}>
                        Edge AI Engineering Pipeline
                    </h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                        {PIPELINE.map((p) => (
                            <div key={p.step} style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 8, padding: '20px 22px', position: 'relative', overflow: 'hidden' }}>
                                <div style={{ fontFamily: 'var(--mono)', fontSize: '1.8rem', fontWeight: 700, color: 'rgba(99,179,237,0.07)', position: 'absolute', top: 10, right: 16, lineHeight: 1 }}>{p.step}</div>
                                <div style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', marginBottom: 10, letterSpacing: '0.06em' }}>{p.step}</div>
                                <h4 style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: 12 }}>{p.title}</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                                    {p.items.map((item, i) => (
                                        <li key={i} style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', display: 'flex', gap: 8 }}>
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
