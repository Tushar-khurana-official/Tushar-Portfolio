import { useEffect } from 'react'

const COLORS = ['var(--accent)', '#a78bfa', '#e9d8fd']
const PARTICLE_COUNT = 16

export default function ClickSparkle() {
  useEffect(() => {
    function spawn(e) {
      const target = e.target
      if (target.closest?.('input, textarea, select, [contenteditable="true"]')) {
        return
      }

      const burst = document.createElement('div')
      burst.className = 'click-sparkle pointer-events-none fixed inset-0 z-[80]'

      const frag = document.createDocumentFragment()
      for (let i = 0; i < PARTICLE_COUNT; i += 1) {
        const p = document.createElement('span')
        const angle = Math.random() * Math.PI * 2
        const distance = 36 + Math.random() * 64
        const size = 3 + Math.random() * 5

        p.className = 'click-sparkle-particle'
        p.style.left = `${e.clientX}px`
        p.style.top = `${e.clientY}px`
        p.style.width = `${size}px`
        p.style.height = `${size}px`
        p.style.background = COLORS[i % COLORS.length]
        p.style.setProperty('--dx', `${Math.cos(angle) * distance}px`)
        p.style.setProperty('--dy', `${Math.sin(angle) * distance}px`)
        p.style.animationDelay = `${(Math.random() * 0.06).toFixed(3)}s`
        frag.appendChild(p)
      }

      burst.appendChild(frag)
      document.body.appendChild(burst)
      window.setTimeout(() => burst.remove(), 900)
    }

    document.addEventListener('click', spawn)
    return () => document.removeEventListener('click', spawn)
  }, [])

  return null
}
