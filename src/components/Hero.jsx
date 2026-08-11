import { useEffect, useRef, useState } from 'react'
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
  const cardRef = useRef(null)

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

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * 14
    const rotateX = (0.5 - py) * 14
    card.style.transition = 'transform 0.08s linear'
    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = 'transform 0.5s ease'
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)'
  }

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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text)]/70 sm:text-[12px] sm:whitespace-nowrap">
              Full-Stack Developer · React Native · Node.js
            </p>

            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--code-bg)] px-3 py-1 text-xs font-medium text-[var(--text)]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
              </span>
              Available for internships
            </p>

            <h1 className="mt-4 text-4xl font-bold text-[var(--text-h)] sm:text-5xl xl:text-6xl">
              Hi, I'm <span className="text-[var(--accent)]">Tushar</span>
            </h1>

            <p className="mt-2 flex items-center text-xl font-semibold text-[var(--text-h)] sm:text-2xl">
              <span>{typed}</span>
              <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-[var(--accent)] sm:h-7" />
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--text)] sm:text-lg">
              I build production-grade apps end to end with React Native, Node.js,
              Express, Prisma and Redis — currently interning and shipping real
              features from the mobile screen to the Postgres table.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
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

            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden rounded-2xl border border-[var(--border)] bg-gradient-to-br from-[var(--accent-bg)] via-[var(--code-bg)] to-[var(--code-bg)] shadow-[var(--shadow)] will-change-transform"
            >
              <img
                src="/profile.png"
                alt="Tushar"
                className="h-[26rem] w-full object-cover object-[50%_20%] sm:h-[30rem] lg:h-[32rem]"
              />

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[color-mix(in_srgb,var(--accent)_30%,transparent)] to-transparent"
              />

              <div className="absolute left-4 top-4 rounded-xl bg-[#14141a]/85 px-3.5 py-2 text-sm font-semibold text-white shadow-lg backdrop-blur-sm">
                Hi, I'm Tushar 👋
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-7 size-2.5 rotate-45 bg-[#14141a]/85"
                />
              </div>
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
