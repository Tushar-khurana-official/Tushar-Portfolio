import { useState } from 'react'
import Reveal from './Reveal'
import { GitHubIcon } from './icons'
import {
  ArrowTopRightOnSquareIcon,
  CheckIcon,
  LockClosedIcon,
  SparklesIcon,
  XMarkIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

const projects = [
  {
    id: 1,
    category: 'Full-Stack',
    featured: true,
    tag: 'Full-Stack Mobile & Web',
    title: 'DesiDukaan',
    subtitle: 'A Full-Stack Kirana & Grocery Ordering Ecosystem',
    description:
      'Cross-platform mobile applications for customers and vendors built with React Native & Expo. Powered by a high-performance Node.js + Express backend with Prisma ORM, PostgreSQL database, Redis caching layer, and Twilio OTP authentication.',
    highlights: [
      'Dual Mobile Apps (Customer & Vendor)',
      'Admin Management Dashboard',
      'Realtime Live Order Tracking',
      'Twilio SMS OTP Authentication',
      'Redis Distributed Caching Layer',
    ],
    tech: ['React Native', 'Expo', 'Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Redis', 'Twilio'],
    github: 'https://github.com/Tushar-khurana-official',
    demo: '#',
    demoStatus: 'private',
    architectureNotes:
      'Architected with clean layered service patterns. Redis caches top grocery categories and vendor inventories to achieve sub-50ms API responses.',
  },
  {
    id: 2,
    category: 'Web App',
    featured: false,
    tag: 'Web Application',
    title: 'Emergency Locator',
    subtitle: 'Web App for Emergency Services Discovery',
    description:
      'A real-time web application to help citizens locate nearby emergency facilities (hospitals, police stations, ambulances) instantly with map markers and quick routing.',
    highlights: [
      'HTML5 Geolocation API Integration',
      'Interactive Map Service Integration',
      'Instant Category Filtering',
      'Fast Mobile-First Responsive Design',
    ],
    tech: ['React.js', 'Geolocation API', 'Maps API', 'Tailwind CSS'],
    github: 'https://github.com/Tushar-khurana-official/emergency-locator',
    demo: 'https://emergency-locator.vercel.app/',
    demoStatus: 'live',
    architectureNotes:
      'Uses client-side browser geolocation to query spatial coordinates and compute real-time distance matrices for emergency routing.',
  },
  {
    id: 3,
    category: 'Web App',
    featured: false,
    tag: 'Portfolio & Studio',
    title: 'Khurana.Studio',
    subtitle: 'Developer Studio & Portfolio Site',
    description:
      'Tushar Khurana’s personal developer studio website showcasing active projects, technical skills, interactive CLI terminal, and contact workflows.',
    highlights: [
      'Dark/Light Theme Toggle System',
      'Interactive Embedded Developer CLI Terminal',
      'Copy-to-Clipboard Email & WhatsApp Integrations',
      'Glassmorphic Responsive UI Design',
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'Headless UI'],
    github: 'https://github.com/Tushar-khurana-official/Khurana.Studio',
    demo: 'https://github.com/Tushar-khurana-official',
    demoStatus: 'live',
    architectureNotes:
      'Built using Vite + React with CSS variable design tokens for theme swapping without layout shifts.',
  },
]

const categories = ['All', 'Full-Stack', 'Web App']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <section id="projects" className="relative border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28">
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 size-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="container-page relative">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
                Portfolio
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
                Featured Projects
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] p-1.5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                    activeCategory === cat
                      ? 'bg-[var(--accent)] text-white shadow-md'
                      : 'text-[var(--text)] hover:text-[var(--text-h)]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Projects Grid */}
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={index * 100} className="h-full">
              <div
                className={`glass-card relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-7 sm:p-9 ${
                  project.featured ? 'border-[var(--accent-border)] ring-1 ring-violet-500/20' : ''
                }`}
              >
                {/* Top Accent Strip for Featured */}
                {project.featured && (
                  <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-violet-500 via-indigo-500 to-pink-500" />
                )}

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="badge font-mono text-[11px] uppercase">
                      {project.tag}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1.5 rounded-full bg-violet-500/15 border border-violet-500/30 px-3 py-0.5 text-xs font-bold text-violet-300">
                        <SparklesIcon className="size-3.5 text-amber-400" />
                        Featured Flagship
                      </span>
                    )}
                  </div>

                  <h3 className="mt-4 text-2xl font-bold text-[var(--text-h)] font-heading">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent-light)]">
                    {project.subtitle}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--text)]">
                    {project.description}
                  </p>

                  {/* Highlights List if available */}
                  {project.highlights && (
                    <div className="mt-5 rounded-2xl border border-[var(--border)] bg-[var(--code-bg)]/60 p-4">
                      <p className="text-xs font-bold uppercase tracking-wider text-[var(--text-h)]">
                        Key Highlights
                      </p>
                      <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
                        {project.highlights.slice(0, 4).map((h) => (
                          <li key={h} className="flex items-center gap-2 text-xs text-[var(--text)]">
                            <span className="flex size-4 shrink-0 items-center justify-center rounded-full bg-violet-500/20 text-violet-400">
                              <CheckIcon className="size-2.5" />
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span key={t} className="badge">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Links & Detail Modal Trigger */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--border)] pt-5">
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--text-h)] hover:text-[var(--accent-light)] transition-colors"
                    >
                      <GitHubIcon className="size-4" />
                      Code Repo
                    </a>

                    {project.demo && project.demo !== '#' ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-cyan)] hover:underline"
                      >
                        Live Demo
                        <ArrowTopRightOnSquareIcon className="size-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text)] opacity-70">
                        <LockClosedIcon className="size-3.5" />
                        Private Repo
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-light)] hover:underline"
                  >
                    <InformationCircleIcon className="size-4" />
                    System Details
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="glass-panel w-full max-w-xl overflow-hidden rounded-3xl border border-[var(--accent-border)] bg-[var(--bg)] p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
              <div>
                <span className="badge text-[10px] uppercase">
                  {selectedProject.category}
                </span>
                <h3 className="mt-1 text-2xl font-bold text-[var(--text-h)] font-heading">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full p-2 text-[var(--text)] hover:bg-[var(--accent-bg)] hover:text-[var(--text-h)] transition-colors"
              >
                <XMarkIcon className="size-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm leading-relaxed text-[var(--text)]">
              <p>{selectedProject.description}</p>

              <div>
                <h4 className="font-bold text-[var(--text-h)] text-xs uppercase tracking-wider mb-2">
                  System Architecture & Features
                </h4>
                <p className="text-xs font-mono bg-[var(--code-bg)] p-3 rounded-xl border border-[var(--border)] text-[var(--text-h)]">
                  {selectedProject.architectureNotes}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[var(--text-h)] text-xs uppercase tracking-wider mb-2">
                  Full Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-3 border-t border-[var(--border)] pt-5">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost !py-2 !px-4 !text-xs"
              >
                <GitHubIcon className="size-4" />
                View GitHub
              </a>
              {selectedProject.demo && selectedProject.demo !== '#' && (
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-accent !py-2 !px-4 !text-xs"
                >
                  Launch App
                  <ArrowTopRightOnSquareIcon className="size-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}