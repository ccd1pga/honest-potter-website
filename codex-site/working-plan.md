# Active Working Plan

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
- The public shop page is a safe coming-soon page and is good enough for now.
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

- Keep the public `pages/shop.html` as coming soon until the shop phase is deliberately restarted.
- Do not upload `codex-site/shop-prototype.html` or `js/shop.js` unless the shop phase is explicitly approved.
- Keep private mail and hosting settings out of Git.
- Review oversized image files before doing another broad push or image-heavy redesign.
- Keep untracked gallery image additions out of uploads until they have names,
  captions, and sensible web sizes.

## Next Phase

The next phase is content quality and shop decisions:

- check the live release after upload
- decide whether Shop stays visible while under construction
- add the new bowl, jug, and vase photos to the gallery deliberately
- improve gallery captions and selected pieces
- establish a repeatable photo/image workflow
- prepare future Studio Notes one article at a time
