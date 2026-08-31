# The Honest Potter Deploy Checklist

## Current Release: First Public Shop Collection

Publish the approved eight-bowl shop only after all eight live Stripe checkout
links are present and verified.

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
- `js/shop-data.js`
- `js/shop-public.js`
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
- Dreamweaver `_notes/` folders or `.DS_Store` files

## Expected Live Behaviour

- Navigation links work across the public pages.
- Glazes is hidden from navigation until the glaze testing/blog page is ready.
- The gallery page shows the improved card layout, filters, and larger image viewer.
- Shop is linked from public navigation and the sitemap.
- Each bowl opens its three-image view and its own one-use live Stripe checkout.
- Shop policies show current delivery, returns, breakages, decorative-use,
  privacy, and business-address details.
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
- Confirm all eight links in `js/shop-data.js` are live-mode Stripe links and none contains `/test_`.
- Confirm the shop and policy pages have no `noindex` directive.

## After Upload Check

- Visit the live homepage.
- Click every main navigation link.
- Open all eight bowls and confirm each checkout opens the matching live product and price without completing payment.
- On Gallery, test filters and the image viewer.
- Confirm the deleted duplicate page is not linked anywhere.
- Send a test contact form message only if the live SMTP secrets are already configured correctly.
- Keep a note of uploaded files and date.
