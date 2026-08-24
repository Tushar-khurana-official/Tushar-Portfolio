import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { GitHubIcon, LinkedInIcon } from './icons'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-5">
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 max-w-[960px] items-center justify-between gap-3 rounded-full border border-[var(--border)] bg-[color:var(--bg)]/85 px-3 shadow-[var(--shadow)] backdrop-blur-lg sm:px-4"
      >
        <a
          href="#home"
          className="flex items-center gap-2.5 text-[15px] font-bold text-[var(--text-h)] transition-colors hover:text-[var(--accent)]"
        >
          <img
            src="/profile.png"
            alt="Tushar"
            className="size-9 rounded-full border border-[var(--accent-border)] object-cover transition-transform duration-300 hover:scale-105"
          />
          Tushar<span className="text-[var(--accent)]">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-3.5 py-1.5 text-[13px] font-medium text-[var(--text)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="/resume.pdf"
            download="Tushar-Khurana-Resume.pdf"
            className="btn btn-accent hidden !rounded-full !px-4 !py-2 !text-[13px] sm:inline-flex"
          >
            <ArrowDownTrayIcon className="size-3.5" />
            Resume
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open main menu"
            className="inline-flex size-9 items-center justify-center rounded-full text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)] md:hidden"
          >
            <Bars3Icon className="size-5" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
        <DialogPanel className="fixed inset-x-4 top-20 z-50 mx-auto max-w-sm rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-5 shadow-[var(--shadow)]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2.5 text-[15px] font-bold text-[var(--text-h)]">
              <img
                src="/profile.png"
                alt="Tushar"
                className="size-9 rounded-full border border-[var(--accent-border)] object-cover"
              />
              Tushar<span className="text-[var(--accent)]">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              className="rounded-full p-2 text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)]"
            >
              <XMarkIcon className="size-5" />
            </button>
          </div>

          <div className="mt-5 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-semibold text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Tushar-Khurana-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent !rounded-full mt-2"
            >
              <ArrowDownTrayIcon className="size-4" />
              Resume
            </a>
          </div>

          <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-5">
            <a
              href="https://github.com/Tushar-khurana-official"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
            >
              <GitHubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/tushar-khurana-official"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
