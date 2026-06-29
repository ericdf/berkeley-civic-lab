# Berkeley Budget Discipline Framework — Project Specification

Version 1.2

This document is the authoritative description of the site. **Update it whenever the implementation changes.** The goal is that this file alone is sufficient to rebuild the project from scratch.

---

## Project Purpose

Build a static GitHub Pages website presenting the **Berkeley Budget Discipline Framework**, a proposed decision-making framework for municipal budgeting.

The site is not an advocacy campaign against specific programs or organizations. It is a proposal for improving **how** budget decisions are made.

The site should feel like the public face of a small civic institute: calm, evidence-based, visually engaging, and respectful.

---

## Mission

Help Berkeley residents understand that:

> A budget is not a list of good things.
> It is a transparent ranking of priorities.

The objective is to build agreement around a budgeting framework before discussing specific budget decisions.

---

## Guiding Principles

- Standards before examples.
- Principled decision-making before political pressure.
- Evidence before conclusions.
- Transparency over rhetoric.
- One standard for every public dollar.
- Good programs should welcome good scrutiny.
- Reasonable people can disagree about outcomes while agreeing on process.

**Tone:** Judicial. Thoughtful. Non-partisan. Calm. Analytical.

Never use outrage, ridicule, or "gotcha" language.

---

## Target Reader Personas

The primary target reader is a thoughtful, compassionate, civically engaged Berkeley resident who values public services and wants government to work better. This reader may not share skepticism about particular programs, so copy should earn trust through fairness, precision, and process-oriented language.

**Editorial rules:**
- Prefer neutral governance language over ideological language.
- Critique decision-making processes rather than beneficiaries, employees, or particular programs.
- Use terms such as: priorities, tradeoffs, obligations, evidence, outcomes, accountability, stewardship, public value, and long-term costs.
- Avoid unnecessary jargon and politically loaded terminology when a neutral alternative exists.
- Preserve the central thesis: Berkeley deserves a disciplined way to decide what comes first.
- The objective is not immediate agreement. It is to keep intellectually honest readers engaged long enough to evaluate the framework on its merits.

**Preferred language:**
- "financial support" over vague "support"
- "ongoing obligations" or "open-ended obligations" over "permanent entitlement"
- "principled" over "disciplined" in descriptive language (the framework name is fixed)
- Avoid "opportunity cost" — use: "Every dollar spent here is a dollar that cannot be spent somewhere else. Choosing one priority means choosing not to fund another."

---

## Branding

| Element | Value |
|---|---|
| Public headline | A Popularity Contest Is Not a Budget |
| Subtitle | Berkeley deserves a disciplined way to decide what comes first. |
| Framework name | Berkeley Budget Discipline Framework |
| Umbrella brand | Berkeley Budget Lab |

The Framework is the flagship project. Budget Lab, Tax Calculator, and future tools are companion resources.

---

## Technical Requirements

- Static GitHub Pages
- HTML / CSS / JS only — no frameworks, no CDN dependencies
- Responsive
- Accessible (semantic HTML)
- Works under GitHub Pages project path
- No backend
- Deployed via GitHub Actions

Google Forms handles endorsements.

---

## Repository Structure

```
/
  index.html
  framework.html
  hidden-cost.html
  no-way.html
  endorse.html
  endorsers.html
  toolbox.html
  case-studies.html
  about.html
  SPECIFICATION.md
  README.md
  assets/
    css/
    js/
    img/
      iceberg.png
    downloads/
  cafr/
    berkeley-financial-reports/   (primary source PDFs and downloaded pages)
```

---

## Information Architecture

| Page | File | Status |
|---|---|---|
| Home | index.html | Live |
| Framework | framework.html | Live |
| Hidden Costs | hidden-cost.html | Live |
| No Way to Run a City | no-way.html | Live |
| Endorse | endorse.html | Live |
| Endorsers | endorsers.html | Live |
| Budget Toolbox | toolbox.html | Live |
| Case Studies / Failure Modes | case-studies.html | Live |
| About | about.html | Live |

---

## Homepage (`index.html`)

The homepage is a scroll-story. Each scene contains one headline, one sentence, one visual, and generous whitespace. Avoid long paragraphs.

