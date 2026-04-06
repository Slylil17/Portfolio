# Salil Raj Gupta Portfolio (Next.js 16/Tailwind CSS 4)

## Project Overview

This is a modern, high-performance portfolio for **Salil Raj Gupta**, a Data Analyst pivoting from a background in Chartered Accountancy (CA). The project showcases a "Pivot Story," highlighting the bridge between complex financial logic and data analytics through a narrative-driven layout and interactive data visualizations.

### Core Technologies
- **Framework:** Next.js 16 (App Router) with React 19.
- **Styling:** Tailwind CSS 4 with a "Glassmorphism" design system (backdrop blurs, subtle borders).
- **Animations:** Framer Motion for staggered text entrances, scroll-triggered reveals, and 3D-like depth effects.
- **Scrolling:** Lenis for smooth, inertial scrolling.
- **Icons:** Lucide React for consistent, high-quality iconography.
- **Typography:** Geist Sans and Geist Mono font families.

### Architecture
- **App Router (`src/app`):** Dynamic routing for project detail pages (`/projects/[id]`) and a centralized `RootLayout`.
- **Modular Components (`src/components`):** 
  - `home/`: Section-specific components (Hero, About, Skills, Projects, Education, Contact).
  - `layout/`: Global UI elements (Navbar, Footer, SmoothScroll wrapper).
  - `ui/`: Reusable primitive components (e.g., `Section.tsx`).
- **Legacy Storage (`/legacy`):** Original HTML/CSS projects (Retail Analysis, SpaceX Analysis) are preserved for historical context.
- **Utility System:** A robust `cn` utility in `src/lib/utils.ts` (using `clsx` and `tailwind-merge`) handles conditional class management.

## Building and Running

Ensure you have Node.js and npm installed before proceeding.

### Development
```bash
npm run dev
```
Starts the development server on [http://localhost:3000](http://localhost:3000).

### Production Build
```bash
npm run build
```
Optimizes the application for production.

### Starting Production Server
```bash
npm run start
```
Runs the built application in a production environment.

### Code Quality
```bash
npm run lint
```
Executes ESLint to identify and fix code style and logic issues.

## Development Conventions

- **Visual Style:** Adhere to the established "Glassmorphism" aesthetic. Use high-frame-rate animations via Framer Motion for interactive elements.
- **Typography:** Use Geist Sans for body/headings and Geist Mono for code/technical data points.
- **Performance:** Optimize images using `next/image` and ensure smooth animations by managing layout shifts properly.
- **Data Narratives:** Prioritize clarity in the "Pivot Story." Use stats and animated counters to demonstrate the transition from finance to data.
- **Utilities:** Always use the `cn()` utility for merging Tailwind classes to avoid conflicts.
- **Icons:** Ensure Lucide icons are used consistently across sections for visual coherence.
