# Tri-Central Office Supply — build/

Hand-built static marketing site for Tri-Central Office Supply (Hays, KS), produced by a
"forge" automation pipeline (sibling dirs: `../capture`, `../qa`, `../deploy`, `../dispatches`).
This `build/` directory is its own git repo and its own GitHub Pages deploy unit.

## Stack

- Plain HTML5 + hand-rolled CSS + vanilla ES5/ES6 JS. **No build tooling** — no package.json,
  no bundler, no framework. What's on disk is what ships.
- Deploy target: GitHub Pages, repo `TylerPreisser/tri-central-office-supply-website`
  (see sibling `../deploy/deploy.json`), live at
  `https://tylerpreisser.github.io/tri-central-office-supply-website/`.

## Commands

- Build: none — static files served as-is.
- Test: none automated. QA is manual visual review; see `../qa/` in the parent forge project
  for prior screenshot-based passes (`revision8-mobile-390.png` etc.).
- Lint: none configured.
- Deploy (declared — not executed in rollout; matches the pattern traced from
  `../deploy/progress.jsonl`): commit, then `git push origin main`. GitHub Pages serves the
  repo root of `main` directly — no separate publish step, no `docs/` subfolder.

## Key files

- `index.html:1` — the entire site; single page, section-anchored nav (`#supplies`,
  `#toner`, `#service`, etc.).
- `styles/site.css:1` — the CSS **actually loaded** (`index.html:8` references
  `styles/site.css?v=5`; bump the `?v=` query param on every CSS change or browsers/CDN will
  serve a stale cached copy).
- `scripts/site.js:1` — the JS **actually loaded** (`index.html:193`). Handles `.reveal`
  scroll-in animation via `IntersectionObserver` and hijacks form submits to scroll to a
  section instead of posting.
- `SITE_PLAN.md:1` — the brand/design brief this revision was built against (rejected
  directions, component-adaptation plan). Read before any visual change — it records what was
  explicitly rejected by the client so it isn't silently reintroduced.
- `assets/` — images, fonts, icons referenced by `index.html`/`site.css`.

## Anti-patterns / gotchas

- `styles/main.css` and `scripts/main.js` are **dead leftovers from a prior revision** —
  `index.html` does not load them. Don't edit them expecting an effect; if touching styling or
  behavior, confirm which file `index.html` actually references first.
- `styles/site.css` ends with a "Forge emergency mobile containment" `@media(max-width:1000px)`
  block (`styles/site.css:2` onward) full of `!important` overrides that was added to fix real
  mobile overflow bugs found in visual QA. Do not remove or "clean up" these `!important`s
  without testing at 360px/390px widths — they are load-bearing, not accidental.
- No CSS custom-property parity between the two stylesheets: `site.css` uses `--ink`/`--paper`/
  `--soft`/`--panel`/`--line`/`--muted`/`--blue`/`--red`/`--navy`; `main.css` (unused) uses a
  different `--color-*` naming scheme. Don't cross-reference variables between the two files.
- `progress.jsonl` and `_done.json`/`verification.json` at repo root are forge pipeline state,
  not app config — don't hand-edit them expecting the pipeline to notice; they're written by
  the automation that produced this build.

GitHub MCP and Context7 are connected globally — no per-repo wiring needed.
