import { useEffect, useState } from 'react'
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline'

const roles = ['Full-Stack Developer', 'React Native Developer', 'Backend Engineer']

export default function Hero() {
  const [typed, setTyped] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && typed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1600)
    } else if (isDeleting && typed === '') {
      timeout = setTimeout(() => {
        setIsDeleting(false)
        setRoleIndex((i) => (i + 1) % roles.length)
      }, 350)
    } else {
      timeout = setTimeout(
        () =>
          setTyped(
            isDeleting
              ? current.slice(0, typed.length - 1)
              : current.slice(0, typed.length + 1),
          ),
        isDeleting ? 40 : 90,
      )
    }

    return () => clearTimeout(timeout)
  }, [typed, isDeleting, roleIndex])

  return (
    <section id="home" className="relative isolate overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-blob absolute -top-24 left-[15%] h-72 w-72 rounded-full bg-[var(--accent)] opacity-20 blur-3xl" />
        <div
          className="hero-blob absolute right-[5%] top-1/4 h-56 w-56 rounded-full bg-[var(--accent)] opacity-15 blur-3xl"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="hero-blob absolute bottom-0 left-[40%] h-64 w-64 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="container-page flex min-h-[calc(100svh-4rem)] flex-col justify-center py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[55%_45%] lg:gap-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--code-bg)] px-3 py-1 text-xs font-medium text-[var(--text)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
              </span>
              Available for internships
            </p>

            <h1 className="mt-6 text-4xl font-bold text-[var(--text-h)] sm:text-5xl xl:text-6xl">
              Hi, I'm <span className="text-[var(--accent)]">Tushar</span>
            </h1>

            <p className="mt-3 flex items-center text-xl font-semibold text-[var(--text-h)] sm:text-2xl">
              <span>{typed}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-[var(--accent)] sm:h-7" />
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
              I build production-grade apps end to end with React Native, Node.js,
              Express, Prisma and Redis — currently interning and shipping real
              features from the mobile screen to the Postgres table.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-accent">
                View Projects
                <ArrowRightIcon className="size-4" />
              </a>
              <a href="#contact" className="btn btn-ghost">
                <ChatBubbleLeftRightIcon className="size-4" />
                Contact Me
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="hero-blob absolute -inset-8 rounded-full bg-[var(--accent)] opacity-20 blur-3xl"
            />

            <div className="hero-float relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--code-bg)] shadow-[var(--shadow)]">
              <div className="flex items-center gap-2 border-b border-[var(--border)] px-4 py-3">
                <span className="size-3 rounded-full bg-red-400" />
                <span className="size-3 rounded-full bg-yellow-400" />
                <span className="size-3 rounded-full bg-green-400" />
                <span className="ml-3 font-mono text-xs text-[var(--text)]">
                  developer.js
                </span>
              </div>

              <pre className="overflow-x-auto px-5 py-4 font-mono text-sm leading-7 text-[var(--text)]">
                <span className="block">
                  <span className="font-semibold text-[var(--accent)]">const</span>
                  {' '}
                  <span className="text-[var(--text-h)]">developer</span>
                  {' = {'}
                </span>
                <span className="block pl-6">
                  <span className="text-[var(--accent)]">name</span>
                  {': '}
                  <span className="text-[var(--text-h)]">"Tushar"</span>
                  {','}
                </span>
                <span className="block pl-6">
                  <span className="text-[var(--accent)]">stack</span>
                  {': ['}
                  <span className="text-[var(--text-h)]">"React Native"</span>
                  {', '}
                  <span className="text-[var(--text-h)]">"Node.js"</span>
                  {', '}
                  <span className="text-[var(--text-h)]">"Express"</span>
                  {', '}
                  <span className="text-[var(--text-h)]">"PostgreSQL"</span>
                  {']'}
                </span>
                <span className="block pl-6">
                  <span className="text-[var(--accent)]">currentlyBuilding</span>
                  {': '}
                  <span className="text-[var(--text-h)]">"DesiDukaan"</span>
                  {','}
                </span>
                <span className="block pl-6">
                  <span className="text-[var(--accent)]">status</span>
                  {': '}
                  <span className="text-[var(--text-h)]">"shipping features"</span>
                  {','}
                </span>
                <span className="block">{'}'}</span>
              </pre>
            </div>

            <div className="absolute -bottom-5 -right-2 rounded-full border border-[var(--accent-border)] bg-[var(--bg)] px-3 py-1.5 text-xs font-medium text-[var(--text-h)] shadow-[var(--shadow)]">
              <span className="mr-1.5">🟢</span>
              Currently interning
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[var(--text)] transition-colors hover:text-[var(--accent)]"
      >
        <ChevronDownIcon className="size-6 animate-bounce" />
      </a>
    </section>
  )
}
