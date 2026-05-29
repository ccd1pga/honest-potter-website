# The Honest Potter Deploy Checklist

## Current Safe Upload: Cleaned Site Without Public Shop Navigation

This checklist is for publishing the cleaned site structure, the improved gallery, and the shop paused out of public navigation until selling is ready.

## Upload These Site Files

- `index.html`
- `pages/about.html`
- `pages/contact.html`
- `pages/gallery.html`
- `pages/myKiln.html`
- `pages/privacy.html`
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
- The gallery page shows the improved card layout, filters, and larger image viewer.
- Shop is not linked from the public header, footer, gallery cards, or sitemap.
- `pages/Untitled-11.html` is no longer part of the site.

## Pre-Upload Check

- Confirm Git status is clean or only contains the intended deploy-prep changes.
- Open the site locally and test:
  - homepage
  - about
  - gallery filters and larger image viewer
  - kiln page
  - contact page
  - privacy page
- Confirm local reference scan has no missing page/style/script/image links.
- Confirm Shop is absent from the public header, footer, gallery cards, and sitemap.

## After Upload Check

- Visit the live homepage.
- Click every main navigation link.
- On Gallery, test filters and the image viewer.
- Confirm the deleted duplicate page is not linked anywhere.
- Send a test contact form message only if the live SMTP secrets are already configured correctly.
- Keep a note of uploaded files and date.
