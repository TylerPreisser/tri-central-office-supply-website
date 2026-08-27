# Decisions (append-only ADR log)

---
### 2026-08-27
## MIP infra rollout adopted (CLAUDE.md, .claude/rules, REVIEW.md, plans/, decisions.md)
- Status: Accepted
- Why: Tyler chose "All repos incl. client" on 2026-08-26, MIP build, GLOBAL ADR-0007 — every
  repo on the machine gets the standard Claude Code scaffolding (governed CLAUDE.md, path-scoped
  rules, review evidence bar, plan stub) so agents across the five concurrent accounts behave
  consistently here.
- Alternatives rejected: leaving this repo unscaffolded (rejected — inconsistent with the
  machine-wide rollout decision; this is a client-facing static site repo, not exempted by any
  flag in the rollout brief).
- Source: MIP phase-5 rollout brief (target repo
  tri-central-office-supply/build), quoting Tyler's 2026-08-26 decision.
