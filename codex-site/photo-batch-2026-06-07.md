# Photo Batch Notes - 2026-06-07

Source folder:

```text
local-originals/gallery-2026-05-31/
```

This batch is in the right general place for full-size/private source images.
Do not upload this folder as public site content. Make selected web-ready copies
under `images/` only when a photo is chosen for a page, gallery entry, or test
shop item.

## Batch Inventory

### Drum Progression

Folder:

```text
local-originals/gallery-2026-05-31/drums/
```

Current files: 12 source images.

Use for the ceramic drums Studio Notes article. Several web-ready drum images
already exist under `images/drums/`, but the newer bodhran skinning and drying
photos are good candidates for expanding the progression.

Useful next decision:

- use only the strongest public images, not the full progression.

Public selection started:

```text
images/drums/bodhran_skin_drying.jpeg
```

### Studio Project

Folder:

```text
local-originals/gallery-2026-05-31/studio/
```

Current files: 4 source images named `platform_1.jpf` to `platform_4.jpf`.

Use as source material for a future Studio Notes page or article. This is a
hand-built Harry Potter themed bookend, with `Platform 9 3/4` written on the
plate part. The folder name is fine for private originals, but public copies
should get descriptive names once the project title is clear.

Useful next decision:

- decide whether this becomes a Studio Notes progress note, a gallery
  experiment, or stays private until finished.

### Kiln Unloading

Folder:

```text
local-originals/gallery-2026-05-31/kiln/
```

Current files: 3 source images.

Use for the kiln unloading material that was waiting on photos. These are not
public-ready as originals because the filenames include colons and the files
are JPEG 2000 originals.

Public selection started:

```text
images/studio/kiln_unloading_cups.jpeg
```

This replaces the Kiln Hire page holding image.

### Drinking Vessels

Folder:

```text
local-originals/gallery-2026-05-31/drinking/
```

Current files: 10 source images numbered 1-10.

This is a good holding place for the test shop batch. Keep it separate from the
public gallery until shop work is deliberately restarted. Public shop images
should be resized and renamed after the final item numbers, measurements, and
descriptions are agreed.

Shared description:

All ten have a white base glaze with Selsor Chun second glaze dripping down.
Each holds about 200 ml.

Measurements:

| Item | Height | Diameter | Weight | Form note |
| --- | --- | --- | --- | --- |
| 1 | 8 cm | 8 cm | 225 g | Finger dents. |
| 2 | 8 cm | 8 cm | 240 g | Ribbed effect. |
| 3 | 8 cm | 8 cm | 215 g | Finger dents. |
| 4 | 8 cm | 8 cm | 200 g | Ledge near the top. |
| 5 | 8 cm | 8 cm | 215 g | Ledge on the top third. |
| 6 | 8 cm | 8 cm | 215 g | Ledge halfway down. |
| 7 | 8 cm | 7.5 cm | 175 g | Ledge halfway down. |
| 8 | 7.5 cm | 7.5 cm | 180 g | Ledge halfway down. |
| 9 | 8 cm | 8 cm | 195 g | Bulge near the bottom. |
| 10 | 7.5 cm | 7 cm | 210 g | Double ribbed. |

Useful next decision:

- all ten are now included in the local shop sandbox.
- decide the final product titles and prices.
- create Stripe sandbox products, prices, payment links, and shipping rates.

## Workflow Fix Made

`scripts/prepare-gallery-images.sh` now accepts JPEG 2000 source files:

```text
.jp2
.jpf
.jpx
```

This means the new originals can be prepared with the same helper used for the
rest of the gallery once the publish-ready selections are made.
