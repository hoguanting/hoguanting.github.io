# Personal Website

Astro-based personal site with three content collections:

- `src/content/projects` for project writeups
- `src/content/thoughts` for notes and short-form writing
- `src/content/recommendations` for books, articles, videos, podcasts, and other recommendations

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
- Recommendations are grouped on the page by `category` and sorted by `date` descending.
- Recommendation entries live in category subfolders such as `src/content/recommendations/articles`.
- Public URLs are driven by the frontmatter `slug`, not by the title or filename.
- Content filenames should match the `slug` where possible so the repo stays easy to scan.

## Authoring content

- Add one markdown file per entry under the relevant collection directory.
- Always include a stable `slug` in frontmatter. Change `title` freely, but only change `slug` if you want the public URL to change.
- Keep the markdown filename aligned with the `slug`, for example `writing-solid-commit-messages.md` with `slug: "writing-solid-commit-messages"`.
- For recommendations, use an existing `category` value from `src/lib/recommendationCategories.ts`.
- Dates are rendered from frontmatter `date`, so keep them in `YYYY-MM-DD` form.

## Commands

- `npm install` installs dependencies
- `npm run dev` starts the local Astro dev server
- `npm run build` builds the site into `dist/`
- `npm run preview` previews the production build locally