### Scene 1 — Hero
Headline: **A Popularity Contest Is Not a Budget**

Buttons:
- Endorse the Framework
- Download One-Page Framework

### Scene 2 — Fiscal Reality
Discuss structural deficits, long-term liabilities, deferred maintenance, and competing priorities. Avoid naming specific controversies.

### Scene 3 — Budgets Are Rankings
Key message: A budget is not a list of good things. It is a ranking.

### Scene 4 — Current Failure Mode
Illustrate: **Visibility ≠ Priority**

Explain that organized constituencies and historical precedent should not replace transparent prioritization.

### Scene 5 — Six Tests
Display six visual cards:
1. Core responsibility?
2. Higher priority than what?
3. Does it work?
4. Outside money or outside burden?
5. Who else should pay?
6. When does it end?

### Scene 6 — Outside Funding
Headline: Free money is not free if Berkeley owns the consequences.

### Scene 7 — Sunset Review
Headline: Funding once is not a lifetime appointment.

Illustrate: Fund → Measure → Compare → Continue / Change / End

### Scene 8 — Before / After
**Before:** precedent · pressure · inertia · one-time fixes

**After:** priorities · evidence · lifecycle costs · transparency · sunset review

### Scene 9 — Statement of Philosophy
The purpose of this framework is not to predetermine winners and losers. Its purpose is to ensure every proposal is evaluated using the same transparent standards. Reasonable people can disagree about individual budget decisions while agreeing that every public dollar deserves the same careful review.

### Scene 10 — Endorsement
Display prominently:

> By endorsing this framework you are supporting the decision-making framework—not every future application of it. Different people may reasonably reach different conclusions when applying these principles to individual budget decisions.

CTA: Endorse the Berkeley Budget Discipline Framework

### Scene 11 — Budget Toolbox
Short intro: Better budgeting requires better information. Some tools were developed for this project. Others were created by members of the community, researchers, or public agencies.

Cards: Berkeley Budget Lab · Berkeley Tax Impact Calculator · External Resources

---

## Framework Page (`framework.html`)

Expands each of the six tests with explanation of why each matters.

Concludes: This framework does not begin by naming cuts. It begins by naming standards.

### Test 1 — Is This the City's Responsibility?

Distinguishes three categories:
- **Legal obligations:** debt service, pension contributions, court judgments, employee compensation required by contracts. These must be met.
- **Core public services:** police, fire, streets, libraries, parks, basic administration. Residents have a reasonable right to expect these.
- **Discretionary policy choices:** financial support for arts organizations, grant programs, pilot initiatives, property acquisitions beyond core operational needs. These may be worthwhile, but they are choices, not obligations.

Discretionary choices face a higher burden of proof when competing for the same dollars as legal obligations and core services.

### Test 2 — Is It More Important Than Competing Needs?

Lead: "Every dollar spent here is a dollar that cannot be spent somewhere else. Choosing one priority means choosing not to fund another. Good budgeting makes those tradeoffs explicit."

Do not use "opportunity cost."

### Test 3 — Does It Work — and How Would We Know?

Include: "Financial accountability and program accountability are different. Financial audits verify that money was spent as reported. They generally do not determine whether a program achieved its intended outcomes."

Accountability questions:
- What outcome was promised?
- How will success be measured?
- Who is accountable for reporting results?
- What happens if the program falls short?

### Test 5 — Who Else Should Be Solving or Sharing This?

Regional risk paragraph: "There is a subtler risk beyond simple cost-sharing: Berkeley can end up serving a regional need with mostly local dollars. When one city builds substantially more capacity than neighboring jurisdictions, people in need may be directed there formally or informally. That does not make the investment wrong, but it does mean Berkeley should ask what regional partners are contributing, what limits exist, and whether local taxpayers are being asked to sustain a burden that extends beyond city boundaries."

### Test 6 — When Should This Be Reviewed, Renewed, Redesigned, or Concluded?

"Different kinds of public programs require different review cycles. A pilot should have a defined evaluation and decision point. An ongoing public service should be reviewed periodically for performance, efficiency, and continued public value. The important principle is not that every program expires automatically — it is that no program should continue indefinitely without meaningful review."

Do not use "not mere inertia."

### Closing blockquote

