import Reveal from './Reveal'
import { GitHubIcon } from './icons'
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline'

const projects = [
  {
    title: 'DesiDukaan',
    type: 'Full-Stack',
    featured: true,
    tagline: 'A full-stack kirana & grocery ordering app.',
    description:
      'React Native/Expo apps for customers and vendors backed by Node.js + Express + Prisma + PostgreSQL, with Redis caching and Twilio OTP auth.',
    highlights: [
      'Vendor onboarding',
      'Admin panel',
      'Live order tracking',
      'Customer + vendor apps',
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Twilio'],
    github: 'https://github.com/Tushar-khurana-official',
    demo: '#',
    private: true,
  },
  {
    title: 'Peblo AI Story Buddy & Quiz Component',
    type: 'Mobile',
    tagline: 'A gamified Flutter story & quiz experience.',
    description:
      'Custom canvas-drawn character, text-to-speech narration, animated UI and Provider state management for stories and quizzes.',
    tech: ['Flutter', 'Dart', 'Provider', 'Text-to-Speech'],
    github: 'https://github.com/Tushar-khurana-official',
    demo: null,
    private: true,
  },
  {
    title: 'Binance Futures Testnet Trading Bot',
    type: 'CLI Tool',
    tagline: 'An automated testnet trading script.',
    description:
      'Python CLI trading bot for the Binance Futures testnet with argparse commands, strict input validation and rotating file logging.',
    tech: ['Python', 'argparse', 'Binance API', 'Logging'],
    github: 'https://github.com/Tushar-khurana-official',
    demo: null,
    private: true,
  },
]

const [featured, ...secondary] = projects

function TypeTag({ type }) {
  return (
    <span className="rounded-full bg-[var(--accent-bg)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
      {type}
    </span>
  )
}

function RepoLink({ p }) {
  return (
    <a
      href={p.github}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:text-[var(--accent)]"
    >
      <GitHubIcon className="size-4" />
      Code
    </a>
  )
}

function DemoLink({ p }) {
  if (p.demo) {
    return (
      <a
        href={p.demo}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-h)] transition-colors hover:text-[var(--accent)]"
      >
        Live demo
        <ArrowTopRightOnSquareIcon className="size-4" />
      </a>
    )
  }
  return (
    <span className="btn-disabled">
      <LockClosedIcon className="size-4" />
      Demo soon
    </span>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
      />

      <div className="container-page relative py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
                Things I've built
              </h2>
            </div>
            <a
              href="https://github.com/Tushar-khurana-official"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text)] transition-colors hover:text-[var(--accent)]"
            >
              <GitHubIcon className="size-4" />
              More on GitHub
            </a>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal className="lg:col-span-2">
            <article className="project-card relative overflow-hidden rounded-3xl p-8 lg:flex-row lg:gap-10 sm:p-10">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1.5 bg-[var(--accent)]"
              />
              <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <TypeTag type={featured.type} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent)]">
                      Featured
                    </span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-[var(--text-h)] sm:text-3xl">
                    {featured.title}
                  </h3>
                  <p className="mt-2 text-lg font-medium text-[var(--text-h)]">
                    {featured.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
                    {featured.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-5 border-t border-[var(--border)] pt-5">
                    <RepoLink p={featured} />
                    <DemoLink p={featured} />
                    {featured.private && (
                      <span className="lock-badge">
                        <LockClosedIcon className="size-3.5" />
                        Private repo
                      </span>
                    )}
                  </div>
                </div>

                <div className="rounded-2xl bg-[var(--code-bg)] p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--text)]">
                    Highlights
                  </p>
                  <ul className="mt-4 space-y-3">
                    {featured.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-sm text-[var(--text-h)]">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--btn-fg, #fff)]">
                          <CheckIcon className="size-3" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          {secondary.map((p, i) => (
            <Reveal key={p.title} delay={i * 120} className="h-full">
              <article className="project-card h-full rounded-xl bg-[var(--code-bg)] p-7">
                <div className="flex items-start justify-between gap-4">
                  <TypeTag type={p.type} />
                  <span className="font-mono text-xs font-bold text-[var(--text)]">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-[var(--text-h)]">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[var(--text-h)]">
                  {p.tagline}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--text)]">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-[var(--border)] pt-4">
                  <RepoLink p={p} />
                  <DemoLink p={p} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
