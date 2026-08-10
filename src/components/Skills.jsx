import Reveal from './Reveal'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiRedis,
  SiTailwindcss,
  SiFlutter,
  SiExpo,
  SiGithub,
  SiPostman,
  SiPython,
  SiLinux,
} from 'react-icons/si'
import { TbBrandReactNative, TbBrandTwilio, TbBrandVscode } from 'react-icons/tb'

const groups = {
  frontend: [
    { name: 'React', icon: SiReact },
    { name: 'React Native', icon: TbBrandReactNative },
    { name: 'Expo', icon: SiExpo },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Flutter', icon: SiFlutter },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express', icon: SiExpress },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Redis', icon: SiRedis },
    { name: 'Twilio', icon: TbBrandTwilio },
  ],
  tools: [
    { name: 'Git & GitHub', icon: SiGithub },
    { name: 'VS Code', icon: TbBrandVscode },
    { name: 'Postman', icon: SiPostman },
    { name: 'Python CLI', icon: SiPython },
    { name: 'Linux', icon: SiLinux },
  ],
}

const panels = [
  {
    key: 'frontend',
    title: 'Frontend',
    blurb: 'Interfaces people actually enjoy using',
  },
  {
    key: 'backend',
    title: 'Backend',
    blurb: 'APIs, data and the stuff that scales',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--border)] bg-[var(--code-bg)]">
      <div className="container-page py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Skills
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
            What I work with
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {panels.map((panel, i) => (
            <Reveal key={panel.key} delay={i * 120} className="h-full">
              <div
                className={
                  panel.key === 'backend'
                    ? 'relative h-full overflow-hidden rounded-[2rem] border border-[var(--accent-border)] bg-[var(--bg)] p-8 sm:p-10'
                    : 'relative h-full overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--bg)] p-8 sm:p-10'
                }
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1.5 bg-[var(--accent)]"
                />
                <h3 className="text-xl font-bold text-[var(--text-h)]">
                  {panel.title}
                </h3>
                <p className="mt-1 text-sm text-[var(--text)]">{panel.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2.5">
                  {groups[panel.key].map((s) => (
                    <li key={s.name} className="skill-tag">
                      <s.icon className="size-4" />
                      {s.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={180}>
          <div className="mt-6 rounded-[2rem] border border-dashed border-[var(--border)] bg-[color:var(--bg)]/70 p-6 sm:p-8">
            <h3 className="text-center text-xs font-bold uppercase tracking-widest text-[var(--text)]">
              Tools
            </h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
              {groups.tools.map((s) => (
                <li key={s.name} className="skill-tag">
                  <s.icon className="size-4" />
                  {s.name}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
