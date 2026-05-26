# The Honest Potter Website Working Plan

## Current Priority

Git/version control is now set up locally for the real Honest Potter site in `/Users/paulallen/Pottery/website_2.0`.

The current priority is to publish the cleaned site with the improved gallery and a live-safe coming-soon shop page. The full shop prototype is preserved locally for later testing, but the public `pages/shop.html` should remain a simple coming-soon page until the shop is deliberately switched on.

The separate folder `/Users/paulallen/Documents/website` was a mistaken scaffold path and is not the active source of truth for this project.

## Current Git State - 2026-05-26

- Local Git repository created in `/Users/paulallen/Pottery/website_2.0`.
- Baseline snapshot commit: `c33eba2 Initial Honest Potter site snapshot`.
- TODO update commit: `a466986 Update project TODO after Git setup`.
- No GitHub remote has been chosen for this folder yet.
- The existing GitHub repository `ccd1pga/website` currently points to the old mistaken setup and should not be treated as the active website source until it is deliberately replaced or retired.

## Stopping Point - 2026-05-24

- The main site files in `/Users/paulallen/Pottery/website_2.0` have been edited directly.
- A Git repository has since been created in that folder.
- The improved gallery is approved as the next iteration to publish.
- Gallery shop icons are acceptable. They now point to the public `pages/shop.html` coming-soon page.
- The prototype shop page is useful local testing work and is preserved at `codex-site/shop-prototype.html`.
- The public `pages/shop.html` is now a simple coming-soon page so all public navigation can be uploaded safely.
- The next task is following the cleaned-site upload checklist.

## Publish-Safe Site Files

For the cleaned-site next iteration, use `DEPLOY_CHECKLIST.md` and upload the public site files together, including:

- `pages/gallery.html`
- `css/gallery.css`
- `js/gallery-data.js`
- `js/gallery.js`
- `pages/shop.html`

The public `pages/shop.html` is now a coming-soon page. Do not upload `codex-site/shop-prototype.html` or `js/shop.js` until the shop phase is deliberately switched on.

## Gallery Prototype Progress

- Created `codex-site/gallery.html` as a standalone prototype page.
- Added `codex-site/css/gallery.css` for the refreshed gallery layout.
- Added `codex-site/js/gallery-data.js` so pieces are managed as structured data instead of hand-edited repeated HTML.
- Added `codex-site/js/gallery.js` to render cards, category filters, and a larger image viewer.
- Current prototype includes 27 pieces across bowls, vases, studio, experiments, tableware, mugs, and garden.
- Browser checked on desktop and mobile-width preview. Category filters and the larger image viewer work.
- Integrated the gallery into the main site at `pages/gallery.html`, with shared files in `css/gallery.css`, `js/gallery-data.js`, and `js/gallery.js`.
- Browser checked the integrated page from `/pages/gallery.html`: desktop, mobile-width, category filters, and image viewer all work.
- Added stable item IDs and `shop: true` flags to the main `js/gallery-data.js`.
- Added gallery shop links for marked items. These link to the public `pages/shop.html` coming-soon page until the shop phase is ready.
- Replaced the old shop placeholder with a first real shop page built from the shared gallery data.
- The local prototype shop selection has 12 items. Prices are set to `Enquire` until real prices are provided. The prototype is preserved at `codex-site/shop-prototype.html`.

## Recommended Next Steps

1. Use the cleaned-site upload checklist in `DEPLOY_CHECKLIST.md`.
2. Review the current site structure before larger changes:
   - shared navigation/header/footer patterns
   - page naming and folder layout
   - CSS files and duplicated styles
   - JavaScript split between gallery, shop, and general site behavior
   - contact form and deployment requirements
3. Review the selected 27 gallery pieces when there is time, but this is not blocking the next gallery iteration.
4. Later, review the 12 pieces marked `shop: true`, then remove or add shop flags as needed. Placeholder shop items are acceptable while testing.
5. Later, add real prices, dimensions, stock states, and Stripe checkout details when the shop phase begins.

## Recommended Order

0. Git and deployment safety
   - Local Git is now set up.
   - Current state has been captured so work can be reverted or compared safely.
   - Gallery is approved as publish-ready for the next iteration.
   - Shop prototype remains local/testing work.

1. Gallery
   - Organise pieces into clear groups such as bowls, mugs, vases, kitchen/tableware, garden, studio/process, and experiments. First prototype done.
   - Replace the long hand-edited HTML gallery with a cleaner structure that is easier to update. First prototype done.
   - Add larger image viewing so visitors can inspect pieces properly. First prototype done.
   - Improve captions, spelling, alt text, and mobile layout. First pass done; needs owner review.

2. Shop
   - Decide whether the first shop should be simple enquiries/reservations or a full checkout. First version uses enquiries.
   - Reuse the improved gallery structure so selected pieces can become shop items. First version done.
   - Add sold/available/made-to-order states before worrying about payments. First version has available/made-to-order labels.

3. Site polish
   - Fix navigation/current-page states.
   - Correct typos and broken paths.
   - Make footer contact details consistent.
   - Improve the home page once the gallery and shop direction are clearer.

4. Going live
   - Use Git branches or commits to decide exactly what is safe to upload.
   - Upload the improved gallery as a small, deliberate file set.
   - Keep the prototype shop page local until the shop direction is ready.
   - Upload the public coming-soon `pages/shop.html`, but keep the prototype shop files local.
   - Sort the domain/provider redirect separately.

## Notes From First Inspection

- Existing site is mostly static HTML/CSS with a PHP contact form.
- `pages/gallery.html` has useful content but is long and manual to maintain.
- `pages/shop.html` was originally a coming-soon placeholder; it has now been replaced locally with a prototype shop page, but that local shop should not go live yet.
- There are around 144 image files available under `images/`.
- The safest first prototype is a new gallery page built in the separate `codex-site` folder.
