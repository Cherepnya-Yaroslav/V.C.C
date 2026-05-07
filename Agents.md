# AGENTS.md — VCC MVP

## 0. Project Identity

VCC is a minimal streetwear clothing showcase website.

This is not a full ecommerce store.

No:
- cart
- checkout
- payment
- authentication
- user accounts
- order flow
- sold/reserved status
- Telegram/Instagram CTA

The site exists only as a visual product showcase.

Brand name:
VCC



---

# 1. Core Vibe

The website should feel like:
- underground streetwear
- fashion archive
- editorial catalog
-  minimalism
- glitch/street visual language
- premium but raw
- mysterious and curated

The website should NOT feel like:
- Shopify template
- generic ecommerce UI
- marketplace
- SaaS landing page
- startup template
- admin dashboard

Primary inspiration:
https://undergroundg.com/

Use this only as vibe reference. Do not copy directly.



---

# 2. Tech Stack

Frontend:
- Next.js
- App Router
- TypeScript
- Tailwind CSS
- Framer Motion

CMS:
- Strapi

Database:
- PostgreSQL

Deployment:
- VPS
- Docker
- Docker Compose
- Caddy or Nginx reverse proxy
- GitHub Actions deploy via SSH

Preferred proxy:
Caddy, because automatic HTTPS is simpler.

---

# 3. Product Model

Strapi collection:
Product

Fields:
- title: text, required
- slug: uid, based on title, required
- description: long text or rich text
- price: number, required
- photos: multiple media images, 2–3 images per product

For MVP:
- images can be stored locally in Strapi
- uploads must use persistent Docker volume
- architecture should allow moving to S3/Cloudinary later

---

# 4. Pages

## `/`

Intro page.

Requirements:
- fullscreen dark screen
- centered VCC logo
- animated glitch/street logo effect
- button: `ВОЙТИ`
- button links to `/catalog`
- subtle background texture/noise/grid/scanlines
- green and white accents
- cinematic entrance feel
- mobile-first

---

## `/catalog`

Catalog page.

Requirements:
- adaptive product grid
- mobile-first
- product card shows:
  - image
  - title
  - price
- click opens `/product/[slug]`
- minimal header with VCC
- no filters
- no search
- no cart
- no wishlist
- no CTA

Design:
- editorial grid
- not marketplace-like
- strong spacing
- dark background
- green/white details
- smooth hover/tap motion

---

## `/product/[slug]`

Product detail page.

Requirements:
- 2–3 product images
- large main photo
- additional photos
- title
- description
- price
- back to catalog
- no buy button
- no contact button
- no recommendations
- no reviews

Design:
- fashion/editorial product page
- image-first
- minimal text
- premium spacing
- responsive mobile layout

---

# 5. Design System

Colors:
- black
- off-black
- dark gray
- white
- acid green
- muted green

Green should be used as accent, not as the main background.

Typography:
- bold logo/title typography
- clean readable body text
- editorial spacing
- strong hierarchy

Motion:
- Framer Motion
- subtle page transitions
- glitch flicker for logo
- smooth product hover
- no excessive animation

UI:
- custom components
- no generic component library look
- no default ecommerce cards
- no overdecorated UI

---

# 6. Performance Rules

Performance matters.

Use:
- Next.js server components where possible
- `next/image`
- proper image sizes
- lazy loading
- minimal client components
- optimized animations
- clean data fetching
- caching where appropriate

Avoid:
- huge client bundles
- unnecessary libraries
- heavy visual effects
- layout shifts
- unoptimized images

---

# 7. Development Stages

## Stage 0 — Project Setup

Goal:
Create the base Next.js project structure.

Tasks:
- initialize Next.js with App Router
- configure TypeScript
- configure Tailwind CSS
- install Framer Motion
- create base folder structure:
  - `app/`
  - `components/`
  - `components/ui/`
  - `components/layout/`
  - `components/product/`
  - `lib/`
  - `services/`
  - `types/`
  - `styles/`
- create global styles
- create design tokens
- configure metadata
- prepare mobile-first layout foundation

Acceptance:
- app runs locally
- no placeholder generic template feel
- clean architecture exists

---

## Stage 1 — Visual Foundation

Goal:
Create the initial design system.

Tasks:
- define color palette
- define typography scale
- define reusable button component
- define layout wrappers
- define product card base style
- add subtle background texture/noise utilities
- add glitch text utility/component
- create reusable transition patterns

Acceptance:
- design feels dark, minimal, streetwear/editorial
- UI does not look like generic ecommerce
- mobile-first styles exist

---

