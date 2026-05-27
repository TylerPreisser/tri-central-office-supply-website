# Tri-Central Office Supply Site Plan

## 1. Brand read

Tri-Central should feel practical, local, capable, direct, and service-minded.

The site must never feel like a generic ecommerce template, a furniture-only lifestyle page, a national retailer clone, a brittle legacy catalog, or an AI-looking card grid with vague copy.

## 2. Inspiration DNA

- Layout patterns to adapt: a Staples-like procurement header with search and repeat-order tools, Ricoh/Xerox-style service clarity, Haworth confidence for furniture/equipment sections, Branch restraint for motion, and Muuto warmth for material/image fields.
- Typography behavior: scan-first grotesk hierarchy with dense labels, compact utility text, and large but controlled section statements.
- Motion behavior: one IntersectionObserver reveal system, short hover/focus transitions, and no scroll theatrics.
- Image treatment: captured images stay framed and modest because most are low resolution; warm panels and precise borders make them useful without pretending they are large editorial photography.
- Color/material cues: paper-white working surface, light gray command modules, navy trust anchor, blue digital actions, red high-intent CTAs, warm neutral for furniture/workplace context.
- Signature interaction motif: a "command center" task band with quick order, toner, service, quote, and local-contact routes always near the buying path.

## 3. Visual system

- Type scale: Inter/Roboto/system sans; 13px uppercase eyebrows, 38-64px hero H1, 30-46px section H2, 19-22px card headings, 16-18px body, 13-15px utility text, 14px button labels.
- Spacing: 1180px max width; 12-column desktop grid; 48-64px utility rhythm; 80-112px service/editorial rhythm on desktop and 48-64px on mobile.
- Color tokens: exact palette from the creative brief in CSS custom properties.
- Composition: utility header, hero command grid, asymmetric category grid, task band, local service strip, furniture/machines split, proof/help section, footer.
- Components: top utility bar, main nav/search, command cards, category tiles, quick task modules, service facts, framed images, sticky mobile action bar.
- Motion: `.reveal` elements transition opacity and `translateY(18px)` over 420ms with 60ms max stagger; reduced-motion disables transforms.

## 4. Asset strategy

- Hero/support: `hero-workstation.jpg` is copied from the required `capture/assets/2e3a9b746764c465.jpg` and used in a framed desktop panel, never full-bleed.
- Furniture/service: captured furniture and workplace images are used as small cards or framed panels only.
- Toner/machine credibility: the HP toner image is used in the ink/toner and machine support areas.
- Brand: captured Tri-Central logo images are used in header/footer.
- Low-quality mitigation: images use fixed frames, light backgrounds, borders, and object-fit containment where needed.

## 5. Build strategy

- Framework: static HTML/CSS/vanilla JavaScript in `build/` for direct file hosting.
- Dependencies: none.
- Performance risks: small image set copied locally; no remote fonts or libraries.
- Accessibility risks: ensure semantic regions, visible focus states, real buttons/links, labels for quick-order/search controls, reduced-motion support, and 44px mobile action targets.
