# Gallery Storage System

This is the working storage model for The Honest Potter gallery. It keeps the
public website tidy while preserving full-quality originals locally.

## Storage Layers

### 1. Private Originals

Use `local-originals/gallery-inbox/` for newly exported phone or camera images.

Suggested batch folder:

```text
local-originals/gallery-inbox/2026-06-02-bowls/
```

Keep these files private and out of normal uploads. They can be large, oddly
named, PNG, HEIC, TIFF, or duplicated while choosing the final set.

### 2. Selected Web Images

Use `images/` only for public, web-ready files that the website actually needs.

Preferred public folders:

```text
images/bowls/
images/vase/
images/mugs/
images/tableware/
images/garden/
images/studio/
images/experiments/
```

Existing folders such as `jugs`, `teapots`, `soap`, `jar`, `coaster`, and
`garlic` can stay for now so the live gallery does not break. New broad category
work should use the preferred public folders unless there is a clear reason to
extend the current structure.

### 3. Gallery Records

Gallery entries live in `js/gallery-data.js`.

Each public piece should have:

- a stable `id`
- a clear `title`
- one public `category`
- a short `detail`
- one or more prepared web image paths
- natural `alt` text

Keep shop/pricing decisions separate until the shop phase is deliberately
restarted.

## Naming Rules

Use lowercase names with underscores:

```text
large_blue_bowl_1.jpeg
large_blue_bowl_2.jpeg
green_flower_vase_1.jpeg
crackle_jug_1.jpeg
```

Avoid spaces, camera filenames, uppercase category folders for new work, and
temporary export names.

## Batch Workflow

1. Export candidate images into a dated folder under `local-originals/gallery-inbox/`.
2. Choose the strongest public photos and remove near-duplicates from the batch.
3. Run the prep helper into the correct public folder.
4. Rename the prepared files if the automatic name is not descriptive enough.
5. Add or update the matching entry in `js/gallery-data.js`.
6. Check the gallery locally on desktop and phone width.
7. Commit only the selected web images, gallery data, and workflow changes.

## Current Tidy-Up Notes

The public image tree still has legacy folders and files:

- `images/Plate/` was renamed to `images/plates/` on 2026-06-02.
- `images/jewlery/` was renamed to `images/jewellery/` on 2026-06-02.
- several old `_notes/` folders are public-site leftovers.
- a few TIFF/JPF/source-like files are still in `images/`.
- some logo trial files are untracked and should stay out of gallery work.

Do not do further folder renames during normal gallery additions. Handle them in
a separate compatibility pass where all references can be updated and tested.