## Stage 2 — Intro Page

Goal:
Build `/`.

Tasks:
- fullscreen landing screen
- VCC logo centered
- glitch animation
- button `ВОЙТИ`
- route button to `/catalog`
- background texture/noise/scanline
- responsive layout
- polished motion

Acceptance:
- intro feels like a fashion drop entrance
- works perfectly on mobile
- no cannabis references

---

## Stage 3 — Mock Product Data

Goal:
Build frontend using local mock data before Strapi integration.

Tasks:
- create product type
- create mock product array
- include:
  - id
  - slug
  - title
  - description
  - price
  - photos
- create 6–8 mock products
- use local placeholder images from `public/`
- structure mock layer so it can be replaced by Strapi later

Acceptance:
- catalog and product pages can be built without backend
- data structure matches future Strapi model

---

## Stage 4 — Catalog Page

Goal:
Build `/catalog`.

Tasks:
- create responsive catalog grid
- create product cards
- card shows image, title, price
- card links to product detail page
- add minimal VCC header
- add hover/tap animations
- add empty state
- ensure mobile-first layout

Acceptance:
- page feels editorial, not marketplace-like
- works well on mobile
- product cards are visually strong

---

## Stage 5 — Product Detail Page

Goal:
Build `/product/[slug]`.

Tasks:
- dynamic route by slug
- display product photos
- large main image
- additional image layout
- title
- description
- price
- back link to catalog
- responsive mobile layout
- subtle transitions

Acceptance:
- product page feels like fashion editorial
- no buy/contact/order UI exists
- images are the main focus

---

## Stage 6 — Strapi Setup

Goal:
Create CMS backend.

Tasks:
- create Strapi app
- configure PostgreSQL
- create Product collection
- fields:
  - title
  - slug
  - description
  - price
  - photos
- configure media upload
- configure public read permissions
- document how to add products in admin
- ensure local uploads are stored in persistent volume for Docker

Acceptance:
- admin can create/edit products
- API returns products
- media URLs work
- no production secrets committed

---

## Stage 7 — Frontend + Strapi Integration

Goal:
Replace mock data with Strapi API.

Tasks:
- create Strapi API service layer
- add environment variable:
  - `STRAPI_API_URL`
- fetch products from Strapi
- fetch single product by slug
- support Strapi media URLs
- use `next/image`
- add error handling
- add empty states
- keep mock fallback only for local development if needed

Acceptance:
- catalog loads products from Strapi
- product pages load by slug
- images display correctly
- frontend remains fast

---

## Stage 8 — Dockerization

Goal:
Prepare Docker setup.

Tasks:
- create Dockerfile for Next.js
- use Next.js standalone output
- create Dockerfile for Strapi
- create `.dockerignore`
- create `docker-compose.yml`
- services:
  - nextjs
  - strapi
  - postgres
  - caddy or nginx
- add persistent volumes:
  - postgres data
  - strapi uploads
- add env examples:
  - `.env.example`
  - `.env.production.example`

Acceptance:
- project can run with Docker Compose
- uploads survive container rebuild
- database survives container rebuild
- frontend talks to backend correctly

---

## Stage 9 — VPS Deployment Setup

Goal:
Prepare production deployment to VPS.

Tasks:
- write server setup instructions
- install Docker and Docker Compose
- configure firewall
- configure domain placeholders
- configure Caddy/Nginx reverse proxy
- configure HTTPS
- prepare production `.env`
- document deployment process

Important:
Actual VPS credentials and domain values will be provided later.

Use placeholders:
- `YOUR_SERVER_IP`
- `YOUR_DOMAIN`
- `YOUR_ADMIN_DOMAIN`
- `YOUR_GITHUB_REPO`
- `YOUR_SSH_USER`

Suggested domains:
- frontend: `YOUR_DOMAIN`
- Strapi admin/API: `admin.YOUR_DOMAIN`

Acceptance:
- deployment guide is clear
- no real secrets included
- setup is production-ready

---

## Stage 10 — GitHub Actions Auto Deploy

Goal:
Enable automatic deploy from GitHub to VPS.

Tasks:
- create GitHub Actions workflow
- trigger on push to `main`
- connect via SSH to VPS
- pull latest code or image
- rebuild containers
- restart services
- clean unused Docker images safely

Required GitHub Secrets:
- `VPS_HOST`
- `VPS_USER`
- `VPS_SSH_KEY`
- `VPS_PROJECT_PATH`

Preferred deploy command:
```bash
cd $VPS_PROJECT_PATH
git pull origin main
docker compose up -d --build
docker image prune -f