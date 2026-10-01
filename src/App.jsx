import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ClickSparkle from './components/ClickSparkle'
import Terminal from './components/Terminal'
import ScrollProgress from './components/ScrollProgress'
import CursorSpotlight from './components/CursorSpotlight'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return true // Default dark theme
    } catch {
      return true
    }
  })

  const [terminalOpen, setTerminalOpen] = useState(false)
  const [toastMessage, setToastMessage] = useState('')

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev)
  }

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => {
      setToastMessage('')
    }, 3200)
  }

  return (
    <>
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Ambient Mouse Spotlight in Dark Mode */}
      {isDarkMode && <CursorSpotlight />}

      {/* Main Header Nav */}
      <Navbar
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
        onOpenTerminal={() => setTerminalOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        <Hero onOpenTerminal={() => setTerminalOpen(true)} />
        <Services />
        <About />
        <Projects />
        <Skills />
        <Contact showToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Utilities */}
      <FloatingWhatsApp />
      <ClickSparkle />

      {/* Interactive Developer CLI Modal */}
      <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

      {/* Toast Notification Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-2xl border border-violet-500/40 bg-slate-900/90 px-5 py-3 text-xs font-semibold text-slate-100 shadow-2xl backdrop-blur-md animate-bounce">
          {toastMessage}
        </div>
      )}
    </>
  )
}

export default App
