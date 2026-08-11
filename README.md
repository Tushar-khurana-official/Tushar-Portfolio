# Tushar — Portfolio

A personal developer portfolio site for Tushar, a full-stack developer.

## Built With

- **React** — UI
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling (colors driven by CSS custom properties)
- **react-icons** — icon library (brand icons, theme toggle, WhatsApp)
- **@headlessui/react** — accessible mobile menu dialog
- **@heroicons/react** — hero/outline icons

## Features

- **Floating pill navbar** — centered floating nav with a light/dark theme toggle (persisted via `localStorage`, fallback to `prefers-color-scheme`)
- **Hero** — full profile photo with cursor tilt effect, typewriter role cycling, speech bubble, and soft accent glow
- **Floating WhatsApp button** — fixed circular photo button that opens WhatsApp in a new tab with a pre-filled message
- **Site-wide click sparkle** — lightweight confetti-style burst on any click (no animation library)
- **Sections** — Hero, About, Skills, Projects, Contact
- **About** — bio with an accent pull-quote and a connected-dot journey timeline
- **Skills** — editorial panels with brand-icon skill tags (hover glow)
- **Projects** — featured DesiDukaan card plus secondary project cards
- **Contact** — single-panel form (mailto submit, no backend) with availability note
- Light/dark mode with manual toggle; fully responsive, mobile-first layout with scroll-reveal animations

## Getting Started

```bash
git clone https://github.com/Tushar-khurana-official/tushar-portfolio.git
cd tushar-portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
.
├── public/              # Static assets (profile.png, favicon.svg, resume.pdf)
├── src/
│   ├── components/      # Section components (Hero, About, Skills, Projects, Contact, Navbar, Footer, FloatingWhatsApp, ClickSparkle, etc.)
│   ├── App.jsx          # Page composition
│   ├── index.css        # Tailwind + CSS custom properties (colors, fonts, light/dark)
│   └── main.jsx         # React entry point
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Live Demo

<!-- TODO: add your live demo URL here, e.g. https://tushar.dev -->

Coming soon.

## Preview / Screenshot

<!-- TODO: add a screenshot, e.g. ![screenshot](./preview.png) -->

Coming soon.
