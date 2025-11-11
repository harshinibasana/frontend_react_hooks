# OCU Visitor Relations — Demo Project

This repository contains a small front-end project produced for coursework, demonstrating:

- Part 01: Semantic HTML + external CSS (responsive layout)
- Part 02: Change Password form with client-side validation
- Part 03: Map page designed to use Google Maps JS API + Places Library (requires API key)
- Part 04: SEO & WCAG accessibility features
- Part 05: Instructions for GitHub Pages deployment and required screenshots

## Files
- `index.html` — Home page (SEO and accessibility features applied)
- `form.html` — Change Password page with client-side validation
- `map.html` — Map page (replace YOUR_API_KEY_HERE in the commented script to enable live map)
- `css/style.css` — Stylesheet
- `js/script.js` — Client-side JS for validation and interactions
- `assets/` — images and placeholders (includes the screenshot you supplied)

## How to run locally
1. Download and unzip the project.
2. Open `index.html` in your browser to view the homepage.
3. To enable the map features, obtain a Google Maps JavaScript API key and enable Maps JavaScript API + Places API, then insert your key in `map.html` as shown in the commented script tag.

## Accessibility & SEO notes
- `<title>` and `<meta name="description">` are set for primary pages.
- Images include `alt` text; navigation and interactive elements are keyboard-accessible.
- Color contrast is ensured to be high for primary text; please run Lighthouse or WAVE for additional reports.

## GitHub Pages
To publish on GitHub Pages:
1. Create a repo and push source files.
2. In repository Settings → Pages, select the `main` branch and `/root` or `/docs` folder.
3. Add screenshots to `docs/screens/` (some sample placeholders are included).

## Screenshots included in `docs/screens/`:
- Part01: `home-desktop.png` (sample) — desktop view
- Part02: `form-valid.png` and `form-invalid.png` — form states
- Part03: `map-results.png` — map + cards
- Part04: `lighthouse.png` — placeholder for Lighthouse/WAVE report
- Part05: `deployed.png` — placeholder for deployed site URL

-- End of README


## Adding your images and API key

- Place Grace Helton and Katie Crim images into the `assets/` folder as `grace.jpg` and `katie.jpg` respectively and update `index.html` if needed.
- In `map.html` replace `YOUR_API_KEY_HERE` in the Google Maps script tag with your API key.
- Ensure the Google Cloud project has Maps JavaScript API and Places API enabled and billing configured.
