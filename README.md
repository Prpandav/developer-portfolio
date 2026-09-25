# Prasiddh Pandav — Developer Portfolio

A professional developer portfolio engineered for a **Backend-focused Full-Stack Developer** and final-year Information Technology student at GCET.

Built with a focus on technical clarity, visual restraint, responsive behavior, accessibility, and zero fabricated claims.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4 (native `@tailwindcss/vite` engine) + CSS Design Tokens
- **Routing**: React Router v7 (`react-router-dom`)
- **Animation**: Motion (`motion/react`) with `prefers-reduced-motion` compliance
- **Icons**: Lucide React + custom accessible SVGs
- **Theming**: Light / Dark mode with anti-flash script and `localStorage` persistence

---

## 📐 Architecture & Project Structure

```text
src/
├── assets/             # Static assets and icons
├── components/
│   ├── common/         # Common utilities (ScrollToTop)
│   ├── layout/         # Navigation bar (sticky + mobile drawer) and Footer
│   ├── projects/       # ProjectCard, ProjectHero, ArchitectureDiagram, CaseStudy, TechStack
│   ├── sections/       # Hero, SelectedWork, Engineering, About, MoreWork, ContactCTA
│   └── ui/             # Reusable primitives (Button, Badge, SectionHeading, Icons)
├── context/            # ThemeContext (Light / Dark mode provider)
├── data/
│   ├── personal.js     # Centralized personal details, bio, and engineering competencies
│   └── projects.js     # Verified project repository and upcoming pipeline schema
├── pages/
│   ├── Home.jsx        # Primary landing page
│   ├── Projects.jsx    # Projects overview page
│   ├── ProjectDetail.jsx # Deep-dive technical case study page
│   └── About.jsx       # Academic & technical background page
├── styles/
│   └── globals.css     # CSS custom properties, tokens, and Tailwind v4 directives
├── App.jsx             # Route definitions and application layout
└── main.jsx            # React root with providers
```

---

## 🚀 Featured Project: Mov2night

- **Category**: Full-Stack / Real-Time Systems
- **Repository**: [Watch-Party-app](https://github.com/Prpandav/Watch-Party-app)
- **Live Demo**: [https://mov2night.vercel.app/](https://mov2night.vercel.app/)
- **Core Stack**: React 19, Node.js, Express 5, Mediasoup (WebRTC SFU), Socket.IO, MongoDB, Mongoose, JWT.
- **Case Study Route**: `/projects/mov2night`
- **Key Features Verified**:
  - Authoritative host playback control for YouTube videos
  - Local browser file streaming directly through Mediasoup SFU (no server storage needed)
  - Screen sharing broadcast via WebRTC tracks
  - Integrated real-time room chat (restoring history on join) and voice communication
  - Late-join playback state reconciliation and drift correction

---

## 🔧 Centralized Data Layer

All developer details and project records are centralized:
- **Personal info**: Edit [src/data/personal.js](file:///d:/React/Portfolio/src/data/personal.js) to update name, contact links, resume URL, education, or skill matrices.
- **Projects**: Edit [src/data/projects.js](file:///d:/React/Portfolio/src/data/projects.js) to append new projects conforming to the project schema.

---

## 💻 Development & Build Scripts

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```
