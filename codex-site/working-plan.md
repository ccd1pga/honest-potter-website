# The Honest Potter Website Working Plan

## Current Priority

Git/version control is now set up locally for the real Honest Potter site in `/Users/paulallen/Pottery/website_2.0`.

The cleaned site has now been published to Fasthosts with the improved gallery and a live-safe coming-soon shop page. The full shop prototype is preserved locally for later testing, but the public `pages/shop.html` should remain a simple coming-soon page until the shop is deliberately switched on.

The live contact form has been tested successfully. The contact form now has better email formatting, stronger phone/email/message validation, and clearer error messages. The updated files were uploaded to Fasthosts using rsync/SFTP port `1022`: `contact.php`, `pages/contact.html`, and `css/contact.css`. A normal live test message arrived and the formatted email output looks good.

The gallery pictures/design are good enough for now. The current public shop coming-soon page is also good enough for now. Gallery content, shop item content, and payment/shop functionality are no longer active blockers.

The separate folder `/Users/paulallen/Documents/website` was a mistaken scaffold path and should now be treated as retired. The real site source of truth is this folder only.

## Current Git State - 2026-05-27

- Local Git repository created in `/Users/paulallen/Pottery/website_2.0`.
- Baseline snapshot commit: `c33eba2 Initial Honest Potter site snapshot`.
- TODO update commit: `a466986 Update project TODO after Git setup`.
- Contact formatting commit: `9373042 Improve contact form email formatting`.
- Contact validation commit: `2462ba7 Tighten contact form validation`.
- GitHub remote: `ccd1pga/honest-potter-website`.
- Remote URL: `ssh://git@ssh.github.com:443/ccd1pga/honest-potter-website.git`.
- Public URL: `https://github.com/ccd1pga/honest-potter-website`.
- First push completed on 2026-05-27.
- The existing GitHub repository `ccd1pga/website` points to the old mistaken setup and should now be retired/archived or left as a pointer only.
- GitHub warned that several tracked image files are larger than the recommended 50 MB limit; decide later whether to resize them or move originals out of Git.

## Stopping Point - 2026-05-24

- The main site files in `/Users/paulallen/Pottery/website_2.0` have been edited directly.
- A Git repository has since been created in that folder.
- The improved gallery is approved as the next iteration to publish.
- Gallery shop icons are acceptable. They now point to the public `pages/shop.html` coming-soon page.
- The prototype shop page is useful local testing work and is preserved at `codex-site/shop-prototype.html`.
- The public `pages/shop.html` is now a simple coming-soon page so all public navigation can be uploaded safely.
- The cleaned-site upload has been completed and the live folder structure has been corrected.
- The live contact form was spot-checked successfully after the private mail settings were confirmed.
- Contact form formatting and validation improvements were uploaded on 2026-05-27 using Fasthosts rsync/SFTP port `1022`.
- A normal live test message was sent after upload; the formatted email output was confirmed as good.

## Publish-Safe Site Files

For the cleaned-site next iteration, use `DEPLOY_CHECKLIST.md` and upload the public site files together, including:

- `pages/gallery.html`
- `css/gallery.css`
- `js/gallery-data.js`
- `js/gallery.js`
- `pages/shop.html`

The public `pages/shop.html` is now a coming-soon page. Do not upload `codex-site/shop-prototype.html` or `js/shop.js` until the shop phase is deliberately switched on.

## Live Publish - 2026-05-26

- Published the cleaned public site to Fasthosts.
- Confirmed these live paths return successfully: `/`, `/css/gallery.css`, `/js/gallery.js`, `/images/logo.png`, `/pages/gallery.html`, and `/pages/shop.html`.
- Confirmed the live gallery renders 27 pieces from `js/gallery-data.js` and `js/gallery.js`.
- Removed duplicate loose files left at the server root by the first transfer attempt, while keeping the working `css`, `js`, `images`, `pages`, and `vendor` folders.
- Current live shop page is a coming-soon page. Stripe remains a later shop-phase decision.

## Contact Form - 2026-05-27

- Confirmed the live contact form sends email successfully.
- Improved local email formatting so enquiries arrive as a readable HTML message with a plain-text fallback.
- Added local server-side validation:
  - optional phone number must be exactly 11 digits if provided
  - email must pass normal email validation and rejects common typo domains such as `gamil.com`
  - message is limited to 300 words and 2000 characters
- Added matching browser-side form validation and a live word counter.
- Uploaded files: `contact.php`, `pages/contact.html`, `css/contact.css`.
- Upload attempt from Codex timed out against `ssh.kelvinkilns.com:22`; Fasthosts rsync/SFTP should use port `1022`.
- Retried with port `1022`; upload succeeded. Live checks confirmed `pages/contact.html` and `css/contact.css` contain the new validation UI, and invalid phone/email submissions redirect to the correct errors.
- Normal live message output was confirmed to look good. Email validation catches missing `@` and common typo cases well enough for this stage. Phone number validation works.

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

1. Review oversized tracked image files and decide whether to resize them or move originals out of Git.
2. Review the current site structure before larger changes:
   - shared navigation/header/footer patterns
   - page naming and folder layout
   - CSS files and duplicated styles
   - JavaScript split between gallery, shop, and general site behavior
   - contact form and deployment requirements
3. Later, review gallery/shop content only when the business content matters again.
4. Later, add real prices, dimensions, stock states, and Stripe checkout details when the shop phase begins.

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
