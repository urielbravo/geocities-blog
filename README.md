# Retro Blog

A 90s-styled one-page blog built with [Astro](https://astro.build), rendered
statically with no client framework. Pixel fonts, neon colors, CSS-drawn torch
placeholders and a fake hit counter.

The styles are a static conversion of the
[Retro theme](https://organicthemes.com/retro-theme/) by Organic Themes
(GPL v2+), so the attribution in the footer is deliberate — keep it if you
reuse this.

## Commands

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `bun install`     | Installs dependencies                            |
| `bun dev`         | Starts local dev server at `localhost:4321`      |
| `bun build`       | Builds the production site to `./dist/`          |
| `bun preview`     | Previews the build locally, before deploying     |
| `bun astro ...`   | Runs Astro CLI commands, e.g. `bun astro add`    |

Node 22.12+ is required by Astro, and this repo uses bun as the package manager
(`bun.lock` is committed).

## Project structure

```text
src/
├── layouts/
│   └── BaseLayout.astro     document shell, imports global.css
├── pages/
│   └── index.astro          composes the page from components
├── components/
│   ├── Header.astro         masthead + torches + navigation
│   ├── Navigation.astro     nav, menu toggle
│   ├── MenuItems.astro      recursive menu renderer (<Astro.self>)
│   ├── Torch.astro          CSS-drawn torch placeholder
│   ├── Marquee.astro        scrolling ticker
│   ├── BlogPost.astro       one post: image, meta, body, Read More
│   ├── Pagination.astro
│   ├── Sidebar.astro        composes the widgets below
│   ├── SearchWidget.astro
│   ├── RecentPostsWidget.astro
│   ├── AboutWidget.astro
│   ├── CategoriesWidget.astro
│   ├── VisitorCounterWidget.astro
│   ├── Footer.astro         copyright year + social links
│   ├── *.js                 behaviour for the component above it
│   └── *.css                styles owned by that component
├── data/
│   ├── site.ts              title, tagline, footer attribution
│   ├── menu.ts              nested navigation tree
│   ├── posts.ts             posts + pagination
│   └── sidebar.ts           categories + social links
├── scripts/
│   ├── site.js              drops `no-js`, updates the year
│   └── smooth-scroll.js     `a.scroll` links
└── styles/
    ├── global.css           ordered @imports — see below
    └── *.css                theme-wide CSS, split by the theme's own sections
```

Content lives in `src/data/`, not in the templates. Adding a post means adding
an entry to `posts.ts` — the sidebar and pagination pick it up.

## Styles

`src/styles/global.css` is the only stylesheet the layout imports. It is a list
of `@import`s in a deliberate order: theme sections first, then the
component-owned styles, then `responsive.css` last.

That order is load-bearing. The original single-file stylesheet relied on
source order, so moving a sheet changes which rule wins. `responsive.css` in
particular must stay last — its media queries and `prefers-reduced-motion`
overrides depend on it.

## Conventions

- Components keep their own behaviour in a sibling `.js` file. Import it **inside**
  the `<script>` tag, not in the frontmatter: Astro hoists component scripts into
  their own bundle, so frontmatter imports are not in scope there and the helper
  silently disappears at runtime.
- CSS is unscoped and theme-faithful; the components use the theme's class names
  rather than scoped styles.
- Browser JS is modern ES (no jQuery). Each helper is exported and called from the
  component that owns it, so `document` is already parsed when it runs.