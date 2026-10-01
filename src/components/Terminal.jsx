import { useState, useRef, useEffect } from 'react'
import { CommandLineIcon, XMarkIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const INITIAL_HISTORY = [
  { type: 'system', text: 'Welcome to Tushar\'s Interactive Terminal [v2.4.0]' },
  { type: 'system', text: 'Type "help" or click quick commands below to explore.' },
]

const COMMAND_CHIPS = ['help', 'about', 'skills', 'projects', 'contact', 'sudo hire']

export default function Terminal({ isOpen, onClose }) {
  const [input, setInput] = useState('')
  const [history, setHistory] = useState(INITIAL_HISTORY)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase()
    if (!trimmed) return

    const newLogs = [...history, { type: 'user', text: `$ ${trimmed}` }]

    switch (trimmed) {
      case 'help':
        newLogs.push({
          type: 'output',
          text: `Available Commands:
  • about     : Brief bio and role summary
  • skills    : Core tech stack & frameworks
  • projects  : Major production apps shipped
  • contact   : Email, GitHub & LinkedIn links
  • sudo hire : Direct message prompt
  • clear     : Clear terminal screen`,
        })
        break
      case 'about':
        newLogs.push({
          type: 'output',
          text: 'Tushar Khurana — Full-Stack Developer & React Native Engineer.\nCurrently building DesiDukaan (Kirana ordering app) using React Native, Node.js, Express, Prisma, PostgreSQL & Redis.',
        })
        break
      case 'skills':
        newLogs.push({
          type: 'output',
          text: 'Frontend : React Native, Expo, React.js, Tailwind CSS, Flutter\nBackend  : Node.js, Express, Prisma, PostgreSQL, Redis, Twilio\nTools    : Git, GitHub, VS Code, Postman, Linux',
        })
        break
      case 'projects':
        newLogs.push({
          type: 'output',
          text: '1. DesiDukaan - Full-Stack Kirana Ordering Mobile + Web Suite\n2. Emergency Locator - Realtime Location Services Web App\n3. Khurana.Studio - Personal Studio & Portfolio App',
        })
        break
      case 'contact':
        newLogs.push({
          type: 'output',
          text: 'Email    : tusharkh156@gmail.com\nGitHub   : github.com/Tushar-khurana-official\nLinkedIn : linkedin.com/in/tushar-khurana-/',
        })
        break
      case 'sudo hire':
        newLogs.push({
          type: 'success',
          text: '🚀 Access Granted! Tushar is currently open for internships and full-time software engineering roles. Email him at tusharkh156@gmail.com!',
        })
        break
      case 'clear':
        setHistory([])
        setInput('')
        return
      default:
        newLogs.push({
          type: 'error',
          text: `Command not found: "${trimmed}". Type "help" for a list of available commands.`,
        })
        break
    }

    setHistory(newLogs)
    setInput('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleCommand(input)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-violet-500/30 bg-slate-950 text-slate-100 shadow-2xl shadow-violet-950/50">
        {/* Terminal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-red-500/80 inline-block" />
            <span className="size-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="size-3 rounded-full bg-green-500/80 inline-block" />
            <span className="ml-2 font-mono text-xs font-semibold text-slate-400 flex items-center gap-1.5">
              <CommandLineIcon className="size-4 text-violet-400" />
              tushar@khurana-studio:~
            </span>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
            aria-label="Close terminal"
          >
            <XMarkIcon className="size-5" />
          </button>
        </div>

        {/* Terminal Body */}
        <div className="h-80 overflow-y-auto p-4 font-mono text-xs sm:text-sm leading-relaxed space-y-2 bg-slate-950/90">
          {history.map((item, idx) => (
            <div key={idx} className="whitespace-pre-wrap">
              {item.type === 'user' && (
                <span className="text-violet-400 font-semibold">{item.text}</span>
              )}
              {item.type === 'system' && (
                <span className="text-slate-400">{item.text}</span>
              )}
              {item.type === 'output' && (
                <span className="text-slate-200">{item.text}</span>
              )}
              {item.type === 'success' && (
                <span className="text-emerald-400 font-medium">{item.text}</span>
              )}
              {item.type === 'error' && (
                <span className="text-rose-400 font-medium">{item.text}</span>
              )}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Chip Suggestions */}
        <div className="flex flex-wrap items-center gap-1.5 border-t border-slate-800 bg-slate-900/50 p-2.5 px-4 text-xs">
          <span className="text-slate-500 font-mono mr-1">Quick:</span>
          {COMMAND_CHIPS.map((chip) => (
            <button
              key={chip}
              onClick={() => handleCommand(chip)}
              className="rounded-md border border-violet-500/30 bg-violet-950/40 px-2 py-0.5 font-mono text-violet-300 hover:bg-violet-600 hover:text-white transition-colors"
            >
              {chip}
            </button>
          ))}
        </div>

        {/* Terminal Input Form */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-800 bg-slate-900 px-4 py-3">
          <ChevronRightIcon className="size-4 text-violet-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type command here... (try 'help' or 'sudo hire')"
            className="w-full bg-transparent font-mono text-xs sm:text-sm text-slate-100 placeholder-slate-500 outline-none"
          />
        </form>
      </div>
    </div>
  )
}
