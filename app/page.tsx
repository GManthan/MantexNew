'use client'

import { useState } from 'react'

export default function Home() {
  const [formStatus, setFormStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus('')
    
    const formData = new FormData(e.currentTarget)
    formData.append("access_key", "e6fd6fb9-47f2-4686-b73e-b9da28e22a83")

    const object = Object.fromEntries(formData)
    const json = JSON.stringify(object)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      })
      
      const result = await response.json()
      
      if (result.success) {
        setFormStatus('success')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="font-bold text-lg bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">MG</div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-600 hover:text-blue-600 transition-colors font-medium">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-4">
                  Manthan
                  <br />
                  <span className="font-normal bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">Gourshete</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Electronics & Telecommunication Engineering student specializing in IoT, Embedded Systems, and AI.
                  Building intelligent automation solutions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <a href="#projects" className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                  View Work
                </a>
                <a href="#contact" className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  Get in Touch
                </a>
                <div className="flex space-x-4 sm:ml-8">
                  <a href="mailto:manthancg23@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/manthan-gourshete/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
                    </svg>
                  </a>
                  <a href="https://github.com/GManthan" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors p-2">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 400 400"
                  className="w-full max-w-md"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Background circles */}
                  <circle cx="200" cy="200" r="180" fill="rgba(59, 130, 246, 0.05)" />
                  <circle cx="200" cy="200" r="140" fill="rgba(139, 92, 246, 0.05)" />
                  <circle cx="200" cy="200" r="100" fill="rgba(16, 185, 129, 0.05)" />
                  
                  {/* Central device/chip */}
                  <rect x="150" y="150" width="100" height="100" rx="12" fill="#3B82F6" opacity="0.1" />
                  <rect x="160" y="160" width="80" height="80" rx="8" fill="#1E40AF" />
                  
                  {/* Circuit patterns */}
                  <line x1="160" y1="180" x2="240" y2="180" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="160" y1="200" x2="240" y2="200" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="160" y1="220" x2="240" y2="220" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="180" y1="160" x2="180" y2="240" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="200" y1="160" x2="200" y2="240" stroke="#60A5FA" strokeWidth="2" />
                  <line x1="220" y1="160" x2="220" y2="240" stroke="#60A5FA" strokeWidth="2" />
                  
                  {/* Connection nodes */}
                  <circle cx="120" cy="120" r="8" fill="#10B981" />
                  <circle cx="280" cy="120" r="8" fill="#8B5CF6" />
                  <circle cx="120" cy="280" r="8" fill="#F59E0B" />
                  <circle cx="280" cy="280" r="8" fill="#EF4444" />
                  
                  {/* Connection lines */}
                  <line x1="120" y1="120" x2="160" y2="160" stroke="#10B981" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  <line x1="280" y1="120" x2="240" y2="160" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  <line x1="120" y1="280" x2="160" y2="240" stroke="#F59E0B" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  <line x1="280" y1="280" x2="240" y2="240" stroke="#EF4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.6" />
                  
                  {/* Floating elements - IoT symbols */}
                  <g transform="translate(80, 80)">
                    <circle cx="0" cy="0" r="15" fill="#F3F4F6" />
                    <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#6B7280" />
                  </g>
                  
                  <g transform="translate(320, 80)">
                    <circle cx="0" cy="0" r="15" fill="#F3F4F6" />
                    <circle cx="0" cy="0" r="6" fill="#8B5CF6" />
                  </g>
                  
                  <g transform="translate(80, 320)">
                    <circle cx="0" cy="0" r="15" fill="#F3F4F6" />
                    <polygon points="0,-6 6,6 -6,6" fill="#F59E0B" />
                  </g>
                  
                  <g transform="translate(320, 320)">
                    <circle cx="0" cy="0" r="15" fill="#F3F4F6" />
                    <rect x="-4" y="-8" width="8" height="16" rx="1" fill="#10B981" />
                  </g>
                  
                  {/* Data flow particles */}
                  <circle cx="140" cy="140" r="3" fill="#60A5FA" opacity="0.8">
                    <animate attributeName="cx" values="140;260;140" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="260" cy="260" r="3" fill="#34D399" opacity="0.8">
                    <animate attributeName="cx" values="260;140;260" dur="4s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Pulse animation on central chip */}
                  <rect x="150" y="150" width="100" height="100" rx="12" fill="none" stroke="#3B82F6" strokeWidth="2" opacity="0.5">
                    <animate attributeName="stroke-width" values="2;6;2" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                  </rect>
                </svg>
                
                {/* Floating tech badges */}
                <div className="absolute top-10 left-0 bg-white rounded-full px-3 py-1 shadow-lg text-sm font-medium text-blue-600 animate-pulse">
                  IoT
                </div>
                <div className="absolute top-20 right-0 bg-white rounded-full px-3 py-1 shadow-lg text-sm font-medium text-purple-600 animate-pulse" style={{animationDelay: '0.5s'}}>
                  AI/ML
                </div>
                <div className="absolute bottom-20 left-5 bg-white rounded-full px-3 py-1 shadow-lg text-sm font-medium text-green-600 animate-pulse" style={{animationDelay: '1s'}}>
                  Embedded
                </div>
                <div className="absolute bottom-10 right-10 bg-white rounded-full px-3 py-1 shadow-lg text-sm font-medium text-orange-600 animate-pulse" style={{animationDelay: '1.5s'}}>
                  Automation
                </div>
              </div>
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
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    I am an Electronics and Telecommunication Engineering student (Batch 2026) passionate about developing smart, efficient, and scalable automation systems.
                  </p>
                  <p>
                    My expertise spans microcontroller programming, sensor integration, and cloud-based IoT solutions. I specialize in building intelligent systems that merge embedded firmware, edge AI, and real-time data analytics.
                  </p>
                </div>
              </div>
              <div className="floating-card">
                <div className="flex items-center gap-2 mb-6">
                  <h3 className="text-lg font-medium text-slate-800">Recognition</h3>
                  <span className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-1 rounded-full text-xs font-semibold">Awards</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">2nd Runner Up</span>
                    <span className="text-sm text-blue-600 font-medium">Avishkar Zonal Level 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Top 10 Finalist</span>
                    <span className="text-sm text-blue-600 font-medium">Innohack 2.0 2025</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">National Player</span>
                    <span className="text-sm text-blue-600 font-medium">Basketball</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mb-6 mt-8">
                  <h3 className="text-lg font-medium text-slate-800">Leadership</h3>
                  <span className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">Roles</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Chairperson</span>
                    <span className="text-sm text-purple-600 font-medium">IETE DIEMS</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Coordinator</span>
                    <span className="text-sm text-purple-600 font-medium">Robotics Club</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Member</span>
                    <span className="text-sm text-purple-600 font-medium">Training & Placement</span>
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
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">Programming</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['C', 'C++', 'Python', 'Java', 'SQL'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">Embedded Systems</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['ARM7', 'STM32', 'ESP8266', 'Arduino', 'Raspberry Pi'].map((skill) => (
                    <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">AI & ML</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TensorFlow Lite', 'OpenCV', 'Scikit-learn', 'Edge AI'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">IoT & Networking</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['MQTT', 'Firebase', 'Node-RED', 'LoRa'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">Tools & Platforms</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'STM32CubeIDE', 'PlatformIO', 'Jupyter'].map((skill) => (
                    <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              
              <div className="skills-category">
                <div className="mb-4">
                  <h3 className="font-medium text-slate-800">Protocols</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['SPI', 'I2C', 'UART', 'ADC/DAC', 'PWM'].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{skill}</span>
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
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-slate-800">Pinchit AI: Gesture-Controlled Automation</h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Live</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Python', 'OpenCV', 'Arduino'].map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">Real-time gesture recognition system for controlling home automation devices. Achieved 90% accuracy with sub-200ms inference time.</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Custom hand-tracking model deployment
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Serial communication integration
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      85% reduction in manual interactions
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl flex items-center justify-center border-2 border-blue-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <span className="text-slate-500 text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 project-item">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-slate-800">AI Sign Language Translator</h3>
                    <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-semibold">Development</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['Arduino', 'Python', 'Flex Sensors'].map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">Wearable glove prototype translating sign gestures into text using flex sensors and machine learning.</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      92% translation accuracy
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Real-time gesture decoding
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Ergonomic hardware design
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 rounded-2xl flex items-center justify-center border-2 border-purple-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-slate-500 text-sm font-medium">Coming Soon</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 project-item">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-medium text-slate-800">Smart IoT Energy Monitoring</h3>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-semibold">Live</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['NodeMCU', 'MQTT', 'Firebase'].map((tech) => (
                      <span key={tech} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">{tech}</span>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">Cloud-connected dashboard for visualizing power usage data from distributed IoT sensor nodes.</p>
                  <ul className="space-y-2">
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      95% system uptime
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      Real-time analytics
                    </li>
                    <li className="text-sm text-slate-500 flex items-center">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                      50+ concurrent nodes support
                    </li>
                  </ul>
                </div>
                <div className="lg:text-right">
                  <div className="w-full h-48 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 rounded-2xl flex items-center justify-center border-2 border-emerald-100">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl mx-auto mb-3 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-slate-500 text-sm font-medium">Coming Soon</span>
                    </div>
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
                    <p className="text-sm text-blue-600 font-medium">Present</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1 text-slate-800">Chief Technology Officer</h3>
                    <p className="text-sm text-slate-600 mb-3">Lets Grow Ventures</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Overseeing design and implementation of client-focused digital and automation solutions. Leading technical strategy for IoT and embedded system projects.</p>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-blue-600 font-medium">4 Months</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1 text-slate-800">IoT Intern</h3>
                    <p className="text-sm text-slate-600 mb-3">Acmegrade</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Designed cloud-connected IoT systems using ESP8266, MQTT, and Firebase. Achieved 98% data delivery reliability across sensor networks.</p>
                  </div>
                </div>
              </div>

              <div className="experience-item">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <p className="text-sm text-blue-600 font-medium">2 Months</p>
                  </div>
                  <div className="lg:col-span-3">
                    <h3 className="font-medium mb-1 text-slate-800">Embedded Systems Intern</h3>
                    <p className="text-sm text-slate-600 mb-3">MSME Technology Center</p>
                    <p className="text-slate-600 text-sm leading-relaxed">Programmed ARM7 microcontrollers for industrial applications. Debugged hardware interfaces using JTAG and logic analyzers.</p>
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
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Ready to collaborate on innovative IoT and embedded systems projects? Let's connect and build intelligent automation solutions together.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    </div>
                    <a href="mailto:manthancg23@gmail.com" className="text-slate-800 hover:text-blue-600 transition-colors font-medium">manthancg23@gmail.com</a>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    </div>
                    <span className="text-slate-800 font-medium">+91 7020406293</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <span className="text-slate-800 font-medium">Aurangabad, Maharashtra</span>
                  </div>
                </div>
              </div>
              <div className="floating-card">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* Success Message */}
                  {formStatus === 'success' && (
                    <div className="p-4 bg-green-100 border border-green-300 text-green-700 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        Message sent successfully! I'll get back to you soon.
                      </div>
                    </div>
                  )}

                  {/* Error Message */}
                  {formStatus === 'error' && (
                    <div className="p-4 bg-red-100 border border-red-300 text-red-700 rounded-lg">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                        </svg>
                        Failed to send message. Please try again.
                      </div>
                    </div>
                  )}

                  <div className="form-field">
                    <input type="text" name="name" placeholder=" " required />
                    <label>Name</label>
                  </div>
                  <div className="form-field">
                    <input type="email" name="email" placeholder=" " required />
                    <label>Email</label>
                  </div>
                  <div className="form-field">
                    <input type="text" name="subject" placeholder=" " required />
                    <label>Subject</label>
                  </div>
                  <div className="form-field">
                    <textarea rows={4} name="message" placeholder=" " required></textarea>
                    <label>Message</label>
                  </div>
                  
                  {/* Hidden honeypot field for spam protection */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 mt-8 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm text-slate-500">© 2024 Manthan Gourshete. Crafted with precision and passion.</p>
        </div>
      </footer>
    </main>
  )
}
