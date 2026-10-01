import { useState } from 'react'
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
  SiGit,
} from 'react-icons/si'
import { TbBrandReactNative, TbBrandTwilio, TbBrandVscode } from 'react-icons/tb'
import { SparklesIcon } from '@heroicons/react/24/outline'

const skillCategories = [
  {
    key: 'frontend',
    title: 'Frontend & Mobile',
    description: 'Responsive user interfaces & cross-platform mobile apps',
    skills: [
      { name: 'React Native', icon: TbBrandReactNative, level: 'Advanced', highlight: true },
      { name: 'React.js', icon: SiReact, level: 'Advanced', highlight: true },
      { name: 'Expo', icon: SiExpo, level: 'Advanced' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 'Advanced' },
      { name: 'Flutter', icon: SiFlutter, level: 'Intermediate' },
    ],
  },
  {
    key: 'backend',
    title: 'Backend & Data',
    description: 'REST APIs, relational databases & microservices',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, level: 'Advanced', highlight: true },
      { name: 'Express.js', icon: SiExpress, level: 'Advanced', highlight: true },
      { name: 'Prisma ORM', icon: SiPrisma, level: 'Advanced' },
      { name: 'PostgreSQL', icon: SiPostgresql, level: 'Advanced', highlight: true },
      { name: 'Redis', icon: SiRedis, level: 'Intermediate' },
      { name: 'Twilio Auth', icon: TbBrandTwilio, level: 'Intermediate' },
    ],
  },
  {
    key: 'tools',
    title: 'Tools & Workflows',
    description: 'Developer utilities, version control & CLI',
    skills: [
      { name: 'Git', icon: SiGit, level: 'Proficient' },
      { name: 'GitHub', icon: SiGithub, level: 'Proficient' },
      { name: 'VS Code', icon: TbBrandVscode, level: 'Proficient' },
      { name: 'Postman', icon: SiPostman, level: 'Proficient' },
      { name: 'Python', icon: SiPython, level: 'Intermediate' },
      { name: 'Linux CLI', icon: SiLinux, level: 'Intermediate' },
    ],
  },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all')

  return (
    <section id="skills" className="relative border-t border-[var(--border)] bg-[var(--bg)] py-20 sm:py-28">
      <div className="container-page relative">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent)]">
            Tech Stack
          </p>
          <h2 className="mt-2 text-3xl font-bold text-[var(--text-h)] sm:text-4xl">
            Technologies I Master & Ship With
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text)]">
            A comprehensive overview of my technical toolbelt across mobile, frontend, backend, databases, and DevOps workflows.
          </p>
        </Reveal>

        {/* Category Tabs */}
        <Reveal delay={100} className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] p-1.5 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-[var(--accent)] text-white shadow-md'
                  : 'text-[var(--text)] hover:text-[var(--text-h)]'
              }`}
            >
              All Technologies
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveTab(cat.key)}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all ${
                  activeTab === cat.key
                    ? 'bg-[var(--accent)] text-white shadow-md'
                    : 'text-[var(--text)] hover:text-[var(--text-h)]'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Skills Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories
            .filter((cat) => activeTab === 'all' || activeTab === cat.key)
            .map((cat, idx) => (
              <Reveal key={cat.key} delay={idx * 100} className="h-full">
                <div className="glass-card relative flex h-full flex-col justify-between rounded-3xl p-7">
                  <div>
                    <div className="flex items-center justify-between border-b border-[var(--border)] pb-4">
                      <div>
                        <h3 className="text-lg font-bold text-[var(--text-h)] font-heading">
                          {cat.title}
                        </h3>
                        <p className="mt-0.5 text-xs text-[var(--text)]">
                          {cat.description}
                        </p>
                      </div>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {cat.skills.map((skill) => (
                        <li
                          key={skill.name}
                          className={`skill-tag relative group ${
                            skill.highlight
                              ? 'border-violet-500/40 bg-violet-950/20 text-violet-300'
                              : ''
                          }`}
                        >
                          <skill.icon className="size-4 shrink-0 text-[var(--accent-light)]" />
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <SparklesIcon className="size-3 text-amber-400" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 border-t border-[var(--border)] pt-4 text-[11px] font-mono text-[var(--text)] opacity-60 flex items-center justify-between">
                    <span>{cat.skills.length} core tools</span>
                    <span>Production verified</span>
                  </div>
                </div>
              </Reveal>
            ))}
        </div>
      </div>
    </section>
  )
}