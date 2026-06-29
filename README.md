# hoguanting.github.io

Source code for my personal website, built with [Astro](https://astro.build/) and deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev
npm run build
```

## Project Structure

- `src/pages/index.mdx` - homepage content
- `src/config.ts` - site metadata, links, and section visibility
- `src/layouts/` - shared page layouts
- `src/components/` - reusable Astro components
- `src/styles/global.css` - global styling and typography
- `public/` - static assets copied as-is to the built site
- `.github/workflows/deploy.yml` - GitHub Pages deployment workflow

Hidden sections such as thoughts, projects, recommendations, and the HTML resume route are preserved in the codebase but currently parked through `src/config.ts`.

## Deployment

The site is configured for the default GitHub Pages user site:

```text
https://hoguanting.github.io
```

Pushes to `master` run the GitHub Actions workflow and deploy the generated `dist/` output to GitHub Pages.

## License

The website code is available under the MIT License. Personal content, writing, resume material, images, and other non-code assets are not licensed for reuse without permission.
