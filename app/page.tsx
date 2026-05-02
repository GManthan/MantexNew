import React from 'react';

/* ── SVG social icons (B&W, inline) ── */
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function Home() {
  return (
    <>
      {/* ── Floating Navbar ─────────────────────── */}
      <div className="navbar-container">
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#about">About Me</a>
          <a href="#work">My Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>

      <main>

        {/* ══ HERO (fits exactly 100vh) ══════════════ */}
        <section id="home" className="hero">
          <div className="wrap hero-inner" style={{ display: 'flex', flexDirection: 'column' }}>

            {/* Two-column: left text | right photo */}
            <div className="hero-grid">

              {/* ── Left ── */}
              <div className="hero-left">
                <h1 className="hero-title">
                  Manthan<br />Gourshete
                </h1>
                <h2 className="hero-subtitle">
                  Building Reliable Engineering Systems That Scale
                </h2>
                <p className="hero-desc">
                  Scalable data pipelines &amp; embedded solutions bridging hardware
                  and software—complex problems turned into enterprise-grade systems.
                </p>
                <div className="hero-cta">
                  <a href="#contact" className="btn-dark">Talk to me</a>
                  <a href="/mayres.pdf" download className="btn-outline">
                    ↓ Resume
                  </a>
                </div>
              </div>

              {/* ── Right: photo + floating role badges ── */}
              <div className="hero-right">
                {/* Top-right badge */}
                <div className="hero-role-top">Full Stack<br />Developer</div>

                {/* Photo sits between the badges with equal gap */}
                <img
                  src="/profile.png"
                  alt="Manthan Gourshete"
                  className="hero-image"
                />

                {/* Bottom-left badge */}
                <div className="hero-role-bottom">Embedded<br />Systems</div>
              </div>
            </div>

            {/* ── Tag bar (always visible within 100vh) ── */}
            <div className="hero-tags">
              <div className="hero-tag">
                <h4>Python &amp; Next.js</h4>
                <p>Backend &amp; Full Stack</p>
              </div>
              <div className="hero-tag">
                <h4>System Architecture</h4>
                <p>Scalable Data Pipelines</p>
              </div>
              <div className="hero-tag">
                <h4>IoT &amp; Automation</h4>
                <p>Cloud-Connected Devices</p>
              </div>
              <div className="hero-tag">
                <h4>Hardware Debugging</h4>
                <p>PCB &amp; Firmware Validation</p>
              </div>
            </div>

          </div>
        </section>

        {/* ══ ABOUT ═════════════════════════════════ */}
        <section id="about" className="section">
          <div className="wrap">
            <div className="intro-section">
              <h2 className="intro-large">
                Where software meets hardware,<br />
                <span className="intro-italic">Elegantly engineered systems.</span>
              </h2>
              <p className="intro-sub">
                I&apos;m an engineer passionate about crafting functional, robust, and
                scalable solutions. Let&apos;s build something impactful together.
              </p>
              <div><a href="#contact" className="btn-dark">Talk to me</a></div>

              <div className="dark-card">
                <p className="dark-card-body">
                  Hi, I&apos;m Manthan Gourshete, an Electronics and Telecommunication
                  Engineering student with a love for building{' '}
                  <strong>reliable, enterprise-grade automation</strong> and
                  performance-driven systems. My journey spans full stack development,
                  API integration, and embedded engineering—I engineer solutions with a
                  focus on both{' '}
                  <strong>hardware precision and software scalability</strong>, always
                  keeping efficiency first.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ WORK ══════════════════════════════════ */}
        <section id="work" className="section">
          <div className="wrap">
            <h2 className="work-header">Work.</h2>

            <div className="project-item">
              <span className="project-year">2025-26</span>
              <h3 className="project-title">Swastik Auto Parts — B2B Data Sync Pipeline</h3>
              <p className="project-desc">
                Engineered an automated data pipeline using Python to synchronise
                inventory and transactions between legacy BUSY accounting software and a
                modern web frontend. Integrated Next.js and Firebase to deliver
                real-time stock visibility, successfully deployed and actively used in
                industry.
              </p>
              <a href="#" className="btn-dark">Explore Case Study</a>
            </div>

            <div className="project-item">
              <span className="project-year">2026 – Present</span>
              <h3 className="project-title">Custom Manufacturing ERP &amp; Traceability System</h3>
              <p className="project-desc">
                Developing a full-stack ERP platform currently being deployed in
                industry to track raw material entry and manufacturing processes for a
                silicone oil facility. Implementing backend workflows for end-to-end
                product traceability across the production lifecycle.
              </p>
              <a href="#" className="btn-dark">Explore Case Study</a>
            </div>

            <div className="project-item">
              <span className="project-year">2023</span>
              <h3 className="project-title">Pinchit AI — Gesture Recognition Automation</h3>
              <p className="project-desc">
                Developed a real-time gesture recognition interface using Python and
                OpenCV integrated with Arduino. Achieved under 200 ms response latency
                for motor and lighting control.
              </p>
              <a href="#" className="btn-dark">Explore Case Study</a>
            </div>
          </div>
        </section>

        {/* ══ SKILLS ════════════════════════════════ */}
        <section className="section">
          <div className="wrap">
            <h2 className="skills-header">Skills.</h2>
            <div className="skills-cards">

              <div className="skill-card">
                <div className="skill-card-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                </div>
                <h3 className="skill-card-title">Programming &amp; Web</h3>
                <p className="skill-card-desc">Building robust web applications and APIs from front to back.</p>
                <div className="skill-tags">
                  {['Python','C / C++','JavaScript','Next.js','Node.js','HTML / CSS','SQL','Firebase'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 7V4M12 7V4M15 7V4M9 20v-3M12 20v-3M15 20v-3M7 9H4M7 12H4M7 15H4M20 9h-3M20 12h-3M20 15h-3"/></svg>
                </div>
                <h3 className="skill-card-title">Embedded Systems</h3>
                <p className="skill-card-desc">Programming microcontrollers with structured firmware practices.</p>
                <div className="skill-tags">
                  {['ARM7 (LPC2148)','STM32','ESP8266','Arduino','Raspberry Pi','Embedded C','FreeRTOS','PlatformIO'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="2 12 6 12 8 5 10 19 12 12 14 15 16 12 22 12"/></svg>
                </div>
                <h3 className="skill-card-title">Hardware Debug &amp; Validation</h3>
                <p className="skill-card-desc">PCB-level fault isolation, rework, and root cause analysis.</p>
                <div className="skill-tags">
                  {['Oscilloscope','Multimeter','Logic Analyser','JTAG','Functional Testing','Rework Validation','Failure Analysis'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

              <div className="skill-card">
                <div className="skill-card-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><circle cx="12" cy="20" r="1" fill="currentColor"/></svg>
                </div>
                <h3 className="skill-card-title">IoT, Protocols &amp; Tools</h3>
                <p className="skill-card-desc">Reliable device-to-cloud communication at 98%+ consistency.</p>
                <div className="skill-tags">
                  {['MQTT','REST APIs','HTTP','UART','SPI','I²C','Git','STM32CubeIDE','System Architecture'].map(t => (
                    <span key={t} className="skill-tag">{t}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ══ CONTACT ═══════════════════════════════ */}
        <section id="contact" className="section">
          <div className="wrap">
            <div className="dark-card" style={{ margin: 0 }}>
              <div className="contact-grid">

                {/* Left: big text */}
                <h2 className="footer-large">
                  Want to<br />discuss a<br />project?<br />
                  <span className="dim">feel free to<br />reach out.</span>
                </h2>

                {/* Right: contact details + social */}
                <div>
                  <div className="contact-block">
                    <div className="contact-label">Contact</div>
                    <a href="tel:+917020406293" className="contact-val">+91 7020406293</a>
                    <a href="mailto:manthancg23@gmail.com" className="contact-val">manthancg23@gmail.com</a>
                  </div>

                  <div className="contact-block">
                    <div className="contact-label">Social Media</div>
                    <div className="socials">
                      {/* GitHub */}
                      <a href="https://github.com/GManthan" target="_blank" rel="noreferrer"
                        className="soc-btn" aria-label="GitHub">
                        <GithubIcon />
                      </a>
                      {/* LinkedIn */}
                      <a href="https://www.linkedin.com/in/manthan-gourshete/" target="_blank" rel="noreferrer"
                        className="soc-btn" aria-label="LinkedIn">
                        <LinkedInIcon />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer bar */}
              <div className="footer-bar">
                <nav className="footer-nav">
                  <a href="#home">Home</a>
                  <a href="#about">About Me</a>
                  <a href="#work">My Work</a>
                  <a href="#contact">Contact</a>
                </nav>
                <span>© 2026 Manthan Gourshete · All Rights Reserved</span>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
