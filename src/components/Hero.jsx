import { useEffect, useRef, useState } from 'react'
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const roles = [
  'Full-Stack Developer',
  'React Native Mobile Engineer',
  'Backend & API Specialist',
]

const stackChips = [
  'React Native',
  'Node.js',
  'Express',
  'Prisma',
  'PostgreSQL',
  'Redis',
]

export default function Hero({ onOpenTerminal }) {
  const [typed, setTyped] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const cardRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout

    if (!isDeleting && typed === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800)
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
        isDeleting ? 35 : 85,
      )
    }

    return () => {
      clearTimeout(timeout)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [typed, isDeleting, roleIndex])

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return

    if (rafRef.current) cancelAnimationFrame(rafRef.current)

    rafRef.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width
      const py = (e.clientY - rect.top) / rect.height
      const rotateY = (px - 0.5) * 16
      const rotateX = (0.5 - py) * 16
      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    })
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s ease'
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
  }

  return (
    <section id="home" className="relative isolate overflow-hidden pt-24 pb-16 sm:pt-32 sm:pb-24">
      {/* Grid Pattern & Ambient Blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-pattern opacity-40" />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-blob absolute -top-32 left-1/4 size-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div
          className="hero-blob absolute right-10 top-1/3 size-80 rounded-full bg-indigo-600/15 blur-3xl"
          style={{ animationDelay: '-4s' }}
        />
        <div
          className="hero-blob absolute bottom-0 left-1/3 size-96 rounded-full bg-pink-500/10 blur-3xl"
          style={{ animationDelay: '-8s' }}
        />
      </div>

      <div className="container-page flex min-h-[calc(100vh-8rem)] flex-col justify-center">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          {/* Left Column Text Content */}
          <div>
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/30 px-3.5 py-1.5 text-xs font-semibold text-violet-300 backdrop-blur-md shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Available for Software Engineering Internships
            </div>

            {/* Title */}
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[var(--text-h)] sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="gradient-text">Tushar Khurana</span>
            </h1>

            {/* Typewriter Subtitle */}
            <div className="mt-2 flex items-center text-xl font-bold text-[var(--text-h)] sm:text-2xl min-h-[2.5rem]">
              <span className="text-[var(--accent-cyan)]">{typed}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-[var(--accent)] sm:h-7" />
            </div>

            {/* Bio */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
              I construct end-to-end applications across mobile screens & web browsers—backed by robust Node.js APIs, Prisma ORM, PostgreSQL, and Redis caching.
            </p>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2">
              {stackChips.map((chip) => (
                <span key={chip} className="badge">
                  {chip}
                </span>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-accent">
                Explore Projects
                <ArrowRightIcon className="size-4" />
              </a>

              <a href="#contact" className="btn btn-ghost">
                <ChatBubbleLeftRightIcon className="size-4 text-[var(--accent-light)]" />
                Contact Me
              </a>

              <button
                type="button"
                onClick={onOpenTerminal}
                className="btn btn-secondary font-mono text-xs"
              >
                <CommandLineIcon className="size-4" />
                Launch CLI
              </button>
            </div>
          </div>

          {/* Right Column 3D Card Showcase */}
          <div className="relative flex justify-center">
            {/* Back Glow Aura */}
            <div
              aria-hidden="true"
              className="hero-blob absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-pink-500 opacity-30 blur-2xl"
            />

            {/* 3D Tilt Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="glass-panel relative w-full max-w-md overflow-hidden rounded-3xl border border-[var(--border)] p-4 shadow-2xl transition-all duration-300 will-change-transform group"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950">
                <img
                  src="/profile.png"
                  alt="Tushar Khurana"
                  className="h-[24rem] w-full object-cover object-[50%_20%] sm:h-[28rem] transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Bottom Overlay Gradient */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"
                />

                {/* Floating Badge Top Left */}
                <div className="absolute left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-1.5 text-xs font-semibold text-slate-100 shadow-xl backdrop-blur-md">
                  <SparklesIcon className="size-4 text-amber-400" />
                  Full-Stack Intern
                </div>

                {/* Floating Badge Bottom Left */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-slate-900/90 p-3 shadow-xl backdrop-blur-md">
                  <div>
                    <p className="text-xs font-bold text-white font-heading">Tushar Khurana</p>
                    <p className="text-[11px] text-slate-400 font-mono">React Native & Backend</p>
                  </div>
                  <span className="flex size-3 rounded-full bg-emerald-500 shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}