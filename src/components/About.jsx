import Reveal from './Reveal'

const journey = [
  {
    label: 'Internship',
    text: 'Shipping production apps end to end at a startup',
  },
  {
    label: 'DesiDukaan',
    text: 'Building a full-stack kirana ordering platform',
  },
  {
    label: 'Growth',
    text: 'Levelling up on system design & React Native',
  },
]

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[var(--border)] bg-[var(--bg)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[var(--accent)] opacity-10 blur-3xl"
      />

      <div className="container-page relative py-20 sm:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
              About
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
              A bit about me
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[var(--text-h)]">
              I'm Tushar, a full-stack developer and fresher currently interning.
              I love turning product ideas into real, working software — from the
              mobile screen the customer touches to the Postgres tables behind it.
            </p>

            <blockquote className="mt-8 border-l-4 border-[var(--accent)] pl-5 text-2xl font-bold leading-snug text-[var(--accent)] sm:text-3xl">
              Shipping production-grade apps end to end.
            </blockquote>

            <p className="mt-8 leading-relaxed text-[var(--text)]">
              Right now I'm focused on a full-stack kirana ordering platform
              (React Native + Node + PostgreSQL + Redis + Twilio) and pushing
              into clean architecture and distributed systems.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="lg:pt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text)]">
                Where I'm at now
              </p>
              <ol className="relative mt-6 space-y-8 border-l-2 border-[var(--accent-border)] pl-8">
                {journey.map((step) => (
                  <li key={step.label} className="relative">
                    <span className="absolute -left-[39px] top-0.5 size-4 rounded-full border-2 border-[var(--accent)] bg-[var(--bg)] shadow-[var(--shadow)]" />
                    <span className="block text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                      {step.label}
                    </span>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text)]">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
