# Homepage-Only Redesign Design

## Summary

The site will move from a multi-section, left-navigation personal website to a homepage-first editorial site. The old sections should remain easy to restore, but they should no longer appear as active public sections.

The new public experience centers on the homepage, a resume PDF link, and a small footer. The current Shu Ding-inspired restraint remains, but the borrowed left navigation structure is removed from the active layout.

## Goals

- Make the homepage the only primary public section.
- Remove the visible left navigation column from the active site shell.
- Keep thoughts, projects, recommendations, and the HTML resume route restorable.
- Show a consistent parked message for disabled section routes.
- Replace the visible HTML resume destination with a direct resume PDF link from the homepage.
- Keep the redesign small, reversible, and aligned with the current Astro structure.

## Non-Goals

- Do not delete the existing section content.
- Do not fully rewrite the content model.
- Do not redesign the hidden section pages in detail.
- Do not introduce a new framework, design system, or routing layer.
- Do not turn the homepage into a large hero/portfolio landing page.

## Public Structure

Active public destinations:

- `/` renders the homepage.
- `/resume.pdf` or the configured PDF href opens the static resume PDF.

Parked destinations:

- `/thoughts`
- `/thoughts/[slug]`
- `/projects`
- `/recommendations`
- `/resume`

Parked destinations should render a simple centered editorial message using the same base visual language as the homepage:

```text
Thoughts

This section is currently hidden.

Back home
```

Individual thought routes should also render the parked message while the thoughts section is disabled. This keeps the disabled section behavior consistent for both list and detail URLs.

## Configuration

Use the existing `src/config.ts` as the single source of truth for site identity, links, section visibility, and the resume PDF path.

Proposed shape:

```ts
export const siteConfig = {
  name: "Guan Ting Ho",
  shortBio: "Building software, reading, and writing.",
  title: "Guan Ting Ho",
  description: "A minimal, editorial personal website.",
  openToWork: true,
  location: "Kuala Lumpur",
  sections: {
    thoughts: false,
    projects: false,
    recommendations: false,
    resumePage: false,
  },
  links: {
    github: "https://github.com/hoguanting",
    linkedin: "https://www.linkedin.com/in/hogt",
    email: "mailto:hogt2005@gmail.com",
    resumePdf: "/resume.pdf",
  },
};
```

The exact property names can follow the surrounding code style, but the visibility decision should live centrally. Re-enabling a section later should be a config change plus any intentional copy/design refresh, not reconstruction from deleted files.

## Layout Direction

The active default layout is centered editorial:

- No left navigation column.
- Main content centered in the viewport.
- Readable width stays close to the current 640px feel.
- Homepage title is slightly larger than the current page title, but not hero-sized.
- Typography remains quiet, text-first, and editorial.
- A small footer appears below the content.
- No top chrome.

Homepage structure:

```text
Guan Ting Ho

I am a software engineer focused on building fast, reliable, and user-centric applications.
...

GitHub  LinkedIn  Email  Resume PDF

© 2026 Guan Ting Ho · Kuala Lumpur
```

The old sidebar-capable structure should remain available in code. `Navigation.astro` should not be deleted. The active shell should simply default to the centered mode.

## Components And Layouts

### `BaseLayout.astro`

`BaseLayout` should render the centered single-column shell by default. It should keep a sidebar/navigation mode available through a prop or future config so the previous structure remains restorable.

Responsibilities:

- document metadata
- global styles and fonts
- centered page frame
- optional sidebar/navigation mode for future restoration
- optional footer

### `LongformPageLayout.astro`

Keep using this for homepage-style content. Adjust spacing and title sizing so it matches the centered editorial shell.

Responsibilities:

- page heading
- optional intro
- prose wrapper
- slot content

### `ParkedSection.astro`

Add a small shared component or layout for disabled sections.

Responsibilities:

- accept section title
- render a short hidden message
- provide a home link
- use the same centered editorial shell and footer

### Section Pages

Each parked section route should check `siteConfig.sections`.

Behavior:

- if enabled, render the original section content
- if disabled, render `ParkedSection`

This keeps the source close to the route it belongs to and makes restoration obvious.

The individual thought route should check the thoughts section flag before rendering post content. When thoughts are disabled, any thought detail URL should render `ParkedSection` instead of the article body.

### Homepage

The homepage keeps the current biography-centered content. Its link row should point to:

- GitHub
- LinkedIn
- Email
- Resume PDF

It should not link to the HTML `/resume` page.

## Resume Handling

The HTML resume page is no longer part of the visible site direction. The preferred public resume destination is a PDF asset linked from the homepage.

Implementation should avoid deleting the existing resume page immediately. It can render a parked message while `resumePage` is disabled, which keeps the route behavior consistent with other parked sections.

The actual PDF file should live in `public/` at the configured path, for example:

```text
public/resume.pdf
```

If the PDF is not present during implementation, the link path can still be wired to config, but verification must note the missing asset.

## Visual Details

Keep the current restrained palette:

- off-white page background
- near-black body text
- muted secondary text
- subtle border color where needed
- coral/copper accent for hover states

Avoid adding a decorative hero, cards, gradients, or a marketing-style layout. The redesign is a trimming pass, not a visual expansion.

## Behavior

- Homepage renders without left navigation or reserved sidebar spacing.
- Parked routes render a hidden-section message.
- Footer appears on homepage and parked pages.
- Navigation component remains in the codebase but is not visible in the active homepage-only mode.
- Restoring thoughts, projects, or recommendations later should be controlled through config.

## Verification Plan

- Run the Astro build.
- Check `/` for centered content and no left-navigation spacing.
- Check `/thoughts`, `/projects`, `/recommendations`, and `/resume` for parked messages.
- Check that the homepage resume link points to the configured PDF href.
- Check mobile width so the link row and footer wrap cleanly.
