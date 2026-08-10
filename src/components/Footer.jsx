import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { GitHubIcon, LinkedInIcon } from './icons'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-[var(--text)]">
          © {new Date().getFullYear()} Tushar. Built with React + Tailwind.
        </p>

        <div className="flex items-center gap-3">
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
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--border)] text-[var(--text-h)] transition-colors hover:border-[var(--accent-border)] hover:text-[var(--accent)]"
          >
            <ArrowUpIcon className="size-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
