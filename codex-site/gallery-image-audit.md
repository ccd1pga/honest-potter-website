# Gallery Image Audit

Created on 2026-06-02 as the first controlled pass toward a cleaner gallery
storage system.

Cleanup pass completed on 2026-06-02: the 53 no-reference cleanup candidates
were moved into:

```text
local-originals/gallery-archive/2026-06-02-unused-public-images/
```

That archive folder is private/local and ignored by Git. It includes a
`MANIFEST.txt` file listing the moved files.

Compatibility rename pass completed on 2026-06-02:

- `images/Plate/` was renamed to `images/plates/`.
- `images/jewlery/` was renamed to `images/jewellery/`.
- Site and gallery references were updated in the same pass.
- Active gallery filenames with uppercase extensions, obvious typos, or
  inconsistent case were normalized in the same compatibility pass.
- About page image filenames were normalized from `Bisque_1.jpg`,
  `Mosaic_cups.JPG`, and `bowls_1.JPG` to lowercase names.

## Summary

At audit time, the public `images/` folder contained 144 image-like files. After
the cleanup pass, it contains 91 image-like files.

| Bucket | Count | Meaning |
| --- | ---: | --- |
| Gallery-used | 73 | Referenced by `js/gallery-data.js`. |
| Site-used elsewhere | 18 | Not in the gallery data, but used by pages, metadata, favicons, notes, or prototypes. |
| No current references | 53 | Not referenced by the checked site files. These are cleanup candidates, not automatic deletes. |

## Folder Summary

| Folder | Files | Gallery-used | Cleanup candidates | Notes |
| --- | ---: | ---: | ---: | --- |
| `(root)` | 15 | 0 | 15 | Logos, stamps, favicon, social image, and loose leftovers are mixed together. Some are still site-used. |
| `plates` | 10 | 10 | 0 | Gallery-used. Renamed from `Plate` on 2026-06-02. |
| `about` | 5 | 0 | 5 | About page assets, not gallery assets. Keep for now. |
| `bird_house` | 6 | 6 | 0 | Gallery-used. |
| `bisque` | 1 | 0 | 1 | No current reference found. |
| `bowls` | 16 | 11 | 5 | Mostly gallery-used; several unreferenced alternate/new files. |
| `candle` | 1 | 0 | 1 | No current reference found. |
| `coaster` | 14 | 2 | 12 | Two gallery-used; several alternate and TIFF files can be reviewed. |
| `drums` | 6 | 0 | 6 | Studio Notes/About assets, plus two unreferenced alternates. |
| `garden` | 2 | 2 | 0 | Gallery-used. |
| `garlic` | 2 | 2 | 0 | Gallery-used. |
| `glaze` | 4 | 0 | 4 | Studio Notes assets; one file has no current reference. |
| `jar` | 10 | 0 | 10 | No current references found. |
| `jewellery` | 4 | 4 | 0 | Gallery-used. Renamed from `jewlery` on 2026-06-02. |
| `jugs` | 6 | 5 | 1 | Mostly gallery-used; one unreferenced crackle jug image. |
| `kitchen` | 3 | 3 | 0 | Gallery-used. |
| `maths` | 2 | 2 | 0 | Gallery-used. |
| `mugs` | 11 | 7 | 4 | Mostly gallery-used; four unreferenced mug alternates. |
| `soap` | 6 | 2 | 4 | Two gallery-used; black/white alternates are unreferenced. |
| `studio` | 7 | 6 | 1 | Mostly gallery/kiln-used; one camera-named file is unreferenced. |
| `teapots` | 2 | 2 | 0 | Gallery-used. |
| `vase` | 11 | 9 | 2 | Mostly gallery-used; two unreferenced green vase alternates. |

## Site-Used Outside Gallery

These are not referenced by `js/gallery-data.js`, but they are still used by
the site and should not be removed during a gallery-only cleanup:

- `about/bisque_1.jpg`
- `about/bowls_1.jpg`
- `about/mosaic_cups.jpg`
- `about/tools.jpeg`
- `about/white_splash_b.jpg`
- `apple-touch-icon.png`
- `drums/bodhran_glazed.jpeg`
- `drums/closed_drum_throwing_1.jpeg`
- `drums/closed_drum_throwing_3.jpeg`
- `drums/darbuka_bisques.jpeg`
- `favicon.png`
- `glaze/pink1.jpeg`
- `glaze/pink3.jpeg`
- `glaze/pink4.jpeg`
- `kiln_share.jpg`
- `logo_main.png`
- `logo-idea3-cropped.png`
- `logo.png`

