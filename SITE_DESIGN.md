# Current website and style defaults

The active site consists of a minimal homepage at `/` and the blue professional portfolio at `/portfolio`. The portfolio's existing work, projects, contact and other supporting pages live under `/portfolio/…`. Other paths return to `/`. The writing, beliefs, story, Dreams, accounts, admin and community pages are no longer mounted or built. Their earlier source and Firebase data have not been destroyed.

## Typography for future work

- Family: Inter when available, then `-apple-system`, `BlinkMacSystemFont`, `Segoe UI`, Roboto, sans-serif. System fallbacks avoid an external font download.
- Body: weight 400; links/emphasis: 500; paragraph line-height 1.7.
- Text: `#222222` in light mode, `#e8e8e8` in dark mode.
- Links inherit text color with a fine, muted underline.
- Paragraph spacing: 1.5rem.
- `--content-width: 44rem` (704px). `.text-column` supplies a left-aligned reading layout with 5rem vertical padding for future content.
- Future pages should fit one screen. Use the defaults without adding a scrolling feed or long homepage.

The professional portfolio keeps its blue palette and wider established layout, while using the shared font stack.

## Homepage

Only the portrait and the name are visible as content. The underlined name opens `/portfolio`. A small accessible theme button retains light/dark mode. Backgrounds remain `#fcfcfc` and `#040404`, matching the two existing portraits.

The homepage uses `100svh`, responsive spacing and no document scrolling. A radial alpha mask feathers the portrait's circular perimeter, leaving the face sharp. Both optimized portraits preload and stay mounted, so toggling does not fetch a new image. Reduced-motion preferences disable the entrance animation.

## Development and deployment

```sh
npm ci
npm run dev
npm run lint:site
npm run test:site
npm run build
npm run build:pages-root
```

`Check website` tests the current no-scroll layout, theme, retired-route redirects and professional portfolio. The previous emulator-based platform workflow has been replaced because those pages are no longer part of the active site.

The existing GitHub Pages setup has both a repository-root publication path and an Actions build. `build:pages-root` updates generated entry points and removes only the generated HTML for retired routes. Supporting portfolio routes get their own static entry points; other URLs use the SPA fallback to return home.
