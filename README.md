# Personal Website

Astro-based personal site with one content collection and several MDX-authored top-level pages.

- `src/content/thoughts` for notes and short-form writing

## Structure

```text
/
|-- docs/
|   `-- implementation-spec.md
|-- public/
|-- src/
|   |-- components/
|   |-- content/
|   |-- layouts/
|   |-- lib/
|   |-- pages/
|   `-- styles/
|-- astro.config.mjs
`-- package.json
```

## Content model

- Each markdown file in `src/content/*` is one content entry.
- Collections and frontmatter schema are defined in `src/content.config.ts`.
- Thoughts are individual content entries with their own URLs.
- Homepage, resume, projects, and recommendations are single MDX-authored pages.
- Content filenames should match the `slug` where possible so the repo stays easy to scan.

## What To Edit

- Homepage / About page: `src/pages/index.mdx`
- Resume page: `src/pages/resume.mdx`
- Projects page: `src/pages/projects/index.mdx`
- Recommendations page: `src/pages/recommendations/index.astro`
- Thoughts listing page shell: `src/pages/thoughts/index.astro`
- Individual thought posts: `src/content/thoughts/*.md`
- Global site chrome and page frame: `src/layouts/BaseLayout.astro`
- Long-form MDX page wrapper for homepage and projects: `src/layouts/LongformPageLayout.astro`
- Resume page wrapper: `src/layouts/ResumeLayout.astro`
- Shared global styling: `src/styles/global.css`

## Editing Guide

- To change the homepage bio, intro copy, or contact block, edit `src/pages/index.mdx`.
- To change resume content, edit `src/pages/resume.mdx`.
- To change the projects page, edit `src/pages/projects/index.mdx`.
- To change the recommendations page structure, edit `src/pages/recommendations/index.astro`.
- To change recommendation items, edit `src/data/recommendations.ts`.
- To add a new thought, create a new markdown file in `src/content/thoughts/` with frontmatter.
- To change navigation, separator layout, page shell, or shared spacing, edit `src/layouts/BaseLayout.astro` and `src/components/Navigation.astro`.
- To change typography, colors, spacing, and prose styling across the site, edit `src/styles/global.css`.

## Authoring content

- Add one markdown file per entry under the relevant collection directory.
- Always include a stable `slug` in frontmatter. Change `title` freely, but only change `slug` if you want the public URL to change.
- Keep the markdown filename aligned with the `slug`, for example `writing-solid-commit-messages.md` with `slug: "writing-solid-commit-messages"`.
- Dates are rendered from frontmatter `date`, so keep them in `YYYY-MM-DD` form.

## Commands

- `npm install` installs dependencies
- `npm run dev` starts the local Astro dev server
- `npm run build` builds the site into `dist/`
- `npm run preview` previews the production build locally
