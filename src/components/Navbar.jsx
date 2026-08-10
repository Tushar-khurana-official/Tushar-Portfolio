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
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)]/85 backdrop-blur">
      <nav
        aria-label="Main"
        className="container-page flex h-16 items-center justify-between"
      >
        <a href="#home" className="text-lg font-bold text-[var(--text-h)]">
          Tushar<span className="text-[var(--accent)]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              {item.name}
            </a>
          ))}
          <a href="/resume.pdf" download="Tushar_Resume.pdf" className="btn btn-accent !py-2">
            <ArrowDownTrayIcon className="size-4" />
            Resume
          </a>
        </div>

        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)]"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 z-50 bg-black/40" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs overflow-y-auto border-l border-[var(--border)] bg-[var(--bg)] p-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-[var(--text-h)]">
              Tushar<span className="text-[var(--accent)]">.</span>
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)]"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-semibold text-[var(--text-h)] transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
              >
                {item.name}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download="Tushar_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-accent mt-4"
            >
              <ArrowDownTrayIcon className="size-4" />
              Resume
            </a>

            <div className="mt-6 flex gap-3 border-t border-[var(--border)] pt-6">
              <a
                href="https://github.com/Tushar-khurana-official"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
              >
                <GitHubIcon className="size-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-khurana-official"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
