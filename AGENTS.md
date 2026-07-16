# W7 Worldwide — Premium TWS AirPods Landing Page

## Overview
Single-page marketing site for selling Premium TWS AirPods (MWK 20,000). No backend — brochure site with WhatsApp as checkout channel.

## Tech Stack
- React 19 + TypeScript 6 + Vite 8
- Tailwind CSS v4, Framer Motion, GSAP, Lenis (smooth scroll)
- react-hook-form + Zod, Swiper, Lucide React
- Deployed on Vercel (auto-deploys from `main` branch)

## Project Structure
- `src/pages/Home.tsx` — single page orchestrating all sections
- `src/components/` — Hero, Features, Pricing, FAQ, Reviews, Contact, Navbar, Footer, etc.
- `src/contexts/` — LenisContext (smooth scroll), ColorContext (product color selection)
- `src/data/` — centralized data (products, reviews, FAQ, etc.)

## Key Reminders
- WhatsApp button is fixed bottom-right; BackToTop arrow button is fixed bottom-left (moved from right side)
- No "Scroll" down indicator in Hero section anymore (removed)  
- No fixed "Buy Now - MWK 20,000" button in App.tsx anymore (removed)
- Hero performance: reduced blur intensities, will-change-transform on parallax layer, mousemove throttled with rAF
- Vercel auto-deploys on push to main

## Components Modified
- `src/components/Hero.tsx` — parallax scroll, product mouse-tilt effect, no scroll-down button
- `src/components/BackToTop.tsx` — positioned at bottom-left
- `src/App.tsx` — no fixed Buy Now button

## Repo
- GitHub: https://github.com/Xoski2/Wekhele7.git
