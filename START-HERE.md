# Proposal Website Template

This is a clean copy of the proposal website. Its layout, responsive styling, animations, components and local GSAP files are preserved. Client imagery and the downloadable PDF have been removed and replaced with lightweight placeholders, so the project runs without missing-file errors.

## Start locally

1. Install dependencies with `npm install`.
2. Start the site with `npm run dev`.
3. Open the local URL shown in the terminal.

## Replace for a new client

- Update proposal text, dates, contact details and links in `app/page.tsx`.
- Update the page title, description and production URL in `app/layout.tsx`.
- Replace the four placeholder SVG files in `public/` or change their paths in the source.
- For separate desktop and mobile hero images, update the two hero background paths in `app/globals.css`.
- Add the final PDF to `public/`, then restore its filename and `download` attribute on the footer link in `app/page.tsx`.
- Adjust the design tokens at the top of `app/globals.css` for client colours.

## Placeholder files

- `placeholder-hero.svg` — hero and social preview
- `placeholder-logo.svg` — client logo
- `placeholder-mark.svg` — studio/agency mark
- `placeholder-signature.svg` — prepared-by signature
- `loader-logo.svg` — animated loader wordmark

The ZIP intentionally excludes Git history, dependencies, build output, original client images, the original PDF, PDF-generation files and Sites hosting configuration. `vercel.json` remains available for Vercel hosting.
