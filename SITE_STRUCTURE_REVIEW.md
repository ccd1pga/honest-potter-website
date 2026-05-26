# Site Structure Review

## Snapshot

The Honest Potter site is currently a static HTML/CSS/JavaScript site with a PHP contact form. That is a reasonable structure for the current stage. A full rebuild is not needed before the gallery-only upload.

The main issue is consistency: pages have been built across different passes, so headers, footers, CSS files, links, and scripts are copied by hand and have drifted.

## What Is Working

- The gallery/shop data split is a good direction: `js/gallery-data.js` holds piece data, `js/gallery.js` renders the gallery, and `js/shop.js` renders the local shop prototype.
- The gallery-only publish plan is structurally safe as long as only the checklist files are uploaded.
- The contact form has a clear PHP endpoint and keeps secrets outside the web root.
- The old Dreamweaver `_notes` files and `.DS_Store` files are ignored by Git and not tracked.

## Main Structure Issues

### 1. Navigation is copied across pages

Each page has its own hand-written header. The link set and current-page state have drifted.

Examples:

- `pages/myKiln.html` marks both My Kiln and Contact as current.
- `pages/glaze.html` marks Gallery, Contact, and Glazes as current.
- `index.html` omits Glazes from the nav, while gallery/shop include it.
- `pages/privacy.html` and `pages/Untitled-11.html` use root links such as `/shop.html` and `/contact.html`, which do not match the current folder structure.

Recommended fix: create one canonical navigation block and copy it carefully into all current pages, or move to a small static build step later so shared header/footer markup lives in one place.

### 2. Footer and contact details are inconsistent

There are at least three footer patterns:

- New gallery/shop footer.
- Current `site-footer` used by the older pages.
- An extra inner footer inside `pages/myKiln.html`.

There are also repeated typos such as `Privacy statment`.

Recommended fix: standardise one footer across live pages before broader design work.

### 3. CSS is split by era rather than purpose

Current CSS groups:

- `theme.css`, `layout.css`, `navigation_new.css` for the older updated pages.
- `gallery.css` for both gallery and shop prototype.
- `style.css` for older privacy/cookie styles.
- `gallery_new.css` appears tied to an unfinished or older Glazes page.

Recommended fix: keep the current files for now, but avoid adding new page-specific CSS unless needed. A later tidy-up could split into:

- base/theme
- layout
- navigation/footer
- forms
- gallery/shop
- page-specific exceptions

### 4. Several broken or stale references exist

Detected examples:

- `index.html` uses `images\logo_main.png`; browser paths should use `/`, so this should become `images/logo_main.png`.
- `pages/privacy.html` and `pages/Untitled-11.html` reference missing `../css/navigation_css.css`.
- `pages/privacy.html`, `pages/Untitled-11.html`, and `pages/glaze.html` reference missing `../script.js`.
- `pages/about.html` has `scipt.js`, which looks like a typo and is not a valid script include.

Recommended fix: do a small link/reference cleanup pass before or after the gallery-only upload. The gallery-only upload itself does not depend on these fixes.

### 5. Some pages are unfinished or duplicate

- `pages/glaze.html` has almost no main content and multiple current nav states.
- `pages/Untitled-11.html` appears to be an older duplicate of privacy content.
- The local `pages/shop.html` is a useful prototype but is intentionally not live-ready.

Recommended fix: classify pages as live, prototype, duplicate, or archive before structural edits.

## Recommended Path

1. Do not rebuild yet.
2. Proceed with the gallery-only upload using `DEPLOY_CHECKLIST.md` when ready.
3. Then make a small structure cleanup pass:
   - fix broken paths and script/style references
   - standardise navigation current states
   - standardise footer text and privacy link spelling
   - remove or archive `pages/Untitled-11.html` if it is confirmed duplicate
   - decide whether `pages/glaze.html` is a real future page or should be hidden for now
4. After that, decide whether to introduce a tiny build/include system to avoid hand-copying header/footer into every page.

## Not Recommended Yet

- Do not move to Astro, Next.js, or a larger framework right now.
- Do not restructure the shop until the gallery-only upload and basic site cleanup are done.
- Do not upload the local prototype shop page until the shop direction is deliberately changed.
