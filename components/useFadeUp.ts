'use client'
import { useRef, useEffect } from 'react'

export function useFadeUp() {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const el = ref.current
        if (!el) return
        const obs = new IntersectionObserver(([e]) => {
            if (e.isIntersecting) {
                el.querySelectorAll('.fu').forEach(c => c.classList.add('fv'))
                obs.disconnect()
            }
        }, { threshold: 0.08 })
        obs.observe(el)
        return () => obs.disconnect()
    }, [])
    return ref
}
