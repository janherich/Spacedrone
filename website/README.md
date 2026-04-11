# Spacedrone website (Eleventy)

Informational site built from the repo’s markdown. Single source of truth: edit the docs in the repo; the site is generated from them.

## Local development

```bash
# From repo root
npm install
npm run serve
```

Then open http://localhost:8080 (or the URL Eleventy prints).

## Build

```bash
npm run build
```

Output is in `_site/`.

## GitHub Pages

1. In the repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Push to `main` (or run the workflow manually). The workflow builds Eleventy and deploys `_site` to GitHub Pages.
3. Site URL: `https://<username>.github.io/Spacedrone/` (or your custom domain if configured).

## Custom domain

In **Settings → Pages**, set your custom domain. GitHub will show DNS instructions. The site works with or without `pathPrefix`; the workflow sets it for project-pages URLs.

## Structure

- **Content**: Pulled from `README.md`, `5_inch_pyramid_drone/README.md`, `5_inch_hd_pyramid_drone/README.md`, `7_inch_pyramid_drone/README.md`, `7_inch_pyramid_drone/STIFFNESS_COMPARISON.md` via the `contentFromMarkdown` shortcode. Do not duplicate that content in the website folder.
- **Layout & data**: `_includes/base.njk`, `_data/site.json` (nav, title, repo link).
- **Pages**: `index.njk`, `5-inch.njk`, `5-inch-hd.njk`, `7-inch.njk`, `stiffness.njk` — each specifies which markdown file to render and the image base path.
- **Styling**: `assets/css/style.css` (edit freely).
