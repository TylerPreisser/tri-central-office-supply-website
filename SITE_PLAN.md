# Tri-Central Rebuild Site Plan

## Brand Sanity Check

1. Verified logo/brand source: `capture/assets/7f697d46f84d5eb5.jpg`. The brand asset manifest identifies it with high confidence as the actual Tri-Central wordmark: black TRI-CENTRAL text and geometric mark on white. It is the only captured image classified as the business logo rather than a vendor badge.

2. Images that must not define the brand: Lorell, Brother, HP, Fellowes, Genuine Joe, P&G, Business Source, Expo, and product-promo images in `capture/assets/` and `capture/brand/`. These are category/vendor proof only. They cannot drive logo, palette, typography, or layout identity.

3. Brand system created here: monochrome Tri-Central foundation, warm paper surfaces, black procurement-board typography, blue digital actions, and controlled red urgent actions. This fits a local office-supply and service business because buyers need fast task routing, proof of local availability, and a human service counter when the catalog is not enough.

4. Mobile first-screen quality: the 360px/390px layout starts with the verified logo, phone/hours/delivery facts, a strong headline, compact command buttons for Order, Toner, Service, and Call, plus a composed supply-desk module. It is not a shrunken desktop grid; it is a purpose-built mobile procurement board.

## Brand Read

Adjectives: local, practical, prepared, responsive, no-nonsense.

Must never feel like: a vendor ad collage, national retailer clone, generic card template, luxury furniture brochure, or amateur static HTML.

## Inspiration DNA

- Staples Business Advantage: direct buyer tasks, dense utility, clear repeated-action patterns.
- Ricoh/Xerox: service credibility, machine support language, restrained proof blocks.
- Haworth/Branch: confident typography, measured white space, calm modern surfaces.
- Muuto: tactile warmth used sparingly through warm paper panels, not lifestyle excess.

Signature motif: a "local supply desk" procurement board. Task strips, ledger rows, routing tags, and compact local-service blocks make the homepage feel like an operations surface.

## Visual System

- Type: Inter/Arial system stack; bold grotesk headlines; tight utility labels.
- Palette: black, white, paper, panel gray, rule gray, muted gray, digital blue, urgent red, navy, warm neutral, steel.
- Composition: mobile-first vertical board; desktop 12-column utility layout with asymmetric cards and service bands.
- Components: utility bar, mobile action rail, command hero, task buttons, category ledger rows, quick-order modules, service proof strip, furniture/machines split, help CTA, footer.
- Motion: one IntersectionObserver reveal system with 420ms reveals, 60ms stagger, reduced-motion support.

## Asset Strategy

- `build/assets/tri-central-wordmark.jpg`: logo only.
- `build/assets/hero-workstation.jpg`: required workstation image, framed small to mitigate low resolution.
- `build/assets/furniture-desk-red.jpg` and `build/assets/furniture-station-gray.jpg`: small furniture/service proof images.
- `build/assets/hp-supplies-partner.jpg`: small toner credibility cue only, never brand identity.

## Build Strategy

This is a complete static site in `build/` with semantic HTML, one CSS file, and one JS file. All links are real anchors or `tel:` links. There are no placeholder images or fake testimonials. Verification will check required files, required image references, basic HTML structure, and no obvious horizontal-overflow CSS patterns.