"Good programs should welcome good scrutiny. Standards before examples. Principled decision-making before political pressure. Evidence before conclusions."

---

## Hidden Costs Page (`hidden-cost.html`)

### Purpose
Teach readers that public projects carry costs beyond the headline price tag — the "second price tag" that often goes unexamined.

### Core framing
Every public project has two price tags: the visible one (capital cost, grant amount, purchase price) and the hidden one (ongoing operations, maintenance, staffing, debt service, foregone revenue, long-term obligations). Budget discipline requires seeing both.

### Visual
Iceberg diagram (`assets/img/iceberg.png`): visible costs above the waterline, hidden costs below.

### Hidden cost categories
- **Operating costs** — ongoing staffing, utilities, supplies after a capital project opens
- **Deferred maintenance** — the cost of not maintaining an asset
- **Debt service** — principal and interest on borrowed funds
- **Pension and benefit obligations** — projected costs of benefits earned by current employees
- **Foregone revenue** — property-tax or other revenue lost when land or property is taken off the tax rolls
- **Lifecycle replacement costs** — eventual replacement of equipment, systems, or the building itself

### Case study: Affordable Housing (AAHRC)
Side-by-side comparison of two affordable housing proposals to illustrate how shared labels can hide different fiscal profiles.

| | Preservation | Production |
|---|---|---|
| Goal | Keep current residents housed | Expand supply of affordable units |
| Outside funding | Limited | Significant (matching funds) |
| New units created | Few or none | Many |
| Long-term operating cost | Ongoing subsidy | Ongoing subsidy |
| Property-tax effect | Reduced (off tax rolls) | Reduced (off tax rolls) |

**Ownership Statement rule:** Any proposal that asks the city to own an asset, subsidize ongoing operations, or forgo future revenue must show both price tags before a vote.

### Key messages
- Free money is not free if Berkeley owns the consequences.
- A home can be affordable to its resident while still creating long-term fiscal obligations for the city.
- The framework does not predetermine which projects to fund. It requires that both price tags be visible before a vote.

---

## No Way to Run a City (`no-way.html`)

### Purpose
Annotated readings of real public documents — budget letters, council memos, audit reports — that illustrate budget discipline failures in practice.

### Format
Each document entry includes:
- Document metadata (author, date, type)
- Selected excerpts with inline annotations
- Framework questions raised by the excerpt
- Optional pull quotes

### Launch content
Mayor Desirée Ishii's June 2026 budget email to Berkeley residents. Annotations examine what the letter says, what it omits, and what framework questions it leaves unanswered.

### Editorial standard
Annotations are analytical, not partisan. They identify omissions and unanswered questions — they do not attribute bad faith.

---

## Failure Modes (`case-studies.html`)

### Purpose
Demonstrate why the framework standards matter by illustrating recurring decision-making failures. Replaces the originally planned Case Studies section.

### Editorial standard
Failure modes are generalized scenarios inspired by real events. They intentionally avoid naming organizations, elected officials, dates, council actions, or dollar amounts. Readers familiar with Berkeley budgeting will recognize many examples; readers elsewhere should recognize the governance patterns. Never use failure modes as personal attacks.

### UI
Accordion. Each row shows: failure mode title · primary framework question · expand/collapse control.

Expanded content: Scenario · Relevant Framework Questions · Key Takeaway · (optional) Pull Quote

### Footer note (display on page)
> These scenarios are intentionally generalized. They are not included to criticize past participants or organizations. They illustrate recurring budgeting challenges faced by many cities. The Framework exists to improve future decisions, not relitigate past ones.

---

### Failure Mode 1 — Could popularity be substituting for prioritization?

**Primary Framework Question:** Higher priority than what?

**Scenario:** A well-organized performing arts organization seeks city assistance to purchase a building. Supporters fill the council chambers and deliver an inspiring live performance. The council approves a public contribution. The performance demonstrates community enthusiasm. It does not answer whether this request ranked ahead of competing unmet needs, whether every similarly worthy organization had access to the same opportunity, or whether public enthusiasm replaced transparent prioritization.

**Relevant Framework Questions:**
- Higher priority than what?
- Is this a core city responsibility?
- Who else should pay?

