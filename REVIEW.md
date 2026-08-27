# Review standard — build/ (Tri-Central Office Supply)

Every finding needs a concrete failing scenario plus `file:line` citations, and a stated
confidence 0-100. Discard anything under 80. Read the actual implementation, not just the diff
— trace how a change reaches `index.html`, `styles/site.css`, or `scripts/site.js` before
flagging it. Discard a finding if it's guarded elsewhere, clearly intentional, or you can't
demonstrate the failure concretely.

**Excluded from findings:** style preferences, speculative risk ("could theoretically..."),
feature requests, generated/vendor assets under `assets/`, lockfiles (none here), anything a
linter would catch (none configured — don't invent lint rules to enforce). ADR-conformance
(`DECISIONS/`, `decisions.md`) is a decision record, never itself a defect.

## Repo-specific must-checks

1. **Which file is actually loaded.** `index.html:8` and `index.html:193` are the only two
   asset references (`styles/site.css`, `scripts/site.js`). A "fix" applied to `styles/main.css`
   or `scripts/main.js` (dead leftovers) does nothing in production — verify the edited file is
   one of the two referenced files before treating a fix as real.
2. **Mobile containment survives.** Any CSS change touching layout, width, or grid rules must be
   checked against the "Forge emergency mobile containment" block at the end of `site.css`
   (`@media(max-width:1000px)` with `!important` overrides) — a change that overrides it
   silently can reintroduce the overflow bugs it exists to suppress. Confirm at 360px and 390px.
3. **Cache-bust bump.** Any `styles/site.css` content change must bump the `?v=N` query string
   on the `<link>` at `index.html:8`, or the fix won't be visible post-deploy due to caching.
4. **No live backend.** `scripts/site.js` form handling is `preventDefault` + scroll-to-section
   only — there is no server. A finding that assumes form data is submitted, validated, or
   persisted server-side is unfounded; verify against the actual JS before reporting a
   client-side "validation gap" as a bug.
