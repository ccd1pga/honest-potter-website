# Gallery Image Workflow

Use this when adding a small batch of new pottery photos to the public gallery.
The aim is to keep the gallery tidy without turning every update into a big
project.

The fuller storage model is documented in
`codex-site/gallery-storage-system.md`. In short: keep originals private under
`local-originals/`, put only selected web-ready images in `images/`, and connect
them to the gallery through `js/gallery-data.js`.

## Current Public Categories

Use one of these categories in `js/gallery-data.js` unless a new category is
clearly needed:

- Bowls
- Vases
- Mugs
- Tableware
- Garden
- Studio
- Experiments

For now, keep jugs, teapots, plates, platters, garlic graters, soap dishes,
coasters, ring dishes, and similar useful pieces under `Tableware`. Split that
category later only if it starts to feel crowded.

## Folder And File Names

Put web-ready images in the matching folder under `images/`.

Use lowercase descriptive names with underscores:

```text
images/bowls/large_green_bowl_1.jpeg
images/bowls/large_green_bowl_2.jpeg
images/jugs/crackle_jug_1.jpeg
images/vase/green_flower_vase_1.jpeg
```

Keep original camera files somewhere separate from the normal website workflow.
Only the selected, web-ready images should be used by the gallery.

## Before Adding A Batch

- Choose only the photos that should be public.
- Remove near-duplicates unless a second angle genuinely helps.
- Check that the image is the right way up and sensibly cropped.
- Keep image file sizes reasonable for the web before publishing.
- Give each image a clear filename before linking it from the site.

For a quick local preparation pass, put exported images into a dated private
folder and run:

```text
scripts/prepare-gallery-images.sh local-originals/gallery-inbox/2026-06-02-bowls bowls large_green_bowl
```

This creates JPEG files under `images/bowls/`, resized to a sensible gallery
size. Rename the final files if the automatic numbered names are not descriptive
enough.

## Add The Gallery Entry

Add one object in `js/gallery-data.js` for each piece or set.

Required fields:

```js
{
  id: "large-green-bowl",
  title: "Large green bowl",
  category: "Bowls",
  year: "2026",
  detail: "Wheel-thrown stoneware bowl with a layered green glaze.",
  images: ["../images/bowls/large_green_bowl_1.jpeg"],
  alt: "Large handmade green stoneware bowl"
}
```

Use multiple image paths in `images` when the extra views are useful. Keep the
best image first because it becomes the gallery card image.

## Caption Style

Keep captions plain and specific:

- say what the object is
- mention the material, glaze, form, or use if helpful
- avoid sales language while the shop is paused
- avoid over-explaining experiments; a short honest note is enough

Good:

```text
Large stoneware salad bowl with a soft green exterior and pale interior.
```

Less useful:

```text
Beautiful bowl available now, perfect for any home.
```

## Final Check

Before publishing:

- open the gallery locally
- check the piece appears in the right category
- open the image viewer for the new piece
- check the caption and alt text read naturally
- scan the gallery on a phone-sized view if the batch changes the balance of the page
- publish only when the batch feels coherent

## Shop Later

Do not add public shop links, prices, stock states, or enquiry wording while the
shop is paused. If a piece might become sellable later, keep that decision out
of the public gallery until the selling phase is deliberately restarted.
