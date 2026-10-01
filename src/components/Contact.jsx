import { useState } from 'react'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon } from './icons'
import {
  EnvelopeIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  ClipboardDocumentIcon,
  CheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const EMAIL = 'tusharkh156@gmail.com'
const PHONE = '+91 9718833891'
const GITHUB = 'https://github.com/Tushar-khurana-official'
const LINKEDIN = 'https://www.linkedin.com/in/tushar-khurana-/'

export default function Contact({ showToast }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopiedEmail(true)
    if (showToast) showToast('Email copied to clipboard! 📋')
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PHONE)
    setCopiedPhone(true)
    if (showToast) showToast('Phone number copied to clipboard! 📱')
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— Sent by ${form.name} (${form.email})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    if (showToast) showToast('Opening mail client... 🚀')
  }

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  return (
    <section id="contact" className="relative border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28">
      {/* Background Glow Blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 size-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Get In Touch
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
            Let's Build Something Exceptional
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text)]">
            Whether you have an internship opportunity, a project proposal, or just want to discuss software engineering—my inbox is always open.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="glass-panel overflow-hidden rounded-3xl border border-[var(--border)] grid lg:grid-cols-[1fr_1.2fr] shadow-2xl">
            {/* Direct Contact Cards */}
            <div className="flex flex-col justify-between p-8 sm:p-10 border-b border-[var(--border)] lg:border-b-0 lg:border-r bg-[var(--accent-bg)]/40">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-950/30 px-3.5 py-1 text-xs font-semibold text-violet-300">
                  <SparklesIcon className="size-3.5 text-amber-400" />
                  Quick Response Guaranteed
                </div>

                <h3 className="mt-6 text-2xl font-bold text-[var(--text-h)] font-heading">
                  Direct Reachout
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text)]">
                  Feel free to reach out via email, phone call, WhatsApp, or connect with me on GitHub & LinkedIn.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {/* Email Item */}
                <div className="glass-card flex items-center justify-between rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-400">
                      <EnvelopeIcon className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text)]">
                        Email Address
                      </p>
                      <a href={`mailto:${EMAIL}`} className="text-sm font-bold text-[var(--text-h)] hover:text-[var(--accent-light)] transition-colors">
                        {EMAIL}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex size-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] hover:text-[var(--text-h)] hover:border-[var(--accent-border)] transition-all"
                    title="Copy Email"
                  >
                    {copiedEmail ? <CheckIcon className="size-4 text-emerald-400" /> : <ClipboardDocumentIcon className="size-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="glass-card flex items-center justify-between rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                      <PhoneIcon className="size-5" />
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text)]">
                        Phone & WhatsApp
                      </p>
                      <a href={`tel:${PHONE}`} className="text-sm font-bold text-[var(--text-h)] hover:text-emerald-400 transition-colors">
                        {PHONE}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyPhone}
                    className="flex size-9 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--bg-card)] text-[var(--text)] hover:text-[var(--text-h)] hover:border-[var(--accent-border)] transition-all"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <CheckIcon className="size-4 text-emerald-400" /> : <ClipboardDocumentIcon className="size-4" />}
                  </button>
                </div>

                {/* Social Links */}
                <div className="flex gap-3 pt-2">
                  <a
                    href={GITHUB}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] py-3 text-xs font-semibold text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
                  >
                    <GitHubIcon className="size-4" />
                    GitHub Profile
                  </a>
                  <a
                    href={LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg-card)] py-3 text-xs font-semibold text-[var(--text-h)] hover:border-[var(--accent-border)] hover:text-[var(--accent-light)] transition-all"
                  >
                    <LinkedInIcon className="size-4" />
                    LinkedIn Network
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Form */}
            <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-5 p-8 sm:p-10">
              <div>
                <h3 className="text-xl font-bold text-[var(--text-h)] font-heading">
                  Send a Direct Message
                </h3>
                <p className="mt-1 text-xs text-[var(--text)]">
                  Fill in your info and I'll receive it straight in my inbox.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-h)]">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={update('name')}
                    placeholder="e.g. Alex Smith"
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-h)]">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={update('email')}
                    placeholder="alex@company.com"
                    className="input"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--text-h)]">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows="4"
                    value={form.message}
                    onChange={update('message')}
                    placeholder="Tell me about your project, role, or proposal..."
                    className="input resize-y"
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-accent w-full justify-center !py-3">
                <PaperAirplaneIcon className="size-4" />
                Send Email Message
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}