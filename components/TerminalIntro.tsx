'use client'
import { useState, useEffect } from 'react'

const LINES = [
    { delay: 100, prompt: true, text: 'init portfolio.sh' },
    { delay: 600, prompt: false, success: true, text: 'Environment: Next.js 14 · TypeScript' },
    { delay: 1000, prompt: false, success: true, text: 'Profile: Manthan Gourshete' },
    { delay: 1400, prompt: false, success: true, text: 'Role: Debug Engineer · Embedded Systems · Edge AI' },
    { delay: 1800, prompt: false, info: true, text: 'Launching interface...' },
]

export default function TerminalIntro({ onDone }: { onDone: () => void }) {
    const [visible, setVisible] = useState<number[]>([])
    const [fading, setFading] = useState(false)

    useEffect(() => {
        LINES.forEach((l, i) => {
            setTimeout(() => setVisible(p => [...p, i]), l.delay)
        })
        setTimeout(() => { setFading(true); setTimeout(onDone, 650) }, 2500)
    }, [onDone])

    return (
        <div style={{
            position: 'fixed', inset: 0, background: '#080C10', zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: fading ? 0 : 1, visibility: fading ? 'hidden' : 'visible',
            transition: 'opacity 0.6s ease, visibility 0.6s ease',
        }}>
            <div style={{
                width: 'min(560px, 90vw)',
                background: '#0B0F14',
                border: '1px solid rgba(99,179,237,0.2)',
                borderRadius: 8, overflow: 'hidden',
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
            }}>
                {/* Title bar */}
                <div style={{ background: '#131920', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    {['#FC5C65', '#FED330', '#26DE81'].map((c, i) => (
                        <div key={i} style={{ width: 10, height: 10, borderRadius: '50%', background: c }} />
                    ))}
                    <span style={{ marginLeft: 8, fontSize: '0.72rem', color: '#4A5568' }}>manthan@portfolio ~ zsh</span>
                </div>
                {/* Body */}
                <div style={{ padding: '20px 24px', fontSize: '0.8rem', lineHeight: 1.9, color: '#8892A4', minHeight: 160 }}>
                    {LINES.map((l, i) => (
                        <div key={i} style={{ opacity: visible.includes(i) ? 1 : 0, transition: 'opacity 0.2s', display: 'block' }}>
                            {l.prompt && <span style={{ color: '#63B3ED' }}>$ </span>}
                            {l.success && <span style={{ color: '#68D391' }}>✓ </span>}
                            {l.info && <span style={{ color: '#63B3ED' }}>→ </span>}
                            {l.text}
                        </div>
                    ))}
                    {!fading && (
                        <span style={{ display: 'inline-block', width: 8, height: 14, background: '#63B3ED', verticalAlign: 'middle', animation: 'blink 1s step-end infinite' }} />
                    )}
                </div>
            </div>
        </div>
    )
}
