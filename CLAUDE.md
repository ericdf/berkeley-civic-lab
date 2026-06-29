# Berkeley Budget Discipline Framework — Developer Notes

## Specification

`SPECIFICATION.md` is the authoritative description of this project. It should fully describe the implementation — well enough to rebuild the site from scratch.

**Whenever you make a change to the site, update SPECIFICATION.md to match.** This includes new pages, revised page content, new failure modes, changed UI patterns, updated IA, or any shift in editorial framing. The spec and the site must stay in sync.

## Stack

Static HTML/CSS/JS. No frameworks, no CDN dependencies. Deployed via GitHub Actions to GitHub Pages.

## Conventions

- Semantic HTML throughout.
- All images live in `assets/img/`.
- All stylesheets live in `assets/css/`.
- Endorsements are Google Forms only — never auto-publish from form responses.
- Failure mode scenarios are intentionally generalized. Never add names, dates, dollar amounts, or organization names.
