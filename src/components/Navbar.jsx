import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  ArrowDownTrayIcon,
  SunIcon,
  MoonIcon,
  CommandLineIcon,
} from '@heroicons/react/24/outline'
import { GitHubIcon, LinkedInIcon } from './icons'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar({ isDarkMode, toggleTheme, onOpenTerminal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4 transition-all duration-300">
      <nav
        aria-label="Main navigation"
        className={`mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 rounded-full border px-4 transition-all duration-300 ${
          scrolled
            ? 'border-[var(--accent-border)] bg-[var(--bg-card)] shadow-lg backdrop-blur-xl'
            : 'border-[var(--border)] bg-[var(--bg-card)]/80 backdrop-blur-md'
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#home"
          className="flex items-center gap-2.5 text-base font-bold text-[var(--text-h)] transition-transform duration-300 hover:scale-105"
        >
          <div className="relative">
            <img
              src="/profile.png"
              alt="Tushar Khurana"
              className="size-9 rounded-full border-2 border-[var(--accent)] object-cover shadow-sm"
            />
            <span className="absolute bottom-0 right-0 size-2.5 rounded-full bg-emerald-500 border-2 border-[var(--bg)]" />
          </div>
          <span className="font-heading tracking-tight text-base sm:text-lg">
            Tushar<span className="text-[var(--accent-light)]">.</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold text-[var(--text)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent-light)]"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Terminal Launcher Trigger */}
          <button
            type="button"
            onClick={onOpenTerminal}
            title="Open Interactive Terminal"
            aria-label="Open Interactive Terminal"
            className="flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--accent-bg)] px-3 py-1.5 text-xs font-mono font-medium text-[var(--accent-light)] hover:border-[var(--accent-border)] hover:bg-violet-500/20 transition-all"
          >
            <CommandLineIcon className="size-3.5" />
            <span className="hidden sm:inline">CLI</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark/Light Mode"
            title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className="flex size-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
          >
            {isDarkMode ? (
              <SunIcon className="size-4 text-amber-400" />
            ) : (
              <MoonIcon className="size-4 text-violet-600" />
            )}
          </button>

          {/* Resume CTA */}
          <a
            href="/resume.pdf"
            download="Tushar-Khurana-Resume.pdf"
            className="btn btn-accent hidden !rounded-full !px-4 !py-1.5 !text-xs sm:inline-flex"
          >
            <ArrowDownTrayIcon className="size-3.5" />
            Resume
          </a>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] hover:bg-[var(--accent-bg)] md:hidden"
          >
            <Bars3Icon className="size-5" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dialog */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-x-4 top-20 z-50 mx-auto max-w-sm rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 shadow-2xl">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 text-base font-bold text-[var(--text-h)]">
              <img
                src="/profile.png"
                alt="Tushar Khurana"
                className="size-9 rounded-full border-2 border-[var(--accent)] object-cover"
              />
              Tushar<span className="text-[var(--accent-light)]">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-[var(--text-h)] hover:bg-[var(--accent-bg)] transition-colors"
            >
              <XMarkIcon className="size-5" />
            </button>
          </div>

          <div className="mt-6 flex flex-col gap-1.5">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent-light)]"
              >
                {item.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenTerminal()
              }}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-mono font-medium text-violet-400 bg-violet-950/40 border border-violet-500/30"
            >
              <CommandLineIcon className="size-4" />
              Open CLI Terminal
            </button>

            <a
              href="/resume.pdf"
              download="Tushar-Khurana-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent !rounded-full mt-3 w-full justify-center"
            >
              <ArrowDownTrayIcon className="size-4" />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4 border-t border-[var(--border)] pt-5">
            <a
              href="https://github.com/Tushar-khurana-official"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-khurana-/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex size-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}