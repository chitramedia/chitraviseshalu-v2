# Project Status — Chitra Viseshalu V2

This document tracks the engineering milestones, current architecture, and immediate roadmap for the Chitra Viseshalu V2 platform.

---

## 1. Project Overview

*   **Repository Name:** `chitraviseshalu-v2`
*   **Mission:** Build the world's most beloved home for cinema culture—a social cinema platform combining features of Reddit, X (Twitter), Letterboxd, and Discord.
*   **Cultural Anchor:** Telugu cinema fan-base (Tollywood) initially, expanding globally.
*   **Key Design Ethos:** Dark-first, minimal, premium, responsive.

---

## 2. Current Stack & Configuration

| Technology | Version | Purpose / Detail |
| :--- | :--- | :--- |
| **Next.js** | `16.2.10` | App Router (Turbopack enabled for dev mode) |
| **React** | `19.2.4` | Server Components by default |
| **Tailwind CSS** | `^4.0.0` | Custom theme configured in `src/app/globals.css` |
| **TypeScript** | `^5.0.0` | Strict type definitions |
| **ESLint** | `^9.0.0` | Code quality verification |
| **Prettier** | `^3.0.0` | Standardized syntax rules (`.prettierrc`) |
| **Icons** | `lucide-react` | Tree-shaken icons (`optimizePackageImports`) |

---

## 3. Milestones Progress

### ✅ Milestone 1: Base Setup & Charter
*   Scaffolded Next.js App Router project using TypeScript.
*   Wrote core guidelines docs:
    *   `00_PRINCIPLES.md` (Design/Product/Engineering principles)
    *   `01_VISION.md` (Product market fit and goals)
*   Configured Prettier formatting parameters and Git hooks.
*   Created empty directories for standard layout architecture.
*   Pushed initial branch tracking `main` to `git@github.com:chitramedia/chitraviseshalu-v2.git`.

### ✅ Milestone M2: Social Cinema Shell UI
*   Created responsive layout with:
    *   **Desktop:** Left Sidebar Navigation, Center Feed, Right Sidebar widgets.
    *   **Mobile:** Top navigation, bottom sticky navigation, floating create-post overlay action.
*   Configured dark-first design variables and theme support in `src/app/globals.css` (Tailwind v4 custom attributes).
*   Built theme controller (`ThemeProvider.tsx`) avoiding layout flash.
*   Added core mock states for the feed, allowing adding posts to list client-side.
*   Added active states (likes, bookmarks) for feed item components.

---

## 4. Directory Structure

```
cv2/
├── docs/
│   ├── 00_PRINCIPLES.md
│   ├── 01_VISION.md
│   └── PROJECT_STATUS.md           <-- This document
├── src/
│   ├── app/
│   │   ├── globals.css             # Theme colors & CSS variables
│   │   ├── layout.tsx              # Root HTML wrapper with ThemeProvider
│   │   └── page.tsx                # Social Cinema Shell orchestration
│   ├── components/
│   │   ├── ThemeProvider.tsx       # Dark/light mode switcher
│   │   ├── layout/
│   │   │   ├── LeftSidebar.tsx     # Desktop main navigation & communities list
│   │   │   ├── RightSidebar.tsx    # Desktop search, trending movies, top reviewers
│   │   │   ├── Navbar.tsx          # Mobile header bar
│   │   │   └── MobileNav.tsx       # Mobile bottom bar & post trigger
│   │   ├── features/
│   │   │   └── feed/
│   │   │       ├── CreatePostCard.tsx # Post compose & movie rating mockup
│   │   │       ├── FeedCard.tsx       # Standard review post component
│   │   │       └── Feed.tsx           # Feed container & tab management
│   │   └── ui/
│   ├── lib/
│   │   └── utils.ts                # cn() class merge helper
```

---

## 5. Next Steps & Feature Backlog

1.  **Refine Community Hub Page Routing:** Create dynamic segments `/c/[communitySlug]` to view specific community feeds.
2.  **Integrate TMDB API:** Add dynamic autocompletion search inside `CreatePostCard` when typing movie titles.
3.  **Local Mock Database:** Expand static data arrays into service hooks to decouple components from mock data.
4.  **Integrate Supabase / Postgres:** Move towards persistent authentication and RLS database rules.
