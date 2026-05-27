# The Honest Potter Deploy Checklist

## Current Safe Upload: Cleaned Site With Coming-Soon Shop

This checklist is for publishing the cleaned site structure, the improved gallery, and a live-safe coming-soon shop page.

## Upload These Site Files

- `index.html`
- `pages/about.html`
- `pages/contact.html`
- `pages/gallery.html`
- `pages/myKiln.html`
- `pages/privacy.html`
- `pages/shop.html`
- `contact.php`
- `css/`
- `js/gallery-data.js`
- `js/gallery.js`
- `js/script.js`
- `images/`
- `Our-Company-Privacy-Policy.pdf` if still needed by the live site
- `vendor/` if the live contact form depends on the checked-in PHPMailer files

## Do Not Upload These Project/Prototype Files

- `.git/`
- `.gitignore`
- `AGENTS.md`
- `TODO.md`
- `SITE_STRUCTURE_REVIEW.md`
- `DEPLOY_CHECKLIST.md`
- `codex-site/`
- `smtp_test.php`
- `smtp_test.example.php`
- `js/shop.js`
- `composer.json` and `composer.lock` unless the server setup specifically needs them
- Any future Stripe/payment files
- Dreamweaver `_notes/` folders or `.DS_Store` files

## Expected Live Behaviour

- Navigation links work across the public pages.
- Glazes is hidden from navigation until the glaze testing/blog page is ready.
- The gallery page shows the improved card layout, filters, shop icons, and larger image viewer.
- Gallery shop icons link to `pages/shop.html`.
- `pages/shop.html` shows a simple coming-soon page, not the local prototype shop.
- `pages/Untitled-11.html` is no longer part of the site.

## Pre-Upload Check

- Confirm Git status is clean or only contains the intended deploy-prep changes.
- Open the site locally and test:
  - homepage
  - about
  - gallery filters and larger image viewer
  - shop coming-soon page
  - kiln page
  - contact page
  - privacy page
- Confirm local reference scan has no missing page/style/script/image links.
- Confirm `pages/shop.html` is the coming-soon page before upload.

## After Upload Check

- Visit the live homepage.
- Click every main navigation link.
- On Gallery, test filters and the image viewer.
- Click at least one gallery shop icon and confirm it reaches the coming-soon shop page.
- Confirm the deleted duplicate page is not linked anywhere.
- Send a test contact form message only if the live SMTP secrets are already configured correctly.
- Keep a note of uploaded files and date.
