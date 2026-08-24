import { FaWhatsapp } from 'react-icons/fa'

const WHATSAPP_NUMBER = '9718833891'
const WHATSAPP_MESSAGE =
  'Hi Tushar! I came across your portfolio and wanted to connect.'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="whatsapp-pulse fixed bottom-6 right-6 z-[60] flex size-14 items-center justify-center rounded-full sm:bottom-7 sm:right-7"
    >
      <img
        src="/profile.png"
        alt=""
        className="size-full rounded-full border-2 border-[var(--accent-border)] object-cover"
      />
      <span className="absolute -bottom-0.5 -right-0.5 flex size-6 items-center justify-center rounded-full bg-[#25D366] text-white shadow">
        <FaWhatsapp className="size-3.5" />
      </span>
    </a>
  )
}
