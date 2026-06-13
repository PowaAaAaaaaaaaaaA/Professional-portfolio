# Myke's Portfolio

A modern, interactive, and responsive portfolio website built with **Next.js 16** and **React 19**. This project showcases my skills, experience, and the projects I've built as a Full-Stack Developer.

![Portfolio Preview](/public/Imgs/Portfolio/Portfolio.png)

## 🚀 Features

- **Dynamic Landing Page:** Features a playful "ColorfulText" component with interactive hover animations.
- **Detailed Resume:** A comprehensive look at my professional journey, including:
  - **Experience & Education:** Detailed timelines of my career and academic background.
  - **Tech Stack:** A visual representation of the technologies I master.
  - **Certificates:** Showcasing my professional achievements.
  - **Beyond the Screen:** A glimpse into my interests and life outside of coding.
- **Project Showcase:** Interactive project cards with carousels, detailed scopes, and technology tags.
- **Responsive Design:** Optimized for a seamless experience across all screen sizes using Tailwind CSS.
- **Modern UI/UX:** Built with DaisyUI and Tailwind CSS 4 for a clean, accessible, and engaging interface.

## 🛠️ Tech Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Library:** [React 19](https://reactjs.org/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/), [DaisyUI](https://daisyui.com/)
- **Icons:** [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/)
- **Components:** [Base UI](https://base-ui.com/), [Shadcn UI](https://ui.shadcn.com/) (select components)
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority`

## 📁 Project Structure

```text
├── app/                  # Next.js App Router (Pages & Layouts)
│   ├── Resume/           # Portfolio/Resume page
│   │   └── ResumeComps/  # Modular components for the Resume page
│   ├── globals.css       # Global styles & Tailwind directives
│   └── page.tsx          # Landing page
├── Components/           # Reusable UI components (Card, CodeSnippet, etc.)
├── lib/                  # Utility functions
├── public/               # Static assets (Images, Fonts)
│   ├── Fonts/            # Custom typography
│   └── Imgs/             # Project and profile images
└── next.config.ts        # Next.js configuration
```

## 🏃 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

---

Built with 🖤 by [Mike Brian Mayo (Mykeee)](https://github.com/yourusername)
