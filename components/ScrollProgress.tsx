'use client'
import { useEffect } from 'react'

export default function ScrollProgress() {
    useEffect(() => {
        const bar = document.getElementById('sp-bar')
        if (!bar) return
        const fn = () => {
            const st = window.scrollY
            const dh = document.documentElement.scrollHeight - window.innerHeight
            bar.style.width = dh > 0 ? `${(st / dh) * 100}%` : '0%'
        }
        window.addEventListener('scroll', fn, { passive: true })
        return () => window.removeEventListener('scroll', fn)
    }, [])
    return (
        <div id="sp-bar" style={{
            position: 'fixed', top: 0, left: 0, height: 2,
            background: 'var(--accent)', zIndex: 998,
            width: '0%', transition: 'width 0.1s linear', pointerEvents: 'none',
        }} />
    )
}
