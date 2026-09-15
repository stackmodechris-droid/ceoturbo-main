---
name: CEOTurbo
description: A proof-led visibility command center for search, social, and street presence.
---

# Design System: CEOTurbo

## Creative direction

**North star: The Visibility Command Center.** The site combines the decisiveness of a launch console with the clarity of an evidence file. Near-black navigation and conversion moments frame bright, uncropped proof. The interface is technical without becoming a SaaS dashboard and bold without making unsupported claims.

The system deliberately avoids page-builder aesthetics: no generic equal-card grids, glass panels, gradient text, emoji icons, oversized pills, or decorative motion that delays comprehension.

## Brand tokens

| Token | Value | Use |
| --- | --- | --- |
| `--ink` | `#101716` | Navigation, hero, final CTA, primary text |
| `--ink-2` | `#283432` | Secondary dark copy |
| `--paper` | `#f4f0e7` | Warm editorial sections |
| `--white` | `#fffdf8` | Proof and document surfaces |
| `--teal` | `#36b7a0` | Active state, channel identity, structural accent |
| `--teal-dark` | `#0c6c5c` | Accessible teal text on light surfaces |
| `--coral` | `#ff654f` | Primary conversion action only |
| `--line` | `#cdd4cf` | Dividers and evidence framing |
| `--muted` | `#53605c` | Supporting copy on light surfaces |

**Signal rule:** coral is reserved for calls to action and the terminal point of a visual path. It is never decorative confetti.

**Evidence rule:** supplied screenshots sit on neutral stages and use intrinsic ratios with `object-fit: contain`. No crop, overlay, or texture may reduce legibility.

## Typography

- Display: self-hosted Archivo Black, weight 400.
- Body and interface: self-hosted Source Sans 3, weights 400, 600, 700, 800, and 900.
- Code: system monospace inside the code demonstration only.
- Display scale: `clamp(3.1rem, 6.2vw, 6.8rem)` for primary hero headings; `clamp(2.35rem, 4.4vw, 4.9rem)` for section headings.
- Headings use a compact `.98` line height and balanced wrapping. Body copy targets 65–75 characters per line.

## Layout and responsive behavior

- Desktop begins above 820px with a fixed 220–250px left rail and a spring-tracked active state.
- Mobile uses a 64px sticky header, compact drawer, and fixed 64px Call/Book dock.
- Main content uses a maximum 1180px shell with 64px desktop and 28–34px mobile gutters.
- Sections use 104px desktop and 76px mobile vertical rhythm.
- Asymmetric split layouts carry one primary idea and one proof, inclusion sheet, qualifier, or product demonstration.
- No route may exceed viewport width at 390px, 1024px, or 1440px.

## Geometry and elevation

- Corners remain square or nearly square; large soft rounded cards are prohibited.
- Default surfaces are flat. Depth comes from overlap, structural 7–14px offset shadows, and contained perspective in product demonstrations.
- Proof tiles use 1px neutral borders. Shadows never obscure evidence.
- The official CEOTurbo logo is the supplied metallic blue/orange wordmark and arrow mark. Navigation and footer use the dense `ceoturbo-lockup.webp`; product demonstrations use the matching compact lockup, and `ceoturbo-mark.webp` is reserved for icon-scale placements. Do not squeeze the supplied mark into square UI slots.

## Core components

### Navigation

Exact primary order: Home, SEO Websites, Meta Ads, Shirts, Business Cards, Review Cards, Yard Signs. Navigation labels are plain-language only, without decorative sequence numbers. The desktop rail remains fixed; the mobile drawer is keyboard closable. Persistent Call and Book actions stay outside primary content and never collide with it.

### Buttons and links

Primary buttons use coral with near-black text, a 49px minimum height, direct verbs, and a directional arrow. Secondary actions are underlined text links. Focus uses a 3px coral outline with 4px offset.

### Proof galleries

Gallery tiles preserve source dimensions and responsive image sizing. Each tile is a keyboard-operable button that opens a modal lightbox. Escape closes; arrow keys navigate; background scroll locks while open.

### Result ledger

Result screenshots appear as dense evidence rows with the exact result, cost per result, spend, client label, full screenshot link, and a visible results-vary disclaimer.

### Qualifier

The homepage and contact package finder presents three steps. Service and asset choices use standard multi-select checkboxes; customer geography remains a single radio choice. The result summarizes every selected fixed package and provides Book and Call paths. No text field, API request, storage, cookie, database, or CRM is introduced.

### Paid-social intake

`/form` is a distraction-free campaign route with no desktop rail, global footer, or floating dock. It adapts the familiar Meta lead-form rhythm: three segmented steps, one question at a time, standard checkbox/radio semantics, large mobile targets, and a persistent Continue action. Visitors may select multiple CEOTurbo services, then identify timing and available assets. The final state summarizes every selected fixed package and presents equal, explicit Book and Call paths. It captures and stores no personal information and remains `noindex` to avoid competing with commercial service pages.

### Product demonstrations

React Spring is limited to explanatory product physics: shirt identity settling, business-card stack separation, review scan path, and yard-sign QR configuration. Every control remains usable with reduced motion.

### Code demonstration

The code window streams real Next.js metadata and Service schema lines. It explains client-owned GitHub, Vercel deployment, account handoff, and the absence of page-builder lock-in.

## Motion

- Motion handles rail state, drawer, lightbox, proof entrances, the proof-led hero composition, and intake transitions.
- React Spring handles physical product behavior only.
- Prefer transforms and opacity; never animate layout dimensions for decoration.
- `prefers-reduced-motion: reduce` collapses animation duration and repetition globally.
- Text that must meet contrast requirements does not fade through partially transparent states.

## Content and proof rules

- Every commercial page opens with one H1, a direct answer, visible price, inclusions, exclusions, process, FAQs, proof where available, and one primary conversion.
- Historical metrics never appear without their source screenshot and results-vary language.
- Maps support is described as assistance for eligible in-person businesses only.
- Review prompts ask every eligible customer for honest feedback without incentives, rating pressure, or review gating.
- Rankings, indexing, traffic, AI citations, reviews, leads, and revenue are never guaranteed.

## Accessibility rules

- Target WCAG 2.2 AA and fail automated checks on serious or critical violations.
- Maintain semantic headings and landmarks, one H1 per route, keyboard access, visible focus, descriptive alternatives, and readable contrast.
- Full-size viewing supplements screenshot alternative text where captured interfaces contain small text.
- Tables use headers and a keyboard-focusable overflow region.

## Do and do not

**Do:** preserve all supplied media, publish exact scope and exclusions, expose client ownership, use real evidence, keep conversion paths obvious, and measure real outcomes.

**Do not:** invent addresses, reviews, ratings, awards, results, availability, eligibility, or guarantees; hide platform spend; crop proof; use self-serving review schema; or imply that custom code alone produces rankings.
