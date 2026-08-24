import { useState } from 'react'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon } from './icons'
import { EnvelopeIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'

const EMAIL = 'tusharkh156@gmail.com'
const GITHUB = 'https://github.com/Tushar-khurana-official'
const LINKEDIN = 'https://www.linkedin.com/in/tushar-khurana-/'

const links = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: EnvelopeIcon },
  { label: 'GitHub', value: '@Tushar-khurana-official', href: GITHUB, icon: GitHubIcon },
  { label: 'LinkedIn', value: 'Tushar Khurana', href: LINKEDIN, icon: LinkedInIcon },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio contact from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
      />

      <div className="container-page relative py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
            Let's build something
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--text)]">
            Have a project, an internship lead, or just want to say hi? My inbox
            is always open.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] shadow-[var(--shadow)]">
            <div className="grid lg:grid-cols-[1fr_1.35fr]">
              <div className="flex flex-col justify-between gap-8 border-b border-[var(--border)] bg-[var(--social-bg)] p-8 lg:border-b-0 lg:border-r sm:p-10">
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-h)]">
                    Prefer email or social?
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
                    Reach me directly on any of these — I read everything and
                    try to get back quickly.
                  </p>
                </div>

                <div className="flex flex-col gap-5">
                  {links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="group flex items-center gap-4"
                    >
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent)] transition-transform duration-300 group-hover:scale-110">
                        <link.icon className="size-5" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-[var(--text)]">
                          {link.label}
                        </span>
                        <span className="block text-sm font-medium text-[var(--text-h)] transition-colors group-hover:text-[var(--accent)]">
                          {link.value}
                        </span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-8 sm:p-10">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-bg)] px-3 py-1.5 text-xs font-medium text-[var(--text-h)]">
                    <span className="relative flex size-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                      <span className="relative inline-flex size-2 rounded-full bg-[var(--accent)]" />
                    </span>
                    Usually replies within a day
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-[var(--text-h)]">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update('name')}
                      placeholder="Your name"
                      className="input"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-[var(--text-h)]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update('email')}
                      placeholder="you@example.com"
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[var(--text-h)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="5"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project…"
                    className="input resize-y"
                  />
                </div>

                <button type="submit" className="btn btn-accent self-start">
                  <PaperAirplaneIcon className="size-4" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
