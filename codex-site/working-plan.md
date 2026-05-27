# Completed Working Plan

This working plan is complete as of 2026-05-27.

The quick Honest Potter website is now live, stable enough for the current public-facing need, and backed by the real GitHub repository:

```text
https://github.com/ccd1pga/honest-potter-website
```

## Completed

- The real local source folder is `/Users/paulallen/Pottery/website_2.0`.
- The mistaken setup folder `/Users/paulallen/Documents/website` is retired and should not be used for active site work.
- The cleaned site has been published to Fasthosts.
- The gallery design and pictures are good enough for now.
- The public shop page is a safe coming-soon page and is good enough for now.
- The contact form has been improved, uploaded, and tested live.
- Fasthosts rsync/SFTP uploads use port `1022`.
- The real site source has been pushed to `ccd1pga/honest-potter-website`.

## Current State

The site is no longer in emergency/mock-up launch mode. Treat the next work as the start of the real site.

Use the root `TODO.md` for active work:

```text
/Users/paulallen/Pottery/website_2.0/TODO.md
```

Only update the live Fasthosts site when a coherent improvement is worth publishing. Local experiments, prototypes, and partial design work should stay local until explicitly selected for release.

## Important Guardrails

- Keep the public `pages/shop.html` as coming soon until the shop phase is deliberately restarted.
- Do not upload `codex-site/shop-prototype.html` or `js/shop.js` unless the shop phase is explicitly approved.
- Keep private mail and hosting settings out of Git.
- Review oversized image files before doing another broad push or image-heavy redesign.

## Next Phase

The next phase is planning and building the real site:

- define the audience and purpose
- make the homepage a strong front door
- unify the design across pages
- clarify navigation, especially kiln hire and shop
- reduce image weight and improve performance
