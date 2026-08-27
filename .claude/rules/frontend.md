---
paths: ["index.html", "styles/**", "scripts/**"]
---

# Frontend conventions

- `index.html` loads exactly `styles/site.css` and `scripts/site.js` (`index.html:8`,
  `index.html:193`). `styles/main.css` and `scripts/main.js` are unused leftovers from a prior
  revision — never edit them expecting a visible effect. If asked to change styling/behavior,
  first confirm the target is one of the two files actually referenced.
- `site.css` is cache-busted with a `?v=N` query string (`index.html:8`, currently `?v=5`).
  Bump `N` on every `site.css` edit, or GitHub Pages/browser caches can serve a stale
  stylesheet after deploy.
- The trailing `@media(max-width:1000px)` block in `site.css`, labeled "Forge emergency mobile
  containment", exists to fix real overflow bugs caught in visual QA at 360px/390px widths. Its
  `!important` overrides are intentional, not sloppiness — don't remove or "clean up" them
  without re-testing at those two widths.
- Two independent CSS custom-property sets exist: `site.css` uses `--ink`/`--paper`/`--soft`/
  `--panel`/`--line`/`--muted`/`--blue`/`--red`/`--navy`; `main.css` (dead) uses `--color-*`
  names. Never mix variable names across the two files.
- `scripts/site.js` treats every `<form>` submit as a same-page scroll action
  (`event.preventDefault()` → `scrollIntoView`), not a real submission — there is no backend.
  Don't add real form-submission logic without first confirming a backend/endpoint exists.
