# Personal Website Implementation Spec (Revised to Match Editorial Minimalism)

## 1. Goal

Build a lightweight, fast, static personal website that feels **calm, minimal, and editorial**—closer to `shud.in` and `blog.woojiahao.com` than a typical portfolio. The site should read like a personal space with clear thinking, not a product catalog of modules.

Primary outcome: a site that compresses identity and thinking into a small surface area, with low friction to read and navigate.

---

## 2. Core Principles (Non‑negotiable)

1. **Homepage = About page**
   - No “landing page” with cards and sections.
   - The homepage is primarily a concise, well-written bio with a few links.

2. **Fewer surfaces, sharper content**
   - Avoid building many UI sections.
   - Prefer fewer pages with stronger writing.

3. **Low UI presence**
   - Minimal visual chrome.
   - No heavy section blocks, no dashboards, no “feature cards everywhere.”

4. **Fast by default**
   - Static pages.
   - Minimal JS.
   - No heavy libraries.

5. **Taste over features**
   - Typography and spacing matter more than components.
   - Decorative graphics are rare, not constant.

---

## 3. Technical Stack

- Framework: Astro
- Language: TypeScript
- Styling: Plain CSS (preferred) or minimal Tailwind
- Content: Markdown via Astro content collections
- Deployment: GitHub Pages (GitHub Actions)

No CMS. No database. No runtime server.

---

## 4. Information Architecture

There is **no traditional header/navbar**.

Navigation is done via simple inline links.

### Pages

- `/` (Home / Bio)
- `/thoughts`
- `/notes`
- `/projects`
- `/resume`

Detail pages:
- `/thoughts/[slug]`
- `/notes/[slug]`
- `/projects/[slug]`

---

## 5. Homepage (Critical)

The homepage should feel like `shud.in`: direct, minimal, text-first.

### Structure (top to bottom)

1. **Name**
   - Large typography

2. **Short descriptor**
   - One line only
   - No fluff (e.g., not “passionate developer”)

3. **Bio (2–3 paragraphs)**
   Must include:
   - tech + school journey
   - what you’re currently interested in
   - one non-tech dimension (city, people, thinking, etc.)

4. **Inline navigation links (simple list or sentence)**
   Example:
   - Thoughts
   - Notes
   - Projects
   - Resume

   These should be simple text links, not cards.

5. **Optional: KL places (very small section)**
   - 3–6 items max
   - Can be text list or tiny visual
   - Do not turn this into a major section

6. **Footer**

### Explicit bans

- No grid of big cards
- No “featured projects” section on homepage
- No hero image
- No heavy graphics

If the homepage starts to look like a SaaS landing page, it is wrong.

---

## 6. Sections

### 6.1 Thoughts

Purpose: show taste and judgment.

Keep it **clean and list-based**, not UI-heavy.

Two types of entries:

#### A. Recommendations
- podcast / blog / article / YouTube

Fields:
- title
- creator
- type
- link
- short note (1–3 lines)

#### B. Reflections
- short essays or thoughts

Fields:
- title
- date
- content

### Page behavior

- Default view: simple chronological list
- Optional: lightweight filter (recommendation vs reflection)

No complex UI.

---

### 6.2 Notes

Purpose: practical thinking.

Examples:
- interview prep
- communication
- technical notes
- composure / emotional regulation

Each note:
- title
- date
- short summary
- content

Display:
- simple list
- optional category tags

No cards. No dashboards.

---

### 6.3 Projects

Split into two groups but keep presentation minimal.

#### Built
- side projects

#### Worked With
- companies / internships

Each entry:
- title or company
- role
- date
- short summary (~100 words)
- optional links

Display as:
- clean list
- minimal metadata

Avoid fake “case study” layouts.

---

## 7. Detail Pages

All detail pages (thoughts, notes, projects) should use the same layout.

### Layout

- Title
- Metadata (date, tags)
- Content
- Advertisement module (if enabled)

No sidebar. No clutter.

---

## 8. Advertisement Module (Open to Work)

### Purpose
A subtle but memorable self-promotion block.

### Rules

- Only appears on **detail pages**
- Controlled by config flag

```ts
export const siteConfig = {
  openToWork: true
}
```

### Tone

- Slightly playful
- Not cringe
- Not loud

### Content example direction

AVAILABLE FOR WORK

Early-career engineer.
Interested in product engineering and thoughtful teams.
Based in Kuala Lumpur, open to remote.

[Email] [Resume]

### Design

- visually distinct but simple
- no bright colors
- no banner-style shouting

---

## 9. Resume

### Requirements

- `/resume` = web version (HTML)
- Download button → `/resume.pdf`

### Design

- extremely clean
- print-friendly
- one-page layout

### Implementation

- Use HTML + CSS
- Add print styles (`@media print`)
- Do NOT use LaTeX unless necessary

---

## 10. Visual System

### Tone

- calm
- restrained
- slightly intellectual

### Typography

- system font stack preferred
- strong hierarchy
- good line spacing

### Colors

- off-white background
- dark gray text
- one muted accent

### Graphics

- halftone / hand-drawn style
- used **rarely**
- not repeated everywhere

### Layout

- narrow reading width
- generous whitespace
- no dense grids

---

## 11. Content Model

Use Astro content collections.

### thoughts

```yaml
title: ""
date: 2026-04-13
type: recommendation # or reflection
creator: ""
sourceUrl: ""
summary: ""
tags: []
```

### notes

```yaml
title: ""
date: 2026-04-13
summary: ""
category: tech
tags: []
```

### projects

```yaml
title: ""
date: 2026-04-13
kind: built # or worked-with
company: ""
role: ""
summary: ""
repoUrl: ""
liveUrl: ""
```

---

## 12. Project Structure

```text
src/
  pages/
    index.astro
    thoughts/
    notes/
    projects/
    resume.astro

  content/
    thoughts/
    notes/
    projects/

  layouts/
    BaseLayout.astro
    ContentLayout.astro

  components/
    Footer.astro
    AdModule.astro
```

Keep structure shallow and simple.

---

## 13. Performance Rules

- No large JS bundles
- No heavy map libraries
- No animation frameworks
- Optimize images
- Prefer SVG

If performance drops, remove features—not optimize endlessly.

---

## 14. Deployment

- GitHub Pages via GitHub Actions
- Works on `<username>.github.io`
- No dependency on custom domain

---

## 15. What This Site Should Feel Like

- A thinking person’s notebook
- Not a job application page
- Not a startup landing page
- Not a design showcase

If it feels overbuilt, it is wrong.

---

## 16. Implementation Instruction (For Codex / Gemini)

Build a minimal Astro-based personal website.

Constraints:
- Text-first design
- Homepage is primarily a bio
- Sections are simple lists
- No heavy UI components
- Markdown-based content
- Static deployment

Focus on clarity, restraint, and maintainability.

Do not overengineer.

