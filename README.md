# DCC Lab – Distributed & Cloud Computing Laboratory

A modern, responsive website for the **Distributed & Cloud Computing Laboratory (DCC Lab)** at Hanyang University, Seoul, South Korea. Directed by **Prof. Choonhwa Lee**.

**Live Demo:** [https://riz121.github.io/dcc_lab/](https://riz121.github.io/dcc_lab/)

---

## About

This project is a redesigned website for the DCC Lab built with React.js. It features a clean, modern UI with responsive design across all devices. The website showcases the lab's research, publications, team members, and projects.

### Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, lab stats, research highlights, latest news, and join CTA |
| **About** | Lab introduction, vision & mission, research overview, and timeline |
| **Professor** | Prof. Choonhwa Lee's profile, education, research interests, and career |
| **Members** | Postdoc, Ph.D., M.S. students, and alumni with tab navigation |
| **Research** | Six core research areas with detailed descriptions and tags |
| **Publications** | Filterable list of journal and conference papers grouped by year |
| **Projects** | Active and completed funded research projects |
| **News** | Lab announcements, publications, and conference presentations |
| **Contact** | Contact information, Google Maps embed, and message form |

---

## Tech Stack

- **React 19** – UI library
- **React Router v7** – Client-side routing (HashRouter for GitHub Pages)
- **React Icons** – Icon library (Font Awesome icons)
- **Vite 7** – Build tool and dev server
- **CSS3** – Custom responsive styles (no CSS framework)
- **gh-pages** – GitHub Pages deployment

---

## Prerequisites

Make sure you have the following installed on your machine:

| Software | Version | Download |
|----------|---------|----------|
| **Node.js** | v18 or higher | [https://nodejs.org](https://nodejs.org) |
| **npm** | v9 or higher (comes with Node.js) | Included with Node.js |
| **Git** | Any recent version | [https://git-scm.com](https://git-scm.com) |

To verify your installations, run:

```bash
node --version
npm --version
git --version
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/riz121/dcc_lab.git
cd dcc_lab
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

The site will be available at **http://localhost:5173/**

### 4. Build for Production

```bash
npm run build
```

The production files will be generated in the `dist/` folder.

### 5. Preview Production Build

```bash
npm run preview
```

---

## Deployment

The site is deployed to GitHub Pages. To deploy:

```bash
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch.

---

## Project Structure

```
dcc_lab/
├── public/                  # Static assets
├── src/
│   ├── components/          # Shared components
│   │   ├── Navbar.jsx       # Responsive navigation bar
│   │   ├── Navbar.css
│   │   ├── Footer.jsx       # Site footer
│   │   └── Footer.css
│   ├── data/
│   │   └── labData.js       # All lab data (professor, members, publications, etc.)
│   ├── pages/               # Page components
│   │   ├── Home.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Professor.jsx / .css
│   │   ├── Members.jsx / .css
│   │   ├── Research.jsx / .css
│   │   ├── Publications.jsx / .css
│   │   ├── Projects.jsx / .css
│   │   ├── News.jsx / .css
│   │   └── Contact.jsx / .css
│   ├── styles/
│   │   └── global.css       # Global styles, variables, utilities
│   ├── App.jsx              # Root component with routing
│   └── main.jsx             # Entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## Customization

All lab data is centralized in `src/data/labData.js`. To update content:

- **Professor info** – Edit the `professor` object
- **Research areas** – Edit the `researchAreas` array
- **Publications** – Edit the `publications` array
- **Members** – Edit the `members` object (postdoc, phd, ms, alumni)
- **Projects** – Edit the `projects` array
- **News** – Edit the `news` array
- **Lab info** – Edit the `labInfo` object (address, email, phone)

---

## License

This project is for academic and educational purposes.
