# Tushar — Portfolio

A personal developer portfolio site for Tushar, a full-stack developer.

## Built With

- **React** — UI
- **Vite** — build tool & dev server
- **Tailwind CSS** — styling (colors driven by CSS custom properties)

## Features

- **Hero** — typewriter role cycling, animated accent background, code-editor mockup card
- **About** — bio with an accent pull-quote and a connected-dot journey timeline
- **Skills** — editorial panels with brand-icon skill tags (hover glow)
- **Projects** — featured DesiDukaan card plus secondary project cards
- **Contact** — single-panel form (mailto submit, no backend) with availability note
- Dark/light mode via `prefers-color-scheme`
- Fully responsive, mobile-first layout with scroll-reveal animations

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
├── public/              # Static assets (favicon, resume.pdf)
├── src/
│   ├── components/      # Section components (Hero, About, Skills, Projects, Contact, Navbar, Footer, etc.)
│   ├── App.jsx          # Page composition
│   ├── index.css        # Tailwind + CSS custom properties (colors, fonts, dark/light)
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
