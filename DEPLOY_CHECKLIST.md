# The Honest Potter Deploy Checklist

## Current Safe Upload: Gallery Next Iteration

This checklist is for publishing the improved gallery while keeping the shop as coming soon on the live site.

## Upload These Files Together

- `pages/gallery.html`
- `css/gallery.css`
- `js/gallery-data.js`
- `js/gallery.js`

## Do Not Upload Yet

- `pages/shop.html`
- `js/shop.js`
- Any future Stripe/payment files
- Any unrelated homepage, contact, about, kiln, glaze, or privacy changes

## Expected Live Behaviour

- The gallery page shows the improved card layout, filters, and larger image viewer.
- Gallery cards with shop icons may link to `pages/shop.html`.
- Because the prototype `pages/shop.html` is not uploaded, those links should land on the existing live shop/coming-soon page.
- The local shop prototype remains available for testing placeholder items while the rest of the site is prepared.

## Pre-Upload Check

- Confirm Git status is clean or that only intended checklist changes are present.
- Open `pages/gallery.html` locally and test:
  - category filters
  - larger image viewer
  - mobile-width layout
  - shop-icon links
- Confirm the live server still has the coming-soon shop page before upload if possible.

## After Upload Check

- Visit the live gallery page.
- Test filters and image viewer.
- Click at least one shop icon and confirm it reaches the live coming-soon shop page, not the prototype shop.
- Keep a note of uploaded files and date.
