<div align="center">

# 🌍 EUROPA

### *Your Indian Guide to Discovering Europe*

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Private-red?style=for-the-badge)](./package.json)

<br/>

*From Mumbai or Delhi to Paris and Rome — everything an Indian traveler needs to navigate, eat, dress, and fall in love with Europe.*

<br/>

![EUROPA Banner](https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80)

</div>

---

## ✨ What is EUROPA?

**EUROPA** is a beautifully designed, single-page travel guide web application built specifically for **Indian travelers** planning a trip to Europe. It bridges the cultural and practical gap between India and Europe — covering everything from Schengen visas and food comparisons to what to wear and how to behave.

Think of it as your personal travel concierge that speaks your language and understands your needs.

---

## 🗺️ Destinations Covered

| # | City | Country | Tagline | Best Time |
|---|------|---------|---------|-----------|
| 1 | 🗼 **Paris** | France | The City of Light | Apr–Jun, Sep–Oct |
| 2 | 🏛️ **Rome** | Italy | The Eternal City | Apr–May, Sep–Oct |
| 3 | 💃 **Barcelona** | Spain | Art, Sun & Passion | May–Jun, Sep–Oct |
| 4 | 🏺 **Athens & Santorini** | Greece | Birthplace of Civilization | Apr–May, Sep–Oct |
| 5 | 🌷 **Amsterdam** | Netherlands | Canals, Tulips & Freedom | Apr–May, Sep |
| 6 | 🏰 **Prague** | Czech Republic | City of a Hundred Spires | May, Sep, Dec |

---

## 🎯 Features

### 🌐 Multi-Section Navigation
A fixed top navigation bar provides instant access to five key sections — **Home**, **Destinations**, **Essentials**, **Pack Smart**, and **Culture** — all without any page reload.

### 📍 Destination Deep-Dives
Each destination opens a richly detailed full-screen view with four tabbed sections:

| Tab | What You Get |
|-----|-------------|
| 🗺 **What to Visit** | Top 6 must-visit spots with practical insider tips (skip-the-line advice, best times, combo tickets) |
| 🍽 **What to Eat** | 6 signature local dishes with exact restaurant recommendations and *Indian food comparisons* (e.g., "Gyros = Kathi Roll!") |
| 👗 **What to Wear** | Season-by-season clothing advice tailored for Indian skin and weather expectations |
| 💡 **Insider Tips** | 6 local secrets that most tourists miss — from transport hacks to cultural etiquette |

Each destination also shows:
- 🇮🇳 **Indian Context Banner** — Indian community presence, vegetarian options, familiar food spots
- 📅 Best travel months
- 💶 Daily budget estimate
- 🗣 Local language

### 🛫 Europe Essentials
A comprehensive guide organized into four categories:
- **Before You Fly** — Schengen visa, travel insurance, eSIM, currency prep
- **Money & Payments** — Cards, ATMs, tipping culture, budget ranges
- **Getting Around** — Eurail passes, budget airlines, metro systems
- **Indian Traveler Tips** — Vegetarian travel, spice levels, weather comparison, safety

### 🎒 Smart Packing List
Five packing categories tailored for Indian travelers:
- 📋 Documents
- 👕 Clothing Essentials
- 📱 Tech & Gadgets
- 🇮🇳 Indian Must-Haves (masala packets, Pudin Hara, thermals!)
- 💊 Health & Safety

### 🤝 Cultural Guide
Eight essential cultural norms that help Indian travelers blend in and show respect:
- Greet first, then ask
- Volume check in public spaces
- Walking and escalator etiquette
- Church dress codes
- Photography consent
- Personal space norms

---

## 🛠️ Tech Stack

| Technology | Role |
|-----------|------|
| **React 18** | Component-based UI framework |
| **Vite 4** | Lightning-fast development & build tool |
| **CSS Variables** | Consistent theming (gold, cream, dark palette) |
| **Google Fonts** | Playfair Display (headings) + Inter (body) |
| **Unsplash** | High-quality hero photography |
| **useState Hook** | Navigation state, active destination, active tabs |

### Design System
- **Color Palette:** Rich gold (`#c9a84c`), warm cream (`#faf8f2`), deep dark (`#0f0f0f`)
- **Typography:** Playfair Display for elegant display text, Inter for readable body copy
- **Animations:** Smooth cubic-bezier transitions (`0.3s`) throughout
- **Layout:** CSS Grid and Flexbox for responsive card layouts
- **Effects:** Glassmorphism navbar with `backdrop-filter: blur(20px)`

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v16 or higher
- npm v7 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/ishita-git16/europa-travel.git

# 2. Navigate into the project directory
cd europa-travel

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173** 🎉

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview the production build locally |

---

## 📁 Project Structure

```
europa-travel/
├── index.html              # Root HTML — loads Google Fonts & sets page title
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite configuration with React plugin
└── src/
    ├── main.jsx            # React entry point — mounts <App /> to #root
    ├── index.css           # Global styles & CSS custom properties (design tokens)
    ├── App.jsx             # Main application component (all data + UI)
    └── App.css             # Component-specific styles
```

> **Note:** The app is intentionally structured as a single-component application (`App.jsx`) with all data defined as constants at the top — keeping the codebase simple, self-contained, and easy to extend.

---

## 🎨 Screenshots

### Home — Hero Section
The landing page features a cinematic full-height hero with animated gradient background, key statistics, and quick-access destination cards.

### Destination Detail — Paris
Full-screen destination view with a Unsplash hero photo, Indian context banner, and four content tabs covering sights, food, fashion, and tips.

### Europe Essentials
Card-based layout organizing all pre-trip and on-trip guidance into scannable, color-coded categories.

### Packing List
Emoji-led checklist specifically curated for Indian travelers, including the essentials you won't find on any generic travel blog.

---

## 🧭 How to Use the App

1. **Start at Home** — Read the intro and click *Explore Destinations* or any destination card
2. **Pick a Destination** — Browse all 6 cities and click one to open its full guide
3. **Switch Tabs** — Use the four tabs (Visit / Eat / Wear / Tips) to explore different aspects
4. **Check Essentials** — Visit the Essentials section before your trip for visa & logistics help
5. **Pack Smart** — Use the packing list to make sure you haven't forgotten Indian must-haves
6. **Learn the Culture** — Read the Culture section to avoid common faux pas

---

## 🤝 Contributing

Contributions are welcome! Here are some ideas:
- 🏙️ Add more European destinations (Lisbon, Vienna, Dubrovnik...)
- 🌙 Add a dark mode toggle
- 🔍 Add search and filter functionality
- 📱 Improve mobile responsiveness
- 🌐 Add multilingual support (Hindi, Tamil, etc.)
- 🗓️ Add a trip planner / itinerary builder

To contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/add-lisbon`)
3. Commit your changes (`git commit -m 'Add Lisbon destination'`)
4. Push to the branch (`git push origin feature/add-lisbon`)
5. Open a Pull Request

---

## 👩‍💻 Author

Built with ❤️ by **Ishita** — for every Indian traveler who dreams of Europe but wonders where to start.

---

<div align="center">

*"Not all those who wander are lost — especially with the right guide."*

⭐ **Star this repo** if you found it useful!

</div>