## No-Reference Cleanup Candidates

These files had no current references in the checked site files. Treat this as
a review queue: archive first if there is any doubt, especially for pottery
pieces that may become gallery or shop material later.

Largest candidates first:

| Size | File |
| ---: | --- |
| 2.1 MB | `real_stamp.jpeg` |
| 1.5 MB | `logo-idea3.png` |
| 1.4 MB | `candle/candle_hodler_green.JPG` |
| 1.3 MB | `soap/soap_black_a.jpg` |
| 1.3 MB | `logo-idea1.png` |
| 1.2 MB | `logo-idea2.png` |
| 1.1 MB | `soap/soap_white_a.jpg` |
| 855 KB | `glaze/pink2.jpeg` |
| 745 KB | `stamp_logo.png` |
| 668 KB | `bisque/bisque.jpg` |
| 615 KB | `drums/closed_drum_throwing_2.jpeg` |
| 487 KB | `drums/closed_drum_throwing_4.jpeg` |
| 307 KB | `coaster/coaster_flower_a.tiff` |
| 307 KB | `coaster/coaster_flower_b.tiff` |
| 307 KB | `coaster/coaster_rose_a.tiff` |
| 289 KB | `studio/6A81D61A-E712-46CA-A407-2AF257AFE5A6_1_105_c.jpeg` |
| 249 KB | `bowls/Nesting_yellow_2.jpeg` |
| 217 KB | `bowls/Nesting_yellow_3.jpeg` |
| 194 KB | `jugs/Crackle_jug_2.jpeg` |
| 189 KB | `vase/Green_vase.jpeg` |
| 187 KB | `vase/Green_vase_2.jpeg` |
| 170 KB | `bowls/Large_bowl.jpeg` |
| 142 KB | `mugs/mug_2.jpeg` |
| 142 KB | `mugs/mug_b.jpeg` |
| 140 KB | `mugs/mugs_1.jpeg` |
| 140 KB | `mugs/mugs_a.jpeg` |
| 94 KB | `soap/soap_black_a-2.jpeg` |
| 93 KB | `coaster/coaster_yellow_b.jpeg` |
| 86 KB | `coaster/coaster_yellow_a.jpeg` |
| 86 KB | `47F1DBDC-824F-4A5F-8BAF-CFB90E77F5EB_4_5005_c.jpeg` |
| 83 KB | `soap/soap_black_b.jpeg` |
| 56 KB | `stamp_logo copy.jpf` |
| 56 KB | `stamp_logo.jpf` |
| 50 KB | `coaster/coaster_flowers_b.jpeg` |
| 49 KB | `coaster/coaster_blue_flower_a.jpeg` |
| 48 KB | `coaster/coaster_rose_b.jpeg` |
| 46 KB | `coaster/coaster_blue_flower_b.jpeg` |
| 46 KB | `coaster/coaster_rose_a-2.jpeg` |
| 46 KB | `coaster/coaster_flowers_a.jpeg` |
| 45 KB | `jar/lidded_jar_4_b.jpeg` |
| 44 KB | `jar/lidded_jar_4_a.jpeg` |
| 44 KB | `jar/lidded_jar_3_b.jpeg` |
| 44 KB | `jar/lidded_jar_5_b.jpeg` |
| 43 KB | `jar/lidded_jar_3_a.jpeg` |
| 43 KB | `jar/Lidded_jar_2_b.jpeg` |
| 43 KB | `jar/lidded_jar_5_a.jpeg` |
| 41 KB | `jar/lidded_jar_2_a.jpeg` |
| 31 KB | `coaster/coaster_flower_a.jpg` |
| 30 KB | `jar/lidded_jar_a.jpeg` |
| 29 KB | `stamp_logo copy.png` |
| 28 KB | `jar/lidded_jar_b.jpg` |
| 22 KB | `bowls/bowl_1_b.jpeg` |
| 19 KB | `bowls/bowl_1_a.jpg` |

## Recommended Next Pass

Do the cleanup in this order:

1. Move no-reference logo/stamp trial files into `local-originals/logo-source/`
   or delete only after confirming the final logo files are already chosen.
2. Move no-reference pottery alternates into a private archive folder such as
   `local-originals/gallery-archive/2026-06-02-unused-public-images/`.
3. Remove public TIFF/JPF files from `images/` once any useful originals are
   preserved under `local-originals/`.
4. Keep any future folder rename pass separate, with every reference updated in
   one go and the site checked afterwards.

Do not upload cleanup changes until the resulting public gallery and core pages
have been checked locally.
