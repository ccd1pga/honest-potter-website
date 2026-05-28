# Site Structure Review

## Snapshot

The Honest Potter site is currently a static HTML/CSS/JavaScript site with a PHP contact form. That is a reasonable structure for the current stage. A full rebuild is not needed before the gallery-only upload.

The main issue is consistency: pages have been built across different passes, so headers, footers, CSS files, links, and scripts are copied by hand and have drifted.

## What Is Working

- The gallery/shop data split is a good direction: `js/gallery-data.js` holds piece data, `js/gallery.js` renders the gallery, and `js/shop.js` renders the local shop prototype.
- The gallery-only publish plan is structurally safe as long as only the checklist files are uploaded.
- The contact form has a clear PHP endpoint and keeps secrets outside the web root.
- The old Dreamweaver `_notes` files and `.DS_Store` files are ignored by Git and not tracked.

## Main Structure Issues Reviewed

### 1. Navigation is copied across pages

Each page has its own hand-written header. The link set and current-page state have drifted.

Cleanup completed:

- `pages/myKiln.html` now marks only My Kiln as current.
- `pages/studio-notes.html` is hidden from visible navigation until the future Studio Notes / glaze-testing page is ready.
- Gallery and shop navigation no longer link to Glazes.
- `pages/privacy.html` now uses the current navigation stylesheet and correct page links.

Remaining recommendation: create one canonical navigation block before major future edits, or move to a small static build step later so shared header/footer markup lives in one place.

### 2. Footer and contact details are inconsistent

There are at least three footer patterns:

- New gallery/shop footer.
- Current `site-footer` used by the older pages.
- An extra inner footer inside `pages/myKiln.html`.

Cleanup completed:

- Repeated `Privacy statment` footer text has been corrected to `Privacy statement`.
- The extra inner footer in `pages/myKiln.html` has been removed.

Remaining recommendation: standardise one exact footer pattern across all live pages before broader design work.

### 3. CSS is split by purpose

Current CSS groups after the shared-shell cleanup:

- `site.css` for theme tokens, base layout, navigation, footer, homepage/About shared sections, buttons, and the cookie banner.
- `gallery.css` for gallery/shop-specific cards, filters, lightbox, and shop components.
- `contact.css` for contact-form-only styles.
- `privacy.css` for privacy-page-only content styling.

Recommended rule: keep shared structure in `site.css`; add page-specific CSS only when the page has a genuinely different component.

### 4. Several broken or stale references exist

Cleanup completed:

- `index.html` now uses `images/logo_main.png`.
- `pages/privacy.html` no longer references missing `navigation_css.css` or `../script.js`.
- The hidden Studio Notes page no longer references missing `../script.js`.
- `pages/about.html` no longer includes the typo `scipt.js`.

An automated local reference scan found no missing local page/style/script/image references after this pass.

### 5. Some pages are unfinished or duplicate

- `pages/studio-notes.html` is a prepared hidden placeholder for the future Studio Notes / glaze testing area.
- `pages/Untitled-11.html` was an older duplicate privacy page and has been removed.
- The local `pages/shop.html` is a useful prototype but is intentionally not live-ready.

Cleanup completed:

- `pages/Untitled-11.html` has been deleted as an accidental duplicate.
- `pages/studio-notes.html` remains hidden from navigation until the first real note is ready.

Remaining recommendation: keep classifying pages as live, prototype, duplicate, or archive before larger structural edits.

## Recommended Path

1. Do not rebuild yet.
2. Proceed with the gallery-only upload using `DEPLOY_CHECKLIST.md` when ready.
3. Structure cleanup pass completed for broken paths, current navigation states, duplicate privacy page, hidden Glazes link, and repeated footer typo.
4. Next, decide whether to introduce a tiny build/include system to avoid hand-copying header/footer into every page.

## Not Recommended Yet

- Do not move to Astro, Next.js, or a larger framework right now.
- Do not restructure the shop until the gallery-only upload and basic site cleanup are done.
- Do not upload the local prototype shop page until the shop direction is deliberately changed.