**Key Takeaway:** Public testimony should inform decisions. It should not become the budgeting system.

---

### Failure Mode 2 — Are we measuring what we funded?

**Primary Framework Question:** Does it work?

**Scenario:** A program receives funding under one stated purpose — for example, workforce development — but later reports primarily different kinds of benefits. Those benefits may still be valuable, but evaluation should measure the outcomes used to justify the appropriation.

**Relevant Framework Questions:**
- Does it work?
- Higher priority than what?
- When should this be reviewed?

**Key Takeaway:** Programs should be evaluated against the purpose used to justify their funding.

---

### Failure Mode 3 — Has the pilot earned continuation?

**Primary Framework Question:** When does it end?

**Scenario:** A city launches a pilot program with the expectation that it will later be evaluated. Before publicly reviewing predetermined success criteria, the pilot receives additional funding and continues operating. The word "pilot" lowered the burden required to begin the program, but no comparable discipline governed the decision to continue it.

**Relevant Framework Questions:**
- When should this end?
- Does it work?
- Higher priority than what?

**Key Takeaway:** A pilot is not truly a pilot unless continuation depends on evidence established before the program begins.

---

### Failure Mode 4 — Does outside funding reduce — or increase — Berkeley's long-term burden?

**Primary Framework Question:** Outside money or outside burden?

**Scenario:** Outside funding appears attractive at first, but it creates ongoing operating costs, staffing needs, maintenance obligations, legal responsibilities, or incentives that increase long-term local commitments.

**Relevant Framework Questions:**
- Outside money or outside burden?
- Who else should pay?
- When should this be reviewed?

**Key Takeaway:** Free money is not free if Berkeley owns the consequences.

---

### Failure Mode 5 — Is Berkeley paying for a regional responsibility?

**Primary Framework Question:** Who else should pay?

**Scenario:** A city funds services addressing a problem extending beyond its own boundaries. Neighboring jurisdictions benefit while local taxpayers bear a disproportionate share of the cost.

**Relevant Framework Questions:**
- Who else should pay?
- Outside money or outside burden?
- Higher priority than what?

**Key Takeaway:** Regional problems deserve regional solutions whenever practical.

---

### Failure Mode 6 — Has the project earned the next dollar?

**Primary Framework Question:** Higher priority than what?

**Scenario:** A major capital project begins with a reasonable objective. As planning, design, or construction proceeds, costs rise substantially beyond the original estimate. Rather than asking whether the expanded project still represents the best use of public funds, each additional appropriation is justified primarily because significant money has already been spent. At every major increase in cost, decision-makers have an opportunity to pause, rescope, redesign, or terminate the project. Continuing should be a conscious decision based on the value of the *next* dollar — not the dollars already invested.

**Relevant Framework Questions:**
- Higher priority than what?
- Does the revised project still justify its cost?
- Should the project be rescoped?
- Is this still the best use of the next public dollar?

**Key Takeaway:** Every major project should include predefined decision gates where "continue" is one option — not the default.

**Pull Quote:** Past spending does not justify future spending.

---

### Failure Mode 7 — Did one decision create unintended future commitments?

**Primary Framework Question:** When does it end?

**Scenario:** A city purchases a building for one intended public purpose despite significant concerns that it will require extensive and costly modifications before it can serve that purpose. When the original plan proves impractical, the city keeps the property rather than reconsidering whether ownership still makes sense. To avoid leaving the building vacant, it leases it at a nominal rate for an entirely different public purpose. What began as a capital investment has quietly evolved into an ongoing operating subsidy. That second decision was never debated on its own merits — it became a consequence of the first.

**Relevant Framework Questions:**
- Does the original decision still make sense?
- Should the city continue owning this asset?
- What alternatives exist, including selling the property?
- Is the ongoing subsidy being evaluated independently?
- Has the project earned the next dollar?

**Key Takeaway:** Every major decision creates new options — not obligations. Cities should periodically ask whether today's best choice is different from yesterday's plan.

**Pull Quote:** Separate the decision to own an asset from the decision to subsidize its use.

---

### Failure Mode 8 — Is one label hiding competing goals?

**Primary Framework Question:** What problem are we actually solving?

