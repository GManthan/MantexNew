export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-medium text-gray-900">MG</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-4">
              Manthan
              <br />
              <span className="font-normal">Gourshete</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Electronics & Telecommunication Engineering student specializing in IoT, Embedded Systems, and AI.
              Building intelligent automation solutions.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#projects" className="inline-block bg-gray-900 text-white px-6 py-3 text-sm hover:bg-gray-800 transition-colors">
              View Work
            </a>
            <div className="flex space-x-4">
              <a href="mailto:manthancg23@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* About Section */}
        <section id="about" className="py-12">
          <div className="curved-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-light mb-8 section-header">About</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    I am an Electronics and Telecommunication Engineering student (Batch 2026) passionate about developing smart, efficient, and scalable automation systems.
                  </p>
                  <p>
                    My expertise spans microcontroller programming, sensor integration, and cloud-based IoT solutions. I specialize in building intelligent systems that merge embedded firmware, edge AI, and real-time data analytics.
                  </p>
                </div>
              </div>
              <div className="floating-card">
                <h3 className="text-lg font-medium mb-6">Recognition</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Bronze Medal</span>
                    <span className="text-sm text-gray-500">Avishkar Zonal Level 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Top 10 Finalist</span>
                    <span className="text-sm text-gray-500">Innohack 2.0 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">National Player</span>
                    <span className="text-sm text-gray-500">Basketball 2020</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-medium mb-6 mt-8">Leadership</h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Chairperson</span>
                    <span className="text-sm text-gray-500">IETE DIEMS</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Coordinator</span>
                    <span className="text-sm text-gray-500">Robotics Club</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Member</span>
                    <span className="text-sm text-gray-500">Training & Placement</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <div className="curved-container-alt">
            <h2 className="text-3xl font-light mb-12 section-header">Skills</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="skills-category">
                <h3 className="font-medium mb-4">Programming</h3>
                <div className="space-y-2">
                  {['C', 'C++', 'Python', 'Java', 'SQL'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3 className="font-medium mb-4">Embedded Systems</h3>
                <div className="space-y-2">
                  {['ARM7', 'STM32', 'ESP8266', 'Arduino', 'Raspberry Pi'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3 className="font-medium mb-4">AI & ML</h3>
                <div className="space-y-2">
                  {['TensorFlow Lite', 'OpenCV', 'Scikit-learn', 'Edge AI'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3 className="font-medium mb-4">IoT & Networking</h3>
                <div className="space-y-2">
                  {['MQTT', 'Firebase', 'Node-RED', 'LoRa'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3 className="font-medium mb-4">Tools & Platforms</h3>
                <div className="space-y-2">
                  {['Git', 'STM32CubeIDE', 'PlatformIO', 'Jupyter'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
              <div className="skills-category">
                <h3 className="font-medium mb-4">Protocols</h3>
                <div className="space-y-2">
                  {['SPI', 'I2C', 'UART', 'ADC/DAC', 'PWM'].map((skill) => (
                    <div key={skill} className="text-sm text-gray-600">{skill}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <div className="curved-container">
            <h2 className="text-3xl font-light mb-12 section-header">Selected Work</h2>
            <div className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 project-item">
                <div>
                  <h3 className="text-xl font-medium mb-2">Pinchit AI: Gesture-Controlled Automation</h3>
                  <p className="text-sm text-gray-500 mb-4">Python, OpenCV, Arduino</p>
                  <p className="text-gray-600 mb-6">Real-time gesture recognition system for controlling home automation devices. Achieved 90% accuracy with sub-200ms inference time.</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-500">— Custom hand-tracking model deployment</li>
                    <li className="text-sm text-gray-500">— Serial communication integration</li>
                    <li className="text-sm text-gray-500">— 85% reduction in manual interactions</li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-100">
                    <span className="text-gray-400 text-sm">Project Demo</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 project-item">
                <div>
                  <h3 className="text-xl font-medium mb-2">AI Sign Language Translator</h3>
                  <p className="text-sm text-gray-500 mb-4">Arduino, Python, Flex Sensors</p>
                  <p className="text-gray-600 mb-6">Wearable glove prototype translating sign gestures into text using flex sensors and machine learning.</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-500">— 92% translation accuracy</li>
                    <li className="text-sm text-gray-500">— Real-time gesture decoding</li>
                    <li className="text-sm text-gray-500">— Ergonomic hardware design</li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-100">
                    <span className="text-gray-400 text-sm">Project Demo</span>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 project-item">
                <div>
                  <h3 className="text-xl font-medium mb-2">Smart IoT Energy Monitoring</h3>
                  <p className="text-sm text-gray-500 mb-4">NodeMCU, MQTT, Firebase</p>
                  <p className="text-gray-600 mb-6">Cloud-connected dashboard for visualizing power usage data from distributed IoT sensor nodes.</p>
                  <ul className="space-y-1">
                    <li className="text-sm text-gray-500">— 95% system uptime</li>
                    <li className="text-sm text-gray-500">— Real-time analytics</li>
                    <li className="text-sm text-gray-500">— 50+ concurrent nodes support</li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-100">
                    <span className="text-gray-400 text-sm">Project Demo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12">
          <div className="curved-container-alt">
            <h2 className="text-3xl font-light mb-12 section-header">Experience</h2>
            <div className="experience-timeline">
              <div className="experience-item">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-500 font-medium">Present</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1">Chief Technology Officer</h3>
                    <p className="text-sm text-gray-600 mb-3">Lets Grow Ventures</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Overseeing design and implementation of client-focused digital and automation solutions. Leading technical strategy for IoT and embedded system projects.</p>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-500 font-medium">4 Months</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1">IoT Intern</h3>
                    <p className="text-sm text-gray-600 mb-3">Acmegrade</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Designed cloud-connected IoT systems using ESP8266, MQTT, and Firebase. Achieved 98% data delivery reliability across sensor networks.</p>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-gray-500 font-medium">2 Months</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1">Embedded Systems Intern</h3>
                    <p className="text-sm text-gray-600 mb-3">MSME Technology Center</p>
                    <p className="text-gray-600 text-sm leading-relaxed">Programmed ARM7 microcontrollers for industrial applications. Debugged hardware interfaces using JTAG and logic analyzers.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <div className="curved-container">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-light mb-8 section-header">Get in Touch</h2>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to collaborate on innovative IoT and embedded systems projects? Let's connect and build intelligent automation solutions together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">Email</span>
                    <a href="mailto:manthancg23@gmail.com" className="text-gray-900 hover:underline">manthancg23@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">Phone</span>
                    <span className="text-gray-900">+91 7020406293</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400">Location</span>
                    <span className="text-gray-900">Aurangabad, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="floating-card">
                <form className="space-y-8">
                  <div className="form-field">
                    <input type="text" placeholder=" " required />
                    <label>Name</label>
                  </div>
                  <div className="form-field">
                    <input type="email" placeholder=" " required />
                    <label>Email</label>
                  </div>
                  <div className="form-field">
                    <input type="text" placeholder=" " required />
                    <label>Subject</label>
                  </div>
                  <div className="form-field">
                    <textarea rows={4} placeholder=" " required></textarea>
                    <label>Message</label>
                  </div>
                  <button 
                    type="submit" 
                    className="bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors w-full lg:w-auto rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-12 mt-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-500">© 2024 Manthan Gourshete</p>
        </div>
      </footer>
    </main>
  )
}
