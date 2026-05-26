# The Honest Potter Website Working Plan

## Current Priority

Pause before further feature work and set up proper Git/version control. The gallery improvement is good enough to publish, but the shop work is not ready to go live.

## Stopping Point - 2026-05-24

- The main site files in `/Users/paulallen/Pottery/website_2.0` have been edited directly.
- There is not currently a Git repository in that folder.
- The improved gallery should be considered the first candidate for publishing.
- The new shop page and shop links are useful local work, but they should not be uploaded to the live site yet.
- Tomorrow's first task should be creating a Git repository and separating "safe to publish now" work from "future shop work".

## Publish-Safe Gallery Files

If publishing only the improved gallery before Git is set up, upload these files together:

- `pages/gallery.html`
- `css/gallery.css`
- `js/gallery-data.js`
- `js/gallery.js`

Do not upload the new local `pages/shop.html` yet if the live shop should remain the existing coming-soon page.

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
- Added gallery shop links for marked items. These link directly to matching anchors on `pages/shop.html`.
- Replaced the old shop placeholder with a first real shop page built from the shared gallery data.
- Current main-site shop selection has 12 items. Prices are set to `Enquire` until real prices are provided.

## Recommended Next Steps

1. Create a Git repository in `/Users/paulallen/Pottery/website_2.0`.
2. Make an initial local commit/snapshot of the current folder state.
3. Decide on branches, probably:
   - `main` or `live` for currently safe-to-upload files.
   - `gallery-live` for the improved gallery.
   - `shop-work` for the unfinished shop page and shop-item experiments.
4. Make a clear upload/deploy checklist so only intended files are sent live.
5. Review the selected 27 gallery pieces and decide whether any images should be removed, renamed, or recaptioned.
6. Later, review the 12 pieces marked `shop: true`, then remove or add shop flags as needed.
7. Later, add real prices and dimensions to shop items when ready.

## Recommended Order

0. Git and deployment safety
   - Set up local Git before further website changes.
   - Capture the current state so work can be reverted or compared safely.
   - Separate publish-ready gallery work from unfinished shop work.

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
   - Keep shop changes local until the shop direction is ready.
   - Sort the domain/provider redirect separately.

## Notes From First Inspection

- Existing site is mostly static HTML/CSS with a PHP contact form.
- `pages/gallery.html` has useful content but is long and manual to maintain.
- `pages/shop.html` was originally a coming-soon placeholder; it has now been replaced locally with a prototype shop page, but that local shop should not go live yet.
- There are around 144 image files available under `images/`.
- The safest first prototype is a new gallery page built in the separate `codex-site` folder.