**Scenario:** A city debates how to spend affordable housing funds. One proposal preserves below-market housing for a relatively small number of current residents for many years. Another proposal creates new affordable homes and can attract substantial outside matching funds. Both proposals are described as "affordable housing," but they pursue different objectives. Preservation reduces displacement for existing residents. Production expands the supply of affordable homes. Outside matching funds may multiply local dollars, but they may also increase the city's long-term obligations. In addition, permanently affordable housing can reduce future property-tax revenue while residents still receive the full range of municipal services. Those long-term fiscal effects should be evaluated alongside the project's social benefits. The question is not which approach is morally superior. The question is whether policymakers and the public are making an informed choice among competing objectives and understanding the full fiscal consequences of each.

**Relevant Framework Questions:**
- What problem are we actually solving?
- Higher priority than what?
- Outside money or outside burden?
- Who else should pay?
- Does this create a long-term subsidy?
- Does the project reduce future city revenue while increasing service obligations?

**Key Takeaway:** Affordable housing policy should count both sides of the ledger: subsidy cost, outside matching funds, property-tax effects, long-term service obligations, and the number of households helped.

**Pull Quotes:**
> Shared labels should not hide different policy choices.
> A home can be affordable to its resident while still creating long-term fiscal obligations for the city.
> Berkeley should do its fair share. It should not silently assume an unlimited obligation to solve a regional housing shortage if neighboring jurisdictions are not carrying comparable responsibility.

---

## Endorsement (`endorse.html`)

Google Forms only. Every endorsement is manually reviewed — no automatic publication.

**Required fields:** Name · Email · Permission to list publicly

**Optional fields:**
- Signing as: Berkeley resident / business owner / property owner / nonprofit or community organization / current commissioner or elected official / former commissioner or elected official / current city employee / Other
- Neighborhood or Council District
- Display name
- Comment
- Interested in helping

---

## Endorsers (`endorsers.html`)

Public page generated and updated manually. Never auto-sync from Google Forms.

---

## Budget Toolbox (`toolbox.html`)

**Purpose:** Provide residents with useful budgeting resources. Should become the best starting point for anyone wanting to understand Berkeley's finances.

**Categories:**
- Interactive Tools
- Primary Source Documents
- Research
- Data
- Third-party Resources

**Tools:**
- **Berkeley Budget Lab** — Interactive priority-based budgeting using the adopted city budget. Helps residents experience real budget tradeoffs.
- **Berkeley Tax Impact Calculator** — Estimates household impacts of proposed local tax measures. Increases transparency before elections.
- **External Resources** — Third-party tools, dashboards, visualizations (budget explorers, pension dashboards, capital project trackers, nonprofit datasets).

Display note: Listing a resource does not imply endorsement of every conclusion reached by its authors.

---

## Downloads

Provide:
- One-page framework (PDF)
- Full framework (PDF)
- Presentation deck (PDF)

Download links visible throughout the site.

---

## About (`about.html`)

Explains project goals. States clearly: the project promotes a budgeting framework. It does not advocate predetermined budget outcomes.

---

## Versioning

Display framework version on the site. Maintain a changelog.

| Version | Milestone |
|---|---|
| 0.9 | Draft |
| 1.0 | Public Launch |
| 1.1 | Clarifications |
| 1.2 | Hidden Costs page; No Way to Run a City; Failure Modes 7 & 8 added |
| 2.0 | (planned) Case Studies |

---

## Future Roadmap

| Phase | Content |
|---|---|
| 1 | Framework launch · Endorsements · Downloads |
| 2 | Budget Toolbox · Interactive tools |
| 3 | Case studies · Research briefs |
| 4 | Expanded research library · Public presentations · Neighborhood workshops |

---

## Acceptance Criteria

- [ ] Responsive GitHub Pages site
- [ ] Scroll-story homepage
- [ ] Downloadable PDFs
- [ ] Google Forms endorsement workflow
- [ ] Manual endorsement publication
- [ ] Toolbox includes internal and external resources
- [ ] Failure Modes page (8 modes, accordion UI)
- [ ] Hidden Costs page with iceberg visual and AAHRC case study
- [ ] No Way to Run a City page with annotated documents
- [ ] Calm, editorial design
- [ ] Readers leave understanding one central idea: every public dollar should answer the same six questions.
