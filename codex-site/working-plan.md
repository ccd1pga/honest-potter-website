# Active Working Plan

## Shop Launch — 31 August 2026

The first shop release has been approved. It contains the eight one-off HB26
decorative bowls, UK-only Stripe checkout, £4.50 tracked delivery, and public
delivery/returns/breakages terms. The shop remains local until the eight live
Stripe links have been created and inserted, then the whole release can be
published together.

This plan was refreshed on 2026-05-29 after the site structure, About page, and
first Studio Notes article were prepared for upload.

The Honest Potter website is backed by the real GitHub repository:

```text
https://github.com/ccd1pga/honest-potter-website
```

## Current Release

The current coherent release contains:

- a proper homepage instead of a welcome/enter page
- a warmer About page with current studio and pottery images
- a public Studio Notes page with the first pink chrome-tin glaze trial
- shared site CSS for the main shell, footer, navigation, and common sections
- improved mobile layout baseline
- metadata, `robots.txt`, `sitemap.xml`, and footer site links
- reduced tracked image weight for the main site image set

After upload, check the live site on desktop and phone before starting new design
work.

## Completed Foundations

- The real local source folder is `/Users/paulallen/Pottery/website_2.0`.
- The mistaken setup folder `/Users/paulallen/Documents/website` is retired and should not be used for active site work.
- The cleaned site has been published to Fasthosts.
- The gallery design and pictures are good enough for now.
- The first public shop release is prepared locally and awaiting live Stripe links and deployment.
- The contact form has been improved, uploaded, and tested live.
- Fasthosts rsync/SFTP uploads use port `1022`.
- The real site source has been pushed to `ccd1pga/honest-potter-website`.

## Current State

Use the root `TODO.md` for active work:

```text
/Users/paulallen/Pottery/website_2.0/TODO.md
```

Only update the live Fasthosts site when a coherent improvement is worth
publishing. Local experiments, prototypes, and partial design work should stay
local until explicitly selected for release.

## Important Guardrails

- Do not deploy a shop page with blank or test-mode Stripe links.
- Do not upload `codex-site/shop-prototype.html` or `js/shop.js` unless the shop phase is explicitly approved.
- Keep private mail and hosting settings out of Git.
- Review oversized image files before doing another broad push or image-heavy redesign.
- Keep untracked gallery image additions out of uploads until they have names,
  captions, and sensible web sizes.
- Use `codex-site/image-workflow.md` when adding future gallery photo batches.

## Next Phase

The next phase is content quality and shop decisions:

- check the live release after upload
- keep Shop out of public navigation until the selling phase is deliberately restarted
- add the new bowl, jug, and vase photos to the gallery deliberately
- improve gallery captions and selected pieces
- use the repeatable photo/image workflow for future gallery batches
- prepare future Studio Notes one article at a time
