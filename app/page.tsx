'use client'
import { useState } from 'react'
import TerminalIntro from '@/components/TerminalIntro'
import ScrollProgress from '@/components/ScrollProgress'
import Hero from '@/components/Hero'
import About from '@/components/About'
import EdgeAI from '@/components/EdgeAI'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import { Divider } from '@/components/Shared'

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export default function Home() {
  const [termDone, setTermDone] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <ScrollProgress />
      {!termDone && <TerminalIntro onDone={() => setTermDone(true)} />}

      <main style={{ background: 'var(--bg-primary)', minHeight: '100vh', color: 'var(--text-primary)' }}>

        {/* Nav */}
        <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 50, background: 'rgba(11,15,20,0.88)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
          <div className="container-width" style={{ padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 54 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.8rem', color: 'var(--accent)', letterSpacing: '0.08em' }}>
              MG<span style={{ color: 'var(--text-muted)' }}>.</span>
            </span>
            <div className="hidden md:flex" style={{ gap: 30 }}>
              {NAV_LINKS.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} style={{ position: 'relative', color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.78rem', letterSpacing: '0.03em', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                >{l}</a>
              ))}
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)', padding: 4 }} aria-label="Menu">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {mobileOpen
                  ? <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" d="M3 12h18M3 6h18M3 18h18" />}
              </svg>
            </button>
          </div>
          {mobileOpen && (
            <div style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {NAV_LINKS.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setMobileOpen(false)}
                  style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.86rem' }}>{l}</a>
              ))}
            </div>
          )}
        </nav>

        <Hero />
        <Divider />
        <About />
        <Divider />
        <EdgeAI />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />

        <footer style={{ borderTop: '1px solid var(--border)', padding: '22px 24px', background: 'var(--bg-secondary)' }}>
          <div className="container-width" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 8 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>© 2026 Manthan Gourshete</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>Debug Engineer · Aurangabad, MH</span>
          </div>
        </footer>

      </main>
    </>
  )
}
