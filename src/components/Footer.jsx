import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { GitHubIcon, LinkedInIcon } from './icons'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]/50 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <a
            href="#home"
            className="font-heading text-lg font-bold text-[var(--text-h)] transition-colors hover:text-[var(--accent-light)]"
          >
            Tushar Khurana<span className="text-[var(--accent)]">.</span>
          </a>
          <p className="mt-1 text-xs text-[var(--text)]">
            © {new Date().getFullYear()} Tushar Khurana. Engineered with React, Vite & Tailwind CSS.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Tushar-khurana-official"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/tushar-khurana-/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
          >
            <LinkedInIcon className="size-4" />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
            title="Scroll to Top"
          >
            <ArrowUpIcon className="size-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}