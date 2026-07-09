# APEAX

**A story-driven e-commerce platform where every merchandise collection is introduced through Chapters and Acts of an original fictional universe.**

Read the story before you shop. Every drop is a limited edition, tied to a narrative — designed around scarcity marketing and a planned authenticity/ownership registry (think Rolex-style verification, but for streetwear).

> ⚠️ **Project status:** Frontend-complete, backend not yet connected. All data (products, chapters, orders, accounts) is currently mocked in-memory. See [Roadmap](#roadmap) below for what's planned next.

---

## Live Demo

🔗 [Add your Vercel link here once deployed]

## Screenshots

<!-- Add 3–4 screenshots or a short GIF walkthrough here once deployed.
     Suggested shots: Home hero, Story Reader (an Act), Shop grid, Product Detail -->

---

## The Concept

Most e-commerce sites sell you a product first and tell you a brand story later, if at all. APEAX flips that:

- **Chapters** are limited merchandise drops, each tied to an original narrative.
- **Acts** are story beats within a Chapter — each one features a specific piece of merch, so the story and the product unfold together.
- **Scarcity is real, not fake urgency** — every product tracks an edition size and units claimed, and sells out permanently once gone.
- **Authenticity Registry** *(designed, not yet wired to a database)* — each physical item is meant to carry a QR code that verifies its edition number and registered owner, with a public `/verify/[serial]` page.

## Tech Stack

- **Next.js 16** (App Router, Server Components by default)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** (Base UI primitives)
- **Lucide React** (icons)

Planned for backend integration: **Supabase** (Postgres, Auth, Storage, Row Level Security).

## Features

- 🏠 **Home** — hero, featured collections, product recommendations, editorial "State of Becoming" story section
- 📖 **Story Reader** — chapter narratives told across sequential Acts, each Act linked to its featured product
- 🛍️ **Shop** — search, category filters, sorting, pagination
- 🧥 **Product Detail** — image gallery, size/variant selection, live stock display, fabric/care details, related products, reviews
- 🛒 **Cart & Checkout** — full cart state (add/remove/update quantity), shipping form, shipping method selection, payment method UI, order confirmation
- 👤 **Account** — login/register/password reset flows, profile editing, order history, saved addresses, wishlist
- ℹ️ **Company Pages** — About (mission/vision), Contact (working form), FAQ (searchable, categorized accordion)
- ✅ **Authenticity Verify** — public page shell for scanning/verifying a product's edition and ownership

## Architecture

```
src/
  app/              → routes, layouts, metadata only
  components/
    layout/         → Navbar, Footer, Container
    ui/             → shadcn primitives (Button, Input, Card, etc.)
    shared/         → reusable composed components (ProductCard, SearchBar, etc.)
  features/         → page-specific component groups (e.g. features/home/)
  hooks/            → reusable React logic (useCart, etc.)
  lib/              → shared config, utils, mock data
  types/            → TypeScript interfaces
  constants/        → static data (nav links, categories, etc.)
```

Built following: Server Components by default (Client Components only where interactivity requires it), single-responsibility components, no premature abstraction.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Roadmap

- [ ] Connect Supabase (Auth, Postgres, Storage)
- [ ] Wire real authentication to Login/Register/Profile flows
- [ ] Replace all mock data arrays with real database queries
- [ ] Build out the Admin Dashboard (product/inventory/order management)
- [ ] Implement the QR-based authenticity/ownership transfer system
- [ ] Payment gateway integration
- [ ] Full accessibility and Lighthouse performance pass

## Notes on Current Limitations

- All product photography is AI-generated mockup imagery, not real product shots.
- All data (products, orders, accounts, reviews) resets on page refresh — no persistence yet.
- Payment and authentication forms are fully designed but not functionally wired to a backend.

---

Built by [Your Name] — [portfolio link] · [LinkedIn] · [GitHub]
