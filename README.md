# IS 117005 Portfolio Research

A VitePress research portfolio exploring fast-growing and emerging career options in technology and AI: what roles are called, what people do, which skills appear in job descriptions, and what evidence supports demand claims.

## GitHub Pages

Once GitHub Pages is enabled and the first deployment completes, visit:

**https://jenrique3730.github.io/is117005-portfolio-research/**

This is configured as the VitePress base path in `docs/.vitepress/config.mts`.

## Local development

```sh
npm install
npm run docs:dev
```

Build and preview:

```sh
npm run docs:build
npm run docs:preview
```

## Deploy

The GitHub Actions workflow builds the site on pushes to `main` and deploys it to GitHub Pages. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

## Research sections

- [Career landscape](docs/research/index.md)
- [Role profiles](docs/research/roles.md)
- [NY / NJ job examples](docs/research/jobs.md)
- [Sources and method](docs/research/sources.md)
