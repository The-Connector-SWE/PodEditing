# Pod Editing — PodMedia Network

Landing page for **Pod Editing**, PodMedia Network's remote editing & post-production line.
Bilingual (EN / AR with right-to-left layout), static, no build step.

## Structure

| File | Purpose |
| --- | --- |
| `index.html` | Page shell, fonts, meta |
| `styles.css` | All styling (dark theme, brand red `#E31B23`) |
| `app.js` | Copy (EN + AR), pricing data and rendering; language, pricing-tab and FAQ toggles |
| `assets/` | PodMedia logo and studio photography |

Open `?lang=ar` to load the Arabic version directly.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

Static site — deploy as-is to Vercel (framework: Other, no build command) or enable GitHub Pages on the `main` branch root.

## Before launch

- Prices are **proposed** and pending approval; the draft banner was removed for the public build.
- Arabic copy needs native-speaker review.
- The contact form is not wired to a backend yet (see `TODO` in `app.js`).
- Client logo slots are placeholders until logo files are supplied.
