# Berkeley Budget Discipline Framework — Developer Notes

## Specification

`SPECIFICATION.md` is the authoritative description of this project. It should fully describe the implementation — well enough to rebuild the site from scratch.

**Whenever you make a change to the site, update SPECIFICATION.md to match.** This includes new pages, revised page content, new failure modes, changed UI patterns, updated IA, or any shift in editorial framing. The spec and the site must stay in sync.

## Stack

Static HTML/CSS/JS. No frameworks, no CDN dependencies. Deployed via GitHub Actions to GitHub Pages.

## Six Questions — Keep in Sync

The six framework question headings appear on multiple pages (`index.html`, `framework.html`, `endorse.html`). They must always match. The canonical list lives in `SPECIFICATION.md` under "Canonical Six Questions." **When any question heading changes, update all three pages and the spec in the same commit.**

## Target Reader Personas

The primary target reader is a thoughtful, compassionate, civically engaged Berkeley resident who values public services and wants government to work better. Copy should earn trust through fairness, precision, and process-oriented language — not ideological framing.

**Editorial rules for copy:**
- Prefer neutral governance language over ideological language.
- Critique decision-making processes, not beneficiaries, employees, or particular programs.
- Use: priorities, tradeoffs, obligations, evidence, outcomes, accountability, stewardship, public value, long-term costs.
- Do not use "opportunity cost" — use: "Every dollar spent here is a dollar that cannot be spent somewhere else."
- Prefer "financial support" over vague "support."
- Prefer "ongoing obligations" or "open-ended obligations" over "permanent entitlement."
- Prefer "principled" over "disciplined" in descriptive prose (the framework name is fixed).
- Do not use "not mere inertia."

## Conventions

- Semantic HTML throughout.
- All images live in `assets/img/`.
- All stylesheets live in `assets/css/`.
- Endorsements are Google Forms only — never auto-publish from form responses.
- Failure mode scenarios are intentionally generalized. Never add names, dates, dollar amounts, or organization names.
