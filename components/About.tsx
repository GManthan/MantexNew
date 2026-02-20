'use client'
import { useFadeUp } from './useFadeUp'

const ATTRS = [
    { label: 'Languages', value: 'Embedded C · C++ · Python' },
    { label: 'MCUs', value: 'ARM7 LPC2148 · STM32 · ESP8266 · Arduino' },
    { label: 'RTOS', value: 'FreeRTOS — task scheduling, queues, semaphores' },
    { label: 'Edge AI', value: 'TensorFlow Lite · OpenCV · MediaPipe · real-time inference' },
    { label: 'Protocols', value: 'SPI · I2C · UART · ADC · PWM · JTAG' },
    { label: 'IoT Stack', value: 'MQTT · Firebase RTDB · Node-RED · REST APIs' },
    { label: 'OS / Dev', value: 'Linux-based development · Git · STM32CubeIDE · PlatformIO' },
    { label: 'Debug Tools', value: 'Oscilloscope · Logic Analyzer · DMM · Boundary Scan' },
    { label: 'Education', value: 'B.E. E&TC · DIEMS Aurangabad · Final Sem 2026' },
]

export default function About() {
    const ref = useFadeUp()
    return (
        <section id="about" className="section-padding">
            <div className="container-width" ref={ref}>
                <div className="fu" style={{ marginBottom: 36 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12 }}>001 · About</div>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em' }}>
                        Embedded engineer. Edge AI practitioner.
                    </h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40 }}>
                    <div className="fu" style={{ transitionDelay: '0.08s' }}>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.86rem', marginBottom: 14 }}>
                            I am currently a Debug Engineer Intern at Jabil in my final semester of B.Tech Electronics & Telecommunication Engineering. My internship is focused on PCB-level fault isolation, power rail analysis, and root cause analysis on production assemblies across SMT and functional test stages.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.86rem', marginBottom: 14 }}>
                            On the firmware side, I write and debug Embedded C/C++ on ARM7 (LPC2148), STM32, and ESP8266 targets. I apply FreeRTOS concepts — task scheduling, queue-based inter-task communication, and binary semaphores — in system designs.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.86rem', marginBottom: 14 }}>
                            My Edge AI work is deployment-focused, not theoretical. I train lightweight classification models, convert them to TensorFlow Lite, and run inference on microcontroller-class hardware under real latency and memory constraints. I integrate AI inference engines with physical actuators through UART/serial pipelines.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: 1.85, fontSize: '0.86rem' }}>
                            I develop on Linux, use Git for version control, and build IoT data pipelines with MQTT, Firebase, and Python automation. My experience spans the full stack from bare-metal firmware to cloud dashboards.
                        </p>
                    </div>

                    <div className="fu" style={{ transitionDelay: '0.16s' }}>
                        {ATTRS.map(a => (
                            <div key={a.label} style={{ display: 'flex', gap: 16, borderBottom: '1px solid var(--border)', paddingBottom: 11, marginBottom: 11 }}>
                                <span style={{ fontFamily: 'var(--mono)', fontSize: '0.68rem', color: 'var(--accent)', minWidth: 88, paddingTop: 2, flexShrink: 0 }}>{a.label}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{a.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
