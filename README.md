# Mukula Technologies — Demo Website

A modern, fully responsive marketing website for **Mukula Technologies**, a fabless semiconductor and smart card IP company based in Hyderabad, India.

Built with **React + Vite**, featuring immersive 3D visuals, dual light/dark theming, rich Framer Motion animations, and a futuristic design system.

---

## 🚀 Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev) | UI framework |
| [Vite 8](https://vitejs.dev) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com) | Utility-first CSS |
| [Framer Motion](https://www.framer.com/motion/) | Animations & transitions |
| [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) | 3D rendering (Three.js for React) |
| [@react-three/drei](https://github.com/pmndrs/drei) | Three.js helpers (GLTF, Stage, Float…) |
| [GSAP](https://gsap.com) | Hero entrance animations |
| [Zustand](https://zustand-demo.pmnd.rs) | Global theme state |
| [React Router v7](https://reactrouter.com) | Client-side routing |
| [Lucide React](https://lucide.dev) | Icon library |

---

## 🎨 Design System

### Fonts (Google Fonts)
- **Syne** — Bold geometric display font for headings and logo
- **Inter** — Clean modern sans-serif for body text and UI
- **Space Mono** — Techy monospace for labels, specs, and status badges

### Color Palette

| Token | Light Theme | Dark Theme |
|---|---|---|
| Background | `#f8faff` | `#080d18` |
| Surface | `#ffffff` | `#0f172a` |
| Text | `#0d1b2a` | `#e2e8f0` |
| Accent | `#007f7f` (Teal) | `#00D4FF` (Electric Blue) |
| Highlight | `#0d9488` (Dark Teal) | `#00FF88` (Neon Green) |

---

## 📦 Project Structure

```
src/
├── components/
│   ├── canvas/             # 3D canvas components (React Three Fiber)
│   │   ├── SiliconWaferCanvas.jsx   # GLTF chipset model (Home page)
│   │   ├── FaizPhoneCanvas.jsx      # GLTF phone model (Contact page)
│   │   ├── FloatingChipCanvas.jsx   # Procedural chip (About page)
│   │   ├── SmartCardCanvas.jsx      # Procedural smart card (Products page)
│   │   └── ParticleFieldCanvas.jsx  # Particle system
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── ThemeToggle.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Products.jsx
│   └── Contact.jsx
├── store/
│   └── themeStore.js       # Zustand dark/light theme store
└── index.css               # Design system tokens & utilities
```

---

## 🖥️ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## 🌐 Pages

| Route | Page | 3D Element |
|---|---|---|
| `/` | Home | Silicon Wafer Chipset (GLTF) |
| `/about` | About Us | Floating Chip (procedural) |
| `/products` | Products & IP | Smart Card (procedural) |
| `/contact` | Contact | SB-555P Phone (GLTF) |

---

## 📐 3D Model Credits

All GLTF 3D models were sourced from **[Sketchfab](https://sketchfab.com)** and are used under the **Creative Commons CC-BY-4.0** license. Credits are required per license terms.

---

### 🔲 CHIPSET 007
Used on: **Home Page** (`/`)

> This work is based on **["CHIPSET 007"](https://sketchfab.com/3d-models/chipset-007-53e69121ed7747e58b9222b82dbffb8a)** by **[RadioactiveAG](https://sketchfab.com/RadioactiveAG)** on Sketchfab, licensed under **[CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)**.

---

### 📱 SB-555P Faiz Phone
Used on: **Contact Page** (`/contact`)

> This work is based on **["SB-555P Faiz Phone"](https://sketchfab.com/3d-models/sb-555p-faiz-phone-aaaeaaff8f9b40569f0715471f30f750)** by **[Ahbangkun](https://sketchfab.com/Ahbangkun)** on Sketchfab, licensed under **[CC-BY-4.0](http://creativecommons.org/licenses/by/4.0/)**.

---

## 📄 License

This project is a demonstration website for Mukula Technologies Pvt. Ltd. The source code is proprietary. The 3D models are licensed individually as described in the credits above and in their respective `license.txt` files included with the model directories.
