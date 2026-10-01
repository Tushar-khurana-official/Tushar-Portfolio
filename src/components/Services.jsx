import Reveal from './Reveal'
import {
  DevicePhoneMobileIcon,
  CodeBracketSquareIcon,
  ServerStackIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline'

const services = [
  {
    title: 'Mobile App Development',
    icon: DevicePhoneMobileIcon,
    tagline: 'iOS & Android Native Apps',
    description:
      'Building performant, cross-platform mobile experiences with React Native & Expo. From pixel-perfect UI animations to native device feature integration.',
    skills: ['React Native', 'Expo', 'Mobile Navigation', 'State Management'],
  },
  {
    title: 'Full-Stack Web Development',
    icon: CodeBracketSquareIcon,
    tagline: 'Modern Responsive Web Apps',
    description:
      'Designing fast, SEO-optimized web applications with React.js, Tailwind CSS, and Vite with clean responsive layouts and interactive user experiences.',
    skills: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST APIs'],
  },
  {
    title: 'Backend Engineering & APIs',
    icon: ServerStackIcon,
    tagline: 'Scalable Microservices & Systems',
    description:
      'Developing production-grade RESTful APIs with Node.js and Express. Implementing JWT auth, Twilio OTP, caching layers, and microservice communication.',
    skills: ['Node.js', 'Express', 'Twilio OTP', 'JWT & Auth'],
  },
  {
    title: 'Database & Caching Architecture',
    icon: CpuChipIcon,
    tagline: 'Relational Data & High-Speed Cache',
    description:
      'Architecting resilient relational database schemas using PostgreSQL and Prisma ORM, paired with Redis caching for ultra-low latency reads.',
    skills: ['PostgreSQL', 'Prisma ORM', 'Redis', 'Database Schema Design'],
  },
]

export default function Services() {
  return (
    <section id="services" className="relative border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28">
      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Capabilities
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
            What I Can Build For You
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text)]">
            End-to-end expertise spanning mobile screens, responsive web interfaces, and high-performance backend architecture.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={idx * 100}>
              <div className="glass-card group relative h-full rounded-2xl p-7 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--accent-bg)] text-[var(--accent-light)] border border-[var(--accent-border)] transition-transform duration-300 group-hover:scale-110">
                      <service.icon className="size-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[var(--text)] opacity-60">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[var(--text-h)] group-hover:text-[var(--accent-light)] transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[var(--accent-cyan)]">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--text)]">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-[var(--border)] pt-5">
                  {service.skills.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
