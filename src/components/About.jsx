import Reveal from './Reveal'
import {
  BriefcaseIcon,
  ShoppingBagIcon,
  ChartBarIcon,
  SparklesIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

const stats = [
  { label: 'Primary Focus', value: 'Full-Stack & Mobile' },
  { label: 'Featured Product', value: 'DesiDukaan Kirana Suite' },
  { label: 'Backend Architecture', value: 'Node + Postgres + Redis' },
  { label: 'Mobile Tech', value: 'React Native & Expo' },
]

const journey = [
  {
    label: 'Internship',
    icon: BriefcaseIcon,
    text: 'Shipping production mobile & web applications end to end in a fast-paced environment.',
  },
  {
    label: 'DesiDukaan',
    icon: ShoppingBagIcon,
    text: 'Building a full-stack Kirana ordering suite with dual mobile apps (Customer & Vendor) + Express backend.',
  },
  {
    label: 'Architecture & System Design',
    icon: ChartBarIcon,
    text: 'Levelling up on distributed caching, Redis, database schema optimization with Prisma, & Twilio OTP auth.',
  },
  {
    label: 'What\'s Next',
    icon: SparklesIcon,
    text: 'Scaling production apps to thousands of daily active users while building clean maintainable code.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28">
      <div className="container-page relative">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bio Column */}
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
              Engineering solutions from mobile UX to database tables.
            </h2>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-[var(--text)]">
              I'm <strong className="text-[var(--text-h)] font-semibold">Tushar Khurana</strong>, a full-stack software engineer and fresher currently shipping real code in my internship. I specialize in turning complex product concepts into clean, reliable, and user-centric applications.
            </p>

            {/* Glowing Highlight Box */}
            <div className="mt-8 overflow-hidden rounded-2xl border border-[var(--accent-border)] bg-[var(--accent-bg)] p-6 shadow-lg backdrop-blur-md">
              <p className="text-xl font-bold leading-relaxed gradient-text sm:text-2xl">
                "Building production-grade apps end to end with speed, reliability, and clean design."
              </p>
            </div>

            <p className="mt-8 leading-relaxed text-[var(--text)] text-sm sm:text-base">
              Right now my primary build is <span className="text-[var(--text-h)] font-medium">DesiDukaan</span>—a comprehensive full-stack Kirana ordering ecosystem powered by React Native, Express, Prisma, PostgreSQL, Redis, and Twilio OTP.
            </p>

            {/* Stats Grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-wider text-[var(--text)] opacity-75">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-sm font-bold text-[var(--text-h)]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Timeline / Journey Column */}
          <Reveal delay={120}>
            <div className="glass-panel rounded-3xl p-8 sm:p-10 border border-[var(--border)]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent-cyan)]">
                <CheckCircleIcon className="size-4" />
                Current Journey & Milestones
              </div>
              
              <ol className="relative mt-8 space-y-8 border-l-2 border-[var(--accent-border)] pl-6">
                {journey.map((step) => (
                  <li key={step.label} className="relative group">
                    <span className="absolute -left-[31px] top-1 flex size-4 items-center justify-center rounded-full bg-[var(--accent)] shadow-md transition-transform duration-300 group-hover:scale-125" />
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--accent-light)]">
                      {step.label}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text)]">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-8 border-t border-[var(--border)] pt-5 text-xs font-mono text-[var(--text)] opacity-70 flex items-center justify-between">
                <span>🟢 Open for opportunities</span>
                <span>tusharkh156@gmail.com</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}